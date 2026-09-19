// 交互演示：毕业设计构建器——选题目，填 8 个提示（问题+第一步、steelman、阶段 14.1 的第二到第五步、证据、限制），工具把它们拼成一份大纲（.demo-out），
// 按评分标准真算完整度，标出缺失的 steelman / 看不见 / 限制，检查“日期预测”，并提供打印 / 复制视图。任何内容都不会离开本页面。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const TOPICS = [
    { id: "ai", name: T("AI 产业补贴", "AI industrial subsidy"), lessons: ["18.2", "18.5", "8.3"],
      hint: T("对数据中心资本支出的 30% 补贴 + 低于市场 2 个百分点的贷款", "A 30% capex subsidy for data centers + loans 2 points below market") },
    { id: "cbdc", name: T("CBDC 推行", "CBDC rollout"), lessons: ["17.3", "8.4", "4.5"],
      hint: T("央行零售数字货币，可编程、可设有效期与用途限制", "A retail central-bank digital currency: programmable, with expiry and use limits") },
    { id: "rent", name: T("租金管制公投", "Rent-control referendum"), lessons: ["8.2", "1.3", "3.4"],
      hint: T("年涨幅上限 3%，覆盖 15 年以上楼龄的出租房", "A 3% annual cap on rent increases for rental buildings older than 15 years") },
    { id: "platform", name: T("平台反垄断案", "Platform antitrust case"), lessons: ["15.2", "6.4", "16.2"],
      hint: T("监管者要求平台开放推荐算法与应用商店", "A regulator orders the platform to open its algorithm and app store") },
    { id: "btc", name: T("比特币法币法案", "Bitcoin legal-tender law"), lessons: ["17.1", "17.2", "4.1"],
      hint: T("立法要求商家必须接受比特币支付", "A law requiring merchants to accept Bitcoin") },
    { id: "chinaswap", name: T("中国地方债置换", "China debt swaps"), lessons: ["13.6", "10.4", "8.4"],
      hint: T("省级低息长债置换融资平台高息隐性债务，且不得新增隐性债务（2023–24）", "Provincial long, low-interest bonds replace LGFVs' short, high-interest hidden debt, with no new hidden borrowing (2023–24)") },
  ];

  // 8 个提示 = 评分标准 1–8；min = 合格的最少字符数（中文按字，英文按字符，英文放宽 2.2 倍）
  // 8 个提示：标准 1+2（问题 + 第一步）、3（steelman）、4–7（阶段 14.1 的第二到第五步）、8（证据）、9（限制）；标准 10（纪律）由工具自动检查
  const PROMPTS = [
    { k: "question", label: T("1 · 问题 + 第一步：这项政策改变了什么规则、对谁？它是什么（机制细节）、宣称的目标、隐含的理论；点名你要用的理论", "1 · Question + step one: which rule does the policy change, and for whom? What it is (mechanics), its stated goal, its implicit theory; name the theory you will use"), min: 80, key: T("问题·第一步", "Q · step 1") },
    { k: "steelman", label: T("2 · Steelman：用支持者会认可的措辞写出他们最强的论证", "2 · Steelman: the strongest case for the policy, in words its supporters would accept"), min: 60, key: T("Steelman", "Steelman") },
    { k: "actors", label: T("3 · 第二步：谁在行动，谁的激励和调整边际变了——政策封住一个变量，每个行动人在哪些别的变量上调整？", "3 · Step two: who acts, and whose incentives and margins of adjustment change — the policy pins one variable; on which others does each actor adjust?"), min: 80, key: T("第二步", "Step 2") },
    { k: "unseen", label: T("4 · 第三步：看见的与看不见的——追踪资源：钱从哪来、去了哪、本来会去哪；被挤出的是什么、大约多大", "4 · Step three: the seen and the unseen — trace resources: where from, where to, where otherwise; what is crowded out and roughly how much"), min: 60, key: T("第三步", "Step 3") },
    { k: "prices", label: T("5 · 第四步：价格、知识与计算——哪一个价格被扭曲、它原本传递什么；哪些知识不再进入系统；谁无法再做计算", "5 · Step four: prices, knowledge and calculation — which price is distorted and what it carried; which knowledge stops entering the system; who can no longer calculate"), min: 60, key: T("第四步", "Step 4") },
    { k: "dynamics", label: T("6 · 第五步：动态：下一次干预与政治经济——会召唤什么下一次干预（方向与类型）；谁在游说，收益是否集中、成本是否分散", "6 · Step five: dynamics — the next intervention and the political economy: what it summons next (direction and type); who lobbies, are benefits concentrated and costs dispersed"), min: 60, key: T("第五步", "Step 5") },
    { k: "evidence", label: T("7 · 什么证据会改变你的看法：至少两个可观察的事实", "7 · What evidence would change your mind: at least two observable facts"), min: 40, key: T("证据", "Evidence") },
    { k: "limits", label: T("8 · 限制：没覆盖什么、假设了什么、什么条件下结论不成立（“看情况”——看什么情况）", "8 · Limits: what is not covered, what is assumed, when the conclusion fails (“it depends” — on what)"), min: 40, key: T("限制", "Limits") },
  ];
  const scale = en ? 2.2 : 1;

  let topic = TOPICS[0];
  let printView = false;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧱 毕业设计构建器：八个提示，一份大纲，一次打分", "🧱 Capstone builder: eight prompts, one outline, one score")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("① 选题目", "① Pick a topic")}</label>
        <div class="demo-seg" id="cb-topics">${TOPICS.map((t) => `<button data-t="${t.id}" class="${t.id === topic.id ? "on" : ""}">${t.name}</button>`).join("")}</div>
        <div class="demo-meta" id="cb-topic-meta"></div>
      </div>
      <div class="demo-block" id="cb-prompts">
        ${PROMPTS.map((p) => `<div class="demo-block"><label class="demo-label" for="cb-ta-${p.k}">${p.label}</label><textarea class="demo-ta" id="cb-ta-${p.k}" rows="3"></textarea></div>`).join("")}
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("② 完整度（按十条评分标准真算）", "② Completeness (scored against the ten criteria)")}</label>
        <div id="cb-bars"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("总分", "Score")}</div><div class="v" id="cb-score">0</div></div>
          <div class="stat"><div class="k">${T("已填", "Filled")}</div><div class="v" id="cb-filled">0/8</div></div>
          <div class="stat"><div class="k">${T("字数", "Length")}</div><div class="v" id="cb-len">0</div></div>
          <div class="stat"><div class="k">${T("日期预测", "Dated calls")}</div><div class="v" id="cb-dates">0</div></div>
        </div>
        <div class="demo-log" id="cb-flags"></div>
      </div>
      <div class="demo-block">
        <div class="demo-btns">
          <button class="demo-btn" id="cb-print">${T("打印 / 纯文本视图", "Print / plain view")}</button>
          <button class="demo-btn" id="cb-copy">${T("复制大纲", "Copy outline")}</button>
          <button class="demo-btn" id="cb-clear">${T("清空", "Clear")}</button>
        </div>
        <label class="demo-label">${T("③ 你的大纲（仅在本页面内，刷新即消失）", "③ Your outline (lives only on this page; reload and it is gone)")}</label>
        <div class="demo-out" id="cb-out" style="white-space:pre-wrap;word-break:break-word"></div>
      </div>
      <p class="demo-tip">${T(
        "先填 2（steelman）和 7（证据），再按阶段 14.1 的五步顺序填 3–6。看三面旗：<strong>steelman / 看不见 / 限制</strong>缺任何一面，总分封顶 60。“日期预测”计数不为零时，检查你是否把“不可持续”写成了“某年会崩”。总分 ≥ 80 且三面旗齐全，才算合格线。",
        "Fill 2 (steelman) and 7 (evidence) first, then 3–6 in the order of Stage 14.1's five steps. Watch three flags: if <strong>steelman / unseen / limits</strong> is missing, the score is capped at 60. When the “dated calls” count is not zero, check whether you have turned “unsustainable” into “crashes in year X.” Score ≥ 80 with all three flags present is the passing line."
      )}</p>
    </div>`;

  const ta = (k) => root.querySelector("#cb-ta-" + k);
  const out = root.querySelector("#cb-out");

  // 日期预测检测：年份 + 崩盘/通胀率/价格类词，或 “X 年内 …”
  const datedCalls = (text) => {
    const reZh = /(20[2-9][0-9]\s*年|[一二三四五六七八九十0-9]+\s*年内)[^。\n]{0,30}?(崩|暴跌|翻倍|通胀|涨到|跌到|归零|见顶|见底)/g;
    const reEn = /((in|by|before|within)\s+(20[2-9][0-9]|(one|two|three|four|five|six|\d+)\s+years?))[^.\n]{0,40}?(crash|collapse|double|inflation|hit|reach|zero|peak|bottom)/gi;
    return ((text.match(reZh) || []).length + (text.match(reEn) || []).length);
  };

  const evaluate = () => {
    const vals = PROMPTS.map((p) => ({ ...p, text: ta(p.k).value.trim() }));
    let filled = 0, total = 0, len = 0;
    const bars = vals.map((v) => {
      const need = Math.round(v.min * scale);
      const ratio = Math.min(1, v.text.length / need);
      if (v.text.length > 0) filled++;
      len += v.text.length;
      total += ratio;
      const pct = Math.round(ratio * 100);
      const color = ratio >= 1 ? "var(--green)" : ratio > 0 ? "var(--orange)" : "var(--line)";
      return `<div class="bar2"><span class="lab">${v.key}</span><div class="track"><div class="fill" style="width:${pct}%;background:${color}"></div></div><span class="val">${v.text.length}/${need}</span></div>`;
    });
    root.querySelector("#cb-bars").innerHTML = bars.join("");
    const all = vals.map((v) => v.text).join("\n");
    const dated = datedCalls(all);
    const get = (k) => vals.find((v) => v.k === k);
    const missing = ["steelman", "unseen", "limits"].filter((k) => get(k).text.length < Math.round(get(k).min * scale) * 0.5);
    // 证据条要有两个可观察事实：粗略以分号/换行/“(2)”/“二”计数
    const evText = get("evidence").text;
    const evCount = evText ? Math.max(1, (evText.match(/[;；\n]|\(2\)|（2）|2[.、)]|second|其二|第二/gi) || []).length + 0) : 0;
    let score = Math.round((total / PROMPTS.length) * 100);
    if (missing.length) score = Math.min(score, 60);
    if (dated > 0) score = Math.max(0, score - 15 * dated);
    if (evText && evCount < 2) score = Math.max(0, score - 5);
    root.querySelector("#cb-score").textContent = score;
    root.querySelector("#cb-score").className = "v " + (score >= 80 && !missing.length ? "pos" : score >= 50 ? "acc" : "neg");
    root.querySelector("#cb-filled").textContent = filled + "/8";
    root.querySelector("#cb-len").textContent = len;
    root.querySelector("#cb-dates").textContent = dated;
    root.querySelector("#cb-dates").className = "v " + (dated ? "neg" : "pos");

    const flags = [];
    const names = { steelman: T("steelman（标准 3）", "steelman (item 3)"), unseen: T("第三步·看不见的一栏（标准 5）", "step three, the unseen column (item 5)"), limits: T("限制（标准 9）", "limits (item 9)") };
    for (const m of missing) flags.push(`<div class="bad">✗ ${T("缺", "Missing: ")}${names[m]}${T("——总分封顶 60。", " — score capped at 60.")}</div>`);
    if (dated) flags.push(`<div class="bad">✗ ${T("检测到 " + dated + " 处疑似“日期预测”（年份/年内 + 崩盘/通胀/价格）——标准 10：模式可以，日期不行。", dated + " possible dated prediction(s) detected (year / within N years + crash / inflation / price) — item 10: patterns yes, dates no.")}</div>`);
    if (evText && evCount < 2) flags.push(`<div class="warn">! ${T("标准 8 要求至少两个可观察事实；用分号或 (1)(2) 分开。", "Item 8 asks for at least two observable facts; separate them with a semicolon or (1)(2).")}</div>`);
    const q = get("question").text;
    if (q && !/(谁|对.*(人|者|方|户|企业|市)|for whom|who|whose|which)/i.test(q)) flags.push(`<div class="warn">! ${T("问题里没有“对谁”——标准 1 要求说清改变了什么规则、对谁。", "The question does not say “for whom” — item 1 asks which rule changes and for whom.")}</div>`);
    const ought = (all.match(/应该|必须|无权|不该|should|must|has no right|ought/gi) || []).length;
    if (ought >= 3) flags.push(`<div class="warn">! ${T("出现 " + ought + " 次“应该/必须/无权”——每一个都问自己：是推导出来的，还是带进来的？", ought + " occurrences of should / must / has no right — for each, ask: derived, or imported?")}</div>`);
    if (!flags.length && filled === 8) flags.push(`<div class="ok">✓ ${T("三面旗齐全，无日期预测。剩下的交给同行评审清单。", "All three flags present, no dated calls. The rest is for the peer-review checklist.")}</div>`);
    if (filled === 0) flags.push(`<div>${T("从第 2 条和第 7 条开始填。", "Start with items 2 and 7.")}</div>`);
    root.querySelector("#cb-flags").innerHTML = flags.join("");

    // 大纲
    const lines = [];
    lines.push((en ? "AUSTRIAN ANALYSIS — " : "奥派分析 —— ") + topic.name);
    lines.push(T("相关课：", "Lessons: ") + topic.lessons.map((l) => T("阶段 ", "Stage ") + l).join(", "));
    lines.push("");
    for (const v of vals) {
      lines.push(v.label.split(/[:：]/)[0].replace(/\s*·\s*/, ". "));
      lines.push(v.text ? "  " + v.text.replace(/\n/g, "\n  ") : "  " + T("（未填）", "(empty)"));
      lines.push("");
    }
    lines.push(T("10. 纪律 · 日期预测：", "10. Discipline · dated predictions: ") + (dated ? T("有 " + dated + " 处，需删除", dated + " found — remove") : T("无", "none")));
    lines.push(T("10. 纪律 · 清晰：把任一段读给一个外行，他能复述吗？", "10. Discipline · clarity: read any paragraph to a layperson — can they repeat it?"));
    lines.push("");
    lines.push(T("完整度 ", "Completeness ") + score + "/100" + (missing.length ? T("（缺：", " (missing: ") + missing.map((m) => names[m]).join(", ") + ")" : ""));
    out.textContent = lines.join("\n");
  };

  const paintTopic = () => {
    root.querySelector("#cb-topic-meta").innerHTML = "<b>" + T("条文提示：", "Provision: ") + "</b>" + topic.hint + " · <b>" + T("先复习：", "Review: ") + "</b>" + topic.lessons.map((l) => T("阶段 ", "Stage ") + l).join(", ");
    ta("question").placeholder = T("例：" + topic.hint + "，会怎样改变……对谁……", "e.g. " + topic.hint + " — how will it change … for whom …");
  };

  root.querySelectorAll("#cb-topics button").forEach((b) => b.addEventListener("click", () => {
    topic = TOPICS.find((t) => t.id === b.dataset.t);
    root.querySelectorAll("#cb-topics button").forEach((x) => x.classList.toggle("on", x === b));
    paintTopic();
    evaluate();
  }));
  PROMPTS.forEach((p) => ta(p.k).addEventListener("input", evaluate));
  root.querySelector("#cb-print").addEventListener("click", () => {
    printView = !printView;
    root.querySelector("#cb-prompts").style.display = printView ? "none" : "";
    root.querySelector("#cb-print").textContent = printView ? T("返回编辑", "Back to editing") : T("打印 / 纯文本视图", "Print / plain view");
    out.style.fontFamily = printView ? "inherit" : "";
    out.style.color = printView ? "var(--ink)" : "";
    out.style.fontSize = printView ? "15px" : "";
  });
  root.querySelector("#cb-copy").addEventListener("click", async () => {
    const btn = root.querySelector("#cb-copy");
    try {
      await navigator.clipboard.writeText(out.textContent);
      btn.textContent = T("已复制 ✓", "Copied ✓");
    } catch {
      btn.textContent = T("请手动选中复制", "Select and copy manually");
    }
    setTimeout(() => { btn.textContent = T("复制大纲", "Copy outline"); }, 1600);
  });
  root.querySelector("#cb-clear").addEventListener("click", () => { PROMPTS.forEach((p) => { ta(p.k).value = ""; }); evaluate(); });

  paintTopic();
  evaluate();
}
