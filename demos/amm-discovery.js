// 交互演示：恒定乘积 AMM（x·y=k）——你对池子交易看价格怎么动；外部市场漂移、套利机器人把池子拉回去；
// 读出滑点、手续费、LP 头寸与无常损失。第二模式：算法锚定（Terra 式）为什么会自我瓦解。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);
  const FEE = 0.003;

  // ---------- AMM 状态 ----------
  const init = () => ({ x: 100, y: 200000, x0: 100, y0: 200000, fees: 0, ext: 2000, hist: [[2000, 2000]], botProfit: 0, t: 0 });
  let S = init();
  let side = "buy", amt = 5, mode = "amm";
  const spot = () => S.y / S.x;
  const k = () => S.x * S.y;

  function trade(sideNow, amount) {
    // amount: buy → 买入的 ETH 数量；sell → 卖出的 ETH 数量
    const kk = k();
    if (sideNow === "buy") {
      const dx = Math.min(amount, S.x * 0.95);
      const yNeeded = kk / (S.x - dx) - S.y;           // 不含手续费需付
      const gross = yNeeded / (1 - FEE);
      const fee = gross - yNeeded;
      const p0 = spot();
      S.x -= dx; S.y += yNeeded; S.fees += fee;
      return { dx, paid: gross, fee, eff: gross / dx, p0 };
    } else {
      const dx = amount;
      const dxNet = dx * (1 - FEE);
      const yOut = S.y - kk / (S.x + dxNet);
      const fee = dx * FEE * spot();
      const p0 = spot();
      S.x += dx; S.y -= yOut; S.fees += fee;
      return { dx, paid: -yOut, fee, eff: yOut / dx, p0 };
    }
  }
  function arbitrage() {
    // 把池内价推到外部价：目标 x' = sqrt(k/P)，y' = sqrt(kP)
    const P = S.ext, kk = k();
    const xT = Math.sqrt(kk / P);
    const before = spot();
    let profit = 0;
    if (xT < S.x) { // 池子太便宜 → 从池子买 ETH（付 USDC），在外面卖
      const dx = S.x - xT;
      const r = trade("buy", dx);
      profit = dx * P - r.paid;
    } else if (xT > S.x) { // 池子太贵 → 在外面买 ETH，卖进池子
      const dx = xT - S.x;
      const r = trade("sell", dx);
      profit = -r.paid - dx * P;
    }
    S.botProfit += profit;
    return { before, after: spot(), profit };
  }
  function tick(drift) {
    S.t++;
    const shock = drift != null ? drift : (Math.sin(S.t * 1.7) * 0.06 + (Math.random() - 0.5) * 0.08);
    S.ext = Math.max(200, S.ext * (1 + shock));
    S.hist.push([spot(), S.ext]);
    if (S.hist.length > 40) S.hist.shift();
  }

  // ---------- 算法锚定状态 ----------
  const pegInit = () => ({ ust: 1000, luna: 500, pl: 4, round: 0, ustPrice: 1, log: [] }); // 市值单位：百万美元
  let P = pegInit();
  let sell = 10, yieldPct = 20;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⚖️ x·y = k：谁在发现价格？", "⚖️ x·y = k: who is discovering the price?")}</div>
      <div class="demo-row" style="margin-bottom:10px">
        <div class="demo-seg" id="am-seg">
          <button class="on" data-m="amm">${T("恒定乘积 AMM", "Constant-product AMM")}</button>
          <button data-m="peg">${T("算法锚定模式", "Algorithmic-peg mode")}</button>
        </div>
      </div>
      <div id="am-body"></div>
      <p class="demo-tip" id="am-tip"></p>
    </div>`;
  const body = root.querySelector("#am-body"), tip = root.querySelector("#am-tip");

  function paintAMM(last) {
    const p = spot(), gap = (p / S.ext - 1) * 100;
    const lpNow = S.x * S.ext + S.y, hold = S.x0 * S.ext + S.y0;
    const il = lpNow - S.fees - hold;
    const n = S.hist.length - 1;
    const ch = lineChart({ fns: [{ f: (i) => S.hist[Math.min(n, Math.round(i))][0], cls: "line" }, { f: (i) => S.hist[Math.min(n, Math.round(i))][1], cls: "line2" }], lo: 0, hi: Math.max(1, n), samples: Math.max(1, n), xlabel: T("时间步", "Tick"), uid: "am-c" });
    body.innerHTML = `
      <div class="demo-grid">
        <div class="demo-block">
          <div class="stat-row">
            <div class="stat"><div class="k">${T("池内价 y/x", "Pool price y/x")}</div><div class="v acc">$${p.toFixed(0)}</div></div>
            <div class="stat"><div class="k">${T("外部市场价", "Outside price")}</div><div class="v">$${S.ext.toFixed(0)}</div></div>
            <div class="stat"><div class="k">${T("价差", "Gap")}</div><div class="v ${Math.abs(gap) > 1 ? "neg" : "pos"}">${gap >= 0 ? "+" : ""}${gap.toFixed(1)}%</div></div>
          </div>
          <div class="demo-meta">${T("池子", "Pool")}: <b>${S.x.toFixed(2)} ETH</b> · <b>${S.y.toFixed(0)} USDC</b> · k = ${(k() / 1e6).toFixed(2)}M</div>
          <div class="demo-row" style="margin-top:10px;gap:8px;align-items:center;flex-wrap:wrap">
            <div class="demo-seg" id="am-side"><button class="${side === "buy" ? "on" : ""}" data-s="buy">${T("买 ETH", "Buy ETH")}</button><button class="${side === "sell" ? "on" : ""}" data-s="sell">${T("卖 ETH", "Sell ETH")}</button></div>
            <span class="demo-meta">${T("数量", "Amount")}: <b id="am-amt">${amt}</b> ETH</span>
          </div>
          <input class="demo-slider" type="range" min="1" max="40" step="1" value="${amt}" id="am-amt-sl" />
          <div class="demo-btns" style="margin-top:8px">
            <button class="demo-btn" id="am-trade">${T("对池子交易", "Trade against pool")}</button>
            <button class="demo-btn" id="am-tick">${T("外部市场跳一步", "Outside market ticks")}</button>
            <button class="demo-btn" id="am-arb">${T("套利机器人出手", "Run arbitrage bot")}</button>
            <button class="demo-btn" id="am-reset">${T("重置", "Reset")}</button>
          </div>
        </div>
        <div class="demo-block">
          ${chartBlock(ch, [["var(--orange)", T("池内价", "pool price")], ["var(--blue)", T("外部市场", "outside market")]])}
          <div class="stat-row">
            <div class="stat"><div class="k">${T("LP 累计手续费", "LP fees earned")}</div><div class="v pos">$${S.fees.toFixed(0)}</div></div>
            <div class="stat"><div class="k">${T("无常损失（vs 持有）", "Impermanent loss (vs hold)")}</div><div class="v ${il < -1 ? "neg" : ""}">$${il.toFixed(0)}</div></div>
            <div class="stat"><div class="k">${T("套利者累计利润", "Arbitrageur profit")}</div><div class="v acc">$${S.botProfit.toFixed(0)}</div></div>
          </div>
        </div>
      </div>
      <div class="demo-block"><div class="demo-log" id="am-log">${last || `<span style="color:var(--muted)">${T("先交易一笔看滑点；再让外部市场跳几步——池子纹丝不动；然后放出套利机器人。", "Trade once to see slippage; tick the outside market a few times — the pool does not move; then release the arbitrage bot.")}</span>`}</div></div>`;
    tip.innerHTML = T(
      "看三件事：① 买 40 ETH 的<strong>滑点</strong>远大于买 5 ETH——那是双曲线的斜率；② 外部市场跳了三步，<strong>池内价一动不动</strong>——池子对世界一无所知；③ 套利机器人一出手，价差归零，它的利润 ≈ LP 的无常损失——<strong>那是 LP 付给知识搬运者的信息费</strong>（阶段 6.1、7.2）。",
      "Watch three things: ① <strong>slippage</strong> on buying 40 ETH is far larger than on 5 — that is the hyperbola's slope; ② the outside market ticks three times and <strong>the pool price does not move</strong> — the pool knows nothing; ③ the arbitrage bot fires, the gap closes, and its profit ≈ the LP's impermanent loss — <strong>the information fee LPs pay the knowledge-carrier</strong> (Stages 6.1, 7.2)."
    );
    body.querySelectorAll("#am-side button").forEach((b) => b.addEventListener("click", () => { side = b.dataset.s; paintAMM(last); }));
    body.querySelector("#am-amt-sl").addEventListener("input", (e) => { amt = +e.target.value; body.querySelector("#am-amt").textContent = amt; });
    body.querySelector("#am-trade").addEventListener("click", () => {
      const r = trade(side, amt);
      const slip = (r.eff / r.p0 - 1) * 100 * (side === "buy" ? 1 : -1);
      S.hist.push([spot(), S.ext]); if (S.hist.length > 40) S.hist.shift();
      paintAMM(`<div>${side === "buy" ? T("买入", "Bought") : T("卖出", "Sold")} <b>${r.dx.toFixed(2)} ETH</b>，${side === "buy" ? T("支付", "paid") : T("收到", "received")} <b>${Math.abs(r.paid).toFixed(0)} USDC</b>，${T("成交均价", "avg price")} $${r.eff.toFixed(0)}（${T("交易前现价", "spot before")} $${r.p0.toFixed(0)}）</div>
        <div><span class="${Math.abs(slip) > 5 ? "bad" : "warn"}">${T("滑点", "Slippage")} ${slip.toFixed(2)}%</span> · ${T("手续费", "fee")} $${r.fee.toFixed(0)} → LP</div>
        <div style="color:var(--muted)">${T("池子只是沿曲线移动了一步。它并没有“判断”ETH 值多少——它只是按公式收钱。", "The pool just moved one step along the curve. It made no “judgment” about what ETH is worth — it charged by formula.")}</div>`);
    });
    body.querySelector("#am-tick").addEventListener("click", () => {
      tick();
      paintAMM(`<div>${T("外部市场跳到", "Outside market moved to")} <b>$${S.ext.toFixed(0)}</b>，${T("池内价仍是", "pool price still")} <b>$${spot().toFixed(0)}</b>。</div><div class="warn">${T("池子不会自己更新：它没有边际对，没有信息。这就是“报价”与“发现”的区别（阶段 1.3）。", "The pool does not update itself: no marginal pairs, no information. That is the difference between a “quote” and a “discovery” (Stage 1.3).")}</div>`);
    });
    body.querySelector("#am-arb").addEventListener("click", () => {
      const r = arbitrage();
      S.hist.push([spot(), S.ext]); if (S.hist.length > 40) S.hist.shift();
      paintAMM(`<div>${T("套利者：池内价", "Arbitrageur: pool price")} $${r.before.toFixed(0)} → $${r.after.toFixed(0)}（${T("外部", "outside")} $${S.ext.toFixed(0)}），${T("本次利润", "profit this round")} <b class="${r.profit > 0 ? "ok" : ""}">$${r.profit.toFixed(0)}</b></div>
        <div class="ok">${T("价差被消灭了——不是公式做的，是一个警觉到价差并行动的人做的（阶段 6.1）。他把外面的知识搬进了池子。", "The gap is gone — not by the formula, but by someone alert to the gap who acted (Stage 6.1). He carried outside knowledge into the pool.")}</div>`);
    });
    body.querySelector("#am-reset").addEventListener("click", () => { S = init(); paintAMM(); });
  }

  function pegRound() {
    P.round++;
    // 收益补贴使 UST 供给膨胀（投机性需求）
    P.ust *= 1 + yieldPct / 100 / 4;
    // 抛压：赎回 R 百万 UST → 铸造 R/pl 百万枚 LUNA 并卖出；LUNA 市值不会因此增加，反而因恐慌收缩
    const R = P.ust * sell / 100;
    const capBefore = P.luna * P.pl;
    const minted = R / P.pl;
    const panic = Math.min(0.6, sell / 100 * 1.5);
    const capAfter = Math.max(0.01, capBefore * (1 - panic));
    P.luna += minted; P.ust -= R;
    P.pl = capAfter / P.luna;
    const coverage = capAfter / Math.max(P.ust, 0.01);
    P.ustPrice = coverage >= 1 ? Math.min(1, 0.97 + 0.03 * Math.min(1, coverage - 1 + 1)) : Math.max(0.02, coverage);
    const lines = [`<b>${T("第", "Round")} ${P.round}${T(" 轮", "")}</b> · ${T("赎回", "redeemed")} ${R.toFixed(0)}M UST → ${T("铸造", "minted")} ${minted.toFixed(0)}M LUNA`];
    lines.push(`LUNA ${T("市值", "market cap")} ${capBefore.toFixed(0)}M → ${capAfter.toFixed(0)}M · ${T("价格", "price")} $${P.pl.toFixed(3)} · ${T("覆盖率（LUNA 市值 / UST 供给）", "coverage (LUNA cap / UST supply)")} <b class="${coverage < 1 ? "bad" : coverage < 1.5 ? "warn" : "ok"}">${(coverage * 100).toFixed(0)}%</b>`);
    if (coverage < 1) lines.push(`<span class="bad">${T("覆盖率 < 100%：“1 UST 换 1 美元的 LUNA”在数学上已无法对所有人兑现。赎回越多、LUNA 越跌、需要铸的越多——正反馈。", "Coverage < 100%: “1 UST for $1 of LUNA” can no longer be honoured for everyone. More redemptions → lower LUNA → more minting — positive feedback.")}</span>`);
    else if (sell > 0) lines.push(`<span class="warn">${T("锚定暂时守住，但每一轮赎回都在稀释“储备”本身——储备是自己的股票。", "The peg holds for now, but every round of redemption dilutes the “reserve” itself — the reserve is its own equity.")}</span>`);
    P.log.unshift(lines.map((l) => `<div>${l}</div>`).join("")); P.log = P.log.slice(0, 5);
    paintPeg();
  }
  function paintPeg() {
    const coverage = P.luna * P.pl / Math.max(P.ust, 0.01);
    body.innerHTML = `
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("本轮抛压（赎回的 UST 比例）", "Sell pressure this round (share of UST redeemed)")}：<b id="am-sell">${sell}%</b></label>
          <input class="demo-slider" type="range" min="0" max="40" step="1" value="${sell}" id="am-sell-sl" />
          <label class="demo-label" style="margin-top:8px">${T("存款“收益”年化（吸引投机性需求）", "Deposit “yield” APY (draws speculative demand)")}：<b id="am-yield">${yieldPct}%</b></label>
          <input class="demo-slider" type="range" min="0" max="30" step="1" value="${yieldPct}" id="am-yield-sl" />
          <div class="demo-btns" style="margin-top:8px">
            <button class="demo-btn" id="am-peg-run">${T("运行一轮", "Run a round")}</button>
            <button class="demo-btn" id="am-peg-reset">${T("重置", "Reset")}</button>
          </div>
          <div class="stat-row">
            <div class="stat"><div class="k">UST ${T("价格", "price")}</div><div class="v ${P.ustPrice < 0.95 ? "neg" : "pos"}">$${P.ustPrice.toFixed(2)}</div></div>
            <div class="stat"><div class="k">UST ${T("供给", "supply")}</div><div class="v">${P.ust.toFixed(0)}M</div></div>
            <div class="stat"><div class="k">LUNA ${T("价格", "price")}</div><div class="v">$${P.pl.toFixed(3)}</div></div>
            <div class="stat"><div class="k">${T("覆盖率", "Coverage")}</div><div class="v ${coverage < 1 ? "neg" : "acc"}">${(coverage * 100).toFixed(0)}%</div></div>
          </div>
        </div>
        <div class="demo-block">
          <div class="cmp">
            <div class="cmp-cell hl"><h5>${T("第 ② 块的套利", "Arbitrage in block ②")}</h5>${T("另一端是<b>外部市场</b>：套利把外面的知识搬进池子，价差消失。", "The other side is an <b>outside market</b>: arbitrage carries knowledge in, the gap closes.")}</div>
            <div class="cmp-cell cold"><h5>${T("算法锚定的“套利”", "Algorithmic-peg “arbitrage”")}</h5>${T("另一端是<b>协议自己印的代币</b>：每次兑换都压低“储备”的价格。这不是储备，是反身性（阶段 16.5）。", "The other side is <b>a token the protocol prints itself</b>: every swap depresses the “reserve's” price. Not a reserve — reflexivity (Stage 16.5).")}</div>
          </div>
          <div class="demo-log" style="margin-top:10px" id="am-peg-log">${P.log.join("<hr style='border:0;border-top:1px solid var(--line-soft);margin:4px 0'/>") || `<span style="color:var(--muted)">${T("示意模型（单位：百万美元）。设抛压 10%，连点几轮，看覆盖率何时跌破 100%。", "Illustrative model (units: $ millions). Set sell pressure at 10% and run several rounds; watch when coverage falls below 100%.")}</span>`}</div>
        </div>
      </div>`;
    tip.innerHTML = T(
      "把“收益”拉到 20%、抛压设 10%，连跑五轮：UST 供给因补贴膨胀，而每轮赎回都在压低 LUNA——覆盖率一路下滑，某一轮跌破 100% 后就再也回不来。<strong>它按设计运行；设计本身就是一场挤兑</strong>（阶段 4.4）。",
      "Set “yield” to 20% and sell pressure to 10%, run five rounds: UST supply balloons on the subsidy while each round of redemption pushes LUNA down — coverage slides, and once it drops below 100% it never recovers. <strong>It works as designed; the design is a bank run</strong> (Stage 4.4)."
    );
    body.querySelector("#am-sell-sl").addEventListener("input", (e) => { sell = +e.target.value; body.querySelector("#am-sell").textContent = sell + "%"; });
    body.querySelector("#am-yield-sl").addEventListener("input", (e) => { yieldPct = +e.target.value; body.querySelector("#am-yield").textContent = yieldPct + "%"; });
    body.querySelector("#am-peg-run").addEventListener("click", pegRound);
    body.querySelector("#am-peg-reset").addEventListener("click", () => { P = pegInit(); paintPeg(); });
  }

  root.querySelectorAll("#am-seg button").forEach((b) => b.addEventListener("click", () => {
    root.querySelectorAll("#am-seg button").forEach((x) => x.classList.toggle("on", x === b));
    mode = b.dataset.m; mode === "amm" ? paintAMM() : paintPeg();
  }));
  paintAMM();
}
