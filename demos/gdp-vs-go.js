// 交互演示：GDP vs GO——搭一条四阶段生产链，改每一段的销售额，看 GDP（只数最终环节）与 GO（数全部环节）怎么变；
// 再模拟一场先从上游发作的繁荣—萧条，看 GO 先动、GDP 几乎不动。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const stages = [
    { name: T("矿山 → 钢厂（最上游）", "Mine → Mill (far upstream)"), v: 20, sens: 1.0 },
    { name: T("钢厂 → 零件厂", "Mill → Parts maker"), v: 45, sens: 0.7 },
    { name: T("零件厂 → 整车厂", "Parts → Assembler"), v: 80, sens: 0.4 },
    { name: T("整车厂 → 消费者（最终产品）", "Assembler → Consumer (final good)"), v: 100, sens: 0.15 },
  ];
  // 周期脚本：t=0 起点；1–3 繁荣；4 顶点；5–7 萧条；8–9 复苏
  const PATH = [0, 0.3, 0.7, 1.0, 0.9, 0.3, -0.5, -0.8, -0.4, 0];
  let intensity = 30, t = 0;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏭 GDP vs GO：同一条生产链，两种数法", "🏭 GDP vs GO: one chain of production, two ways of counting")}</div>
      <div class="demo-block">
        <div class="demo-label">${T("① 搭一条生产链：拖动每一段的销售额", "① Build the chain: drag each stage's sales")}</div>
        <div id="go-stages"></div>
      </div>
      <div class="cmp">
        <div class="cmp-cell cold"><h5>${T("GDP（只数最终环节 = 各段增加值之和）", "GDP (final link only = sum of value added)")}</h5><div class="stat-row" style="margin-top:0"><div class="stat"><div class="k">GDP</div><div class="v" id="go-gdp">–</div></div><div class="stat"><div class="k">${T("消费 ÷ GDP", "Consumption ÷ GDP")}</div><div class="v" id="go-cshare1">–</div></div></div></div>
        <div class="cmp-cell hl"><h5>${T("GO（总产出 = 全部环节销售之和）", "GO (gross output = sales at every stage)")}</h5><div class="stat-row" style="margin-top:0"><div class="stat"><div class="k">GO</div><div class="v acc" id="go-go">–</div></div><div class="stat"><div class="k">${T("消费 ÷ GO", "Consumption ÷ GO")}</div><div class="v acc" id="go-cshare2">–</div></div></div></div>
      </div>
      <div class="demo-log" id="go-log1" style="margin-top:10px"></div>
      <div class="demo-block">
        <div class="demo-label">${T("② 模拟一场从上游发作的繁荣—萧条（上游最敏感，下游最钝）", "② Simulate a boom–bust that breaks out upstream (upstream most sensitive, downstream least)")}</div>
        <div class="demo-grid">
          <div>
            <label class="demo-label">${T("信用繁荣强度：", "Credit-boom intensity: ")}<b id="go-intv">30</b>%</label>
            <input class="demo-slider" id="go-int" type="range" min="0" max="60" step="5" value="30" />
          </div>
          <div>
            <label class="demo-label">${T("时间：第", "Period: ")} <b id="go-tv">0</b> ${T("期（0 起点 · 1–4 繁荣 · 5–7 萧条 · 8–9 复苏）", "(0 start · 1–4 boom · 5–7 bust · 8–9 recovery)")}</label>
            <input class="demo-slider" id="go-t" type="range" min="0" max="9" step="1" value="0" />
          </div>
        </div>
        <div class="demo-btns"><button class="demo-btn" id="go-step">${T("下一期 ▶", "Next period ▶")}</button><button class="demo-btn" id="go-reset">${T("回到起点", "Reset")}</button></div>
        <div id="go-chart"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("GO 相对起点", "GO vs start")}</div><div class="v" id="go-dgo">–</div></div>
          <div class="stat"><div class="k">${T("GDP 相对起点", "GDP vs start")}</div><div class="v" id="go-dgdp">–</div></div>
          <div class="stat"><div class="k">${T("最上游相对起点", "Far upstream vs start")}</div><div class="v" id="go-dup">–</div></div>
          <div class="stat"><div class="k">${T("GO ÷ GDP", "GO ÷ GDP")}</div><div class="v acc" id="go-ratio">–</div></div>
        </div>
        <div class="demo-log" id="go-log2" style="margin-top:10px"></div>
      </div>
      <p class="demo-tip">${T(
        "先看上半部：把最终产品之前的三段随便改，<strong>GDP 纹丝不动</strong>（它只数最后一环），<strong>GO 跟着变</strong>。再看下半部：把时间拖到第 3–4 期，上游销售涨了 30%，GO 涨了十几个百分点，GDP 只涨几个点；拖到第 7 期，上游跌了 24%，GO 大跌，GDP 只是微跌。<strong>只盯 GDP 的人，会在崩溃前一年还说“经济稳健”。</strong>",
        "Top half: change any of the three stages before the final good — <strong>GDP does not move</strong> (it counts only the last link) while <strong>GO does</strong>. Bottom half: drag time to periods 3–4 — upstream sales are up 30%, GO is up by a dozen points, GDP by only a few; at period 7 the upstream is down 24%, GO drops hard, GDP barely dips. <strong>Someone watching only GDP will still call the economy “solid” a year before the collapse.</strong>"
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const pct = (a, b) => ((a / b - 1) * 100);
  const fpct = (x) => (x >= 0 ? "+" : "") + x.toFixed(1) + "%";

  const calc = (vals) => {
    const gdp = vals[vals.length - 1];
    const go = vals.reduce((s, v) => s + v, 0);
    const va = vals.map((v, i) => v - (i ? vals[i - 1] : 0));
    return { gdp, go, va };
  };
  const salesAt = (k) => stages.map((s) => s.v * (1 + s.sens * PATH[k] * intensity / 100));

  const paintStages = () => {
    const vals = stages.map((s) => s.v);
    const { gdp, go, va } = calc(vals);
    const maxV = Math.max(...vals, 1);
    $("go-stages").innerHTML = stages.map((s, i) => `
      <div class="demo-row" style="margin:6px 0">
        <span style="flex:0 0 240px;font-size:13px;color:var(--muted)">${i + 1}. ${s.name}</span>
        <input class="demo-slider" style="flex:1;margin:0 10px" type="range" min="0" max="200" step="5" value="${s.v}" data-i="${i}" />
        <span style="flex:0 0 150px;font-size:13px;text-align:right"><b>${s.v}</b> · ${T("增加值", "value added")} <span style="color:${va[i] < 0 ? "var(--red)" : "var(--muted)"}">${va[i]}</span></span>
      </div>
      <div class="bar2" style="margin:0 0 8px"><span class="lab"></span><div class="track"><div class="fill" style="width:${(s.v / maxV) * 100}%;background:${i === stages.length - 1 ? "var(--blue)" : "var(--orange)"}"></div></div><span class="val"></span></div>`).join("");
    $("go-gdp").textContent = gdp;
    $("go-go").textContent = go;
    $("go-cshare1").textContent = go ? "100%" : "–";
    $("go-cshare2").textContent = go ? (gdp / go * 100).toFixed(0) + "%" : "–";
    const b2b = go - gdp;
    const lines = [];
    lines.push(`${T("最终产品法 GDP =", "Final-product GDP =")} ${gdp}；${T("增加值法 =", "value-added method =")} ${va.join(" + ")} = ${va.reduce((a, b) => a + b, 0)}。${T("被“抵消”的企业间交易 =", "B2B trade “netted out” =")} <b>${b2b}</b>（${go ? (b2b / go * 100).toFixed(0) : 0}% ${T("的 GO", "of GO")}）。`);
    if (va.some((x) => x < 0)) lines.push(`<span class="bad">${T("某一段的售价低于它买入的中间品——增加值为负，这一段在亏本卖。现实里它会退出，或者是繁荣期“先做了再说”的项目。", "A stage is selling below what it paid for inputs — negative value added; it is selling at a loss. In reality it exits, or it is a boom-time “build first, ask later” project.")}</span>`);
    lines.push(`<span class="warn">${T("同一笔消费 " + gdp + "：占 GDP 的 100%，占 GO 的 " + (go ? (gdp / go * 100).toFixed(0) : 0) + "%。“消费驱动经济”的比例，取决于你选哪个分母。", "The same consumption of " + gdp + ": 100% of GDP, " + (go ? (gdp / go * 100).toFixed(0) : 0) + "% of GO. The share that “drives the economy” depends on which denominator you pick.")}</span>`);
    $("go-log1").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
    root.querySelectorAll("#go-stages input[data-i]").forEach((sl) => sl.addEventListener("input", () => {
      stages[+sl.dataset.i].v = +sl.value;
      paintStages(); paintCycle();
    }));
  };

  const paintCycle = () => {
    $("go-intv").textContent = intensity;
    $("go-tv").textContent = t;
    const base = calc(salesAt(0));
    const series = PATH.map((_, k) => calc(salesAt(k)));
    const interp = (arr) => (x) => {
      const i = Math.floor(x), f = x - i;
      const a = arr[Math.min(i, arr.length - 1)], b = arr[Math.min(i + 1, arr.length - 1)];
      return a + (b - a) * f;
    };
    const goIdx = series.map((s) => pct(s.go, base.go));
    const gdpIdx = series.map((s) => pct(s.gdp, base.gdp));
    const upIdx = PATH.map((_, k) => pct(salesAt(k)[0], salesAt(0)[0]));
    const res = lineChart({
      fns: [
        { f: interp(upIdx), cls: "line3" },
        { f: interp(goIdx), cls: "line" },
        { f: interp(gdpIdx), cls: "line2" },
      ],
      lo: 0, hi: 9, samples: 90, forceZero: true, uid: "go",
      xlabel: T("时期", "period"), markerX: t, markerLabel: T("现在", "now"),
    });
    $("go-chart").innerHTML = chartBlock(res, [["var(--red)", T("最上游销售 %", "far-upstream sales %")], ["var(--orange)", T("GO %", "GO %")], ["var(--blue)", T("GDP %", "GDP %")]]);
    const cur = series[t];
    const set = (id, x) => { const el = $(id); el.textContent = fpct(x); el.className = "v " + (x > 0.05 ? "pos" : x < -0.05 ? "neg" : ""); };
    set("go-dgo", goIdx[t]); set("go-dgdp", gdpIdx[t]); set("go-dup", upIdx[t]);
    $("go-ratio").textContent = cur.gdp ? (cur.go / cur.gdp).toFixed(2) : "–";
    const lines = [];
    if (intensity === 0) lines.push(T("强度为 0：没有信用繁荣，两条线都是平的。", "Intensity 0: no credit boom, both lines are flat."));
    else if (t === 0) lines.push(T("起点。按“下一期”或拖时间滑块。", "Start. Press “Next period” or drag the time slider."));
    else if (t <= 4) lines.push(`<span class="warn">${T("繁荣期：新信贷先流向上游（阶段 4.3 的坎蒂隆效应），最上游销售 " + fpct(upIdx[t]) + "，GO " + fpct(goIdx[t]) + "，GDP 只有 " + fpct(gdpIdx[t]) + "。GO÷GDP 从 " + (base.go / base.gdp).toFixed(2) + " 升到 " + (cur.go / cur.gdp).toFixed(2) + "：三角形在被拉长。", "Boom: new credit reaches the upstream first (the Cantillon effect of Stage 4.3). Far-upstream sales " + fpct(upIdx[t]) + ", GO " + fpct(goIdx[t]) + ", GDP only " + fpct(gdpIdx[t]) + ". GO÷GDP rises from " + (base.go / base.gdp).toFixed(2) + " to " + (cur.go / cur.gdp).toFixed(2) + ": the triangle is being stretched.")}</span>`);
    else if (t <= 7) lines.push(`<span class="bad">${T("萧条期：上游先垮——最上游 " + fpct(upIdx[t]) + "，GO " + fpct(goIdx[t]) + "，而 GDP " + fpct(gdpIdx[t]) + "。这就是 2008–09 年的形状：GDP 峰谷约 −4%，GO 约 −8%。", "Bust: the upstream collapses first — far upstream " + fpct(upIdx[t]) + ", GO " + fpct(goIdx[t]) + ", while GDP is " + fpct(gdpIdx[t]) + ". This is the shape of 2008–09: GDP about −4% peak to trough, GO about −8%.")}</span>`);
    else lines.push(`<span class="ok">${T("复苏：GO 先回升，GDP 后动。", "Recovery: GO turns up first, GDP follows.")}</span>`);
    if (t > 0 && intensity > 0) lines.push(T("同一条链，GDP 的波动只有 GO 的一小部分：因为 GDP 只数最下游那一段，而最下游最钝。", "Same chain: GDP's swing is a fraction of GO's, because GDP counts only the downstream link — the least sensitive one."));
    $("go-log2").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("go-int").addEventListener("input", (e) => { intensity = +e.target.value; paintCycle(); });
  $("go-t").addEventListener("input", (e) => { t = +e.target.value; paintCycle(); });
  $("go-step").addEventListener("click", () => { t = (t + 1) % PATH.length; $("go-t").value = t; paintCycle(); });
  $("go-reset").addEventListener("click", () => { t = 0; $("go-t").value = 0; paintCycle(); });
  paintStages();
  paintCycle();
}
