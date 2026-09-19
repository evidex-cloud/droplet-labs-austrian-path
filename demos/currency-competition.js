// 交互演示：货币竞争沙盘——四种发行者（银行存款 / 全额储备稳定币 / 部分储备稳定币 / 可编程 CBDC）
// 争夺四类用户（储蓄、汇款、隐私、收益）。逐轮运行，可加冲击（挤兑 / 制裁 / 通胀），可切换“法偿特权”。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const ISSUERS = {
    bank: { name: T("银行存款（法币，部分准备）", "Bank deposit (fiat, fractional)"), color: "var(--blue)",
      base: { safety: 0.85, yield: 1.0, privacy: 0.35, cost: 3.0, accept: 0.9 }, liquid: 0.12 },
    full: { name: T("全额储备稳定币（国债 100%）", "Fully-backed stablecoin (100% T-bills)"), color: "var(--orange)",
      base: { safety: 0.9, yield: 0.0, privacy: 0.55, cost: 0.3, accept: 0.5 }, liquid: 1.0 },
    frac: { name: T("部分储备稳定币（付息）", "Fractional stablecoin (pays yield)"), color: "var(--red)",
      base: { safety: 0.6, yield: 4.5, privacy: 0.55, cost: 0.3, accept: 0.45 }, liquid: 0.4 },
    cbdc: { name: T("CBDC（可编程）", "CBDC (programmable)"), color: "var(--green)",
      base: { safety: 0.98, yield: 0.0, privacy: 0.0, cost: 0.1, accept: 0.8 }, liquid: 1.0 },
  };
  const USERS = {
    saver: { name: T("储蓄者", "Savers"), w: { safety: 3.0, yield: 1.2, privacy: 0.4, cost: 0.2, accept: 0.8 } },
    remit: { name: T("汇款者", "Remitters"), w: { safety: 1.0, yield: 0.2, privacy: 0.5, cost: 3.0, accept: 1.5 } },
    priv: { name: T("隐私需求者", "Privacy seekers"), w: { safety: 1.0, yield: 0.3, privacy: 3.5, cost: 0.5, accept: 0.6 } },
    yld: { name: T("收益追逐者", "Yield chasers"), w: { safety: 0.8, yield: 3.0, privacy: 0.3, cost: 0.3, accept: 0.4 } },
  };
  const keys = Object.keys(ISSUERS), ukeys = Object.keys(USERS);

  let round = 0, legal = false, log = [];
  let share = {}, damage = {}, depegged = {};
  const reset = () => { round = 0; log = []; share = {}; damage = {}; depegged = {}; for (const k of keys) { share[k] = 0.25; damage[k] = 0; depegged[k] = false; } };
  reset();

  const attrs = (k, shock) => {
    const a = { ...ISSUERS[k].base };
    a.safety = Math.max(0, a.safety - damage[k]);
    if (legal) { if (k === "bank" || k === "cbdc") a.accept = Math.min(1, a.accept + 0.15); else a.accept = Math.max(0, a.accept - 0.2); }
    if (shock === "run") { if (k === "frac") { a.safety -= 0.5; a.yield = 0; } if (k === "bank") a.safety -= 0.2; }
    if (shock === "sanction") { if (k === "cbdc" || k === "full" || k === "bank") { a.privacy = 0; a.safety -= 0.15; } }
    if (shock === "inflation") { if (k === "bank" || k === "cbdc") a.yield -= 8; else a.yield -= 8 * 0.9; /* 美元稳定币也承受美元通胀，示意略低 */ }
    if (shock === "cbdc-program") { if (k === "cbdc") { a.yield -= 2; a.privacy = 0; } }
    return a;
  };
  const score = (u, a) => {
    const w = USERS[u].w;
    return w.safety * a.safety + w.yield * (a.yield / 5) + w.privacy * a.privacy - w.cost * (a.cost / 3) + w.accept * a.accept;
  };

  function runRound(shock) {
    round++;
    const target = {}; for (const k of keys) target[k] = 0;
    const byUser = {};
    for (const u of ukeys) {
      const s = keys.map((k) => Math.exp(2.2 * score(u, attrs(k, shock))));
      const sum = s.reduce((x, y) => x + y, 0);
      byUser[u] = {};
      keys.forEach((k, i) => { byUser[u][k] = s[i] / sum; target[k] += s[i] / sum / ukeys.length; });
    }
    // 网络惯性：份额只向目标移动一半（阶段 15.1）
    const prev = { ...share };
    for (const k of keys) share[k] = 0.5 * prev[k] + 0.5 * target[k];
    // 赎回压力：流出 / 可即时变现的储备
    const stress = {}; let backstopped = false;
    for (const k of keys) {
      const outflow = Math.max(0, prev[k] - share[k]);
      // 小于 2 个百分点的份额漂移视为正常流动，不算挤兑
      stress[k] = prev[k] > 0 && outflow > 0.02 ? outflow / (prev[k] * ISSUERS[k].liquid) : 0;
      if (stress[k] > 1 && !depegged[k]) {
        if (k === "bank") { backstopped = true; damage[k] += 0.05; } // 央行兜底：不脱锚，代价社会化
        else { depegged[k] = true; damage[k] += 0.3; }
      }
    }
    const lines = [];
    const shockName = { run: T("挤兑冲击", "Bank-run shock"), sanction: T("制裁冲击", "Sanctions shock"), inflation: T("通胀冲击", "Inflation shock"), "cbdc-program": T("CBDC 启用负利率/编程", "CBDC activates negative rate/programming") }[shock] || T("平静的一轮", "A calm round");
    lines.push(`<b>${T("第", "Round")} ${round} ${T("轮", "")}</b> · ${shockName}${legal ? " · " + T("法偿特权开启", "legal-tender privilege on") : ""}`);
    const top = keys.slice().sort((a, b) => share[b] - share[a])[0];
    lines.push(`${T("份额领先：", "Leading share: ")}<span style="color:${ISSUERS[top].color};font-weight:700">${ISSUERS[top].name}</span> ${(share[top] * 100).toFixed(0)}%`);
    for (const k of keys) {
      if (k === "bank" && stress[k] > 1) { lines.push(`<span class="warn">${ISSUERS[k].name}：${T("赎回压力", "redemption stress")} ${(stress[k] * 100).toFixed(0)}% > 100% → ${T("央行最后贷款人兜底，存活——代价由全社会承担（阶段 4.5）", "central bank acts as lender of last resort; survives — the cost is socialized (Stage 4.5)")}</span>`); continue; }
      if (stress[k] > 1) lines.push(`<span class="bad">${ISSUERS[k].name}：${T("赎回压力", "redemption stress")} ${(stress[k] * 100).toFixed(0)}% > 100% → ${depegged[k] ? T("脱锚/暂停兑付，信誉受损", "depeg / suspension, reputation damaged") : ""}</span>`);
      else if (stress[k] > 0.5) lines.push(`<span class="warn">${ISSUERS[k].name}：${T("赎回压力", "redemption stress")} ${(stress[k] * 100).toFixed(0)}%${T("，靠可即时变现的储备撑住", ", held by liquid reserves")}</span>`);
    }
    if (shock === "run") lines.push(T("挤兑打在储备不足或流动性差的发行者身上：全额国债储备的稳定币与 CBDC 不受影响——这就是阶段 4.4 的“没钱 vs 没资产”。", "A run hits issuers with thin or illiquid reserves: the fully T-bill-backed stablecoin and the CBDC are untouched — Stage 4.4's “illiquid vs insolvent.”"));
    if (shock === "sanction") lines.push(T("制裁揭示了“可冻结”的代价：凡是有发行方、能被命令的货币都失去隐私用户。这是阶段 8.4 与 7.4 的规则 vs 命令。", "Sanctions reveal the cost of “freezable”: every money with an issuer that can be commanded loses privacy users. Stage 8.4 and Stage 7.4's rules vs commands."));
    if (shock === "inflation") lines.push(T("通胀惩罚一切以该法币计价的资产——包括盯住它的稳定币（示意略轻）。真正的逃生口是换单位，而市场至今没有这样做（阶段 17.3 ⑤）。", "Inflation punishes everything denominated in that fiat — including stablecoins pegged to it (slightly less here, illustratively). The real exit is changing the unit, which the market has so far not done (Stage 17.3 ⑤)."));
    if (shock === "cbdc-program") lines.push(T("CBDC 一旦启用负利率与用途限制，储蓄者与隐私用户迅速流失——除非法偿特权把他们锁住。", "Once a CBDC turns on negative rates and usage limits, savers and privacy users leave fast — unless legal-tender privilege locks them in."));
    log.unshift(lines.map((l) => `<div>${l}</div>`).join(""));
    log = log.slice(0, 6);
    paint(byUser, stress);
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏦 货币竞争沙盘：四种发行者，四类用户，谁赢？", "🏦 Currency-competition sandbox: four issuers, four user types — who wins?")}</div>
      <div class="demo-block">
        <div class="demo-btns">
          <button class="demo-btn active" data-s="">${T("运行一轮（平静）", "Run a round (calm)")}</button>
          <button class="demo-btn" data-s="run">${T("挤兑冲击", "Bank-run shock")}</button>
          <button class="demo-btn" data-s="sanction">${T("制裁冲击", "Sanctions shock")}</button>
          <button class="demo-btn" data-s="inflation">${T("通胀冲击", "Inflation shock")}</button>
          <button class="demo-btn" data-s="cbdc-program">${T("CBDC 启用编程", "CBDC programs money")}</button>
          <button class="demo-btn" id="cc-reset">${T("重置", "Reset")}</button>
        </div>
        <label class="demo-check" style="margin-top:10px"><input type="checkbox" id="cc-legal" /> ${T("法偿特权：银行存款与 CBDC 被法律指定为“必须接受”，稳定币需先兑换", "Legal-tender privilege: bank deposits and CBDC are legally “must accept”; stablecoins must be converted first")}</label>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <div class="demo-label">${T("市场份额（四类用户等权）", "Market share (four user types, equal weight)")}</div>
          <div id="cc-bars"></div>
          <div class="stat-row" id="cc-stats"></div>
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("各类用户的选择（本轮）", "Each user type's choice (this round)")}</div>
          <div id="cc-users" class="demo-meta"></div>
        </div>
      </div>
      <div class="demo-block"><div class="demo-log" id="cc-log"><span style="color:var(--muted)">${T("点“运行一轮”开始。", "Press “Run a round” to begin.")}</span></div></div>
      <p class="demo-tip">${T(
        "先平静跑三轮，看谁领先（提示：储蓄者选安全，收益追逐者选付息的部分储备币）。再点“挤兑冲击”：部分储备稳定币的赎回压力超过 100%——脱锚。再点“制裁”：所有能被命令的货币失去隐私用户。最后勾上“法偿特权”重跑：<strong>法律能给银行和 CBDC 份额，却给不了它们信誉</strong>——这是阶段 9.4 与 17.3 的全部要点。",
        "Run three calm rounds first and see who leads (hint: savers pick safety, yield chasers pick the interest-paying fractional coin). Then hit “Bank-run shock”: the fractional stablecoin's redemption stress exceeds 100% — it depegs. Then “Sanctions”: every money that can be commanded loses privacy users. Finally tick “legal-tender privilege” and rerun: <strong>the law can hand banks and the CBDC market share, but not reputation</strong> — the whole point of Stages 9.4 and 17.3."
      )}</p>
    </div>`;

  function paint(byUser, stress) {
    root.querySelector("#cc-bars").innerHTML = keys.map((k) => `
      <div class="bar2"><span class="lab" style="width:150px">${ISSUERS[k].name}</span>
        <div class="track"><div class="fill" style="width:${(share[k] * 100).toFixed(1)}%;background:${ISSUERS[k].color};opacity:${depegged[k] ? 0.45 : 1}"></div></div>
        <span class="val">${(share[k] * 100).toFixed(1)}%${depegged[k] ? " ⚠" : ""}</span></div>`).join("");
    const st = stress || {};
    root.querySelector("#cc-stats").innerHTML = `
      <div class="stat"><div class="k">${T("轮次", "Round")}</div><div class="v">${round}</div></div>
      <div class="stat"><div class="k">${T("部分储备币赎回压力", "Fractional coin stress")}</div><div class="v ${(st.frac || 0) > 1 ? "neg" : (st.frac || 0) > 0.5 ? "acc" : ""}">${((st.frac || 0) * 100).toFixed(0)}%</div></div>
      <div class="stat"><div class="k">${T("银行赎回压力", "Bank stress")}</div><div class="v ${(st.bank || 0) > 1 ? "neg" : (st.bank || 0) > 0.5 ? "acc" : ""}">${((st.bank || 0) * 100).toFixed(0)}%</div></div>
      <div class="stat"><div class="k">${T("已脱锚/暂停", "Depegged / suspended")}</div><div class="v">${keys.filter((k) => depegged[k]).length}</div></div>`;
    root.querySelector("#cc-users").innerHTML = byUser ? ukeys.map((u) => {
      const best = keys.slice().sort((a, b) => byUser[u][b] - byUser[u][a])[0];
      return `<div><b>${USERS[u].name}</b> → <span style="color:${ISSUERS[best].color};font-weight:600">${ISSUERS[best].name}</span> (${(byUser[u][best] * 100).toFixed(0)}%)</div>`;
    }).join("") : `<span style="color:var(--muted)">${T("尚未运行。", "Not run yet.")}</span>`;
    root.querySelector("#cc-log").innerHTML = log.join("<hr style='border:0;border-top:1px solid var(--line-soft);margin:4px 0'/>") || "";
  }

  root.querySelectorAll("[data-s]").forEach((b) => b.addEventListener("click", () => runRound(b.dataset.s || null)));
  root.querySelector("#cc-reset").addEventListener("click", () => { reset(); paint(); });
  root.querySelector("#cc-legal").addEventListener("change", (e) => { legal = e.target.checked; });
  paint();
}
