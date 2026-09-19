// 交互演示：机会透镜——选一条通道（研究 / 创业 / 投资 / 写作），回答 5 个问题（技能、时间、资本、风险承受、语言），
// 工具真算四条通道的“契合度”，并为所选通道输出三步具体行动（时间线 .tl）、相关课与一条风险提示。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const LANES = [
    ["research", T("研究", "Research")],
    ["build", T("创业 / 开发", "Building")],
    ["invest", T("投资", "Investing")],
    ["write", T("写作与教学", "Writing & teaching")],
  ];
  const SKILLS = [
    ["theory", T("理论与阅读", "Theory & reading")],
    ["code", T("编程 / 产品", "Code / product")],
    ["finance", T("金融与数据", "Finance & data")],
    ["writing", T("写作与表达", "Writing & speaking")],
  ];
  const CAPITAL = [
    ["none", T("几乎没有", "Almost none")],
    ["small", T("几个月生活费", "A few months' expenses")],
    ["meaningful", T("可承受损失的一笔钱", "A sum I can afford to lose")],
  ];
  const LANGS = [
    ["zh", T("主要中文", "Mainly Chinese")],
    ["en", T("主要英文", "Mainly English")],
    ["both", T("中英都行", "Both")],
  ];

  const s = { lane: "research", skill: "theory", hours: 6, capital: "small", risk: 3, lang: "both" };

  // 契合度：每条通道对五个输入的权重（0–1），加权求和后归一到 0–100
  const fit = () => {
    const skillW = {
      research: { theory: 1, code: 0.5, finance: 0.7, writing: 0.6 },
      build: { theory: 0.4, code: 1, finance: 0.6, writing: 0.5 },
      invest: { theory: 0.6, code: 0.5, finance: 1, writing: 0.3 },
      write: { theory: 0.7, code: 0.3, finance: 0.4, writing: 1 },
    };
    const hoursNeed = { research: 8, build: 12, invest: 2, write: 4 };
    const capW = {
      research: { none: 0.8, small: 1, meaningful: 1 },
      build: { none: 0.4, small: 0.8, meaningful: 1 },
      invest: { none: 0.1, small: 0.6, meaningful: 1 },
      write: { none: 1, small: 1, meaningful: 1 },
    };
    const riskIdeal = { research: 3, build: 5, invest: 2, write: 3 }; // 投资通道：偏好低风险承受（纪律优先）
    const langW = {
      research: { zh: 0.5, en: 1, both: 1 },
      build: { zh: 0.8, en: 0.9, both: 1 },
      invest: { zh: 0.9, en: 0.9, both: 1 },
      write: { zh: 1, en: 0.7, both: 1 }, // 中文内容供给薄 → 中文写作契合度更高
    };
    const out = {};
    for (const [k] of LANES) {
      const sk = skillW[k][s.skill];
      const hr = Math.min(1, s.hours / hoursNeed[k]);
      const cp = capW[k][s.capital];
      const rk = 1 - Math.abs(s.risk - riskIdeal[k]) / 4;
      const lg = langW[k][s.lang];
      const score = (sk * 0.35 + hr * 0.25 + cp * 0.15 + rk * 0.1 + lg * 0.15) * 100;
      out[k] = { score: Math.round(score), sk, hr, cp, rk, lg };
    }
    return out;
  };

  const steps = (k, f) => {
    const L = (n) => T("阶段 ", "Stage ") + n;
    if (k === "research") return {
      steps: [
        [T("第 1–30 天", "Days 1–30"), T("从 " + L("13.2") + "–" + L("13.4") + " 选一篇范文，选一个它没覆盖的新事件（如某国 2015–2020 年的信贷周期）；读三遍，写出机制链条。", "Pick a model paper from " + L("13.2") + "–" + L("13.4") + " and a new episode it does not cover (say one country's 2015–2020 credit cycle); read it three times and write out the mechanism chain.")],
        [T("第 31–60 天", "Days 31–60"), T(s.skill === "finance" ? "你的强项是数据：为新事件收集央行资产负债表、行业投资与价格比，逐环对照链条，写“机制”部分。" : "收集新事件的同类数据（央行资产负债表、行业投资、价格比），逐环对照链条，写“机制”部分——数据不够就写“数据不足”，不要编。", s.skill === "finance" ? "Your edge is data: gather the balance sheet, industry investment and price ratios for the new episode, match the chain link by link, write the mechanism section." : "Gather the same type of data for the new episode (central-bank balance sheet, industry investment, price ratios), match the chain link by link, and write the mechanism section — where data are missing, say so; never fill in.")],
        [T("第 61–90 天", "Days 61–90"), T("初稿 8,000 词，找一位奥派与一位非奥派读者，改，投 AERC 或 SDAE 的摘要。", "An 8,000-word draft; one Austrian and one non-Austrian reader; revise; submit an abstract to AERC or SDAE.")],
      ],
      lessons: ["12.5", "13.1", "13.4", "∞.1", "∞.3"],
      risk: T(f.hr < 0.75 ? "每周 " + s.hours + " 小时不够写完一篇复现分析（需要约 8 小时）；把目标缩到“机制部分”即可。" : "赔率提醒：终身教职是彩票级别；把这篇论文当作“业余研究者”的第一块砖，而不是入场券。", f.hr < 0.75 ? s.hours + " hours a week is not enough to finish a replication (about 8 needed); shrink the target to the mechanism section alone." : "Odds reminder: tenure is lottery-like; treat this paper as an independent researcher's first brick, not an admission ticket."),
    };
    if (k === "build") return {
      steps: [
        [T("第 1–30 天", "Days 1–30"), T("列 5 个“有稀缺没价格”或“有判断缺信息”的场景（预测市场、比价工具、自托管、算法可选、增强判断的 AI），访谈 10 个潜在用户，用“解决谁的什么问题”测试筛到 1 个。", "List five situations of scarcity without a price or judgment without information (prediction market, price-comparison tool, self-custody, choice of algorithm, judgment-augmenting AI); interview ten potential users; use the “whose problem?” test to cut to one.")],
        [T("第 31–60 天", "Days 31–60"), T(s.skill === "code" ? "做最小原型——但先手工撮合一周，确认需求真实，再写代码。" : "你不是工程师：先用表格 + 群聊 + 操作手册手工跑通流程；找一位技术合伙人之前先有 10 个真实用户。", s.skill === "code" ? "Build the minimal prototype — but match by hand for a week first to confirm the demand is real, then write code." : "You are not the engineer: run the flow by hand with a spreadsheet, a group chat and a written procedure; get ten real users before seeking a technical cofounder.")],
        [T("第 61–90 天", "Days 61–90"), T("让一个不认识你的人完成一次真实使用或付费。做不到就回到第一步换场景。", "Get someone who does not know you to complete a real use or payment. If not, go back to step one and change the scenario.")],
      ],
      lessons: ["6.1", "6.3", "15.1", "16.2", "17.3", "18.3"],
      risk: T(f.cp < 0.6 ? "资本几乎为零：只做“手工先行”的原型，不辞职，不借钱；奥派产品的用户不是奥派社区。" : "最常见死法：产品是一个立场而不是一个解法——用户不知道什么是奥派，他们只在乎赔率 / 不丢币 / 更好的判断。", f.cp < 0.6 ? "Near-zero capital: build only the hand-run prototype; do not quit, do not borrow; and remember the users of an Austrian product are not the Austrian community." : "Most common death: the product is a position, not a solution — users do not know what Austrian means; they care about odds, not losing coins, or better judgment."),
    };
    if (k === "invest") return {
      steps: [
        [T("第 1–30 天", "Days 1–30"), T("写一页投资纪律：长期配置比例、调整频率（如每年 1 月）、“什么证据会改变看法”、“错三年怎么办”。", "Write a one-page discipline: long-run allocation, rebalancing frequency (say every January), “what evidence would change my mind,” “what if I am wrong for three years.”")],
        [T("第 31–60 天", "Days 31–60"), T("复盘自己过去一次择时决定：理由是不是“不可持续 = 马上崩”？把 " + L("14.4") + " 的失败预言栏读一遍。", "Post-mortem one of your past timing calls: was the reasoning “unsustainable = imminent”? Re-read the failed-predictions column of " + L("14.4") + ".")],
        [T("第 61–90 天", "Days 61–90"), T("按纪律执行，只在预定日期调整；其余时间不看盘。", "Execute by the rules, adjust only on the pre-set date; otherwise do not look.")],
      ],
      lessons: ["3.5", "4.3", "5.2", "10.3", "10.5", "14.4"],
      risk: T((s.risk >= 4 ? "你的风险承受偏高——这在投资通道里是危险信号：奥派判断只能用于配置，不能用于择时；" : "") + "本演示与本课不构成投资建议；期望值是“少犯大错”，不是超额收益。", (s.risk >= 4 ? "Your risk tolerance is high — a warning sign in this lane: Austrian judgment goes into allocation, never timing; " : "") + "neither this demo nor this course is investment advice; the realistic expectation is fewer big mistakes, not excess returns."),
    };
    return {
      steps: [
        [T("第 1–30 天", "Days 1–30"), T("选你最喜欢的一节课，讲给一个外行听，记录他哪里听不懂；那就是你的第一篇的结构。", "Pick your favorite lesson, explain it to a layperson, note where they get lost; that is the structure of your first piece.")],
        [T("第 31–60 天", "Days 31–60"), T(s.lang === "zh" || s.lang === "both" ? "发 4 篇（每篇 ≤ 1,500 字，一个机制 + 一个数字例子）。中文供给薄：考虑翻译一篇当代综述（先取得授权）并附解读。" : "发 4 篇（每篇 ≤ 1,000 词，一个机制 + 一个数字例子），固定节奏，每周一篇。", s.lang === "zh" || s.lang === "both" ? "Publish four pieces (≤ 1,500 characters each, one mechanism + one numerical example). Chinese supply is thin: consider translating one contemporary survey (with permission) and adding commentary." : "Publish four pieces (≤ 1,000 words each, one mechanism + one numerical example) on a fixed weekly cadence.")],
        [T("第 61–90 天", "Days 61–90"), T("继续发；开一个三人小组，每周讲一节课，教到第 12 节。", "Keep publishing; start a three-person group covering one lesson a week, through lesson 12.")],
      ],
      lessons: ["1.1", "4.3", "14.2", "16.1", "16.3", "∞.3"],
      risk: T("前 6 个月读者数会让你绝望——创作者经济的回报极度偏斜、靠时间长尾；别用“批评主流”换流量，那是供给最过剩的东西。", "Reader numbers in the first six months will be discouraging — creator returns are extremely skewed and grow with time; do not trade “criticize the mainstream” for traffic, it is the most oversupplied good."),
    };
  };

  const seg = (id, items, cur) => `<div class="demo-seg" id="${id}">${items.map(([k, l]) => `<button data-v="${k}" class="${k === cur ? "on" : ""}">${l}</button>`).join("")}</div>`;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔍 机会透镜：五个问题，一条通道，三步行动", "🔍 Opportunity lens: five questions, one lane, three steps")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("① 我想走的通道", "① The lane I want")}</label>
        ${seg("ol-lane", LANES, s.lane)}
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("② 我最强的技能", "② My strongest skill")}</label>
          ${seg("ol-skill", SKILLS, s.skill)}
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("③ 每周可投入：", "③ Hours per week: ")}<b id="ol-hours-v">${s.hours}</b> ${T("小时", "h")}</label>
          <input class="demo-slider" type="range" min="1" max="20" step="1" value="${s.hours}" id="ol-hours" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("④ 可动用的资本", "④ Capital available")}</label>
          ${seg("ol-capital", CAPITAL, s.capital)}
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("⑤ 风险承受（1 低 – 5 高）：", "⑤ Risk tolerance (1 low – 5 high): ")}<b id="ol-risk-v">${s.risk}</b></label>
          <input class="demo-slider" type="range" min="1" max="5" step="1" value="${s.risk}" id="ol-risk" />
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("⑥ 工作语言", "⑥ Working language")}</label>
        ${seg("ol-lang", LANGS, s.lang)}
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("四条通道的契合度（按你的五个答案真算）", "Fit across the four lanes (computed from your five answers)")}</label>
        <div id="ol-fit"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label" id="ol-plan-label"></label>
        <div class="tl" id="ol-tl"></div>
        <div class="demo-meta" id="ol-lessons"></div>
        <div class="demo-log" id="ol-risknote"></div>
      </div>
      <p class="demo-tip">${T(
        "契合度不是命令，是镜子：如果你选的通道不是最高分，看看差在哪一项——时间不够可以砍目标，资本不够可以手工先行，技能不对可以换通道或找合伙人。真正要看的是右边三步：<strong>第 90 天有没有一份别人能看到的东西。</strong>",
        "Fit is a mirror, not an order: if your chosen lane is not the top score, see which input is dragging it — too few hours means shrink the target, too little capital means prototype by hand, the wrong skill means change lane or find a partner. What matters is the three steps: <strong>on day 90, is there something someone else can see?</strong>"
      )}</p>
    </div>`;

  const paint = () => {
    const f = fit();
    const best = Object.entries(f).sort((a, b) => b[1].score - a[1].score)[0][0];
    root.querySelector("#ol-fit").innerHTML = LANES.map(([k, l]) => {
      const v = f[k].score;
      const color = k === s.lane ? "var(--orange)" : (k === best ? "var(--green)" : "var(--blue)");
      return `<div class="bar2"><span class="lab">${l}${k === s.lane ? " ★" : ""}</span><div class="track"><div class="fill" style="width:${v}%;background:${color}"></div></div><span class="val">${v}</span></div>`;
    }).join("");
    const p = steps(s.lane, f[s.lane]);
    const laneName = LANES.find(([k]) => k === s.lane)[1];
    root.querySelector("#ol-plan-label").textContent = T("你的通道：", "Your lane: ") + laneName + T("——前 90 天的三步", " — three steps for the first 90 days") + (best !== s.lane ? T("（提示：按你的答案，" + LANES.find(([k]) => k === best)[1] + " 的契合度更高）", " (note: by your answers, " + LANES.find(([k]) => k === best)[1] + " fits better)") : "");
    root.querySelector("#ol-tl").innerHTML = p.steps.map(([w, t]) => `<div class="tl-item"><span class="when">${w}</span>${t}</div>`).join("");
    root.querySelector("#ol-lessons").innerHTML = "<b>" + T("先复习：", "Review first: ") + "</b>" + p.lessons.map((n) => T("阶段 ", "Stage ") + n).join(" · ");
    root.querySelector("#ol-risknote").innerHTML = `<div class="warn">⚠ ${p.risk}</div>`;
  };

  const bindSeg = (id, key) => root.querySelectorAll("#" + id + " button").forEach((b) => b.addEventListener("click", () => {
    s[key] = b.dataset.v;
    root.querySelectorAll("#" + id + " button").forEach((x) => x.classList.toggle("on", x === b));
    paint();
  }));
  bindSeg("ol-lane", "lane");
  bindSeg("ol-skill", "skill");
  bindSeg("ol-capital", "capital");
  bindSeg("ol-lang", "lang");
  root.querySelector("#ol-hours").addEventListener("input", (e) => { s.hours = +e.target.value; root.querySelector("#ol-hours-v").textContent = s.hours; paint(); });
  root.querySelector("#ol-risk").addEventListener("input", (e) => { s.risk = +e.target.value; root.querySelector("#ol-risk-v").textContent = s.risk; paint(); });
  paint();
}
