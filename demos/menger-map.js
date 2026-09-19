// 交互演示：门格尔《原理》章节地图——点一章看核心主张、为什么重要、本课哪些节在接着讲；
// 再按“生成阅读计划”，按 4 周 / 8 周与每天可用时间，真算出每周页数与是否超负荷。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 约页数按米塞斯研究院 2007 版（含哈耶克导言）估算；门格尔文本密度高，按每小时约 8 页计。
  const PAGES_PER_HOUR = 8;
  const chapters = [
    { n: 0, pages: 26, title: T("哈耶克导言（1934）", "Hayek's Introduction (1934)"),
      claim: T("门格尔的生平、方法论之争、晚年沉默三十年之谜；把《原理》放回 1871 年的思想版图。", "Menger's life, the Methodenstreit, and the puzzle of his thirty-year silence; places the Principles on the 1871 map of ideas."),
      why: T("先读它，你会知道自己在读的是一本“开创学派”的书，而不是一本过时教科书。", "Read it first so you know you are reading the book that founded a school, not an obsolete textbook."),
      lessons: [["0.3", T("150 年谱系", "150-year lineage")], ["2.3", T("理论 vs 历史", "theory vs history")]] },
    { n: 1, pages: 33, title: T("第一章 商品的一般理论", "Ch. I The General Theory of the Good"),
      claim: T("商品之为商品，需要人认识到它与某个需要之间的因果联系；商品分级别，高级商品的商品性质来源于低级商品；生产需要时间且可能出错。", "A thing is a good only when a person recognizes a causal link between it and a want; goods come in orders, and higher-order goods derive their goods-character from lower-order goods; production takes time and can err."),
      why: T("奥派资本理论与“错误投资”概念的胚胎：需要一消失，整条生产链同时失去商品性质。", "The embryo of Austrian capital theory and of malinvestment: when a want vanishes, the whole production chain loses goods-character at once."),
      lessons: [["3.2", T("迂回生产与哈耶克三角", "roundabout production")], ["5.2", T("错误投资", "malinvestment")], ["18.2", T("AI 是资本品", "AI as a capital good")]] },
    { n: 2, pages: 26, title: T("第二章 经济与经济商品", "Ch. II Economy and Economic Goods"),
      claim: T("需要量大于可得量的商品是经济商品，需要节约、需要产权；反之是非经济商品（空气）。财富 = 支配的经济商品之和。", "Where requirements exceed the available quantity a good is economic — it must be economized and owned; otherwise it is non-economic (air). Wealth is the sum of economic goods commanded."),
      why: T("稀缺的奥派定义；产权为什么存在的起点。", "The Austrian definition of scarcity; where the case for property rights begins."),
      lessons: [["0.1", T("稀缺与选择", "scarcity & choice")], ["9.1", T("产权为什么存在", "why property exists")], ["16.1", T("注意力经济", "attention economy")]] },
    { n: 3, pages: 63, title: T("第三章 价值理论", "Ch. III The Theory of Value"),
      claim: T("价值完全主观；大小由“依赖于这一单位的那个满足”的重要性决定（那张 10 到 0 的表）；高级商品的价值从低级商品归属回来，等于拿走它造成的损失。", "Value is entirely subjective; its size is the importance of the satisfaction that depends on this particular unit (the 10-to-0 table); higher-order goods get value by imputation from lower-order goods — equal to the loss if withdrawn."),
      why: T("全书心脏：推翻劳动价值论，埋下“价格决定成本”的因果翻转。", "The heart of the book: overturns the labor theory of value and plants the reversal “price determines cost.”"),
      lessons: [["1.1", T("钻石与水", "diamonds & water")], ["1.2", T("主观价值", "subjective value")], ["15.3", T("零边际成本定价", "zero-marginal-cost pricing")]] },
    { n: 4, pages: 14, title: T("第四章 交换理论", "Ch. IV The Theory of Exchange"),
      claim: T("交换发生是因为两人对同一对商品的相对估值相反；交换到估值差消失为止；双方都变得更满足。", "Exchange happens because two people rank the same pair of goods in opposite order; it continues until the difference vanishes; both end up better off."),
      why: T("“交换双方都得益”的原始出处；反驳“商人不创造价值”。", "The original source of “both sides gain”; refutes the claim that merchants create nothing."),
      lessons: [["1.5", T("交换与分工", "exchange & division of labor")], ["6.3", T("利润与亏损", "profit & loss")]] },
    { n: 5, pages: 45, title: T("第五章 价格理论", "Ch. V The Theory of Price"),
      claim: T("价格是交换的结果不是价值的度量，总落在一个区间；孤立交换、垄断交易、双边竞争三种情形；竞争越多区间越窄，但永不缩成一点。", "Price is the result of exchange, not a measure of value, and always lies in a range; three cases — isolated exchange, monopoly trade, bilateral competition; more competition narrows the range but never to a point."),
      why: T("边际对的雏形；“区间不是点”是奥派与瓦尔拉斯均衡传统的分岔口。", "The seed of marginal pairs; “a range, not a point” is where Austrians fork from Walrasian equilibrium."),
      lessons: [["1.3", T("价格怎么形成", "how prices form")], ["2.4", T("数学与均衡之争", "math & equilibrium")], ["18.6", T("算法定价", "algorithmic pricing")]] },
    { n: 6, pages: 12, title: T("第六章 使用价值与交换价值", "Ch. VI Use Value and Exchange Value"),
      claim: T("两者不是两种东西，而是同一主观价值在两种处境下的表现；经济价值取两者中较高者。", "Not two kinds of value but one subjective value in two situations; economic value is the higher of the two."),
      why: T("消解斯密的二分，钻石与水悖论的最后一块拼图。", "Dissolves Smith's split — the last piece of the diamond–water puzzle."),
      lessons: [["1.1", T("钻石与水", "diamonds & water")]] },
    { n: 7, pages: 20, title: T("第七章 商品理论", "Ch. VII The Theory of the Commodity"),
      claim: T("商品 = 为出售而持有的经济商品；商品之间最重要的差别是可销售性，取决于买家数量、市场组织、可分性、耐久性、运输成本。", "A commodity is an economic good held for sale; the key difference among commodities is saleableness, set by number of buyers, market organization, divisibility, durability, transport cost."),
      why: T("最被低估的一章：第八章的货币理论完全建立在它之上；可销售性本身就是一种网络效应。", "The most underrated chapter: Chapter VIII rests entirely on it; saleableness is itself a network effect."),
      lessons: [["4.1", T("货币的起源", "origin of money")], ["15.1", T("网络效应", "network effects")]] },
    { n: 8, pages: 30, title: T("第八章 货币理论", "Ch. VIII The Theory of Money"),
      claim: T("货币不是法律或契约的产物，而是从最可销售的商品中自发演化出来；金属胜出是因为可分、耐久、单位价值高、易识别。", "Money is not a product of law or contract but evolves from the most saleable commodity; metals won for divisibility, durability, high value per unit and recognizability."),
      why: T("回归定理补的是这一章的逻辑闭环；比特币是不是门格尔式货币，争的就是这一章的条件。", "The regression theorem closes this chapter's logical loop; whether Bitcoin is Mengerian money is a fight over this chapter's conditions."),
      lessons: [["4.1", T("门格尔与回归定理", "Menger & the regression theorem")], ["9.4", T("货币竞争", "currency competition")], ["17.1", T("比特币与回归定理", "Bitcoin & regression")]] },
  ];

  let sel = 3, weeks = 4, minutes = 45;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗺️ 《原理》章节地图：点一章，看它说什么、为什么重要、谁在接着讲", "🗺️ A map of the Principles: click a chapter to see its claim, why it matters, and who picks it up")}</div>
      <div class="demo-block">
        <div class="demo-btns" id="mg-chaps"></div>
        <div class="scn" id="mg-card"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("生成我的阅读计划", "Generate my reading plan")}</label>
        <div class="demo-row">
          <div class="demo-seg" id="mg-weeks">
            <button data-w="4" class="on">${T("4 周", "4 weeks")}</button>
            <button data-w="8">${T("8 周（读一周、写一周）", "8 weeks (read, then write)")}</button>
          </div>
          <span>${T("每天可用", "Minutes per day")}: <b id="mg-min">45</b> ${T("分钟", "min")}</span>
        </div>
        <input class="demo-slider" id="mg-slider" type="range" min="15" max="120" step="5" value="45" />
        <div class="demo-btns"><button class="demo-btn" id="mg-gen">${T("📅 生成计划", "📅 Generate plan")}</button></div>
        <div class="demo-out" id="mg-out">${T("（点“生成计划”）", "(press “Generate plan”)")}</div>
        <div class="demo-log" id="mg-log"></div>
      </div>
      <p class="demo-tip">${T(
        "看两件事：<strong>第三章的页数</strong>几乎是别的章的两倍——它是心脏，计划里它单独占一周；把每天时间拖到 15 分钟，看日志怎么提醒你“4 周读不完，改 8 周”。门格尔的密度大约每小时 8 页，别高估自己。",
        "Watch two things: <strong>Chapter III's page count</strong> is nearly double any other chapter — it is the heart, and gets its own week. Drag daily time down to 15 minutes and watch the log tell you “4 weeks won't fit, switch to 8.” Menger reads at roughly 8 pages an hour; don't overestimate yourself."
      )}</p>
    </div>`;

  const chapsEl = root.querySelector("#mg-chaps");
  chapsEl.innerHTML = chapters.map((c) => `<button class="demo-btn${c.n === sel ? " active" : ""}" data-n="${c.n}">${c.n === 0 ? T("导言", "Intro") : T("第 " + c.n + " 章", "Ch. " + c.n)}</button>`).join("");

  const paintCard = () => {
    const c = chapters[sel];
    chapsEl.querySelectorAll("button").forEach((b) => b.classList.toggle("active", +b.dataset.n === sel));
    root.querySelector("#mg-card").innerHTML = `
      <div class="scn-q">${c.title} <span class="pill ok">${T("约 " + c.pages + " 页", "~" + c.pages + " pp.")}</span></div>
      <div><b>${T("核心主张", "Core claim")}</b> — ${c.claim}</div>
      <div class="scn-meta"><b>${T("为什么重要", "Why it matters")}</b> — ${c.why}</div>
      <div class="scn-meta"><b>${T("本课谁在接着讲", "Developed in this course")}</b> — ${c.lessons.map(([s, l]) => `<span class="pill ok">${T("阶段 ", "Stage ")}${s} · ${l}</span>`).join(" ")}</div>`;
  };
  chapsEl.addEventListener("click", (e) => { const b = e.target.closest("button[data-n]"); if (!b) return; sel = +b.dataset.n; paintCard(); });
  paintCard();

  root.querySelector("#mg-weeks").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-w]"); if (!b) return;
    weeks = +b.dataset.w;
    root.querySelectorAll("#mg-weeks button").forEach((x) => x.classList.toggle("on", x === b));
  });
  root.querySelector("#mg-slider").addEventListener("input", (e) => { minutes = +e.target.value; root.querySelector("#mg-min").textContent = minutes; });

  // 4 周骨架：导言+1、2 | 3+6 | 4+5 | 7+8+回读 3 的归属部分
  const plan4 = [
    { chs: [0, 1, 2], note: T("先画“需要→一级→二级→三级”的横向链", "Draw the horizontal chain want → 1st → 2nd → 3rd order") },
    { chs: [3, 6], note: T("慢读；用面包店例子亲手做一次“损失法”归属", "Read slowly; do one “loss-method” imputation with the bakery example") },
    { chs: [4, 5], note: T("用马市例子算一遍价格区间，对照阶段 1.3 的边际对", "Recompute the horse-market price range; compare with Stage 1.3's marginal pairs") },
    { chs: [7, 8], extra: 12, note: T("给 5 种商品打可销售性分数；回读第三章归属部分（约 12 页）", "Score 5 goods for saleableness; re-read the imputation section of Ch. III (~12 pp.)") },
  ];

  root.querySelector("#mg-gen").addEventListener("click", () => {
    const hoursPerWeek = minutes * 7 / 60;
    const capPerWeek = hoursPerWeek * PAGES_PER_HOUR;
    const rows = [];
    let overload = 0, totalPages = 0;
    plan4.forEach((w, i) => {
      const pages = w.chs.reduce((s, n) => s + chapters[n].pages, 0) + (w.extra || 0);
      totalPages += pages;
      const names = w.chs.map((n) => (n === 0 ? T("导言", "Intro") : T("第 " + n + " 章", "Ch. " + n))).join(" + ");
      if (weeks === 4) {
        const need = pages / PAGES_PER_HOUR;
        const over = need > hoursPerWeek;
        if (over) overload++;
        rows.push(`${T("第 " + (i + 1) + " 周", "Week " + (i + 1))}: ${names} — ${T("约", "~")}${pages} ${T("页", "pp.")}, ${T("约", "~")}${need.toFixed(1)} h ${over ? "⚠" : "✓"}<br>&nbsp;&nbsp;↳ ${w.note}`);
      } else {
        const need = pages / PAGES_PER_HOUR;
        const over = need > hoursPerWeek;
        if (over) overload++;
        rows.push(`${T("第 " + (2 * i + 1) + " 周", "Week " + (2 * i + 1))}: ${T("读", "READ")} ${names} — ${T("约", "~")}${pages} ${T("页", "pp.")}, ${T("约", "~")}${need.toFixed(1)} h ${over ? "⚠" : "✓"}`);
        rows.push(`${T("第 " + (2 * i + 2) + " 周", "Week " + (2 * i + 2))}: ${T("写", "WRITE")} — ${w.note}${T("；合上书，把本周的因果链画成图，再写 300 字“门格尔在这几章到底主张什么”", "; close the book, draw this block's causal chain, then write 300 words on “what Menger actually claims here”")}`);
      }
    });
    root.querySelector("#mg-out").innerHTML = rows.join("<br>");
    const log = [];
    log.push(`${T("总量：约", "Total: ~")}${totalPages} ${T("页（含导言与回读）；你的每周可用时间 ≈", "pp. (incl. introduction and re-reading); your weekly budget ≈")} ${hoursPerWeek.toFixed(1)} h ≈ ${Math.round(capPerWeek)} ${T("页", "pp.")}`);
    if (overload === 0) log.push(`<span class="ok">${T("节奏可行：每周都在你的时间预算之内。", "Feasible: every week fits inside your time budget.")}</span>`);
    else if (weeks === 4) log.push(`<span class="bad">${T("有 " + overload + " 周超出预算（尤其第三章那一周）。要么每天加时间，要么切到 8 周。", overload + " week(s) exceed your budget (especially the Chapter III week). Add daily time or switch to 8 weeks.")}</span>`);
    else log.push(`<span class="warn">${T("8 周里仍有 " + overload + " 个阅读周偏紧——第三章可以拆到写作周里读完。", "Even at 8 weeks, " + overload + " reading week(s) are tight — let Chapter III spill into its writing week.")}</span>`);
    log.push(T("只有一个周末？读第一、三、八章——对应本课的资本、价值、货币三条线。", "Only one weekend? Read Chapters I, III and VIII — this course's capital, value and money threads."));
    root.querySelector("#mg-log").innerHTML = log.map((l) => `<div>${l}</div>`).join("");
  });
}
