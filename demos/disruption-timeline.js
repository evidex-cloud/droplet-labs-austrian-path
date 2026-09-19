// 交互演示：创造性破坏时间线——8 个数字时代的替代案例。拖动“保护在位者”滑块（监管护城河），
// 看替代被推迟了几年、消费者为旧世界多付了多少（示意指数）；点击案例看在位者与进入者的份额交叉怎么被推后。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 年份为约数；gain = 消费者每年从替代中获得的剩余（示意指数，1–5）；span = 自由进入下从进入者出现到交叉的年数
  const CASES = [
    { id: "bb", inc: T("百视达（门店租赁）", "Blockbuster (store rental)"), ent: T("Netflix（邮寄 → 流媒体）", "Netflix (mail → streaming)"), start: 2004, cross: 2009, end: 2010, gain: 3,
      note: T("顶峰约 9,000 家门店；2000 年拒绝以约 5,000 万美元收购 Netflix；2010 年破产。消费者得到：不用出门、没有逾期费、几乎无限的片库。", "Peak of about 9,000 stores; declined to buy Netflix for about $50M in 2000; bankrupt in 2010. Consumers gained: no trip, no late fees, a near-unlimited library."),
      lobby: T("门店租赁业没有强大的监管护城河可用——所以替代来得很快。", "Store rental had no strong regulatory moat to lean on — so replacement came fast.") },
    { id: "kodak", inc: T("柯达（胶片）", "Kodak (film)"), ent: T("数码摄影", "Digital photography"), start: 1996, cross: 2005, end: 2012, gain: 4,
      note: T("1975 年柯达工程师造出第一台数码相机；1996 年前后市值约 300 亿美元、员工约 14.5 万；2012 年破产。每张照片的边际成本归零。", "A Kodak engineer built the first digital camera in 1975; around 1996 the firm was worth about $30B with about 145,000 employees; bankrupt in 2012. The marginal cost of a photo fell to zero."),
      lobby: T("没有法律能挡住数码相机；柯达输给了自己的资本结构。", "No law could hold back the digital camera; Kodak lost to its own capital structure.") },
    { id: "nokia", inc: T("诺基亚（Symbian）", "Nokia (Symbian)"), ent: T("iPhone / 安卓", "iPhone / Android"), start: 2007, cross: 2011, end: 2013, gain: 5,
      note: T("2007 年占全球手机约四成；同年 iPhone 发布；2013 年手机业务卖给微软。消费者得到：口袋里的计算机。", "About 40% of the world's handsets in 2007; the iPhone launched the same year; phone business sold to Microsoft in 2013. Consumers gained: a computer in the pocket."),
      lobby: T("有触屏原型，但整个生态、渠道与现金流都绑在 Symbian 上。", "It had touchscreen prototypes, but its ecosystem, channels and cash flow were all tied to Symbian.") },
    { id: "bbry", inc: T("黑莓（实体键盘）", "BlackBerry (physical keyboard)"), ent: T("触屏智能手机", "Touchscreen smartphones"), start: 2009, cross: 2012, end: 2016, gain: 3,
      note: T("2009 年约占美国智能手机一半、企业市场几乎独占；2016 年不足 1%。", "About half of U.S. smartphones in 2009 and near-total in the enterprise; under 1% by 2016."),
      lobby: T("企业采购的“安全合规”曾是它的护城河，但那是客户自选的，不是法律规定的。", "Enterprise “security compliance” was once its moat — but customers chose it; no law required it.") },
    { id: "taxi", inc: T("出租车牌照", "Taxi medallions"), ent: T("网约车（Uber / Lyft / 滴滴）", "Ride-hailing (Uber / Lyft / Didi)"), start: 2011, cross: 2015, end: 2019, gain: 4,
      note: T("Uber 2009 年成立；纽约牌照 2013–14 年约 100 万美元一张，之后跌到约十几万到二十万美元。消费者得到：随叫随到、明码标价、有评价。", "Uber founded in 2009; a New York medallion around $1M in 2013–14, later down to roughly $100–200k. Consumers gained: a car on demand, an up-front price, ratings."),
      lobby: T("典型的监管护城河：牌照持有者游说禁止或限制网约车，在不少城市成功拖了好几年——这正是滑块模拟的东西。", "The classic regulatory moat: medallion owners lobbied to ban or restrict ride-hailing and held it off for years in many cities — exactly what the slider simulates.") },
    { id: "cable", inc: T("有线电视", "Cable TV"), ent: T("流媒体", "Streaming"), start: 2012, cross: 2020, end: 2023, gain: 3,
      note: T("美国付费电视订户 2012 年前后见顶；2023 年流媒体在美国电视收视中的份额首次超过有线与广播。", "U.S. pay-TV subscriptions peaked around 2012; in 2023 streaming's share of U.S. TV viewing exceeded cable and broadcast for the first time."),
      lobby: T("有线运营商游说反对网络中立与市政宽带，减缓了替代者赖以生存的基础设施。", "Cable operators lobbied against net neutrality and municipal broadband, slowing the infrastructure entrants depend on.") },
    { id: "myspace", inc: T("MySpace", "MySpace"), ent: T("Facebook", "Facebook"), start: 2006, cross: 2008, end: 2011, gain: 2,
      note: T("2005 年新闻集团以约 5.8 亿美元收购；2008 年被 Facebook 超过；2011 年以约 3,500 万美元卖出。", "Bought by News Corp for about $580M in 2005; overtaken by Facebook in 2008; sold in 2011 for about $35M."),
      lobby: T("社交网络没有牌照可守——从顶峰到被替代只用了约三年。", "Social networks had no license to hide behind — peak to displacement in about three years.") },
    { id: "insta", inc: T("Instagram（图片信息流）", "Instagram (photo feed)"), ent: T("TikTok（短视频）", "TikTok (short video)"), start: 2018, cross: 2021, end: 2023, gain: 2,
      note: T("TikTok 2017–18 年国际化，2021 年月活约 10 亿；Instagram 2020 年推出 Reels 模仿短视频——在位者靠“抄”（也就是竞争）活了下来。", "TikTok went international in 2017–18 and had about a billion monthly users by 2021; Instagram launched Reels in 2020 — the incumbent survived by copying, which is to say by competing."),
      lobby: T("这一次在位者做出了更好的产品，而不是去找立法者——对照组。", "This time the incumbent built a better product instead of going to the legislature — the control case.") },
  ];

  let protect = 0, sel = "taxi";
  const MAX_DELAY = 8; // 保护力度 100% ≈ 推迟 8 年

  const delayYears = () => (protect / 100) * MAX_DELAY;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⏳ 创造性破坏时间线：保护在位者，替代就晚几年——消费者为此付多少？", "⏳ Creative-destruction timeline: protect the incumbent and replacement comes years later — what do consumers pay?")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("保护在位者的力度（监管护城河：牌照、特许经营法、合规壁垒）", "How hard the incumbent is protected (regulatory moat: licenses, franchise laws, compliance barriers)")}：<b id="dt-p">${protect}%</b></label>
        <input class="demo-slider" id="dt-protect" type="range" min="0" max="100" step="5" value="${protect}" />
        <div class="stat-row">
          <div class="stat"><div class="k">${T("每个案例被推迟", "Delay per case")}</div><div class="v" id="dt-delay">–</div></div>
          <div class="stat"><div class="k">${T("八个案例合计推迟", "Total delay across 8 cases")}</div><div class="v" id="dt-total">–</div></div>
          <div class="stat"><div class="k">${T("消费者剩余损失（示意指数）", "Consumer surplus lost (illustrative index)")}</div><div class="v neg" id="dt-loss">–</div></div>
          <div class="stat"><div class="k">${T("替代最终发生吗？", "Does replacement still happen?")}</div><div class="v acc" id="dt-still">–</div></div>
        </div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("八个案例（点击查看）", "Eight cases (click to inspect)")}</label>
          <div class="tl" id="dt-tl"></div>
        </div>
        <div class="demo-block">
          <div id="dt-detail"></div>
          <div id="dt-chart"></div>
        </div>
      </div>
      <p class="demo-tip">${T(
        "先把滑块留在 0：这是八次“消费者改主意”真实发生的节奏——最慢的柯达约 15 年，最快的 MySpace 约 3 年。再把滑块拖到 50%、100%：每个案例的交叉点向右推，替代没有被取消，只是晚了几年；而“损失”那一格在累加——那是被推迟的每一年里消费者多付的钱，没有人为它上街。点“出租车牌照”看真实发生过的版本；点“Instagram”看在位者靠更好的产品而不是靠法律活下来的对照组。",
        "Leave the slider at 0 first: this is the real tempo of eight times consumers changed their minds — Kodak the slowest at about 15 years, MySpace the fastest at about 3. Now drag to 50%, then 100%: every crossing moves right; replacement is not cancelled, only delayed — while the “loss” tile keeps adding up: the extra consumers pay in each year of delay, which nobody marches for. Click “Taxi medallions” for the version that actually happened; click “Instagram” for the control case where the incumbent survived on a better product rather than on law."
      )}</p>
    </div>`;

  const paint = () => {
    const d = delayYears();
    root.querySelector("#dt-p").textContent = protect + "%";
    root.querySelector("#dt-delay").textContent = T(`约 ${d.toFixed(1)} 年`, `about ${d.toFixed(1)} years`);
    root.querySelector("#dt-total").textContent = T(`${(d * CASES.length).toFixed(0)} 年`, `${(d * CASES.length).toFixed(0)} years`);
    const loss = CASES.reduce((s, c) => s + c.gain * d, 0);
    root.querySelector("#dt-loss").textContent = loss.toFixed(0);
    root.querySelector("#dt-still").textContent = protect >= 100 ? T("会——只是晚 8 年", "yes — just 8 years late") : protect > 0 ? T("会——只是晚了", "yes — just later") : T("会，按真实节奏", "yes, at the real tempo");

    root.querySelector("#dt-tl").innerHTML = CASES.map((c) => {
      const cross = c.cross + d;
      return `<div class="tl-item ${c.id === sel ? "" : "dim"}" data-id="${c.id}" style="cursor:pointer"><span class="when">${c.start}→${cross.toFixed(0)}</span><b>${c.inc}</b> → ${c.ent}${d > 0 ? ` <span class="pill bad">${T(`+${d.toFixed(0)} 年`, `+${d.toFixed(0)} yrs`)}</span>` : ""}</div>`;
    }).join("");
    root.querySelectorAll("#dt-tl .tl-item").forEach((el) => el.addEventListener("click", () => { sel = el.dataset.id; paint(); }));

    const c = CASES.find((x) => x.id === sel);
    const span = c.cross - c.start;
    root.querySelector("#dt-detail").innerHTML = `
      <div class="scn"><div class="scn-q"><b>${c.inc}</b> → ${c.ent}</div>
        <div class="scn-meta">${c.note}</div>
        <div class="scn-meta" style="color:var(--orange-ink)">${c.lobby}</div>
        <div class="scn-meta">${T(`自由进入下：顶峰 ${c.start}，交叉约 ${c.cross}（${span} 年）。当前保护力度下：交叉推迟到约 ${(c.cross + d).toFixed(0)}，消费者多付 ${(c.gain * d).toFixed(1)}（指数：每年 ${c.gain} × ${d.toFixed(1)} 年）。`, `Free entry: peak ${c.start}, crossing about ${c.cross} (${span} years). At the current protection level: crossing delayed to about ${(c.cross + d).toFixed(0)}; consumers pay ${(c.gain * d).toFixed(1)} more (index: ${c.gain}/year × ${d.toFixed(1)} years).`)}</div>
      </div>`;

    // 份额曲线：在位者 = 1 − logistic，进入者 = logistic；保护把中点右移 d 年
    const k = Math.max(0.8, span / 3);
    const lo = c.start - 1, hi = c.end + MAX_DELAY + 2;
    const logistic = (t, mid) => 1 / (1 + Math.exp(-(t - mid) / (k / 2)));
    const res = lineChart({
      fns: [
        { f: (t) => 100 * (1 - logistic(t, c.cross)), cls: "line2" },
        { f: (t) => 100 * logistic(t, c.cross), cls: "line" },
        { f: (t) => 100 * (1 - logistic(t, c.cross + d)), cls: "line3" },
      ],
      lo, hi, xlabel: T("年份", "year"), forceZero: true, uid: "dt", markerX: c.cross + d, markerLabel: T("受保护时的交叉", "crossing when protected"),
    });
    root.querySelector("#dt-chart").innerHTML = chartBlock(res, [
      ["var(--blue)", T("在位者（自由进入）", "incumbent (free entry)")],
      ["var(--orange)", T("进入者（自由进入）", "entrant (free entry)")],
      ["var(--red)", T("在位者（受保护）", "incumbent (protected)")],
    ]);
  };

  root.querySelector("#dt-protect").addEventListener("input", (e) => { protect = +e.target.value; paint(); });
  paint();
}
