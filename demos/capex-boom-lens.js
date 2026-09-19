// 交互演示：资本支出繁荣的 ABCT 透镜——利率缺口、融资来源、资产寿命、预期回报、错误是否成簇，
// 合成一个“脆弱度”读数，把繁荣归类为“储蓄资助的创新”还是“信贷驱动的错误投资风险”。
// 历史预设：1846 铁路、1999 光纤、2024/2025 AI。明确：不构成投资建议。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const PRESETS = {
    rail: { n: T("1846 英国铁路", "1846 British railways"), mkt: 3, nat: 5.5, fin: "credit", life: 60, ret: 5, cluster: 90 },
    fiber: { n: T("1999 光纤/电信（供应商融资）", "1999 fiber / telecom (vendor financing)"), mkt: 5, nat: 6.25, fin: "credit", life: 25, ret: 3, cluster: 85 },
    ai24: { n: T("2024 AI（现金流）", "2024 AI (cash flow)"), mkt: 5.25, nat: 4.5, fin: "cash", life: 4, ret: 15, cluster: 80 },
    ai25: { n: T("2025 AI（转向债务）", "2025 AI (shifting to debt)"), mkt: 4.25, nat: 4.5, fin: "debt", life: 4, ret: 12, cluster: 85 },
  };
  let S = { ...PRESETS.ai24 };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔍 资本支出繁荣透镜：储蓄资助的创新，还是信贷驱动的错误投资？", "🔍 Capex boom lens: saving-funded innovation, or credit-fueled malinvestment?")}</div>
      <div class="demo-block">
        <div class="demo-label">${T("历史预设（数字为示意，非精确统计）", "Historical presets (illustrative, not precise statistics)")}</div>
        <div class="demo-btns" id="cbl-presets">${Object.entries(PRESETS).map(([k, p]) => `<button class="demo-btn" data-p="${k}">${p.n}</button>`).join("")}</div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("市场利率", "Market rate")}：<b id="cbl-mkt-v"></b>%</label>
          <input class="demo-slider" id="cbl-mkt" type="range" min="0" max="10" step="0.25" />
          <label class="demo-label" style="margin-top:8px">${T("自然利率（时间偏好的代理）", "Natural rate (proxy for time preference)")}：<b id="cbl-nat-v"></b>%</label>
          <input class="demo-slider" id="cbl-nat" type="range" min="1" max="8" step="0.25" />
          <div class="demo-meta">${T("缺口 = 自然利率 − 市场利率。正缺口 = 利率被人为压低（阶段 3.5、5.1）。", "Gap = natural − market. A positive gap means an artificially low rate (Stages 3.5, 5.1).")}</div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("融资来源", "Financing source")}</label>
          <div class="demo-seg" id="cbl-fin">
            <button data-f="cash">${T("经营现金流", "Cash flow")}</button>
            <button data-f="debt">${T("市场债务/股权", "Market debt / equity")}</button>
            <button data-f="credit">${T("信用扩张", "Credit expansion")}</button>
          </div>
          <label class="demo-label" style="margin-top:8px">${T("资产经济寿命（年）", "Asset economic life (years)")}：<b id="cbl-life-v"></b></label>
          <input class="demo-slider" id="cbl-life" type="range" min="2" max="60" step="1" />
          <label class="demo-label" style="margin-top:8px">${T("预期年回报（占资本支出 %）", "Expected annual return (% of capex)")}：<b id="cbl-ret-v"></b>%</label>
          <input class="demo-slider" id="cbl-ret" type="range" min="1" max="40" step="1" />
          <label class="demo-label" style="margin-top:8px">${T("押同一方向的投资者比例", "Share of investors betting the same way")}：<b id="cbl-cl-v"></b>%</label>
          <input class="demo-slider" id="cbl-cl" type="range" min="0" max="100" step="5" />
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("脆弱度读数（0–100）", "Fragility gauge (0–100)")}</div>
        <div class="bar2"><span class="lab">${T("合计", "Total")}</span><div class="track" style="height:26px"><div class="fill" id="cbl-gauge" style="width:0%"></div></div><span class="val" id="cbl-score" style="font-weight:700"></span></div>
        <div id="cbl-parts"></div>
        <div class="stat-row">
          <div class="stat" style="flex:2"><div class="k">${T("分类", "Classification")}</div><div class="v" id="cbl-class">–</div></div>
          <div class="stat"><div class="k">${T("回本年数", "Payback (years)")}</div><div class="v" id="cbl-pb">–</div></div>
          <div class="stat"><div class="k">${T("利率缺口", "Rate gap")}</div><div class="v" id="cbl-gap">–</div></div>
        </div>
        <div class="demo-log" id="cbl-log"></div>
      </div>
      <p class="demo-tip">${T(
        "先点“2024 AI（现金流）”：利率缺口为负（利率偏高）、融资来自现金流——ABCT 的触发器没有点火，脆弱度主要来自 4 年的资产寿命和高度同向的押注。再点“2025 AI（转向债务）”：只改了融资来源和一点利率，读数就跳一档——<strong>看融资结构的变化比看市值更接近 ABCT 的核心</strong>。对比“1846 铁路”“1999 光纤”：真创新 + 信用扩张 + 同向押注 = 教科书式的红区。<strong>本演示不构成投资建议</strong>：它是一份区分证据类型的清单，不是一个方向。",
        "Click “2024 AI (cash flow)” first: the rate gap is negative (rates high), financing is from cash flow — ABCT's trigger has not fired, and the fragility comes mainly from a 4-year asset life and highly one-directional bets. Now click “2025 AI (shifting to debt)”: only the financing source and a bit of the rate change, and the reading jumps a band — <strong>watching the financing structure is closer to ABCT's core than watching market values</strong>. Compare “1846 railways” and “1999 fiber”: real innovation + credit expansion + one-directional bets = the textbook red zone. <strong>This demo is not investment advice</strong>: it is a checklist for sorting evidence, not a direction."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const sync = () => {
    $("cbl-mkt").value = S.mkt; $("cbl-nat").value = S.nat; $("cbl-life").value = S.life; $("cbl-ret").value = S.ret; $("cbl-cl").value = S.cluster;
  };
  const paint = () => {
    $("cbl-mkt-v").textContent = S.mkt; $("cbl-nat-v").textContent = S.nat; $("cbl-life-v").textContent = S.life; $("cbl-ret-v").textContent = S.ret; $("cbl-cl-v").textContent = S.cluster;
    root.querySelectorAll("#cbl-fin button").forEach((b) => b.classList.toggle("on", b.dataset.f === S.fin));
    root.querySelectorAll("#cbl-presets button").forEach((b) => b.classList.toggle("active", PRESETS[b.dataset.p] && Object.keys(PRESETS[b.dataset.p]).every((k) => k === "n" || PRESETS[b.dataset.p][k] === S[k])));

    const gap = S.nat - S.mkt;
    const pGap = Math.max(0, Math.min(35, gap * 12));                       // 利率被压低 → 最多 35
    const pFin = { cash: 0, debt: 15, credit: 35 }[S.fin];                  // 融资来源 → 0 / 15 / 35
    const payback = 100 / S.ret;
    const pLife = Math.max(0, Math.min(20, (payback / S.life - 0.5) * 20)); // 回本年数 vs 寿命 → 最多 20
    const pCl = S.cluster / 10;                                             // 同向押注 → 最多 10
    const score = Math.round(pGap + pFin + pLife + pCl);
    const cls = score < 35 ? 0 : score < 60 ? 1 : 2;
    const col = ["var(--green)", "var(--orange)", "var(--red)"][cls];
    $("cbl-gauge").style.width = score + "%"; $("cbl-gauge").style.background = col;
    $("cbl-score").textContent = score;
    const parts = [
      [T("利率缺口（自然 − 市场）", "Rate gap (natural − market)"), pGap, 35],
      [T("融资来源", "Financing source"), pFin, 35],
      [T("回本年数 vs 资产寿命", "Payback vs asset life"), pLife, 20],
      [T("错误成簇（同向押注）", "Clustered errors (same-way bets)"), pCl, 10],
    ];
    $("cbl-parts").innerHTML = parts.map(([l, v, m]) => `<div class="bar2"><span class="lab" style="width:170px">${l}</span><div class="track"><div class="fill" style="width:${(v / m) * 100}%;background:${v / m > 0.66 ? "var(--red)" : v / m > 0.33 ? "var(--orange)" : "var(--green)"}"></div></div><span class="val">${v.toFixed(0)}/${m}</span></div>`).join("");
    const c = $("cbl-class");
    c.className = "v " + ["pos", "acc", "neg"][cls];
    c.textContent = [T("储蓄资助的创新", "Saving-funded innovation"), T("混合：盯住融资结构", "Mixed: watch the financing"), T("信贷驱动的错误投资风险", "Credit-fueled malinvestment risk")][cls];
    const pb = $("cbl-pb"); pb.textContent = payback.toFixed(1); pb.className = "v " + (payback > S.life ? "neg" : "pos");
    const g = $("cbl-gap"); g.textContent = (gap >= 0 ? "+" : "") + gap.toFixed(2) + " pt"; g.className = "v " + (gap > 0.5 ? "neg" : "pos");

    const lines = [];
    if (gap > 0.5) lines.push(`<span class="bad">${T("市场利率低于自然利率：ABCT 的触发器已点火——企业家被误导以为社会愿意等更久，生产结构被拉长（阶段 5.1）。", "Market rate below the natural rate: ABCT's trigger has fired — entrepreneurs are misled into thinking society will wait longer, and the structure of production stretches (Stage 5.1).")}</span>`);
    else lines.push(`<span class="ok">${T("市场利率不低于自然利率：ABCT 的经典触发器没有点火。此时的繁荣若出错，更像阶段 6.3 的企业家判断失误，而非系统性错误投资。", "Market rate not below the natural rate: ABCT's classic trigger has not fired. If this boom goes wrong it looks more like the entrepreneurial misjudgment of Stage 6.3 than systemic malinvestment.")}</span>`);
    lines.push({
      cash: T("融资来自经营现金流 = 真实储蓄：股东放弃了分红/回购，把资源让渡给未来。可能判断错，但没有利率撒谎——这是 AI 繁荣与 1999 年最大的区别。", "Financing from operating cash flow = real saving: shareholders forwent dividends/buybacks and handed resources to the future. It may be a misjudgment, but no rate lied — the biggest difference between the AI boom and 1999."),
      debt: T("融资来自市场债务/股权：仍是别人的储蓄——除非这些储蓄本身由信用扩张创造。要问：这些债券的利率反映真实时间偏好，还是被央行压低？", "Financing from market debt/equity: still other people's saving — unless that saving was itself created by credit expansion. Ask whether the rates on those bonds reflect real time preference or a central bank's balance sheet."),
      credit: T("融资来自信用扩张：没有对应储蓄的资金进入长久期资产——这是米塞斯–哈耶克机制的经典路径（阶段 4.4、5.1）。", "Financing from credit expansion: money with no corresponding saving flowing into long-duration assets — the classic Mises–Hayek path (Stages 4.4, 5.1)."),
    }[S.fin]);
    if (payback > S.life) lines.push(`<span class="warn">${T("回本年数超过资产寿命：资本在过时前赚不回自己。对 GPU 这样的短命资产，错误暴露得比铁路和光纤快得多——后来者捡不到便宜。", "Payback exceeds asset life: the capital cannot earn itself back before obsolescence. For short-lived assets like GPUs, errors surface far faster than with railways or fiber — no bargains for latecomers.")}</span>`);
    if (S.cluster >= 75) lines.push(T("押注高度同向：错误若发生会成簇而非互相抵消。但要区分“共同的真实信号”（技术突破）与“共同的虚假信号”（利率）——只能靠融资来源分辨。", "Bets are highly one-directional: errors, if they occur, will cluster rather than cancel. But distinguish a “shared real signal” (a breakthrough) from a “shared false signal” (the rate) — only the financing source can tell them apart."));
    lines.push(`<span style="color:var(--muted)">${T("免责声明：本演示只展示 ABCT 的证据类型与历史类比，不构成任何投资建议（阶段 10.5、14.4）。", "Disclaimer: this demo only shows ABCT's evidence types and historical analogies; it is not investment advice (Stages 10.5, 14.4).")}</span>`);
    $("cbl-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("#cbl-presets button").forEach((b) => b.addEventListener("click", () => { S = { ...PRESETS[b.dataset.p] }; sync(); paint(); }));
  root.querySelectorAll("#cbl-fin button").forEach((b) => b.addEventListener("click", () => { S.fin = b.dataset.f; paint(); }));
  [["cbl-mkt", "mkt"], ["cbl-nat", "nat"], ["cbl-life", "life"], ["cbl-ret", "ret"], ["cbl-cl", "cluster"]].forEach(([id, k]) => $(id).addEventListener("input", (e) => { S[k] = +e.target.value; paint(); }));
  sync(); paint();
}
