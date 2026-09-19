// 交互演示：路径规划器——选目标（学术 / 建设者 / 投资研究 / 写作）与约束（每周时间、资金、地区、当前阶段），
// 工具真算：按时间预算推出节奏与产出，拼出一条随每个输入变化的时间线、未来 30 天清单，以及该路线的“现实提示”。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const GOALS = [
    { id: "academic", label: T("学术", "Academic") },
    { id: "builder", label: T("建设者", "Builder") },
    { id: "investor", label: T("投资研究", "Investor") },
    { id: "writer", label: T("写作 / 政策", "Writer / Policy") },
  ];
  const HOURS = [2, 5, 10, 20];
  const MONEY = [
    { id: "none", label: T("没有预算", "No budget") },
    { id: "some", label: T("有一些", "Some") },
    { id: "degree", label: T("能负担学位", "Can fund a degree") },
  ];
  const LOCS = [
    { id: "us", label: T("美国", "US") },
    { id: "eu", label: T("欧洲", "Europe") },
    { id: "asia", label: T("中国 / 亚洲", "China / Asia") },
    { id: "remote", label: T("任何地方（远程）", "Anywhere (remote)") },
  ];
  const STAGES = [
    { id: "student", label: T("在校学生", "Student") },
    { id: "early", label: T("职业早期", "Early career") },
    { id: "mid", label: T("中途转行", "Mid-career switcher") },
  ];

  const S = { goal: "academic", hours: 5, money: "none", loc: "us", stage: "student" };

  // 每条路线的“大作品”工时（估算，用于节奏计算）与名称
  const MAJOR = {
    academic: { h: 150, name: T("复现论文", "replication paper") },
    builder: { h: 60, name: T("小工具", "small tool") },
    investor: { h: 80, name: T("坎蒂隆追踪复现", "Cantillon tracing") },
    writer: { h: 30, name: T("长文", "long essay") },
  };
  const SHORT_H = 8; // 一篇短文的估算工时

  const PACE = {
    2: [T("第 1–6 月", "Month 1–6"), T("第 7–12 月", "Month 7–12"), T("第 2 年", "Year 2"), T("第 3–5 年", "Year 3–5")],
    5: [T("第 1–3 月", "Month 1–3"), T("第 4–9 月", "Month 4–9"), T("第 1–2 年", "Year 1–2"), T("第 2–4 年", "Year 2–4")],
    10: [T("第 1–3 月", "Month 1–3"), T("第 4–6 月", "Month 4–6"), T("第 1 年", "Year 1"), T("第 2–3 年", "Year 2–3")],
    20: [T("第 1–6 周", "Week 1–6"), T("第 2–4 月", "Month 2–4"), T("第 5–12 月", "Month 5–12"), T("第 2 年", "Year 2")],
  };

  const seg = (id, items, cur) => `<div class="demo-seg" id="pp-${id}">${items.map((it) => {
    const v = it.id != null ? it.id : it;
    const lab = it.label != null ? it.label : (v === 20 ? "20+" : String(v));
    return `<button data-v="${v}" class="${String(v) === String(cur) ? "on" : ""}">${lab}</button>`;
  }).join("")}</div>`;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧭 路径规划器：从你的约束出发，拼一条真实可走的路", "🧭 Path picker: build a route you can actually walk, from your own constraints")}</div>
      <div class="demo-block">
        <div class="demo-label">${T("目标", "Goal")}</div>
        ${seg("goal", GOALS, S.goal)}
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <div class="demo-label">${T("每周可投入（小时）", "Hours per week")}</div>
          ${seg("hours", HOURS, S.hours)}
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("资金", "Money")}</div>
          ${seg("money", MONEY, S.money)}
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("地区", "Location")}</div>
          ${seg("loc", LOCS, S.loc)}
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("当前阶段", "Current stage")}</div>
          ${seg("stage", STAGES, S.stage)}
        </div>
      </div>
      <div class="stat-row" id="pp-stats"></div>
      <div id="pp-note"></div>
      <div class="demo-block">
        <div class="demo-label" id="pp-tl-label"></div>
        <div class="tl" id="pp-tl"></div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("未来 30 天清单", "Next 30 days")}</div>
        <div class="demo-out" id="pp-30"></div>
      </div>
      <p class="demo-tip">${T(
        "看三件事：<strong>节奏</strong>随每周小时数拉长或压缩（时间线上的“第几月”会变）；<strong>资源</strong>随资金与地区替换（免费图书馆 vs 学位项目，美国会议 vs 远程投稿）；<strong>第一步</strong>随当前阶段改变（学生找奖学金，转行者先别辞职）。路线只是骨架——真正的作品集得你自己做。",
        "Watch three things: the <strong>pace</strong> stretches or compresses with hours per week (the month labels on the timeline change); the <strong>resources</strong> swap with money and location (free libraries vs a degree program, US conferences vs remote submissions); and the <strong>first step</strong> shifts with your stage (students hunt fellowships, switchers keep the day job). The route is a skeleton — the portfolio is yours to build."
      )}</p>
    </div>`;

  // —— 路线内容 ——
  function build() {
    const g = S.goal, h = S.hours, m = S.money, L = S.loc, st = S.stage;
    const annual = h * 50;
    const major = MAJOR[g];
    const majors = Math.max(1, Math.floor((annual * 0.5) / major.h));
    const shorts = Math.floor((annual * 0.5) / SHORT_H);
    const weeksToMajor = Math.ceil(major.h / (h * 0.5));
    const pace = PACE[h];
    const P = [[], [], [], []]; // four phases

    // 共同的第一阶段：重读 + 建立作品的容器
    const reread = {
      academic: T("重读阶段 12.5 与阶段 13.1：当代经典与“解释而非检验”的经验方法", "Reread Stage 12.5 and Stage 13.1: the contemporary classics and the explain-don't-test empirical method"),
      builder: T("重读阶段 15.1、15.3 与 18.6：网络效应、零边际成本定价、算法定价——市场过程的工程版", "Reread Stage 15.1, 15.3 and 18.6: network effects, zero-marginal-cost pricing, algorithmic pricing — the market process as engineering"),
      investor: T("重读阶段 10.5、5.2 与 4.3，再读加里森《时间与货币》：信用流向、错误投资与谁先拿到新钱", "Reread Stage 10.5, 5.2 and 4.3, then Garrison's Time and Money: where credit flows, malinvestment, who gets the new money first"),
      writer: T("重读阶段 14.2 与 14.1：写作与论证，五步政策分析法", "Reread Stage 14.2 and 14.1: writing and argument, the five-step policy method"),
    }[g];
    P[0].push(reread);

    if (m === "none") P[0].push(T("资源零成本：米塞斯研究所在线图书馆 + econlib.org 全文；不买书，先把免费的读完", "Zero-cost resources: the Mises Institute online library plus econlib.org; buy nothing until the free shelf is exhausted"));
    if (m === "some") P[0].push(T("买三本纸质书（按路线：加里森 / 柯兹纳 / 博特克《活的经济学》之类），报名一次线上研讨班", "Buy three physical books for your route (Garrison, Kirzner, Boettke's Living Economics or similar) and register for one online seminar"));
    if (m === "degree") P[0].push(g === "academic"
      ? T("列出 3 个项目（GMU / 马德里 URJC / 德州理工 FMI / 主流系），各写信给 1 位教师问“今年还收学生吗”——项目会变，官网核实", "Shortlist 3 programs (GMU / URJC Madrid / Texas Tech FMI / a mainstream department) and email one faculty member at each asking whether they are taking students — programs change, verify on their sites")
      : T("预算大不等于该读学位：先用 6 个月做作品，再决定要不要学位——这条路线上作品比文凭更值钱", "A big budget does not mean you should buy a degree: build work for 6 months first, then decide — on this route the portfolio outranks the diploma"));

    const stageStep = {
      student: T("学生特权：旁听一门计量课；找校内读书会；把课程作业改造成一篇可发表的短文", "Student advantage: audit an econometrics course, find a campus reading group, turn a term paper into a publishable note"),
      early: T("职业早期：把每周时数写进日历；挑一个与本职相关的题目，让工作与作品互相喂养", "Early career: put the weekly hours in your calendar; pick a topic adjacent to your job so work and portfolio feed each other"),
      mid: T("转行者：先别辞职。挑一个你已经懂的行业，用奥派眼镜重新看它——你的领域知识是主流经济学家没有的", "Switcher: do not quit yet. Take an industry you already know and re-read it through the lens — your domain knowledge is what mainstream economists lack"),
    }[st];
    P[0].push(stageStep);
    if (h <= 2) P[0].push(T("慢轨提示：每周 2 小时只够一个项目。选一个，别并行", "Slow-track note: 2 hours a week supports exactly one project. Pick one, do not parallelize"));

    // —— 第二阶段：第一批作品 ——
    if (g === "academic") {
      P[1].push(T("写一篇复现论文：用 2020–22 年的数据重做一次坎蒂隆追踪，或给一项现行补贴做“看得见与看不见的”核算", "Write a replication paper: redo a Cantillon tracing with 2020–22 data, or a seen-and-unseen accounting of a current subsidy"));
      P[1].push(T("投一篇书评或短文到 QJAE 或《私营企业杂志》——第一次发表从短文开始", "Submit a book review or note to QJAE or the Journal of Private Enterprise — first publications start short"));
      if (L === "us") P[1].push(T("申请米塞斯大学（夏季，可申奖学金）与 IHS 暑期研讨班", "Apply to Mises University (summer, scholarships available) and an IHS summer seminar"));
      if (L === "eu") P[1].push(T("欧洲：西语可看马德里 URJC 硕士，法语可看昂热；英国 IEA / ASI 的学生活动；霍普的产权与自由学会年会在博德鲁姆", "Europe: URJC Madrid's master's if you read Spanish, Angers if French; IEA / ASI student events in the UK; Hoppe's Property and Freedom Society meets in Bodrum"));
      if (L === "asia") P[1].push(T("亚洲：读中译本核对原文，加入线上读书会；用英文写作面向全球读者；远程投稿与线上会议不受地区限制", "Asia: read the Chinese translations against the originals, join an online reading group; write in English for a global audience; remote submissions and online conferences are location-free"));
      if (L === "remote") P[1].push(T("远程：期刊投稿、线上研讨会与 SDAE 的会议提交都不需要你在场；把“远程”变成优势——多投", "Remote: journal submissions, online seminars and SDAE conference proposals do not need you in the room; turn remote into volume — submit more"));
      if (st === "student" && m !== "none") P[1].push(T("申请 IHS / 莫卡特斯的研究生奖学金；找一位愿意带你做复现的导师", "Apply for IHS / Mercatus graduate fellowships; find an advisor willing to supervise a replication"));
    }
    if (g === "builder") {
      P[1].push(T("做一个小工具：动态定价模拟器、预测市场沙盘或双边平台补贴计算器——公开上线，附一页设计说明", "Ship a small tool: a dynamic-pricing simulator, a prediction-market sandbox or a two-sided-platform subsidy calculator — public, with a one-page design note"));
      P[1].push(T("写一篇“价格作为知识”的产品笔记：你的产品里哪些价格在传递知识、哪些在遮蔽知识", "Write a “prices as knowledge” product note: which prices in your product transmit knowledge and which hide it"));
      if (L === "remote" || L === "asia") P[1].push(T("远程 / 亚洲：开源你的工具，README 用英文写清机制——代码是不需要签证的作品集", "Remote / Asia: open-source the tool with an English README that explains the mechanism — code is a portfolio that needs no visa"));
      if (L === "us") P[1].push(T("美国：去一次 APEE 或 SDAE 的会议，找做市场设计与私人治理的学者聊", "US: attend one APEE or SDAE meeting and talk to the market-design and private-governance people"));
      if (L === "eu") P[1].push(T("欧洲：关注金融科技与稳定币监管的讨论——阶段 17.3 的问题正在欧洲立法里发生", "Europe: follow the fintech and stablecoin regulation debates — the Stage 17.3 questions are happening in European legislation right now"));
      if (st === "mid") P[1].push(T("转行者：把工具做在你现在行业的痛点上——那是别人做不出来的", "Switcher: build the tool on a pain point in your current industry — nobody else can build that one"));
    }
    if (g === "investor") {
      P[1].push(T("开一本公开的“判断日志”：每条写方向、理由、时间范围；到期核对——阶段 14.4 的自我校准", "Start a public calls journal: direction, reasoning and horizon for each entry; check it when the horizon arrives — the self-calibration of Stage 14.4"));
      P[1].push(T("复现一次坎蒂隆追踪：2020–22 年新钱先到了谁手里，哪些价格先涨", "Replicate a Cantillon tracing: who got the 2020–22 new money first, and which prices moved first"));
      if (h >= 10) P[1].push(T("读一遍近三年的 QJAE 与 RAE 目录，挑出与信用周期相关的论文精读", "Read three years of QJAE and RAE tables of contents and pick the credit-cycle papers to read closely"));
      if (L === "asia") P[1].push(T("亚洲：把日本失去的三十年（阶段 13.3）当作你的本地案例——离你最近的完整周期", "Asia: use Japan's lost decades (Stage 13.3) as your home case — the nearest complete cycle"));
      if (L === "eu") P[1].push(T("欧洲：以欧元区 2010–12 年的债务周期为案例做一次结构分析", "Europe: do a structural analysis of the euro-area 2010–12 debt cycle as your case"));
      if (L === "us") P[1].push(T("美国：把 FOMC 声明按阶段 13.5 的读法逐份标注一年", "US: annotate a year of FOMC statements the Stage 13.5 way"));
      if (L === "remote") P[1].push(T("远程：跟踪 2–3 家公开发布奥派视角宏观研究的机构，逐篇写你的反驳或补充", "Remote: follow 2–3 shops that publish Austrian-lens macro research and write a rebuttal or extension to each piece"));
    }
    if (g === "writer") {
      P[1].push(T("发十篇文章：每篇一个具体问题、一个具体数字例子、先 steelman 对手", "Publish ten pieces: one concrete question, one concrete number, and a steelmanned opponent in each"));
      P[1].push(T("开一个通讯（Substack 或同类）——固定节奏比爆款重要", "Start a newsletter (Substack or similar) — a fixed rhythm matters more than a viral hit"));
      if (L === "us") P[1].push(T("美国：给 FEE、Cato 或 Mercatus 的通俗栏目投稿；关注它们的实习与写作项目", "US: pitch FEE, Cato or Mercatus popular outlets; watch their internship and writing programs"));
      if (L === "eu") P[1].push(T("欧洲：IEA / ASI 的评论栏目与学生写作比赛是低门槛入口", "Europe: IEA / ASI comment pages and student essay competitions are a low-barrier entry"));
      if (L === "asia") P[1].push(T("亚洲：中英双语写作——把一篇英文原著的核心论证准确介绍给中文读者，是稀缺且有价值的作品", "Asia: write bilingually — an accurate Chinese account of one English original's core argument is scarce and valuable work"));
      if (L === "remote") P[1].push(T("远程：播客与视频不需要地点；找 3 位嘉宾各做一期“把一个奥派概念讲清楚”", "Remote: podcasts and video are location-free; book 3 guests for one episode each on “explain one Austrian concept properly”"));
      if (st === "student") P[1].push(T("学生：把课程论文改写成大众版——同一份研究，两种读者", "Student: rewrite a course paper for a general audience — one piece of research, two readerships"));
    }

    // —— 第三阶段：讲出去 / 进圈 ——
    P[2].push({
      academic: T("在 SDAE 研究生环节、米塞斯大学或 APEE 做一次报告；把复现论文投 RAE 或盟友期刊（《公共选择》《制度经济学杂志》）", "Present at the SDAE graduate session, Mises University or APEE; submit the replication to RAE or an allied journal (Public Choice, Journal of Institutional Economics)"),
      builder: T("把工具与设计笔记写成一篇长文；去一次预测市场或市场设计的线上社区做分享", "Turn the tool and design note into a long essay; present it in a prediction-market or market-design online community"),
      investor: T("一年判断日志到期：公开写复盘——对了几条、错了几条、错在方向还是时机", "The one-year calls journal matures: publish the review — how many right, how many wrong, and whether the misses were direction or timing"),
      writer: T("把十篇里最好的三篇扩成一篇长文；投一家有编辑把关的媒体，接受被退稿", "Expand the best three of the ten into one long essay; pitch an edited outlet and accept rejection as data"),
    }[g]);
    if (h >= 10) P[2].push(T("时间充裕：再加一篇复现或一个工具——两件作品比一件更能证明不是偶然", "With this time budget, add a second replication or tool — two pieces prove it was not a fluke"));
    if (h >= 20) P[2].push(T("20+ 小时：这已经是半个全职。考虑申请研究助理、智库实习或奖学金，把时间换成身份", "At 20+ hours you are half full-time: apply for an RA post, a think-tank internship or a fellowship and convert hours into a position"));
    if (m === "degree" && g === "academic") P[2].push(T("递交申请；同时补齐计量与建模——先做经济学家，再做奥派", "Submit applications; in parallel, close the econometrics and modeling gap — economist first, Austrian second"));
    if (st === "mid") P[2].push(T("转行者：到这一步再评估要不要换工作——你手上已经有作品，谈判位置完全不同", "Switcher: only now decide whether to change jobs — you have work to show, and the negotiation is a different one"));

    // —— 第四阶段：轨道 ——
    P[3].push({
      academic: T("轨道：博士在读或已申请；两篇发表（一篇奥派期刊、一篇盟友期刊）；一个“奥派问题 + 主流工具”的论文选题", "Trajectory: in or applying to a PhD; two publications (one Austrian journal, one allied); a dissertation question that pairs an Austrian problem with mainstream tools"),
      builder: T("轨道：一个有用户的工具或一个市场设计岗位；阶段 15 与阶段 18.6 的问题成了你的日常工作", "Trajectory: a tool with users or a market-design role; the questions of Stage 15 and Stage 18.6 have become your day job"),
      investor: T("轨道：两年公开记录、一份可引用的复现研究；进入研究岗位或独立发布——仍然不是投资建议", "Trajectory: a two-year public record and one citable replication; a research seat or independent publishing — still not investment advice"),
      writer: T("轨道：一个有固定读者的通讯、一本书的提纲（不是计划，是提纲）、或一个政策机构的分析岗", "Trajectory: a newsletter with a steady readership, a book outline (an outline, not a plan), or an analyst seat at a policy shop"),
    }[g]);
    P[3].push(T("横跳提醒：内核不变，作品集随目标而变——阶段 ∞.2 会讲怎么换轨", "Crossing note: the core stays, the portfolio changes with the goal — Stage ∞.2 covers switching tracks"));

    // —— 30 天清单 ——
    const thirty = [];
    thirty.push(T("把每周 " + h + " 小时写进日历，固定时段", "Put " + h + " hours a week into the calendar, fixed slots"));
    thirty.push(reread.split(/[：:]/)[0]);
    thirty.push(h >= 5
      ? T("写完 1 篇短文并公开发布", "Finish and publish 1 short piece")
      : T("写出 1 篇短文的提纲与第一段", "Outline 1 short piece and write its first paragraph"));
    thirty.push({
      academic: T("下载近三年 QJAE / RAE 目录，标出 5 篇要精读的论文", "Pull three years of QJAE / RAE contents and mark 5 papers to read closely"),
      builder: T("定下小工具的一页规格：输入、输出、它让哪个价格更会说话", "Write the one-page spec for the tool: inputs, outputs, which price it makes more articulate"),
      investor: T("开判断日志，写下第 1 条（方向 + 理由 + 期限）", "Open the calls journal and write entry 1 (direction + reasoning + horizon)"),
      writer: T("列出 10 个题目，每个配一个具体数字例子", "List 10 topics, each with one concrete numerical example"),
    }[g]);
    if (st === "student") thirty.push(T("查一次 IHS 与米塞斯大学的申请截止日期", "Check the IHS and Mises University application deadlines"));
    if (st === "mid") thirty.push(T("写一页：你现在的行业里，哪三个现象用奥派眼镜看会不一样", "Write one page: three things in your current industry that look different through the lens"));
    if (m === "degree" && g === "academic") thirty.push(T("给 1 位目标项目的教师发一封询问信", "Email one faculty member at a target program"));

    return { P, pace, annual, majors, shorts, weeksToMajor, major, thirty };
  }

  function paint() {
    const r = build();
    const goalLabel = GOALS.find((x) => x.id === S.goal).label;
    root.querySelector("#pp-stats").innerHTML = `
      <div class="stat"><div class="k">${T("一年可投入", "Hours over 12 months")}</div><div class="v">${r.annual}h</div></div>
      <div class="stat"><div class="k">${T("这一年的短文（估）", "Short pieces this year (est.)")}</div><div class="v acc">${r.shorts}</div></div>
      <div class="stat"><div class="k">${T("大作品（估）", "Major pieces (est.)")}</div><div class="v pos">${r.majors} × ${r.major.name}</div></div>
      <div class="stat"><div class="k">${T("第一件大作品约需", "First major piece in")}</div><div class="v ${r.weeksToMajor > 40 ? "neg" : ""}">${r.weeksToMajor} ${T("周", "wk")}</div></div>`;

    let note = "";
    if (S.goal === "academic") {
      note = `<div class="demo-warn"><b>${T("现实提示：", "Realism note: ")}</b>${T(
        "学术就业市场对“异端”标签打折。非顶尖系的“奥派”博士在顶尖主流系几乎没有机会，在教学型学院、政策学院与智库机会更多。对策：补齐计量与建模，投盟友期刊，先做经济学家、再做奥派。教职本来就稀缺，薪酬随机构与地区差异很大——去查你目标机构的公开信息，不要相信任何一个“平均数”。",
        "The academic job market discounts heterodox labels. An “Austrian” PhD from a mid-ranked department has almost no shot at a top mainstream department, and considerably more at teaching colleges, policy schools and think tanks. The fix: close the econometrics and modeling gap, publish in allied journals, be an economist first and an Austrian second. Posts are scarce for everyone and pay varies widely by institution and country — check the public data for your actual targets and trust no single “average.”"
      )}</div>`;
    } else if (S.goal === "investor") {
      note = `<div class="demo-warn"><b>${T("不是投资建议：", "Not investment advice: ")}</b>${T(
        "这条路线只教框架与历史。奥派眼镜做“方向”比做“时机”强得多——阶段 14.4 的永久熊病是这条路上最常见的职业伤害。判断日志的作用正是让你自己看见这一点。",
        "This route teaches frameworks and history only. The lens is far better at direction than at timing — the permabear disease of Stage 14.4 is the most common occupational injury here. The calls journal exists so you can see that in your own record."
      )}</div>`;
    } else if (S.goal === "writer") {
      note = `<div class="demo-meta">${T("提示：这条路门槛最低、竞争最激烈，靠的是多年积累的信任。固定节奏胜过偶尔的爆款；每篇先 steelman 对手。", "Note: this route has the lowest barrier and the fiercest competition; it runs on trust built over years. A fixed rhythm beats an occasional hit, and every piece steelmans the other side first.")}</div>`;
    } else {
      note = `<div class="demo-meta">${T("提示：建设者路线上没人问你“是不是奥派”，只问你的判断对不对。工具与设计说明就是你的论文。", "Note: on the builder route nobody asks whether you are an Austrian, only whether your judgment is right. The tool and its design note are your paper.")}</div>`;
    }
    root.querySelector("#pp-note").innerHTML = note;

    root.querySelector("#pp-tl-label").textContent = T("你的路线：", "Your route: ") + goalLabel + " · " + S.hours + (S.hours === 20 ? "+" : "") + T(" 小时/周", " h/wk");
    root.querySelector("#pp-tl").innerHTML = r.P.map((items, i) => `
      <div class="tl-item"><span class="when">${r.pace[i]}</span>
        <ul style="margin:6px 0 0 18px;padding:0">${items.map((t) => `<li style="margin:3px 0">${t}</li>`).join("")}</ul>
      </div>`).join("");

    root.querySelector("#pp-30").innerHTML = r.thirty.map((t, i) => `☐ ${i + 1}. ${t}`).join("<br>");
  }

  // —— 事件 ——
  const bind = (id, key, cast) => {
    const box = root.querySelector(`#pp-${id}`);
    box.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-v]");
      if (!b) return;
      S[key] = cast ? cast(b.dataset.v) : b.dataset.v;
      box.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
      paint();
    });
  };
  bind("goal", "goal");
  bind("hours", "hours", Number);
  bind("money", "money");
  bind("loc", "loc");
  bind("stage", "stage");
  paint();
}
