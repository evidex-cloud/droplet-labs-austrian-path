// 交互演示：平台翻转沙盘——两个平台从 50/50 起步争夺“用户”与“商户”两边；跨边网络效应让市场向一边倾斜（tipping）。
// 拖动质量、抽成、多归属成本、跨边效应强度；再放一个产品更好的进入者进来，看会不会再翻转；
// 打开“国家护城河”（牌照）开关，进入者被挡在门外——这是奥派真正担心的那种垄断。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const NU = 300, NS = 150, ROUNDS = 24, TH = 0.5, SEED = 0.08;
  const rng = (seed) => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };

  // 参数
  let qA = 6, qB = 5, qC = 8, feeA = 2, mh = 6, beta = 5, moat = false, entrant = false;

  // 三个平台：A、B 两家在位者从 50/50 起步；C 是进入者
  const plats = () => [
    { id: "A", q: qA, feeS: feeA, on: true },
    { id: "B", q: qB, feeS: 1, on: true },
    { id: "C", q: qC, feeS: 0.5, on: entrant && !moat },
  ];

  // 每个代理人对每个平台的个人口味 ε（主观、异质）
  const r = rng(4242);
  const tasteU = Array.from({ length: NU }, () => [r() * 2.4 - 1.2, r() * 2.4 - 1.2, r() * 2.4 - 1.2]);
  const tasteS = Array.from({ length: NS }, () => [r() * 2.4 - 1.2, r() * 2.4 - 1.2, r() * 2.4 - 1.2]);

  // 一轮：给定上一轮各平台两边的“在场份额”，每个代理人重新选择。
  // 效用 = 质量 + 跨边网络效应 − 费用 + 个人口味。超过门槛 TH 才加入；主用效用最高的那家；
  // 其余平台只有在“效用 − 多归属成本”仍超过门槛时才顺便也用（多归属）。商户的多归属成本按一半计。
  const step = (P, presU, presS) => {
    const primU = [0, 0, 0], nU = [0, 0, 0], primS = [0, 0, 0], nS = [0, 0, 0];
    let welfare = 0, multiU = 0;
    for (let i = 0; i < NU; i++) {
      const u = P.map((p, k) => (p.on ? 0.5 * (p.q - 5) + 0.8 * beta * presS[k] + tasteU[i][k] : -Infinity));
      const best = u.indexOf(Math.max(...u));
      if (u[best] > TH) {
        primU[best]++; nU[best]++; welfare += u[best];
        let extra = 0;
        u.forEach((v, k) => { if (k !== best && v - mh > TH) { nU[k]++; extra++; } });
        if (extra) multiU++;
      }
    }
    for (let j = 0; j < NS; j++) {
      const v = P.map((p, k) => (p.on ? 0.3 * (p.q - 5) + 0.8 * beta * presU[k] - 0.6 * p.feeS + tasteS[j][k] : -Infinity));
      const best = v.indexOf(Math.max(...v));
      if (v[best] > TH) {
        primS[best]++; nS[best]++;
        v.forEach((x, k) => { if (k !== best && x - 0.5 * mh > TH) nS[k]++; });
      }
    }
    return { primU: primU.map((n) => n / NU), presU: nU.map((n) => n / NU), primS: primS.map((n) => n / NS), presS: nS.map((n) => n / NS), welfare: welfare / NU, multiU: multiU / NU };
  };

  const simulate = () => {
    const P = plats();
    let presU = [0.5, 0.5, 0], presS = [0.5, 0.5, 0];
    const hist = [{ primU: presU, presU, primS: presS, presS, welfare: 0, multiU: 0 }];
    const advance = (PP) => {
      const s = step(PP, presU, presS);
      // 带惯性的更新：人们不是一夜之间全搬家
      presU = presU.map((v, k) => 0.5 * v + 0.5 * s.presU[k]);
      presS = presS.map((v, k) => 0.5 * v + 0.5 * s.presS[k]);
      hist.push(s);
    };
    // 阶段一：两家在位者从 50/50 起步，跑到稳态
    for (let t = 0; t < ROUNDS; t++) advance(P.map((p) => ({ ...p, on: p.id !== "C" })));
    const split = hist.length - 1;
    const lead = hist[split].primU[0] >= hist[split].primU[1] ? 0 : 1;
    // 阶段二：进入者带着 8% 的种子进来（企业家补贴），再跑
    if (entrant && !moat) {
      presU = [presU[0], presU[1], SEED]; presS = [presS[0], presS[1], SEED];
      for (let t = 0; t < ROUNDS; t++) advance(P);
    }
    return { hist, split, lead, P };
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⚖️ 平台翻转沙盘：赢家通吃，还是赢家多吃一点？", "⚖️ Platform-tipping sandbox: winner-take-all, or winner-takes-a-bit-more?")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("平台 A 的产品质量（B 固定为 5）", "Platform A's product quality (B fixed at 5)")}：<b id="pt-qA">${qA}</b></label>
          <input class="demo-slider" data-p="qA" type="range" min="1" max="10" step="0.5" value="${qA}" />
          <label class="demo-label">${T("A 对商户的抽成/费用（B 固定为 1）", "A's fee charged to merchants (B fixed at 1)")}：<b id="pt-feeA">${feeA}</b></label>
          <input class="demo-slider" data-p="feeA" type="range" min="0" max="8" step="0.5" value="${feeA}" />
          <label class="demo-label">${T("跨边网络效应强度 β", "Cross-side network-effect strength β")}：<b id="pt-beta">${beta}</b></label>
          <input class="demo-slider" data-p="beta" type="range" min="0" max="10" step="0.5" value="${beta}" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("多归属成本（同时用两个平台有多麻烦）", "Multi-homing cost (how painful to use two at once)")}：<b id="pt-mh">${mh}</b></label>
          <input class="demo-slider" data-p="mh" type="range" min="0" max="10" step="0.5" value="${mh}" />
          <label class="demo-label">${T("进入者 C 的产品质量", "Entrant C's product quality")}：<b id="pt-qC">${qC}</b></label>
          <input class="demo-slider" data-p="qC" type="range" min="1" max="10" step="0.5" value="${qC}" />
          <div class="demo-btns">
            <button class="demo-btn" id="pt-enter">${T("放一个进入者进来", "Let an entrant in")}</button>
            <button class="demo-btn" id="pt-moat">${T("国家护城河：进入需牌照", "State moat: entry needs a license")}</button>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("稳态份额：用户按“主用哪家”计，商户按“在不在场”计（多归属时商户份额之和可超过 100%）", "Steady-state shares: users by primary platform, merchants by presence (with multi-homing the merchant shares can sum past 100%)")}</label>
        <div id="pt-bars"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("领先者的用户份额", "Leader's user share")}</div><div class="v" id="pt-sA">–</div></div>
          <div class="stat"><div class="k">${T("多归属用户比例", "Multi-homing users")}</div><div class="v" id="pt-multi">–</div></div>
          <div class="stat"><div class="k">${T("用户平均效用（消费者被服务得如何）", "Avg. user utility (how well consumers are served)")}</div><div class="v acc" id="pt-wel">–</div></div>
        </div>
        <div class="demo-log" id="pt-log"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("用户主用份额随轮次的变化", "Primary user shares round by round")}</label>
        <div id="pt-chart"></div>
      </div>
      <p class="demo-tip">${T(
        "先看默认：两家从 50/50 起步，十几轮后市场翻向一边——这就是 tipping。第一步：放进入者进来（多归属成本 6）——哪怕它质量 8 对 6，也起不来（冷启动，阶段 15.1 的临界点）。第二步：把多归属成本拖到 2 再看：用户“顺便试试”，商户跟着挂两个平台，然后市场再翻转。第三步：把 A 对商户的抽成拉到 5 以上，看抽成太狠的一方在翻转赛跑里直接出局。最后打开“国家护城河”——无论进入者多好，份额纹丝不动，用户平均效用停在低位。这才是奥派说的垄断。",
        "First the default: two platforms start at 50/50 and within a dozen rounds the market tips to one side — that is tipping. Step 1: let the entrant in (multi-homing cost 6) — even at quality 8 vs 6 it cannot start (cold start: the Stage 15.1 tipping point). Step 2: drag multi-homing cost to 2: users “try it on the side,” merchants list on both, and the market re-tips. Step 3: push A's merchant fee above 5 and watch the side that squeezes hardest lose the tipping race outright. Finally switch on the state moat — however good the entrant, shares do not move and average user utility stays low. That is what Austrians mean by monopoly."
      )}</p>
    </div>`;

  const pct = (x) => (x * 100).toFixed(0) + "%";
  const paint = () => {
    for (const k of ["qA", "feeA", "beta", "mh", "qC"]) root.querySelector(`#pt-${k}`).textContent = ({ qA, feeA, beta, mh, qC })[k];
    root.querySelector("#pt-enter").classList.toggle("active", entrant);
    root.querySelector("#pt-moat").classList.toggle("active", moat);
    const { hist, split, lead, P } = simulate();
    const last = hist[hist.length - 1], pre = hist[split];
    const L = P[lead].id, other = P[1 - lead].id;
    const colors = ["var(--orange)", "var(--blue)", "var(--green)"];
    root.querySelector("#pt-bars").innerHTML = P.map((p, k) => `
      <div class="bar2"><span class="lab">${p.id} ${T("用户", "users")}</span><div class="track"><div class="fill" style="width:${(last.primU[k] * 100).toFixed(0)}%;background:${colors[k]};opacity:${p.on ? 1 : 0.25}"></div></div><span class="val">${p.on ? pct(last.primU[k]) : T("被挡", "blocked")}</span></div>
      <div class="bar2"><span class="lab">${p.id} ${T("商户", "merchants")}</span><div class="track"><div class="fill" style="width:${(last.presS[k] * 100).toFixed(0)}%;background:${colors[k]};opacity:${p.on ? 0.6 : 0.15}"></div></div><span class="val">${p.on ? pct(last.presS[k]) : T("被挡", "blocked")}</span></div>`).join("");
    root.querySelector("#pt-sA").textContent = `${L} ${pct(pre.primU[lead])} → ${pct(last.primU[lead])}`;
    root.querySelector("#pt-multi").textContent = pct(last.multiU);
    root.querySelector("#pt-wel").textContent = last.welfare.toFixed(2);

    // 翻转用了几轮：领先者主用份额首次超过 80%
    let tipRound = null;
    for (let t = 1; t <= split; t++) if (hist[t].primU[lead] >= 0.8) { tipRound = t; break; }

    const lines = [];
    lines.push(`${T("阶段一（两家在位者从 50/50 起步）：", "Phase 1 (two incumbents from 50/50): ")}${L} ${pct(pre.primU[lead])} / ${other} ${pct(pre.primU[1 - lead])}${tipRound ? ` — <span class="warn">${T(`第 ${tipRound} 轮翻向 ${L}，“赢家通吃”`, `tipped to ${L} by round ${tipRound} — “winner-take-all”`)}</span>` : ` — ${T("没有完全翻转：网络效应不够强，两家并存", "no full tip: network effects too weak, both coexist")}`}`);
    if (lead === 1 && feeA >= 4) lines.push(`<span class="warn">${T("注意：质量更高的 A 输了翻转赛跑——它对商户抽得太狠，商户先去了 B，跨边效应再把用户带过去。双边市场里价格结构决定胜负（罗歇–梯若尔）。", "Note: the higher-quality A lost the tipping race — it squeezed merchants too hard, merchants went to B first, and the cross-side effect pulled users after them. In two-sided markets the price structure decides (Rochet–Tirole).")}</span>`);
    if (moat) {
      lines.push(`<span class="bad">${T(`国家护城河打开：进入者需要牌照，拿不到。无论它质量多高，${L} 的份额一格不动——它的地位不再由消费者每天投票维持，而由一纸规定维持。这才是阶段 6.4 定义的垄断。`, `State moat on: the entrant needs a license it cannot get. However high its quality, ${L}'s share does not move — its position is no longer maintained by consumers' daily votes but by a piece of paper. This is monopoly as defined in Stage 6.4.`)}</span>`);
    } else if (entrant) {
      const cU = last.primU[2];
      if (cU < 0.1 && last.presU[2] < 0.15) lines.push(`<span class="bad">${mh > 3
        ? T(`进入者失败：8% 的种子撑不过冷启动，停在 ${pct(cU)}。多归属成本 ${mh} 太高，用户必须“二选一”，没人愿意先跳——这是阶段 15.1 的临界点问题，不是垄断。试试把多归属成本降到 2，或把 C 的质量拉到 10。`, `Entrant failed: an 8% seed could not survive the cold start, stalling at ${pct(cU)}. Multi-homing cost ${mh} is too high, users must pick one, and nobody jumps first — the Stage 15.1 tipping problem, not monopoly. Try multi-homing cost 2, or C's quality at 10.`)
        : T(`进入者失败：多归属很便宜，但 C 的质量（${qC}）不够好，“顺便试试”的人试完就走了——消费者主权在起作用：不够好的进入者本来就不该赢。把 C 的质量拉高再试。`, `Entrant failed: multi-homing is cheap, but C's quality (${qC}) is not good enough — the “try it on the side” users tried it and left. Consumer sovereignty at work: an entrant that is not better should not win. Raise C's quality and try again.`)}</span>`);
      else if (cU > last.primU[lead]) lines.push(`<span class="ok">${T(`再翻转：进入者 C 拿到 ${pct(cU)} 的主用用户，超过了 ${L}（${pct(last.primU[lead])}）。“不可撼动”的网络效应被更好的产品加上足够低的多归属成本打穿了——MySpace、诺基亚、IE 走的都是这条路。`, `Re-tipped: entrant C holds ${pct(cU)} of primary users, ahead of ${L} (${pct(last.primU[lead])}). “Unassailable” network effects were pierced by a better product plus a low enough multi-homing cost — the road MySpace, Nokia and IE all went down.`)}</span>`);
      else lines.push(`<span class="warn">${T(`部分翻转：C 站稳了 ${pct(cU)}，${L} 保住 ${pct(last.primU[lead])}。多归属让市场从“赢家通吃”变成“赢家多吃一点”——几家并存，每家都必须继续做得好。`, `Partial tip: C holds ${pct(cU)}, ${L} keeps ${pct(last.primU[lead])}. Multi-homing turned “winner-take-all” into “winner-takes-a-bit-more” — several coexist, and each must keep doing well.`)}</span>`);
      if (last.multiU > 0.1) lines.push(T(`多归属用户占 ${pct(last.multiU)}：他们在不放弃旧平台的情况下试用新平台——这正是进入者绕过冷启动的通道。`, `${pct(last.multiU)} of users multi-home: they try the new platform without abandoning the old — exactly the entrant's route around the cold start.`));
    } else {
      lines.push(T("现在放一个进入者进来，看领先者的地位是“靠消费者每天投票”还是“靠门被锁上”。", "Now let an entrant in and see whether the leader's position rests on consumers' daily votes or on a locked door."));
    }
    lines.push(`${T("用户平均效用：", "Avg. user utility: ")}${pre.welfare.toFixed(2)} → ${last.welfare.toFixed(2)}${last.welfare > pre.welfare + 0.05 ? ` <span class="ok">${T("（消费者被服务得更好了）", "(consumers are served better)")}</span>` : ""}`);
    root.querySelector("#pt-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");

    const n = hist.length - 1;
    const at = (k) => (t) => { const i = Math.max(0, Math.min(n, Math.round(t))); return hist[i].primU[k] * 100; };
    const res = lineChart({
      fns: [{ f: at(0), cls: "line" }, { f: at(1), cls: "line2" }, { f: at(2), cls: "line4" }],
      lo: 0, hi: n, xlabel: T("轮次", "round"), forceZero: true, uid: "pt",
      markerX: entrant && !moat ? split : null, markerLabel: entrant && !moat ? T("进入者进场", "entrant arrives") : "",
    });
    root.querySelector("#pt-chart").innerHTML = chartBlock(res, [["var(--orange)", "A"], ["var(--blue)", "B"], ["var(--green)", "C"]]);
  };

  root.querySelectorAll("[data-p]").forEach((sl) => sl.addEventListener("input", () => {
    const v = +sl.value;
    if (sl.dataset.p === "qA") qA = v; if (sl.dataset.p === "feeA") feeA = v; if (sl.dataset.p === "beta") beta = v;
    if (sl.dataset.p === "mh") mh = v; if (sl.dataset.p === "qC") qC = v;
    paint();
  }));
  root.querySelector("#pt-enter").addEventListener("click", () => { entrant = !entrant; paint(); });
  root.querySelector("#pt-moat").addEventListener("click", () => { moat = !moat; paint(); });
  paint();
}
