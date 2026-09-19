// 交互演示：哈耶克三角——拖动“储蓄率”滑块，看三角形变长变扁（储蓄多、利率低、阶段多）
// 或变短变陡；阶段条随之增减；读出“现在的消费”与“几年后的消费”。虚线是基准形状，便于对比。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const Y = 1000;                 // 每年收入（消费品单位）
  const NAMES = [
    T("勘探/研发", "Exploration / R&D"), T("采矿", "Mining"), T("冶炼", "Refining"), T("零部件", "Components"),
    T("制造", "Manufacturing"), T("组装", "Assembly"), T("批发", "Wholesale"), T("零售", "Retail"),
  ];
  const BASE_S = 0.2;
  let s = BASE_S;

  // 模型：储蓄率 → 利率、阶段数、未来产出。数字是示意，但方向与量级符合课文。
  const model = (sv) => {
    const rate = 2 + 12 * Math.max(0, 1 - sv / 0.5);            // 储蓄 0% → 14%，50% → 2%
    const N = Math.max(2, Math.min(8, Math.round(2 + 12 * sv))); // 阶段数 2..8
    const cNow = Y * (1 - sv);
    const yLater = Y * (1 + 0.07 * (N - 2));                    // 更迂回 → 几年后产出更高
    const cLater = yLater * (1 - sv);
    const inProcess = cNow * (N - 1) / 2;                        // 在途中间品 ≈ 三角形面积
    return { rate, N, cNow, cLater, inProcess, yLater };
  };
  const base = model(BASE_S);

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("📐 哈耶克三角：储蓄多一点，生产链就长一截", "📐 The Hayekian triangle: save a little more and the chain grows a stage longer")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("社会把收入的多大比例储蓄起来（其余立即消费）：", "Share of income society saves (the rest is consumed now):")} <b id="ht-s">20%</b></label>
        <input class="demo-slider" type="range" min="0" max="50" step="1" value="20" id="ht-slider" />
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <div id="ht-svg"></div>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("利率", "Interest rate")}</div><div class="v acc" id="ht-rate">–</div></div>
            <div class="stat"><div class="k">${T("生产阶段", "Stages")}</div><div class="v" id="ht-n">–</div></div>
            <div class="stat"><div class="k">${T("在途中间品（面积）", "Goods in process (area)")}</div><div class="v" id="ht-area">–</div></div>
          </div>
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("各阶段累计价值（归属自最终消费品）", "Accumulated value by stage (imputed from consumer goods)")}</div>
          <div class="stages" id="ht-stages"></div>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("现在每年消费", "Consumption now / yr")}</div><div class="v" id="ht-cnow">–</div></div>
            <div class="stat"><div class="k">${T("结构建成后每年消费", "Consumption once built / yr")}</div><div class="v" id="ht-clater">–</div></div>
          </div>
        </div>
      </div>
      <div class="demo-log" id="ht-log"></div>
      <p class="demo-tip">${T(
        "看三角形的两个维度：<strong>高</strong>是今天端上餐桌的消费品，<strong>底边</strong>是社会敢把生产链拉多长。把滑块往右拉：高先变矮（少吃一口），底边变长（多几个上游阶段），利率下降；几年后的消费反而更高。往左拉：今天吃得多，链条短，未来没有增长。虚线是储蓄率 20% 的基准形状——形状的变化，就是时间偏好的变化。",
        "Watch the triangle's two dimensions: the <strong>height</strong> is what reaches the table today, the <strong>base</strong> is how long a chain society dares to run. Drag right: the height dips (eat a little less), the base lengthens (more upstream stages), the rate falls — and consumption a few years out is higher. Drag left: eat more today, short chain, no growth ahead. The dashed outline is the 20%-saving baseline — a change of shape is a change of time preference."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const drawTriangle = (m) => {
    const W = 520, H = 260, L = 40, R = 480, B = 220, TOP = 30;
    const maxN = 8, maxH = Y;
    const bx = (n) => R - (R - L) * (n / maxN);   // 底边从右往左延伸
    const hy = (c) => B - (B - TOP) * (c / maxH);
    const tri = (mm, cls, dash) =>
      `<polygon points="${bx(mm.N).toFixed(1)},${B} ${R},${B} ${R},${hy(mm.cNow).toFixed(1)}" fill="${dash ? "none" : "var(--orange-soft)"}" stroke="${dash ? "var(--blue)" : "var(--orange)"}" stroke-width="${dash ? 1.5 : 2}" ${dash ? 'stroke-dasharray="5 4"' : ""}/>`;
    // 阶段分隔线
    let ticks = "";
    for (let k = 1; k < m.N; k++) {
      const x = bx(m.N - k);
      const yv = m.cNow * k / m.N;
      ticks += `<line x1="${x.toFixed(1)}" y1="${B}" x2="${x.toFixed(1)}" y2="${hy(yv).toFixed(1)}" stroke="var(--orange-line)" stroke-dasharray="3 3"/>`;
    }
    const svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif" style="width:100%;height:auto;display:block">
      ${tri(base, "", true)}
      ${tri(m, "", false)}
      ${ticks}
      <line x1="${L - 10}" y1="${B}" x2="${R + 20}" y2="${B}" stroke="var(--ink)" stroke-width="1.5"/>
      <line x1="${R}" y1="${B + 10}" x2="${R}" y2="${TOP - 10}" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="${(L + R) / 2}" y="${B + 24}" text-anchor="middle" font-size="11" fill="var(--muted)">${T("← 更早的阶段 · 生产时间 · 更晚的阶段 →", "← earlier stages · production time · later stages →")}</text>
      <text x="${R + 12}" y="${hy(m.cNow).toFixed(1)}" font-size="11" font-weight="700" fill="var(--orange-ink)">${m.cNow.toFixed(0)}</text>
      <text x="${bx(m.N).toFixed(1)}" y="${B - 6}" font-size="10.5" fill="var(--muted)">${T(m.N + " 个阶段", m.N + " stages")}</text>
      <text x="${(L + R) / 2}" y="${TOP - 12}" text-anchor="middle" font-size="11" fill="var(--muted)">${T("实线：当前 · 虚线：储蓄率 20% 基准", "solid: current · dashed: 20%-saving baseline")}</text>
    </svg>`;
    $("ht-svg").innerHTML = svg;
  };

  const paint = () => {
    const m = model(s);
    $("ht-s").textContent = Math.round(s * 100) + "%";
    drawTriangle(m);
    $("ht-rate").textContent = m.rate.toFixed(1) + "%";
    $("ht-n").textContent = m.N;
    $("ht-area").textContent = m.inProcess.toFixed(0);
    $("ht-cnow").textContent = m.cNow.toFixed(0);
    const cl = $("ht-clater");
    cl.textContent = m.cLater.toFixed(0);
    cl.className = "v " + (m.cLater > m.cNow + 1 ? "pos" : m.cLater < m.cNow - 1 ? "neg" : "");
    const names = NAMES.slice(NAMES.length - m.N);
    $("ht-stages").innerHTML = names.map((nm, k) => {
      const v = m.cNow * (k + 1) / m.N;
      const bv = base.cNow * (k + 1 + (base.N - m.N)) / base.N; // 基准形状对应位置（仅当阶段存在）
      const ghost = (k + (base.N - m.N)) >= 0 && (k + (base.N - m.N)) < base.N ? `<div class="fill ghost" style="width:${(bv / Y) * 100}%"></div>` : "";
      return `<div class="stage-bar"><span class="lab">${nm}</span><div class="track"><div class="fill" style="width:${(v / Y) * 100}%"></div>${ghost}</div><span class="val">${v.toFixed(0)}</span></div>`;
    }).join("");
    const lines = [];
    const dN = m.N - base.N;
    if (dN > 0) lines.push(`<span class="ok">${T("储蓄比基准多 → 利率降到 " + m.rate.toFixed(1) + "% → 原本不划算的上游项目变得划算 → 生产链多了 " + dN + " 个早期阶段（" + names.slice(0, dN).join("、") + "）。", "More saving than baseline → the rate falls to " + m.rate.toFixed(1) + "% → upstream projects that did not pay now do → the chain gains " + dN + " early stage(s) (" + names.slice(0, dN).join(", ") + ").")}</span>`);
    if (dN < 0) lines.push(`<span class="bad">${T("储蓄比基准少 → 利率升到 " + m.rate.toFixed(1) + "% → 最上游的 " + (-dN) + " 个阶段养不起，被砍掉（资本消耗）。", "Less saving than baseline → the rate rises to " + m.rate.toFixed(1) + "% → the " + (-dN) + " furthest-upstream stage(s) cannot be fed and are cut (capital consumption).")}</span>`);
    if (dN === 0) lines.push(T("与基准同样的阶段数；再拉动滑块，看第一个阶段在哪个储蓄率上出现或消失。", "Same number of stages as the baseline; keep dragging to see at which saving rate a stage appears or disappears."));
    lines.push(T(
      "现在：收入 " + Y + "，消费 " + m.cNow.toFixed(0) + "，储蓄 " + (Y - m.cNow).toFixed(0) + "——这笔储蓄就是养活上游工人的生存基金。结构建成后每年消费 " + m.cLater.toFixed(0) + "（" + (m.cLater >= m.cNow ? "+" : "") + (m.cLater - m.cNow).toFixed(0) + "）。",
      "Now: income " + Y + ", consumption " + m.cNow.toFixed(0) + ", saving " + (Y - m.cNow).toFixed(0) + " — that saving is the subsistence fund feeding upstream workers. Once the structure is built, consumption is " + m.cLater.toFixed(0) + " a year (" + (m.cLater >= m.cNow ? "+" : "") + (m.cLater - m.cNow).toFixed(0) + ")."
    ));
    lines.push(T(
      "三角形面积（在途中间品）" + m.inProcess.toFixed(0) + "：这些矿石、钢材、零件今天不能吃，却要今天有人吃着饭去做——链越长，压在路上的东西越多，需要的储蓄越多。",
      "Triangle area (goods in process) " + m.inProcess.toFixed(0) + ": this ore, steel and these parts cannot be eaten today, yet someone must eat today while making them — the longer the chain, the more sits on the road and the more saving it takes."
    ));
    $("ht-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("ht-slider").addEventListener("input", (e) => { s = +e.target.value / 100; paint(); });
  paint();
}
