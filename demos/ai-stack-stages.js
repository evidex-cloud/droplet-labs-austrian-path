// 交互演示：AI 生产结构的阶段条——从光刻机到消费者的哈耶克三角。
// 拖利率、预期消费需求、GPU 经济寿命，看上游阶段怎么膨胀/收缩，
// 以及一座 1000 亿美元的 AI 栈需要多少年的消费者付费才能“证明”自己。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 阶段：名称、离消费者的年数、基线宽度（利率 5%、需求 2000 亿时）
  const STAGES = [
    { n: T("光刻机 / 设备", "Lithography / equipment"), yrs: 8, base: 40 },
    { n: T("晶圆厂", "Fabs"), yrs: 6, base: 50 },
    { n: T("GPU / 加速器", "GPUs / accelerators"), yrs: 4, base: 60 },
    { n: T("数据中心 + 电力", "Data centers + power"), yrs: 3, base: 70 },
    { n: T("模型训练", "Model training"), yrs: 1.5, base: 80 },
    { n: T("应用层", "Applications"), yrs: 0.5, base: 90 },
    { n: T("消费者服务", "Consumer services"), yrs: 0, base: 100 },
  ];
  const R0 = 0.05, S0 = 200; // 基线
  const CAPEX = 100, GPU = 60, LONG = 40, LONG_LIFE = 20, OPEX = 10, MARGIN = 0.6;

  let rate = 5, spend = 200, life = 4;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏗️ AI 栈的哈耶克三角：利率、预期需求与折旧怎么拉伸/压缩每一级", "🏗️ The AI stack as a Hayekian triangle: how rates, expected demand and depreciation stretch or squeeze each order")}</div>
      <div class="demo-grid-3">
        <div class="demo-block">
          <label class="demo-label">${T("利率", "Interest rate")}：<b id="ass-r">${rate}%</b></label>
          <input class="demo-slider" id="ass-rate" type="range" min="0" max="10" step="0.5" value="${rate}" />
          <div class="demo-meta">${T("基线 5%。越上游的阶段，现值对利率越敏感（久期）。", "Baseline 5%. The further upstream, the more rate-sensitive the present value (duration).")}</div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("预期年度消费者支出（十亿美元）", "Expected annual consumer spend ($bn)")}：<b id="ass-s">${spend}</b></label>
          <input class="demo-slider" id="ass-spend" type="range" min="20" max="500" step="10" value="${spend}" />
          <div class="demo-meta">${T("链条末端那个“20 美元”的总和。每一级的价值都从这里向上归属。", "The sum of all those “$20 a month” at the end of the chain. Every order's value is imputed upward from here.")}</div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("GPU 经济寿命（年）", "GPU economic life (years)")}：<b id="ass-l">${life}</b></label>
          <input class="demo-slider" id="ass-life" type="range" min="2" max="8" step="0.5" value="${life}" />
          <div class="demo-meta">${T("下一代卡出得越快，这一代必须越快赚回自己。", "The faster the next generation ships, the faster this one must earn itself back.")}</div>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("各阶段的现值（实心）vs 基线（虚线框）——利率 5%、需求 2000 亿", "Present value by stage (solid) vs baseline (dashed) — 5% rate, $200bn demand")}</div>
        <div class="stages" id="ass-stages"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("上游三级合计", "Top 3 upstream stages")}</div><div class="v" id="ass-up">–</div></div>
          <div class="stat"><div class="k">${T("下游三级合计", "Bottom 3 downstream stages")}</div><div class="v" id="ass-down">–</div></div>
          <div class="stat"><div class="k">${T("三角“长度”（上/下）", "Triangle “length” (up/down)")}</div><div class="v acc" id="ass-len">–</div></div>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("一座 1000 亿美元的 AI 栈（600 亿 GPU + 400 亿厂房电力）的年度账", "The annual account of a $100bn AI stack ($60bn GPUs + $40bn shell and power)")}</div>
        <div id="ass-bars"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("每年必须赚到的毛利", "Gross margin required per year")}</div><div class="v" id="ass-req">–</div></div>
          <div class="stat"><div class="k">${T("预期每年毛利（60%）", "Expected gross margin (60%)")}</div><div class="v" id="ass-have">–</div></div>
          <div class="stat"><div class="k">${T("回本所需年数", "Years to pay back")}</div><div class="v" id="ass-pay">–</div></div>
          <div class="stat"><div class="k">${T("判定", "Verdict")}</div><div class="v" id="ass-verdict">–</div></div>
        </div>
        <div class="demo-log" id="ass-log"></div>
      </div>
      <p class="demo-tip">${T(
        "先把利率从 5% 拖到 1%：最上游的光刻机与晶圆厂膨胀得最厉害，消费者那一级几乎不动——这就是久期。再把利率拖回 8%：上游先塌。然后把“GPU 经济寿命”从 4 年拖到 2.5 年，看“每年必须赚到的毛利”怎么跳——折旧是真实成本。最后调预期需求：<strong>回本年数 > 经济寿命</strong>时，这笔资本支出在下一代硬件出现前赚不回自己——无论故事多动听。这不是预测，是约束。",
        "First drag the rate from 5% to 1%: lithography and fabs at the top inflate the most while the consumer stage barely moves — that is duration. Drag it back to 8% and the top collapses first. Then pull “GPU economic life” from 4 down to 2.5 years and watch “gross margin required per year” jump — depreciation is a real cost. Finally adjust expected demand: when <strong>years to pay back > economic life</strong>, this capex cannot earn itself back before the next hardware generation arrives — however good the story. Not a forecast; a constraint."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const paint = () => {
    const r = rate / 100;
    $("ass-r").textContent = rate + "%"; $("ass-s").textContent = spend; $("ass-l").textContent = life;
    // 阶段现值：基线 × 需求因子 × 折现比
    const vals = STAGES.map((s) => s.base * (spend / S0) * Math.pow((1 + R0) / (1 + r), s.yrs));
    const mx = Math.max(100, ...vals);
    $("ass-stages").innerHTML = STAGES.map((s, i) => {
      const chg = (vals[i] / s.base - 1) * 100;
      const col = chg > 3 ? "var(--orange)" : chg < -3 ? "var(--red)" : "var(--green)";
      return `<div class="stage-bar">
        <span class="lab">${s.n}</span>
        <div class="track"><div class="fill" style="width:${(vals[i] / mx) * 100}%;background:${col}"></div><div class="fill ghost" style="width:${(s.base / mx) * 100}%"></div></div>
        <span class="val" style="color:${chg > 0 ? "var(--orange-ink)" : chg < 0 ? "var(--red)" : "var(--muted)"}">${chg >= 0 ? "+" : ""}${chg.toFixed(0)}%</span>
      </div>`;
    }).join("");
    const up = vals[0] + vals[1] + vals[2], down = vals[4] + vals[5] + vals[6];
    $("ass-up").textContent = up.toFixed(0); $("ass-down").textContent = down.toFixed(0);
    $("ass-len").textContent = (up / down).toFixed(2) + " (" + T("基线", "base") + " " + ((40 + 50 + 60) / (80 + 90 + 100)).toFixed(2) + ")";

    // 年度账
    const depGpu = GPU / life, depLong = LONG / LONG_LIFE, capCost = r * CAPEX;
    const req = depGpu + depLong + capCost + OPEX;
    const have = spend * MARGIN;
    const netForCapital = have - OPEX - capCost; // 用于回收资本的部分
    const payback = netForCapital > 0 ? CAPEX / netForCapital : Infinity;
    const rows = [
      [T("GPU 折旧（600 ÷ 寿命）", "GPU depreciation (60 ÷ life)"), depGpu, "var(--red)"],
      [T("厂房电力折旧（400 ÷ 20）", "Shell and power depreciation (40 ÷ 20)"), depLong, "var(--orange)"],
      [T("资本成本（利率 × 1000）", "Cost of capital (rate × 100)"), capCost, "var(--blue)"],
      [T("电费与运维", "Power and operations"), OPEX, "var(--muted)"],
    ];
    const mx2 = Math.max(req, have, 1);
    $("ass-bars").innerHTML = rows.map(([l, v, c]) => `<div class="bar2"><span class="lab" style="width:150px">${l}</span><div class="track"><div class="fill" style="width:${(v / mx2) * 100}%;background:${c}"></div></div><span class="val">${v.toFixed(1)}</span></div>`).join("")
      + `<div class="bar2"><span class="lab" style="width:150px;font-weight:700;color:var(--ink)">${T("预期毛利", "Expected margin")}</span><div class="track"><div class="fill" style="width:${(have / mx2) * 100}%;background:var(--green)"></div></div><span class="val" style="font-weight:700">${have.toFixed(1)}</span></div>`;
    $("ass-req").textContent = req.toFixed(1); $("ass-have").textContent = have.toFixed(1);
    $("ass-pay").textContent = isFinite(payback) ? payback.toFixed(1) + " " + T("年", "yrs") : "∞";
    const ok = have >= req, okLife = isFinite(payback) && payback <= life;
    const v = $("ass-verdict");
    v.className = "v " + (ok && okLife ? "pos" : ok ? "acc" : "neg");
    v.textContent = ok && okLife ? T("能在过时前回本", "Pays back before obsolescence") : ok ? T("勉强覆盖成本", "Barely covers cost") : T("赚不回折旧", "Cannot cover depreciation");

    const lines = [];
    lines.push(T("每年必须赚到的毛利 = GPU 折旧 + 厂房折旧 + 资本成本 + 运维 = ", "Gross margin required = GPU dep. + shell dep. + cost of capital + opex = ") + `<b>${req.toFixed(1)}</b>` + T(" 十亿美元；预期毛利 = 消费者支出 × 60% = ", " $bn; expected margin = consumer spend × 60% = ") + `<b>${have.toFixed(1)}</b>` + T(" 十亿。", " $bn."));
    if (!ok) lines.push(`<span class="bad">${T("缺口 ", "Shortfall ")}${(req - have).toFixed(1)}${T(" 十亿/年：按门格尔的归属，这些上游资本品的价格必须向下修正——要么消费者多付，要么 GPU、晶圆厂的账面被减记（阶段 5.2 的错误投资暴露）。", " $bn/yr: by Menger's imputation the prices of these upstream capital goods must be marked down — either consumers pay more, or GPUs and fabs get written down (malinvestment surfacing, Stage 5.2).")}</span>`);
    else if (!okLife) lines.push(`<span class="warn">${T("覆盖了成本，但回本年数超过 GPU 经济寿命：下一代硬件到来时这一代还没赚回自己——竞争决定的折旧，而不是物理磨损。", "Costs are covered, but payback exceeds the GPU's economic life: the next generation arrives before this one has earned itself back — depreciation set by competition, not wear.")}</span>`);
    else lines.push(`<span class="ok">${T("在这组假设下资本支出能自我证明。注意它有多依赖三个滑块——每一个都是企业家在阶段 6.1 意义上的判断，而不是数据里能读出来的事实。", "Under these assumptions the capex justifies itself. Notice how much it depends on all three sliders — each is an entrepreneurial judgment in the sense of Stage 6.1, not a fact readable from data.")}</span>`);
    if (rate <= 2) lines.push(T("利率 ≤ 2%：上游三级现值比基线高 ", "Rate ≤ 2%: the top three stages sit ") + `<b>${(((vals[0] + vals[1] + vals[2]) / 150 - 1) * 100).toFixed(0)}%</b>` + T("。如果这个利率是被人为压低的（阶段 3.5），这就是 ABCT 里“三角被拉长”的那一幕（阶段 18.5）。", " above baseline. If that rate is artificially low (Stage 3.5), this is the “stretched triangle” of ABCT (Stage 18.5)."));
    $("ass-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("ass-rate").addEventListener("input", (e) => { rate = +e.target.value; paint(); });
  $("ass-spend").addEventListener("input", (e) => { spend = +e.target.value; paint(); });
  $("ass-life").addEventListener("input", (e) => { life = +e.target.value; paint(); });
  paint();
}
