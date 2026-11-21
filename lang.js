// ============================================================
// Interface language: 繁體中文 (zh) / English (en)
// ------------------------------------------------------------
// t(key, vars)  -> string in the current language, {name} filled in
// applyLang()   -> writes every [data-i18n] / [data-i18n-html] element
// setLang(l)    -> saves the choice and re-renders the live screen
//
// The Chinese table is the source of truth: a key missing from `en`
// falls back to the Chinese text instead of showing the raw key.
// ============================================================

const TRANSLATIONS = {
  zh: {
    "doc.title": "吹水王 - Party Game",
    "header.title": "🗣️ 吹水王",
    "header.demo": "💡 遊戲示例",
    "header.lang": "EN",

    "setup.title": "設定遊戲",
    "setup.deckCount": "目前題庫共有 {n} 道題目",
    "setup.players": "玩家人數 (3 - 10 人):",
    "setup.difficulty": "選擇題目難度:",
    "diff.1": "難度一：明確提示 (1個真提示)",
    "diff.2": "難度二：障眼法 (1個真提示 + 2個假提示)",
    "diff.3": "難度三：終極考驗 (完全無提示)",
    "setup.start": "生成題目與角色",

    "public.title": "📢 本局題目公佈",
    "public.sub": "請所有人共同觀看題目與提示：",
    "public.wordLabel": "題目詞彙",
    "public.hintsLabel": "分類 / 關聯提示",
    "public.ready": "記下題目了嗎？準備好後開始傳遞手機！",
    "public.back": "⚙️ 返回設定頁",
    "public.reroll": "🔄 換一題",
    "public.startPass": "開始傳遞裝置",
    "public.noHints": "（本局為難度三：無任何提示）",

    "pass.title": "請交給 玩家 {n}",
    "pass.warning": "⚠️ 提示：請確保其他玩家看不到螢幕！",
    "pass.reveal": "查看我的身分與細節",

    "role.titlePrefix": "你的身分：",
    "role.guesser": "🎯 答題者",
    "role.truth": "😇 老實人",
    "role.liar": "🗣️ 吹水王",
    "role.guesserDesc": "你本局不需要說話與編造，只需聆聽其他人的解釋並找出誰在講真話！",
    "role.truthDesc": "請根據下方真實簡介向答題者解釋，努力贏得信任！",
    "role.liarDesc": "你只知道題目詞彙與公開的提示！請發揮想像力，編造一個聽起來極為合理的假解釋！",
    "role.wordLabel": "題目詞彙：",
    "role.descLabel": "真實簡介（僅老實人可見）：",
    "role.hintsLabel": "參考提示：",
    "role.guideLabel": "吹水小貼士（請詳細閱讀以模擬老實人讀題時間）：",
    "role.guideText": "發揮想像力！發言時保持自信且眼神堅定，適當加入生活情境或科學專業術語來增加可信度。切記不要猶豫太久，順著參考提示開頭，說得越自然越像真話！",
    "role.goodLuck": "祝你好運！",
    "role.next": "看完並隱藏（交給下一位）",

    "disc.title": "🎉 所有人已完成查看！",
    "disc.wordLabel": "本局題目",
    "disc.instruction": "請<b>「答題者」</b>選擇一位玩家，並由他開始，依序解釋詞彙的意思。",
    "disc.liarLine": "<b>吹水王們：</b>憑空發揮，一本正經地胡說八道！",
    "disc.truthLine": "<b>老實人：</b>順暢講出真實意思，贏得信任！",
    "disc.guesserLine": "<b>答題者：</b>仔細聆聽並提出質疑，找出老實人！",
    "disc.reveal": "揭曉答案與身分",

    "reveal.title": "🔍 正確答案揭曉",
    "reveal.guesserLabel": "🎯 <b>答題者：</b>",
    "reveal.truthLabel": "😇 <b>老實人：</b>",
    "reveal.player": "玩家 {n}",
    "reveal.restart": "下一局",

    "tip.heading": "覺得好玩？請我飲杯咖啡 ☕",
    "tip.btn": "💙 Support me on Ko-fi",
    "tip.collapse": "收起打賞面板",

    "alert.players": "請輸入 3 至 10 之間的玩家人數！"
  },

  en: {
    "doc.title": "Bluff Master - Party Game",
    "header.title": "🗣️ Bluff Master",
    "header.demo": "💡 Demo",
    "header.lang": "中文",

    "setup.title": "Set up a game",
    "setup.deckCount": "Question deck: {n} questions",
    "setup.players": "Players (3 - 10):",
    "setup.difficulty": "Difficulty:",
    "diff.1": "Level 1 · One true hint",
    "diff.2": "Level 2 · One true hint + two decoys",
    "diff.3": "Level 3 · No hints at all",
    "setup.start": "Draw the word and roles",

    "public.title": "📢 This round's word",
    "public.sub": "Everyone reads this together:",
    "public.wordLabel": "The word",
    "public.hintsLabel": "Category / hints",
    "public.ready": "Got it? Now start passing the phone.",
    "public.back": "⚙️ Back to setup",
    "public.reroll": "🔄 Reroll",
    "public.startPass": "Start passing",
    "public.noHints": "(Level 3 — no hints this round)",

    "pass.title": "Pass the phone to Player {n}",
    "pass.warning": "⚠️ Keep the screen out of everyone else's sight!",
    "pass.reveal": "Show my role",

    "role.titlePrefix": "You are:\u00A0",
    "role.guesser": "🎯 Guesser",
    "role.truth": "😇 Truth-teller",
    "role.liar": "🗣️ Bluffer",
    "role.guesserDesc": "You don't speak or invent anything this round. Listen to every explanation and work out who is telling the truth.",
    "role.truthDesc": "Use the real definition below to explain the word, and make the guesser believe you.",
    "role.liarDesc": "You only have the word and the public hints. Invent an explanation that sounds completely plausible.",
    "role.wordLabel": "The word:",
    "role.descLabel": "Real definition (truth-teller only):",
    "role.hintsLabel": "Hints you can use:",
    "role.guideLabel": "Bluffing tips (read slowly, so it looks like you're reading):",
    "role.guideText": "Make it up. Keep your voice steady and your eyes on the guesser, and drop in everyday detail or a technical term to sound credible. Don't stall — start from a hint and let it run. The smoother it sounds, the more they believe it.",
    "role.goodLuck": "Good luck.",
    "role.next": "Hide and pass on",

    "disc.title": "🎉 Everyone's seen their card",
    "disc.wordLabel": "This round",
    "disc.instruction": "The <b>guesser</b> picks a player to start. From there, everyone explains the word in turn.",
    "disc.liarLine": "<b>Bluffers:</b> invent freely, and keep a straight face.",
    "disc.truthLine": "<b>Truth-teller:</b> tell it straight and earn their trust.",
    "disc.guesserLine": "<b>Guesser:</b> listen closely, push back, find the truth-teller.",
    "disc.reveal": "Reveal the answer and roles",

    "reveal.title": "🔍 The answer",
    "reveal.guesserLabel": "🎯 <b>Guesser:</b> ",
    "reveal.truthLabel": "😇 <b>Truth-teller:</b> ",
    "reveal.player": "Player {n}",
    "reveal.restart": "Next round",

    "tip.heading": "Having fun? Buy me a coffee ☕",
    "tip.btn": "💙 Support me on Ko-fi",
    "tip.collapse": "Hide this panel",

    "alert.players": "Player count has to be between 3 and 10."
  }
};

const LANG_STORAGE_KEY = "bluffmaster-lang";
let currentLang = "zh";

function t(key, vars) {
  const table = TRANSLATIONS[currentLang] || TRANSLATIONS.zh;
  let str = table[key];
  if (str === undefined) str = TRANSLATIONS.zh[key];
  if (str === undefined) str = key;

  if (vars) {
    Object.keys(vars).forEach(name => {
      str = str.split("{" + name + "}").join(vars[name]);
    });
  }
  return str;
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });

  document.title = t("doc.title");
  document.documentElement.lang = currentLang === "zh" ? "zh-HK" : "en";

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.textContent = t("header.lang");
    langBtn.setAttribute("aria-label", currentLang === "zh" ? "Switch to English" : "切換至中文");
  }
}

// Called by the language button; app.js answers with refreshScreenText()
function setLang(lang) {
  currentLang = lang === "en" ? "en" : "zh";
  try {
    localStorage.setItem(LANG_STORAGE_KEY, currentLang);
  } catch (e) {
    // private mode: keep the choice for this session only
  }
  if (typeof refreshScreenText === "function") {
    refreshScreenText();
  } else {
    applyLang();
  }
}

function toggleLang() {
  setLang(currentLang === "zh" ? "en" : "zh");
}

(function initLang() {
  let saved = "zh";
  try {
    saved = localStorage.getItem(LANG_STORAGE_KEY) || "zh";
  } catch (e) {
    saved = "zh";
  }
  currentLang = saved === "en" ? "en" : "zh";

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) langBtn.addEventListener("click", toggleLang);
  applyLang();
})();
