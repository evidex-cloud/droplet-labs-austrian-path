// 交互演示：自由银行沙盘。4 家发钞银行，各自设定“发行倍数”（票据 / 黄金准备）。
// 每回合：票据被花掉并存入各行 → 清算所按净额结算黄金 → 准备金率过低的银行遭挤兑。
// 读者控制甲行；可切换“央行兜底”（最后贷款人 + 存款保险）看清算纪律怎么消失。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const NAMES = [T("甲行（你）", "Bank A (you)"), T("乙行", "Bank B"), T("丙行", "Bank C"), T("丁行", "Bank D")];
  const GOLD0 = 100;         // 每家初始黄金
  const SPEND = 0.5;         // 每回合被花掉并存入各行的票据比例
  const RUN_AT = 0.12;       // 准备金率低于此 → 挤兑
  const ROUNDS = 40;

  let mult = [3.0, 3.0, 3.0, 3.0]; // 各行发行倍数（票据 = 倍数 × 黄金）
  let backstop = false;      // 央行兜底
  let rivalMode = "prudent"; // 同行策略：prudent（稳健 3×）/ herd（跟随你）/ greedy（各自 5×）

  // 模拟 ROUNDS 回合，返回每回合各行黄金、票据、是否挤兑、清算净额，以及总票据（物价指数代理）
  function simulate() {
    const gold = [GOLD0, GOLD0, GOLD0, GOLD0];
    const failed = [false, false, false, false];
    const m = mult.slice();
    if (rivalMode === "herd") for (let i = 1; i < 4; i++) m[i] = m[0];
    if (rivalMode === "greedy") for (let i = 1; i < 4; i++) m[i] = 5.0;
    const hist = { gold: [], notes: [], net: [], failed: [], total: [], cbInject: [], mult: [] };
    let cbTotal = 0;
    for (let t = 0; t < ROUNDS; t++) {
      // 无央行：票据 = 倍数 × 自有黄金（准备金是硬约束）
      // 有央行：准备金不再约束发行，票据 = 倍数 × 初始黄金；且没有惩罚 → 各行逐回合向最高倍数看齐
      if (backstop && t > 0) { const top = Math.min(8, Math.max(...m) + 0.5); for (let i = 0; i < 4; i++) if (i !== 0 || rivalMode === "herd") m[i] = Math.min(top, m[i] + 0.08); }
      const notes = gold.map((g, i) => (failed[i] ? 0 : Math.max(0, m[i] * (backstop ? GOLD0 : g))));
      const tot = notes.reduce((a, b) => a + b, 0);
      const alive = failed.filter((f) => !f).length;
      // 花掉的票据平均存入各存活银行：流出比例 (alive−1)/alive，流入为他行票据的 1/alive
      const net = notes.map((n, i) => {
        if (failed[i] || alive <= 1) return 0;
        const out = n * SPEND * ((alive - 1) / alive);
        const inflow = (tot - n) * SPEND * (1 / alive);
        return inflow - out; // 正 = 净收黄金
      });
      let inject = 0;
      for (let i = 0; i < 4; i++) {
        if (failed[i]) continue;
        gold[i] += net[i];
        if (backstop) {
          // 最后贷款人：准备金不足时央行注入到最低水平；存款保险：永不挤兑
          const need = Math.max(0, GOLD0 * 0.4 - gold[i]);
          gold[i] += need; inject += need;
        } else {
          const ratio = notes[i] > 0 ? gold[i] / notes[i] : 1;
          if (gold[i] <= 0 || ratio < RUN_AT) { failed[i] = true; gold[i] = Math.max(0, gold[i]); }
        }
      }
      cbTotal += inject;
      hist.gold.push(gold.slice()); hist.notes.push(notes); hist.net.push(net); hist.failed.push(failed.slice()); hist.total.push(tot); hist.cbInject.push(cbTotal); hist.mult.push(m.slice());
    }
    return { hist, m: hist.mult[ROUNDS - 1] };
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏦 自由银行沙盘：四家发钞行、一个清算所、一个可开关的央行", "🏦 Free-banking sandbox: four note-issuing banks, one clearinghouse, one central bank you can switch on")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("你的发行倍数（甲行票据 ÷ 黄金）：", "Your issue multiple (Bank A notes ÷ gold):")} <b id="bc-m-v">${mult[0].toFixed(1)}×</b></label>
          <input class="demo-slider" type="range" min="1" max="8" step="0.1" value="${mult[0]}" id="bc-m" />
          <div class="demo-meta">${T("1× = 100% 准备（仓库银行）；3× = 苏格兰式稳健部分准备；8× = 疯狂超发。", "1× = 100% reserves (a warehouse bank); 3× = Scottish-style prudent fractional reserve; 8× = reckless over-issue.")}</div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("同行的策略", "Rival banks' strategy")}</label>
          <div class="demo-seg" id="bc-rival">
            <button data-r="prudent" class="on">${T("稳健 3×", "Prudent 3×")}</button>
            <button data-r="herd">${T("跟你一起发", "Follow you")}</button>
            <button data-r="greedy">${T("各自 5×", "Each 5×")}</button>
          </div>
          <div style="margin-top:12px"><label class="demo-label">${T("央行兜底", "Central-bank backstop")}</label>
          <div class="demo-seg" id="bc-cb"><button data-cb="0" class="on">${T("无央行（清算纪律）", "No central bank (clearing discipline)")}</button><button data-cb="1">${T("最后贷款人 + 存款保险", "Lender of last resort + deposit insurance")}</button></div></div>
        </div>
      </div>
      <div class="demo-block" id="bc-banks"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("你的黄金（第 40 回合）", "Your gold (round 40)")}</div><div class="v" id="bc-g">–</div></div>
        <div class="stat"><div class="k">${T("你每回合净结算", "Your net settlement / round")}</div><div class="v" id="bc-net">–</div></div>
        <div class="stat"><div class="k">${T("挤兑的银行", "Banks run on")}</div><div class="v neg" id="bc-fail">–</div></div>
        <div class="stat"><div class="k">${T("总票据（物价代理）", "Total notes (price proxy)")}</div><div class="v acc" id="bc-tot">–</div></div>
      </div>
      <div class="demo-block" id="bc-chart"></div>
      <div class="demo-block"><div class="demo-log" id="bc-log"></div></div>
      <p class="demo-tip">${T(
        "先把你的倍数拉到 6×，同行“稳健 3×”：看你的黄金每回合被清算所抽走，几回合就挤兑——没有监管者，同行的兑付要求管住了你。再选“跟你一起发”：清算净额归零，谁也不流失黄金，可总票据翻倍——这是 100% 派的攻击点“一起超发”。最后打开“央行兜底”：无论你发多少，永远不挤兑，总票据一路上涨——纪律消失了。",
        "First push your multiple to 6× with rivals on “Prudent 3×”: watch the clearinghouse drain your gold and run you out within a few rounds — no regulator, just your rivals' redemption demands. Then pick “Follow you”: net clearings go to zero, nobody loses gold, yet total notes double — the 100 percent camp's attack, “over-issuing together.” Finally switch on the backstop: however much you issue, no run ever comes and total notes climb without limit — discipline has vanished."
      )}</p>
    </div>`;

  const fmt = (x) => (Math.round(x * 10) / 10).toLocaleString();

  const paint = () => {
    root.querySelector("#bc-m-v").textContent = mult[0].toFixed(1) + "×";
    root.querySelectorAll("#bc-rival button").forEach((b) => b.classList.toggle("on", b.dataset.r === rivalMode));
    root.querySelectorAll("#bc-cb button").forEach((b) => b.classList.toggle("on", (b.dataset.cb === "1") === backstop));

    const { hist, m } = simulate();
    const last = ROUNDS - 1;
    const failRound = [0, 1, 2, 3].map((i) => { const r = hist.failed.findIndex((f) => f[i]); return r < 0 ? null : r + 1; });
    const maxG = Math.max(GOLD0, ...hist.gold[last]);

    root.querySelector("#bc-banks").innerHTML = [0, 1, 2, 3].map((i) => {
      const g = hist.gold[last][i], n = hist.notes[last][i];
      const ratio = n > 0 ? g / n : 1;
      const dead = failRound[i] != null;
      const color = dead ? "var(--red)" : ratio >= 0.3 ? "var(--green)" : "var(--orange)";
      return `<div class="bar2">
        <span class="lab" style="width:110px;${i === 0 ? "font-weight:700;color:var(--orange-ink)" : ""}">${NAMES[i]} · ${m[i].toFixed(1)}×</span>
        <div class="track"><div class="fill" style="width:${Math.max(0, (g / maxG) * 100).toFixed(1)}%;background:${color}"></div></div>
        <span class="val" style="width:150px;text-align:left">${dead ? `<span class="pill bad">${T("第", "run, round ")}${failRound[i]}${T(" 回合挤兑", "")}</span>` : `${T("黄金", "gold")} ${fmt(g)} · ${T("准备率", "reserve")} ${(ratio * 100).toFixed(0)}%`}</span>
      </div>`;
    }).join("");

    const myNet = hist.net[0][0];
    root.querySelector("#bc-g").textContent = fmt(hist.gold[last][0]);
    root.querySelector("#bc-net").textContent = (myNet >= 0 ? "+" : "") + fmt(myNet);
    root.querySelector("#bc-net").className = "v " + (myNet >= 0 ? "pos" : "neg");
    const nFail = failRound.filter((x) => x != null).length;
    root.querySelector("#bc-fail").textContent = `${nFail} / 4`;
    root.querySelector("#bc-tot").textContent = `${fmt(hist.total[last])} (${T("初始", "start")} ${fmt(hist.total[0])})`;

    // 图：各行黄金轨迹 + 总票据
    const gf = (i) => (x) => hist.gold[Math.min(last, Math.max(0, Math.round(x)))][i];
    const res = lineChart({
      fns: [{ f: gf(0), cls: "line" }, { f: gf(1), cls: "line2" }, { f: gf(2), cls: "line4" }, { f: gf(3), cls: "line3" }],
      lo: 0, hi: last, xlabel: T("回合", "Round"), forceZero: true, uid: "bc", H: 220,
    });
    root.querySelector("#bc-chart").innerHTML = chartBlock(res, [["var(--orange)", NAMES[0] + " " + T("黄金", "gold")], ["var(--blue)", NAMES[1]], ["var(--green)", NAMES[2]], ["var(--red)", NAMES[3]]]);

    const lines = [];
    const avgRival = (m[1] + m[2] + m[3]) / 3;
    if (!backstop) {
      if (mult[0] > avgRival + 0.3) {
        lines.push(`<span class="${failRound[0] ? "bad" : "warn"}">${T("你比同行多发：你的票据流入他行，清算所每回合向你要黄金 ≈", "You issue more than your rivals: your notes pile up at their counters, and the clearinghouse takes gold from you each round ≈")} ${fmt(-myNet)}${failRound[0] ? T("。第 ", ". Run on you at round ") + failRound[0] + T(" 回合准备率跌破 12%，挤兑。", " when your reserve ratio fell below 12%.") : T("。你还撑着，但每回合都在失血。", ". You are still standing, but bleeding every round.")}</span>`);
      } else if (mult[0] < avgRival - 0.3) {
        lines.push(`<span class="ok">${T("你比同行发得少：他行票据流入你这里，清算所每回合给你黄金 ≈", "You issue less than your rivals: their notes flow to you, and the clearinghouse pays you gold each round ≈")} ${fmt(myNet)}${T("。稳健者在没有任何监管者的情况下被奖励。", ". Prudence is rewarded with no regulator in sight.")}</span>`);
      } else {
        lines.push(`<span class="warn">${T("你和同行发得一样多：清算净额 ≈ 0，谁也不流失黄金。", "You and your rivals issue alike: net clearings ≈ 0 and nobody loses gold.")} ${mult[0] > 3.5 ? T("但总票据是黄金的 " + mult[0].toFixed(1) + " 倍——这就是 100% 派说的“一起超发”：清算管不住同步扩张。", "But total notes are " + mult[0].toFixed(1) + "× the gold — the 100 percent camp's “over-issuing together”: clearing cannot check synchronized expansion.") : T("在 3× 附近，这大致是苏格兰式的稳健部分准备。", "Around 3× this is roughly Scottish-style prudent fractional reserve.")}</span>`);
      }
      if (rivalMode === "greedy" && mult[0] <= 3) lines.push(`${T("同行各发 5×，你 3×：他们的票据涌向你，你的黄金上升，他们轮流挤兑——清算纪律在惩罚超发者，正如 1772 年艾尔银行。", "Rivals at 5×, you at 3×: their notes flood into you, your gold rises, and they get run on one by one — clearing discipline punishing over-issuers, as with the Ayr Bank in 1772.")}`);
    } else {
      lines.push(`<span class="bad">${T("央行兜底已开启：准备金不足时央行注入（本局累计注入 ≈", "Backstop on: the central bank injects reserves whenever a bank runs short (cumulative this run ≈")} ${fmt(hist.cbInject[last])}${T("），存款保险让储户永不挤兑。你可以发 8× 而毫发无损——清算纪律还在算，但它的后果被拆掉了。", "), and deposit insurance means depositors never run. You can issue at 8× and lose nothing — clearing still computes, but its consequences have been removed.")}</span>`);
      lines.push(`${T("总票据从", "Total notes went from")} ${fmt(hist.total[0])} ${T("到", "to")} ${fmt(hist.total[last])}${T("：这就是阶段 4.3 的坎蒂隆效应——先拿到新票据的人受益，最后拿到的人面对涨过的物价。两派奥派在这一点上一致：央行把不稳定社会化了。", ": the Cantillon effect of Stage 4.3 — whoever gets new notes first gains; whoever gets them last faces prices that have already risen. Both Austrian camps agree here: the central bank socializes the instability.")}`);
    }
    if (mult[0] <= 1.05 && !backstop) lines.push(`<span class="ok">${T("1× = 100% 准备：你是一家仓库银行，永远不会被挤兑，但也不发行任何信用媒介——罗斯巴德/德索托的方案。信用只能来自储户明确让渡的定期资金。", "1× = 100% reserves: you are a warehouse bank, immune to runs, issuing no fiduciary media at all — the Rothbard/Huerta de Soto model. Credit can come only from term funds depositors explicitly surrender.")}</span>`);
    root.querySelector("#bc-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#bc-m").addEventListener("input", (e) => { mult[0] = +e.target.value; paint(); });
  root.querySelectorAll("#bc-rival button").forEach((b) => b.addEventListener("click", () => { rivalMode = b.dataset.r; paint(); }));
  root.querySelectorAll("#bc-cb button").forEach((b) => b.addEventListener("click", () => { backstop = b.dataset.cb === "1"; paint(); }));
  paint();
}
