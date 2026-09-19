// 交互演示：周期浏览器——选一段周期（1920s / 1990s / 2000s / 2020s），看政策利率线 vs 繁荣部位指数，
// 标注注入 / 见顶 / 触发三处，并给出“ABCT 四格清单”自检。
// 数据是示意性的近似（按年度粗略取点、指数化），只用于展示形状，不是精确统计——图上已标明。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 每段：年份区间，rate = 年度近似政策利率（%），idx = 繁荣部位指数（起点 = 100）
  const cycles = [
    {
      id: "1929", label: "1921–33",
      name: T("1920 年代 → 1929", "The 1920s → 1929"),
      sector: T("道琼斯指数（示意）", "Dow Jones (illustrative)"),
      years: [1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933],
      rate: [6.5, 4.5, 4.5, 3.5, 3.5, 4.0, 3.5, 5.0, 6.0, 2.5, 3.5, 2.5, 2.0],
      idx: [100, 130, 140, 165, 220, 240, 300, 420, 480, 250, 130, 70, 140],
      marks: [
        { y: 1924, k: "inject", t: T("注入：1924/27 降息，货币 8 年增约 60%", "Injection: 1924/27 cuts; money +~60% in 8 yrs") },
        { y: 1929, k: "peak", t: T("见顶：1929.9 道指 381；经纪人贷款约 85 亿", "Peak: Dow 381 in Sep 1929; brokers' loans ~$8.5B") },
        { y: 1928.5, k: "trigger", t: T("触发：1928–29 加息，贴现率至 6%", "Trigger: 1928–29 hikes, discount rate to 6%") },
      ],
      snap: T("断裂：1929.10 崩盘；胡佛托住工资、关税、加税、救助 → 十年 L 形。", "Snap: Oct 1929 crash; Hoover props wages, tariffs, tax hikes, bailouts → a decade-long L."),
      check: [true, true, true, true],
      caveat: T("主流替代解释：弗里德曼——1930–33 年美联储任凭货币存量收缩（解释“深”，不解释“来”）。", "Mainstream alternative: Friedman — the Fed let the money stock contract in 1930–33 (explains ‘deep,’ not ‘why it came’)."),
    },
    {
      id: "2000", label: "1995–2003",
      name: T("1990 年代 → 2000", "The 1990s → 2000"),
      sector: T("纳斯达克指数（示意）", "Nasdaq (illustrative)"),
      years: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003],
      rate: [5.75, 5.25, 5.5, 4.75, 5.5, 6.5, 1.75, 1.25, 1.0],
      idx: [100, 125, 150, 210, 390, 480, 190, 130, 190],
      marks: [
        { y: 1998, k: "inject", t: T("注入：1998 年 LTCM 后三次降息至 4.75%；1999 年 Y2K 流动性", "Injection: three cuts to 4.75% after LTCM in 1998; Y2K liquidity in 1999") },
        { y: 2000, k: "peak", t: T("见顶：2000.3 纳指 5048", "Peak: Nasdaq 5,048 in Mar 2000") },
        { y: 1999.6, k: "trigger", t: T("触发：1999.6–2000.5 加息至 6.5%", "Trigger: hikes to 6.5%, Jun 1999 – May 2000") },
      ],
      snap: T("断裂：纳指 −78%；电信破产潮；但美联储降至 1%——清算被下一轮注入接管。", "Snap: Nasdaq −78%; telecom bankruptcies; but the Fed cuts to 1% — the liquidation is taken over by the next injection."),
      check: [true, true, true, false],
      caveat: T("主流替代解释：席勒——投资者情绪 / 技术泡沫。可互补：情绪需要燃料，且泡沫集中在最长久期资产上。", "Mainstream alternative: Shiller — investor psychology / tech bubble. Arguably complementary: psychology needs fuel, and the bubble sat in the longest-duration assets."),
    },
    {
      id: "2008", label: "2001–10",
      name: T("2002–06 → 2008", "2002–06 → 2008"),
      sector: T("凯斯–席勒房价指数（示意）", "Case-Shiller home prices (illustrative)"),
      years: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010],
      rate: [3.9, 1.75, 1.0, 2.25, 4.25, 5.25, 4.25, 0.25, 0.25, 0.25],
      idx: [100, 110, 122, 138, 158, 172, 165, 140, 122, 118],
      marks: [
        { y: 2003, k: "inject", t: T("注入：联邦基金 1%（2003.6–2004.6），真实利率为负；GSE 目标；巴塞尔风险权重", "Injection: fed funds at 1% (Jun 2003–Jun 2004), negative real rate; GSE goals; Basel risk weights") },
        { y: 2006, k: "peak", t: T("见顶：2006 年中房价约 +80%（自 2000）；次贷占新增约 20%", "Peak: mid-2006, prices ~+80% since 2000; subprime ~20% of new mortgages") },
        { y: 2005, k: "trigger", t: T("触发：2004–06 连续 17 次加息至 5.25%，ARM 重置", "Trigger: 17 hikes to 5.25% in 2004–06; ARM resets") },
      ],
      snap: T("断裂：2008.9 雷曼；失业 10%；TARP + 零利率 + QE → 史上最慢复苏之一，零利率十余年。", "Snap: Lehman, Sep 2008; unemployment 10%; TARP + zero rates + QE → one of the slowest recoveries on record, a decade of zero rates."),
      check: [true, true, true, true],
      caveat: T("主流替代解释：伯南克“全球储蓄过剩”；监管失败。奥派：储蓄过剩解释不了美联储自己压到 1%；监管解释杠杆，不解释共同的误判。", "Mainstream alternative: Bernanke's ‘global saving glut’; regulatory failure. Austrians: the glut cannot explain why the Fed itself went to 1%; regulation explains leverage, not the shared misjudgment."),
    },
    {
      id: "2022", label: "2019–24",
      name: T("2020–22 → 2023", "2020–22 → 2023"),
      sector: T("无盈利科技 / 长久期资产篮子（示意）", "Profitless tech / long-duration basket (illustrative)"),
      years: [2019, 2020, 2021, 2022, 2023, 2024],
      rate: [2.4, 0.25, 0.25, 4.25, 5.4, 4.6],
      idx: [100, 175, 240, 105, 120, 150],
      marks: [
        { y: 2020, k: "inject", t: T("注入：美联储约 +5 万亿；财政约 5 万亿转移；M2 两年约 +40%", "Injection: Fed ~+$5T; ~$5T fiscal transfers; M2 +~40% in two years") },
        { y: 2021, k: "peak", t: T("见顶：2021.11 万物泡沫——科技 / 加密 / SPAC / 房产 / 长债", "Peak: Nov 2021, the everything bubble — tech / crypto / SPACs / housing / long bonds") },
        { y: 2022, k: "trigger", t: T("触发：CPI 9.1%；2022–23 加息至 5.5%", "Trigger: CPI 9.1%; hikes to 5.5% in 2022–23") },
      ],
      snap: T("断裂：2022 纳指 −33%，无盈利科技 −70–90%，FTX；2023.3 硅谷银行久期错配。未出现广泛衰退——理论需正视。", "Snap: Nasdaq −33% in 2022, profitless tech −70–90%, FTX; SVB's duration mismatch in Mar 2023. No broad recession — a fact the theory must face."),
      check: [true, true, true, false],
      caveat: T("边界：2020.3–4 的衰退是封城冲击，不是 ABCT 衰退。主流替代解释：供应链。", "Boundary: the Mar–Apr 2020 recession was a lockdown shock, not an ABCT recession. Mainstream alternative: supply chains."),
    },
  ];
  let cur = cycles[2];

  const checkNames = [
    T("① 注入：利率被压到自然利率之下？", "① Injection: rate pushed below the natural rate?"),
    T("② 繁荣部位：集中在长久期 / 上游资产？", "② Boom sector: concentrated in long-duration / upstream assets?"),
    T("③ 触发：由利率反转引起？", "③ Trigger: caused by a rate reversal?"),
    T("④ 断裂：清算被允许走完？", "④ Snap: liquidation allowed to finish?"),
  ];

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🕰️ 周期浏览器：四段历史，同一副骨架", "🕰️ Cycle explorer: four episodes, one skeleton")}</div>
      <div class="demo-block">
        <div class="demo-seg" id="ce-seg">${cycles.map((c) => `<button data-c="${c.id}" class="${c === cur ? "on" : ""}">${c.name}</button>`).join("")}</div>
      </div>
      <div class="demo-block">
        <div class="demo-label" id="ce-label"></div>
        <div id="ce-chart"></div>
      </div>
      <div class="demo-grid">
        <div class="demo-block"><div class="tl" id="ce-tl"></div></div>
        <div class="demo-block">
          <div class="demo-label">${T("ABCT 四格清单：要素齐全吗？", "ABCT four-box checklist: are the ingredients present?")}</div>
          <div id="ce-check"></div>
          <div class="demo-meta" id="ce-caveat"></div>
        </div>
      </div>
      <p class="demo-tip">${T(
        "看两条线的关系：金线（繁荣部位指数）总是在蓝线（政策利率）被压低之后起飞，在蓝线拐头向上之后见顶——四段都是。再看清单第 ④ 格：哪几段的清算被下一轮注入接管了？那正是下一段周期的“注入”。<strong>数据为示意性近似，只展示形状，不是精确统计。</strong>",
        "Watch how the two lines relate: the gold line (boom-sector index) always takes off after the blue line (policy rate) is pushed down, and peaks after the blue line turns up — in all four episodes. Then look at box ④: in which episodes was the liquidation taken over by the next injection? That is precisely the next cycle's ‘injection.’ <strong>Data are illustrative approximations that show the shape, not precise statistics.</strong>"
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const interp = (xs, ys) => (x) => {
    if (x <= xs[0]) return ys[0];
    if (x >= xs[xs.length - 1]) return ys[ys.length - 1];
    for (let i = 0; i < xs.length - 1; i++) if (x >= xs[i] && x <= xs[i + 1]) { const t = (x - xs[i]) / (xs[i + 1] - xs[i]); return ys[i] + t * (ys[i + 1] - ys[i]); }
    return ys[0];
  };

  const paint = () => {
    root.querySelectorAll("#ce-seg button").forEach((b) => b.classList.toggle("on", b.dataset.c === cur.id));
    const lo = cur.years[0], hi = cur.years[cur.years.length - 1];
    const fIdx = interp(cur.years, cur.idx);
    const fRate = interp(cur.years, cur.rate);
    const maxIdx = Math.max(...cur.idx);
    // 把利率缩放到与指数同一坐标（右轴示意）：0–8% → 0–maxIdx
    const scaled = (x) => fRate(x) / 8 * maxIdx;
    const peak = cur.marks.find((m) => m.k === "peak");
    const res = lineChart({ fns: [{ f: fIdx, cls: "line" }, { f: scaled, cls: "line2" }], lo, hi, samples: 160, xlabel: T("年份", "year"), markerX: peak.y, markerLabel: T("见顶", "peak"), forceZero: true, uid: "ce" + cur.id, H: 260 });
    $("ce-chart").innerHTML = chartBlock(res, [["var(--orange)", cur.sector + T("，起点 = 100", ", start = 100")], ["var(--blue)", T("政策利率（缩放：满刻度 = 8%）", "policy rate (scaled: full height = 8%)")]]);
    $("ce-label").textContent = cur.name + " · " + cur.label + T(" · 示意数据", " · illustrative data");

    const items = [...cur.marks].sort((a, b) => a.y - b.y).map((m) => `<div class="tl-item"><span class="when">${Math.floor(m.y)}</span>${m.t}</div>`);
    items.push(`<div class="tl-item dim"><span class="when">${hi}</span>${cur.snap}</div>`);
    $("ce-tl").innerHTML = items.join("");

    $("ce-check").innerHTML = checkNames.map((n, i) => `<div class="demo-row" style="margin:6px 0"><span style="font-size:13.5px">${n}</span><span class="pill ${cur.check[i] ? "ok" : "bad"}">${cur.check[i] ? T("是", "yes") : T("否", "no")}</span></div>`).join("");
    const present = cur.check.slice(0, 3).every(Boolean);
    $("ce-caveat").innerHTML = (present ? `<span style="color:var(--green)">${T("① ② ③ 齐全：这是一段信用驱动的周期，ABCT 眼镜清晰。", "① ② ③ all present: a credit-driven cycle; the ABCT lens is sharp.")}</span> ` : "") + (cur.check[3] ? "" : `<span style="color:var(--red)">${T("④ 为否：清算被托住或被下一轮注入接管——看下一段。", "④ is no: liquidation was propped up or taken over by the next injection — see the next episode.")}</span> `) + `<br>${cur.caveat}`;
  };

  root.querySelectorAll("#ce-seg button").forEach((b) => b.addEventListener("click", () => { cur = cycles.find((c) => c.id === b.dataset.c); paint(); }));
  paint();
}
