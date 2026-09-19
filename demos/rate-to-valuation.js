// 交互演示：利率如何流进估值——两家 30 年现金流总额相近、但时间分布完全不同的公司（现金牛 vs 成长故事），
// 拖动折现率看谁的估值被撬得更高、跌得更狠；打开“信贷驱动”看杠杆怎么把摆动再放大一倍。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const YEARS = 30;
  const cow = Array.from({ length: YEARS }, () => 10);
  const growth = []; { let c = 0.7; for (let i = 0; i < YEARS; i++) { growth.push(c); c *= 1.15; } }
  const pv = (cf, r) => cf.reduce((s, c, i) => s + c / Math.pow(1 + r, i + 1), 0);
  const dur = (cf, r) => { let w = 0, p = 0; cf.forEach((c, i) => { const d = c / Math.pow(1 + r, i + 1); w += d * (i + 1); p += d; }); return p ? w / p : 0; };
  const REF = 0.05; // 参考利率：自然利率 5%，杠杆在此价位借入
  let r = 5, lev = false;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("📉 折现率滑块：谁的估值被撬得最高？", "📉 The discount-rate slider: whose valuation gets levered the most?")}</div>
      <div class="cmp">
        <div class="cmp-cell cold"><h5>${T("🐄 现金牛：每年 10，30 年共 300", "🐄 Cash cow: 10 a year, 300 over 30 years")}</h5><div class="stages" id="rv-cf-cow"></div></div>
        <div class="cmp-cell hl"><h5>${T("🚀 成长故事：第 1 年 0.7，每年 +15%，30 年共约 300", "🚀 Growth story: 0.7 in year 1, +15% a year, about 300 over 30 years")}</h5><div class="stages" id="rv-cf-growth"></div></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("折现率 r（市场利率 + 风险溢价）：", "Discount rate r (market rate + risk premium): ")}<b id="rv-rv">5.0%</b> <span style="color:var(--muted)">· ${T("参考：自然利率 5%", "reference: natural rate 5%")}</span></label>
        <input class="demo-slider" id="rv-r" type="range" min="1" max="8" step="0.25" value="5" />
        <div class="demo-btns">
          <button class="demo-btn" id="rv-lev">${T("信贷驱动：买家借入一半价款（关）", "Credit-fueled: buyer borrows half the price (off)")}</button>
          <button class="demo-btn" data-r="1">${T("2020–21：r → 1%", "2020–21: r → 1%")}</button>
          <button class="demo-btn" data-r="5">${T("2022：r → 5%", "2022: r → 5%")}</button>
        </div>
      </div>
      <div id="rv-chart"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("现金牛价值", "Cash cow value")}</div><div class="v" id="rv-pcow">–</div></div>
        <div class="stat"><div class="k">${T("成长故事价值", "Growth story value")}</div><div class="v acc" id="rv-pgr">–</div></div>
        <div class="stat"><div class="k">${T("现金牛 vs 5% 时", "Cash cow vs at 5%")}</div><div class="v" id="rv-dcow">–</div></div>
        <div class="stat"><div class="k">${T("成长故事 vs 5% 时", "Growth story vs at 5%")}</div><div class="v" id="rv-dgr">–</div></div>
        <div class="stat"><div class="k">${T("久期（年）牛 / 故事", "Duration (yrs) cow / story")}</div><div class="v" id="rv-dur">–</div></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="rv-log"></div></div>
      <p class="demo-tip">${T(
        "两家公司 30 年拿到的钱差不多，但<strong>成长故事的钱大多在很远的将来</strong>。把 r 从 5% 拖到 1%：现金牛涨 1.7 倍，成长故事涨 2.4 倍；拖回 5%，故事跌近六成。再打开“信贷驱动”：借来的一半价款不会跟着缩水，权益部分的摆动被放大到接近翻倍。<strong>这是 2020–21 与 2022 的算术骨架——不需要任何“疯狂”假设。</strong>本演示只讲机制，不构成投资建议。",
        "Both companies collect about the same over 30 years, but <strong>the growth story's money sits far in the future</strong>. Drag r from 5% to 1%: the cash cow rises 1.7×, the growth story 2.4×; drag back to 5% and the story loses nearly 60%. Now switch on “credit-fueled”: the borrowed half of the price does not shrink with the asset, so the swing in the equity slice is roughly doubled. <strong>That is the arithmetic skeleton of 2020–21 and 2022 — no assumption of “madness” required.</strong> This demo shows a mechanism; it is not investment advice."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const fp = (x) => (x >= 0 ? "+" : "") + x.toFixed(0) + "%";

  // 现金流剖面（每 5 年一根柱）
  const paintCF = (id, cf, color) => {
    const mx = Math.max(...cf);
    $(id).innerHTML = [0, 4, 9, 14, 19, 24, 29].map((i) => `<div class="stage-bar"><span class="lab">${T("第", "yr ")} ${i + 1} ${T("年", "")}</span><div class="track"><div class="fill" style="width:${(cf[i] / mx) * 100}%;background:${color}"></div></div><span class="val">${cf[i].toFixed(1)}</span></div>`).join("");
  };
  paintCF("rv-cf-cow", cow, "var(--blue)");
  paintCF("rv-cf-growth", growth, "var(--orange)");

  const paint = () => {
    const rr = r / 100;
    $("rv-rv").textContent = r.toFixed(2).replace(/0$/, "") + "%";
    const pC = pv(cow, rr), pG = pv(growth, rr), pC0 = pv(cow, REF), pG0 = pv(growth, REF);
    // 杠杆：在 5% 参考价位借入一半价款；权益 = 价值 − 债务
    const debtC = lev ? pC0 / 2 : 0, debtG = lev ? pG0 / 2 : 0;
    const eqC = pC - debtC, eqG = pG - debtG, eqC0 = pC0 - debtC, eqG0 = pG0 - debtG;
    const dC = (eqC / eqC0 - 1) * 100, dG = (eqG / eqG0 - 1) * 100;

    const res = lineChart({
      fns: [
        { f: (x) => pv(cow, x / 100) - debtC, cls: "line2" },
        { f: (x) => pv(growth, x / 100) - debtG, cls: "line" },
      ],
      lo: 1, hi: 8, samples: 70, forceZero: true, uid: "rv",
      xlabel: T("折现率 %", "discount rate %"), markerX: r, markerLabel: T("现在", "now"),
    });
    $("rv-chart").innerHTML = chartBlock(res, [["var(--blue)", T(lev ? "现金牛（权益）" : "现金牛", lev ? "cash cow (equity)" : "cash cow")], ["var(--orange)", T(lev ? "成长故事（权益）" : "成长故事", lev ? "growth story (equity)" : "growth story")]]);

    $("rv-pcow").textContent = eqC.toFixed(0);
    $("rv-pgr").textContent = eqG.toFixed(0);
    const set = (id, x) => { const el = $(id); el.textContent = fp(x); el.className = "v " + (x > 0.5 ? "pos" : x < -0.5 ? "neg" : ""); };
    set("rv-dcow", dC); set("rv-dgr", dG);
    $("rv-dur").textContent = dur(cow, rr).toFixed(1) + " / " + dur(growth, rr).toFixed(1);
    $("rv-lev").textContent = T("信贷驱动：买家借入一半价款（" + (lev ? "开" : "关") + "）", "Credit-fueled: buyer borrows half the price (" + (lev ? "on" : "off") + ")");
    $("rv-lev").classList.toggle("active", lev);

    const lines = [];
    lines.push(`${T("r =", "r =")} ${r.toFixed(2).replace(/0$/, "")}%：${T("现金牛", "cash cow")} ${pC.toFixed(0)}，${T("成长故事", "growth story")} ${pG.toFixed(0)}${lev ? T("（扣除债务后权益：", " (equity after debt: ") + eqC.toFixed(0) + " / " + eqG.toFixed(0) + T("）", ")") : ""}。`);
    if (r < REF * 100 - 0.01) {
      lines.push(`<span class="warn">${T("利率低于 5% 的自然利率：两者都被撬高，但成长故事被撬得更高（" + fp(dG) + " vs " + fp(dC) + "）。如果这个低利率来自信用扩张而非储蓄，多出来的估值就是“正确地折现了一个错误的利率”。", "Rate below the 5% natural rate: both are lifted, the growth story more (" + fp(dG) + " vs " + fp(dC) + "). If the low rate comes from credit expansion rather than saving, the extra valuation is “a correct discounting of a wrong rate.”")}</span>`);
    } else if (r > REF * 100 + 0.01) {
      lines.push(`<span class="bad">${T("利率高于 5%：成长故事跌 " + fp(dG) + "，现金牛跌 " + fp(dC) + "——久期越长跌越狠。这就是 2022 年跌幅排序的骨架。", "Rate above 5%: growth story " + fp(dG) + ", cash cow " + fp(dC) + " — the longer the duration, the harder the fall. That is the skeleton of the 2022 ranking.")}</span>`);
    } else {
      lines.push(`<span class="ok">${T("利率等于自然利率：估值反映社会真实的等待意愿。", "Rate equals the natural rate: valuations reflect society's real willingness to wait.")}</span>`);
    }
    if (lev) {
      const wipeG = pG <= debtG, wipeC = pC <= debtC;
      lines.push(`${T("杠杆：债务 " + debtC.toFixed(0) + " / " + debtG.toFixed(0) + " 不随资产缩水。", "Leverage: debt of " + debtC.toFixed(0) + " / " + debtG.toFixed(0) + " does not shrink with the asset.")}${wipeG ? ` <span class="bad">${T("成长故事的权益已归零——这就是明斯基时刻：资产跌破债务，强制清算。", "The growth story's equity is wiped out — a Minsky moment: the asset falls below the debt, forcing liquidation.")}</span>` : wipeC ? "" : ` ${T("权益的摆动被放大：这正是“泡沫是信贷现象”的意思——没有借来的钱，同样的利率变化摆不到这么大。", "The equity swing is amplified: that is what “bubbles are credit phenomena” means — without borrowed money, the same rate change could not swing this far.")}`}`);
    }
    $("rv-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("rv-r").addEventListener("input", (e) => { r = +e.target.value; paint(); });
  $("rv-lev").addEventListener("click", () => { lev = !lev; paint(); });
  root.querySelectorAll("[data-r]").forEach((b) => b.addEventListener("click", () => { r = +b.dataset.r; $("rv-r").value = r; paint(); }));
  paint();
}
