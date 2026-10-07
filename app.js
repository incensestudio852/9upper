// 題庫資料結構：含有 1 個正確提示（realHint）、2 個假幹擾提示（fakeHints）、詞彙與簡介
// 提示詞設計原則：使用空泛大範圍（如「天文學」「動物」），讓 9upper 有更大發揮空間
const quizBank = [
  {
    word: "烏爾帝國王棋",
    realHint: "歷史文物",
    fakeHints: ["軍事武器", "宗教法器"],
    desc: "1920年代於美索不達米亞發現的古老雙人博弈遊戲，歷史超過四千年，是已知最古老且仍能遊玩的桌遊之一。"
  },
  {
    word: "卡爾達肖夫指數",
    realHint: "天文學",
    fakeHints: ["數學公式", "地質學"],
    desc: "一種根據宇宙文明可以利用的能源總量，來衡量該文明技術先進程度的等級劃分方法。"
  },
  {
    word: "費米悖論",
    realHint: "天文學",
    fakeHints: ["物理學定律", "經濟學"],
    desc: "闡述對地外文明存在性的高估計與缺乏相關證據或接觸之間的強烈矛盾。"
  },
  {
    word: "安提基特拉機械",
    realHint: "考古文物",
    fakeHints: ["航海儀器", "工業機械"],
    desc: "古希臘時期用於計算天體運行的青銅手搖式天文儀器，被譽為史上第一台模擬計算機。"
  },
  {
    word: "契訶夫之槍",
    realHint: "文學理論",
    fakeHints: ["軍事武器", "心理學"],
    desc: "戲劇與文學創作原則，主張故事中出現的每個元素都必須有其必要性，第一幕出現的槍後續必須發射。"
  },
  {
    word: "帕斯卡賭注",
    realHint: "哲學思想",
    fakeHints: ["數學概率", "金融投資"],
    desc: "哲學家帕斯卡提出的論證，認為理性的人應該相信上帝存在，因為潛在收益無限而風險極低。"
  },
  {
    word: "死人頭蛾",
    realHint: "昆蟲",
    fakeHints: ["毒藥", "雕刻藝術"],
    desc: "一種胸部背板上有類似人類頭骨紋路圖案的蛾類，主要分布於歐洲與非洲。"
  },
  {
    word: "巴拿姆效應",
    realHint: "心理學",
    fakeHints: ["視覺藝術", "物理學"],
    desc: "心理學現象，指人們容易認為一種籠統、廣泛的模糊描述極為精準地符合自己。"
  },
  {
    word: "奧卡姆剃刀",
    realHint: "哲學思想",
    fakeHints: ["醫療工具", "古代刑具"],
    desc: "哲學與科學推理原則，主張在對同一現象有多種解釋時，假設最少、最簡單的解釋通常最合理。"
  },
  {
    word: "克拉馬角",
    realHint: "建築",
    fakeHints: ["地理學", "軍事防禦"],
    desc: "古希臘建築風格中的一種柱式裝飾，源自植物捲曲葉片的結構美學。"
  },
  {
    word: "達克效應",
    realHint: "心理學",
    fakeHints: ["物理學", "經濟學"],
    desc: "一種認知偏差現象，指能力不足的人因無法客觀評估自己，因而產生盲目自信；而能力過人者則傾向低估自己的能力。"
  },
  {
    word: "羅塞塔石碑",
    realHint: "考古文物",
    fakeHints: ["天文學", "宗教文物"],
    desc: "製作於公元前196年的古埃及石碑，刻有三種對照文字，是現代學者破解古埃及象形文字的關鍵。"
  },
  {
    word: "薛丁格的貓",
    realHint: "物理學",
    fakeHints: ["童話故事", "生物學"],
    desc: "物理學家薛丁格提出的思想實驗，用以闡述量子力學中微觀粒子處於疊加態的概念。"
  },
  {
    word: "伏尼契手稿",
    realHint: "歷史文物",
    fakeHints: ["音樂樂譜", "地理地圖"],
    desc: "一份撰寫於15世紀的神秘手稿，書中使用未知文字和符號，並繪有大量的奇怪植物與天文插圖，至今無人破解。"
  },
  {
    word: "納斯卡線",
    realHint: "考古遺跡",
    fakeHints: ["軍事防禦", "地質現象"],
    desc: "位於秘魯納斯卡沙漠上的巨大地面圖案，包含數百個幾何圖形與動物圖樣，需從空中俯瞰才能看清全貌。"
  },
  {
    word: "打生樁",
    realHint: "民俗",
    fakeHints: ["武術", "農業"],
    desc: "東亞古代修橋築城時的一種辟邪民俗，指在動工前將活人或其物品埋入地基中，祈求工程順利與建築穩固。"
  },
  {
    word: "極限燙衣",
    realHint: "運動",
    fakeHints: ["工藝", "家務"],
    desc: "一種結合極限運動與家務勞動的極限競技，參賽者帶著燙衣板前往懸崖、海底或高空等極端環境中進行燙衣服挑戰。"
  },
  {
    word: "海鳥號",
    realHint: "歷史謎團",
    fakeHints: ["神話傳說", "海軍"],
    desc: "18世紀發現於美國海灘的無人漂流船，被發現時船上物資齊備，連咖啡都還在爐上沸騰，但所有船員均憑空失蹤。"
  },
  {
    word: "女兒牆",
    realHint: "建築",
    fakeHints: ["傳統習俗", "育兒設施"],
    desc: "指建築物屋頂外圍或陽台邊緣所設的矮牆，主要起到安全防護、防止人員墜落以及阻隔雨水侵蝕的作用。"
  },
  {
    word: "祖父悖論",
    realHint: "哲學思想",
    fakeHints: ["法律", "倫理學"],
    desc: "關於時間旅行的著名邏輯悖論，指若有人回到過去並在父親出生前殺死親祖父，將導致自己無法出生，進而無法回到過去殺死祖父。"
  },
  // ===== 以下為新增題目 =====
  {
    word: "弄蝶毛毛蟲",
    realHint: "動物",
    fakeHints: ["植物", "建築"],
    desc: "一種昆蟲幼蟲，會將糞便以高速彈射到體長38倍遠（約1.5米）的距離外，目的是消除氣味痕跡，讓寄生蜂、螞蟻等天敵無法循氣味找到牠的藏身處。"
  },
  {
    word: "特雷門琴",
    realHint: "樂器",
    fakeHints: ["通信設備", "醫療儀器"],
    desc: "一種電子樂器，1920年由蘇聯發明家列夫·特雷門發明。演奏者不需觸碰樂器，透過手與兩根天線的距離改變電容來控制音高與音量。"
  },
  {
    word: "巴拿赫-塔斯基悖論",
    realHint: "數學",
    fakeHints: ["物理學", "哲學"],
    desc: "1924年提出的數學定理，指出在三維空間中，可以將一個實心球分成有限部分，僅通過旋轉和平移重新組合，就能得到兩個與原球半徑相同的完整球體。因違反直覺而被稱為悖論。"
  },
  {
    word: "仙女圈",
    realHint: "自然現象",
    fakeHints: ["外星遺跡", "真菌病害"],
    desc: "納米比亞草原上數千個直徑2至12米的圓形裸地，周圍草長得較高，成因至今仍有爭議，有白蟻活動、植物水分競爭等假說。"
  },
];


// 遊戲狀態變數
let playerCount = 4;
let selectedDifficulty = 1;
let currentTurnIndex = 0;
let roles = []; // 'guesser', 'truth', 'liar'
let currentTopic = null;

// DOM 元素
const screens = {
  setup: document.getElementById("setup-screen"),
  publicTopic: document.getElementById("public-topic-screen"),
  pass: document.getElementById("pass-screen"),
  role: document.getElementById("role-screen"),
  discussion: document.getElementById("discussion-screen"),
  revealAll: document.getElementById("reveal-all-screen")
};

// 切換畫面
function showScreen(screenName) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[screenName].classList.add("active");
}

// 顯示題庫題數
document.getElementById("question-count").innerText = quizBank.length;

// 步驟 1 -> 步驟 2: 設定人數、難度並抽取題目與生成提示
document.getElementById("start-btn").addEventListener("click", () => {
  const countInput = document.getElementById("player-count");
  const diffInput = document.getElementById("difficulty-select");

  playerCount = parseInt(countInput.value);
  selectedDifficulty = parseInt(diffInput.value);

  if (isNaN(playerCount) || playerCount < 3 || playerCount > 10) {
    alert("請輸入 3 至 10 之間的玩家人數！");
    return;
  }

  // 隨機選題
  currentTopic = quizBank[Math.floor(Math.random() * quizBank.length)];

  // 根據難度生成提示標籤
  const hintsContainer = document.getElementById("public-hints");
  hintsContainer.innerHTML = "";

  let displayedHints = [];

  if (selectedDifficulty === 1) {
    // 難度一：1 個真提示
    displayedHints = [currentTopic.realHint];
  } else if (selectedDifficulty === 2) {
    // 難度二：1 個真提示 + 2 個假提示（隨機打亂）
    displayedHints = [currentTopic.realHint, ...currentTopic.fakeHints];
    displayedHints.sort(() => Math.random() - 0.5);
  } else {
    // 難度三：完全無提示
    displayedHints = [];
  }

  // 渲染提示
  if (displayedHints.length > 0) {
    displayedHints.forEach(hint => {
      const span = document.createElement("span");
      span.className = "tag";
      span.innerText = hint;
      hintsContainer.appendChild(span);
    });
  } else {
    hintsContainer.innerHTML = `<span class="no-hint">（本局為難度三：無任何提示）</span>`;
  }

  document.getElementById("public-word").innerText = currentTopic.word;

  // 生成身分列表 (1 個答題者, 1 個真話者, 其餘為 9upper)
  roles = Array(playerCount).fill("liar");
  roles[0] = "guesser";
  roles[1] = "truth";

  // 洗牌身份
  roles.sort(() => Math.random() - 0.5);

  showScreen("publicTopic");
});

// 步驟 2 -> 步驟 3: 開始傳遞裝置
document.getElementById("start-pass-btn").addEventListener("click", () => {
  currentTurnIndex = 0;
  prepareTurnScreen();
});

// 準備下一位玩家畫面
function prepareTurnScreen() {
  document.getElementById("player-turn-title").innerText = `請交給 玩家 ${currentTurnIndex + 1}`;
  showScreen("pass");
}

// 揭曉目前玩家身分與詳細內容
document.getElementById("reveal-btn").addEventListener("click", () => {
  const role = roles[currentTurnIndex];
  const roleTitle = document.getElementById("role-title");
  const roleDesc = document.getElementById("role-desc");
  const wordElem = document.getElementById("topic-word");
  const descContainer = document.getElementById("explanation-container");
  const descElem = document.getElementById("topic-desc");

  wordElem.innerText = currentTopic.word;

  if (role === "guesser") {
    roleTitle.innerText = "你的身分：🎯 答題者";
    roleDesc.innerText = "你本局不需要說話與編造，只需聆聽其他人的解釋並找出誰在講真話！";
    descContainer.style.display = "none";
  } else if (role === "truth") {
    roleTitle.innerText = "你的身分：😇 真話者";
    roleDesc.innerText = "請根據下方真實簡介向答題者解釋，努力贏得信任！";
    descContainer.style.display = "block";
    descElem.innerText = currentTopic.desc;
  } else { // liar
    roleTitle.innerText = "你的身分：🗣️ 9upper (吹水王)";
    roleDesc.innerText = "你只知道題目詞彙與公開的提示！請發揮想像力，編造一個聽起來極為合理的假解釋！";
    descContainer.style.display = "none";
  }

  showScreen("role");
});

// 切換至下一個人或進入討論階段
document.getElementById("next-player-btn").addEventListener("click", () => {
  currentTurnIndex++;
  if (currentTurnIndex < playerCount) {
    prepareTurnScreen();
  } else {
    showScreen("discussion");
  }
});

// 最終揭曉答案
document.getElementById("show-answer-btn").addEventListener("click", () => {
  document.getElementById("final-word").innerText = currentTopic.word;
  document.getElementById("final-desc").innerText = currentTopic.desc;

  const guesserIndex = roles.indexOf("guesser") + 1;
  const truthIndex = roles.indexOf("truth") + 1;

  document.getElementById("final-guesser").innerText = `玩家 ${guesserIndex}`;
  document.getElementById("final-truth-teller").innerText = `玩家 ${truthIndex}`;

  showScreen("revealAll");
});

// 重新開始
document.getElementById("restart-btn").addEventListener("click", () => {
  showScreen("setup");
});
