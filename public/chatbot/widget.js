/*
  ============================================================
  SAINTE-ANGÈLE CHATBOT — WIDGET ENGINE
  ============================================================
  You should NOT need to edit this file to update the bot's
  answers — edit content.js instead.

  This file only needs editing if you want to change how the
  bot LOOKS or BEHAVES (not what it says).
  ============================================================
*/

(function () {
  "use strict";

  // ---------- Text matching helpers ----------

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip accents
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  const STOPWORDS = new Set([
    "the", "a", "an", "is", "are", "do", "does", "did", "i", "you", "we",
    "to", "of", "for", "in", "on", "at", "and", "or", "my", "me", "can",
    "what", "when", "where", "who", "how", "please", "it", "this", "that"
  ]);

  function tokenize(text) {
    return normalize(text)
      .split(" ")
      .filter(function (w) { return w.length > 0 && !STOPWORDS.has(w); });
  }

  // Jaccard similarity between token sets, plus a substring bonus
  function similarity(inputTokens, candidateTokens, inputRaw, candidateRaw) {
    const setA = new Set(inputTokens);
    const setB = new Set(candidateTokens);
    if (setA.size === 0 || setB.size === 0) return 0;

    let intersection = 0;
    setA.forEach(function (t) { if (setB.has(t)) intersection++; });
    const union = new Set([].concat(inputTokens, candidateTokens)).size;
    let score = intersection / union;

    // Bonus if the whole candidate phrase appears inside the input, or vice versa
    if (candidateRaw && inputRaw) {
      if (inputRaw.includes(candidateRaw) || candidateRaw.includes(inputRaw)) {
        score += 0.35;
      }
    }
    return score;
  }

  function findBestAnswer(userInput, faqs) {
    const inputNorm = normalize(userInput);
    const inputTokens = tokenize(userInput);

    let best = { score: 0, answer: null };

    faqs.forEach(function (faq) {
      faq.questions.forEach(function (q) {
        const qNorm = normalize(q);
        const qTokens = tokenize(q);
        const score = similarity(inputTokens, qTokens, inputNorm, qNorm);
        if (score > best.score) {
          best = { score: score, answer: faq.answer };
        }
      });
    });

    const THRESHOLD = 0.28;
    if (best.score >= THRESHOLD) {
      return best.answer;
    }
    return null;
  }

  // ---------- UI construction ----------

  function buildWidget(content) {
    const root = document.createElement("div");
    root.id = "sa-chatbot-root";
    root.innerHTML =
      '<button id="sa-chat-toggle" aria-label="Open chat">' +
        '<span class="sa-chat-icon-open">💬</span>' +
        '<span class="sa-chat-icon-close">✕</span>' +
      '</button>' +
      '<div id="sa-chat-window" class="sa-hidden">' +
        '<div class="sa-chat-header">' +
          '<div class="sa-chat-header-title">' + content.church.shortName + '</div>' +
          '<div class="sa-chat-header-subtitle">Parish Assistant</div>' +
        '</div>' +
        '<div id="sa-chat-messages" class="sa-chat-messages"></div>' +
        '<div id="sa-chat-suggestions" class="sa-chat-suggestions"></div>' +
        '<form id="sa-chat-form" class="sa-chat-form">' +
          '<input id="sa-chat-input" type="text" autocomplete="off" placeholder="Type your question..." aria-label="Type your question" />' +
          '<button type="submit" aria-label="Send">➤</button>' +
        '</form>' +
      '</div>';
    document.body.appendChild(root);
    return root;
  }

  function addMessage(container, text, sender) {
    const msg = document.createElement("div");
    msg.className = "sa-msg sa-msg-" + sender;
    const bubble = document.createElement("div");
    bubble.className = "sa-bubble";
    // Preserve line breaks written in content.js answers
    text.split("\n").forEach(function (line, i) {
      if (i > 0) bubble.appendChild(document.createElement("br"));
      bubble.appendChild(document.createTextNode(line));
    });
    msg.appendChild(bubble);
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }

  function addTypingIndicator(container) {
    const msg = document.createElement("div");
    msg.className = "sa-msg sa-msg-bot sa-typing";
    msg.id = "sa-typing-indicator";
    msg.innerHTML = '<div class="sa-bubble"><span></span><span></span><span></span></div>';
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }

  function removeTypingIndicator(container) {
    const el = document.getElementById("sa-typing-indicator");
    if (el) container.removeChild(el);
  }

  function detectLanguage(allContent) {
    const path = window.location.pathname.toLowerCase();
    const segments = path.split("/").filter(Boolean); // e.g. ["fr", "about"]
    const first = segments[0];
    if (first && allContent[first]) return first;

    // Fallback: check the <html lang="..."> attribute
    const htmlLang = (document.documentElement.lang || "").slice(0, 2).toLowerCase();
    if (htmlLang && allContent[htmlLang]) return htmlLang;

    return "en"; // default
  }

  function init() {
    const allContent = window.SAINTE_ANGELE_CONTENT;
    if (!allContent) {
      console.error("Sainte-Angèle chatbot: content.js not loaded.");
      return;
    }

    const lang = detectLanguage(allContent);
    const content = allContent[lang] || allContent.en;

    const root = buildWidget(content);
    const toggleBtn = root.querySelector("#sa-chat-toggle");
    const chatWindow = root.querySelector("#sa-chat-window");
    const messagesEl = root.querySelector("#sa-chat-messages");
    const suggestionsEl = root.querySelector("#sa-chat-suggestions");
    const form = root.querySelector("#sa-chat-form");
    const input = root.querySelector("#sa-chat-input");

    let opened = false;

    function openChat() {
      chatWindow.classList.remove("sa-hidden");
      toggleBtn.classList.add("sa-open");
      if (!opened) {
        opened = true;
        addMessage(messagesEl, content.greeting, "bot");
        renderSuggestions();
      }
      input.focus();
    }

    function closeChat() {
      chatWindow.classList.add("sa-hidden");
      toggleBtn.classList.remove("sa-open");
    }

    toggleBtn.addEventListener("click", function () {
      if (chatWindow.classList.contains("sa-hidden")) {
        openChat();
      } else {
        closeChat();
      }
    });

    function renderSuggestions() {
      suggestionsEl.innerHTML = "";
      (content.suggestedQuestions || []).forEach(function (q) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "sa-suggestion-chip";
        chip.textContent = q;
        chip.addEventListener("click", function () {
          handleUserMessage(q);
        });
        suggestionsEl.appendChild(chip);
      });
    }

    function handleUserMessage(text) {
      text = text.trim();
      if (!text) return;

      addMessage(messagesEl, text, "user");
      input.value = "";
      suggestionsEl.innerHTML = "";

      addTypingIndicator(messagesEl);

      // Small delay so it feels conversational rather than instant/robotic
      setTimeout(function () {
        removeTypingIndicator(messagesEl);
        const answer = findBestAnswer(text, content.faqs);
        addMessage(messagesEl, answer || content.fallback, "bot");
      }, 450);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      handleUserMessage(input.value);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
