// 交互演示：政策五步法分析器——选一项政策（6 个预设或自定义），逐步走完五步（说清 → 谁在行动 → 看不见的 → 价格与知识 → 动态），
// 勾选考虑项、填写笔记，工具拼出一份结构化分析（可复制），并按“严谨度清单”打分：奖励指名道姓的“看不见的”与“下一次干预”，惩罚带日期的预言与道德说教。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // ---------- 预设政策：每步的考虑项。kind: good（加分）/ seen（把“看得见的”误当“看不见的”，不加分并提示）/ dated（带日期预言，扣分）/ moral（道德说教，扣分）/ neutral
  const P = {
    rent: {
      name: T("租金管制", "Rent control"),
      statement: T("对 2015 年前建成的租赁住房，年涨幅上限 3%；新建住房豁免 15 年。", "Rent increases on units built before 2015 capped at 3% a year; new construction exempt for 15 years."),
      goal: T("让现有低收入租客住得起", "Keep existing low-income tenants housed affordably"),
      theory: [T("房租由房东意愿决定，压住租金不会减少房子", "Rents are set by landlord will; capping them does not reduce supply"), T("住房供给对价格几乎不反应", "Housing supply barely responds to price")],
      actors: [T("现有租客", "Current tenants"), T("房东", "Landlords"), T("开发商", "Developers"), T("想搬来的人（没有投票权）", "People who want to move in (no vote here)"), T("市政官员", "City officials")],
      margins: [T("房东减少维护", "Landlords cut maintenance"), T("转短租 / 转商用 / 出售", "Convert to short-term or commercial use, or sell"), T("更苛刻地筛选租客", "Screen tenants harder"), T("开发商只盖豁免期内的高端房", "Developers build only high-end units inside the exemption window"), T("现有租客永不搬家（错配）", "Current tenants never move (mismatch)")],
      unseen: [
        { t: T("没盖出来的楼", "The buildings never built"), k: "good" },
        { t: T("没搬来的年轻人", "The young workers who never arrived"), k: "good" },
        { t: T("省掉的每一块维护费", "Every dollar of maintenance skipped"), k: "good" },
        { t: T("现有租客省下的房租", "The rent current tenants saved"), k: "seen" },
        { t: T("一个人占着三居室的错配", "One person occupying a three-bedroom"), k: "good" },
      ],
      prices: [T("租金不再传递“哪里最紧缺”", "Rents no longer say “where housing is tightest”"), T("配置改由排队、关系、黑市押金完成", "Allocation shifts to queues, connections, under-the-table deposits"), T("房东无法计算翻修值不值", "Landlords cannot calculate whether renovation pays")],
      next: [
        { t: T("“不得无故拒租”令", "A “no refusal without cause” rule"), k: "good" },
        { t: T("禁止转商用 / 拆除", "A ban on conversions and demolition"), k: "good" },
        { t: T("最低维护标准 → 政府直接建房", "Minimum-maintenance mandates → the city builds housing"), k: "good" },
        { t: T("2027 年房价崩盘", "House prices crash in 2027"), k: "dated" },
        { t: T("房东都是贪婪的坏人", "Landlords are greedy villains"), k: "moral" },
      ],
      lobby: [T("现有租客（集中、有票）", "Current tenants (concentrated, they vote)"), T("沉默：未来租客（分散、无票）", "Silent: future tenants (dispersed, no vote)")],
      evidence: T("受管制存量维护质量下降、非管制段租金更高、租客流动率下降；若新建量与维护支出没有相对下降，我需要修正。", "Maintenance falls in the controlled stock, rents rise in the uncontrolled segment, turnover drops; if construction and maintenance do not fall relative to comparable cities, I revise."),
    },
    steel: {
      name: T("钢铁关税", "Steel tariff"),
      statement: T("对进口钢材征 25% 关税，为期不定；可申请豁免。", "A 25% tariff on imported steel, open-ended, with an exemption process."),
      goal: T("保护钢铁工人与国家安全", "Protect steelworkers and national security"),
      theory: [T("进口是零和的，钢价上涨的成本可以忽略", "Imports are zero-sum; dearer steel costs nothing worth counting"), T("国内钢厂只是暂时缺乏竞争力", "Domestic mills are only temporarily uncompetitive")],
      actors: [T("钢厂", "Steel mills"), T("用钢企业：汽车、建筑、机械、家电", "Steel users: cars, construction, machinery, appliances"), T("外国出口商", "Foreign exporters"), T("消费者", "Consumers"), T("豁免审批官员", "Exemption officials")],
      margins: [T("用钢企业涨价 / 裁员", "Steel users raise prices or cut jobs"), T("把整厂搬到关税墙外", "Move whole plants outside the tariff wall"), T("改用替代材料（铝、塑料）", "Substitute aluminum or plastics"), T("外国转口规避", "Foreign trans-shipment"), T("钢厂扩产并游说延长", "Mills expand and lobby for extension")],
      unseen: [
        { t: T("用钢企业没雇的工人（用钢业雇员数倍于钢铁业）", "Workers steel users did not hire (they employ many times more than the mills)"), k: "good" },
        { t: T("报复关税下没卖出去的农产品", "Farm exports lost to retaliation"), k: "good" },
        { t: T("消费者为每辆车多付的几百美元本来会花在别处", "The few hundred dollars more per car that would have been spent elsewhere"), k: "good" },
        { t: T("钢厂新增的雇员", "The mills' new hires"), k: "seen" },
        { t: T("关税收入", "Tariff revenue"), k: "seen" },
      ],
      prices: [T("国内钢价高于世界价，“该在哪产钢”的信息失真", "Domestic steel above the world price distorts “where should steel be made”"), T("用钢企业在假价格上做经济计算 → 只在关税下划算的项目", "Steel users calculate at a false price → projects that pay only under the tariff"), T("豁免审批取代价格来决定谁拿到便宜钢", "Exemption officials, not prices, decide who gets cheap steel")],
      next: [
        { t: T("下游产品也要求加关税（层层加码）", "Downstream products demand tariffs too (escalation)"), k: "good" },
        { t: T("豁免申请催生游说产业", "The exemption process spawns a lobbying industry"), k: "good" },
        { t: T("对方报复 → 农业补贴", "Retaliation → farm subsidies"), k: "good" },
        { t: T("明年制造业就业下降 5%", "Manufacturing employment falls 5% next year"), k: "dated" },
        { t: T("保护主义者背叛了自由", "Protectionists betray freedom"), k: "moral" },
      ],
      lobby: [T("钢厂（少数、集中）", "The mills (few, concentrated)"), T("沉默：用钢企业与消费者（分散、单个损失小）", "Silent: steel users and consumers (dispersed, small individual losses)")],
      evidence: T("用钢行业的就业与投资相对下降、国内外钢价差持续；若真有无替代来源的国防瓶颈，这是“为安全付费”的再分配问题。", "Employment and investment in steel-using sectors fall relative to trend; the domestic–world price gap persists. A genuine defense bottleneck with no alternative supply turns this into a “paying for security” question."),
    },
    loans: {
      name: T("学贷减免", "Student-loan forgiveness"),
      statement: T("一次性免除每人最高 1 万元联邦学贷，总额数千亿。", "One-time cancellation of up to $10,000 of federal student debt per borrower, several hundred billion in total."),
      goal: T("减轻年轻人负担", "Relieve young people's debt burden"),
      theory: [T("学贷是外生的负担，减免不改变未来借贷与学费", "Debt is an exogenous burden; forgiveness changes neither future borrowing nor tuition"), T("减免是一次性的，不会形成预期", "It is one-time and will not create expectations")],
      actors: [T("已借款者", "Existing borrowers"), T("未来借款者", "Future borrowers"), T("大学", "Universities"), T("没上大学的纳税人", "Taxpayers who never attended college"), T("国会议员", "Legislators")],
      margins: [T("未来学生多借（预期再免）", "Future students borrow more (expecting another round)"), T("大学涨学费、扩行政", "Universities raise tuition and expand administration"), T("学生对学费更不敏感", "Students become less price-sensitive"), T("借款人组织游说下一轮", "Borrower groups lobby for the next round")],
      unseen: [
        { t: T("这笔钱的替代用途", "The alternative uses of the money"), k: "good" },
        { t: T("没上大学的水管工为毕业生买单（逆向再分配）", "The plumber paying for the graduate (a regressive transfer)"), k: "good" },
        { t: T("下一批因预期减免而多借多花的学生", "The next cohort borrowing and spending more on expected forgiveness"), k: "good" },
        { t: T("借款人省下的月供", "The monthly payment borrowers no longer make"), k: "seen" },
        { t: T("学费的进一步上涨", "The further rise in tuition"), k: "good" },
      ],
      prices: [T("学费与利率不再告诉学生“这个学位值不值”", "Tuition and loan rates no longer tell students “is this degree worth it”"), T("2 万回报的学位在“可能被免”的预期下看起来像 4 万", "A $20k-return degree looks like $40k when the loan may be cancelled"), T("大学读不出哪些专业真有市场", "Universities cannot read which programs the market values")],
      next: [
        { t: T("学费涨 → 债务更重 → “再减免一次”", "Tuition rises → heavier debt → “forgive again”"), k: "good" },
        { t: T("制度化为事实上的免费大学（价格机制已毁）", "De facto free college with the price mechanism destroyed"), k: "good" },
        { t: T("对大学收费的直接管制", "Direct controls on tuition"), k: "good" },
        { t: T("明年秋天学费暴涨 30%", "Tuition jumps 30% next fall"), k: "dated" },
        { t: T("这是对纳税人的抢劫", "This is robbery of taxpayers"), k: "moral" },
      ],
      lobby: [T("大学、借款人组织", "Universities, borrower associations"), T("沉默：没上大学的人", "Silent: people who never went to college")],
      evidence: T("新生借款额与学费增速相对上升；若没有上升，道德风险这一环弱于我的预期。", "New-student borrowing and tuition growth rise relative to trend; if they do not, the moral-hazard link is weaker than I expect."),
    },
    ai: {
      name: T("国家 AI 补贴", "National AI subsidy"),
      statement: T("设 500 亿基金补贴算力中心与模型训练；入选企业获电价折扣与低息贷款。", "A $50 billion fund subsidizes compute centers and model training; selected firms get discounted power and cheap loans."),
      goal: T("赢得 AI 竞赛", "Win the AI race"),
      theory: [T("政府能识别哪些企业与技术路线会赢", "Government can identify which firms and technical routes will win"), T("私人资本对 AI 投入不足", "Private capital is under-investing in AI")],
      actors: [T("入选大厂（本来就在扩产）", "Selected large firms (already expanding)"), T("未入选初创", "Unselected startups"), T("电力公司与地方政府", "Utilities and local governments"), T("评审官员", "Reviewing officials"), T("其他用电者", "Other electricity users")],
      margins: [T("大厂把本来就要做的投资贴上补贴标签（边际效应远小于名义）", "Big firms relabel planned investment as subsidized (marginal effect far below headline)"), T("初创更难融资，或迁往海外", "Startups struggle to fund or move abroad"), T("地方政府竞相建园区", "Regions compete to host campuses"), T("官员倾向“不出错”而非“选对”", "Officials optimize for not being blamed, not for picking right")],
      unseen: [
        { t: T("500 亿的替代用途", "The alternative uses of $50 billion"), k: "good" },
        { t: T("被挤掉的另一条技术路线", "The technical route crowded out"), k: "good" },
        { t: T("因电价折扣而多付电费的其他用户", "Other users paying more for power to fund the discount"), k: "good" },
        { t: T("入选企业新建的数据中心", "The data centers selected firms build"), k: "seen" },
        { t: T("没被补贴、因此没出现的创业者", "The founders who never appeared because giants were subsidized"), k: "good" },
      ],
      prices: [T("算力真实价格不再告诉企业“这个模型值不值得训”", "The true price of compute no longer says “is this model worth training”"), T("只在算力打六折时才划算的项目上马（错误投资）", "Projects that pay only with compute at 40% off get launched (malinvestment)"), T("AI 是资本品：补贴扭曲它与其他生产阶段的比例", "AI is a capital good: subsidy distorts its proportion to other stages")],
      next: [
        { t: T("补贴退出时项目亏损 → “续期以保住投资”", "Losses when the subsidy sunsets → “extend it to protect the investment”"), k: "good" },
        { t: T("补贴永久化，定价由预算而非用户决定", "The subsidy becomes permanent; pricing set by budget, not users"), k: "good" },
        { t: T("对未入选企业的“公平”补偿计划", "A “fairness” compensation scheme for unselected firms"), k: "good" },
        { t: T("AI 泡沫将在 2028 年破裂", "The AI bubble bursts in 2028"), k: "dated" },
        { t: T("产业政策是社会主义", "Industrial policy is socialism"), k: "moral" },
      ],
      lobby: [T("入选企业与地方政府", "Selected firms and host regions"), T("沉默：未来纳税人、未入选创业者", "Silent: future taxpayers and unselected founders")],
      evidence: T("行业私人资本占比下降、入选企业退出补贴后亏损；若私人资本占比反升且退出后仍盈利，则是挤入而非挤出。", "Private capital's share in the sector falls; selected firms lose money after the subsidy ends. If private share rises and firms stay profitable, that is crowding in, and I revise."),
    },
    minwage: {
      name: T("最低工资", "Minimum wage"),
      statement: T("时薪下限从 12 提到 17，两年内分步实施。", "The hourly floor rises from $12 to $17 in steps over two years."),
      goal: T("提高低收入者收入", "Raise the incomes of low earners"),
      theory: [T("雇主对低技能劳动的需求对价格不敏感", "Employers' demand for low-skilled labor is price-insensitive"), T("雇主拥有垄断买方力量", "Employers hold monopsony power")],
      actors: [T("保住工作的低技能工人", "Low-skilled workers who keep their jobs"), T("最边际的工人（新手、少年、残障）", "The most marginal workers (novices, teenagers, disabled)"), T("小企业主", "Small-business owners"), T("自动化设备供应商", "Automation vendors"), T("消费者", "Consumers")],
      margins: [T("削减工时、福利、培训", "Cut hours, benefits, training"), T("自助点餐机 / 自动化", "Kiosks and automation"), T("提高入职门槛（要经验）", "Raise hiring standards (experience required)"), T("不开第二家店", "Do not open the second location"), T("涨价转嫁给顾客", "Pass costs to customers")],
      unseen: [
        { t: T("没被雇的新手（他们没有“被解雇”，只是从未被雇）", "The novices never hired (not fired — simply never hired)"), k: "good" },
        { t: T("没开的第二家店", "The second location never opened"), k: "good" },
        { t: T("被砍掉的培训与晋升阶梯", "The training and promotion ladder cut"), k: "good" },
        { t: T("保住工作者的加薪", "The raise for those who kept their jobs"), k: "seen" },
      ],
      prices: [T("工资不再告诉新手“你的技能现在值多少、该学什么”", "Wages no longer tell novices what their skills are worth and what to learn"), T("雇主无法用低价试用不确定的员工", "Employers cannot trial uncertain workers at a low price"), T("小企业在假价格上计算 → 错误的关店/开店决定", "Small firms calculate at a false price → wrong open/close decisions")],
      next: [
        { t: T("对青少年的“培训工资”豁免", "A “training wage” exemption for teenagers"), k: "good" },
        { t: T("对小企业的补贴或税收抵免", "Subsidies or tax credits for small firms"), k: "good" },
        { t: T("限制自动化的法规", "Rules restricting automation"), k: "good" },
        { t: T("明年失业率升到 8%", "Unemployment hits 8% next year"), k: "dated" },
        { t: T("支持者不懂经济学", "Supporters do not understand economics"), k: "moral" },
      ],
      lobby: [T("工会、已就业者（集中）", "Unions and the already-employed (concentrated)"), T("沉默：从未被雇的人（看不见自己）", "Silent: those never hired (invisible even to themselves)")],
      evidence: T("最边际群体工时下降、青少年就业相对下降；若在有垄断买方力量的地区就业没有下降，则那里的隐含理论成立。", "Hours fall for the most marginal group; teen employment falls relative to trend. If employment does not fall where monopsony is plausible, the implicit theory holds there."),
    },
    fuel: {
      name: T("燃油限价", "Fuel price cap"),
      statement: T("汽油零售价上限设为每升 8 元，为期六个月。", "Retail gasoline capped at a fixed price per liter for six months."),
      goal: T("保护家庭免受价格冲击", "Shield households from a price shock"),
      theory: [T("涨价是加油站牟利，限价不会减少供给", "The price rise is station profiteering; a cap will not reduce supply"), T("六个月内需求与供给都不会调整", "Neither demand nor supply adjusts within six months")],
      actors: [T("司机", "Drivers"), T("加油站", "Gas stations"), T("炼油厂与进口商", "Refiners and importers"), T("邻近地区的买家", "Buyers from neighboring regions"), T("公交与货运公司", "Transit and freight firms")],
      margins: [T("加油站限购、缩短营业时间", "Stations ration and cut hours"), T("进口商把油卖到别处", "Importers sell elsewhere"), T("司机囤油、跨区购买", "Drivers hoard and cross regions to buy"), T("黑市与搭售", "Black markets and tie-in sales")],
      unseen: [
        { t: T("没进口来的那批油", "The shipments never imported"), k: "good" },
        { t: T("排队浪费的时间", "The hours wasted in queues"), k: "good" },
        { t: T("没被高价劝退的那次可有可无的出行", "The optional trip a high price would have deterred"), k: "good" },
        { t: T("司机每次加油省下的钱", "The money drivers saved per fill-up"), k: "seen" },
      ],
      prices: [T("价格不再传递“油现在有多稀缺”", "Price no longer says how scarce fuel is right now"), T("配给改由排队和关系完成", "Allocation shifts to queues and connections"), T("炼油厂无法计算是否值得加班生产", "Refiners cannot calculate whether extra runs pay")],
      next: [
        { t: T("限购令与配给票", "Purchase limits and ration coupons"), k: "good" },
        { t: T("对炼油厂的补贴以维持供给", "Refiner subsidies to keep supply flowing"), k: "good" },
        { t: T("出口禁令", "An export ban"), k: "good" },
        { t: T("三个月内油价翻倍", "Fuel prices double within three months"), k: "dated" },
        { t: T("石油公司是奸商", "Oil companies are crooks"), k: "moral" },
      ],
      lobby: [T("司机（多数、有票）", "Drivers (many, they vote)"), T("沉默：排不到油的人、被挤走的进口商", "Silent: those who cannot get fuel; importers who leave")],
      evidence: T("排队出现、跨区价差扩大、进口量下降；若进口与库存没有相对下降，供给端的调整边际弱于预期。", "Queues appear, cross-region price gaps widen, imports fall; if imports and inventories do not fall relative to trend, supply-side margins were weaker than expected."),
    },
  };
  const CUSTOM = {
    name: T("自定义", "Custom"),
    statement: "", goal: "", theory: [],
    actors: [T("买家", "Buyers"), T("卖家 / 生产者", "Sellers / producers"), T("潜在进入者", "Potential entrants"), T("纳税人", "Taxpayers"), T("监管者与官员", "Regulators and officials"), T("外国交易方", "Foreign counterparties")],
    margins: [T("改变数量 / 质量 / 工时", "Change quantity, quality or hours"), T("换产品、换地点、换合同形式", "Switch product, location or contract form"), T("退出市场", "Exit the market"), T("游说豁免", "Lobby for exemption"), T("黑市 / 规避", "Black market / evasion")],
    unseen: [
      { t: T("本来会出现、现在没出现的生产", "Production that would have happened and now does not"), k: "good" },
      { t: T("被转移的资金的替代用途", "The alternative use of the money moved"), k: "good" },
      { t: T("没进入的企业、没被雇的人", "Firms that never entered, people never hired"), k: "good" },
      { t: T("直接受益者拿到的好处", "The benefit received by direct beneficiaries"), k: "seen" },
    ],
    prices: [T("某个价格不再反映真实稀缺", "A price no longer reflects real scarcity"), T("某类分散知识不再进入系统", "Some dispersed knowledge no longer enters the system"), T("某群人无法再以真实价格做经济计算", "Some group can no longer calculate at true prices")],
    next: [
      { t: T("为堵住规避而来的下一条规则", "The next rule to plug the evasion"), k: "good" },
      { t: T("为补偿受害者而来的补贴", "A subsidy to compensate the losers"), k: "good" },
      { t: T("把临时措施永久化", "Making the temporary measure permanent"), k: "good" },
      { t: T("某年某月一定会发生的具体事件", "A specific event on a specific date"), k: "dated" },
      { t: T("对方在道德上是坏人", "The other side is morally bad"), k: "moral" },
    ],
    lobby: [T("集中受益者", "Concentrated beneficiaries"), T("沉默：分散受损者", "Silent: dispersed losers")],
    evidence: "",
  };

  // ---------- 状态
  const state = { preset: "rent", step: 0, chk: {}, notes: {}, mind: "" };
  const cur = () => (state.preset === "custom" ? CUSTOM : P[state.preset]);
  const key = (grp, i) => grp + ":" + i;
  const resetChecks = () => { state.chk = {}; state.notes = {}; state.mind = ""; };

  const STEPS = [
    { t: T("① 说清它是什么", "① State it precisely"), p: T("写下机制细节、宣称的目标，以及政策要成立时世界必须是什么样（隐含理论）。", "Write the mechanics, the stated goal, and what the world must be like for the policy to work (the implicit theory).") },
    { t: T("② 谁在行动", "② Who acts"), p: T("列出行动人，勾出他们的调整边际——政策封住一个变量，人在其他所有变量上调整。", "List the actors and tick their margins of adjustment — the policy pins one variable, people move on every other.") },
    { t: T("③ 看得见的与看不见的", "③ Seen and unseen"), p: T("只勾“看不见的”：没发生的事、没去成的地方。留神混进来的“看得见的”。", "Tick only the unseen: what did not happen, where resources did not go. Beware the seen items mixed in.") },
    { t: T("④ 价格、知识与计算", "④ Prices, knowledge, calculation"), p: T("哪个价格被扭曲、它原本传递什么信息、谁无法再做经济计算。", "Which price is distorted, what information it carried, who can no longer calculate.") },
    { t: T("⑤ 动态与下一次干预", "⑤ Dynamics and the next intervention"), p: T("预测下一次干预的类型（不是日期），指出谁游说、谁沉默。留神带日期的预言与道德说教。", "Predict the type of the next intervention (not the date); say who lobbies and who is silent. Beware dated prophecy and moralizing.") },
    { t: T("✔ 分析与严谨度", "✔ Analysis and rigor"), p: T("拼出的结构化分析可以复制；严谨度奖励指名道姓，惩罚日期与说教。", "The assembled analysis can be copied; rigor rewards naming names and penalizes dates and sermons.") },
  ];

  // ---------- 骨架
  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧰 政策五步法分析器：走完五步，拼出一份可被反驳的分析", "🧰 Policy Analyzer: walk five steps, assemble a refutable analysis")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("选一项政策", "Pick a policy")}</label>
        <div class="demo-btns" id="pa-presets">
          ${Object.keys(P).map((k) => `<button class="demo-btn ${k === state.preset ? "active" : ""}" data-preset="${k}">${P[k].name}</button>`).join("")}
          <button class="demo-btn" data-preset="custom">${CUSTOM.name}</button>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-seg" id="pa-steps">
          ${STEPS.map((s, i) => `<button class="${i === 0 ? "on" : ""}" data-step="${i}">${s.t.slice(0, 1)}</button>`).join("")}
        </div>
        <div id="pa-body"></div>
        <div class="demo-row" style="margin-top:12px">
          <button class="demo-btn" id="pa-prev">${T("← 上一步", "← Back")}</button>
          <span class="demo-meta" id="pa-progress"></span>
          <button class="demo-btn active" id="pa-next">${T("下一步 →", "Next →")}</button>
        </div>
      </div>
      <p class="demo-tip">${T(
        "看<strong>严谨度</strong>怎么变：勾“看不见的”与“下一次干预”会大幅加分；把“看得见的”当成“看不见的”不得分；勾带日期的预言或道德说教会扣分。试试自定义一项你最近读到的政策。",
        "Watch the <strong>rigor score</strong>: naming the unseen and the next intervention earns the most; ticking a seen item as unseen earns nothing; dated prophecy and moralizing cost points. Try a custom policy you read about this week."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const checkList = (grp, items, hint) => `
    <div class="demo-block">
      ${hint ? `<label class="demo-label">${hint}</label>` : ""}
      ${items.map((it, i) => {
        const t = typeof it === "string" ? it : it.t;
        const k = key(grp, i);
        return `<label class="demo-check"><input type="checkbox" data-chk="${k}" ${state.chk[k] ? "checked" : ""}/> ${esc(t)}</label>`;
      }).join("")}
    </div>`;
  const noteBox = (id, label, placeholder, rows) => `
    <div class="demo-block">
      <label class="demo-label">${label}</label>
      <textarea class="demo-ta" data-note="${id}" rows="${rows || 2}" placeholder="${esc(placeholder)}" style="width:100%;box-sizing:border-box">${esc(state.notes[id] || "")}</textarea>
    </div>`;

  // ---------- 各步渲染
  const renderStep = () => {
    const p = cur(), s = state.step, body = $("pa-body");
    root.querySelectorAll("#pa-steps button").forEach((b) => b.classList.toggle("on", +b.dataset.step === s));
    $("pa-progress").textContent = (s + 1) + " / " + STEPS.length;
    $("pa-prev").disabled = s === 0;
    $("pa-next").textContent = s === STEPS.length - 1 ? T("重新开始", "Start over") : T("下一步 →", "Next →");
    let h = `<div class="scn"><div class="scn-q"><b>${STEPS[s].t}</b></div><div class="scn-meta">${STEPS[s].p}</div></div>`;
    if (s === 0) {
      if (state.notes.statement === undefined) state.notes.statement = p.statement;
      if (state.notes.goal === undefined) state.notes.goal = p.goal;
      h += noteBox("statement", T("(a) 机制细节：对谁、多少、多久、豁免谁", "(a) Mechanics: to whom, how much, how long, who is exempt"), T("例：对 2015 年前建成的租赁住房，年涨幅上限 3%……", "e.g. Units built before 2015, increases capped at 3% a year…"), 2);
      h += noteBox("goal", T("(b) 宣称的目标", "(b) Stated goal"), T("例：让低收入家庭住得起", "e.g. Keep housing affordable"), 1);
      h += p.theory.length
        ? checkList("theory", p.theory, T("(c) 隐含理论——政策要成立，世界得是什么样（勾出你识别到的）", "(c) Implicit theory — what must be true for it to work (tick what you identify)"))
        : noteBox("theory", T("(c) 隐含理论——政策要成立，世界得是什么样", "(c) Implicit theory — what must be true for it to work"), T("例：供给对价格不反应……", "e.g. Supply does not respond to price…"), 2);
    } else if (s === 1) {
      h += checkList("actors", p.actors, T("行动人（勾出所有受影响的具体的人）", "Actors (tick every group of real people affected)"));
      h += checkList("margins", p.margins, T("调整边际（政策没封住的路）", "Margins of adjustment (the roads the policy did not block)"));
      h += noteBox("actorsNote", T("补充：还有谁？他能怎么躲？", "Add: who else? how can he route around it?"), T("可选", "optional"), 2);
    } else if (s === 2) {
      h += checkList("unseen", p.unseen, T("看不见的（追踪资源：从哪来、去了哪、本来会去哪）", "The unseen (trace resources: from where, to where, where otherwise)"));
      h += noteBox("unseenNote", T("指名道姓：没盖的楼、没雇的人……", "Name names: the buildings not built, the people not hired…"), T("可选，但加分", "optional, but it counts"), 2);
    } else if (s === 3) {
      h += checkList("prices", p.prices, T("被扭曲的价格 · 丢失的知识 · 无法再做的计算", "Distorted prices · lost knowledge · calculation cut off"));
      h += noteBox("pricesNote", T("这个价格原本在告诉谁什么？", "What was this price telling whom?"), T("可选", "optional"), 2);
    } else if (s === 4) {
      h += checkList("next", p.next, T("下一次干预会是什么？（类型，不是日期）", "What will the next intervention be? (type, not date)"));
      h += checkList("lobby", p.lobby, T("谁游说、谁沉默", "Who lobbies, who is silent"));
      if (state.mind === "" && p.evidence && !state.notes.mindTouched) state.mind = p.evidence;
      h += `<div class="demo-block"><label class="demo-label">${T("什么会让我改变看法？（一条可观察的证据）", "What would change my mind? (one observable piece of evidence)")}</label>
        <textarea class="demo-ta" id="pa-mind" rows="2" style="width:100%;box-sizing:border-box" placeholder="${esc(T("例：若受管制城市的新建量没有相对下降……", "e.g. If construction in controlled cities does not fall relative to…"))}">${esc(state.mind)}</textarea></div>`;
    } else {
      h += renderResult();
    }
    body.innerHTML = h;
    body.querySelectorAll("[data-chk]").forEach((c) => c.addEventListener("change", () => { state.chk[c.dataset.chk] = c.checked; }));
    body.querySelectorAll("[data-note]").forEach((t) => t.addEventListener("input", () => { state.notes[t.dataset.note] = t.value; }));
    const mind = body.querySelector("#pa-mind");
    if (mind) mind.addEventListener("input", () => { state.mind = mind.value; state.notes.mindTouched = true; });
    const copy = body.querySelector("#pa-copy");
    if (copy) copy.addEventListener("click", () => {
      const txt = body.querySelector("#pa-out").innerText;
      const done = () => { copy.textContent = T("已复制 ✓", "Copied ✓"); setTimeout(() => (copy.textContent = T("复制分析", "Copy analysis")), 1500); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, done); else done();
    });
  };

  // ---------- 评分 + 拼装
  const picked = (grp, items) => items.filter((_, i) => state.chk[key(grp, i)]);
  const txt = (id) => (state.notes[id] || "").trim();
  const DATED = /(20[2-9]\d|明年|后年|今年年底|下个季度|next (year|quarter|fall|spring)|within (a|one|two|three|\d+) (year|month)|by 20\d\d|个月内)/i;
  const MORAL = /(抢劫|偷窃|贪婪|奸商|坏人|不道德|背叛|robbery|theft|greedy|greed|villain|crook|immoral|betray|evil)/i;

  const renderResult = () => {
    const p = cur();
    const S = [];
    const add = (pts, max, why, cls) => S.push({ pts, max, why, cls });

    // 1 说清
    const st = txt("statement"), goal = txt("goal");
    const theoryPicked = p.theory.length ? picked("theory", p.theory) : (txt("theory") ? [txt("theory")] : []);
    add(st.length >= 15 ? 1 : 0, 1, T("① 机制细节写清", "① Mechanics stated"), st.length >= 15 ? "ok" : "bad");
    add(goal.length >= 4 ? 1 : 0, 1, T("① 宣称目标", "① Stated goal"), goal.length >= 4 ? "ok" : "bad");
    add(theoryPicked.length ? 1 : 0, 1, T("① 隐含理论写出来了", "① Implicit theory made explicit"), theoryPicked.length ? "ok" : "bad");
    // 2 谁
    const actors = picked("actors", p.actors), margins = picked("margins", p.margins);
    add(actors.length >= 2 ? 1 : 0, 1, T("② ≥2 类行动人", "② ≥2 groups of actors"), actors.length >= 2 ? "ok" : "bad");
    add(margins.length >= 2 ? 2 : margins.length === 1 ? 1 : 0, 2, T("② 调整边际（≥2 条满分）", "② Margins of adjustment (2+ for full marks)"), margins.length >= 2 ? "ok" : margins.length ? "warn" : "bad");
    // 3 看不见
    const un = picked("unseen", p.unseen), unGood = un.filter((u) => u.k === "good"), unSeen = un.filter((u) => u.k === "seen");
    const unNote = txt("unseenNote");
    const unPts = Math.min(3, unGood.length + (unNote.length >= 8 ? 1 : 0));
    add(unPts, 3, T("③ 指名道姓的“看不见的”", "③ The unseen, named"), unPts >= 2 ? "ok" : unPts ? "warn" : "bad");
    if (unSeen.length) add(0, 0, T("③ 你把“看得见的”当成了“看不见的”：", "③ You ticked seen items as unseen: ") + unSeen.map((u) => "“" + u.t + "”").join(T("、", ", ")), "warn");
    // 4 价格
    const pr = picked("prices", p.prices);
    add(Math.min(2, pr.length), 2, T("④ 价格 · 知识 · 计算", "④ Prices · knowledge · calculation"), pr.length >= 2 ? "ok" : pr.length ? "warn" : "bad");
    // 5 动态
    const nx = picked("next", p.next), nxGood = nx.filter((u) => u.k === "good"), nxDated = nx.filter((u) => u.k === "dated"), nxMoral = nx.filter((u) => u.k === "moral");
    add(Math.min(2, nxGood.length), 2, T("⑤ 下一次干预（类型）", "⑤ The next intervention (type)"), nxGood.length >= 1 ? "ok" : "bad");
    const lb = picked("lobby", p.lobby);
    add(lb.length ? 1 : 0, 1, T("⑤ 谁游说、谁沉默", "⑤ Who lobbies, who is silent"), lb.length ? "ok" : "bad");
    // 改变看法
    const mind = state.mind.trim();
    add(mind.length >= 10 ? 1 : 0, 1, T("“什么会让我改变看法”", "“What would change my mind”"), mind.length >= 10 ? "ok" : "bad");
    // 扣分
    const allText = [st, goal, txt("theory"), txt("actorsNote"), unNote, txt("pricesNote"), mind].join(" ");
    let pen = 0; const penWhy = [];
    if (nxDated.length || DATED.test(allText)) { pen += 2; penWhy.push(T("带日期 / 精确幅度的预言（理论只给方向与脆弱性）", "dated or precisely sized prophecy (theory gives direction and fragility only)")); }
    if (nxMoral.length || MORAL.test(allText)) { pen += 1; penWhy.push(T("道德说教代替分析", "moralizing instead of analyzing")); }
    const max = S.reduce((a, b) => a + b.max, 0), raw = S.reduce((a, b) => a + b.pts, 0);
    const score = Math.max(0, raw - pen), pct = Math.round((score / max) * 100);
    const verdict = pct >= 85 ? T("可被反驳的分析——这是我们想教会你写的东西", "A refutable analysis — this is what the course wants you to write")
      : pct >= 60 ? T("骨架在了，但有几步还是“会有意想不到的后果”级别", "The skeleton is there, but some steps are still at “unintended consequences” level")
      : T("结论先于分析——回去把看不见的与下一次干预指名道姓", "Verdict before analysis — go back and name the unseen and the next intervention");

    // 拼装文本
    const L = [];
    const H = (s) => L.push("<b>" + s + "</b>");
    H(T("【政策】", "[POLICY] ") + p.name); L.push(st || T("（未填写机制细节）", "(mechanics not stated)"));
    H(T("【目标】", "[GOAL]")); L.push(goal || "—");
    H(T("【隐含理论】", "[IMPLICIT THEORY]")); L.push(theoryPicked.length ? theoryPicked.map((t) => "· " + t).join("<br>") : "—");
    H(T("【谁在行动 · 调整边际】", "[WHO ACTS · MARGINS]"));
    L.push((actors.length ? actors.map((t) => "· " + t).join("<br>") : "—") + (margins.length ? "<br>" + margins.map((t) => "→ " + t).join("<br>") : "") + (txt("actorsNote") ? "<br>" + esc(txt("actorsNote")) : ""));
    H(T("【看不见的】", "[THE UNSEEN]"));
    L.push((unGood.length ? unGood.map((u) => "· " + u.t).join("<br>") : "—") + (unNote ? "<br>" + esc(unNote) : ""));
    H(T("【价格 · 知识 · 计算】", "[PRICES · KNOWLEDGE · CALCULATION]"));
    L.push((pr.length ? pr.map((t) => "· " + t).join("<br>") : "—") + (txt("pricesNote") ? "<br>" + esc(txt("pricesNote")) : ""));
    H(T("【动态 · 下一次干预】", "[DYNAMICS · NEXT INTERVENTION]"));
    L.push((nxGood.length ? nxGood.map((u) => "· " + u.t).join("<br>") : "—") + (lb.length ? "<br>" + lb.map((t) => "★ " + t).join("<br>") : ""));
    H(T("【什么会让我改变看法】", "[WHAT WOULD CHANGE MY MIND]")); L.push(mind ? esc(mind) : "—");

    return `
      <div class="stat-row">
        <div class="stat"><div class="k">${T("严谨度", "Rigor")}</div><div class="v ${pct >= 85 ? "pos" : pct >= 60 ? "acc" : "neg"}">${pct}%</div></div>
        <div class="stat"><div class="k">${T("得分 / 满分", "Score / max")}</div><div class="v">${score} / ${max}</div></div>
        <div class="stat"><div class="k">${T("扣分", "Penalties")}</div><div class="v ${pen ? "neg" : ""}">−${pen}</div></div>
      </div>
      <div class="demo-bar"><span style="width:${pct}%"></span></div>
      <div class="demo-meta"><b>${verdict}</b></div>
      <div class="demo-log" style="margin-top:10px">
        ${S.map((x) => `<div class="${x.cls}">${x.max ? `[${x.pts}/${x.max}] ` : ""}${x.why}</div>`).join("")}
        ${penWhy.map((w) => `<div class="bad">−${w.includes(T("日期", "dated")) ? 2 : 1} ${w}</div>`).join("")}
      </div>
      <div class="demo-block">
        <div class="demo-row"><label class="demo-label" style="margin:0">${T("结构化分析（可复制）", "Structured analysis (copyable)")}</label><button class="demo-btn" id="pa-copy">${T("复制分析", "Copy analysis")}</button></div>
        <div class="demo-out" id="pa-out" style="word-break:normal">${L.join("<br>")}</div>
      </div>`;
  };

  // ---------- 事件
  $("pa-presets").addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-preset]"); if (!b) return;
    state.preset = b.dataset.preset; resetChecks(); state.step = 0;
    root.querySelectorAll("#pa-presets .demo-btn").forEach((x) => x.classList.toggle("active", x === b));
    renderStep();
  });
  $("pa-steps").addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-step]"); if (!b) return;
    state.step = +b.dataset.step; renderStep();
  });
  $("pa-prev").addEventListener("click", () => { if (state.step > 0) { state.step--; renderStep(); } });
  $("pa-next").addEventListener("click", () => {
    if (state.step === STEPS.length - 1) { resetChecks(); state.step = 0; } else state.step++;
    renderStep();
  });
  renderStep();
}
