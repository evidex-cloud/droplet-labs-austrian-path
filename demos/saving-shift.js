// 交互演示：储蓄增加时的生产阶段重排——拖动“储蓄比例”，看晚期阶段收缩、早期阶段扩张、利率下降、
// 两期消费如何变化；打开“凯恩斯视角”，同一个滑块在总量模型（C+I、乘数）里讲出完全不同的故事，并排对比。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const Y = 600;                       // 年收入
  const S0 = 1 / 6;                    // 基准储蓄率（100/600）
  const NAMES = [
    T("基础研究", "Basic research"), T("勘探/研发", "Exploration / R&D"), T("采矿", "Mining"), T("冶炼", "Refining"),
    T("制造", "Manufacturing"), T("批发", "Wholesale"), T("零售", "Retail"),
  ];
  let s = S0;
  let keynes = false;

  const model = (sv) => {
    const rate = Math.max(1, 7 - 12 * sv);                            // 1/6 → 5%，1/4 → 4%
    const N = Math.max(3, Math.min(7, Math.round(5 + (sv - S0) * 12))); // 基准 5 段
    const cNow = Y * (1 - sv);
    const saving = Y - cNow;
    const yLater = Y * (1 + 0.12 * (N - 5));                          // 每多一段，几年后产出 +12%（示意）
    const cLater = yLater * (1 - sv);
    const stages = Array.from({ length: N }, (_, k) => cNow * (k + 1) / N);
    const inProcess = stages.slice(0, -1).reduce((a, b) => a + b, 0);
    return { rate, N, cNow, saving, yLater, cLater, stages, inProcess };
  };
  const base = model(S0);

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔀 储蓄重排沙盘：少吃一口，生产链往上游长一截", "🔀 The saving-shift sandbox: eat one bite less, and the chain grows a link upstream")}</div>
      <div class="demo-block">
        <div class="demo-row">
          <label class="demo-label" style="margin:0">${T("收入中储蓄的比例：", "Share of income saved:")} <b id="ss-s">17%</b>${T("（基准 17% ≈ 600 里存 100）", " (baseline 17% ≈ 100 of 600)")}</label>
          <div class="demo-seg"><button id="ss-a" class="on">${T("奥派视角", "Austrian view")}</button><button id="ss-k">${T("凯恩斯视角", "Keynesian view")}</button></div>
        </div>
        <input class="demo-slider" type="range" min="5" max="40" step="1" value="17" id="ss-slider" />
      </div>
      <div id="ss-body"></div>
      <div class="demo-log" id="ss-log" style="margin-top:12px"></div>
      <p class="demo-tip">${T(
        "看三件事：<strong>①</strong> 往右拉，零售条变短、采矿条变长、最上游长出新的一段——总需求没有消失，它搬了家；<strong>②</strong> 利率跟着下落，这是储蓄者“想以后消费”被翻译成数字；<strong>③</strong> “几年后的消费”反超“现在的消费”。切到凯恩斯视角，同一个滑块只剩两个桶（C、I）和一个乘数——阶段消失了，搬家也就看不见了，剩下的只有“需求减少”。分歧不在算术，在有没有结构。",
        "Watch three things: <strong>①</strong> drag right and the retail bar shortens, the mining bar lengthens and a new link appears furthest upstream — demand did not vanish, it moved; <strong>②</strong> the rate falls: savers' “consume later” translated into a number; <strong>③</strong> “consumption a few years out” overtakes “consumption now.” Switch to the Keynesian view: the same slider now feeds two buckets (C, I) and a multiplier — the stages are gone, so the move is invisible and all that remains is “less demand.” The disagreement is not arithmetic; it is whether there is structure."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const stageBars = (m) => {
    const names = NAMES.slice(NAMES.length - m.N);
    const baseNames = NAMES.slice(NAMES.length - base.N);
    return `<div class="stages">${names.map((nm, k) => {
      const v = m.stages[k];
      const bi = baseNames.indexOf(nm);
      const bv = bi >= 0 ? base.stages[bi] : null;
      const d = bv == null ? v : v - bv;
      const col = Math.abs(d) < 0.5 ? "var(--muted)" : d > 0 ? "var(--green)" : "var(--red)";
      return `<div class="stage-bar"><span class="lab">${nm}</span><div class="track"><div class="fill" style="width:${(v / Y) * 100}%"></div>${bv != null ? `<div class="fill ghost" style="width:${(bv / Y) * 100}%"></div>` : ""}</div><span class="val" style="color:${col}">${v.toFixed(0)}${bv == null ? T(" 新", " new") : (d > 0 ? " +" : " ") + d.toFixed(0)}</span></div>`;
    }).join("")}</div>`;
  };

  const paintAustrian = (m) => `
    <div class="demo-grid">
      <div class="demo-block">
        <div class="demo-label">${T("各阶段累计价值（虚线 = 基准）", "Accumulated value by stage (dashed = baseline)")}</div>
        ${stageBars(m)}
      </div>
      <div class="demo-block">
        <div class="stat-row">
          <div class="stat"><div class="k">${T("利率", "Interest rate")}</div><div class="v acc">${m.rate.toFixed(1)}%</div></div>
          <div class="stat"><div class="k">${T("阶段数", "Stages")}</div><div class="v">${m.N}</div></div>
          <div class="stat"><div class="k">${T("在途中间品", "Goods in process")}</div><div class="v">${m.inProcess.toFixed(0)}</div></div>
        </div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("现在的消费", "Consumption now")}</div><div class="v">${m.cNow.toFixed(0)}</div></div>
          <div class="stat"><div class="k">${T("几年后的消费", "Consumption in a few years")}</div><div class="v ${m.cLater > m.cNow + 0.5 ? "pos" : m.cLater < m.cNow - 0.5 ? "neg" : ""}">${m.cLater.toFixed(0)}</div></div>
          <div class="stat"><div class="k">${T("储蓄（生存基金）", "Saving (subsistence fund)")}</div><div class="v">${m.saving.toFixed(0)}</div></div>
        </div>
      </div>
    </div>`;

  const paintKeynes = (m) => {
    const dC = -(s - S0) * Y;               // 自主消费变化
    const mult = 1 / Math.max(0.05, s);     // 乘数 = 1 / 边际储蓄倾向
    const dY = dC * mult;
    const yK = Y + dY;
    const savK = s * yK;
    const invK = base.saving;               // 投资由“动物精神”决定，不随利率变（凯恩斯假设）
    return `
    <div class="cmp">
      <div class="cmp-cell hl">
        <h5>${T("奥派：有阶段", "Austrian: with stages")}</h5>
        <div class="demo-meta">${T("零售 " + base.stages[base.N - 1].toFixed(0) + " → " + m.cNow.toFixed(0) + "；最上游 " + (m.N > base.N ? "新增 " + m.stages[0].toFixed(0) : m.N < base.N ? "被砍掉" : "不变") + "；利率 " + base.rate.toFixed(1) + "% → " + m.rate.toFixed(1) + "%。", "Retail " + base.stages[base.N - 1].toFixed(0) + " → " + m.cNow.toFixed(0) + "; furthest upstream " + (m.N > base.N ? "adds " + m.stages[0].toFixed(0) : m.N < base.N ? "is cut" : "unchanged") + "; rate " + base.rate.toFixed(1) + "% → " + m.rate.toFixed(1) + "%.")}</div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("现在消费", "C now")}</div><div class="v">${m.cNow.toFixed(0)}</div></div>
          <div class="stat"><div class="k">${T("几年后消费", "C later")}</div><div class="v ${m.cLater > m.cNow ? "pos" : "neg"}">${m.cLater.toFixed(0)}</div></div>
          <div class="stat"><div class="k">${T("总储蓄", "Total saving")}</div><div class="v">${m.saving.toFixed(0)}</div></div>
        </div>
      </div>
      <div class="cmp-cell cold">
        <h5>${T("凯恩斯：只有 C 与 I（投资由“动物精神”决定，对利率不敏感）", "Keynes: only C and I (investment set by “animal spirits,” insensitive to the rate)")}</h5>
        <div class="demo-meta">${T("自主消费变化 " + dC.toFixed(0) + " × 乘数 " + mult.toFixed(1) + "（= 1 ÷ 储蓄倾向）→ 收入 " + Y + " → " + yK.toFixed(0) + "。投资停在 " + invK.toFixed(0) + "。", "Autonomous consumption change " + dC.toFixed(0) + " × multiplier " + mult.toFixed(1) + " (= 1 ÷ saving propensity) → income " + Y + " → " + yK.toFixed(0) + ". Investment stuck at " + invK.toFixed(0) + ".")}</div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("收入", "Income")}</div><div class="v ${yK < Y - 0.5 ? "neg" : yK > Y + 0.5 ? "pos" : ""}">${yK.toFixed(0)}</div></div>
          <div class="stat"><div class="k">${T("消费", "C")}</div><div class="v">${((1 - s) * yK).toFixed(0)}</div></div>
          <div class="stat"><div class="k">${T("实现的储蓄", "Realized saving")}</div><div class="v">${savK.toFixed(0)}</div></div>
        </div>
      </div>
    </div>`;
  };

  const paint = () => {
    const m = model(s);
    $("ss-s").textContent = Math.round(s * 100) + "%";
    $("ss-body").innerHTML = keynes ? paintKeynes(m) : paintAustrian(m);
    const lines = [];
    const dN = m.N - base.N;
    if (!keynes) {
      if (s > S0 + 0.004) {
        lines.push(`<span class="ok">${T("时间偏好下降 → 可贷资金供给增加 → 利率 " + base.rate.toFixed(1) + "% → " + m.rate.toFixed(1) + "%。晚期阶段（零售、批发）因消费减少而收缩；早期阶段因折现率下降而扩张——像长期债券对利率更敏感一样。", "Time preference falls → more loanable funds → rate " + base.rate.toFixed(1) + "% → " + m.rate.toFixed(1) + "%. Late stages (retail, wholesale) shrink as consumption falls; early stages grow as the discount falls — like long bonds being more rate-sensitive.")}</span>`);
        if (dN > 0) lines.push(T("链条延长了 " + dN + " 段：在 " + m.rate.toFixed(1) + "% 下，原本不划算的最上游项目变得划算。在途中间品 " + base.inProcess.toFixed(0) + " → " + m.inProcess.toFixed(0) + "，靠多出来的储蓄养活。", "The chain gained " + dN + " link(s): at " + m.rate.toFixed(1) + "% the furthest-upstream projects that did not pay now do. Goods in process " + base.inProcess.toFixed(0) + " → " + m.inProcess.toFixed(0) + ", fed by the extra saving."));
        lines.push(T("现在消费 " + m.cNow.toFixed(0) + "（比基准少 " + (base.cNow - m.cNow).toFixed(0) + "），几年后 " + m.cLater.toFixed(0) + "（" + (m.cLater >= base.cNow ? "反超基准 " + (m.cLater - base.cNow).toFixed(0) : "仍低于基准") + "）——先种树，后乘凉。", "Consumption now " + m.cNow.toFixed(0) + " (" + (base.cNow - m.cNow).toFixed(0) + " below baseline), in a few years " + m.cLater.toFixed(0) + " (" + (m.cLater >= base.cNow ? "overtakes baseline by " + (m.cLater - base.cNow).toFixed(0) : "still below baseline") + ") — plant the tree first, sit in the shade later."));
      } else if (s < S0 - 0.004) {
        lines.push(`<span class="bad">${T("时间偏好上升 → 储蓄减少 → 利率升到 " + m.rate.toFixed(1) + "%。最上游的阶段养不起，被砍掉；今天多吃，几年后的消费 " + m.cLater.toFixed(0) + " 反而低于基准——这是资本消耗。", "Time preference rises → less saving → rate up to " + m.rate.toFixed(1) + "%. The furthest-upstream stages cannot be fed and are cut; more eaten today, but consumption in a few years (" + m.cLater.toFixed(0) + ") falls below baseline — capital consumption.")}</span>`);
      } else {
        lines.push(T("这是基准结构：五个阶段、利率 5%、每年消费 500。拖动滑块看它怎么变形。", "This is the baseline: five stages, 5% rate, 500 consumed a year. Drag the slider to deform it."));
      }
    } else {
      const dC = -(s - S0) * Y;
      if (Math.abs(dC) < 0.5) lines.push(T("凯恩斯模型的基准：C = 500，I = 100，Y = 600。拖动滑块看乘数怎么工作。", "Keynesian baseline: C = 500, I = 100, Y = 600. Drag the slider to see the multiplier at work."));
      else if (dC < 0) {
        lines.push(`<span class="warn">${T("凯恩斯视角：消费减少 " + (-dC).toFixed(0) + "，投资不动（它由预期决定，不看利率），收入经乘数下降；实现的储蓄仍是 " + (s * (Y + dC / s)).toFixed(0) + "——“大家想多存，结果一分没多”。这就是节俭悖论。", "Keynesian view: consumption falls by " + (-dC).toFixed(0) + ", investment stays put (set by expectations, not the rate), income falls through the multiplier; realized saving is still " + (s * (Y + dC / s)).toFixed(0) + " — “everyone tried to save more and nobody did.” That is the paradox of thrift.")}</span>`);
        lines.push(T("奥派的回应：这个结论完全来自“投资对利率不敏感”和“没有阶段”两个假设。加回生产结构，零售的 −" + (-dC).toFixed(0) + " 就变成了上游的 +" + (-dC).toFixed(0) + "；20 年期的矿山对利率极其敏感。切回奥派视角看同一个滑块。", "The Austrian reply: the conclusion rests entirely on two assumptions — investment insensitive to the rate, and no stages. Put the structure back and retail's −" + (-dC).toFixed(0) + " becomes upstream's +" + (-dC).toFixed(0) + "; a 20-year mine is extremely rate-sensitive. Switch back to the Austrian view of the same slider."));
        lines.push(T("凯恩斯说对的部分：若价格被冻结、利率被钉死、或人们只是把现金塞进床垫（那是货币需求，不是储蓄），信号确实传不出去。奥派的答案是解除僵硬，而不是刺激。", "What Keynes gets right: if prices are frozen, the rate pinned, or people merely stuff cash in a mattress (money demand, not saving), the signal indeed fails. The Austrian answer is to remove the rigidity, not to stimulate."));
      } else {
        lines.push(`<span class="ok">${T("凯恩斯视角：消费增加 " + dC.toFixed(0) + "，经乘数放大，收入上升——看起来很美。奥派视角下，这是储蓄减少、最上游阶段被砍、几年后消费下降。同一个滑块，两个故事。", "Keynesian view: consumption up by " + dC.toFixed(0) + ", amplified by the multiplier, income rises — looks lovely. In the Austrian view this is less saving, the furthest-upstream stage cut, and lower consumption a few years out. One slider, two stories.")}</span>`);
      }
    }
    $("ss-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("ss-slider").addEventListener("input", (e) => { s = +e.target.value / 100; paint(); });
  $("ss-a").addEventListener("click", () => { keynes = false; $("ss-a").classList.add("on"); $("ss-k").classList.remove("on"); paint(); });
  $("ss-k").addEventListener("click", () => { keynes = true; $("ss-k").classList.add("on"); $("ss-a").classList.remove("on"); paint(); });
  paint();
}
