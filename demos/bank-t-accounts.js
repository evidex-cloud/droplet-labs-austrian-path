// 交互演示：部分准备金的 T 型账户——设准备金率和初始存款，一家一家银行往下走，
// 看贷款怎样创造存款；按“挤兑”撤走 15% 存款，区分“流动性不足”与“资不抵债”。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  let r = 10, D = 1000, dflt = 0, n = 0, ran = false;
  const MAXN = 12;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏦 T 型账户：贷款怎样创造存款，挤兑时谁会倒", "🏦 T-accounts: how loans create deposits, and who falls in a run")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("准备金率：", "Reserve ratio:")} <b id="bt-r-v">10%</b></label>
          <input class="demo-slider" type="range" min="0" max="100" step="1" value="10" id="bt-r" />
          <label class="demo-label" style="margin-top:10px">${T("初始存入的现金：", "Initial cash deposit:")} <b id="bt-d-v">$1,000</b></label>
          <input class="demo-slider" type="range" min="100" max="10000" step="100" value="1000" id="bt-d" />
          <label class="demo-label" style="margin-top:10px">${T("贷款坏账率（挤兑时按真实可回收价值算）：", "Loan default rate (used to value loans in a run):")} <b id="bt-f-v">0%</b></label>
          <input class="demo-slider" type="range" min="0" max="30" step="1" value="0" id="bt-f" />
          <div class="demo-btns">
            <button class="demo-btn" id="bt-step">${T("下一家银行 →", "Next bank →")}</button>
            <button class="demo-btn" id="bt-all">${T("跑完 12 家", "Run all 12")}</button>
            <button class="demo-btn" id="bt-run">${T("挤兑：取走 15%", "Bank run: withdraw 15%")}</button>
            <button class="demo-btn" id="bt-reset">${T("重置", "Reset")}</button>
          </div>
        </div>
        <div class="demo-block">
          <label class="demo-label" id="bt-cur-lab">${T("当前这家银行的 T 型账户", "This bank's T-account")}</label>
          <div class="cmp" id="bt-cur"></div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("整个银行体系（合并）", "The whole banking system (consolidated)")}</label>
        <div class="cmp" id="bt-sys"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("存款总额", "Total deposits")}</div><div class="v" id="bt-dep">–</div></div>
          <div class="stat"><div class="k">${T("贷款总额", "Total loans")}</div><div class="v" id="bt-loan">–</div></div>
          <div class="stat"><div class="k">${T("凭空创造的货币", "Money created from nothing")}</div><div class="v acc" id="bt-new">–</div></div>
          <div class="stat"><div class="k">${T("乘数（当前 / 上限）", "Multiplier (now / max)")}</div><div class="v" id="bt-mult">–</div></div>
        </div>
        <div class="demo-bar"><span id="bt-bar"></span></div>
        <div class="demo-log" id="bt-log" style="margin-top:12px"></div>
      </div>
      <p class="demo-tip">${T(
        "一家一家点“下一家银行”：每家都只贷出存款的 90%，看起来稳健；看<strong>合并账户</strong>：存款越滚越多，准备金始终只有最初那 1,000。把准备金率拉到 100%，乘数变 1，银行创造不了一分钱。跑完后按“挤兑”：准备金率低于 15% 时体系拿不出钱（流动性不足）；再把坏账率拉过某个点，资产按真实价值算低于存款——这才是资不抵债。把准备金率拉到 0（2020 年后的美国），你会看到：约束不再是准备金，而是资本与坏账。",
        "Click “Next bank” one at a time: each bank lends only 90% of its deposits and looks prudent; then read the <strong>consolidated</strong> account — deposits keep growing while reserves never exceed the original 1,000. Push the reserve ratio to 100% and the multiplier is 1: banks create nothing. After running all banks press “Bank run”: below a 15% ratio the system cannot pay (illiquid); now raise the default rate past a threshold and assets at true value fall below deposits — that is insolvency. Set the ratio to 0 (the U.S. since 2020) and you will see the constraint is no longer reserves but capital and bad loans."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const fmt = (x) => "$" + Math.round(x).toLocaleString("en-US");
  const rr = () => r / 100;

  // 第 k 家银行（1 起）收到的存款 = D (1-r)^(k-1)
  const depK = (k) => D * Math.pow(1 - rr(), k - 1);
  const totals = () => {
    let dep = 0;
    for (let k = 1; k <= n; k++) dep += depK(k);
    const res = rr() * dep, loans = (1 - rr()) * dep, transit = n > 0 ? depK(n) * (1 - rr()) : D;
    return { dep, res, loans, transit };
  };
  const cell = (title, rows, cls = "") => `<div class="cmp-cell ${cls}"><h5>${title}</h5>${rows.map(([k, v, hl]) => `<div class="demo-row" style="margin:5px 0"><span style="${hl ? "color:var(--orange-ink);font-weight:700" : ""}">${k}</span><b>${v}</b></div>`).join("")}</div>`;

  const paint = () => {
    $("bt-r-v").textContent = r + "%";
    $("bt-d-v").textContent = fmt(D);
    $("bt-f-v").textContent = dflt + "%";
    const t = totals();
    if (n === 0) {
      $("bt-cur-lab").textContent = T("还没有银行收到存款——点“下一家银行”", "No bank has received a deposit yet — click “Next bank”");
      $("bt-cur").innerHTML = cell(T("资产", "Assets"), [[T("准备金", "Reserves"), "–"], [T("贷款", "Loans"), "–"]]) + cell(T("负债", "Liabilities"), [[T("存款", "Deposits"), "–"]]);
    } else {
      const d = depK(n);
      $("bt-cur-lab").textContent = T(`第 ${n} 家银行的 T 型账户（收到存款 ${fmt(d)}）`, `Bank ${n}'s T-account (received deposit ${fmt(d)})`);
      $("bt-cur").innerHTML = cell(T("资产", "Assets"), [[T("准备金（留 " + r + "%）", "Reserves (keep " + r + "%)"), fmt(d * rr())], [T("贷款 → 变成下一家的存款", "Loan → becomes next bank's deposit"), fmt(d * (1 - rr())), true]], "hl") + cell(T("负债", "Liabilities"), [[T("存款", "Deposits"), fmt(d)]]);
    }
    $("bt-sys").innerHTML = cell(T("资产", "Assets"), [[T("准备金（现金）", "Reserves (cash)"), fmt(t.res)], [T("贷款", "Loans"), fmt(t.loans), true], [T("在途现金（尚未存入下一家）", "Cash in transit (not yet deposited)"), fmt(t.transit)]]) + cell(T("负债", "Liabilities"), [[T("存款总额", "Total deposits"), fmt(t.dep), true]], t.dep > D ? "hl" : "");
    $("bt-dep").textContent = fmt(t.dep);
    $("bt-loan").textContent = fmt(t.loans);
    $("bt-new").textContent = fmt(Math.max(0, t.dep - D));
    const maxMult = rr() > 0 ? 1 / rr() : Infinity;
    $("bt-mult").textContent = (n ? (t.dep / D).toFixed(2) : "0") + " / " + (isFinite(maxMult) ? maxMult.toFixed(1) : "∞");
    const cap = isFinite(maxMult) ? D * maxMult : D * MAXN;
    $("bt-bar").style.width = Math.min(100, (t.dep / cap) * 100) + "%";

    const lines = [];
    if (n === 0) lines.push(T("你把现金存进第 1 家银行。它会留下准备金率那部分，把其余记到借款人账户上——贷款创造存款。", "You deposit cash in bank 1. It keeps the reserve-ratio fraction and credits the rest to a borrower's account — the loan creates a deposit."));
    else {
      lines.push(T(`走了 ${n} 家银行：存款 ${fmt(t.dep)}，其中 ${fmt(D)} 是真钱，<b>${fmt(t.dep - D)}</b> 是贷款创造的。准备金只有 ${fmt(t.res)}（加在途现金 ${fmt(t.transit)} = 最初的 ${fmt(D)}）。`, `${n} banks in: deposits ${fmt(t.dep)}, of which ${fmt(D)} is real money and <b>${fmt(t.dep - D)}</b> was created by loans. Reserves are only ${fmt(t.res)} (plus ${fmt(t.transit)} in transit = the original ${fmt(D)}).`));
      if (r === 100) lines.push(`<span class="ok">${T("准备金率 100%：每家银行把全部存款留作准备金，贷款为零，存款总额永远等于最初的现金——这就是罗斯巴德的 100% 准备金世界。", "100% reserves: every bank keeps all deposits as reserves, loans are zero, and total deposits always equal the original cash — Rothbard's 100%-reserve world.")}</span>`);
      if (r === 0) lines.push(`<span class="warn">${T("准备金率 0%（美国 2020 年 3 月起）：理论乘数无穷大。现实中约束银行的是资本充足率、流动性规则和贷款需求——不是准备金。核心机制没变：贷款创造存款。", "0% reserves (the U.S. since March 2020): the theoretical multiplier is infinite. In reality banks are constrained by capital adequacy, liquidity rules and loan demand — not reserves. The core mechanism is unchanged: loans create deposits.")}</span>`);
    }
    if (ran && n > 0) {
      const W = 0.15 * t.dep;
      const goodLoans = t.loans * (1 - dflt / 100);
      const assets = t.res + goodLoans;
      const liquid = t.res >= W;
      const solvent = assets >= t.dep;
      lines.push(`<span class="${liquid ? "ok" : "bad"}">${T(`挤兑：储户要取 ${fmt(W)}（15%），库里准备金 ${fmt(t.res)} → ${liquid ? "拿得出，流动性充足。" : "拿不出，缺口 " + fmt(W - t.res) + "——<b>流动性不足</b>。"}`, `Run: depositors want ${fmt(W)} (15%); reserves in the vault ${fmt(t.res)} → ${liquid ? "payable, liquidity is sufficient." : "cannot pay, shortfall " + fmt(W - t.res) + " — <b>illiquid</b>."}`)}</span>`);
      lines.push(`<span class="${solvent ? "ok" : "bad"}">${T(`偿付能力：资产按真实价值 = 准备金 ${fmt(t.res)} + 好贷款 ${fmt(goodLoans)}（坏账 ${dflt}%）= ${fmt(assets)}，vs 存款 ${fmt(t.dep)} → ${solvent ? "<b>有偿付能力</b>：给时间（卖贷款、借准备金）能还清所有人。" + (liquid ? "" : "这是“暂时拿不出”，不是破产。") : "<b>资不抵债</b>，缺口 " + fmt(t.dep - assets) + "：给无限时间也还不清，任何“流动性支持”只是把损失推给以后。"}`, `Solvency: assets at true value = reserves ${fmt(t.res)} + good loans ${fmt(goodLoans)} (defaults ${dflt}%) = ${fmt(assets)}, vs deposits ${fmt(t.dep)} → ${solvent ? "<b>solvent</b>: given time (selling loans, borrowing reserves) it can pay everyone." + (liquid ? "" : " This is “cannot pay right now,” not bankruptcy.") : "<b>insolvent</b>, gap " + fmt(t.dep - assets) + ": even with unlimited time it cannot pay everyone; any “liquidity support” merely pushes the loss into the future."}`)}</span>`);
      if (!liquid && solvent) lines.push(T("这就是白芝浩式“最后贷款人”的理由——也是道德风险的入口：谁来判断这家银行只是流动性不足，而不是资不抵债？", "This is the case for a Bagehot-style lender of last resort — and the door to moral hazard: who decides that this bank is merely illiquid rather than insolvent?"));
    }
    $("bt-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  const reset = () => { n = 0; ran = false; paint(); };
  $("bt-r").addEventListener("input", (e) => { r = +e.target.value; paint(); });
  $("bt-d").addEventListener("input", (e) => { D = +e.target.value; paint(); });
  $("bt-f").addEventListener("input", (e) => { dflt = +e.target.value; paint(); });
  $("bt-step").addEventListener("click", () => { if (n < MAXN) n++; paint(); });
  $("bt-all").addEventListener("click", () => { n = MAXN; paint(); });
  $("bt-run").addEventListener("click", () => { if (n === 0) n = MAXN; ran = true; paint(); });
  $("bt-reset").addEventListener("click", reset);
  paint();
}
