/* Ava — GrowthWithMBA website chat widget (v1)
 *
 * Dependency-free vanilla JS. Add one script tag + the stylesheet:
 *   <link rel="stylesheet" href="/ava-widget.css">
 *   <script src="/ava-widget.js" data-ava-api="/api/ava/chat"></script>
 *
 * Optional: set window.AVA_CHAT_API before this script loads to override
 * the chat endpoint. data-ava-api on the script tag works too.
 * All styling hooks are prefixed with "ava-" to avoid collisions.
 */
(function () {
  "use strict";

  var currentScript = document.currentScript;
  var API_URL =
    (typeof window !== "undefined" && window.AVA_CHAT_API) ||
    (currentScript && currentScript.getAttribute("data-ava-api")) ||
    "/api/ava/chat";
  var WHATSAPP_NUMBER = "923212594511"; // Muhammad's business WhatsApp: +92 321-2594511
  var EMAIL = "growthwithmba@gmail.com";
  var STORAGE_KEY = "ava_conversation_v1";
  var STAGES = ["greet", "discovery", "mapping", "qualification", "proof", "capture", "handoff"];

  var state = {
    messages: [], // { role: "user" | "assistant", text: string }
    stage: "greet",
    verdict: "ongoing",
    done: false,
    leadBrief: null,
    busy: false,
  };

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function el(tag, className, html) {
    var n = document.createElement(tag);
    if (className) n.className = className;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function save() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          messages: state.messages.slice(-40),
          stage: state.stage,
          verdict: state.verdict,
          done: state.done,
          leadBrief: state.leadBrief,
        })
      );
    } catch (e) { /* storage unavailable (private mode) — chat still works for the session */ }
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      var d = JSON.parse(raw);
      if (!d || !Array.isArray(d.messages)) return false;
      state.messages = d.messages;
      state.stage = d.stage || "greet";
      state.verdict = d.verdict || "ongoing";
      state.done = !!d.done;
      state.leadBrief = d.leadBrief || null;
      return state.messages.length > 0;
    } catch (e) {
      return false;
    }
  }

  /* ---------- DOM ---------- */

  var bubble, panel, messagesBox, quickBox, input, sendBtn, progressLabel, progressFill, inputRow;

  function build() {
    bubble = el(
      "button",
      "ava-bubble",
      '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg><span class="ava-bubble-dot"></span>'
    );
    bubble.setAttribute("aria-label", "Chat with Ava");

    panel = el("div", "ava-panel ava-hidden");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Chat with Ava, the GrowthWithMBA assistant");

    var header = el(
      "div",
      "ava-header",
      '<div class="ava-header-text"><div class="ava-header-name">Ava</div>' +
        '<div class="ava-header-sub">GrowthWithMBA assistant · replies instantly</div></div>' +
        '<button class="ava-close" aria-label="Close chat">&times;</button>'
    );

    var progress = el(
      "div",
      "ava-progress",
      '<div class="ava-progress-track"><div class="ava-progress-fill"></div></div>' +
        '<div class="ava-progress-label"></div>'
    );
    progressLabel = progress.querySelector(".ava-progress-label");
    progressFill = progress.querySelector(".ava-progress-fill");

    messagesBox = el("div", "ava-messages");
    quickBox = el("div", "ava-quickreplies");

    inputRow = el("div", "ava-inputrow");
    input = el("input", "ava-input");
    input.type = "text";
    input.placeholder = "Type your message…";
    input.setAttribute("aria-label", "Type your message");
    input.autocomplete = "off";
    sendBtn = el("button", "ava-send", "Send");
    sendBtn.type = "button";
    inputRow.appendChild(input);
    inputRow.appendChild(sendBtn);

    panel.appendChild(header);
    panel.appendChild(progress);
    panel.appendChild(messagesBox);
    panel.appendChild(quickBox);
    panel.appendChild(inputRow);

    document.body.appendChild(bubble);
    document.body.appendChild(panel);

    bubble.addEventListener("click", toggle);
    header.querySelector(".ava-close").addEventListener("click", toggle);
    sendBtn.addEventListener("click", submitInput);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") submitInput();
    });
  }

  function toggle() {
    var opening = panel.classList.contains("ava-hidden");
    panel.classList.toggle("ava-hidden", !opening);
    bubble.classList.toggle("ava-open", opening);
    if (opening) setTimeout(function () { input.focus(); }, 50);
  }

  /* ---------- rendering ---------- */

  function stageIndex(stage) {
    var i = STAGES.indexOf(stage);
    return i === -1 ? 0 : i;
  }

  function updateProgress() {
    var idx = stageIndex(state.stage);
    var pct = Math.round(((idx + 1) / STAGES.length) * 100);
    progressFill.style.width = pct + "%";
    progressLabel.textContent = state.done ? "Conversation complete" : "Step " + (idx + 1) + " of " + STAGES.length;
  }

  function renderAll() {
    messagesBox.innerHTML = "";
    state.messages.forEach(function (m) {
      messagesBox.appendChild(messageNode(m));
    });
    if (state.done && state.leadBrief) renderBrief();
    updateProgress();
    scrollDown();
    inputRow.style.display = state.done ? "none" : "flex";
    if (state.done) quickBox.innerHTML = "";
  }

  function messageNode(m) {
    var wrap = el("div", "ava-msg ava-msg-" + (m.role === "user" ? "user" : "ava"));
    var b = el("div", "ava-bubble-text", esc(m.text).replace(/\n/g, "<br>"));
    wrap.appendChild(b);
    return wrap;
  }

  function addMessage(role, text) {
    state.messages.push({ role: role, text: text });
    messagesBox.appendChild(messageNode({ role: role, text: text }));
    scrollDown();
    save();
  }

  function scrollDown() {
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  function showTyping() {
    var t = el("div", "ava-msg ava-msg-ava ava-typing", '<div class="ava-bubble-text"><span></span><span></span><span></span></div>');
    t.id = "ava-typing";
    messagesBox.appendChild(t);
    scrollDown();
  }

  function hideTyping() {
    var t = document.getElementById("ava-typing");
    if (t) t.remove();
  }

  function renderQuickReplies(list) {
    quickBox.innerHTML = "";
    (list || []).slice(0, 3).forEach(function (q) {
      var b = el("button", "ava-chip", esc(q));
      b.type = "button";
      b.addEventListener("click", function () {
        quickBox.innerHTML = "";
        sendUserMessage(q);
      });
      quickBox.appendChild(b);
    });
  }

  function renderBrief() {
    var card = el("div", "ava-brief");
    card.appendChild(el("div", "ava-brief-title", "Your brief is ready"));
    card.appendChild(el("div", "ava-brief-text", esc(state.leadBrief).replace(/\n/g, "<br>")));

    var waBrief = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(state.leadBrief);
    var waChat =
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" +
      encodeURIComponent("Hi Muhammad, I just spoke with Ava on your website and I'd like to discuss my project.");

    var btn1 = el("a", "ava-btn ava-btn-primary", "Send brief to Muhammad on WhatsApp");
    btn1.href = waBrief;
    btn1.target = "_blank";
    btn1.rel = "noopener";
    var btn2 = el("a", "ava-btn", "Continue on WhatsApp");
    btn2.href = waChat;
    btn2.target = "_blank";
    btn2.rel = "noopener";
    var mail = el(
      "div",
      "ava-brief-mail",
      'Prefer email? Write to <a href="mailto:' + EMAIL + '">' + EMAIL + "</a>"
    );

    card.appendChild(btn1);
    card.appendChild(btn2);
    card.appendChild(mail);
    messagesBox.appendChild(card);
    scrollDown();
  }

  function renderError(text) {
    var n = el("div", "ava-error", esc(text) + ' <button type="button" class="ava-retry">Try again</button>');
    n.querySelector(".ava-retry").addEventListener("click", function () {
      n.remove();
      callApi();
    });
    messagesBox.appendChild(n);
    scrollDown();
  }

  /* ---------- chat flow ---------- */

  function submitInput() {
    var v = input.value.trim();
    if (!v || state.busy || state.done) return;
    input.value = "";
    quickBox.innerHTML = "";
    sendUserMessage(v);
  }

  function sendUserMessage(text) {
    addMessage("user", text);
    callApi();
  }

  function apiPayload(stream) {
    return JSON.stringify({
      messages: state.messages.map(function (m) {
        return { role: m.role, text: m.text };
      }),
      stream: !!stream,
    });
  }

  var streamState = null; // { node, text } while a streamed reply is arriving

  function startStreamBubble() {
    hideTyping();
    var wrap = el("div", "ava-msg ava-msg-ava");
    var b = el("div", "ava-bubble-text", "");
    wrap.appendChild(b);
    messagesBox.appendChild(wrap);
    scrollDown();
    streamState = { node: b, text: "" };
  }

  function appendStreamText(delta) {
    if (!streamState) startStreamBubble();
    streamState.text += delta;
    streamState.node.innerHTML = esc(streamState.text).replace(/\n/g, "<br>");
    scrollDown();
  }

  function finishStream(meta) {
    var full = streamState ? streamState.text : "";
    streamState = null;
    hideTyping();
    state.busy = false;
    if (!full && !meta) {
      renderError("Something went wrong sending your message.");
      return;
    }
    if (full) state.messages.push({ role: "assistant", text: full });
    if (meta && typeof meta === "object") {
      state.stage = meta.stage || state.stage;
      state.verdict = meta.verdict || "ongoing";
      state.done = !!meta.done;
      if (meta.leadBrief) state.leadBrief = meta.leadBrief;
      updateProgress();
      if (state.done) {
        quickBox.innerHTML = "";
        inputRow.style.display = "none";
        if (state.leadBrief) renderBrief();
        progressLabel.textContent = "Conversation complete";
      } else {
        renderQuickReplies(meta.quickReplies);
      }
    }
    save();
  }

  function readStream(reader) {
    var decoder = new TextDecoder();
    var buf = "";
    var meta = null;
    function pump() {
      return reader.read().then(function (step) {
        if (step.done) {
          finishStream(meta);
          return;
        }
        buf += decoder.decode(step.value, { stream: true });
        var parts = buf.split("\n\n");
        buf = parts.pop();
        for (var i = 0; i < parts.length; i++) {
          var line = parts[i].trim();
          if (line.indexOf("data:") !== 0) continue;
          var payload = line.slice(5).trim();
          if (payload === "[DONE]") {
            finishStream(meta);
            return;
          }
          try {
            var evt = JSON.parse(payload);
            if (evt && typeof evt.delta === "string") appendStreamText(evt.delta);
            else if (evt && evt.meta) meta = evt.meta;
            else if (evt && evt.error) {
              streamState = null;
              hideTyping();
              state.busy = false;
              renderError(evt.error);
              return;
            }
          } catch (e) { /* ignore malformed chunk */ }
        }
        return pump();
      });
    }
    // If the stream breaks mid-way, keep whatever arrived.
    return pump().catch(function () {
      finishStream(meta);
    });
  }

  function callApiJson() {
    // Non-streaming fallback (older browsers, proxies that buffer SSE, etc.)
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: apiPayload(false),
    })
      .then(function (res) {
        return res.json().catch(function () { return null; }).then(function (data) {
          if (!res.ok) {
            var err = new Error((data && data.error) || "Something went wrong sending your message.");
            err.isServerMessage = !!(data && data.error);
            throw err;
          }
          return data;
        });
      })
      .then(function (data) {
        hideTyping();
        state.busy = false;
        if (data.error) {
          renderError(data.error);
          return;
        }
        addMessage("assistant", data.reply || "Could you say that another way?");
        state.stage = data.stage || state.stage;
        state.verdict = data.verdict || "ongoing";
        state.done = !!data.done;
        if (data.leadBrief) state.leadBrief = data.leadBrief;
        updateProgress();
        if (state.done) {
          quickBox.innerHTML = "";
          inputRow.style.display = "none";
          if (state.leadBrief) renderBrief();
          progressLabel.textContent = "Conversation complete";
        } else {
          renderQuickReplies(data.quickReplies);
        }
        save();
      })
      .catch(function (e) {
        hideTyping();
        state.busy = false;
        renderError(e && e.isServerMessage ? e.message : "Something went wrong sending your message.");
      });
  }

  function callApi() {
    if (state.busy) return;
    state.busy = true;
    showTyping();

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "text/event-stream" },
      body: apiPayload(true),
    })
      .then(function (res) {
        var ct = res.headers.get("content-type") || "";
        if (!res.ok || ct.indexOf("text/event-stream") < 0 || !res.body || typeof res.body.getReader !== "function") {
          throw new Error("fallback-to-json");
        }
        return readStream(res.body.getReader());
      })
      .catch(function () {
        // Streaming unavailable or failed before the first byte: use the JSON fallback.
        // (If a stream already started, readStream finalizes it on its own.)
        if (!streamState) callApiJson();
      });
  }

  /* ---------- init ---------- */

  function init() {
    build();
    var restored = load();
    if (restored) {
      renderAll();
    } else {
      updateProgress();
      callApi(); // empty history → server sends the stage-1 greeting
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
