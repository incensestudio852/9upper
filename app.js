// ============================================================
// 【出題原則】（重要！新增題目時務必遵循）
// ------------------------------------------------------------
// 1. 題目應「冷門」且「字意反差」與「與字面理解不同」，讓玩家有更大發揮空間。
// 2. 提示詞應為「空泛大範圍」。
// 3. 每題需有 1 個 realHint（真提示）與 2 個 fakeHints（假幹擾提示），以及一段 desc（真實簡介）。
// 4. 避免字面容易聯想到色情或噁心的詞彙。
// ============================================================

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
    word: "那伽",
    realHint: "神話",
    fakeHints: ["生物", "地理"],
    desc: "泰寮湄公河流域民間信仰中的守護神獸，形象為頭戴冠冕的蛇形水神，棲息於湄公河底，執掌河流與降水。2021年泰國政府正式確立其為國家象徵。"
  },
  {
    word: "卡峇雅",
    realHint: "服飾",
    fakeHints: ["建築", "音樂"],
    desc: "東南亞女性傳統服飾，前開襟長袖上衣配精緻刺繡。2024年由印尼、馬來西亞、新加坡、文萊、泰國五國聯合申遺成功，列入聯合國教科文組織人類非物質文化遺產名錄。"
  },
  {
    word: "格羅麻",
    realHint: "紡織",
    fakeHints: ["飲食", "農業"],
    desc: "柬埔寨傳統棉質或絹質織物，典型紅白或黑白格紋，用途極廣，可作頭巾、腰帶、圍巾、兒童吊床等。2018年一條近1150米長的格羅麻創下吉尼斯世界紀錄。"
  },
  {
    word: "南塔妮",
    realHint: "民俗傳說",
    fakeHints: ["植物學", "動物學"],
    desc: "泰國民間信仰中的女鬼/樹精，棲息於野蕉叢中，外表為綠膚年輕女子，腳不沾地，滿月夜現身。傳說流傳於泰國、老撾、柬埔寨。"
  },
  {
    word: "拉普拉斯的惡魔",
    realHint: "物理學",
    fakeHints: ["神話傳說", "恐怖文學"],
    desc: "1814年由法國數學家拉普拉斯提出的思想實驗：若有一個智者知曉宇宙中每個原子的確切位置和動量，便能推演過去與未來的一切。後世稱為「拉普拉斯的惡魔」。"
  },
  {
    word: "布里丹之驢",
    realHint: "哲學思想",
    fakeHints: ["動物學", "農業"],
    desc: "以14世紀法國哲學家布里丹命名的悖論：一隻完全理性的驢處於兩堆等量等質的乾草中間，因無法決定先吃哪堆而餓死。此悖論挑戰了絕對理性選擇的可行性。"
  },
  {
    word: "卡珊德拉效應",
    realHint: "心理學",
    fakeHints: ["神話", "文學"],
    desc: "源於希臘神話：卡珊德拉被阿波羅賜予預言能力，卻因拒絕其求愛而被詛咒「無人相信其預言」。後世指代發出正當警告卻不被他人相信的現象。"
  },
  {
    word: "波莉安娜效應",
    realHint: "心理學",
    fakeHints: ["文學", "音樂"],
    desc: "又稱「樂觀原則」，指人們傾向注意和加工積極信息，即使面對困難也樂觀地相信一切會好轉。名稱源自小說《波莉安娜》中的樂觀女孩角色。"
  },
  {
    word: "齊夫定律",
    realHint: "語言學",
    fakeHints: ["數學", "經濟學"],
    desc: "1949年哈佛語言學家齊夫發表的實驗定律：在自然語言中，一個單詞出現的頻率與它在頻率表中的排名成反比。即第2高頻詞約為第1高頻詞的一半，第n高頻詞約為第1高頻詞的1/n。"
  },
  {
    word: "皮格馬利翁效應",
    realHint: "心理學",
    fakeHints: ["神話", "藝術"],
    desc: "又稱「期望效應」，由心理學家羅森塔爾實驗驗證：教育者的真誠期望和信任會使學習者的行為逐漸接近預期。名稱源於希臘神話中愛上自己雕塑的國王皮格馬利翁。"
  },
  {
    word: "黑暗森林法則",
    realHint: "科幻文學",
    fakeHints: ["生態學", "軍事"],
    desc: "劉慈欣《三體》系列中的宇宙社會學理論。基於生存是文明首要目標、宇宙物質總量不變兩條公理，加上猜疑鏈與技術爆炸假設，推導出文明間「發現即毀滅」的黑暗森林狀態。"
  },
  {
    word: "蒸汽朋克",
    realHint: "文學流派",
    fakeHints: ["音樂", "建築"],
    desc: "1980年代由美國科幻作家K.W. Jeter創造的科幻流派，融合維多利亞時代蒸汽工業文明與朋克文化。典型元素包括齒輪、鉚釘、蒸汽機車、飛艇，代表作有《差分機》《天空之城》。"
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
  {
    word: "奧帕茨",
    realHint: "考古",
    fakeHints: ["地理", "生物"],
    desc: "英文「OOPArt」（Out of Place Artifact）的音譯，指出現在考古或古生物記錄中、與所在地層時代不相符合的出土物，例如被誤讀為「法老直升機」的埃及聖書體雕刻。"
  },
  {
    word: "奧伯斯佯謬",
    realHint: "天文學",
    fakeHints: ["數學", "光學"],
    desc: "1823年由德國天文學家奧伯斯提出的佯謬：如果宇宙是無限、均勻且永恆的，夜空應該被無數恆星的光照亮，但實際上夜空是黑暗的。此矛盾後來以宇宙膨脹與有限年齡來解釋。"
  },
  {
    word: "麥高芬",
    realHint: "電影",
    fakeHints: ["文學", "軍事"],
    desc: "由導演希區考克推廣的電影敘事術語，指故事中推動情節發展、但本身內容並不重要的元素，例如間諜片中的機密文件或寶物，角色們爭相追逐，觀眾卻不需知道它到底是什麼。"
  },
  {
    word: "中文房間",
    realHint: "哲學思想",
    fakeHints: ["建築", "語言學"],
    desc: "1980年哲學家約翰·瑟爾提出的思想實驗，用以反駁強人工智慧：一個不懂中文的人被關在房間裡，依照規則手冊回應中文紙條，外界卻以為他懂中文。瑟爾主張這說明「符號操作」並不等於真正的理解。"
  },
  {
    word: "球形奶牛",
    realHint: "科學哲學",
    fakeHints: ["農業", "物理實驗"],
    desc: "一個幽默比喻，形容科學研究中為簡化複雜現象而建立的過度簡化模型。源於一則笑話：理論物理學家對牧場主人說「我有解決方案了，不過前提是在真空狀態且奶牛為球體的時候才有效」。"
  },
  {
    word: "忒修斯之船",
    realHint: "哲學思想",
    fakeHints: ["航海歷史", "文學隱喻"],
    desc: "古希臘哲學家普魯塔克提出的同一性悖論：如果忒修斯船上的木頭被逐漸替換，直到所有木頭都不是原來的，那這艘船還是原來的那艘嗎？若用舊木頭重新組裝，哪一艘才是真正的忒修斯之船？"
  },
  {
    word: "八家將",
    realHint: "民俗陣頭",
    fakeHints: ["軍事編制", "家族稱謂"],
    desc: "台灣民間信仰中的陣頭形式，由八位（或更多）神將組成，負責為神明出巡開路、驅邪。成員畫臉譜、穿神將服，步伐與陣法有嚴格規範。屬台灣無形文化資產中的「民俗」類別。"
  },
  {
    word: "食盆",
    realHint: "飲食習俗",
    fakeHints: ["烹飪技法", "餐具名稱"],
    desc: "香港圍村傳統宴席形式，又稱「盆菜」。將豬肉,雞,冬菇,魚蝦等食材按次序層層疊放於大木盆中，村民圍坐共享。源於宗族祭祀後的聚餐傳統，體現圍村社群凝聚力。"
  },
  {
    word: "題目立",
    realHint: "表演藝術",
    fakeHints: ["考試制度", "書法創作"],
    desc: "日本奈良市八柱神社傳承的民俗表演。年輕男子穿武士服、持彎弓站成半圓，長者念出源平合戰人物名，表演者憑記憶誦出對應台詞，無音樂無扮演，2009年列入聯合國非遺名錄。"
  },
  {
    word: "半夏生",
    realHint: "節氣習俗",
    fakeHints: ["植物學", "中醫"],
    desc: "日本雜節之一，指夏至後第11天。關西地區吃章魚（祈願稻子像吸盤一樣豐收）、香川吃烏冬、福井吃青花魚、奈良吃黃豆粉年糕，各地食俗不同。"
  },
  {
    word: "劈懶神",
    realHint: "民俗活動",
    fakeHints: ["妖怪傳說", "懲罰儀式"],
    desc: "日本秋田縣男鹿半島的除夕民俗。青年扮成猙獰鬼面、披蓑衣，挨家挨戶吼「有沒有偷懶的孩子」，主人以酒食款待。語源來自冬天烤火手變紅（Namomi=懶證據）加上剝去（Hagu），寓意「剝除懶惰」。"
  },
  {
    word: "土佐節",
    realHint: "食品工藝",
    fakeHints: ["地方戲曲", "方言"],
    desc: "日本高知縣（舊稱土佐）的傳統鰹魚乾製作技藝。將鰹魚反覆熏烤、發酵、晾曬，製成極硬的「枯節」，是日本料理高湯的核心原料。2021年登錄為日本登錄無形民俗文化財。"
  },
  {
    word: "恐怖谷",
    realHint: "心理學",
    fakeHints: ["地理學", "恐怖文學"],
    desc: "1970年由日本機器人學家森政弘提出的心理學假說：當非人對象（如機器人、人偶）與人類相似度極高但未完全一致時，會引發強烈的厭惡與恐懼感。"
  },
  {
    word: "鄧巴數",
    realHint: "人類學",
    fakeHints: ["數學", "經濟學"],
    desc: "由英國人類學家鄧巴提出，指人類能維持穩定社交關係的人數上限約為150人。此數字與靈長類動物大腦新皮層大小相關，是社群規模的自然限制。"
  },
  {
    word: "塔西佗陷阱",
    realHint: "政治學",
    fakeHints: ["地理學", "軍事學"],
    desc: "源自古羅馬歷史學家塔西佗的觀察：當政府或組織失去公信力時，無論其說真話還是假話、做好事還是壞事，都會被公眾認為是在說謊或做壞事。"
  },
  {
    word: "史翠珊效應",
    realHint: "心理學",
    fakeHints: ["音樂", "影視"],
    desc: "指試圖掩蓋或壓制某些資訊，反而使該資訊更廣為傳播的現象。名稱源自美國歌手芭芭拉·史翠珊試圖移除網路上其住宅照片，結果照片反而被大量轉發。"
  },
  {
    word: "林迪效應",
    realHint: "經濟學",
    fakeHints: ["物理學", "生物學"],
    desc: "指事物經歷的時間越長，其預期剩餘壽命就越長。例如一本書已流傳50年，它可能再流傳50年；但若只流傳1年，則可能很快消失。常用於投資與文化產品預測。"
  },
  {
    word: "馬太效應",
    realHint: "社會學",
    fakeHints: ["宗教", "數學"],
    desc: "源自《聖經·馬太福音》：「凡有的，還要加給他；沒有的，連他所有的也要奪過來。」指強者越強、弱者越弱的社會現象，常用於解釋資源分配、學術聲望與財富累積。"
  },
  {
    word: "紅皇后假說",
    realHint: "生物學",
    fakeHints: ["文學", "政治學"],
    desc: "由生物學家范瓦倫提出，名稱源自《愛麗絲鏡中奇遇》紅皇后名言「必須拼命奔跑，才能留在原地」。指物種間持續協同進化，捕食者與獵物、寄生者與宿主互相軍備競賽，沒有一方取得永久優勢。"
  },
  {
    word: "彭羅斯階梯",
    realHint: "幾何",
    fakeHints: ["建築", "物理學"],
    desc: "一個著名的幾何學視覺錯覺悖論，指一個連續封閉的階梯結構，人在上面無論順時針或逆時針走，都會永遠在向上或向下爬。"
  },
  {
    word: "綠閃光",
    realHint: "光學",
    fakeHints: ["植物學", "物理學"],
    desc: "一種極為罕見的大氣光學現象，常在日出或日落瞬間出現，太陽上緣會閃爍出持續僅幾秒鐘的綠色光芒。"
  },
  {
    word: "拉班舞譜",
    realHint: "藝術",
    fakeHints: ["音樂", "密碼學"],
    desc: "由魯道夫·拉班創立的身體動作記錄系統，利用符號精準記錄人類動作的方向、節奏與空間軌跡，常用於舞蹈與動作分析。"
  },
  {
    word: "巴斯克維爾效應",
    realHint: "心理學",
    fakeHints: ["生物學", "動物學"],
    desc: "一種心理學效應，指文化迷信或心理恐懼（如忌諱特定凶日或數字）所帶來的極大精神壓力，進而引發心臟病發作或猝死。"
  },
  {
    word: "皮金語",
    realHint: "語言學",
    fakeHints: ["宗教", "動物學"],
    desc: "兩種或多種不同語言的母語者在貿易或交流時，為了溝通而臨時組合、簡化構成的混合過渡語言。"
  },
  {
    word: "瑪麗·賽勒斯特號",
    realHint: "歷史謎團",
    fakeHints: ["海軍", "貿易"],
    desc: "1872年於大西洋被發現的無人帆船，船上貨物與救生艇齊備且毫無打鬥痕跡，但所有船員均神秘失蹤，成為史上最知名的幽靈船謎案。"
  },
  {
    word: "阿基米德爪",
    realHint: "古代軍事",
    fakeHints: ["哲學", "解剖學"],
    desc: "由阿基米德設計的古希臘防禦軍事武器，裝有起重機式的巨大起重鉤爪，能將近岸的敵方戰艦抓起並吊入半空後重摔沉沒。"
  },
  {
    word: "黃金唱片",
    realHint: "太空探測",
    fakeHints: ["音樂", "考古"],
    desc: "1977年隨旅行者探測器升空的鍍金銅板唱片，收錄了地球的聲音、圖像及多國語言問候，旨在向潛在的地外智慧生命展現文明信息。"
  },
  {
    word: "卡諾莎之行",
    realHint: "中世紀歷史",
    fakeHints: ["宗教", "地理"],
    desc: "1077年神聖羅馬帝國皇帝亨利四世為了解除教皇的絕罰，赤腳前往卡諾莎城堡在雪地中下跪三日，向教皇請罪的歷史事件。"
  },
  {
    word: "伊普斯威奇鬼影",
    realHint: "氣象學",
    fakeHints: ["超自然", "歷史古蹟"],
    desc: "指在特定氣象與濃霧條件下，光線折射將遠處建築或船隻影投射至高空，形成類似巨大的鬼魅蜃景現象。"
  },
  {
    word: "特快車效應",
    realHint: "社會學",
    fakeHints: ["鐵路運輸", "物理學"],
    desc: "社會學現象，指當社會大眾普遍認為某項發展或趨勢不可避免時，眾人盲目順應的行為將大幅加速該趨勢的爆發與實現。"
  },
  {
    word: "高斯符號",
    realHint: "數學",
    fakeHints: ["密碼學", "考古"],
    desc: "數學中一種常見的取整函數符號（通常記為 [x]），表示不一定大於該實數的最大整數。"
  },
  {
    word: "克魯克斯管",
    realHint: "物理學",
    fakeHints: ["醫療", "化學"],
    desc: "早期用於研究陰極射線的密封玻璃真空管，物理學家藉由它發現了電子以及 X 射線的存在。"
  },
  {
    word: "比鄰星b",
    realHint: "天文學",
    fakeHints: ["占星", "航太"],
    desc: "位於半人馬座比鄰星宜居帶內的系外行星，距離地球約4.2光年，是目前已知距離太陽系最近的潛在宜居行星。"
  },
  {
    word: "死水現象",
    realHint: "物理學",
    fakeHints: ["水污染", "水族養殖"],
    desc: "當船隻航行於下層鹽水、上層淡水交界處時，船隻推進力會激發水下內波，導致船隻速度劇降甚至像被黏住無法前進的現象。"
  },
  {
    word: "電梯悖論",
    realHint: "統計學",
    fakeHints: ["機械", "建築"],
    desc: "統計學與概率論現象，指身處高樓層的人常覺得電梯總是在往上走，而低樓層的人常覺得電梯總是在往下走的心測偏差。"
  },
  {
    word: "聖埃爾摩之火",
    realHint: "物理現象",
    fakeHints: ["宗教", "火山"],
    desc: "雷雨天時，船隻桅桿或建築尖端因強大電場激發空氣電離，而產生藍白色火花狀強光的自然放電現象。"
  },
  {
    word: "烏鴉悖論",
    realHint: "邏輯學",
    fakeHints: ["鳥類生態", "寓言"],
    desc: "哲學與邏輯學悖論，提出「所有烏鴉都是黑的」在邏輯上等價於「所有非黑的東西都不是烏鴉」，挑戰了歸納法的直覺常理。"
  },
  {
    word: "卡利古拉號",
    realHint: "羅馬歷史",
    fakeHints: ["神話", "海盜"],
    desc: "古羅馬皇帝卡利古拉在內米湖上建造的奢華巨型平底船，配有大理石建築、花園與浴室，展現極致的帝王奢華與工程技術。"
  },
  {
    word: "水猴子",
    realHint: "民俗傳說",
    fakeHints: ["水生動物", "水利工具"],
    desc: "東亞民間傳說中的水棲妖怪（水鬼），相傳棲息於池塘或河流中，力大無窮且會將落水者拉入水中溺斃。"
  },
  {
    word: "美洲豹戰士",
    realHint: "古代軍事",
    fakeHints: ["部落圖騰", "獵人"],
    desc: "阿茲特克帝國的精英勇士階級，穿著豹皮戰服、手持木劍，專門在戰場上活捉敵軍以進行獻祭。"
  },
  {
    word: "莫比烏斯帶",
    realHint: "數學",
    fakeHints: ["金屬飾品", "光學"],
    desc: "一種只有一個面和一條邊的曲面結構，只需將一條紙帶旋轉180度後將兩端黏合即可製成，常用於拓撲學研究。"
  },
  {
    word: "食鐵獸",
    realHint: "動物",
    fakeHints: ["神話", "冶鐵"],
    desc: "中國古代文獻中對大熊貓的俗稱，相傳因其咬合力強大，偶爾會進村舔舐或啃咬鐵鍋而得名。"
  },
  {
    word: "法拉第籠",
    realHint: "物理學",
    fakeHints: ["捕魚", "心理諮商"],
    desc: "由金屬導體構成的封閉籠狀結構，能有效阻隔外部電場與電磁波干擾，使籠內部不受電擊或電磁輻射影響。"
  },
  {
    word: "空椅技巧",
    realHint: "心理學",
    fakeHints: ["魔術", "禮儀"],
    desc: "完形心理治療中的一種技巧，讓來訪者對著面前的空椅子進行對話，以角色扮演方式抒發內心衝突或未完成的心結。"
  },
  {
    word: "四物農樂",
    realHint: "表演藝術",
    fakeHints: ["農業", "宗教"],
    desc: "韓國傳統農樂表演形式，以鑼、鼓、長鼓、小鼓四種打擊樂器組成，原為農忙時期的集體勞動音樂，後發展為獨立的舞台表演藝術，是韓國重要的無形文化遺產。"
  },
  {
    word: "盤索里",
    realHint: "表演藝術",
    fakeHints: ["樂器", "飲食"],
    desc: "韓國傳統說唱藝術，由一名歌者與一名鼓手組成，歌者以說唱方式演繹長篇故事，內容多為民間傳說與歷史題材。2003年列入聯合國教科文組織人類非物質文化遺產名錄。"
  },
  {
    word: "韓山苧麻織",
    realHint: "傳統工藝",
    fakeHints: ["農業", "建築"],
    desc: "韓國忠清南道韓山地區傳承的苧麻織造技藝，以當地種植的苧麻為原料，經多道手工工序織成夏季衣料。2011年列入聯合國教科文組織人類非物質文化遺產名錄。"
  },
  {
    word: "處容舞",
    realHint: "表演藝術",
    fakeHints: ["宗教", "軍事"],
    desc: "韓國傳統宮廷舞蹈，源自新羅時期處容郎驅疫辟邪的傳說。舞者戴面具、穿彩衣，動作緩慢莊重，原為宮廷宴會與驅邪儀式所用，現為韓國重要無形文化財。"
  },
  // ===== 20261023 新增題目 =====
  {
    word: "甜甜圈效應",
    realHint: "城市規劃",
    fakeHints: ["飲食文化", "消費行為"],
    desc: "指疫情後大城市市中心人口與商業活動空洞化、居民遷往郊區的現象，因城市核心像甜甜圈中間被掏空而得名。"
  },
  {
    word: "綠洲假說",
    realHint: "考古學",
    fakeHints: ["地理學", "氣候學"],
    desc: "考古學家龐佩利提出的農業起源理論，認為末次冰期後乾旱迫使人類聚集於綠洲，從而開始植物馴化；後續研究未能證實。"
  },
  {
    word: "海德堡之吻",
    realHint: "甜點工藝",
    fakeHints: ["浪漫傳說", "地理景點"],
    desc: "19世紀海德堡咖啡店老闆為幫助受監護人嚴管的學生情侶傳情，發明的巧克力餅乾，名為「學生之吻」。"
  },
  {
    word: "泰勒展開式",
    realHint: "高等數學",
    fakeHints: ["服裝設計", "裁縫技術"],
    desc: "微積分中將函數以多項式近似表示的方法，透過函數在某一點的導數值建構無窮級數，是分析學的核心工具之一。"
  },
  {
    word: "吉芬商品",
    realHint: "經濟學",
    fakeHints: ["日常消費", "市場行銷"],
    desc: "一種特殊低檔商品，價格上升時需求量反而增加，因收入效應大於替代效應，典型例子為19世紀愛爾蘭土豆。"
  },
  {
    word: "金絲雀陷阱",
    realHint: "資訊安全",
    fakeHints: ["鳥類飼養", "礦業安全"],
    desc: "資安領域的欺敵手法，向不同對象洩漏略微不同的版本資訊，藉此追蹤洩密來源；現代研究將其延伸為生成大量假文件以混淆駭客。"
  },
  {
    word: "楚門錯覺",
    realHint: "心理學",
    fakeHints: ["影視娛樂", "社會運動"],
    desc: "患者相信自己正活在實境秀中、被鏡頭監視，身邊所有人都是演員。由高德兄弟於2008年以電影《楚門的世界》命名。"
  },
  {
    word: "齊加尼克效應",
    realHint: "心理學",
    fakeHints: ["工作效率", "記憶訓練"],
    desc: "心理學家蔡格尼克發現，人們對未完成任務的記憶比已完成任務更深刻，源於未完成事項帶來的精神緊張持續存在。"
  },
  {
    word: "敘事者謬誤",
    realHint: "心理學",
    fakeHints: ["文學批評", "歷史研究"],
    desc: "由塔勒布推廣的概念，指人們傾向將零散事實強行串連成有因果關係的故事，以降低理解成本，卻往往扭曲了真相。"
  },
  {
    word: "白象禮物",
    realHint: "社會習俗",
    fakeHints: ["動物保護", "宗教祭祀"],
    desc: "源自暹羅傳說：國王將神聖白象贈與厭惡之人，受禮者因飼養成本高昂且不可轉讓而破產。後指昂貴卻無用的禮物或資產。"
  },
  {
    word: "羅賓漢效應",
    realHint: "經濟學",
    fakeHints: ["民間傳說", "影視改編"],
    desc: "經濟學術語，指財富從富人向窮人重新分配的現象，可透過累進稅制、社會福利等政策實現，名稱取自劫富濟貧的羅賓漢傳說。"
  },
  {
    word: "湯姆森問題",
    realHint: "數學物理",
    fakeHints: ["新聞採訪", "出版編輯"],
    desc: "1904年J.J.湯姆森提出：求N個電子在單位球面上相互排斥時的最低靜電勢能構型。與Smale問題相關，僅少數N有嚴格解。"
  },
  {
    word: "科斯定理",
    realHint: "經濟學",
    fakeHints: ["法律條文", "數學定理"],
    desc: "若交易成本為零且產權界定清晰，資源最終配置將不受產權初始分配影響，市場談判可達成效率結果。由斯蒂格勒歸納命名。"
  }
];

// ============================================================
// 遊戲狀態變數
// ============================================================
let playerCount = 4;
let selectedDifficulty = 1;
let currentTurnIndex = 0;
let roles = []; // 'guesser', 'truth', 'liar'
let currentTopic = null;
let currentPublicHints = [];

// ============================================================
// 倒計時（角色頁 60 秒）
// ============================================================
const COUNTDOWN_SECONDS = 60;
let countdownTimer = null;
let countdownRemaining = COUNTDOWN_SECONDS;

// DOM 元素
const screens = {
  setup: document.getElementById("setup-screen"),
  publicTopic: document.getElementById("public-topic-screen"),
  pass: document.getElementById("pass-screen"),
  role: document.getElementById("role-screen"),
  discussion: document.getElementById("discussion-screen"),
  revealAll: document.getElementById("reveal-all-screen")
};

const countdownElem = document.getElementById("countdown");

// 切換畫面
function showScreen(screenName) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[screenName].classList.add("active");

  // 離開「揭曉答案」頁時，把 Ko-fi 打賞面板收起
  if (screenName !== "revealAll") collapseKofiPanel();
}

// ============================================================
// Ko-fi 打賞面板（只在最後的「揭曉答案」頁，按下按鈕才展開）
// ============================================================
const KOFI_HANDLE = "incensestudio";
const KOFI_EMBED_URL = `https://ko-fi.com/${KOFI_HANDLE}/?hidefeed=true&widget=true&embed=true&preview=true`;

const kofiToggleBtn = document.getElementById("kofi-toggle-btn");
const kofiWrap = document.getElementById("kofi-embed-wrap");
const kofiFrame = document.getElementById("kofiframe");

function updateKofiButtonLabel() {
  const isOpen = kofiToggleBtn.getAttribute("aria-expanded") === "true";
  kofiToggleBtn.innerText = isOpen ? t("tip.collapse") : t("tip.btn");
}

// 第一次展開時才真正載入 iframe，其餘時間不預先下載 Ko-fi 頁面
function kofiToggle() {
  const willOpen = kofiWrap.hasAttribute("hidden");

  if (willOpen && !kofiFrame.getAttribute("src")) {
    kofiFrame.setAttribute("src", kofiFrame.dataset.src || KOFI_EMBED_URL);
  }

  kofiWrap.hidden = !willOpen;
  kofiToggleBtn.setAttribute("aria-expanded", String(willOpen));
  updateKofiButtonLabel();
}

function collapseKofiPanel() {
  kofiWrap.hidden = true;
  kofiToggleBtn.setAttribute("aria-expanded", "false");
  updateKofiButtonLabel();
}

kofiToggleBtn.addEventListener("click", kofiToggle);

// 顯示題庫題數（隨介面語言更新）
function renderDeckCount() {
  document.getElementById("deck-count-line").innerText = t("setup.deckCount", { n: quizBank.length });
}

// ============================================================
// 倒計時控制
// ============================================================
function stopCountdown() {
  if (countdownTimer !== null) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
}

function renderCountdown() {
  countdownElem.classList.remove("warning", "timeout");

  if (countdownRemaining <= 0) {
    countdownElem.innerText = "00";
    countdownElem.classList.add("timeout");
    return;
  }

  countdownElem.innerText = countdownRemaining;
  if (countdownRemaining <= 10) {
    countdownElem.classList.add("warning");
  }
}

function startCountdown() {
  stopCountdown();
  countdownRemaining = COUNTDOWN_SECONDS;
  renderCountdown();

  countdownTimer = setInterval(() => {
    countdownRemaining--;
    renderCountdown();

    if (countdownRemaining <= 0) {
      stopCountdown();
    }
  }, 1000);
}

// ============================================================
// 抽題與渲染
// ============================================================

// 題目與提示轉成目前介面語言（中文題庫永遠是原文）
function localizeHint(hint) {
  if (typeof currentLang === "undefined" || currentLang !== "en") return hint;
  if (typeof hintEn === "undefined") return hint;
  return hintEn[hint] || hint;
}

function localizedTopic(topic) {
  if (typeof currentLang === "undefined" || currentLang !== "en") return topic;
  if (typeof termEn === "undefined") return topic;

  const term = termEn[topic.word];
  if (!term) return topic;

  return {
    word: term.word || topic.word,
    realHint: topic.realHint,
    fakeHints: topic.fakeHints,
    desc: term.desc || topic.desc
  };
}

// 依難度決定本局公開提示（只抽一次，換語言不會重新洗牌）
function buildPublicHints() {
  if (selectedDifficulty === 1) {
    currentPublicHints = [currentTopic.realHint];
  } else if (selectedDifficulty === 2) {
    currentPublicHints = [currentTopic.realHint, ...currentTopic.fakeHints];
    currentPublicHints.sort(() => Math.random() - 0.5);
  } else {
    currentPublicHints = [];
  }
}

function drawNewTopic() {
  let newTopic;
  do {
    newTopic = quizBank[Math.floor(Math.random() * quizBank.length)];
  } while (quizBank.length > 1 && currentTopic && newTopic === currentTopic);

  currentTopic = newTopic;
  buildPublicHints();
  renderPublicTopic();
}

function renderPublicTopic() {
  const hintsContainer = document.getElementById("public-hints");
  hintsContainer.innerHTML = "";

  if (currentPublicHints.length > 0) {
    currentPublicHints.forEach(hint => {
      const span = document.createElement("span");
      span.className = "tag";
      span.innerText = localizeHint(hint);
      hintsContainer.appendChild(span);
    });
  } else {
    const span = document.createElement("span");
    span.className = "no-hint";
    span.innerText = t("public.noHints");
    hintsContainer.appendChild(span);
  }

  document.getElementById("public-word").innerText = localizedTopic(currentTopic).word;
}

// 步驟 1 -> 步驟 2: 設定人數、難度並抽取題目與生成提示
document.getElementById("start-btn").addEventListener("click", () => {
  const countInput = document.getElementById("player-count");
  const diffInput = document.getElementById("difficulty-select");

  playerCount = parseInt(countInput.value);
  selectedDifficulty = parseInt(diffInput.value);

  if (isNaN(playerCount) || playerCount < 3 || playerCount > 10) {
    alert(t("alert.players"));
    return;
  }

  currentTopic = null;
  drawNewTopic();

  roles = Array(playerCount).fill("liar");
  roles[0] = "guesser";
  roles[1] = "truth";
  roles.sort(() => Math.random() - 0.5);

  showScreen("publicTopic");
});

// 點擊「💡 遊戲示例」按鈕，載入「蝴蝶效應」示範教學
document.getElementById("demo-btn").addEventListener("click", () => {
  playerCount = 4;
  selectedDifficulty = 1;

  currentTopic = {
    word: "蝴蝶效應",
    realHint: "氣象學 / 混沌理論",
    fakeHints: ["昆蟲生態", "心理學現象"],
    desc: "混沌理論中的概念，指在一個動態系統中，初始條件的微小變化，能帶動整個系統長期且巨大的連鎖反應。"
  };

  currentPublicHints = [currentTopic.realHint];
  renderPublicTopic();

  roles = ["guesser", "truth", "liar", "liar"];

  showScreen("publicTopic");
});

// 返回設定頁按鈕事件
document.getElementById("back-to-setup-btn").addEventListener("click", () => {
  stopCountdown();
  showScreen("setup");
});

// 「換一題」按鈕
document.getElementById("reroll-btn").addEventListener("click", () => {
  drawNewTopic();
});

// 步驟 2 -> 步驟 3: 開始傳遞裝置
document.getElementById("start-pass-btn").addEventListener("click", () => {
  currentTurnIndex = 0;
  prepareTurnScreen();
});

function prepareTurnScreen() {
  document.getElementById("player-turn-title").innerText = t("pass.title", { n: currentTurnIndex + 1 });
  showScreen("pass");
}

// 顯示目前玩家的身分卡（語言切換時可重繪）
function renderRoleCard() {
  const role = roles[currentTurnIndex];
  const topic = localizedTopic(currentTopic);

  const roleNameElem = document.getElementById("role-name");
  const roleDesc = document.getElementById("role-desc");
  const descContainer = document.getElementById("explanation-container");
  const descElem = document.getElementById("topic-desc");
  const liarHintsContainer = document.getElementById("liar-hints-container");
  const liarHintsElem = document.getElementById("liar-hints");

  document.getElementById("topic-word").innerText = topic.word;

  if (role === "guesser") {
    roleNameElem.innerText = t("role.guesser");
    roleDesc.innerText = t("role.guesserDesc");
    descContainer.style.display = "none";
    liarHintsContainer.style.display = "none";
  } else if (role === "truth") {
    roleNameElem.innerText = t("role.truth");
    roleDesc.innerText = t("role.truthDesc");
    descContainer.style.display = "block";
    descElem.innerText = topic.desc;
    liarHintsContainer.style.display = "none";
  } else { // liar
    roleNameElem.innerText = t("role.liar");
    roleDesc.innerText = t("role.liarDesc");
    descContainer.style.display = "none";
    liarHintsContainer.style.display = "block";
    liarHintsElem.innerHTML = "";

    if (selectedDifficulty === 3) {
      const span = document.createElement("span");
      span.className = "no-hint";
      span.setAttribute("style", "font-size: 18px; font-weight: bold; color: #e53e3e;");
      span.innerText = t("role.goodLuck");
      liarHintsElem.appendChild(span);
    } else {
      currentPublicHints.forEach(hint => {
        const span = document.createElement("span");
        span.className = "tag";
        span.innerText = localizeHint(hint);
        liarHintsElem.appendChild(span);
      });
    }
  }
}

// 揭曉答案頁
function renderReveal() {
  const topic = localizedTopic(currentTopic);

  document.getElementById("final-word").innerText = topic.word;
  document.getElementById("final-desc").innerText = topic.desc;
  document.getElementById("final-guesser").innerText = t("reveal.player", { n: roles.indexOf("guesser") + 1 });
  document.getElementById("final-truth-teller").innerText = t("reveal.player", { n: roles.indexOf("truth") + 1 });
}

// 揭曉目前玩家身分與詳細內容
document.getElementById("reveal-btn").addEventListener("click", () => {
  renderRoleCard();
  startCountdown(); // 啟動 60 秒倒計時
  showScreen("role");
});

// 切換至下一個人或進入討論階段
document.getElementById("next-player-btn").addEventListener("click", () => {
  stopCountdown(); // 離開角色頁時停止倒計時

  currentTurnIndex++;
  if (currentTurnIndex < playerCount) {
    prepareTurnScreen();
  } else {
    document.getElementById("discussion-word").innerText = localizedTopic(currentTopic).word;
    showScreen("discussion");
  }
});

// 最終揭曉答案
document.getElementById("show-answer-btn").addEventListener("click", () => {
  renderReveal();
  showScreen("revealAll");
});

// 重新開始
document.getElementById("restart-btn").addEventListener("click", () => {
  stopCountdown();
  showScreen("setup");
});

// ============================================================
// 語言切換重繪：靜態文字由 lang.js 的 applyLang() 處理，
// 這裡補上畫面上由 JS 生成的內容，切換語言不會留下混雜文字。
// ============================================================
function refreshScreenText() {
  applyLang();
  renderDeckCount();
  updateKofiButtonLabel();

  const activeCard = document.querySelector(".card.active");
  if (!activeCard || !currentTopic) return;

  switch (activeCard.id) {
    case "public-topic-screen":
      renderPublicTopic();
      break;
    case "pass-screen":
      document.getElementById("player-turn-title").innerText = t("pass.title", { n: currentTurnIndex + 1 });
      break;
    case "role-screen":
      renderRoleCard();
      break;
    case "discussion-screen":
      document.getElementById("discussion-word").innerText = localizedTopic(currentTopic).word;
      break;
    case "reveal-all-screen":
      renderReveal();
      break;
  }
}

// 首次載入：套用儲存的語言
refreshScreenText();
