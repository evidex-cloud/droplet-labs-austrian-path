// 交互演示：哈耶克的弧线——按主题筛选的作品时间线；点一部作品看摘要、核心主张、难度、接入本课的位置；
// 再按目标生成阅读顺序，并真算出总页数与按每周时间估计的周数。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const THEMES = {
    money: { label: T("货币与周期", "Money & cycle"), color: "var(--orange)" },
    knowledge: { label: T("知识", "Knowledge"), color: "var(--blue)" },
    law: { label: T("法律与秩序", "Law & order"), color: "var(--ink)" },
    psych: { label: T("心理学", "Psychology"), color: "var(--green)" },
  };

  // pages = 建议阅读的页数（不是全书页数）；diff 1–5
  const WORKS = [
    { id: "mttc", yr: 1929, theme: "money", pages: 60, diff: 4, title: T("《货币理论与商业周期》（英译 1933）", "Monetary Theory and the Trade Cycle (Eng. 1933)"),
      sum: T("周期理论必须是货币的，但不能是“物价水平”的：物价稳定时信用扩张照样扭曲相对价格与生产结构。", "Cycle theory must be monetary but not about the price level: even with stable prices, credit expansion distorts relative prices and the structure of production."),
      claims: [T("只有货币能解释全经济同时犯错", "Only money explains economy-wide simultaneous error"), T("“稳定物价”政策本身会制造周期", "Price-stabilization policy itself breeds cycles")],
      read: T("只读第 1、4 章", "Chapters 1 and 4 only"), course: ["5.1", "12.4"] },
    { id: "pp", yr: 1931, theme: "money", pages: 100, diff: 5, title: T("《价格与生产》（1935 二版）", "Prices and Production (2nd ed. 1935)"),
      sum: T("四篇 LSE 讲座：哈耶克三角登场；信用扩张拉长生产结构，再被消费者需求拉回。全奥派最难的百页之一。", "Four LSE lectures: the Hayekian triangle appears; credit expansion lengthens the structure of production, then consumer demand pulls it back. Among the hardest 100 pages in Austrian economics."),
      claims: [T("生产结构是一个三角形，利率决定它的长度", "Production is a triangle whose length the interest rate sets"), T("反周期扩张只会延长错误", "Counter-cyclical expansion only prolongs the error")],
      read: T("先看加里森的图，再读第 2、3 讲", "Study Garrison's diagrams first, then Lectures 2–3"), course: ["3.2", "5.1", "10.1"] },
    { id: "ek", yr: 1937, theme: "knowledge", pages: 25, diff: 3, title: T("《经济学与知识》", "“Economics and Knowledge”"),
      sum: T("社会均衡是一个关于知识的经验假设；经济学真正的问题是什么过程让分散的预期趋向兼容。哈耶克与米塞斯分道的起点。", "Social equilibrium is an empirical hypothesis about knowledge; the real question is what process brings dispersed expectations toward compatibility. Where Hayek parts from Mises."),
      claims: [T("均衡 = 计划相互兼容", "Equilibrium = mutually compatible plans"), T("纯逻辑回答不了协调过程", "Pure logic cannot explain the coordinating process")],
      read: T("读三遍", "Read three times"), course: ["2.2", "7.2", "14.3"] },
    { id: "ptc", yr: 1941, theme: "money", pages: 60, diff: 5, title: T("《资本纯理论》", "The Pure Theory of Capital"),
      sum: T("为周期理论打地基的完整资本理论；写了七年，战时出版，未完成。资本是结构而非总量。", "The complete capital theory meant to underpin the cycle; seven years' work, published in wartime, unfinished. Capital is a structure, not an aggregate."),
      claims: [T("资本不能被压成一个数", "Capital cannot be collapsed into one number")],
      read: T("研究者的书；只读导言与第一部分", "For specialists; introduction and Part One only"), course: ["3.4", "10.2"] },
    { id: "rts", yr: 1944, theme: "law", pages: 200, diff: 1, title: T("《通往奴役之路》", "The Road to Serfdom"),
      sum: T("中央计划要求一个统一的目标序列，社会没有，所以必须强加；“最坏的人爬到顶上”。写给英国社会主义知识分子，语气克制。", "Central planning needs a single scale of ends, society has none, so one must be imposed; “the worst get on top.” Written for British socialist intellectuals, restrained in tone."),
      claims: [T("计划的逻辑通向强制", "The logic of planning leads to coercion"), T("法治 vs 任意命令", "Rule of law vs arbitrary command")],
      read: T("一个周末；但别从它开始", "One weekend — but don't start here"), course: ["7.3", "8.4"] },
    { id: "uks", yr: 1945, theme: "knowledge", pages: 15, diff: 2, title: T("《知识在社会中的运用》", "“The Use of Knowledge in Society”"),
      sum: T("特定时间与地点的知识不能被集中；价格体系是压缩传递它的通信机器。", "Knowledge of particular time and place cannot be centralized; the price system is the communication machine that compresses and transmits it."),
      claims: [T("价格 = 知识的载体", "Prices carry knowledge"), T("无需任何人理解全局", "Nobody needs to see the whole")],
      read: T("必读；与 1937 篇对照", "Essential; pair with the 1937 essay"), course: ["7.2", "15.4", "18.1"] },
    { id: "mc", yr: 1946, theme: "knowledge", pages: 20, diff: 2, title: T("《竞争的含义》", "“The Meaning of Competition”"),
      sum: T("完全竞争模型假设掉了竞争的全部内容，只剩一个没有竞争者的状态。", "The perfect-competition model assumes away everything competition consists of, leaving a state with no competitors."),
      claims: [T("竞争是动词不是状态", "Competition is a verb, not a state")],
      read: T("必读；产业分析直接可用", "Essential; directly useful for industry analysis"), course: ["6.2", "15.2"] },
    { id: "crs", yr: 1952, theme: "knowledge", pages: 100, diff: 4, title: T("《科学的反革命》", "The Counter-Revolution of Science"),
      sum: T("社会科学的对象是人们相信什么；把自然科学方法搬进社会研究是唯科学主义。", "Social science studies what people believe; importing natural-science method into social study is scientism."),
      claims: [T("“钱”是信念不是金属", "“Money” is a belief, not a metal"), T("复杂现象只能做模式预测", "Complex phenomena allow only pattern prediction")],
      read: T("第一部分必读", "Part One essential"), course: ["2.2", "2.4"] },
    { id: "so", yr: 1952, theme: "psych", pages: 40, diff: 5, title: T("《感觉秩序》", "The Sensory Order"),
      sum: T("心智是分类装置；感觉性质是神经系统对刺激的归类；分类装置不能完全认识自己——默会知识的生理学根据。", "The mind is a classifying apparatus; sensory qualities are the nervous system's classification of stimuli; no classifier can fully know itself — the physiology behind tacit knowledge."),
      claims: [T("知道 ≠ 能说出", "Knowing is not saying")],
      read: T("难；先读 1967《复杂现象的理论》", "Hard; read “The Theory of Complex Phenomena” (1967) instead"), course: ["7.2", "18.3"] },
    { id: "col", yr: 1960, theme: "law", pages: 180, diff: 3, title: T("《自由宪章》", "The Constitution of Liberty"),
      sum: T("自由 = 免于任意强制；其价值在于我们不知道谁会发现什么；法治；对福利国家逐项分析，接受有限但真实的政府角色。", "Freedom = absence of arbitrary coercion; its value lies in our not knowing who will discover what; the rule of law; a case-by-case analysis of the welfare state, accepting a limited but real role for government."),
      claims: [T("自由的论证是知识论的", "The case for liberty is epistemic"), T("哈耶克不是无政府主义者", "Hayek is no anarchist")],
      read: T("第一部分必读；附录《我为什么不是保守主义者》", "Part One essential; postscript “Why I Am Not a Conservative”"), course: ["9.1", "14.3"] },
    { id: "cdp", yr: 1968, theme: "knowledge", pages: 15, diff: 2, title: T("《作为发现程序的竞争》", "“Competition as a Discovery Procedure”"),
      sum: T("竞争的价值恰恰在于结果不可预知——否则就不需要竞争。", "Competition is valuable precisely because its results cannot be known in advance — otherwise it would be unnecessary."),
      claims: [T("发现 > 配置", "Discovery over allocation")],
      read: T("15 页，必读", "15 pages, essential"), course: ["6.2", "16.2"] },
    { id: "llv1", yr: 1973, theme: "law", pages: 180, diff: 4, title: T("《法律、立法与自由》卷一《规则与秩序》", "Law, Legislation and Liberty I: Rules and Order"),
      sum: T("cosmos vs taxis；nomos vs thesis；自由社会靠长出来的秩序与抽象的行为规则。", "Cosmos vs taxis; nomos vs thesis; a free society rests on grown order and abstract rules of conduct."),
      claims: [T("秩序可以不被设计", "Order need not be designed"), T("法 ≠ 立法", "Law is not legislation")],
      read: T("必读", "Essential"), course: ["7.4", "9.3", "17.4"] },
    { id: "llv2", yr: 1976, theme: "law", pages: 100, diff: 4, title: T("《法律、立法与自由》卷二《社会正义的幻象》", "Law, Legislation and Liberty II: The Mirage of Social Justice"),
      sum: T("“社会正义”在自发秩序里无意义，因为没人在分配；但承认需要最低保障。", "“Social justice” is meaningless in a spontaneous order because nobody distributes; yet a minimum floor is accepted."),
      claims: [T("市场结果不是任何人的意图", "Market outcomes are nobody's intention")],
      read: T("前半必读", "First half essential"), course: ["8.4", "14.3"] },
    { id: "dm", yr: 1976, theme: "money", pages: 140, diff: 2, title: T("《货币的非国家化》（1978 二版）", "Denationalisation of Money (2nd ed. 1978)"),
      sum: T("让私人机构发行竞争性货币，市场选出购买力最稳的；政府垄断货币是周期与通胀之源。不是金本位方案。", "Let private issuers compete; the market selects the most stable currency; government monopoly of money is the root of cycles and inflation. Not a gold-standard proposal."),
      claims: [T("竞争而非黄金", "Competition, not gold")],
      read: T("好读，两天", "Readable, two days"), course: ["9.4", "17.3"] },
    { id: "llv3", yr: 1979, theme: "law", pages: 80, diff: 4, title: T("《法律、立法与自由》卷三《自由人的政治秩序》", "Law, Legislation and Liberty III: The Political Order of a Free People"),
      sum: T("对多数民主的批评；两院制方案；附言《人类价值的三个来源》引入文化演化。", "A critique of majoritarian democracy; a bicameral scheme; the epilogue “The Three Sources of Human Values” introduces cultural evolution."),
      claims: [T("规则本身是演化出来的", "Rules themselves evolved")],
      read: T("看结论与附言", "Conclusions and epilogue"), course: ["8.4", "14.3"] },
    { id: "fc", yr: 1988, theme: "law", pages: 60, diff: 3, title: T("《致命的自负》（巴特利编）", "The Fatal Conceit (ed. Bartley)"),
      sum: T("市场、产权、传统道德是文化演化的产物；社会主义的自负是以为理性能设计得更好。文本被编辑大幅改写，打折扣读。", "Markets, property and traditional morals are products of cultural evolution; socialism's conceit is thinking reason can design better. Heavily rewritten by the editor — read with a discount."),
      claims: [T("群体选择规则", "Group selection of rules"), T("哪些句子是哈耶克的？", "Which sentences are Hayek's?")],
      read: T("第 1、2、4 章，用卷三附言校对", "Chapters 1, 2, 4, checked against Vol. III's epilogue"), course: ["7.4", "14.3"] },
  ];

  const GOALS = {
    cycle: { label: T("周期理论", "Cycle theory"), order: ["pp", "mttc", "dm"] },
    knowledge: { label: T("市场过程与知识", "Market process & knowledge"), order: ["ek", "uks", "mc", "cdp", "crs"] },
    law: { label: T("法律与自发秩序", "Law & spontaneous order"), order: ["rts", "col", "llv1", "llv2", "fc"] },
    method: { label: T("“哈耶克问题”与方法", "The “Hayek problem” & method"), order: ["ek", "crs", "so", "llv3"] },
  };
  const NOBEL = { pages: 20, title: T("《知识的僭妄》（1974 诺贝尔演讲）", "“The Pretence of Knowledge” (1974 Nobel lecture)") };

  let filter = "all", sel = "uks", goal = "knowledge", hours = 4;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("📜 哈耶克的弧线：按主题筛选，点作品看它在河的哪一段", "📜 Hayek's arc: filter by theme, click a work to see which stretch of the river it is")}</div>
      <div class="demo-block">
        <div class="demo-seg" id="hk-filter">
          <button data-t="all" class="on">${T("全部", "All")}</button>
          ${Object.entries(THEMES).map(([k, t]) => `<button data-t="${k}">${t.label}</button>`).join("")}
        </div>
        <div class="demo-grid" style="margin-top:10px">
          <div class="tl" id="hk-tl"></div>
          <div class="scn" id="hk-card"></div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("按目标生成阅读顺序", "Generate a reading order by goal")}</label>
        <div class="demo-row">
          <div class="demo-seg" id="hk-goal">${Object.entries(GOALS).map(([k, g]) => `<button data-g="${k}" class="${k === goal ? "on" : ""}">${g.label}</button>`).join("")}</div>
          <span>${T("每周", "Per week")}: <b id="hk-h">4</b> h</span>
        </div>
        <input class="demo-slider" id="hk-hours" type="range" min="1" max="12" step="1" value="4" />
        <div class="demo-out" id="hk-out"></div>
        <div class="demo-log" id="hk-log"></div>
      </div>
      <p class="demo-tip">${T(
        "先切到“知识”主题：五篇短文加起来不到 200 页，却是整条弧线的转折点——这是“如果只读一本读哪本”的答案。再看“周期理论”：页数不多，难度却是 5 星，因为哈耶克的文字追不上他的图。",
        "Switch to the “Knowledge” theme first: five short pieces under 200 pages together, yet they are the hinge of the whole arc — the answer to “if I read only one thing.” Then look at “Cycle theory”: few pages, but 5-star difficulty, because Hayek's prose cannot keep up with his diagrams."
      )}</p>
    </div>`;

  const stars = (d) => "★".repeat(d) + "☆".repeat(5 - d);

  const paintTl = () => {
    const list = WORKS.filter((w) => filter === "all" || w.theme === filter);
    root.querySelector("#hk-tl").innerHTML = list.map((w) => `
      <div class="tl-item${w.id === sel ? "" : " dim"}" data-id="${w.id}" style="cursor:pointer">
        <span class="when">${w.yr}</span><span style="color:${THEMES[w.theme].color};font-weight:${w.id === sel ? 700 : 500}">${w.title}</span>
      </div>`).join("");
    const w = WORKS.find((x) => x.id === sel);
    root.querySelector("#hk-card").innerHTML = `
      <div class="scn-q">${w.title} <span class="pill ok" style="background:${THEMES[w.theme].color};color:#fff">${THEMES[w.theme].label}</span></div>
      <div>${w.sum}</div>
      <div class="scn-meta"><b>${T("核心主张", "Key claims")}</b>：${w.claims.join(" · ")}</div>
      <div class="scn-meta"><b>${T("难度", "Difficulty")}</b> ${stars(w.diff)} · <b>${T("建议读", "Read")}</b> ${w.read} · ${T("约", "~")}${w.pages} ${T("页", "pp.")}</div>
      <div class="scn-meta"><b>${T("接入本课", "Plugs into")}</b>：${w.course.map((c) => `<span class="pill ok">${T("阶段 ", "Stage ")}${c}</span>`).join(" ")}</div>`;
  };

  const paintPlan = () => {
    const g = GOALS[goal];
    const items = [NOBEL, ...g.order.map((id) => WORKS.find((w) => w.id === id))];
    const PPH = 8; // 哈耶克约每小时 8 页
    let totalPages = 0, cum = 0;
    const rows = items.map((w, i) => {
      totalPages += w.pages;
      const hrs = w.pages / PPH;
      cum += hrs;
      const wk = Math.ceil(cum / hours);
      return `${i + 1}. ${w.title} — ${T("约", "~")}${w.pages} ${T("页", "pp.")}${w.diff ? " · " + stars(w.diff) : ""} → ${T("第 " + wk + " 周完成", "done by week " + wk)}`;
    });
    root.querySelector("#hk-out").innerHTML = rows.join("<br>");
    const weeks = Math.ceil(totalPages / PPH / hours);
    const hardest = items.reduce((m, w) => (w.diff && w.diff > (m.diff || 0) ? w : m), {});
    const log = [];
    log.push(`${T("总计约", "About")} ${totalPages} ${T("页，按每小时约 8 页、每周", "pp. at ~8 pp./hour and")} ${hours} h${T("，约", " a week ≈")} <b>${weeks}</b> ${T("周。", "weeks.")}`);
    if (hardest.title) log.push(`<span class="warn">${T("最难的一段：", "Hardest stretch: ")}${hardest.title}${T("——留双倍时间，或先读配套的本课阶段 ", " — allow double time, or first re-read Stage ")}${hardest.course[0]}${T("。", ".")}</span>`);
    if (goal === "law") log.push(`<span class="ok">${T("提醒：《致命的自负》要打折扣读；卷三附言更可靠。", "Reminder: read The Fatal Conceit with a discount; Vol. III's epilogue is more reliable.")}</span>`);
    if (goal === "cycle") log.push(`<span class="ok">${T("提醒：读《价格与生产》前先看阶段 10.1 加里森的三张图。", "Reminder: study Garrison's three diagrams (Stage 10.1) before Prices and Production.")}</span>`);
    root.querySelector("#hk-log").innerHTML = log.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#hk-filter").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-t]"); if (!b) return;
    filter = b.dataset.t;
    root.querySelectorAll("#hk-filter button").forEach((x) => x.classList.toggle("on", x === b));
    const list = WORKS.filter((w) => filter === "all" || w.theme === filter);
    if (!list.find((w) => w.id === sel)) sel = list[0].id;
    paintTl();
  });
  root.querySelector("#hk-tl").addEventListener("click", (e) => {
    const it = e.target.closest("[data-id]"); if (!it) return;
    sel = it.dataset.id; paintTl();
  });
  root.querySelector("#hk-goal").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-g]"); if (!b) return;
    goal = b.dataset.g;
    root.querySelectorAll("#hk-goal button").forEach((x) => x.classList.toggle("on", x === b));
    paintPlan();
  });
  root.querySelector("#hk-hours").addEventListener("input", (e) => { hours = +e.target.value; root.querySelector("#hk-h").textContent = hours; paintPlan(); });
  paintTl();
  paintPlan();
}
