// 交互演示：比特币标准下的托管商——固定的基础层 + 可变的债权层。
// 准备金比例滑块、逐轮信用扩张、挤兑事件（谁活下来）、“最后贷款人”开关对周期幅度的影响。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const BASE = 1000; // 链上 BTC 总量（固定）
  let reserve = 20, fracShare = 60, runSize = 30, lolr = false;
  let S;
  const init = () => {
    S = {
      round: 0, base: BASE, injected: 0,
      cust: {
        A: { name: T("A · 全额储备", "A · full reserve"), full: true, dep: 0, res: 0, loans: 0, alive: true, redeposit: 0 },
        B: { name: T("B · 全额储备", "B · full reserve"), full: true, dep: 0, res: 0, loans: 0, alive: true, redeposit: 0 },
        C: { name: T("C · 部分准备", "C · fractional"), full: false, dep: 0, res: 0, loans: 0, alive: true, redeposit: 0 },
        D: { name: T("D · 部分准备", "D · fractional"), full: false, dep: 0, res: 0, loans: 0, alive: true, redeposit: 0 },
      },
      selfCustody: 0, hist: [], log: [], peak: 1, runs: 0,
    };
    // 初始存款分配：基础货币的 80% 进托管，其中 fracShare% 进部分准备
    const toCust = BASE * 0.8;
    S.selfCustody = BASE - toCust;
    const toFrac = toCust * fracShare / 100, toFull = toCust - toFrac;
    S.cust.A.dep = S.cust.A.res = toFull / 2; S.cust.B.dep = S.cust.B.res = toFull / 2;
    S.cust.C.dep = S.cust.C.res = toFrac / 2; S.cust.D.dep = S.cust.D.res = toFrac / 2;
    S.hist.push(ratio());
  };
  const claims = () => Object.values(S.cust).reduce((s, c) => s + (c.alive ? c.dep : 0), 0) + S.selfCustody;
  const ratio = () => claims() / BASE; // 相对于原始链上基础：注入的“新基础”也算作扩张
  const rate = () => 5 * Math.pow(1 / ratio(), 1.5); // 示意：债权越多，借币利率越低

  function expand() {
    S.round++;
    let created = 0;
    // 被最后贷款人救过的托管商：储户“什么都没学到”，上一轮提走的币又存回来
    for (const c of Object.values(S.cust)) {
      if (c.alive && c.redeposit > 0) { c.dep += c.redeposit; c.res += c.redeposit; S.selfCustody -= c.redeposit; c.redeposit = 0; }
    }
    for (const c of Object.values(S.cust)) {
      if (!c.alive || c.full) continue;
      const target = c.dep * reserve / 100;
      const lend = Math.max(0, c.res - target);
      if (lend > 0) {
        c.res -= lend; c.loans += lend;
        // 借款人把借来的币的 70% 又存回托管体系（按原比例分配），其余进入自我托管/链上流通
        const back = lend * 0.7;
        const toFrac = back * fracShare / 100, toFull = back - toFrac;
        S.cust.A.dep += toFull / 2; S.cust.A.res += toFull / 2;
        S.cust.B.dep += toFull / 2; S.cust.B.res += toFull / 2;
        const fr = ["C", "D"].filter((k) => S.cust[k].alive);
        for (const k of fr) { S.cust[k].dep += toFrac / fr.length; S.cust[k].res += toFrac / fr.length; }
        S.selfCustody += lend - back;
        created += lend;
      }
    }
    S.hist.push(ratio()); S.peak = Math.max(S.peak, ratio());
    const lines = [`<b>${T("第", "Round")} ${S.round}${T(" 轮", "")}</b> · ${T("部分准备托管商新放贷", "fractional custodians lent")} <b>${created.toFixed(0)} BTC</b>`];
    lines.push(`${T("债权总量 / 链上基础", "Claims / on-chain base")} = <b>${ratio().toFixed(2)}×</b> · ${T("借币利率", "lending rate")} ≈ <b>${rate().toFixed(1)}%</b>${created > 0 ? `<span class="warn"> ← ${T("利率在“撒谎”：没有人多储蓄一枚币", "the rate is “lying”: nobody saved one more coin")}</span>` : ""}`);
    if (created < 1) lines.push(`<span style="color:var(--muted)">${T("扩张到顶了：准备金比例已达目标，没有央行可以补充准备金。这就是固定基础层的“燃料上限”。", "Expansion has hit its ceiling: reserve ratios are at target and no central bank can top them up. That is the fixed base layer's “fuel ceiling.”")}</span>`);
    S.log.unshift(lines.map((l) => `<div>${l}</div>`).join("")); S.log = S.log.slice(0, 5);
    paint();
  }

  function run() {
    S.round++; S.runs++;
    const lines = [`<b>${T("第", "Round")} ${S.round}${T(" 轮", "")}</b> · <span class="bad">${T("挤兑：", "Run: ")}${runSize}% ${T("的储户要求提币", "of depositors demand withdrawal")}</span>`];
    for (const [k, c] of Object.entries(S.cust)) {
      if (!c.alive) continue;
      const w = c.dep * runSize / 100;
      if (c.res >= w) {
        c.res -= w; c.dep -= w; S.selfCustody += w;
        lines.push(`<span class="ok">${c.name}：${T("兑付", "paid")} ${w.toFixed(0)} BTC，${T("存活", "survives")}</span>`);
      } else {
        const short = w - c.res;
        if (lolr) {
          // 最后贷款人凭空创造新的基础货币借给托管商（在比特币上这需要一个能发行的实体——示意为“法币化”的后果）
          S.base += short; S.injected += short;
          c.dep -= w; S.selfCustody += w; c.res = 0; c.loans += short; c.redeposit = w;
          lines.push(`<span class="warn">${c.name}：${T("准备金不足", "short by")} ${short.toFixed(0)} BTC → ${T("最后贷款人注入，存活；基础货币被扩大", "lender of last resort injects; survives; the base itself is enlarged")}</span>`);
        } else {
          // 倒闭：储户按剩余准备金 + 贷款回收（60%）按比例分配
          const recovered = c.res + c.loans * 0.6;
          const loss = c.dep - recovered;
          c.alive = false; S.selfCustody += recovered;
          lines.push(`<span class="bad">${c.name}：${T("准备金不足", "short by")} ${short.toFixed(0)} BTC → ${T("倒闭。储户收回", "fails. Depositors recover")} ${recovered.toFixed(0)} / ${c.dep.toFixed(0)} BTC，${T("损失", "loss")} ${loss.toFixed(0)}（${T("落在债权人，不落在纳税人", "on creditors, not taxpayers")}）</span>`);
          // 学习效应：幸存者的存款流向全额储备
        }
      }
    }
    S.hist.push(ratio());
    lines.push(`${T("债权总量 / 基础", "Claims / base")} = <b>${ratio().toFixed(2)}×</b>${lolr ? `，${T("基础货币已被注入", "base enlarged by")} ${S.injected.toFixed(0)} BTC` : ""}`);
    if (!lolr) lines.push(`<span style="color:var(--muted)">${T("清算完成，债权层收缩回基础层附近。周期短、损失可见、无救助——阶段 9.4 的预言。", "Liquidation done; the claims layer shrinks back toward the base. Short cycle, visible losses, no bailout — the prediction of Stage 9.4.")}</span>`);
    else lines.push(`<span style="color:var(--muted)">${T("被救的托管商学到的一课是“多借无妨”。下一轮扩张会更大——周期被拉长、放大，代价社会化。", "The rescued custodian's lesson is “over-lending is fine.” The next expansion will be larger — the cycle lengthens, amplifies, and the cost is socialized.")}</span>`);
    S.log.unshift(lines.map((l) => `<div>${l}</div>`).join("")); S.log = S.log.slice(0, 5);
    paint();
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏛️ 固定的币，可变的债权：比特币标准下的托管商沙盘", "🏛️ Fixed coins, variable claims: custodians under a Bitcoin standard")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("部分准备托管商的目标准备金比例", "Fractional custodians' target reserve ratio")}：<b id="bf-res">${reserve}%</b></label>
          <input class="demo-slider" type="range" min="5" max="100" step="5" value="${reserve}" data-k="reserve" />
          <label class="demo-label" style="margin-top:8px">${T("储户被“收益”吸引到部分准备托管商的比例", "Share of deposits drawn to fractional custodians by “yield”")}：<b id="bf-frac">${fracShare}%</b></label>
          <input class="demo-slider" type="range" min="0" max="100" step="10" value="${fracShare}" data-k="fracShare" />
          <label class="demo-label" style="margin-top:8px">${T("挤兑规模（要求提币的储户比例）", "Run size (share of depositors withdrawing)")}：<b id="bf-run">${runSize}%</b></label>
          <input class="demo-slider" type="range" min="10" max="60" step="5" value="${runSize}" data-k="runSize" />
          <label class="demo-check" style="margin-top:10px"><input type="checkbox" id="bf-lolr" /> ${T("最后贷款人（默认没有——比特币没有发行人）", "Lender of last resort (off by default — Bitcoin has no issuer)")}</label>
          <div class="demo-btns" style="margin-top:10px">
            <button class="demo-btn" id="bf-expand">${T("运行一轮：信用扩张", "Run a round: credit expands")}</button>
            <button class="demo-btn" id="bf-runbtn">${T("触发挤兑", "Trigger a run")}</button>
            <button class="demo-btn" id="bf-reset">${T("重置", "Reset")}</button>
          </div>
        </div>
        <div class="demo-block">
          <div id="bf-chart"></div>
          <div class="stat-row" id="bf-stats"></div>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("托管商资产负债（BTC）", "Custodian balance sheets (BTC)")}</div>
        <div id="bf-cust"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="bf-log"><span style="color:var(--muted)">${T("先连点几次“信用扩张”看债权/基础比值上升、利率下降；再“触发挤兑”看谁活下来；然后打开最后贷款人，重来一遍，比较峰值倍数。", "Run “credit expands” several times and watch claims/base rise and the rate fall; then “trigger a run” to see who survives; then turn on the lender of last resort, repeat, and compare the peak multiple.")}</span></div></div>
      <p class="demo-tip">${T(
        "链上 BTC 始终是 1,000 枚（橙线以下），债权却能涨到它的两三倍——<strong>固定供给挡不住信用扩张</strong>（阶段 4.4、5.1）。但没有最后贷款人时，挤兑把 C、D 直接清算掉，比值一轮就回到 1 附近，损失落在它们的储户头上；打开最后贷款人，基础货币被“注入”，C、D 活下来、继续扩张，峰值倍数越来越高——<strong>周期由谁买单，决定了周期有多长</strong>（阶段 9.4）。把准备金拉到 100%，你会看到整个沙盘没有周期可言。",
        "On-chain BTC stays at 1,000 (the base), yet claims can rise to two or three times that — <strong>a fixed supply does not stop credit expansion</strong> (Stages 4.4, 5.1). But with no lender of last resort, a run liquidates C and D outright and the ratio drops back near 1 in one round, with losses on their depositors; turn the lender of last resort on and the base gets “injected,” C and D survive and keep expanding, and the peak multiple climbs — <strong>who pays for the cycle decides how long it lasts</strong> (Stage 9.4). Push reserves to 100% and the sandbox has no cycle at all."
      )}</p>
    </div>`;

  function paint() {
    const n = S.hist.length - 1;
    const ch = lineChart({ fns: [{ f: (i) => S.hist[Math.min(n, Math.round(i))], cls: "line3" }, { f: () => 1, cls: "line" }], lo: 0, hi: Math.max(1, n), samples: Math.max(1, n), xlabel: T("轮次", "Round"), forceZero: true, uid: "bf-c" });
    root.querySelector("#bf-chart").innerHTML = chartBlock(ch, [["var(--red)", T("债权 / 链上基础", "claims / on-chain base")], ["var(--orange)", T("基础 = 1×", "base = 1×")]]);
    const r = ratio();
    root.querySelector("#bf-stats").innerHTML = `
      <div class="stat"><div class="k">${T("链上基础", "On-chain base")}</div><div class="v">${S.base.toFixed(0)}</div></div>
      <div class="stat"><div class="k">${T("债权总量（纸 BTC）", "Total claims (paper BTC)")}</div><div class="v ${r > 1.05 ? "neg" : ""}">${claims().toFixed(0)}</div></div>
      <div class="stat"><div class="k">${T("借币利率", "Lending rate")}</div><div class="v acc">${rate().toFixed(1)}%</div></div>
      <div class="stat"><div class="k">${T("峰值倍数（周期幅度）", "Peak multiple (cycle amplitude)")}</div><div class="v">${S.peak.toFixed(2)}×</div></div>`;
    root.querySelector("#bf-cust").innerHTML = Object.values(S.cust).map((c) => {
      const rr = c.dep > 0 ? c.res / c.dep * 100 : 0;
      return `<div class="bar2"><span class="lab" style="width:130px;${c.alive ? "" : "text-decoration:line-through;opacity:.6"}">${c.name}</span>
        <div class="track"><div class="fill" style="width:${Math.min(100, rr).toFixed(0)}%;background:${c.full ? "var(--blue)" : rr < 30 ? "var(--red)" : "var(--orange)"}"></div></div>
        <span class="val" style="width:190px">${c.alive ? `${T("存款", "dep")} ${c.dep.toFixed(0)} · ${T("准备", "res")} ${c.res.toFixed(0)} (${rr.toFixed(0)}%) · ${T("贷出", "loans")} ${c.loans.toFixed(0)}` : T("已倒闭", "failed")}</span></div>`;
    }).join("") + `<div class="demo-meta">${T("自我托管（链上）", "Self-custody (on-chain)")}: ${S.selfCustody.toFixed(0)} BTC</div>`;
    root.querySelector("#bf-log").innerHTML = S.log.join("<hr style='border:0;border-top:1px solid var(--line-soft);margin:4px 0'/>") || root.querySelector("#bf-log").innerHTML;
  }

  root.querySelectorAll("[data-k]").forEach((sl) => sl.addEventListener("input", () => {
    const k = sl.dataset.k, v = +sl.value;
    if (k === "reserve") { reserve = v; root.querySelector("#bf-res").textContent = v + "%"; }
    if (k === "fracShare") { fracShare = v; root.querySelector("#bf-frac").textContent = v + "%"; init(); paint(); }
    if (k === "runSize") { runSize = v; root.querySelector("#bf-run").textContent = v + "%"; }
  }));
  root.querySelector("#bf-lolr").addEventListener("change", (e) => { lolr = e.target.checked; });
  root.querySelector("#bf-expand").addEventListener("click", expand);
  root.querySelector("#bf-runbtn").addEventListener("click", run);
  root.querySelector("#bf-reset").addEventListener("click", () => { init(); paint(); });
  init(); paint();
}
