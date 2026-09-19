// 交互演示：日本 1985–2024 时间线（可按政策类型过滤的 .tl）+ 一个风格化的“清算允许度 → 复苏时间”模型
// + 与美国 1920–21、美国 2008 的对照面板。模型是思维实验的沙盘：清算得越彻底，初期跌得越深、恢复越快、累计损失越小。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const CATS = {
    money: { label: T("货币", "Monetary"), color: "var(--blue)" },
    fiscal: { label: T("财政", "Fiscal"), color: "var(--orange)" },
    bank: { label: T("银行/清算", "Banks / liquidation"), color: "var(--red)" },
    market: { label: T("市场", "Markets"), color: "var(--green)" },
  };
  const events = [
    { y: "1985.09", c: "market", s: T("广场协议：日元从约 240 升向约 120 兑 1 美元", "Plaza Accord: yen goes from about 240 toward about 120 per dollar") },
    { y: "1987.02", c: "money", s: T("贴现率降到 2.5%（当时历史最低），维持到 1989 年 5 月；M2+CD 年增约 10%", "Discount rate cut to 2.5% (record low), held until May 1989; M2+CDs growing about 10%/yr") },
    { y: "1989.12", c: "market", s: T("日经 225 收于 38,915；东京市盈率普遍 60 倍以上", "Nikkei 225 closes at 38,915; Tokyo P/Es commonly above 60") },
    { y: "1990.08", c: "money", s: T("三重野把贴现率提到 6%；大藏省限制房地产贷款——信用扩张停止", "Mieno raises the rate to 6%; MOF caps real-estate lending — the expansion stops") },
    { y: "1990.12", c: "market", s: T("日经腰斩至约 20,000；1991 年起地价开始十五年下跌", "Nikkei halves to about 20,000; land prices begin a 15-year decline from 1991") },
    { y: "1992.08", c: "fiscal", s: T("第一轮“经济对策”——到 2000 年共十余轮，宣布总额超 100 万亿日元", "First “economic package” — more than ten by 2000, announced total above ¥100 trillion") },
    { y: "1995.12", c: "bank", s: T("住专危机用公共资金处理；监管“宽容”：坏账不核销", "Jusen crisis resolved with public money; regulatory forbearance: bad loans not written off") },
    { y: "1997.11", c: "bank", s: T("北海道拓殖银行、山一证券倒闭——泡沫破裂七年后第一批被允许倒下的大机构", "Hokkaido Takushoku and Yamaichi fail — first big institutions allowed to fall, seven years after the bust") },
    { y: "1998.10", c: "bank", s: T("长期信用银行、日本债券信用银行国有化；数十万亿日元注资", "LTCB and NCB nationalized; tens of trillions of yen injected") },
    { y: "1999.02", c: "money", s: T("零利率政策（ZIRP）——世界首次", "Zero-interest-rate policy — a world first") },
    { y: "2001.03", c: "money", s: T("量化宽松（QE）开始——世界首次；2006 年退出", "Quantitative easing begins — a world first; exited 2006") },
    { y: "2002.10", c: "bank", s: T("竹中“金融再生计划”：强制核销坏账，不良贷款率减半——僵尸占比下降，2003–07 温和复苏", "Takenaka's “Financial Revival” program: forced write-offs, NPL ratio halved — zombie share falls, modest recovery 2003–07") },
    { y: "2003.04", c: "market", s: T("日经触底约 7,600", "Nikkei bottoms near 7,600") },
    { y: "2013.04", c: "money", s: T("黑田 QQE：两年内基础货币翻倍，目标 2% 通胀（安倍经济学第一支箭）", "Kuroda's QQE: double the monetary base in two years, 2% target (Abenomics' first arrow)") },
    { y: "2016.01", c: "money", s: T("负利率 −0.1%；9 月收益率曲线控制：10 年期钉在 0% 附近", "Negative rate −0.1%; in September yield-curve control pins the 10-year near 0%") },
    { y: "2019.12", c: "fiscal", s: T("公共总债务超过 GDP 的 230%（约），发达国家最高；日本银行持有过半国债", "Gross public debt above roughly 230% of GDP, highest in the developed world; BOJ holds over half of JGBs") },
    { y: "2024.03", c: "money", s: T("日本银行结束负利率与 YCC；日经重回 39,000——三十四年", "BOJ ends negative rates and YCC; Nikkei back above 39,000 — after thirty-four years") },
  ];

  // —— 风格化模型：L = 政策允许的清算程度 0–1 ——
  // 初期跌幅 d 随 L 上升（清算越彻底跌得越深）；恢复半衰期 h 随 L 下降（清算越彻底恢复越快）；
  // 未清算的错误投资造成持续拖累 g（僵尸挤占健康企业）。
  function model(L) {
    const d = 4 + 8 * L;                           // 初期产出跌幅 %
    const h = 0.8 + 8 * Math.pow(1 - L, 2);        // 半衰期（年）
    const g = 0.3 * Math.pow(1 - L, 2);            // 每年的僵尸拖累 %（相对趋势，持续约十年）
    const path = (t) => 100 - d * Math.pow(0.5, t / h) - g * Math.min(t, 10) * (1 - Math.pow(0.5, t / h)) * 0.5;
    let tRec = null; for (let t = 0; t <= 40; t += 0.1) { if (path(t) >= 99 && t > 0.3) { tRec = t; break; } }
    let loss = 0; for (let t = 0; t <= 30; t += 0.1) loss += (100 - path(t)) * 0.1;
    return { d, h, g, path, tRec, loss };
  }
  const cases = [
    { id: "us1921", L: 0.9, name: T("美国 1920–21", "US 1920–21"), note: T("哈丁：支出砍半、无刺激、工资降约两成；18 个月后复苏", "Harding: spending halved, no stimulus, wages down about a fifth; recovery in 18 months") },
    { id: "us2008", L: 0.4, name: T("美国 2008", "US 2008"), note: T("TARP、QE、零利率七年；产出 2011 年恢复，但僵尸占比上升、复苏乏力（阶段 13.4）", "TARP, QE, seven years of ZIRP; output back by 2011, but rising zombie share and a weak recovery (Stage 13.4)") },
    { id: "japan", L: 0.15, name: T("日本 1990", "Japan 1990"), note: T("护送船团、续贷、十余轮刺激、零利率二十五年；股市三十四年收复", "Convoy system, evergreening, a dozen packages, twenty-five years of ZIRP; stocks regained after 34 years") },
  ];

  let filter = "all";
  let L = 0.15;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗾 日本时间线 + “政策允许了多少清算？”沙盘", "🗾 Japan timeline + the “how much liquidation did policy allow?” sandbox")}</div>
      <div class="demo-block">
        <div class="demo-seg" id="jt-filter">
          <button data-c="all" class="on">${T("全部", "All")}</button>
          ${Object.entries(CATS).map(([k, v]) => `<button data-c="${k}">${v.label}</button>`).join("")}
        </div>
        <div class="tl" id="jt-tl"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("政策允许的清算程度：", "Liquidation allowed by policy: ")}<b id="jt-L">15%</b> <span style="color:var(--muted)">${T("（0 = 一切续命，100 = 让价格与破产走完）", "(0 = everything kept on life support, 100 = prices and bankruptcies run their course)")}</span></label>
        <input class="demo-slider" type="range" min="0" max="100" step="1" value="15" id="jt-slider"/>
        <div class="demo-btns">
          ${cases.map((c) => `<button class="demo-btn" data-L="${c.L}">${c.name}</button>`).join("")}
        </div>
        <div id="jt-chart"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("初期跌幅", "Initial drop")}</div><div class="v neg" id="jt-d">–</div></div>
          <div class="stat"><div class="k">${T("恢复到 99% 用时", "Years to regain 99%")}</div><div class="v acc" id="jt-t">–</div></div>
          <div class="stat"><div class="k">${T("30 年累计损失（%·年）", "30-yr cumulative loss (%·yrs)")}</div><div class="v" id="jt-loss">–</div></div>
          <div class="stat"><div class="k">${T("僵尸拖累/年", "Zombie drag / yr")}</div><div class="v" id="jt-g">–</div></div>
        </div>
      </div>
      <div class="demo-block">
        <div class="cmp-3" id="jt-cmp"></div>
      </div>
      <p class="demo-tip">${T(
        "把滑块从日本（15%）拉到美国 1921（90%）：<strong>初期跌得更深，但恢复时间从二十多年缩到两三年，累计损失反而小得多</strong>。这就是奥派对“清算是治疗”的全部主张——一个风格化模型，不是预测。再看时间线：2002 年那一条“强制核销”之后紧跟 2003–07 年复苏，是整段历史里对奥派因果最有力的证据。",
        "Drag the slider from Japan (15%) to US 1921 (90%): <strong>the initial drop is deeper, but recovery shrinks from twenty-plus years to two or three, and the cumulative loss is far smaller.</strong> That is the whole Austrian claim that liquidation is the cure — a stylized model, not a forecast. Then read the timeline: the 2002 “forced write-offs” entry followed immediately by the 2003–07 recovery is the strongest evidence in the whole history for the Austrian causal story."
      )}</p>
    </div>`;

  function paintTl() {
    root.querySelector("#jt-tl").innerHTML = events.filter((e) => filter === "all" || e.c === filter).map((e) =>
      `<div class="tl-item"><span class="when">${e.y}</span><span class="pill" style="background:${CATS[e.c].color};color:#fff;margin-right:6px">${CATS[e.c].label}</span>${e.s}</div>`).join("");
  }

  function paintModel() {
    const m = model(L);
    root.querySelector("#jt-L").textContent = Math.round(L * 100) + "%";
    root.querySelector("#jt-d").textContent = "−" + m.d.toFixed(1) + "%";
    root.querySelector("#jt-t").textContent = m.tRec == null ? T("30 年内未恢复", "not within 30 yrs") : m.tRec.toFixed(1) + " " + T("年", "yrs");
    root.querySelector("#jt-loss").textContent = m.loss.toFixed(0);
    root.querySelector("#jt-g").textContent = m.g.toFixed(2) + "%";
    const ref = model(0.9);
    const res = lineChart({
      fns: [
        { f: m.path, cls: "line" },
        { f: ref.path, cls: "line2" },
      ],
      lo: 0, hi: 30, xlabel: T("泡沫破裂后的年数", "Years after the bust"), uid: "jt", samples: 120,
      markerX: m.tRec != null ? m.tRec : undefined, markerLabel: m.tRec != null ? T("恢复", "recovered") : undefined,
    });
    root.querySelector("#jt-chart").innerHTML = chartBlock(res, [
      ["var(--orange)", T("当前清算程度下的产出（趋势 = 100）", "Output at the current liquidation setting (trend = 100)")],
      ["var(--blue)", T("对照：清算 90%（美国 1921 式）", "Reference: 90% liquidation (US-1921 style)")],
    ]);
    root.querySelectorAll("[data-L]").forEach((b) => b.classList.toggle("active", Math.abs(+b.dataset.L - L) < 0.03));
    root.querySelector("#jt-cmp").innerHTML = cases.map((c) => {
      const mm = model(c.L);
      const cur = Math.abs(c.L - L) < 0.03;
      return `<div class="cmp-cell ${cur ? "hl" : ""}"><h5>${c.name} · ${T("清算约", "liquidation about")} ${Math.round(c.L * 100)}%</h5>
        <div style="font-size:12.5px;line-height:1.5;color:var(--muted)">${c.note}</div>
        <div style="margin-top:6px;font-size:12.5px">${T("模型：跌", "Model: drop")} ${mm.d.toFixed(0)}%，${T("恢复", "recovery")} ${mm.tRec == null ? "30+" : mm.tRec.toFixed(0)} ${T("年，累计损失", "yrs, cumulative loss")} ${mm.loss.toFixed(0)}</div></div>`;
    }).join("");
  }

  root.querySelectorAll("#jt-filter button").forEach((b) => b.addEventListener("click", () => {
    filter = b.dataset.c; root.querySelectorAll("#jt-filter button").forEach((x) => x.classList.toggle("on", x === b)); paintTl();
  }));
  root.querySelector("#jt-slider").addEventListener("input", (e) => { L = +e.target.value / 100; paintModel(); });
  root.querySelectorAll("[data-L]").forEach((b) => b.addEventListener("click", () => { L = +b.dataset.L; root.querySelector("#jt-slider").value = Math.round(L * 100); paintModel(); }));

  paintTl(); paintModel();
}
