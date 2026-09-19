// 交互演示：工厂与邻居的“污染法庭”。三种裁决规则——庇古税（你得填一个税率）、科斯谈判（带交易成本）、
// 严格产权 + 先占——看产量、损害、谁付钱给谁。关键：邻居的真实主观损害是一个你看不到的数。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 工厂：边际利润 100 − 2Q，利润 π(Q) = 100Q − Q²，私人最优 Q = 50
  const profit = (Q) => 100 * Q - Q * Q;
  // 邻居的“真实”边际损害 b·Q（示意——现实里连这个 b 也不存在，因为 500 户各有各的评价）
  const damage = (Q, b) => (b * Q * Q) / 2;
  const surplus = (Q, b) => profit(Q) - damage(Q, b);
  const Qstar = (k) => 100 / (2 + k); // 令 100 − 2Q = kQ

  const rng = (seed) => () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

  let rule = "pigou";
  let tax = 30;          // 庇古税率
  let guess = 1.0;       // 规划者对边际损害斜率的猜测
  let tc = 150;          // 科斯谈判的交易成本
  let holder = "factory"; // 科斯：初始权利在谁手里
  let first = "factory";  // 先占：谁先在那里
  let seed = 7, revealed = false;
  const HIST = 40;        // 工厂 1985 年的历史排放水平（先占的地役权范围）
  const drawB = () => { const r = rng(seed * 9973); return +(0.4 + r() * 2.1).toFixed(2); };
  let b = drawB();

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏭 污染法庭：三种规则，谁付钱、产多少、谁需要一个没人有的数字", "🏭 The pollution court: three rules — who pays, how much gets produced, and who needs a number nobody has")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("裁决规则", "Rule of decision")}</label>
        <div class="demo-seg" id="pc-seg">
          <button data-rule="pigou" class="on">${T("庇古税", "Pigou tax")}</button>
          <button data-rule="coase">${T("科斯谈判", "Coasean bargain")}</button>
          <button data-rule="property">${T("严格产权 + 先占", "Strict property + first use")}</button>
        </div>
      </div>
      <div class="demo-block" id="pc-pigou">
        <div class="demo-grid">
          <div>
            <label class="demo-label">${T("你（规划者）猜的边际损害斜率 a（损害 = a·Q）：", "Your (the planner's) guess for the marginal-damage slope a (damage = a·Q):")} <b id="pc-guess-v">${guess.toFixed(2)}</b></label>
            <input class="demo-slider" type="range" min="0.2" max="3" step="0.05" value="${guess}" id="pc-guess" />
          </div>
          <div>
            <label class="demo-label">${T("你定的每单位税率 t：", "The per-unit tax t you set:")} <b id="pc-tax-v">${tax}</b></label>
            <input class="demo-slider" type="range" min="0" max="100" step="1" value="${tax}" id="pc-tax" />
          </div>
        </div>
      </div>
      <div class="demo-block" id="pc-coase" hidden>
        <div class="demo-grid">
          <div>
            <label class="demo-label">${T("初始权利判给谁", "Who holds the initial right")}</label>
            <div class="demo-seg" id="pc-holder"><button data-h="factory" class="on">${T("工厂（可排烟）", "Factory (may emit)")}</button><button data-h="neighbors">${T("邻居（享清洁空气）", "Neighbors (clean air)")}</button></div>
          </div>
          <div>
            <label class="demo-label">${T("谈判的交易成本：", "Transaction cost of bargaining:")} <b id="pc-tc-v">${tc}</b></label>
            <input class="demo-slider" type="range" min="0" max="900" step="10" value="${tc}" id="pc-tc" />
          </div>
        </div>
      </div>
      <div class="demo-block" id="pc-prop" hidden>
        <label class="demo-label">${T("谁先在那里？", "Who was there first?")}</label>
        <div class="demo-seg" id="pc-first"><button data-f="factory" class="on">${T("工厂先建（1985 年荒地）", "Factory first (empty land, 1985)")}</button><button data-f="neighbors">${T("小区先在（工厂后建）", "Neighbors first (factory came later)")}</button></div>
        <div class="demo-meta">${T("工厂的历史排放水平（先占的地役权范围）：Q = " + HIST + "。邻居之后仍可自愿出钱请工厂减排（同样受交易成本影响）。", "The factory's historical emission level (extent of the homesteaded easement): Q = " + HIST + ". Neighbors may still voluntarily pay for reductions afterward (subject to the same transaction cost).")}</div>
      </div>
      <div class="demo-block" id="pc-chart"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("产量 Q", "Output Q")}</div><div class="v acc" id="pc-q">–</div></div>
        <div class="stat"><div class="k">${T("邻居实际损害", "Neighbors' actual damage")}</div><div class="v neg" id="pc-d">–</div></div>
        <div class="stat"><div class="k">${T("工厂利润", "Factory profit")}</div><div class="v" id="pc-p">–</div></div>
        <div class="stat"><div class="k">${T("谁付钱给谁", "Who pays whom")}</div><div class="v" id="pc-pay" style="font-size:13px">–</div></div>
      </div>
      <div class="demo-btns">
        <button class="demo-btn" id="pc-reveal">${T("揭开：邻居到底有多在乎（b）", "Reveal: how much the neighbors actually mind (b)")}</button>
        <button class="demo-btn" id="pc-new">${T("换一批邻居", "New neighbors")}</button>
      </div>
      <div class="demo-block"><div class="demo-log" id="pc-log"></div></div>
      <p class="demo-tip">${T(
        "在“庇古税”下先别揭开 b，试着把税率调到你认为“对”的水平——你依据的只能是你自己猜的 a。然后揭开 b，看你的税让产量偏了多少、税款去了哪（国库，不是邻居）。再切到“严格产权 + 先占”：裁决不需要 a 也不需要 b，只需要“谁先”——数字只在自愿交易里才出现。",
        "Under “Pigou tax,” do not reveal b yet — set the tax where you think it is “right.” All you have to go on is your own guess a. Then reveal b and see how far your tax pushed output off, and where the money went (the treasury, not the neighbors). Then switch to “Strict property + first use”: the ruling needs neither a nor b, only “who was first” — numbers appear only inside voluntary trades."
      )}</p>
    </div>`;

  const fmt = (x) => Math.round(x).toLocaleString();

  const paint = () => {
    root.querySelector("#pc-pigou").hidden = rule !== "pigou";
    root.querySelector("#pc-coase").hidden = rule !== "coase";
    root.querySelector("#pc-prop").hidden = rule !== "property";
    root.querySelectorAll("#pc-seg button").forEach((x) => x.classList.toggle("on", x.dataset.rule === rule));
    root.querySelectorAll("#pc-holder button").forEach((x) => x.classList.toggle("on", x.dataset.h === holder));
    root.querySelectorAll("#pc-first button").forEach((x) => x.classList.toggle("on", x.dataset.f === first));
    root.querySelector("#pc-guess-v").textContent = guess.toFixed(2);
    root.querySelector("#pc-tax-v").textContent = tax;
    root.querySelector("#pc-tc-v").textContent = tc;

    let Q = 50, pay = "", payAmt = 0, dir = 0, lines = [], needsNumber = ""; // dir: +1 工厂收钱, −1 工厂付钱
    const Qb = Qstar(b); // 若谈判发生，双方以真实评价谈出的产量

    if (rule === "pigou") {
      Q = Math.max(0, (100 - tax) / 2);
      const Qa = Qstar(guess), tStar = guess * Qa;
      const rev = tax * Q;
      pay = `${T("工厂 → 国库", "Factory → treasury")} ${fmt(rev)}`;
      payAmt = rev; dir = -1;
      lines.push(`${T("按你猜的 a =", "With your guess a =")} ${guess.toFixed(2)}${T("，“社会最优”产量应为", ", the “socially optimal” output would be")} <b>${Qa.toFixed(1)}</b>${T("，对应税率 ≈", ", implying a tax ≈")} <b>${tStar.toFixed(1)}</b>${T("。你定的税率", ". Your tax of")} ${tax} ${T("让工厂选了 Q =", "makes the factory choose Q =")} <b>${Q.toFixed(1)}</b>。`);
      lines.push(`<span class="warn">${T("税款", "The revenue")} ${fmt(rev)} ${T("进了国库。邻居得到的补偿：0。庇古税修正的是工厂的账，不是任何人的权利。", "went to the treasury. Compensation received by the neighbors: 0. A Pigovian tax corrects the factory's books, not anyone's rights.")}</span>`);
      if (revealed) {
        const off = Q - Qb;
        lines.push(`<span class="${Math.abs(off) < 3 ? "ok" : "bad"}">${T("揭开后：邻居的真实 b =", "Revealed: the neighbors' actual b =")} ${b}${T("，按它算的产量是", ", which would put output at")} ${Qb.toFixed(1)}${T("；你的税让产量偏了", "; your tax pushed output off by")} <b>${off > 0 ? "+" : ""}${off.toFixed(1)}</b>${T("。你猜对了吗？而且——现实里连这个 b 也不存在，500 户人各有各的 b。", ". Did you guess right? And remember: in reality even this b does not exist — 500 households each have their own.")}</span>`);
      } else {
        lines.push(`${T("你现在看不到邻居的真实评价 b——这正是庇古税设计者每天面对的处境。", "You cannot see the neighbors' real valuation b right now — exactly the situation every designer of a Pigovian tax is in.")}`);
      }
      needsNumber = T("需要一个数字：边际损害 a（没人有）", "Needs a number: marginal damage a (nobody has it)");
    } else if (rule === "coase") {
      if (holder === "factory") {
        const gain = surplus(Qb, b) - surplus(50, b);
        if (gain > tc) {
          Q = Qb;
          const lo = profit(50) - profit(Qb), hi = damage(50, b) - damage(Qb, b);
          payAmt = (lo + hi) / 2;
          pay = `${T("邻居 → 工厂", "Neighbors → factory")} ${fmt(payAmt)}`; dir = 1;
          lines.push(`<span class="ok">${T("谈判成立：减产的损害节省", "Bargain struck: damage saved by cutting output")} (${fmt(hi)}) ${T("大于工厂的利润损失", "exceeds the factory's lost profit")} (${fmt(lo)})${T("，净收益", ", net gain")} ${fmt(gain)} ${T("> 交易成本", "> transaction cost")} ${tc}${T("。邻居掏钱买减产，产量到", ". The neighbors buy a cut; output goes to")} ${Qb.toFixed(1)}。</span>`);
        } else {
          Q = 50; pay = T("无人付钱", "nobody pays");
          lines.push(`<span class="bad">${T("谈判失败：净收益", "No bargain: the net gain")} ${fmt(Math.max(0, gain))} ${T("< 交易成本", "< transaction cost")} ${tc}${T("。工厂按自己的最优产 50，邻居承受全部损害。", ". The factory produces its private optimum of 50; the neighbors bear all the damage.")}</span>`);
        }
      } else {
        const gain = surplus(Qb, b) - 0;
        if (gain > tc) {
          Q = Qb;
          const lo = damage(Qb, b), hi = profit(Qb);
          payAmt = (lo + hi) / 2;
          pay = `${T("工厂 → 邻居", "Factory → neighbors")} ${fmt(payAmt)}`; dir = -1;
          lines.push(`<span class="ok">${T("谈判成立：工厂为前", "Bargain struck: the factory buys permission for the first")} ${Qb.toFixed(1)} ${T("单位的排放向邻居购买许可（付款介于损害", "units of emission (payment between the damage")} ${fmt(lo)} ${T("与利润", "and the profit")} ${fmt(hi)} ${T("之间）。", "in between).")}</span>`);
        } else {
          Q = 0; pay = T("无人付钱", "nobody pays");
          lines.push(`<span class="bad">${T("谈判失败：工厂关门，Q = 0。", "No bargain: the factory shuts, Q = 0.")}</span>`);
        }
      }
      lines.push(`${T("注意：谈判用的是双方的<b>真实</b>评价——这正是奥派的点：主观成本只在交易里显露。科斯定理成立时，权利判给谁不改变产量，只改变谁付钱。", "Note: the bargain runs on both sides' <b>actual</b> valuations — exactly the Austrian point: subjective costs reveal themselves only in exchange. When the Coase theorem holds, who gets the right changes who pays, not how much is produced.")}`);
      lines.push(`<span class="warn">${T("但当交易成本挡住谈判时，科斯式法官要“把权利判给能让总产出最大的一方”——他需要知道 b。他不知道。", "But when transaction costs block the bargain, the Coasean judge must “assign the right to the party that maximizes total product” — he needs to know b. He does not.")}</span>`);
      needsNumber = T("谈判成立时不需要数字；谈判失败时法官需要 b（没人有）", "No number needed if the bargain happens; if it fails the judge needs b (nobody has it)");
    } else {
      if (first === "factory") {
        // 工厂先占了 HIST 水平的排烟地役权；超过 HIST 的部分是新的侵入 → 停在 HIST
        Q = Math.min(50, HIST);
        lines.push(`${T("裁决：工厂 1985 年建在荒地上，烟未侵入任何人的财产——先占了 Q =", "Ruling: the factory was built on empty land in 1985; its smoke invaded nobody — it homesteaded an easement up to Q =")} ${HIST} ${T("的排烟地役权。2015 年的小区“走向了妨害”，不能要求停产；但工厂也不能扩产到 50 把新的烟推进已有财产——所以 Q =", "of emissions. The 2015 estate “came to the nuisance” and cannot demand a shutdown; but the factory cannot expand to 50 and push new smoke into now-occupied property either — so Q =")} <b>${Q}</b>。`);
        // 邻居可自愿购买减排
        const gain = surplus(Qb, b) - surplus(HIST, b);
        if (Qb < HIST && gain > tc) {
          const lo = profit(HIST) - profit(Qb), hi = damage(HIST, b) - damage(Qb, b);
          payAmt = (lo + hi) / 2; Q = Qb;
          pay = `${T("邻居 → 工厂（自愿）", "Neighbors → factory (voluntary)")} ${fmt(payAmt)}`; dir = 1;
          lines.push(`<span class="ok">${T("之后邻居自愿出钱请工厂减到", "Afterward the neighbors voluntarily pay the factory to cut to")} ${Qb.toFixed(1)}${T("——这是交易，不是裁决；数字第一次出现，且只出现在双方的自愿同意里。", " — a trade, not a ruling; a number appears for the first time, and only inside mutual consent.")}</span>`);
        } else {
          pay = T("无人付钱（裁决不需要数字）", "nobody pays (the ruling needs no number)");
          lines.push(`${T("邻居没有出钱减排（收益不够覆盖交易成本，或他们不够在乎）。这不是“无效率”，只是没人愿意为此付钱——而这本身就是信息。", "The neighbors did not buy a reduction (the gain does not cover the transaction cost, or they do not mind enough). That is not “inefficiency”; it is simply that nobody chose to pay — which is itself information.")}`);
        }
      } else {
        lines.push(`${T("裁决：小区先在，院子是居民的财产；工厂后建，第一缕烟就是物理侵入 → 禁令：Q = 0，无论工厂利润多高、雇了多少人。", "Ruling: the estate was first; the yards are the residents' property. The factory came later; the first wisp is a physical invasion → injunction: Q = 0, whatever the factory's profit or payroll.")}`);
        Q = 0;
        const gain = surplus(Qb, b);
        if (gain > tc) {
          const lo = damage(Qb, b), hi = profit(Qb);
          payAmt = (lo + hi) / 2; Q = Qb;
          pay = `${T("工厂 → 邻居（购买地役权）", "Factory → neighbors (buys an easement)")} ${fmt(payAmt)}`; dir = -1;
          lines.push(`<span class="ok">${T("之后工厂向居民购买排烟地役权，谈到 Q =", "Afterward the factory buys a smoke easement from the residents, bargaining to Q =")} ${Qb.toFixed(1)}${T("。产量与科斯“邻居持权”的情形一样——但理由完全不同：不是因为这样“有效率”，而是因为居民同意了。", ". Output matches the Coasean “neighbors hold the right” case — but for an entirely different reason: not because it is “efficient,” but because the residents consented.")}</span>`);
        } else {
          pay = T("无人付钱（工厂关门）", "nobody pays (factory closed)");
          lines.push(`<span class="warn">${T("工厂没能买到地役权（交易成本太高或居民要价太高）。奥派的回答：那就关门——产权不是效率估算的函数。", "The factory could not buy an easement (transaction cost too high, or the residents' price too high). The Austrian answer: then it closes — property is not a function of efficiency estimates.")}</span>`);
        }
      }
      needsNumber = T("裁决不需要任何数字：只查“谁先”与“是否侵入”", "The ruling needs no number: only “who first” and “was there an invasion”");
    }

    // 图：边际利润 vs 规划者猜的边际损害 vs（揭开后）真实边际损害
    const fns = [{ f: (q) => 100 - 2 * q, cls: "line2", label: "MB" }];
    if (rule === "pigou") fns.push({ f: (q) => guess * q, cls: "line3" });
    if (revealed) fns.push({ f: (q) => b * q, cls: "line" });
    const res = lineChart({ fns, lo: 0, hi: 50, xlabel: T("产量 Q", "Output Q"), markerX: Q, markerLabel: "Q = " + Q.toFixed(1), forceZero: true, uid: "pc" });
    const legend = [["var(--blue)", T("工厂边际利润 100−2Q", "Factory marginal profit 100−2Q")]];
    if (rule === "pigou") legend.push(["var(--red)", T("你猜的边际损害 a·Q", "Your guessed marginal damage a·Q")]);
    if (revealed) legend.push(["var(--orange)", T("邻居真实边际损害 b·Q", "Neighbors' actual marginal damage b·Q")]);
    root.querySelector("#pc-chart").innerHTML = chartBlock(res, legend);

    root.querySelector("#pc-q").textContent = Q.toFixed(1);
    root.querySelector("#pc-d").textContent = revealed ? fmt(damage(Q, b)) : "???";
    root.querySelector("#pc-p").textContent = fmt(profit(Q) + dir * payAmt);
    root.querySelector("#pc-pay").textContent = pay;
    lines.push(`<b>${needsNumber}</b>`);
    root.querySelector("#pc-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
    root.querySelector("#pc-reveal").textContent = revealed ? `b = ${b} ${T("（已揭开）", "(revealed)")}` : T("揭开：邻居到底有多在乎（b）", "Reveal: how much the neighbors actually mind (b)");
  };

  root.querySelectorAll("#pc-seg button").forEach((x) => x.addEventListener("click", () => { rule = x.dataset.rule; paint(); }));
  root.querySelectorAll("#pc-holder button").forEach((x) => x.addEventListener("click", () => { holder = x.dataset.h; paint(); }));
  root.querySelectorAll("#pc-first button").forEach((x) => x.addEventListener("click", () => { first = x.dataset.f; paint(); }));
  root.querySelector("#pc-guess").addEventListener("input", (e) => { guess = +e.target.value; paint(); });
  root.querySelector("#pc-tax").addEventListener("input", (e) => { tax = +e.target.value; paint(); });
  root.querySelector("#pc-tc").addEventListener("input", (e) => { tc = +e.target.value; paint(); });
  root.querySelector("#pc-reveal").addEventListener("click", () => { revealed = true; paint(); });
  root.querySelector("#pc-new").addEventListener("click", () => { seed += 1; b = drawB(); revealed = false; paint(); });
  paint();
}
