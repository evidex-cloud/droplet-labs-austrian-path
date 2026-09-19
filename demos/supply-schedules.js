// 交互演示：三种发行时间表（黄金 / 法币 M2 / 比特币减半曲线）+ 购买力情景（硬 ≠ 稳）+ 一个拒绝计算因果的“时间偏好”按钮。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // ---- 比特币供给：按区块时间表近似（52,560 块/年，2009 年起，210,000 块减半）----
  const BLOCKS_PER_YEAR = 52560, ERA = 210000;
  const supplyAtBlock = (b) => {
    let s = 0, reward = 50, left = b;
    while (left > 0 && reward > 1e-9) { const take = Math.min(left, ERA); s += take * reward; left -= take; reward /= 2; }
    return s;
  };
  const btcRate = (year) => {
    const b0 = (year - 2009) * BLOCKS_PER_YEAR, b1 = b0 + BLOCKS_PER_YEAR;
    if (b0 <= 0) return NaN;
    const s0 = supplyAtBlock(b0), s1 = supplyAtBlock(b1);
    return (s1 / s0 - 1) * 100;
  };

  let gold = 1.75, fiat = 7, regime = "btc", demandVol = 15, seed = 1;

  // 确定性伪随机（可重洗）
  const rnd = (s) => { let x = Math.sin(s * 9301 + 49297) * 233280; return x - Math.floor(x); };
  const demandPath = () => Array.from({ length: 11 }, (_, i) => (rnd(seed * 31 + i) - 0.5) * 2 * demandVol / 100);

  const supplyGrowth = (reg, year, ppDev) => {
    if (reg === "gold") return (gold + Math.max(-0.5, Math.min(0.5, 0.3 * ppDev))) / 100; // 微弱的供给反应
    if (reg === "fiat") return fiat / 100;
    return Math.max(0, btcRate(year)) / 100;
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🪙 发行时间表与购买力：硬 ≠ 稳", "🪙 Issuance schedules and purchasing power: hard ≠ stable")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("黄金年新增 / 存量", "Gold: annual new supply / stock")}：<b id="ss-gold">${gold.toFixed(2)}%</b></label>
          <input class="demo-slider" type="range" min="1.5" max="2" step="0.05" value="${gold}" data-k="gold" />
          <label class="demo-label" style="margin-top:8px">${T("法币 M2 年增长", "Fiat M2 annual growth")}：<b id="ss-fiat">${fiat}%</b></label>
          <input class="demo-slider" type="range" min="0" max="25" step="0.5" value="${fiat}" data-k="fiat" />
          <div class="demo-meta">${T("比特币曲线按 210,000 块减半、约 52,560 块/年计算（近似，实际减半日期略有提前）。", "Bitcoin curve computed from 210,000-block halvings at about 52,560 blocks/year (approximate; real halvings came slightly early).")}</div>
        </div>
        <div class="demo-block" id="ss-chart1"></div>
      </div>

      <div class="demo-block">
        <div class="demo-label">${T("② 购买力情景：选一种发行制度，再给货币需求加上波动", "② Purchasing-power scenario: pick a regime, then add swings to money demand")}</div>
        <div class="demo-row" style="gap:10px;flex-wrap:wrap;align-items:center">
          <div class="demo-seg" id="ss-reg">
            <button data-r="gold">${T("黄金", "Gold")}</button>
            <button data-r="fiat">${T("法币", "Fiat")}</button>
            <button class="on" data-r="btc">${T("比特币", "Bitcoin")}</button>
          </div>
          <button class="demo-btn" id="ss-reshuffle">${T("重洗需求冲击", "Reshuffle demand shocks")}</button>
        </div>
        <label class="demo-label" style="margin-top:8px">${T("货币需求年波动幅度（±）", "Annual swing in money demand (±)")}：<b id="ss-vol">${demandVol}%</b></label>
        <input class="demo-slider" type="range" min="0" max="40" step="1" value="${demandVol}" data-k="vol" />
        <div class="demo-grid" style="margin-top:8px">
          <div id="ss-chart2"></div>
          <div>
            <div class="stat-row" id="ss-stats"></div>
            <div class="demo-log" id="ss-log2" style="margin-top:8px"></div>
          </div>
        </div>
      </div>

      <div class="demo-block">
        <div class="demo-label">${T("③ 时间偏好", "③ Time preference")}</div>
        <div class="demo-btns">
          <button class="demo-btn" id="ss-tp">${T("计算“货币硬度 → 时间偏好”的因果系数", "Compute the causal coefficient “hardness → time preference”")}</button>
          <button class="demo-btn" id="ss-ret">${T("计算“硬度 → 储蓄的真实回报”", "Compute “hardness → real return to saving”")}</button>
        </div>
        <div class="demo-log" id="ss-log3"><span style="color:var(--muted)">${T("两个按钮，只有一个会给你数字。", "Two buttons; only one will give you a number.")}</span></div>
      </div>
      <p class="demo-tip">${T(
        "看图 ①：比特币的供给增长在 2024 年后已低于黄金，并趋于零——“硬”是真的。再看图 ②：选“比特币”，把需求波动拉到 30%：购买力的波动<strong>恰好等于</strong>需求的波动，没有任何缓冲；选“黄金”，波动略小（微弱的供给反应）；选“法币”，波动同样存在，只是叠加了一条持续下坡的趋势。硬度决定趋势，不决定波动。",
        "Chart ①: Bitcoin's supply growth fell below gold's after 2024 and heads to zero — the “hardness” is real. Chart ②: choose “Bitcoin” and push demand swings to 30%: purchasing-power swings <strong>exactly equal</strong> demand swings, with no cushion; choose “Gold” and swings are slightly smaller (a faint supply response); choose “Fiat” and the swings remain, stacked on a steady downhill trend. Hardness sets the trend, not the volatility."
      )}</p>
    </div>`;

  const q = (s) => root.querySelector(s);

  function paint1() {
    q("#ss-gold").textContent = gold.toFixed(2) + "%";
    q("#ss-fiat").textContent = fiat + "%";
    const res = lineChart({
      fns: [
        { f: () => gold, cls: "line" },
        { f: () => fiat, cls: "line2" },
        { f: (y) => { const r = btcRate(Math.floor(y)); return isFinite(r) ? Math.min(r, 30) : NaN; }, cls: "line3" },
      ],
      lo: 2012, hi: 2040, samples: 140, xlabel: T("年份（比特币 2012 年前 >30%，截断）", "Year (Bitcoin >30% before 2012, clipped)"), forceZero: true, uid: "ss-c1",
    });
    q("#ss-chart1").innerHTML = chartBlock(res, [["var(--orange)", T("黄金", "gold")], ["var(--blue)", T("法币 M2", "fiat M2")], ["var(--red)", T("比特币", "bitcoin")]]);
  }

  function paint2() {
    q("#ss-vol").textContent = demandVol + "%";
    const dp = demandPath();
    const years = 10;
    const paths = {};
    for (const reg of ["gold", "fiat", "btc"]) {
      let pp = 1; const arr = [pp];
      for (let t = 0; t < years; t++) {
        const year = 2025 + t;
        const sg = supplyGrowth(reg, year, pp - 1);
        // 购买力变化 ≈ (1 + 需求增长) / (1 + 供给增长) − 1
        pp = pp * (1 + dp[t]) / (1 + sg);
        arr.push(pp);
      }
      paths[reg] = arr;
    }
    const res = lineChart({
      fns: [
        { f: (x) => paths.gold[Math.round(x)], cls: "line" },
        { f: (x) => paths.fiat[Math.round(x)], cls: "line2" },
        { f: (x) => paths.btc[Math.round(x)], cls: "line3" },
      ],
      lo: 0, hi: years, samples: years, xlabel: T("年（2025 = 0）", "Year (2025 = 0)"), uid: "ss-c2",
    });
    q("#ss-chart2").innerHTML = chartBlock(res, [["var(--orange)", T("黄金", "gold")], ["var(--blue)", T("法币", "fiat")], ["var(--red)", T("比特币", "bitcoin")]]);
    const sel = paths[regime];
    const changes = sel.slice(1).map((v, i) => v / sel[i] - 1);
    const vol = Math.sqrt(changes.reduce((s, c) => s + c * c, 0) / changes.length) * 100;
    const trend = (Math.pow(sel[years], 1 / years) - 1) * 100;
    const demandVolReal = Math.sqrt(dp.slice(0, years).reduce((s, c) => s + c * c, 0) / years) * 100;
    const name = { gold: T("黄金", "Gold"), fiat: T("法币", "Fiat"), btc: T("比特币", "Bitcoin") }[regime];
    q("#ss-stats").innerHTML = `
      <div class="stat"><div class="k">${name} · ${T("10 年购买力", "10-yr purchasing power")}</div><div class="v ${sel[years] >= 1 ? "pos" : "neg"}">×${sel[years].toFixed(2)}</div></div>
      <div class="stat"><div class="k">${T("年均趋势", "Avg trend / yr")}</div><div class="v ${trend >= 0 ? "pos" : "neg"}">${trend >= 0 ? "+" : ""}${trend.toFixed(1)}%</div></div>
      <div class="stat"><div class="k">${T("购买力年波动", "PP volatility / yr")}</div><div class="v acc">${vol.toFixed(1)}%</div></div>
      <div class="stat"><div class="k">${T("需求年波动", "Demand volatility / yr")}</div><div class="v">${demandVolReal.toFixed(1)}%</div></div>`;
    const lines = [];
    if (regime === "btc") lines.push(`<span class="warn">${T("供给固定 → 购买力波动 ≈ 需求波动。没有供给反应可以缓冲。趋势为正（不被稀释），但“稳”与它无关。", "Fixed supply → PP volatility ≈ demand volatility. No supply response to cushion it. The trend is positive (no dilution), but “stable” has nothing to do with it.")}</span>`);
    if (regime === "gold") lines.push(`<span class="ok">${T("黄金的供给会微弱地跟随购买力（涨价多采、跌价少采），波动略小于需求波动；趋势约为 −1.5~−2%（新开采稀释）加上需求。", "Gold's supply follows purchasing power faintly (more mining when dear, less when cheap), so volatility is a little below demand's; the trend is about −1.5 to −2% (mining dilution) plus demand.")}</span>`);
    if (regime === "fiat") lines.push(`<span class="bad">${T("法币的波动一样存在（需求冲击照打），再叠加委员会决定的稀释趋势——以及阶段 4.3 的坎蒂隆分配效应（图里看不到）。", "Fiat's swings are still there (demand shocks land the same), stacked on a committee-chosen dilution trend — plus the Cantillon distribution effects of Stage 4.3 (invisible in the chart).")}</span>`);
    lines.push(`<span style="color:var(--muted)">${T("示意模型：购买力变化 ≈ (1+需求增长)/(1+供给增长) − 1；需求路径是可重洗的伪随机序列，不代表任何预测。", "Illustrative: PP change ≈ (1+demand growth)/(1+supply growth) − 1; the demand path is a reshuffleable pseudo-random sequence and forecasts nothing.")}</span>`);
    q("#ss-log2").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  }

  root.querySelectorAll("[data-k]").forEach((sl) => sl.addEventListener("input", () => {
    const k = sl.dataset.k;
    if (k === "gold") gold = +sl.value; else if (k === "fiat") fiat = +sl.value; else demandVol = +sl.value;
    paint1(); paint2();
  }));
  root.querySelectorAll("#ss-reg button").forEach((b) => b.addEventListener("click", () => {
    root.querySelectorAll("#ss-reg button").forEach((x) => x.classList.toggle("on", x === b));
    regime = b.dataset.r; paint2();
  }));
  q("#ss-reshuffle").addEventListener("click", () => { seed++; paint2(); });

  q("#ss-tp").addEventListener("click", () => {
    q("#ss-log3").innerHTML = [
      `<span class="bad">${T("拒绝计算。", "Refused.")}</span> ${T("时间偏好是行动的范畴、储蓄的<b>原因</b>（阶段 3.1）。没有任何公式能从“供给增长率”推出“人的偏好变了”。", "Time preference is a category of action and the <b>cause</b> of saving (Stage 3.1). No formula can derive “people's preferences changed” from “a supply growth rate.”")}`,
      T("硬钱能做的是移除对储蓄的惩罚——那是储蓄面对的<b>价格</b>变了，不是偏好变了。请点右边的按钮，那个是可以算的。", "What hard money can do is remove the penalty on saving — that changes the <b>price</b> saving faces, not the preference. Press the other button; that one is computable."),
      `<span style="color:var(--muted)">${T("另外注意反向因果：肯长期持有高波动资产的人，本来就时间偏好低。", "Also beware reverse causation: people willing to hold a volatile asset for years had low time preference to begin with.")}</span>`,
    ].map((l) => `<div>${l}</div>`).join("");
  });
  q("#ss-ret").addEventListener("click", () => {
    const nominal = 3; // 示意名义利率
    const rows = [["gold", gold], ["fiat", fiat], ["btc", Math.max(0, btcRate(2026))]].map(([r, sg]) => {
      const name = { gold: T("黄金", "Gold"), fiat: T("法币", "Fiat"), btc: T("比特币", "Bitcoin") }[r];
      const real = nominal - sg; // 假设需求不变时，稀释率 ≈ 通胀率
      return `${name}：${T("名义 3% − 稀释", "nominal 3% − dilution")} ${sg.toFixed(2)}% = <b class="${real >= 0 ? "" : ""}">${real.toFixed(2)}%</b> ${T("真实回报（假设需求不变）", "real return (holding demand constant)")}`;
    });
    q("#ss-log3").innerHTML = [
      `<span class="ok">${T("可以算：", "Computable:")}</span> ${T("在既定时间偏好下，储蓄的真实回报 = 名义回报 − 供给稀释（需求不变时）。", "At a given time preference, the real return to saving = nominal return − supply dilution (with demand held constant).")}`,
      ...rows,
      `<span style="color:var(--muted)">${T("回报变了，同样的人会多储蓄一点——这是边际分析，不是“人变了”。", "When the return changes, the same people save a little more — that is marginal analysis, not “people changed.”")}</span>`,
    ].map((l) => `<div>${l}</div>`).join("");
  });

  paint1(); paint2();
}
