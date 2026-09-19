// 交互演示：前沿看板——十个奥派未解问题做成卡片，按领域筛选；每张卡显示问题、现状、起步阅读与“难度 / 回报”仪表；
// “选我的三个”模式：勾选三张卡，工具按互相支撑关系与门槛排序，输出一份迷你研究议程（顺序、前置课、第一份可交付物、估计月数）。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 领域：money / capital / method / ai / institutions
  const AREAS = [
    ["all", T("全部", "All")],
    ["method", T("方法", "Method")],
    ["capital", T("资本与周期", "Capital & cycles")],
    ["money", T("货币", "Money")],
    ["ai", T("AI", "AI")],
    ["institutions", T("制度与企业家", "Institutions")],
  ];

  // 每个问题：id, area, 难度 1–5, 回报 1–5, 需要的工具, 依赖(supports) 关系, 前置课, 起步阅读, 第一份可交付物, 估计月数
  const Q = [
    { id: "a", area: "method", diff: 5, pay: 5, tools: T("编程 · 动力系统", "code · dynamical systems"), deps: ["b", "j"],
      q: T("过程理论能不能被建模——不把市场压成均衡快照？", "Can process theory be modeled without flattening the market into an equilibrium snapshot?"),
      state: T("复杂性经济学（阿瑟，圣塔菲）与主体模型最接近；科普尔的“大玩家”是奥派这边的桥。难点是概念性的：程序里怎么出现程序员没想到的机会。", "Complexity economics (Arthur, Santa Fe) and agent-based models come closest; Koppl's “Big Players” is the Austrian bridge. The hard part is conceptual: how a program discovers what its programmer did not foresee."),
      reads: ["Arthur, Complexity and the Economy (2015)", "Koppl, Big Players and the Economic Theory of Expectations (2002)", T("Koppl 等, “Economics for a Creative World” (2015)", "Koppl et al., “Economics for a Creative World” (2015)")],
      lessons: ["2.4", "5.1", "6.1"], months: 18,
      deliver: T("一个利率信号内生的 ABCT 仿真，能重现“上游先涨先跌”", "An ABCT simulation with an endogenous rate signal that reproduces “upstream rises and falls first”") },
    { id: "b", area: "capital", diff: 4, pay: 5, tools: T("金融数学 · 会计", "finance math · accounting"), deps: ["j"],
      q: T("异质资本怎么度量？久期与 EVA 能不能让资本理论有个数？", "How is heterogeneous capital measured? Can duration and EVA give capital theory a number?"),
      state: T("勒温与卡查诺斯基用麦考利久期替换平均生产期，用 EVA 表达经济计算（2014, 2019, 2020）。框架已成型，真实周期上的实证图还很少。", "Lewin and Cachanosky replaced the average period with Macaulay duration and expressed economic calculation as EVA (2014, 2019, 2020). The framework exists; empirical charts on real cycles are scarce."),
      reads: ["Lewin & Cachanosky, Austrian Capital Theory (2019)", "Cachanosky & Lewin, “Roundaboutness Is Not a Mysterious Concept” (2014)", "Lewin & Cachanosky, Capital and Finance (2020)"],
      lessons: ["3.2", "3.4", "7.1"], months: 9,
      deliver: T("一张“各行业久期分布在繁荣期变长、萧条期被砍短”的实证图", "An empirical chart of industry duration distributions lengthening in the boom and shortening in the bust") },
    { id: "c", area: "method", diff: 3, pay: 5, tools: T("数据处理 · 经济史", "data handling · economic history"), deps: ["j", "b"],
      q: T("尊重“解释而非检验”的大规模经验项目长什么样？", "What does a large-scale empirical program that respects “explain, don't test” look like?"),
      state: T("单案例叙事史有范本（罗斯巴德、希格斯、鲍威尔），可复现的跨周期核对几乎没有。方法论许可其实早有：数据检验的是理论的应用。", "Single-case narrative histories have models (Rothbard, Higgs, Powell); reproducible cross-cycle checks barely exist. The methodological permission is old: data test the application of theory."),
      reads: ["Rothbard, America's Great Depression (1963)", T("Higgs, “Regime Uncertainty” (1997)", "Higgs, “Regime Uncertainty” (1997)"), "Cachanosky & Salter, “The View from Vienna” (2017)"],
      lessons: ["13.1", "5.4", "13.4"], months: 8,
      deliver: T("一份公开的 ABCT 模式核对表，对 5 次周期逐条打分", "A public ABCT pattern checklist scored across five cycles") },
    { id: "d", area: "capital", diff: 4, pay: 4, tools: T("货币金融 · 央行制度", "money & banking · central-bank plumbing"), deps: ["b", "e"],
      q: T("ABCT 怎么解释影子银行、全球美元融资、资产价格渠道与 2010 年代“失踪的通胀”？", "How does ABCT handle shadow banking, global dollar funding, the asset-price channel and the “missing inflation” of the 2010s?"),
      state: T("扩展很多（资产价格、储备付息、离岸美元），但都是补丁；还没有一个写明三条传导渠道的 ABCT 2.0。", "Many extensions (asset prices, interest on reserves, offshore dollars), all patches; no ABCT 2.0 that states three transmission channels."),
      reads: ["Cachanosky & Salter, “The View from Vienna” (2017)", T("Pozsar 等, “Shadow Banking” (纽约联储, 2010)", "Pozsar et al., “Shadow Banking” (NY Fed, 2010)"), "Garrison, Time and Money (2001)"],
      lessons: ["10.3", "13.4", "5.5"], months: 12,
      deliver: T("一篇写明银行信贷 / 影子信贷 / 资产价格三渠道的 ABCT 综合论文", "A synthesis paper stating the bank-credit / shadow-credit / asset-price channels of ABCT") },
    { id: "e", area: "money", diff: 3, pay: 4, tools: T("货币理论 · 加密经济", "monetary theory · crypto plumbing"), deps: ["j"],
      q: T("钱现在是什么？稳定币、CBDC、比特币在米塞斯的“货币 / 替代物 / 信用媒介”里各是哪一层？", "What is money now? Where do stablecoins, CBDCs and Bitcoin sit in Mises's money / money-substitute / fiduciary-media scheme?"),
      state: T("塞尔金的“合成商品货币”、卢瑟与怀特的私人货币竞争分析是起点；货币层级主要是后凯恩斯派在写，奥派几乎缺席。", "Selgin's “synthetic commodity money” and Luther and White on private currency competition are the starting points; the hierarchy of money is written mostly by Post-Keynesians, Austrians nearly absent."),
      reads: ["Selgin, “Synthetic Commodity Money” (2015)", "Mises, The Theory of Money and Credit (1912), Part I", T("White, “The Market for Cryptocurrencies” (2015)", "White, “The Market for Cryptocurrencies” (2015)")],
      lessons: ["4.1", "17.1", "17.3"], months: 6,
      deliver: T("用米塞斯三分法重画今天的货币层级图，标出周期从哪一层开始", "Today's monetary hierarchy redrawn in Mises's three-way vocabulary, marking where the cycle starts") },
    { id: "f", area: "ai", diff: 5, pay: 5, tools: T("机器学习基础 · 知识论", "ML basics · epistemology"), deps: ["j", "i"],
      q: T("可计算与默会知识的边界到底在哪一米、为什么在那、会不会移动？", "Where exactly is the computable/tacit boundary, why is it there, and does it move?"),
      state: T("哈耶克的两种知识、福斯–克莱因的判断、波兰尼的两类默会知识三条线索都在，没人合成一个可操作的边界判据。", "Hayek's two kinds of knowledge, Foss–Klein judgment and Polanyi's two kinds of tacit knowledge all exist; nobody has synthesized an operational boundary criterion."),
      reads: ["Hayek, “The Use of Knowledge in Society” (1945)", "Foss & Klein, Organizing Entrepreneurial Judgment (2012)", "Polanyi, The Tacit Dimension (1966)"],
      lessons: ["7.2", "18.1", "18.3"], months: 12,
      deliver: T("一个来自行动学（而非当前技术水平）的“可委托 / 必须承担”判据", "A “delegable / must-bear” criterion grounded in praxeology rather than current technology") },
    { id: "g", area: "institutions", diff: 3, pay: 4, tools: T("比较制度 · 田野/档案", "comparative institutions · field or archive work"), deps: ["h"],
      q: T("为什么有的国家会增长？制度粘性框架能不能做出可核对的发展案例？", "Why do some countries grow? Can the institutional-stickiness framework produce a checkable development case?"),
      state: T("鲍尔是被时间证明的先驱；博特克、科因、李森把它变成项目（2008 制度粘性）。缺的是具体国家的、可核对的案例，而不是宣言。", "Bauer was the vindicated pioneer; Boettke, Coyne and Leeson made it a program (institutional stickiness, 2008). What is missing are concrete, checkable country cases rather than manifestos."),
      reads: ["Bauer, Dissent on Development (1972)", "Boettke, Coyne & Leeson, “Institutional Stickiness” (2008)", "Coyne, Doing Bad by Doing Good (2013)"],
      lessons: ["7.4", "8.4", "9.3"], months: 10,
      deliver: T("一个国家的制度粘性案例：哪些空降制度弹回去了、为什么", "One country's institutional-stickiness case: which imported institutions snapped back and why") },
    { id: "h", area: "institutions", diff: 2, pay: 4, tools: T("写作 · 主流期刊规范", "writing · mainstream journal conventions"), deps: ["j"],
      q: T("“主线 vs 主流”：奥派怎么与新制度经济学、公共选择深度融合而不失去自己？", "“Mainline vs mainstream”: how do Austrians fuse with NIE and public choice without losing themselves?"),
      state: T("博特克 2012 提出框架；李森的“法外秩序”研究是最成功的范例——问题是奥派的，读者不必是奥派。", "Boettke (2012) set the frame; Leeson's studies of order outside the law are the best examples — the question is Austrian, the reader need not be."),
      reads: ["Boettke, Living Economics (2012)", "Leeson, The Invisible Hook (2009)", "Ostrom, Governing the Commons (1990)"],
      lessons: ["8.4", "9.2", "9.3"], months: 6,
      deliver: T("一篇同时能投奥派期刊和主流期刊的文章", "One paper submittable to both an Austrian journal and a mainstream one") },
    { id: "i", area: "institutions", diff: 2, pay: 3, tools: T("管理学文献 · 案例写作", "management literature · case writing"), deps: ["f"],
      q: T("企业家判断能不能被教？奥派在管理学里的影响怎么变成可用的东西？", "Can entrepreneurial judgment be taught? How does the Austrian footprint in management become something usable?"),
      state: T("柯兹纳的警觉是“机会识别”文献的基础，福斯–克莱因的判断视角是正式流派——但都在商学院，不在经济系。", "Kirzner's alertness underlies “opportunity recognition”; the Foss–Klein judgment view is a recognized stream — but in business schools, not economics departments."),
      reads: ["Kirzner, Competition and Entrepreneurship (1973)", "Klein, The Capitalist and the Entrepreneur (2010)", T("Shane, “Prior Knowledge and the Discovery of Entrepreneurial Opportunities” (2000)", "Shane, “Prior Knowledge and the Discovery of Entrepreneurial Opportunities” (2000)")],
      lessons: ["6.1", "6.3", "18.3"], months: 5,
      deliver: T("一套商学院可用的“判断训练”案例集", "A case collection for “judgment training” a business school could use") },
    { id: "j", area: "method", diff: 5, pay: 3, tools: T("科学哲学 · 逻辑", "philosophy of science · logic"), deps: [],
      q: T("米塞斯之后，行动学的先验到底是什么：康德式、亚里士多德式，还是反事实规律？", "After Mises, what is praxeology's a priori: Kantian, Aristotelian, or counterfactual law?"),
      state: T("霍普（1995）、朗（2006）、许尔斯曼（2003）三条路线；卡普兰与布劳格的批评要 steelman。这是决定其他问题能不能做的那一个。", "Hoppe (1995), Long (2006), Hülsmann (2003) are the three routes; Caplan's and Blaug's critiques need their steelman. This is the one that decides whether the others can be done."),
      reads: ["Hoppe, Economic Science and the Austrian Method (1995)", "Long, “Realism and Abstraction in Economics” (2006)", "Hülsmann, “Facts and Counterfactuals in Economic Law” (2003)"],
      lessons: ["2.1", "2.2", "13.1"], months: 10,
      deliver: T("一篇能投科学哲学期刊的行动学定位文章", "A paper locating praxeology, submittable to a philosophy-of-science journal") },
  ];

  let area = "all";
  let pickMode = false;
  let picked = [];

  const gauge = (label, v, color) => `<div class="bar2"><span class="lab">${label}</span><div class="track"><div class="fill" style="width:${v * 20}%;background:${color}"></div></div><span class="val">${v}/5</span></div>`;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧭 前沿看板：十个没有答案的问题", "🧭 Frontier board: ten questions without answers")}</div>
      <div class="demo-block">
        <div class="demo-row">
          <div class="demo-seg" id="fb-areas">${AREAS.map(([k, l]) => `<button data-area="${k}" class="${k === "all" ? "on" : ""}">${l}</button>`).join("")}</div>
          <button class="demo-btn" id="fb-pick">${T("选我的三个 →", "Pick my three →")}</button>
        </div>
        <div class="demo-meta" id="fb-meta"></div>
      </div>
      <div class="demo-block" id="fb-cards"></div>
      <div class="demo-block" id="fb-agenda" style="display:none">
        <label class="demo-label">${T("你的迷你研究议程", "Your mini research agenda")}</label>
        <div class="demo-out" id="fb-out"></div>
      </div>
      <p class="demo-tip">${T(
        "先按领域筛，读每张卡的“现状”和“什么算进步”。然后点“选我的三个”：工具会按<strong>互相支撑</strong>关系排序——被别的问题依赖的先做——并估计总月数。看两件事：你的三个里有没有一个是“地基”（方法或度量），以及门槛加起来是不是超过了你的工具箱。",
        "Filter by area first and read each card's “state of play” and “what counts as progress.” Then click “Pick my three”: the tool orders them by <strong>mutual support</strong> — problems that others depend on come first — and estimates total months. Check two things: whether one of your three is a “foundation” (method or measurement), and whether the combined entry cost exceeds your toolbox."
      )}</p>
    </div>`;

  const cardsEl = root.querySelector("#fb-cards");
  const metaEl = root.querySelector("#fb-meta");
  const agendaEl = root.querySelector("#fb-agenda");
  const outEl = root.querySelector("#fb-out");
  const pickBtn = root.querySelector("#fb-pick");

  const paintCards = () => {
    const list = Q.filter((x) => area === "all" || x.area === area);
    cardsEl.innerHTML = list.map((x) => {
      const on = picked.includes(x.id);
      return `<div class="scn" style="margin-bottom:10px;${on ? "border-color:var(--orange-line);background:var(--orange-soft)" : ""}">
        <div class="scn-q"><b>${x.id.toUpperCase()}.</b> ${x.q}</div>
        <div class="scn-meta"><b>${T("现状：", "State of play: ")}</b>${x.state}</div>
        <div class="scn-meta"><b>${T("起步阅读：", "Starting readings: ")}</b>${x.reads.join(" · ")}</div>
        <div class="scn-meta"><b>${T("工具：", "Tools: ")}</b>${x.tools} · <b>${T("相关课：", "Lessons: ")}</b>${x.lessons.map((l) => T("阶段 ", "Stage ") + l).join(", ")}</div>
        ${gauge(T("难度", "Difficulty"), x.diff, "var(--blue)")}
        ${gauge(T("回报", "Payoff"), x.pay, "var(--orange)")}
        ${pickMode ? `<div class="demo-btns" style="margin:8px 0 0"><button class="demo-btn ${on ? "active" : ""}" data-pick="${x.id}" style="${on ? "border-color:var(--orange-line);color:var(--orange-ink)" : ""}">${on ? T("✓ 已选", "✓ Picked") : T("选这个", "Pick this")}</button></div>` : ""}
      </div>`;
    }).join("");
    const n = list.length;
    const avgD = (list.reduce((s, x) => s + x.diff, 0) / n).toFixed(1);
    const avgP = (list.reduce((s, x) => s + x.pay, 0) / n).toFixed(1);
    metaEl.textContent = pickMode
      ? T("已选 " + picked.length + " / 3。选满三个自动生成议程。", "Picked " + picked.length + " / 3. The agenda appears when you have three.")
      : T("显示 " + n + " 个问题 · 平均难度 " + avgD + " · 平均回报 " + avgP, "Showing " + n + " questions · avg difficulty " + avgD + " · avg payoff " + avgP);
    cardsEl.querySelectorAll("[data-pick]").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.pick;
      if (picked.includes(id)) picked = picked.filter((p) => p !== id);
      else if (picked.length < 3) picked.push(id);
      paintCards();
      paintAgenda();
    }));
  };

  const paintAgenda = () => {
    if (!pickMode || picked.length < 3) { agendaEl.style.display = "none"; return; }
    agendaEl.style.display = "";
    const set = picked.map((id) => Q.find((x) => x.id === id));
    // 排序：被同组其它问题依赖的次数多者在前（地基先做）；并列则难度低者在前
    const dependedOn = (x) => set.filter((y) => y !== x && y.deps.includes(x.id)).length;
    const ordered = [...set].sort((a, b) => dependedOn(b) - dependedOn(a) || a.diff - b.diff);
    const totalMonths = ordered.reduce((s, x) => s + x.months, 0);
    const parallelMonths = Math.round(totalMonths * 0.7);
    const maxDiff = Math.max(...ordered.map((x) => x.diff));
    const foundation = ordered.some((x) => x.area === "method" || x.id === "b");
    const links = ordered.filter((x) => set.some((y) => y !== x && (y.deps.includes(x.id) || x.deps.includes(y.id)))).length;
    const areas = new Set(ordered.map((x) => x.area));
    const lessons = [...new Set(ordered.flatMap((x) => x.lessons))].sort((a, b) => parseFloat(a) - parseFloat(b));
    const lines = [];
    lines.push(T("== 迷你研究议程 ==", "== Mini research agenda =="));
    ordered.forEach((x, i) => {
      lines.push(`${i + 1}. [${x.id.toUpperCase()}] ${x.q}`);
      lines.push(`   ${T("第一份可交付物：", "First deliverable: ")}${x.deliver}`);
      lines.push(`   ${T("先读：", "Read first: ")}${x.reads[0]} · ${T("约", "about")} ${x.months} ${T("个月", "months")}`);
    });
    lines.push("");
    lines.push(`${T("总工时估计：串行约", "Time estimate: about")} ${totalMonths} ${T("个月；有重叠可并行时约", "months in sequence; about")} ${parallelMonths} ${T("个月。", "months with overlap.")}`);
    lines.push(`${T("互相支撑：", "Mutual support: ")}${links}/3 ${T("个问题与另外两个有依赖关系", "problems depend on or feed another of your three")}${links >= 2 ? T(" —— 这是一个议程，不是一堆兴趣。", " — this is an agenda, not a pile of interests.") : T(" —— 三个问题彼此独立，考虑换掉一个。", " — the three are independent; consider swapping one.")}`);
    lines.push(foundation ? T("地基：有（方法或度量问题在内）。", "Foundation: present (a method or measurement problem is included).") : T("地基：无 —— 没有方法或度量问题，后面的应用会缺一个许可。建议加 J 或 B。", "Foundation: missing — no method or measurement problem; the applied work will lack its permission. Consider adding J or B."));
    lines.push(`${T("最高门槛：", "Highest entry cost: ")}${maxDiff}/5${maxDiff >= 5 ? T(" —— 需要跨学科工具（编程 / 机器学习 / 哲学），准备补课。", " — needs cross-disciplinary tools (code / ML / philosophy); plan to skill up.") : ""}`);
    lines.push(`${T("覆盖领域：", "Areas covered: ")}${areas.size}${areas.size === 1 ? T("（很专，好发论文，但视野窄）", " (focused: publishable, but narrow)") : T("（跨领域，回报高，注意别摊薄）", " (cross-area: high payoff, watch for dilution)")}`);
    lines.push(`${T("先复习：", "Review first: ")}${lessons.map((l) => T("阶段 ", "Stage ") + l).join(", ")}`);
    lines.push(T("下一步：去阶段 ∞.2 选一条通道，去阶段 ∞.3 先写一篇。", "Next: pick a lane in Stage ∞.2, and write one piece in Stage ∞.3."));
    outEl.textContent = lines.join("\n");
    outEl.style.whiteSpace = "pre-wrap";
    outEl.style.wordBreak = "break-word";
  };

  root.querySelectorAll("#fb-areas button").forEach((b) => b.addEventListener("click", () => {
    area = b.dataset.area;
    root.querySelectorAll("#fb-areas button").forEach((x) => x.classList.toggle("on", x === b));
    paintCards();
  }));
  pickBtn.addEventListener("click", () => {
    pickMode = !pickMode;
    if (!pickMode) picked = [];
    pickBtn.textContent = pickMode ? T("退出选择", "Exit picking") : T("选我的三个 →", "Pick my three →");
    pickBtn.classList.toggle("active", pickMode);
    paintCards();
    paintAgenda();
  });
  paintCards();
}
