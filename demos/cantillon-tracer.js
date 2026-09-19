// 交互演示：坎蒂隆追踪器——把一笔新钱注入某个点（银行 / 政府 / 家庭），
// 逐轮追踪它流向哪些群体、哪些部门的价格先涨、谁的实际购买力赚了/赔了。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 五个群体：各自的“正常年收入”（基数，总货币 1000）、卖什么、买什么（价格篮子权重）
  const GROUPS = {
    bank: { name: T("银行与资产持有者", "Banks & asset holders"), base: 250, sells: T("金融资产、房产", "financial assets, real estate"), basket: { firm: 0.45, wage: 0.25, bank: 0.3 } },
    gov: { name: T("政府承包商", "Government contractors"), base: 150, sells: T("基建、国防、医疗合同", "infrastructure, defense, healthcare contracts"), basket: { firm: 0.5, wage: 0.3, bank: 0.2 } },
    firm: { name: T("企业（尤其大企业）", "Firms (esp. large)"), base: 300, sells: T("消费品、资本品", "consumer & capital goods"), basket: { firm: 0.4, wage: 0.4, bank: 0.2 } },
    wage: { name: T("工薪族", "Wage earners"), base: 250, sells: T("劳动（工资）", "labor (wages)"), basket: { firm: 0.6, wage: 0.25, bank: 0.15 } },
    pension: { name: T("养老金领取者与储蓄者", "Pensioners & savers"), base: 50, sells: T("（没有新收入来源）", "(no new income source)"), basket: { firm: 0.7, wage: 0.3, bank: 0 } },
  };
  const CHAINS = {
    bank: ["bank", "firm", "gov", "wage", "pension"],
    gov: ["gov", "bank", "firm", "wage", "pension"],
    households: ["wage", "firm", "bank", "gov", "pension"],
  };
  const ROUNDS = 6, PASS = 0.75, PRICE_K = 0.35;
  let inj = "bank", size = 100, round = 0;

  // 计算到第 t 轮为止各群体累计收到的新钱
  const simulate = () => {
    const chain = CHAINS[inj];
    const received = chain.map(() => Array(ROUNDS + 1).fill(0)); // received[i][t] = 第 t 轮收到
    received[0][1] = size;
    for (let t = 2; t <= ROUNDS; t++) for (let i = 1; i < chain.length; i++) received[i][t] = received[i - 1][t - 1] * PASS;
    // 养老金领取者：只在最后一轮拿到一点“生活成本调整”
    const cum = (i, t) => received[i].slice(0, t + 1).reduce((a, b) => a + b, 0);
    const out = {};
    chain.forEach((g, i) => { out[g] = { cum: (t) => (g === "pension" ? (t >= ROUNDS ? size * 0.02 : 0) : cum(i, t)), pos: i + 1 }; });
    return out;
  };
  const priceOf = (g, t, sim) => 1 + PRICE_K * (sim[g].cum(t) / GROUPS[g].base);
  const basketOf = (g, t, sim) => Object.entries(GROUPS[g].basket).reduce((s, [k, w]) => s + w * priceOf(k, t, sim), 0);

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔍 坎蒂隆追踪器：一笔新钱从哪儿进、流到谁手里、谁赚谁赔", "🔍 Cantillon tracer: where new money enters, whose hands it reaches, who gains and who pays")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <div class="demo-row">
            <span class="demo-label" style="margin:0">${T("注入点", "Injection point")}</span>
            <div class="demo-seg" id="ct-inj">
              <button data-v="bank" class="on">${T("银行体系", "Banking system")}</button>
              <button data-v="gov">${T("政府支出", "Government spending")}</button>
              <button data-v="households">${T("家庭（直接发钱）", "Households (direct)")}</button>
            </div>
          </div>
          <label class="demo-label" style="margin-top:10px">${T("注入规模（经济体货币总量 1,000）：", "Injection size (economy's money stock = 1,000):")} <b id="ct-size-v">$100</b></label>
          <input class="demo-slider" type="range" min="20" max="300" step="10" value="100" id="ct-size" />
          <div class="demo-btns">
            <button class="demo-btn" id="ct-next">${T("下一轮 →", "Next round →")}</button>
            <button class="demo-btn" id="ct-all">${T("跑完 6 轮", "Run all 6 rounds")}</button>
            <button class="demo-btn" id="ct-reset">${T("重置", "Reset")}</button>
          </div>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("轮次", "Round")}</div><div class="v" id="ct-round">0</div></div>
            <div class="stat"><div class="k">${T("价格篮子平均涨幅", "Avg basket price rise")}</div><div class="v acc" id="ct-avg">–</div></div>
            <div class="stat"><div class="k">${T("首站 vs 末站实际购买力差", "Real gap: first vs last station")}</div><div class="v neg" id="ct-gap">–</div></div>
          </div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("各部门价格指数（起点 100）——按新钱到达的先后排列", "Sector price indexes (start = 100), ordered by when the money arrives")}</label>
          <div id="ct-bars"></div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("谁赚了、谁赔了：名义收入增加 vs 面对的物价上涨 → 实际购买力变化", "Who gained, who lost: nominal income gain vs the prices they face → change in real purchasing power")}</label>
        <div style="overflow-x:auto"><table id="ct-table" style="width:100%;border-collapse:collapse;font-size:13.5px"></table></div>
        <div class="demo-log" id="ct-log" style="margin-top:10px"></div>
      </div>
      <p class="demo-tip">${T(
        "按“下一轮”慢慢走：第 1 轮只有首站的价格动了，其它全是 100——这就是“资产先涨、CPI 不动”的阶段。跑到第 6 轮，看最后一行：养老金领取者没拿到一分新钱，却面对全部涨价，实际购买力是负的。切换注入点，赢家的名单会换，但<strong>总有人在链条末端</strong>。把注入规模拉大，差距按比例放大——通胀“温和”只是让再分配慢一点，不是没有。",
        "Step through with “Next round”: in round 1 only the first station's price moves and everything else sits at 100 — the “assets up, CPI flat” phase. Run to round 6 and read the last row: pensioners received not a cent of new money yet face the full price rise, so their real purchasing power is negative. Switch injection points and the list of winners changes, but <strong>someone is always at the end of the chain</strong>. Raise the injection size and the gap scales up — “mild” inflation only slows the redistribution; it does not remove it."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const pct = (x, sign = true) => (sign && x > 0 ? "+" : "") + (x * 100).toFixed(1) + "%";

  const paint = () => {
    $("ct-size-v").textContent = "$" + size;
    $("ct-round").textContent = round;
    const sim = simulate();
    const chain = CHAINS[inj];
    const sellers = chain.filter((g) => g !== "pension");
    const prices = sellers.map((g) => priceOf(g, round, sim) * 100);
    const maxP = Math.max(130, ...prices) + 5;
    $("ct-bars").innerHTML = sellers.map((g, i) => `<div class="bar2"><span class="lab" style="${i === 0 ? "color:var(--orange-ink);font-weight:700" : ""}">${i + 1}. ${GROUPS[g].sells}</span><div class="track"><div class="fill" style="width:${(prices[i] / maxP) * 100}%;background:var(--orange);opacity:${1 - i * 0.18}"></div></div><span class="val">${prices[i].toFixed(1)}</span></div>`).join("");

    const rows = chain.map((g, i) => {
      const income = sim[g].cum(round) / GROUPS[g].base;
      const basket = basketOf(g, round, sim) - 1;
      const real = (1 + income) / (1 + basket) - 1;
      return { g, i, income, basket, real };
    });
    const avgBasket = rows.reduce((s, r) => s + r.basket, 0) / rows.length;
    $("ct-avg").textContent = pct(avgBasket);
    $("ct-gap").textContent = pct(rows[0].real - rows[rows.length - 1].real);
    const th = (t) => `<th style="text-align:left;padding:6px 8px;border-bottom:1px solid var(--line);color:var(--muted);font-weight:600;font-size:12px">${t}</th>`;
    const td = (t, style = "") => `<td style="padding:6px 8px;border-bottom:1px solid var(--line-soft);${style}">${t}</td>`;
    $("ct-table").innerHTML = `<tr>${th(T("站", "Station"))}${th(T("群体", "Group"))}${th(T("累计拿到新钱", "New money received"))}${th(T("名义收入 +", "Nominal income"))}${th(T("面对的物价 +", "Prices faced"))}${th(T("实际购买力", "Real purchasing power"))}</tr>` +
      rows.map((r) => `<tr>${td(r.i + 1)}${td("<b>" + GROUPS[r.g].name + "</b>")}${td("$" + sim[r.g].cum(round).toFixed(0))}${td(pct(r.income))}${td(pct(r.basket))}${td(`<span class="pill ${r.real >= 0 ? "ok" : "bad"}">${pct(r.real)}</span>`)}</tr>`).join("");

    const lines = [];
    if (round === 0) lines.push(T("还没注入。点“下一轮”，新钱先出现在第 1 站。", "Nothing injected yet. Click “Next round” and the new money appears at station 1."));
    else {
      const first = rows[0], last = rows[rows.length - 1];
      if (round === 1) lines.push(`<span class="warn">${T(`第 1 轮：只有 ${GROUPS[first.g].name} 拿到了 $${size}，${GROUPS[first.g].sells} 的价格涨到 ${prices[0].toFixed(1)}。其它所有价格还是 100——按 CPI 的定义，此刻“没有通胀”。`, `Round 1: only ${GROUPS[first.g].name} received $${size}; the price of ${GROUPS[first.g].sells} rose to ${prices[0].toFixed(1)}. Every other price is still 100 — by the CPI definition there is “no inflation” right now.`)}</span>`);
      else lines.push(T(`第 ${round} 轮：新钱已流到第 ${Math.min(round, chain.length)} 站。首站 ${GROUPS[first.g].name} 名义收入 ${pct(first.income)}，面对物价 ${pct(first.basket)}，实际 <b>${pct(first.real)}</b>。`, `Round ${round}: the money has reached station ${Math.min(round, chain.length)}. First station ${GROUPS[first.g].name}: nominal income ${pct(first.income)}, prices faced ${pct(first.basket)}, real <b>${pct(first.real)}</b>.`));
      if (round >= 3) lines.push(`<span class="bad">${T(`${GROUPS[last.g].name}：拿到 $${sim[last.g].cum(round).toFixed(0)} 的新钱，面对物价 ${pct(last.basket)}，实际购买力 <b>${pct(last.real)}</b>。他们是坎蒂隆链的净支付者。`, `${GROUPS[last.g].name}: received $${sim[last.g].cum(round).toFixed(0)} of new money, face prices ${pct(last.basket)}, real purchasing power <b>${pct(last.real)}</b>. They are the net payers of the Cantillon chain.`)}</span>`);
      if (round >= ROUNDS) lines.push(`<span class="ok">${T(`跑完：平均物价涨了 ${pct(avgBasket)}——如果你只看这个平均数，会以为“大家都承受了 ${pct(avgBasket)}”。实际上首站赚了 ${pct(first.real)}，末站赔了 ${pct(last.real)}。通胀永远是再分配。`, `Done: average prices rose ${pct(avgBasket)} — look only at that average and you would think “everyone bore ${pct(avgBasket)}.” In fact the first station gained ${pct(first.real)} and the last lost ${pct(last.real)}. Inflation is always redistribution.`)}</span>`);
    }
    $("ct-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("ct-inj").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    inj = b.dataset.v; round = 0;
    $("ct-inj").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    paint();
  }));
  $("ct-size").addEventListener("input", (e) => { size = +e.target.value; paint(); });
  $("ct-next").addEventListener("click", () => { if (round < ROUNDS) round++; paint(); });
  $("ct-all").addEventListener("click", () => { round = ROUNDS; paint(); });
  $("ct-reset").addEventListener("click", () => { round = 0; paint(); });
  paint();
}
