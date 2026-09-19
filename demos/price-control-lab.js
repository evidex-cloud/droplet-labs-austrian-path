// 交互演示：价格管制实验室——线性供需 Qd = 100 − 2P、Qs = −20 + 2P；
// 拖滑块设一个上限或下限，实时算出需求量、供给量、短缺/过剩、无谓损失；
// 再切换“谁拿到商品”的非价格分配方式（排队 / 抽签 / 关系 / 黑市），看隐性成本落到谁头上。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);
  const f1 = (v) => (Math.round(v * 10) / 10).toString();

  // 市场
  const Qd = (P) => Math.max(0, 100 - 2 * P);
  const Qs = (P) => Math.max(0, -20 + 2 * P);
  const Pd = (Q) => (100 - Q) / 2;   // 需求价（买方对第 Q 件愿付）
  const Ps = (Q) => (Q + 20) / 2;    // 供给价（第 Q 件的边际成本）
  const Pstar = 30, Qstar = 40;

  let mode = "ceiling";   // none | ceiling | floor
  let Pc = 20;
  let ration = "queue";   // queue | lottery | connections | black

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧪 价格管制实验室：上限造短缺，下限造过剩，谁来付隐性的账", "🧪 Price-control lab: ceilings make shortages, floors make surpluses — who pays the hidden bill")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="pcl-mode">
          <button data-m="none">${T("不管制", "No control")}</button>
          <button data-m="ceiling" class="on">${T("价格上限", "Ceiling")}</button>
          <button data-m="floor">${T("价格下限", "Floor")}</button>
        </div>
        <span class="demo-meta" id="pcl-eq">${T("市场均衡：P* = 30，Q* = 40", "Market equilibrium: P* = 30, Q* = 40")}</span>
      </div>
      <div class="demo-block" id="pcl-slider-wrap">
        <label class="demo-label">${T("管制价格：", "Controlled price: ")}<b id="pcl-pc">20</b></label>
        <input class="demo-slider" id="pcl-slider" type="range" min="5" max="55" step="1" value="20" />
      </div>
      <div id="pcl-chart"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("需求量 Qd", "Quantity demanded")}</div><div class="v" id="pcl-qd">–</div></div>
        <div class="stat"><div class="k">${T("供给量 Qs", "Quantity supplied")}</div><div class="v" id="pcl-qs">–</div></div>
        <div class="stat"><div class="k" id="pcl-gap-k">${T("短缺", "Shortage")}</div><div class="v neg" id="pcl-gap">–</div></div>
        <div class="stat"><div class="k">${T("实际成交", "Actually traded")}</div><div class="v acc" id="pcl-q">–</div></div>
        <div class="stat"><div class="k">${T("无谓损失", "Deadweight loss")}</div><div class="v neg" id="pcl-dwl">–</div></div>
      </div>
      <div class="demo-block" id="pcl-ration-wrap">
        <label class="demo-label">${T("价格不能分配了——那谁拿到商品？", "The price may not allocate — so who gets the good?")}</label>
        <div class="demo-seg" id="pcl-ration">
          <button data-r="queue" class="on">${T("排队", "Queue")}</button>
          <button data-r="lottery">${T("抽签", "Lottery")}</button>
          <button data-r="connections">${T("关系", "Connections")}</button>
          <button data-r="black">${T("黑市", "Black market")}</button>
        </div>
        <div class="scn" id="pcl-scn"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="pcl-log"></div></div>
      <p class="demo-tip">${T(
        "把上限从 29 一路拖到 5：<strong>实际成交</strong>一直在缩，而“省下的钱”只属于拿到商品的那一小部分人。再切换分配方式：排队把差价<strong>烧掉</strong>，抽签把差价变成<strong>中签者的横财</strong>，关系让歧视<strong>免费</strong>，黑市把差价变成<strong>风险溢价</strong>——没有一种方式让商品变多。",
        "Drag the ceiling from 29 down to 5: <strong>quantity traded</strong> keeps shrinking, and the “money saved” belongs only to the lucky few who get the good. Then switch the rationing method: queues <strong>burn</strong> the price gap, lotteries turn it into a <strong>windfall for winners</strong>, connections make discrimination <strong>free</strong>, and the black market turns it into a <strong>risk premium</strong> — not one of them makes more of the good."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const paint = () => {
    $("pcl-pc").textContent = Pc;
    $("pcl-slider-wrap").style.opacity = mode === "none" ? ".4" : "1";
    $("pcl-slider").disabled = mode === "none";

    let qd, qs, q, gap, dwl, binding;
    if (mode === "none") { qd = qs = q = Qstar; gap = 0; dwl = 0; binding = false; }
    else if (mode === "ceiling") {
      binding = Pc < Pstar;
      if (!binding) { qd = qs = q = Qstar; gap = 0; dwl = 0; }
      else { qd = Qd(Pc); qs = Qs(Pc); q = qs; gap = qd - qs; dwl = 0.5 * (Pd(q) - Ps(q)) * (Qstar - q); }
    } else {
      binding = Pc > Pstar;
      if (!binding) { qd = qs = q = Qstar; gap = 0; dwl = 0; }
      else { qd = Qd(Pc); qs = Qs(Pc); q = qd; gap = qs - qd; dwl = 0.5 * (Pd(q) - Ps(q)) * (Qstar - q); }
    }

    // 图：x = 数量，y = 价格
    const fns = [
      { f: (Q) => Pd(Q), cls: "line2" },
      { f: (Q) => Ps(Q), cls: "line" },
    ];
    if (mode !== "none") fns.push({ f: () => Pc, cls: "line3" });
    const res = lineChart({ fns, lo: 0, hi: 80, xlabel: T("数量 Q", "Quantity Q"), markerX: q, markerLabel: (mode === "none" || !binding) ? "Q* = 40" : T("成交 ", "traded ") + f1(q), forceZero: true, uid: "pcl" });
    $("pcl-chart").innerHTML = chartBlock(res, [["var(--blue)", T("需求 Qd = 100 − 2P", "Demand Qd = 100 − 2P")], ["var(--orange)", T("供给 Qs = −20 + 2P", "Supply Qs = −20 + 2P")]].concat(mode !== "none" ? [["var(--red)", T("管制价 ", "Controlled price ") + Pc]] : []));

    $("pcl-qd").textContent = f1(qd);
    $("pcl-qs").textContent = f1(qs);
    $("pcl-gap-k").textContent = mode === "floor" ? T("过剩", "Surplus") : T("短缺", "Shortage");
    $("pcl-gap").textContent = f1(gap);
    $("pcl-gap").className = "v " + (gap > 0 ? "neg" : "pos");
    $("pcl-q").textContent = f1(q) + (binding ? T("（原本 40）", " (was 40)") : "");
    $("pcl-dwl").textContent = f1(dwl);
    $("pcl-dwl").className = "v " + (dwl > 0 ? "neg" : "pos");

    // 分配方式（只在有约束力的上限下有意义）
    const rw = $("pcl-ration-wrap");
    const showRation = mode === "ceiling" && binding;
    rw.style.display = showRation ? "" : "none";
    if (showRation) {
      const fullPrice = Pd(q);            // 第 q 件商品，买方愿付的价格＝“真实价格”
      const premium = fullPrice - Pc;     // 管制价与真实价的差
      const winProb = qd > 0 ? q / qd : 0;
      let html = "";
      if (ration === "queue") {
        html = `<div class="scn-q">${T("排队：用时间付钱", "Queue: paying in time")}</div><div class="scn-meta">${T(
          "人们会一直排到“货币价 + 时间成本”等于第 " + f1(q) + " 件商品的真实价格 " + f1(fullPrice) + " 为止。每件商品的排队成本 ≈ <b>" + f1(premium) + "</b>，总计 <b>" + f1(premium * q) + "</b>——这笔钱没有流向卖家，也没有流向任何人，<b>被烧掉了</b>。拿到商品的是时间最不值钱的人，未必是最需要的人。",
          "People keep queuing until money price + time cost equals the true price of the " + f1(q) + "th unit, " + f1(fullPrice) + ". Queuing cost per unit ≈ <b>" + f1(premium) + "</b>, in total <b>" + f1(premium * q) + "</b> — none of it reaches the seller or anyone else; it is <b>burned</b>. The good goes to whoever's time is worth least, not necessarily whoever needs it most.")}</div>`;
      } else if (ration === "lottery") {
        html = `<div class="scn-q">${T("抽签 / 轮候名单：用运气付钱", "Lottery / waiting list: paying in luck")}</div><div class="scn-meta">${T(
          f1(qd) + " 个申请者争 " + f1(q) + " 件，中签率 <b>" + Math.round(winProb * 100) + "%</b>。中签者每人得到一笔隐性横财（真实价 − 管制价）≈ <b>" + f1(premium) + "</b>，总计 <b>" + f1(premium * q) + "</b>；落选者什么也没有。这是最不平等的分配之一，只是不平等藏在名单里（斯德哥尔摩的租房轮候平均约 9 年）。",
          f1(qd) + " applicants for " + f1(q) + " units: win probability <b>" + Math.round(winProb * 100) + "%</b>. Each winner receives a hidden windfall (true price − controlled price) ≈ <b>" + f1(premium) + "</b>, total <b>" + f1(premium * q) + "</b>; losers get nothing. One of the most unequal allocations there is — the inequality just hides inside a list (Stockholm's rental queue averages about 9 years).")}</div>`;
      } else if (ration === "connections") {
        html = `<div class="scn-q">${T("关系与歧视：用人情付钱", "Connections & discrimination: paying in favours")}</div><div class="scn-meta">${T(
          "卖家面对 " + f1(qd) + " 个买家却只能收同一个价，于是挑“最省心”“最像自己”的。在市场价下，拒绝一个买家要付出损失一笔生意的代价；在管制价下永远有下一个候选人——<b>歧视的代价从正数变成了 0</b>。差价 " + f1(premium) + " × " + f1(q) + " = <b>" + f1(premium * q) + "</b> 变成了内部人的特权。",
          "The seller faces " + f1(qd) + " buyers but may charge them all the same, so he picks the “least trouble” and the “most like me.” At the market price, turning a buyer away costs a lost sale; at the controlled price there is always the next applicant — <b>the cost of discriminating falls from positive to zero</b>. The gap " + f1(premium) + " × " + f1(q) + " = <b>" + f1(premium * q) + "</b> becomes insiders' privilege.")}</div>`;
      } else {
        html = `<div class="scn-q">${T("黑市：用风险付钱", "Black market: paying in risk")}</div><div class="scn-meta">${T(
          "拿到商品的人以真实价 <b>" + f1(fullPrice) + "</b> 转卖（官方价 " + Pc + "，加价 <b>" + Math.round((premium / Pc) * 100) + "%</b>）。商品最终流向评价最高的人——这是黑市“做对”的部分；但差价里有一部分是<b>被抓的风险溢价</b>，而且卖家为了躲避检查会减少供给、降低质量。委内瑞拉 2014 年后的 bachaqueros 就是这个数字的现实版。",
          "Whoever gets the good resells it at the true price <b>" + f1(fullPrice) + "</b> (official " + Pc + ", markup <b>" + Math.round((premium / Pc) * 100) + "%</b>). The good ends up with the highest valuers — the part the black market gets right; but part of the gap is a <b>risk premium for getting caught</b>, and sellers dodging inspection cut supply and quality. Venezuela's post-2014 bachaqueros are this number in real life.")}</div>`;
      }
      $("pcl-scn").innerHTML = html;
    }

    // 日志
    const lines = [];
    if (mode === "none") lines.push(`<span class="ok">${T("不管制：40 件成交，每件 30。无短缺、无过剩、无无谓损失——价格在传递消息。", "No control: 40 units trade at 30. No shortage, no surplus, no deadweight loss — the price is carrying its message.")}</span>`);
    else if (!binding) lines.push(`<span class="ok">${mode === "ceiling" ? T("上限高于市场价 30，没有约束力——什么也没发生。", "The ceiling is above the market price of 30 and does not bind — nothing happens.") : T("下限低于市场价 30，没有约束力——什么也没发生。", "The floor is below the market price of 30 and does not bind — nothing happens.")}</span>`);
    else if (mode === "ceiling") {
      lines.push(`<span class="bad">${T("上限 " + Pc + "：供给退到 " + f1(qs) + "，需求涨到 " + f1(qd) + "，短缺 " + f1(gap) + "；实际成交比不管制少了 " + f1(Qstar - q) + " 件。", "Ceiling at " + Pc + ": supply retreats to " + f1(qs) + ", demand swells to " + f1(qd) + ", shortage " + f1(gap) + "; " + f1(Qstar - q) + " fewer units trade than without the control.")}</span>`);
      lines.push(T("拿到商品的 " + f1(q) + " 人每人“省了” " + f1(Pstar - Pc) + "；但第 " + f1(q) + " 件的真实价格是 " + f1(Pd(q)) + "——差价 " + f1(Pd(q) - Pc) + " 会以时间、运气、人情或风险的形式被付掉。", "The " + f1(q) + " people who get it each “save” " + f1(Pstar - Pc) + "; but the true price of the " + f1(q) + "th unit is " + f1(Pd(q)) + " — the gap of " + f1(Pd(q) - Pc) + " gets paid in time, luck, favours or risk."));
    } else {
      lines.push(`<span class="bad">${T("下限 " + Pc + "：需求退到 " + f1(qd) + "，供给涨到 " + f1(qs) + "，过剩 " + f1(gap) + "。若这是劳动市场，过剩就是失业或被砍的工时；若是黄油，就是“黄油山”。", "Floor at " + Pc + ": demand retreats to " + f1(qd) + ", supply swells to " + f1(qs) + ", surplus " + f1(gap) + ". If this is a labour market the surplus is unemployment or cut hours; if it is butter, a “butter mountain.”")}</span>`);
      lines.push(T("成交的 " + f1(q) + " 个卖家每人多得 " + f1(Pc - Pstar) + "；但有 " + f1(Qstar - q) + " 笔原本会成交的生意消失了，卖不出去的 " + f1(gap) + " 件要么被政府收购堆进仓库，要么就是找不到工作的人。", "The " + f1(q) + " sellers who do trade each gain " + f1(Pc - Pstar) + "; but " + f1(Qstar - q) + " deals that would have happened are gone, and the " + f1(gap) + " unsold units are either bought up and warehoused by the government — or people who cannot find work."));
    }
    $("pcl-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("pcl-mode").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-m]"); if (!b) return;
    mode = b.dataset.m;
    root.querySelectorAll("#pcl-mode button").forEach((x) => x.classList.toggle("on", x.dataset.m === mode));
    if (mode === "ceiling" && Pc >= Pstar) { Pc = 20; $("pcl-slider").value = Pc; }
    if (mode === "floor" && Pc <= Pstar) { Pc = 40; $("pcl-slider").value = Pc; }
    paint();
  });
  $("pcl-slider").addEventListener("input", (e) => { Pc = +e.target.value; paint(); });
  $("pcl-ration").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-r]"); if (!b) return;
    ration = b.dataset.r;
    root.querySelectorAll("#pcl-ration button").forEach((x) => x.classList.toggle("on", x.dataset.r === ration));
    paint();
  });
  paint();
}
