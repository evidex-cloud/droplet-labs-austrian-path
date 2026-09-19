// 交互演示：把阶段 5.4 的四格清单（注入 / 繁荣部位 / 触发 / 断裂）套在中国 2008–2024 上：
// ① 四格切换面板：每格列出代理指标与证据，并标出与美国 2008、日本 1990 的异同（注入一格附“自然利率不可观测”的口径提醒）；
// ② 可按类型过滤的时间线（.tl）；③ “政策允许的清算程度”滑块驱动一个风格化模型：错误投资滞留多久 vs 调整多深 vs 损失被转移多少；
// ④ 与日本 1990、美国 2008 的对照面板。模型是思维实验的沙盘，不是预测。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // —— ① 四格清单 ——
  const BOXES = [
    {
      id: "inject", name: T("① 注入", "① Injection"), color: "var(--orange)",
      head: T("2008.11 约 4 万亿 → 2009–10 年的信贷", "Nov 2008: about 4 tn yuan → the credit of 2009–10"),
      proxies: [
        T("一年期贷款基准利率 7.47% → 5.31%（2008.12）", "One-year benchmark lending rate 7.47% → 5.31% (Dec 2008)"),
        T("2009 年新增贷款约 9.6 万亿（2008 年约 4.9 万亿）；M2 约 +28%", "New loans 2009 about 9.6 tn (2008 about 4.9 tn); M2 about +28%"),
        T("名义 GDP 增速（约 9% / 18% / 18%）远高于贷款利率（5.3–6.6%）", "Nominal GDP growth (about 9% / 18% / 18%) far above the lending rate (5.3–6.6%)"),
        T("行政信贷额度：2009 上半年放开、2010 后收紧——中国特有的代理", "Administrative credit quotas: relaxed H1 2009, tightened after 2010 — a China-specific proxy"),
      ],
      caveat: T("口径：以上全是代理指标。自然利率 r* 不可观测（阶段 3.5）；“利率被压低”是相对判断，不是读数。", "Measurement: all of the above are proxies. The natural rate r* is unobservable (Stage 3.5); “rates pushed down” is a relative judgment, not a reading."),
      cmp: { us: T("同：真实利率为负、信贷远快于产出", "Same: negative real rate, credit far ahead of output"), jp: T("同：政策利率相对前期大幅下调 + M2 高增", "Same: big cut in the policy rate + fast M2 growth"), diff: T("异：注入靠指令与额度多于靠价格", "Different: injection by instruction and quota more than by price") },
      match: "ok",
    },
    {
      id: "sector", name: T("② 繁荣部位", "② Boom sector"), color: "var(--orange-ink)",
      head: T("房地产 + 基建：土地财政、城投、影子银行、期房", "Housing + infrastructure: land finance, LGFVs, shadow banking, pre-sales"),
      proxies: [
        T("土地出让收入 2008 约 1 万亿 → 2021 约 8.7 万亿", "Land-sale revenue: about 1 tn (2008) → about 8.7 tn (2021)"),
        T("城投债务约 GDP 一半（IMF 2023，约数）；影子银行峰值约 60 万亿（2016–17）", "LGFV debt about half of GDP (IMF 2023, approx.); shadow banking peak about 60 tn (2016–17)"),
        T("期房占新房销售约 85–90%；家庭承担完工风险", "Pre-sales about 85–90% of new-home sales; households bear completion risk"),
        T("地产及上下游约占 GDP 1/4–3/10（Rogoff & Yang 2020）", "Property plus its chain about 1/4–3/10 of GDP (Rogoff & Yang 2020)"),
      ],
      caveat: T("读法：土地是特异性最高的资本品（阶段 3.4）；影子银行 = 表外的部分准备金式扩张（阶段 4.4）。", "Reading: land is the most specific capital good (Stage 3.4); shadow banking = fractional-reserve-style expansion off balance sheet (Stage 4.4)."),
      cmp: { us: T("同：住房 + 抵押品回路", "Same: housing + collateral loop"), jp: T("同：土地抵押 → 贷款 → 地价", "Same: land collateral → loans → land prices"), diff: T("异：地方政府本身是最大的借款人", "Different: local governments themselves are the biggest borrowers") },
      match: "ok",
    },
    {
      id: "trigger", name: T("③ 触发", "③ Trigger"), color: "var(--blue)",
      head: T("2020.08 三道红线：行政收紧，不是加息", "Aug 2020, the three red lines: administrative tightening, not a rate hike"),
      proxies: [
        T("剔除预收款后资产负债率 ≤ 70%；净负债率 ≤ 100%；现金短债比 ≥ 1", "Liabilities/assets excl. advance receipts ≤ 70%; net gearing ≤ 100%; cash/short-term debt ≥ 1"),
        T("越线者不得增加有息负债 → 借新还旧的门关上", "Over the lines: no new interest-bearing debt → the refinancing door closes"),
        T("2021 初：银行房地产贷款集中度管理", "Early 2021: concentration limits on banks' property lending"),
        T("此前三次收紧（2013 钱荒、2015–16 去杠杆、2018 资管新规）都被部分逆转", "Three earlier tightenings (2013 crunch, 2015–16 deleveraging, 2018 asset-management rules) were each partly reversed"),
      ],
      caveat: T("机制与加息相同（滚动融资的折现率跳到无穷大），但时点是政策变量——ABCT 对此无预测力。", "Same mechanism as a hike (the discount rate on rollover jumps to infinity), but the timing is a policy variable — ABCT has no purchase on it."),
      cmp: { us: T("异：美国是 17 次加息", "Different: the US had 17 rate hikes"), jp: T("半同：日本 1990 是加息 + 房贷总量管制", "Partly same: Japan 1990 was hikes + lending caps"), diff: T("异：纯行政规则，无市场利率反转", "Different: a pure administrative rule, no market-rate reversal") },
      match: "warn",
    },
    {
      id: "snap", name: T("④ 断裂", "④ Snap"), color: "var(--red)",
      head: T("2021–24：违约、销售下滑、化债——分拆、分摊、转移", "2021–24: defaults, falling sales, debt swaps — split, shared, shifted"),
      proxies: [
        T("恒大 2021.12 违约（负债约 2.4 万亿）；碧桂园 2023.10 违约；民企出清、国企续命", "Evergrande default Dec 2021 (liabilities about 2.4 tn); Country Garden Oct 2023; private firms exit, SOEs stay"),
        T("新房销售面积三年约 −40%；开工 −60% 以上；地产投资连续三年约 −10%/年", "New-home sales about −40% in three years; starts −60%+; property investment about −10%/yr for three years"),
        T("土地收入 8.7 万亿 → 约 4.9 万亿（2024）；官方不良率约 1.6%", "Land revenue 8.7 tn → about 4.9 tn (2024); official NPL ratio about 1.6%"),
        T("化债：2023 特殊再融资债约 1.4 万亿；2024.11 约 10 万亿置换额度", "Swaps: about 1.4 tn special refinancing bonds in 2023; about 10 tn swap capacity Nov 2024"),
      ],
      caveat: T("读法：国有银行 + 资本管制 + 限跌令 → 清算不通过价格发生，而通过财政转移；要与阶段 10.4 的软预算约束一起读。", "Reading: state banks + capital controls + price floors → liquidation happens through fiscal transfers, not prices; read with Stage 10.4's soft budget constraint."),
      cmp: { us: T("异：无银行倒闭、无集中重定价", "Different: no bank failures, no one-shot repricing"), jp: T("半同：价格托住、时间拉长；但置换是公开且有额度的", "Partly same: prices held, clock stretched; but swaps are public and capped"), diff: T("异：损失被拆给购房者 / 债权人 / 地方 / 中央", "Different: losses split among buyers / creditors / local / central") },
      match: "bad",
    },
  ];

  // —— ② 时间线 ——
  const CATS = {
    credit: { label: T("信用", "Credit"), color: "var(--orange)" },
    property: { label: T("地产 / 地方债", "Property / local debt"), color: "var(--red)" },
    reg: { label: T("监管 / 收紧", "Regulation / tightening"), color: "var(--blue)" },
    swap: { label: T("化债", "Debt swaps"), color: "var(--green)" },
    industry: { label: T("产业政策", "Industrial policy"), color: "var(--orange-ink)" },
  };
  const events = [
    { y: "2008.11", c: "credit", s: T("国务院宣布约 4 万亿投资计划（中央出资约 1.2 万亿，其余地方与信贷配套）", "State Council announces the roughly 4 tn yuan program (about 1.2 tn from the center, the rest local matching and credit)") },
    { y: "2009", c: "credit", s: T("新增贷款约 9.6 万亿，M2 约 +28%；城投平台大规模借款", "New loans about 9.6 tn, M2 about +28%; LGFVs borrow at scale") },
    { y: "2010–12", c: "credit", s: T("贷款额度收紧 → 理财、信托、委托贷款扩张（影子银行）", "Loan quotas tighten → WMPs, trusts and entrusted loans expand (shadow banking)") },
    { y: "2010", c: "industry", s: T("新能源汽车购置补贴试点；2014 集成电路“大基金”一期约 1387 亿", "NEV purchase subsidies piloted; 2014: IC “Big Fund” phase one, about 139 bn") },
    { y: "2013.06", c: "reg", s: T("“钱荒”：银行间隔夜利率一度超过 10%——影子银行链条第一次显露脆弱", "The “cash crunch”: overnight interbank rate briefly above 10% — the shadow chain shows its fragility") },
    { y: "2015.06", c: "property", s: T("上证指数约 5178 点后下跌约四成；地方债置换启动（2015–18 约 12 万亿）", "Shanghai Composite near 5,178 then falls about 40%; local-debt swap begins (about 12 tn over 2015–18)") },
    { y: "2015–16", c: "credit", s: T("棚改货币化：三四线城市房市再获一轮信用", "Monetized shantytown redevelopment: another round of credit for lower-tier housing") },
    { y: "2016–18", c: "reg", s: T("“三去一降一补”、金融去杠杆、2018.04 资管新规（打破刚兑）", "Capacity/inventory/leverage cuts, financial deleveraging, April 2018 asset-management rules (end of implicit guarantees)") },
    { y: "2020.08", c: "reg", s: T("三道红线：越线房企不得增加有息负债——四格清单的“触发”", "Three red lines: developers over the lines may add no interest-bearing debt — the checklist's “trigger”") },
    { y: "2021.12", c: "property", s: T("恒大被认定违约（负债约 2.4 万亿）；2022.07 多地烂尾楼停贷潮", "Evergrande classed in default (liabilities about 2.4 tn); July 2022: mortgage boycotts on stalled projects") },
    { y: "2022–24", c: "property", s: T("新房销售面积三年约 −40%；土地出让收入约 8.7 → 4.9 万亿；多地限跌令", "New-home sales about −40% over three years; land revenue about 8.7 → 4.9 tn; price floors in many cities") },
    { y: "2023.10", c: "property", s: T("碧桂园境外债违约；数十家民营房企违约，国企总体维持融资", "Country Garden offshore default; dozens of private developers default, SOEs keep funding") },
    { y: "2023.07", c: "swap", s: T("政治局提出“一揽子化债方案”；10 月起特殊再融资债约 1.4 万亿", "Politburo calls for a comprehensive debt-resolution plan; from October, about 1.4 tn special refinancing bonds") },
    { y: "2024.11", c: "swap", s: T("人大批准 6 万亿限额 + 五年每年 8000 亿专项债 ≈ 10 万亿置换隐性债务", "NPC approves 6 tn ceiling + 800 bn/yr special bonds for five years ≈ 10 tn to swap hidden debt") },
    { y: "2023–24", c: "industry", s: T("电动车价格战、光伏全行业亏损（多晶硅约 −90%）、欧盟与美国加征关税；大基金三期约 3440 亿", "EV price war, industry-wide solar losses (polysilicon about −90%), EU and US tariffs; Big Fund phase three about 344 bn") },
  ];

  // —— ③ 风格化模型：L = 政策允许的清算程度 0–1 ——
  // 错误投资存量 M(t) 的半衰期随 L 下降（清算越少，滞留越久）；产出初期跌幅随 L 上升；
  // 未清算部分的一部分被转移到公共部门（对应化债 / 国有资产负债表），可见损失 = 被市场定价的那部分。
  function model(L) {
    const tau = 1.2 + 16 * Math.pow(1 - L, 1.6);                 // 错误投资存量的时间常数（年）
    const mal = (t) => 100 * Math.exp(-t / tau);                  // 未清算错误投资（起点 = 100）
    const t80 = tau * Math.log(5);                                // 清掉 80% 需要的年数
    const d = 3 + 9 * L;                                          // 初期产出跌幅（%）
    const h = 0.9 + 7 * Math.pow(1 - L, 2);                       // 产出恢复半衰期（年）
    const g = 0.32 * Math.pow(1 - L, 2);                          // 滞留错误投资的年拖累（%）
    const out = (t) => 100 - d * Math.pow(0.5, t / h) - g * Math.min(t, 12) * (1 - Math.pow(0.5, t / h)) * 0.5;
    let tRec = null; for (let t = 0; t <= 30; t += 0.1) { if (out(t) >= 99 && t > 0.3) { tRec = t; break; } }
    let loss = 0; for (let t = 0; t <= 30; t += 0.1) loss += (100 - out(t)) * 0.1;
    const transferred = Math.round(75 * (1 - L));                 // 转移到公共部门的损失份额（%）
    const visible = Math.round(20 + 80 * L);                      // 被市场定价（可见）的损失份额（%）
    return { tau, mal, t80, d, h, g, out, tRec, loss, transferred, visible };
  }
  const cases = [
    { id: "us1921", L: 0.9, name: T("美国 1920–21", "US 1920–21"), note: T("无救助、无刺激；18 个月复苏（阶段 5.3）", "No bailout, no stimulus; recovery in 18 months (Stage 5.3)") },
    { id: "us2008", L: 0.4, name: T("美国 2008", "US 2008"), note: T("雷曼倒闭 → TARP、QE、零利率；房价一次性 −30%，复苏乏力（阶段 5.4）", "Lehman fails → TARP, QE, ZIRP; houses −30% in one go, weak recovery (Stage 5.4)") },
    { id: "china", L: 0.25, name: T("中国 2021–", "China 2021–"), note: T("民企出清、平台与国企续命；价格托住、数量萎缩；损失分拆转移到财政", "Private firms exit, LGFVs and SOEs stay; prices held, quantities shrink; losses split and shifted to budgets") },
    { id: "japan", L: 0.15, name: T("日本 1990", "Japan 1990"), note: T("护送船团、续贷、零利率二十五年；三十四年（阶段 13.3）", "Convoy, evergreening, 25 years of ZIRP; thirty-four years (Stage 13.3)") },
  ];
  const INST = [
    { k: T("银行所有制", "Bank ownership"), jp: T("私有，护送船团", "Private, convoy system"), us: T("私有，可倒闭", "Private, can fail"), cn: T("国有控股，极少倒闭", "State-controlled, almost never fail") },
    { k: T("资本账户", "Capital account"), jp: T("开放（套利交易外流）", "Open (carry-trade outflows)"), us: T("开放", "Open"), cn: T("管制：储户没有替代品", "Controlled: depositors have no alternative") },
    { k: T("价格与退出", "Prices & exit"), jp: T("宽容坏账，地价慢跌", "Forbearance, slow land-price fall"), us: T("市场定价，破产法", "Market pricing, bankruptcy law"), cn: T("限跌令、保交楼、行政协调重组", "Price floors, delivery guarantees, administered restructuring") },
    { k: T("触发", "Trigger"), jp: T("加息至 6% + 房贷总量管制", "Hikes to 6% + lending caps"), us: T("17 次加息至 5.25%", "17 hikes to 5.25%"), cn: T("三道红线（行政规则）", "Three red lines (administrative rule)") },
    { k: T("断裂形状", "Shape of the snap"), jp: T("浅而长（藏起）", "Shallow and long (hidden)"), us: T("深而快（再托住）", "Deep and fast (then propped)"), cn: T("分拆、分摊、转移", "Split, shared, shifted") },
  ];

  let box = "inject";
  let filter = "all";
  let L = 0.25;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧭 中国 2008–2024：四格清单 + 时间线 + “政策允许了多少清算？”沙盘", "🧭 China 2008–2024: the four-box checklist + timeline + the “how much liquidation did policy allow?” sandbox")}</div>

      <div class="demo-block">
        <label class="demo-label">${T("① 四格清单（点一格看代理指标、证据与和美日的异同）", "① The four boxes (click one for its proxies, evidence and how it compares with the US and Japan)")}</label>
        <div class="demo-seg" id="ccl-box">${BOXES.map((b) => `<button data-b="${b.id}" class="${b.id === box ? "on" : ""}">${b.name}</button>`).join("")}</div>
        <div class="scn" id="ccl-boxpanel"></div>
      </div>

      <div class="demo-block">
        <label class="demo-label">${T("② 时间线 2008–2024（按类型过滤）", "② Timeline 2008–2024 (filter by type)")}</label>
        <div class="demo-seg" id="ccl-filter">
          <button data-c="all" class="on">${T("全部", "All")}</button>
          ${Object.entries(CATS).map(([k, v]) => `<button data-c="${k}">${v.label}</button>`).join("")}
        </div>
        <div class="tl" id="ccl-tl"></div>
      </div>

      <div class="demo-block">
        <label class="demo-label">${T("③ 政策允许的清算程度：", "③ Liquidation allowed by policy: ")}<b id="ccl-L">25%</b> <span style="color:var(--muted)">${T("（0 = 一切续命与转移，100 = 价格与破产走完）——风格化模型，不是预测", "(0 = everything kept alive or transferred, 100 = prices and bankruptcies run their course) — a stylized model, not a forecast")}</span></label>
        <input class="demo-slider" type="range" min="0" max="100" step="1" value="25" id="ccl-slider"/>
        <div class="demo-btns">${cases.map((c) => `<button class="demo-btn" data-L="${c.L}">${c.name}</button>`).join("")}</div>
        <div id="ccl-chart"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("初期调整深度", "Initial adjustment depth")}</div><div class="v neg" id="ccl-d">–</div></div>
          <div class="stat"><div class="k">${T("错误投资清掉 80% 用时", "Years to clear 80% of malinvestment")}</div><div class="v acc" id="ccl-t80">–</div></div>
          <div class="stat"><div class="k">${T("产出回到 99% 用时", "Years for output to regain 99%")}</div><div class="v" id="ccl-trec">–</div></div>
          <div class="stat"><div class="k">${T("30 年累计损失（%·年）", "30-yr cumulative loss (%·yrs)")}</div><div class="v" id="ccl-loss">–</div></div>
        </div>
        <div class="bar2"><span class="lab">${T("损失可见（市场定价）", "Loss visible (market-priced)")}</span><div class="track"><div class="fill" id="ccl-vis" style="background:var(--red)"></div></div><span class="val" id="ccl-vis-v">–</span></div>
        <div class="bar2"><span class="lab">${T("损失转移到公共部门", "Loss shifted to public sector")}</span><div class="track"><div class="fill" id="ccl-tr" style="background:var(--blue)"></div></div><span class="val" id="ccl-tr-v">–</span></div>
        <div class="demo-log" id="ccl-log"></div>
      </div>

      <div class="demo-block">
        <label class="demo-label">${T("④ 对照：日本 1990 · 美国 2008 · 中国 2021–（制度条件与模型读数）", "④ Comparison: Japan 1990 · US 2008 · China 2021– (institutions and model readouts)")}</label>
        <div class="cmp-3" id="ccl-cmp"></div>
      </div>

      <p class="demo-tip">${T(
        "先点四格：<strong>前三格与美日几乎同构，第四格形状不同</strong>——这就是本课的全部论点。再拉滑块：从中国（25%）拉到美国 1921（90%），初期跌得更深，但错误投资滞留的年数从十几年缩到两三年；往 0 拉，可见损失变小、转移到公共部门的份额变大——<strong>损失没有消失，只是换了持有人和时间表</strong>。模型是风格化的沙盘：它说明机制的方向，不给任何日期。",
        "Click the four boxes first: <strong>the first three are nearly identical to the US and Japan; the fourth has a different shape</strong> — that is the whole argument of the lesson. Then drag the slider: from China (25%) to US 1921 (90%), the initial drop deepens but the years malinvestment lingers shrink from a dozen to two or three; drag toward 0 and the visible loss falls while the share shifted to the public sector rises — <strong>the loss does not vanish; it changes hands and timetables.</strong> The model is a stylized sandbox: it shows the direction of the mechanism and gives no dates."
      )}</p>
    </div>`;

  function paintBox() {
    const b = BOXES.find((x) => x.id === box);
    const pill = b.match === "ok" ? `<span class="pill ok">${T("与美日同构", "Same structure as US / Japan")}</span>`
      : b.match === "warn" ? `<span class="pill" style="background:var(--blue-soft);color:var(--blue)">${T("机制同、形式异", "Same mechanism, different form")}</span>`
      : `<span class="pill bad">${T("形状不同：需补软预算约束", "Different shape: add the soft budget constraint")}</span>`;
    root.querySelector("#ccl-boxpanel").innerHTML = `
      <div class="scn-q" style="color:${b.color}">${b.head} ${pill}</div>
      <ul style="margin:0 0 8px 18px;padding:0;font-size:13.5px;line-height:1.6">${b.proxies.map((p) => `<li>${p}</li>`).join("")}</ul>
      <div class="scn-meta"><b>${T("vs 美国 2008：", "vs US 2008: ")}</b>${b.cmp.us} · <b>${T("vs 日本 1990：", "vs Japan 1990: ")}</b>${b.cmp.jp} · <b>${T("中国特有：", "China-specific: ")}</b>${b.cmp.diff}</div>
      <div class="scn-meta" style="color:var(--orange-ink)">${b.caveat}</div>`;
    root.querySelectorAll("#ccl-box button").forEach((x) => x.classList.toggle("on", x.dataset.b === box));
  }

  function paintTl() {
    root.querySelector("#ccl-tl").innerHTML = events.filter((e) => filter === "all" || e.c === filter).map((e) =>
      `<div class="tl-item"><span class="when">${e.y}</span><span class="pill" style="background:${CATS[e.c].color};color:#fff;margin-right:6px">${CATS[e.c].label}</span>${e.s}</div>`).join("");
  }

  function paintModel() {
    const m = model(L);
    root.querySelector("#ccl-L").textContent = Math.round(L * 100) + "%";
    root.querySelector("#ccl-d").textContent = "−" + m.d.toFixed(1) + "%";
    root.querySelector("#ccl-t80").textContent = m.t80.toFixed(1) + " " + T("年", "yrs");
    root.querySelector("#ccl-trec").textContent = m.tRec == null ? T("30 年内未恢复", "not within 30 yrs") : m.tRec.toFixed(1) + " " + T("年", "yrs");
    root.querySelector("#ccl-loss").textContent = m.loss.toFixed(0);
    root.querySelector("#ccl-vis").style.width = m.visible + "%";
    root.querySelector("#ccl-vis-v").textContent = m.visible + "%";
    root.querySelector("#ccl-tr").style.width = m.transferred + "%";
    root.querySelector("#ccl-tr-v").textContent = m.transferred + "%";
    const ref = model(0.9);
    const res = lineChart({
      fns: [
        { f: m.mal, cls: "line3" },
        { f: m.out, cls: "line" },
        { f: ref.mal, cls: "line2" },
      ],
      lo: 0, hi: 30, xlabel: T("触发之后的年数", "Years after the trigger"), uid: "ccl", samples: 120, forceZero: true,
      markerX: m.t80 <= 30 ? m.t80 : undefined, markerLabel: m.t80 <= 30 ? T("清掉 80%", "80% cleared") : undefined,
    });
    root.querySelector("#ccl-chart").innerHTML = chartBlock(res, [
      ["var(--red)", T("未清算的错误投资存量（起点 = 100）", "Unliquidated malinvestment (start = 100)")],
      ["var(--orange)", T("产出相对趋势（趋势 = 100）", "Output relative to trend (trend = 100)")],
      ["var(--blue)", T("对照：清算 90% 时的错误投资存量", "Reference: malinvestment at 90% liquidation")],
    ]);
    root.querySelectorAll("[data-L]").forEach((b) => b.classList.toggle("active", Math.abs(+b.dataset.L - L) < 0.03));
    const lines = [];
    if (L < 0.2) lines.push(`<span class="warn">${T("清算程度很低：错误投资滞留十几年以上，可见损失小，但七成左右的损失转移到公共部门——这是日本式的慢性形式，加上中国式的转移。", "Very little liquidation: malinvestment lingers for a dozen-plus years, the visible loss is small, but about three-quarters of it is shifted to the public sector — Japan's chronic form plus China's transfer.")}</span>`);
    else if (L < 0.5) lines.push(`<span class="warn">${T("部分清算：民企出清、平台与国企续命的分界线大致落在这里。可见损失与转移份额各占一半上下——“清算完成了吗”从资产价格上读不出来。", "Partial liquidation: the line between private firms cleared out and LGFVs/SOEs kept alive falls about here. Visible and transferred losses are each roughly half — “is liquidation finished?” cannot be read off asset prices.")}</span>`);
    else lines.push(`<span class="ok">${T("高清算程度：初期跌得深，但错误投资两三年内基本清掉，累计损失反而最小。这是阶段 5.3 的主张——代价是短期的剧痛，以及由谁承担的政治问题。", "High liquidation: a deep initial drop, but malinvestment is mostly cleared within two or three years and the cumulative loss is the smallest. That is Stage 5.3's claim — at the price of acute short-term pain and the political question of who bears it.")}</span>`);
    lines.push(T("提醒：模型里的“清算程度”是政策变量，不是市场变量；在中国案例中它的时点由行政判断决定，任何分析都不应给出日期。", "Reminder: the model's “liquidation allowed” is a policy variable, not a market variable; in the Chinese case its timing is an administrative judgment, and no analysis should give a date."));
    root.querySelector("#ccl-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  }

  function paintCmp() {
    const order = ["japan", "us2008", "china"];
    const key = { japan: "jp", us2008: "us", china: "cn" };
    root.querySelector("#ccl-cmp").innerHTML = order.map((id) => {
      const c = cases.find((x) => x.id === id);
      const mm = model(c.L);
      const cur = Math.abs(c.L - L) < 0.03;
      return `<div class="cmp-cell ${cur ? "hl" : id === "us2008" ? "cold" : ""}"><h5>${c.name} · ${T("清算约", "liquidation about")} ${Math.round(c.L * 100)}%</h5>
        <div style="font-size:12.5px;line-height:1.55;color:var(--muted)">${c.note}</div>
        <div style="margin-top:6px;font-size:12px;line-height:1.5">${INST.map((r) => `<div><b>${r.k}：</b>${r[key[id]]}</div>`).join("")}</div>
        <div style="margin-top:6px;font-size:12.5px;color:var(--orange-ink)">${T("模型：跌", "Model: drop")} ${mm.d.toFixed(0)}%，${T("清掉 80% 需", "80% cleared in")} ${mm.t80 > 30 ? "30+" : mm.t80.toFixed(0)} ${T("年，转移", "yrs, shifted")} ${mm.transferred}%</div></div>`;
    }).join("");
  }

  root.querySelectorAll("#ccl-box button").forEach((b) => b.addEventListener("click", () => { box = b.dataset.b; paintBox(); }));
  root.querySelectorAll("#ccl-filter button").forEach((b) => b.addEventListener("click", () => {
    filter = b.dataset.c;
    root.querySelectorAll("#ccl-filter button").forEach((x) => x.classList.toggle("on", x === b));
    paintTl();
  }));
  root.querySelector("#ccl-slider").addEventListener("input", (e) => { L = +e.target.value / 100; paintModel(); paintCmp(); });
  root.querySelectorAll("[data-L]").forEach((b) => b.addEventListener("click", () => {
    L = +b.dataset.L;
    root.querySelector("#ccl-slider").value = Math.round(L * 100);
    paintModel(); paintCmp();
  }));

  paintBox();
  paintTl();
  paintModel();
  paintCmp();
}
