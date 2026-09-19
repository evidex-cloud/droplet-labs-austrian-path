// 交互演示：阅读路径生成器——勾选兴趣（货币 / 企业家 / 资本与周期 / 法律与政治 / 方法）与水平，
// 真算出一条 6–10 本、带顺序与估计周数的路径（.tl），每条路径至少包含一本“反方”。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // pages: 建议阅读页数；diff 1–5；tags 主题；opp = 是否为该主题的“反方”文本；branch: mi / gmu / kz / classic
  const BOOKS = [
    { id: "roth-money", yr: 1963, pages: 100, diff: 1, tags: ["money"], branch: "mi", t: T("罗斯巴德《政府对我们的货币做了什么？》", "Rothbard, What Has Government Done to Our Money?"), why: T("货币理论入门；一个下午", "Intro to monetary theory; one afternoon") },
    { id: "salerno", yr: 2010, pages: 120, diff: 3, tags: ["money", "method"], branch: "mi", t: T("萨勒诺《货币：健全与不健全》选篇 + 1993“去同质化”", "Salerno, Money: Sound and Unsound (selections) + “Dehomogenized” 1993"), why: T("通缩反驳；米塞斯 vs 哈耶克分歧的钥匙", "The deflation rebuttal; key to the Mises/Hayek split") },
    { id: "hds", yr: 2006, pages: 300, diff: 4, tags: ["money", "cycle"], branch: "mi", t: T("德索托《货币、银行信贷与经济周期》第 4–6 章", "Huerta de Soto, Money, Bank Credit, and Economic Cycles Ch. 4–6"), why: T("ABCT 最完整的当代陈述；100% 派旗舰", "Fullest contemporary ABCT; flagship of the 100% wing") },
    { id: "selgin", yr: 1988, pages: 180, diff: 3, tags: ["money"], branch: "gmu", opp: true, t: T("塞尔金《自由银行理论》", "Selgin, The Theory of Free Banking"), why: T("反方：自由银行派对 100% 准备的回应", "Opposing view: the free-banking reply to 100% reserves") },
    { id: "hulsmann", yr: 2008, pages: 200, diff: 2, tags: ["money", "law"], branch: "mi", t: T("许尔斯曼《货币生产的伦理》", "Hülsmann, The Ethics of Money Production"), why: T("货币的伦理批评系统化", "The ethical critique of money, systematized") },
    { id: "hayek-dm", yr: 1976, pages: 140, diff: 2, tags: ["money"], branch: "classic", opp: true, t: T("哈耶克《货币的非国家化》", "Hayek, Denationalisation of Money"), why: T("反方：竞争而非黄金", "Opposing view: competition, not gold") },
    { id: "kirzner73", yr: 1973, pages: 180, diff: 3, tags: ["entre"], branch: "kz", t: T("柯兹纳《竞争与企业家精神》第 1–4 章", "Kirzner, Competition and Entrepreneurship Ch. 1–4"), why: T("警觉与均衡趋向", "Alertness and the tendency to equilibrium") },
    { id: "kirzner97", yr: 1997, pages: 25, diff: 2, tags: ["entre", "method"], branch: "kz", t: T("柯兹纳 1997 JEL 综述《企业家发现与竞争性市场过程》", "Kirzner, “Entrepreneurial Discovery and the Competitive Market Process” (JEL 1997)"), why: T("写给主流看的最好导读", "The best introduction written for the mainstream") },
    { id: "kf", yr: 2012, pages: 200, diff: 3, tags: ["entre"], branch: "kz", opp: true, t: T("克莱因 & 福斯《组织企业家判断》第 1–4 章", "Klein & Foss, Organizing Entrepreneurial Judgment Ch. 1–4"), why: T("反方：判断而非警觉；企业理论", "Opposing view: judgment over alertness; theory of the firm") },
    { id: "lach56", yr: 1956, pages: 130, diff: 3, tags: ["entre", "cycle"], branch: "gmu", t: T("拉赫曼《资本及其结构》", "Lachmann, Capital and Its Structure"), why: T("异质资本的拼图", "The jigsaw of heterogeneous capital") },
    { id: "lach86", yr: 1986, pages: 100, diff: 4, tags: ["entre", "method"], branch: "gmu", opp: true, t: T("拉赫曼《作为经济过程的市场》第 1–2 章", "Lachmann, The Market as an Economic Process Ch. 1–2"), why: T("反方：万花筒式世界，挑战均衡趋向", "Opposing view: the kaleidic world against equilibrium tendency") },
    { id: "boettke", yr: 2012, pages: 150, diff: 2, tags: ["entre", "method", "law"], branch: "gmu", t: T("伯特克《活的经济学》人物评传部分", "Boettke, Living Economics (the portraits)"), why: T("GMU 一脉的自我陈述", "The GMU branch's self-statement") },
    { id: "garrison", yr: 2001, pages: 150, diff: 3, tags: ["cycle"], branch: "gmu", t: T("加里森《时间与货币》第 3–5 章", "Garrison, Time and Money Ch. 3–5"), why: T("三张图讲奥派宏观", "Austrian macro in three diagrams") },
    { id: "hayek-pp", yr: 1931, pages: 100, diff: 5, tags: ["cycle"], branch: "classic", t: T("哈耶克《价格与生产》第 2–3 讲", "Hayek, Prices and Production Lectures 2–3"), why: T("原始的哈耶克三角；先看加里森", "The original triangle; read Garrison first") },
    { id: "roth-agd", yr: 1963, pages: 120, diff: 3, tags: ["cycle"], branch: "mi", t: T("罗斯巴德《美国大萧条》第一部分", "Rothbard, America's Great Depression Part I"), why: T("理论 + 历史的范本", "The model of theory plus history") },
    { id: "friedman", yr: 1963, pages: 120, diff: 3, tags: ["cycle"], branch: "classic", opp: true, t: T("弗里德曼 & 施瓦茨《美国货币史》第 7 章“大收缩”", "Friedman & Schwartz, A Monetary History Ch. 7 “The Great Contraction”"), why: T("反方：货币主义的大萧条解释", "Opposing view: the monetarist Depression") },
    { id: "hayek-llv1", yr: 1973, pages: 180, diff: 4, tags: ["law"], branch: "classic", t: T("哈耶克《法律、立法与自由》卷一", "Hayek, Law, Legislation and Liberty Vol. 1"), why: T("cosmos / taxis · nomos / thesis", "Cosmos / taxis · nomos / thesis") },
    { id: "hoppe-dem", yr: 2001, pages: 90, diff: 3, tags: ["law"], branch: "mi", t: T("霍普《民主：失败的上帝》第 1–3 章", "Hoppe, Democracy: The God That Failed Ch. 1–3"), why: T("统治者的时间偏好；只推荐经济学部分", "Rulers' time preference; the economic part only") },
    { id: "roth-ethics", yr: 1982, pages: 150, diff: 3, tags: ["law"], branch: "mi", t: T("罗斯巴德《自由的伦理》第 1–2 部分", "Rothbard, The Ethics of Liberty Parts 1–2"), why: T("自我所有权到无政府资本主义", "From self-ownership to anarcho-capitalism") },
    { id: "leoni", yr: 1961, pages: 150, diff: 3, tags: ["law"], branch: "classic", opp: true, t: T("莱奥尼《自由与法律》", "Leoni, Freedom and the Law"), why: T("反方/互补：法律长出来，不必无政府", "Complement: law grows — without anarchy") },
    { id: "hoppe-method", yr: 1995, pages: 80, diff: 3, tags: ["method"], branch: "mi", t: T("霍普《经济科学与奥地利学派方法》", "Hoppe, Economic Science and the Austrian Method"), why: T("先验主义最激进的辩护", "The most radical defense of apriorism") },
    { id: "hayek-crs", yr: 1952, pages: 100, diff: 4, tags: ["method"], branch: "classic", opp: true, t: T("哈耶克《科学的反革命》第一部分", "Hayek, The Counter-Revolution of Science Part One"), why: T("反方：复杂现象与模式预测", "Opposing view: complex phenomena and pattern prediction") },
    { id: "lavoie", yr: 1985, pages: 150, diff: 3, tags: ["method"], branch: "gmu", t: T("拉瓦伊《对抗与中央计划》第 1–4 章", "Lavoie, Rivalry and Central Planning Ch. 1–4"), why: T("计算争论的完整重述", "The full restatement of the calculation debate") },
    { id: "caldwell", yr: 2004, pages: 200, diff: 3, tags: ["method"], branch: "gmu", t: T("卡德威尔《哈耶克的挑战》", "Caldwell, Hayek's Challenge"), why: T("“哈耶克问题”的向导", "Guide to the “Hayek problem”") },
  ];
  const BRANCH = { mi: T("米塞斯研究院", "Mises Inst."), gmu: T("乔治梅森", "GMU"), kz: T("柯兹纳", "Kirznerian"), classic: T("经典", "Classic") };
  const TAGS = { money: T("货币与银行", "Money & banking"), entre: T("企业家精神", "Entrepreneurship"), cycle: T("资本与周期", "Capital & cycles"), law: T("法律与政治", "Law & politics"), method: T("方法", "Method") };
  const LEVELS = { intro: { label: T("入门", "Beginner"), maxDiff: 3, pph: 10, hours: 4 }, mid: { label: T("进阶", "Intermediate"), maxDiff: 4, pph: 9, hours: 5 }, adv: { label: T("研究", "Advanced"), maxDiff: 5, pph: 8, hours: 6 } };

  let picked = new Set(["money"]), level = "mid";

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🛶 阅读路径生成器：勾兴趣、选水平，生成一条 6–10 本的跨支脉路径", "🛶 Reading-path builder: pick interests and level, get a 6–10 book path that crosses branches")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("兴趣（可多选）", "Interests (multi-select)")}</label>
          <div class="demo-btns" id="rp-tags">${Object.entries(TAGS).map(([k, l]) => `<button class="demo-btn${picked.has(k) ? " active" : ""}" data-tag="${k}">${l}</button>`).join("")}</div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("水平", "Level")}</label>
          <div class="demo-seg" id="rp-level">${Object.entries(LEVELS).map(([k, l]) => `<button data-l="${k}" class="${k === level ? "on" : ""}">${l.label}</button>`).join("")}</div>
          <div class="demo-meta" id="rp-levelmeta"></div>
        </div>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("本数", "Items")}</div><div class="v" id="rp-n">–</div></div>
        <div class="stat"><div class="k">${T("约页数", "~Pages")}</div><div class="v" id="rp-p">–</div></div>
        <div class="stat"><div class="k">${T("估计周数", "Est. weeks")}</div><div class="v acc" id="rp-w">–</div></div>
        <div class="stat"><div class="k">${T("反方数", "Opposing")}</div><div class="v pos" id="rp-o">–</div></div>
      </div>
      <div class="demo-block"><div class="tl" id="rp-tl"></div></div>
      <div class="demo-log" id="rp-log"></div>
      <p class="demo-tip">${T(
        "看“反方数”永远 ≥ 1：路径生成器会强制塞进至少一本与主流立场相反的书（塞尔金之于德索托、克莱因之于柯兹纳、哈耶克之于霍普）。再看底部的支脉分布——如果三条支脉里有一条是 0，日志会提醒你补一本。",
        "Watch “Opposing” — it never drops below 1: the builder forces at least one book that argues against the path's main line (Selgin vs Huerta de Soto, Klein vs Kirzner, Hayek vs Hoppe). Then look at the branch split at the bottom — if any of the three branches is at 0, the log tells you to add one."
      )}</p>
    </div>`;

  const build = () => {
    const L = LEVELS[level];
    root.querySelector("#rp-levelmeta").textContent = T("最高难度 " + L.maxDiff + " 星 · 每周约 " + L.hours + " 小时 · 约 " + L.pph + " 页/小时", "Max difficulty " + L.maxDiff + " stars · ~" + L.hours + " h/week · ~" + L.pph + " pp./hour");
    const tags = [...picked];
    let pool = BOOKS.filter((b) => b.diff <= L.maxDiff && b.tags.some((t) => tags.includes(t)));
    // 评分：匹配的兴趣数 × 2 + 易读性 + 反方加分；按兴趣轮流选，保证每个兴趣都有代表
    const score = (b) => b.tags.filter((t) => tags.includes(t)).length * 2 + (5 - b.diff) * 0.3 + (b.opp ? 0.5 : 0);
    pool.sort((a, b) => score(b) - score(a));
    const target = Math.min(10, Math.max(6, 4 + tags.length * 2));
    const chosen = [];
    // 每个兴趣至少两本
    for (const t of tags) {
      let n = 0;
      for (const b of pool) { if (n >= 2) break; if (b.tags.includes(t) && !chosen.includes(b)) { chosen.push(b); n++; } }
    }
    for (const b of pool) { if (chosen.length >= target) break; if (!chosen.includes(b)) chosen.push(b); }
    // 保证至少一本反方
    if (!chosen.some((b) => b.opp)) {
      const opp = pool.find((b) => b.opp) || BOOKS.find((b) => b.opp && b.tags.some((t) => tags.includes(t)));
      if (opp) { if (chosen.length >= target) chosen.pop(); chosen.push(opp); }
    }
    // 排序：先易后难，反方紧跟其正方之后
    chosen.sort((a, b) => a.diff - b.diff || a.yr - b.yr);
    const path = [];
    for (const b of chosen) {
      if (b.opp) continue;
      path.push(b);
      const o = chosen.find((x) => x.opp && !path.includes(x) && x.tags.some((t) => b.tags.includes(t)));
      if (o) path.push(o);
    }
    for (const b of chosen) if (!path.includes(b)) path.push(b);

    const pages = path.reduce((s, b) => s + b.pages, 0);
    const weeks = Math.ceil(pages / L.pph / L.hours);
    let cum = 0;
    root.querySelector("#rp-tl").innerHTML = path.map((b, i) => {
      cum += b.pages / L.pph;
      const wk = Math.ceil(cum / L.hours);
      return `<div class="tl-item${b.opp ? " dim" : ""}">
        <span class="when">${T("第 " + wk + " 周", "wk " + wk)}</span>
        <b>${i + 1}. ${b.t}</b> ${b.opp ? `<span class="pill bad">${T("反方", "opposing")}</span>` : ""} <span class="pill ok">${BRANCH[b.branch]}</span>
        <div style="font-size:13px;color:var(--muted);margin-top:2px">${b.why} · ${b.yr} · ${T("约", "~")}${b.pages} ${T("页", "pp.")} · ${"★".repeat(b.diff)}${"☆".repeat(5 - b.diff)}</div>
      </div>`;
    }).join("");
    root.querySelector("#rp-n").textContent = path.length;
    root.querySelector("#rp-p").textContent = pages;
    root.querySelector("#rp-w").textContent = weeks;
    root.querySelector("#rp-o").textContent = path.filter((b) => b.opp).length;

    const dist = { mi: 0, gmu: 0, kz: 0, classic: 0 };
    path.forEach((b) => dist[b.branch]++);
    const log = [];
    log.push(`${T("支脉分布：", "Branch split: ")}${Object.entries(dist).map(([k, v]) => BRANCH[k] + " " + v).join(" · ")}`);
    const missing = ["mi", "gmu", "kz"].filter((k) => dist[k] === 0);
    if (missing.length) log.push(`<span class="warn">${T("路径里缺少 ", "Missing branch: ")}${missing.map((k) => BRANCH[k]).join(", ")}${T("——考虑补一本，避免只听一条支脉说话。", " — consider adding one so you hear more than one branch.")}</span>`);
    else log.push(`<span class="ok">${T("三条支脉都有代表——这是本课想要的读法。", "All three branches represented — that is how this course wants you to read.")}</span>`);
    if (weeks > 20) log.push(`<span class="bad">${T("超过 20 周：减少兴趣数或降到入门水平，先走一条短路径。", "Over 20 weeks: pick fewer interests or drop to Beginner and do a short path first.")}</span>`);
    if (tags.length === 0) log.push(`<span class="bad">${T("请至少勾一个兴趣。", "Pick at least one interest.")}</span>`);
    root.querySelector("#rp-log").innerHTML = log.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#rp-tags").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-tag]"); if (!b) return;
    const t = b.dataset.tag;
    if (picked.has(t)) picked.delete(t); else picked.add(t);
    b.classList.toggle("active", picked.has(t));
    build();
  });
  root.querySelector("#rp-level").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-l]"); if (!b) return;
    level = b.dataset.l;
    root.querySelectorAll("#rp-level button").forEach((x) => x.classList.toggle("on", x === b));
    build();
  });
  build();
}
