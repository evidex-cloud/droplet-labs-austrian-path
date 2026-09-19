// 交互演示：迷因市场——300 个各有目的的行动人交易一种资产：各自有“基本面”估计，但按社会影响权重
// 追随价格趋势与人群情绪；保证金让他们借钱买，利率是借钱的成本与持有风险资产的机会成本；
// 价格由买卖压力形成，保证金追缴触发强制平仓；看泡沫怎么起、怎么破、谁最后拿着筹码；对照“无杠杆”跑法。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const N = 300, STEPS = 120, P0 = 20, DEPTH = 250; // DEPTH：市场深度（每 120 股净买盘推价约 e 倍）
  let social = 0.6;   // 社会影响强度 0–1
  let margin = 1.5;   // 保证金可得性：可借 = margin × 自有资金
  let rate = 1.0;     // 年利率 %
  let seedBase = 5;

  let seed = 1;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const gauss = () => (rnd() + rnd() + rnd() + rnd() - 2) * 1.2;

  function run(s, lev) {
    seed = s;
    const A = Array.from({ length: N }, () => {
      const f = P0 * (0.75 + 0.5 * rnd());
      return {
        f,                                                           // 各自的“基本面”估计
        w: Math.min(1, Math.max(0, 0.1 + 0.9 * rnd() * rnd() * 1.6)),  // 社会影响权重（偏态：多数人中低，少数人很高）
        cash: 100, sh: 0, debt: 0, entry: -1, liq: false, burned: false,
      };
    });
    const wk = rate / 100 / 52;
    const hurdle = 1 + rate / 100 * 2.5;                             // 利率越高，持有风险资产的门槛越高（有替代品了）
    const levEff = lev * Math.max(0, 1 - rate / 100 * 8);            // 利率越高，券商给的杠杆越少、借钱越贵
    let P = P0, Pprev = P0, attention = 0.05, prevLongs = 0;
    const path = [P0];
    let peak = P0, peakT = 0, liqCount = 0;
    for (let t = 1; t <= STEPS; t++) {
      const longs = A.filter((a) => a.sh > 0).length / N;
      const burnedShare = A.filter((a) => a.burned || a.liq).length / N;
      const mom = Math.max(-0.25, Math.min(0.25, (P - Pprev) / Pprev));
      // 注意力：涨得越快、新进场的人越多、社会影响越强，越多人“看见”这只资产；会衰减；亏过的人多了，热度封顶下降
      const cap = 1 - 0.7 * burnedShare;
      attention = Math.min(cap, 0.9 * attention + social * (Math.max(0, mom) * 2 + Math.max(0, longs - prevLongs) * 3) + 0.01);
      prevLongs = longs;
      let buy = 0, sell = 0;
      for (const a of A) {
        if (a.liq) continue;
        a.debt *= 1 + wk;                                            // 借款计息
        if (rnd() > (a.burned ? 0.03 : 0.06) + 0.3 * attention * a.w) continue;          // 本周是否行动：注意力高、爱看人群的人更常出手
        const ws = a.w * social;
        const crowd = 1 + social * (0.9 * attention + 2 * mom + 0.5 * (longs - 0.3));   // 人群：注意力、趋势、在场人数
        const b = (1 - ws) * a.f + ws * P * crowd + gauss() * 0.4;   // 信念：基本面与“别人会怎么做”的加权
        const equity = a.cash + a.sh * P - a.debt;
        const budget = Math.max(0, a.cash + levEff * Math.max(0, equity) - a.debt);
        if (b > P * hurdle && budget > P) {
          const q = Math.min(budget / P, 1 + 2 * a.w);
          const spend = q * P;
          const borrow = Math.max(0, spend - a.cash);
          a.cash -= spend - borrow; a.debt += borrow; a.sh += q;
          if (a.entry < 0) a.entry = t;
          buy += q;
        } else if (b < P * 0.96 && a.sh > 0) {
          const q = a.sh * 0.5; a.sh -= q; a.cash += q * P; sell += q;
          const rep = Math.min(a.debt, a.cash); a.debt -= rep; a.cash -= rep;
        }
        if (!a.burned && a.entry > 0 && equity < 70) { a.burned = true; a.w *= 0.4; } // 亏过的人学乖：少看人群
      }
      sell += Math.max(0, P / P0 - 1) * 8;                           // 外部供给：长期持有者在高位逐步卖出
      Pprev = P;
      P = Math.max(1, P * Math.exp((buy - sell) / DEPTH));
      // 保证金追缴：权益 < 持仓市值 × 25% → 强制平仓，卖压压低价格
      let forced = 0;
      for (const a of A) {
        if (a.liq || a.debt <= 0) continue;
        const equity = a.cash + a.sh * P - a.debt;
        if (equity < 0.25 * a.sh * P) { forced += a.sh; a.cash += a.sh * P; a.sh = 0; const rep = Math.min(a.debt, a.cash); a.debt -= rep; a.cash -= rep; a.liq = true; liqCount++; }
      }
      if (forced > 0) P = Math.max(1, P * Math.exp(-forced / DEPTH));
      path.push(P);
      if (P > peak) { peak = P; peakT = t; }
    }
    const final = P;
    const wealth = (a) => a.cash + a.sh * final - a.debt;
    const late = A.filter((a) => a.entry > peakT * 0.6 && a.entry <= peakT + 2); // 在冲顶阶段（峰值前最后 40% 时段到峰值后两周）进场
    const lateLoss = late.filter((a) => wealth(a) < 99).length;
    const early = A.filter((a) => a.entry > 0 && a.entry <= peakT * 0.6);
    const earlyWin = early.filter((a) => wealth(a) > 101).length;
    const drawdown = (peak - final) / peak;
    return { path, peak, peakT, final, drawdown, liqCount, late: late.length, lateLoss, early: early.length, earlyWin };
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔥 迷因市场：信念推价格、价格推信念——谁最后拿着筹码", "🔥 Meme market: beliefs move price, price moves beliefs — who is left holding")}</div>
      <div class="demo-grid-3">
        <div class="demo-block">
          <label class="demo-label">${T("社会影响强度：", "Social influence: ")}<b id="mm-sv">0.6</b></label>
          <input class="demo-slider" id="mm-soc" type="range" min="0" max="1" step="0.05" value="0.6" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("保证金可得性（可借 = × 自有资金）：", "Margin availability (borrow = × own equity): ")}<b id="mm-mv">1.5</b></label>
          <input class="demo-slider" id="mm-mar" type="range" min="0" max="3" step="0.25" value="1.5" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("利率（年 %）：", "Interest rate (% p.a.): ")}<b id="mm-rv">1.0</b></label>
          <input class="demo-slider" id="mm-rate" type="range" min="0" max="10" step="0.5" value="1" />
        </div>
      </div>
      <div class="demo-btns"><button class="demo-btn" id="mm-roll">${T("换一批人（重掷随机）", "New crowd (re-roll)")}</button></div>
      <div id="mm-chart"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("峰值 / 起点", "Peak / start")}</div><div class="v acc" id="mm-peak">–</div></div>
        <div class="stat"><div class="k">${T("峰值后回撤", "Drawdown from peak")}</div><div class="v neg" id="mm-dd">–</div></div>
        <div class="stat"><div class="k">${T("强制平仓人数", "Forced liquidations")}</div><div class="v" id="mm-liq">–</div></div>
        <div class="stat"><div class="k">${T("晚进场且被套", "Late entrants under water")}</div><div class="v" id="mm-late">–</div></div>
      </div>
      <div class="cmp" id="mm-cmp"></div>
      <div class="demo-block"><div class="demo-log" id="mm-log"></div></div>
      <p class="demo-tip">${T(
        "看三件事：① 把<strong>保证金</strong>拉到 0：同样的社会影响，泡沫矮得多、回撤浅得多——热情是火种，信贷是木柴（阶段 5.4、10.3）。② 把<strong>利率</strong>从 0 拉到 8%：借钱贵了、持有风险资产的门槛高了，泡沫起不来——这是 2022 年发生的事。③ 把<strong>社会影响</strong>拉到 1：反身性的循环变陡，峰值更高、崩得更快，晚进场的人几乎全被套——这一层奥派解释不了“为什么是这群人”，只能解释“为什么有木柴”。本演示不构成投资建议。",
        "Watch three things: ① drag <strong>margin</strong> to 0: same social influence, a much shorter bubble and a much shallower crash — enthusiasm is the spark, credit is the wood (Stages 5.4, 10.3). ② Raise the <strong>rate</strong> from 0 to 8%: borrowing costs more, the hurdle for holding a risk asset rises, the bubble never forms — that is what happened in 2022. ③ Push <strong>social influence</strong> to 1: the reflexive loop steepens, the peak is higher and the crash faster, and late entrants are almost all under water — the layer Austrians cannot explain (“why these people”), as opposed to the one they can (“why there was wood”). Not investment advice."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const paint = () => {
    $("mm-sv").textContent = social.toFixed(2); $("mm-mv").textContent = margin.toFixed(2); $("mm-rv").textContent = rate.toFixed(1);
    const s = seedBase * 104729 + 7;
    const R = run(s, margin), R0 = run(s, 0);
    const at = (arr) => (x) => arr[Math.min(arr.length - 1, Math.max(0, Math.round(x)))];
    const res = lineChart({ fns: [{ f: at(R.path), cls: "line" }, { f: at(R0.path), cls: "line2" }], lo: 0, hi: STEPS, samples: STEPS, xlabel: T("周", "week"), markerX: R.peakT, markerLabel: T("峰值", "peak"), forceZero: true, uid: "mm", H: 240 });
    $("mm-chart").innerHTML = chartBlock(res, [["var(--orange)", T("价格（当前设置）", "price (current settings)")], ["var(--blue)", T("价格（同一批人，无杠杆）", "price (same crowd, no leverage)")]]);

    $("mm-peak").textContent = (R.peak / P0).toFixed(1) + "×";
    $("mm-dd").textContent = (R.drawdown * 100).toFixed(0) + "%";
    $("mm-liq").textContent = R.liqCount;
    $("mm-late").textContent = R.late > 0 ? `${R.lateLoss}/${R.late}` : "0";

    const cell = (title, X, hl) => `<div class="cmp-cell ${hl ? "hl" : "cold"}"><h5>${title}</h5>
      <div class="demo-row" style="margin:4px 0"><span>${T("峰值", "Peak")}</span><b>${(X.peak / P0).toFixed(1)}×</b></div>
      <div class="demo-row" style="margin:4px 0"><span>${T("回撤", "Drawdown")}</span><b>${(X.drawdown * 100).toFixed(0)}%</b></div>
      <div class="demo-row" style="margin:4px 0"><span>${T("强平", "Liquidated")}</span><b>${X.liqCount}</b></div>
      <div class="demo-row" style="margin:4px 0"><span>${T("晚进场被套", "Late & under water")}</span><b>${X.lateLoss}/${X.late}</b></div>
      <div class="demo-row" style="margin:4px 0"><span>${T("早进场且赚钱", "Early & in profit")}</span><b>${X.earlyWin}/${X.early}</b></div></div>`;
    $("mm-cmp").innerHTML = cell(T("当前设置（保证金 ", "Current (margin ") + margin.toFixed(2) + "×)", R, true) + cell(T("同一批人，无杠杆", "Same crowd, no leverage"), R0, false);

    const lines = [];
    if (R.peak / P0 < 1.5) lines.push(`<span class="ok">${T("没有泡沫：信念的循环没有足够的燃料或足够的从众来自我放大。", "No bubble: the belief loop had neither enough fuel nor enough herding to amplify itself.")}</span>`);
    else {
      lines.push(`${T("峰值 ", "Peak ")}${(R.peak / P0).toFixed(1)}×${T("，第 ", " at week ")}${R.peakT}${T(" 周；无杠杆时同一批人只推到 ", "; with no leverage the same crowd only reached ")}${(R0.peak / P0).toFixed(1)}×。${R.peak > R0.peak * 1.3 ? `<span class="warn">${T("差额就是木柴：热情相同，信贷不同。", "The difference is the wood: same enthusiasm, different credit.")}</span>` : ""}`);
      if (R.liqCount > 0) lines.push(`<span class="bad">${T("强制平仓 ", "Forced liquidations: ")}${R.liqCount}${T(" 人——保证金追缴把下跌变成瀑布：这不是“回归基本面”，是信贷收缩（2021 年 1 月 28 日）。", " — margin calls turned a dip into a waterfall: not “reversion to fundamentals” but credit contraction (January 28, 2021).")}</span>`);
      lines.push(`${T("冲顶阶段进场（峰值前最后 40% 时段到峰值后两周）的人：", "Entrants during the run-up (last 40% of the climb through two weeks after the peak): ")}${R.lateLoss}/${R.late}${T(" 被套；早进场的人：", " under water; early entrants: ")}${R.earlyWin}/${R.early}${T(" 赚钱。反身性的循环对早到的人是发现，对晚到的人是错误——社交媒体让错误在反馈到达前传得更远。", " in profit. The reflexive loop is discovery for those who arrive early and error for those who arrive late — social media carries the error further before the feedback lands.")}`);
    }
    if (rate >= 6) lines.push(`${T("利率 ", "Rate ")}${rate}%${T("：借钱贵、持有门槛高，燃料被抽走——2022 年的剧本。", ": borrowing is dear and the hurdle is high; fuel withdrawn — the 2022 script.")}`);
    if (social >= 0.9) lines.push(`${T("社会影响接近 1：几乎人人盯着人群而不是基本面——科普尔的“大玩家”世界，从众加剧。", "Social influence near 1: nearly everyone watches the crowd rather than fundamentals — Koppl's “Big Player” world, herding intensified.")}`);
    lines.push(`<span style="color:var(--muted)">${T("每个点都是一个有目的的行动人：赚钱、归属、报复或押注结构。模型没有“群体”，只有 300 个个人和一堆木柴。", "Every dot is a purposeful actor: money, belonging, revenge or a bet on structure. The model has no “crowd,” only 300 individuals and a pile of wood.")}</span>`);
    $("mm-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("mm-soc").addEventListener("input", (e) => { social = +e.target.value; paint(); });
  $("mm-mar").addEventListener("input", (e) => { margin = +e.target.value; paint(); });
  $("mm-rate").addEventListener("input", (e) => { rate = +e.target.value; paint(); });
  $("mm-roll").addEventListener("click", () => { seedBase++; paint(); });
  paint();
}
