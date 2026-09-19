// 交互演示：证据的角色——把 12 句关于经济的话分成三类：理论（先验）/ 历史（事实）/ 应用（解释）。
// 每一类对应不同的“证据”：理论看推导，历史看档案，应用要同时过机制、事实、替代解释三关。
// 读者先分类，再核对；演示会统计得分，并逐条说明为什么归这一类、该用什么证据去查。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const KINDS = [
    { id: "theory", label: T("理论（先验）", "Theory (a priori)"), color: "var(--orange-ink)", bg: "var(--orange-soft)",
      ev: T("证据：推导是否成立。数据既不能证实也不能证伪。", "Evidence: does the derivation hold? Data neither confirm nor refute it.") },
    { id: "history", label: T("历史（事实）", "History (fact)"), color: "var(--blue)", bg: "var(--blue-soft)",
      ev: T("证据：档案、统计口径、来源核对。可修订，但本身不解释。", "Evidence: archives, statistical definitions, source checks. Revisable, but explains nothing alone.") },
    { id: "applied", label: T("应用（解释）", "Applied (interpretation)"), color: "var(--green)", bg: "var(--green-soft)",
      ev: T("证据：机制用对了吗 · 事实核对了吗 · 替代解释排除了吗。", "Evidence: mechanism right? · facts checked? · rival explanations ruled out?") },
  ];

  const items = [
    { s: T("信用扩张会把市场利率压到自然利率之下。", "Credit expansion lowers the market rate below the natural rate."), k: "theory",
      why: T("不指任何年份；从“新增贷款不由储蓄支撑”这一定义推出。要反驳它，只能指出推导里的漏洞。", "Names no year; follows from the definition of loans not backed by saving. To refute it you would have to find a hole in the derivation.") },
    { s: T("2020–21 年美国 M2 增长了约 40%。", "US M2 grew about 40% in 2020–21."), k: "history",
      why: T("一个可以到美联储 H.6 报表核对的数字。它不说为什么涨、涨了以后怎样。", "A number you can check against the Fed's H.6 release. It says nothing about why it rose or what followed.") },
    { s: T("2021 年 CPI 的上升是 2020 年货币增长造成的。", "The 2021 CPI rise was caused by 2020 money growth."), k: "applied",
      why: T("把理论（货币非中性）用到一段特定历史上。要成立，得证明注入点在家庭端、货币需求没有同步上升、供应链只解释了一部分。", "Theory (non-neutrality of money) applied to one episode. To stand, it must show the injection point was households, money demand did not rise in step, and supply chains explain only part.") },
    { s: T("交换双方在交换那一刻都预期获益。", "Both parties to an exchange expect to gain at the moment of trading."), k: "theory",
      why: T("从行动公理直接推出：不预期获益就不会自愿交换。任何统计都改变不了它。", "Follows directly from the action axiom: without expected gain there is no voluntary exchange. No statistic can alter it.") },
    { s: T("1929 年 10 月 24 日道琼斯指数单日下跌约 11%（盘中）。", "On 24 October 1929 the Dow fell about 11% intraday."), k: "history",
      why: T("交易所记录里的一个事实。它本身既不支持也不反对任何周期理论。", "A fact in the exchange's records. By itself it neither supports nor opposes any cycle theory.") },
    { s: T("1920 年代美联储的信用扩张是 1929 年崩盘的主因。", "The Fed's credit expansion of the 1920s was the main cause of the 1929 crash."), k: "applied",
      why: T("罗斯巴德的判断。证据要看：货币增长约 60% 流向了哪里（股票保证金、建筑）、技术繁荣能解释多少、货币主义的替代解释留下了什么残余。", "Rothbard's judgment. Evidence: where the roughly 60% money growth went (margin loans, construction), how much the technology boom explains, what residue the monetarist rival leaves.") },
    { s: T("新钱不会同时、等比例地抬高所有价格。", "New money does not raise all prices at once and in proportion."), k: "theory",
      why: T("坎蒂隆效应的先验形式：钱总是先到某些人手里，他们先花，价格从那里开始变。这是关于任何货币注入的结构命题。", "The a priori form of the Cantillon effect: money always reaches some hands first, they spend first, prices move from there. A structural claim about any injection.") },
    { s: T("日本公共债务在 2010 年代超过了 GDP 的 200%。", "Japan's public debt passed 200% of GDP in the 2010s."), k: "history",
      why: T("财务省与 IMF 的统计。口径（总债务 vs 净债务）会影响数字，但这是核对问题，不是解释问题。", "Ministry of Finance and IMF statistics. The definition (gross vs net) changes the number, but that is a checking problem, not an interpretive one.") },
    { s: T("日本 1990 年后的长期停滞，主要因为政策阻止了错误投资的清算。", "Japan's post-1990 stagnation was mainly because policy prevented the liquidation of malinvestment."), k: "applied",
      why: T("鲍威尔 2002 年的论点。要过三关：僵尸银行与僵尸企业的证据（星岳雄、卡巴列罗等）、人口与通缩的替代解释能解释多少、以及为什么零利率没有再造一个泡沫。", "Powell's 2002 thesis. Three bars: evidence on zombie banks and firms (Hoshi, Caballero and others), how much demographics and deflation explain instead, and why zero rates did not recreate a bubble.") },
    { s: T("生产结构越迂回，产出越高，但完成所需时间越长。", "A more roundabout production structure yields more output but takes longer to complete."), k: "theory",
      why: T("庞巴维克的命题，从“工具先于产品”的行动逻辑推出。它不是对某国工业的观察。", "Böhm-Bawerk's proposition, derived from the logic that tools precede products. It is not an observation about any country's industry.") },
    { s: T("美联储资产负债表从 2008 年的约 0.9 万亿美元扩张到 2014 年的约 4.5 万亿美元。", "The Fed's balance sheet grew from about $0.9 trillion in 2008 to about $4.5 trillion by 2014."), k: "history",
      why: T("美联储 H.4.1 周报里的数字。它告诉你规模，不告诉你这些钱去了哪里、为什么 CPI 没动。", "Numbers from the Fed's weekly H.4.1 release. They tell you the size, not where the money went or why CPI did not move.") },
    { s: T("2010–19 年 QE 没有引发 CPI 通胀，是因为新钱停在了银行准备金里、货币需求同时暴增。", "QE in 2010–19 produced no CPI inflation because the new money sat in bank reserves while money demand surged."), k: "applied",
      why: T("一个应用层的解释。证据：超额准备金的规模、货币流通速度的下降、家庭与企业的现金持有变化——以及它能否解释资产价格为什么涨了。", "An application-level explanation. Evidence: the size of excess reserves, the fall in velocity, changes in household and corporate cash holdings — and whether it also accounts for why asset prices did rise.") },
  ];

  const picks = new Array(items.length).fill(null);
  let checked = false;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧭 证据的角色：这句话是理论、历史，还是应用？", "🧭 The role of evidence: is this claim theory, history, or application?")}</div>
      <div class="demo-block">
        <div class="cmp-3">
          ${KINDS.map((k) => `<div class="cmp-cell" style="background:${k.bg};border-color:${k.color}"><h5 style="color:${k.color}">${k.label}</h5><div style="font-size:12.5px;line-height:1.5">${k.ev}</div></div>`).join("")}
        </div>
      </div>
      <div class="demo-block" id="er-list"></div>
      <div class="demo-btns">
        <button class="demo-btn" id="er-check">${T("核对答案", "Check answers")}</button>
        <button class="demo-btn" id="er-reveal">${T("直接看答案", "Reveal all")}</button>
        <button class="demo-btn" id="er-reset">${T("重来", "Reset")}</button>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("已分类", "Sorted")}</div><div class="v" id="er-done">0 / ${items.length}</div></div>
        <div class="stat"><div class="k">${T("正确", "Correct")}</div><div class="v acc" id="er-score">–</div></div>
        <div class="stat"><div class="k">${T("最常混淆", "Most confused")}</div><div class="v" id="er-conf" style="font-size:14px">–</div></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="er-log"></div></div>
      <p class="demo-tip">${T(
        "看每条说明里的<strong>证据</strong>那一句：理论只看推导，历史只看档案，应用要同时过三关。最容易错的是把“应用”当成“理论”——一旦混了，你就会拿一段历史去“证伪”先验命题，或拿先验命题去断言下个月崩盘。",
        "Read the <strong>evidence</strong> line in each explanation: theory is checked by derivation, history by archives, application by three bars at once. The commonest slip is filing an “applied” claim under “theory” — do that and you will end up “falsifying” an a priori law with one episode, or using an a priori law to call next month's crash."
      )}</p>
    </div>`;

  const list = root.querySelector("#er-list");
  const log = root.querySelector("#er-log");

  function paintList() {
    list.innerHTML = items.map((it, i) => {
      const p = picks[i];
      const right = checked && p === it.k;
      const wrong = checked && p !== null && p !== it.k;
      const kind = KINDS.find((k) => k.id === it.k);
      let verdict = "";
      if (checked) {
        verdict = `<div class="scn-meta">${right ? `<span class="pill ok">${T("对", "Right")}</span>` : `<span class="pill bad">${p === null ? T("未答", "Unanswered") : T("错", "Wrong")}</span>`} <b style="color:${kind.color}">${kind.label}</b> — ${it.why}<br><span style="color:var(--muted)">${kind.ev}</span></div>`;
      }
      return `<div class="scn" style="${right ? "border-color:var(--green)" : wrong ? "border-color:var(--red)" : ""}">
        <div class="scn-q"><span style="color:var(--muted);font-family:var(--mono);font-size:12px;margin-right:8px">${String(i + 1).padStart(2, "0")}</span>${it.s}</div>
        <div class="demo-seg" data-i="${i}">
          ${KINDS.map((k) => `<button data-k="${k.id}" class="${p === k.id ? "on" : ""}" ${checked ? "disabled" : ""}>${k.label}</button>`).join("")}
        </div>
        ${verdict}
      </div>`;
    }).join("");
    list.querySelectorAll(".demo-seg button").forEach((b) => b.addEventListener("click", () => {
      const i = +b.parentElement.dataset.i;
      picks[i] = b.dataset.k;
      paintList(); paintStats();
    }));
  }

  function paintStats() {
    const done = picks.filter((p) => p !== null).length;
    root.querySelector("#er-done").textContent = `${done} / ${items.length}`;
    if (!checked) { root.querySelector("#er-score").textContent = "–"; root.querySelector("#er-conf").textContent = "–"; log.innerHTML = ""; return; }
    const score = items.filter((it, i) => picks[i] === it.k).length;
    root.querySelector("#er-score").textContent = `${score} / ${items.length}`;
    // 混淆矩阵：哪一对最常混
    const pairs = {};
    items.forEach((it, i) => { if (picks[i] && picks[i] !== it.k) { const key = it.k + "→" + picks[i]; pairs[key] = (pairs[key] || 0) + 1; } });
    const top = Object.entries(pairs).sort((a, b) => b[1] - a[1])[0];
    const lab = (id) => KINDS.find((k) => k.id === id).label;
    root.querySelector("#er-conf").textContent = top ? `${lab(top[0].split("→")[0])} → ${lab(top[0].split("→")[1])} (${top[1]})` : T("无", "none");
    const lines = [];
    if (score === items.length) lines.push(`<span class="ok">${T("全对。你已经能把米塞斯的三层分开——接下来四节案例，每一段都请自问：这是理论、事实，还是解释？", "All correct. You can separate Mises's three tiers — in the four case lessons ahead, ask of every paragraph: theory, fact, or interpretation?")}</span>`);
    else {
      if (pairs["applied→theory"]) lines.push(`<span class="bad">${T("你把应用当成了理论：", "You filed applied claims under theory: ")}${pairs["applied→theory"]}${T(" 处。这是最危险的混淆——它让人以为“2021 年通胀由印钱造成”像“交换双方预期获益”一样不需要核对事实。", " time(s). This is the most dangerous slip — it makes “the 2021 inflation was caused by printing” look as fact-free as “both parties expect to gain.”")}</span>`);
      if (pairs["theory→applied"]) lines.push(`<span class="warn">${T("你把理论当成了应用：", "You filed theory under applied: ")}${pairs["theory→applied"]}${T(" 处。后果是你会去找数据“检验”一条先验命题——回归说不显著，你就以为它错了。", " time(s). The consequence: you will go looking for data to “test” an a priori law — and when the regression is insignificant you will think the law failed.")}</span>`);
      if (pairs["history→applied"] || pairs["applied→history"]) lines.push(`<span class="warn">${T("历史与应用混了：一个数字（M2 +40%）本身不解释任何事；给它加上“所以”之后才是解释，而“所以”要过三关。", "History and application got mixed: a number (M2 +40%) explains nothing by itself; only once you add “therefore” does it become an interpretation — and “therefore” has to clear three bars.")}</span>`);
      if (pairs["history→theory"] || pairs["theory→history"]) lines.push(`<span class="warn">${T("理论与历史混了：理论不含年份与地点，历史全是年份与地点。", "Theory and history got mixed: theory contains no dates or places; history is nothing but dates and places.")}</span>`);
    }
    lines.push(T("计数：理论 4 条、历史 4 条、应用 4 条。奥派经验研究的全部工作，都在“应用”那 4 条所属的层面。", "Count: 4 theory, 4 history, 4 applied. All of Austrian empirical work happens on the level of those 4 applied claims."));
    log.innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  }

  root.querySelector("#er-check").addEventListener("click", () => { checked = true; paintList(); paintStats(); });
  root.querySelector("#er-reveal").addEventListener("click", () => { items.forEach((it, i) => { picks[i] = it.k; }); checked = true; paintList(); paintStats(); });
  root.querySelector("#er-reset").addEventListener("click", () => { picks.fill(null); checked = false; paintList(); paintStats(); });
  paintList(); paintStats();
}
