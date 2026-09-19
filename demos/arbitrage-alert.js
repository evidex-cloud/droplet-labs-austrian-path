// 交互演示：套利警觉 vs 企业家判断
// 模式 1「警觉」：五个镇的苹果价格摆在眼前，看见价差就点两下低买高卖——利润确定，但会被你自己抹平。
// 模式 2「判断」：下一轮的卖价还没发生，你得先押上资本；揭晓后才知道对错。计分板对比两种模式。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 五个镇：坐标（地图用）+ 初始价格。运费 = 距离 × 0.10 / 100px（大致 0.2–0.5 美元）
  const towns = [
    { id: "A", name: T("A 镇", "Town A"), x: 90, y: 150, p: 1.00 },
    { id: "B", name: T("B 镇", "Town B"), x: 330, y: 60, p: 1.60 },
    { id: "C", name: T("C 镇", "Town C"), x: 540, y: 130, p: 1.25 },
    { id: "D", name: T("D 镇", "Town D"), x: 420, y: 230, p: 1.45 },
    { id: "E", name: T("E 镇", "Town E"), x: 210, y: 250, p: 0.90 },
  ];
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const freight = (a, b) => Math.round(dist(a, b) / 100 * 0.10 * 100) / 100 + 0.10; // 每个苹果的运费
  const LOT = 100; // 警觉模式每次套利 100 个苹果

  let mode = "alert"; // alert | judge
  let sel = []; // 选中的镇 id（起点，终点）
  let capital = 1000; // 判断模式的自有资本
  let qty = 300;
  const score = { alert: { profit: 0, trades: 0, missed: 0 }, judge: { pnl: 0, rounds: 0, wins: 0, losses: 0, best: 0, worst: 0 } };
  const basePrices = towns.map((t) => t.p);

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗺️ 五镇苹果市集：警觉抹平价差，判断押注未来", "🗺️ Five-town apple market: alertness closes gaps, judgment bets on the future")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="aa-seg">
          <button class="on" data-m="alert">${T("模式 1 · 警觉（价格已知）", "Mode 1 · Alertness (prices known)")}</button>
          <button data-m="judge">${T("模式 2 · 判断（下轮价格未知）", "Mode 2 · Judgment (next-round price unknown)")}</button>
        </div>
        <div class="demo-btns" style="margin:0">
          <button class="demo-btn" id="aa-reset">${T("重置市场", "Reset market")}</button>
        </div>
      </div>
      <div class="demo-block">
        <div class="chart" id="aa-map"></div>
        <div class="demo-meta" id="aa-hint"></div>
      </div>
      <div class="demo-block" id="aa-judge-ctl" hidden>
        <label class="demo-label">${T("押多少个苹果？", "How many apples do you commit?")} <b id="aa-qty">300</b> · ${T("自有资本", "Own capital")} $<b id="aa-cap">1000</b></label>
        <input class="demo-slider" type="range" min="0" max="1000" step="50" value="300" id="aa-qty-sl" />
        <div class="demo-btns"><button class="demo-btn" id="aa-commit" disabled>${T("押上资本，等下一轮揭晓", "Commit capital, wait for next round")}</button></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="aa-log"></div></div>
      <div class="demo-block">
        <div class="cmp">
          <div class="cmp-cell hl"><h5>${T("模式 1 · 警觉计分", "Mode 1 · Alertness score")}</h5>
            <div class="stat-row">
              <div class="stat"><div class="k">${T("累计利润", "Total profit")}</div><div class="v pos" id="aa-s-ap">$0</div></div>
              <div class="stat"><div class="k">${T("套利次数", "Trades")}</div><div class="v" id="aa-s-at">0</div></div>
              <div class="stat"><div class="k">${T("错失机会", "Missed")}</div><div class="v neg" id="aa-s-am">0</div></div>
            </div></div>
          <div class="cmp-cell cold"><h5>${T("模式 2 · 判断计分", "Mode 2 · Judgment score")}</h5>
            <div class="stat-row">
              <div class="stat"><div class="k">${T("累计盈亏", "Total P&L")}</div><div class="v" id="aa-s-jp">$0</div></div>
              <div class="stat"><div class="k">${T("对 / 错", "Right / Wrong")}</div><div class="v" id="aa-s-jw">0 / 0</div></div>
              <div class="stat"><div class="k">${T("最好 / 最差", "Best / Worst")}</div><div class="v" id="aa-s-jb">0 / 0</div></div>
            </div></div>
        </div>
      </div>
      <p class="demo-tip">${T(
        "模式 1 里，每一次你点对了，两镇的价差就缩小一截——<strong>利润在被赚取时自我消灭</strong>，几轮之后无利可图，这就是柯兹纳的“均衡化”。模式 2 里，同样的路线可能赚也可能亏，因为你必须在价格揭晓之前押上资本——这才是米塞斯与奈特说的“承担不确定性”。对比两个计分板：警觉只会赢，判断会输。",
        "In Mode 1 every correct click shrinks the gap between the two towns — <strong>profit destroys itself as it is earned</strong>; after a few rounds nothing is left, which is Kirzner's “equilibrating” entrepreneur. In Mode 2 the very same route can win or lose, because you must commit capital before the price is revealed — that is what Mises and Knight mean by “bearing uncertainty.” Compare the scoreboards: alertness can only win; judgment can lose."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const fmt = (v) => (v < 0 ? "−$" : "$") + Math.abs(v).toFixed(v % 1 ? 2 : 0);
  const log = (html, cls) => { const d = document.createElement("div"); if (cls) d.className = cls; d.innerHTML = html; const l = $("aa-log"); l.prepend(d); while (l.children.length > 6) l.lastChild.remove(); };

  const bestRoute = () => {
    let best = null;
    for (const a of towns) for (const b of towns) if (a !== b) {
      const pr = b.p - a.p - freight(a, b);
      if (!best || pr > best.pr) best = { a, b, pr };
    }
    return best;
  };

  const paintMap = () => {
    const [s, d] = sel.map((id) => towns.find((t) => t.id === id));
    let route = "";
    if (s && d) {
      route = `<line x1="${s.x}" y1="${s.y}" x2="${d.x}" y2="${d.y}" stroke="var(--orange)" stroke-width="3" stroke-dasharray="6 4"/>
        <text x="${(s.x + d.x) / 2}" y="${(s.y + d.y) / 2 - 8}" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="700">${T("运费", "freight")} $${freight(s, d).toFixed(2)}</text>`;
    }
    const nodes = towns.map((t) => {
      const on = sel.includes(t.id);
      const role = sel[0] === t.id ? T("买入", "buy") : sel[1] === t.id ? T("卖出", "sell") : "";
      return `<g style="cursor:pointer" data-town="${t.id}">
        <circle cx="${t.x}" cy="${t.y}" r="26" fill="${on ? "var(--orange-soft)" : "var(--surface-2)"}" stroke="${on ? "var(--orange)" : "var(--line)"}" stroke-width="${on ? 3 : 1.5}"/>
        <text x="${t.x}" y="${t.y - 4}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">${t.id}</text>
        <text x="${t.x}" y="${t.y + 12}" text-anchor="middle" font-size="12" font-weight="800" fill="${t.p >= 1.4 ? "var(--orange-ink)" : t.p <= 1.05 ? "var(--blue)" : "var(--muted)"}">$${t.p.toFixed(2)}</text>
        ${role ? `<text x="${t.x}" y="${t.y + 42}" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">${role}</text>` : ""}
      </g>`;
    }).join("");
    $("aa-map").innerHTML = `<svg viewBox="0 0 640 300" role="img" font-family="Inter, system-ui, sans-serif">
      <text x="12" y="20" font-size="11" fill="var(--muted)">${mode === "alert" ? T("当前苹果价格（每个）——先点买入镇，再点卖出镇", "Current apple prices (each) — click the town to buy in, then the town to sell in") : T("当前价格已知；卖出镇下一轮的价格未知——先选路线，再押资本", "Current prices known; the selling town's NEXT-round price is unknown — pick a route, then commit")}</text>
      ${route}${nodes}</svg>`;
    root.querySelectorAll("[data-town]").forEach((g) => g.addEventListener("click", () => pick(g.dataset.town)));
  };

  const paintScore = () => {
    const a = score.alert, j = score.judge;
    $("aa-s-ap").textContent = fmt(a.profit); $("aa-s-at").textContent = a.trades; $("aa-s-am").textContent = a.missed;
    const jp = $("aa-s-jp"); jp.textContent = fmt(j.pnl); jp.className = "v " + (j.pnl > 0 ? "pos" : j.pnl < 0 ? "neg" : "");
    $("aa-s-jw").textContent = j.wins + " / " + j.losses;
    $("aa-s-jb").textContent = fmt(j.best) + " / " + fmt(j.worst);
    $("aa-cap").textContent = capital.toFixed(0);
    const best = bestRoute();
    $("aa-hint").innerHTML = mode === "alert"
      ? (best.pr > 0.005
        ? T("市场里还有未被注意的价差：最大可得纯利润约 <b>$" + best.pr.toFixed(2) + "</b>/个。你看见了吗？", "There is still an unnoticed gap: the largest pure profit available is about <b>$" + best.pr.toFixed(2) + "</b> per apple. Can you see it?")
        : T("<b>所有价差都已被压到运费以内</b>——没有纯利润可赚了。这就是柯兹纳意义上的“均衡”：不是没人竞争，而是警觉已经把知识全部压进了价格。", "<b>Every gap has been squeezed to within freight cost</b> — no pure profit is left. That is “equilibrium” in Kirzner's sense: not the absence of competition, but alertness having pressed all the knowledge into prices."))
      : T("下一轮卖出镇的价格会在当前价基础上随机变动 −0.40 ~ +0.40 美元（三种情形：来了大果商 / 如常 / 闹果荒）。你的成本 = 买价 + 运费，先付，后揭晓。", "Next round the selling town's price moves by a random −$0.40 to +$0.40 from today's (three scenarios: a big rival arrives / business as usual / a shortage). Your cost = buy price + freight, paid now, revealed later.");
  };

  const pick = (id) => {
    if (sel.length === 2) sel = [];
    if (sel[0] === id) return;
    sel.push(id);
    if (sel.length === 2) {
      if (mode === "alert") doArbitrage(); else $("aa-commit").disabled = false;
    }
    paintMap();
  };

  const doArbitrage = () => {
    const [s, d] = sel.map((id) => towns.find((t) => t.id === id));
    const pr = d.p - s.p - freight(s, d);
    const best = bestRoute();
    if (pr > 0.005) {
      const gain = pr * LOT;
      score.alert.profit += gain; score.alert.trades++;
      const before = `${s.name} $${s.p.toFixed(2)} → ${d.name} $${d.p.toFixed(2)}`;
      // 套利本身移动价格：买入镇上行、卖出镇下行，各吃掉价差的 30%
      const gap = d.p - s.p; s.p = Math.round((s.p + gap * 0.3) * 100) / 100; d.p = Math.round((d.p - gap * 0.3) * 100) / 100;
      log(`${before}：${T("每个纯利润", "pure profit per apple")} <b>$${pr.toFixed(2)}</b> × ${LOT} = <b>${fmt(gain)}</b>。${T("你的买卖推动价格：", "Your trade moved prices: ")}${s.name} ↑ ${d.name} ↓${best.a === s && best.b === d ? T("（这是当前最好的路线）", " (that was the best route available)") : T("（还有更大的价差没被你看见）", " (a bigger gap went unseen)")}`, "ok");
    } else {
      score.alert.missed++;
      log(`${s.name} → ${d.name}：${T("卖价", "sell")} $${d.p.toFixed(2)} − ${T("买价", "buy")} $${s.p.toFixed(2)} − ${T("运费", "freight")} $${freight(s, d).toFixed(2)} = <b>${fmt(pr)}</b>。${T("没有纯利润——不动手就没有损失，这是纯粹警觉者的特权。", "No pure profit — and no loss if you simply don't act: the privilege of the pure alert entrepreneur.")}`, "warn");
    }
    paintScore();
  };

  const doCommit = () => {
    const [s, d] = sel.map((id) => towns.find((t) => t.id === id));
    if (!s || !d || qty === 0) return;
    const cost = (s.p + freight(s, d)) * qty;
    if (cost > capital) { log(T("资本不够：这笔押注需要 " + fmt(cost) + "，你只有 " + fmt(capital) + "。判断必须落在自己拥有的资源上。", "Not enough capital: this bet needs " + fmt(cost) + " and you have " + fmt(capital) + ". Judgment must be exercised over resources you actually own."), "bad"); return; }
    // 三种情形：大果商来了 / 如常 / 果荒
    const r = Math.random();
    const scen = r < 0.3 ? { lab: T("大果商来了", "a big rival arrived"), dp: -(0.2 + Math.random() * 0.2) } : r < 0.75 ? { lab: T("如常", "business as usual"), dp: (Math.random() - 0.5) * 0.16 } : { lab: T("闹果荒", "a shortage hit"), dp: 0.2 + Math.random() * 0.2 };
    const newP = Math.max(0.5, Math.round((d.p + scen.dp) * 100) / 100);
    const revenue = newP * qty;
    const pnl = revenue - cost;
    capital += pnl;
    const j = score.judge; j.pnl += pnl; j.rounds++; if (pnl >= 0) j.wins++; else j.losses++; j.best = Math.max(j.best, pnl); j.worst = Math.min(j.worst, pnl);
    // 揭晓后价格变化留在市场上；买入镇因你的采购略涨
    d.p = newP; s.p = Math.round((s.p + 0.02 * qty / 100) * 100) / 100;
    log(`${T("你押了", "You committed")} ${qty} ${T("个苹果", "apples")}（${T("成本", "cost")} ${fmt(cost)}）${s.name} → ${d.name}。${T("揭晓：", "Revealed: ")}<b>${scen.lab}</b>，${d.name} ${T("卖价", "price")} $${newP.toFixed(2)} → ${T("盈亏", "P&L")} <b>${fmt(pnl)}</b>。${pnl >= 0 ? T("判断对了：利润是对承担不确定性的报酬。", "Right call: profit is the reward for bearing uncertainty.") : T("判断错了：亏损由你的资本承担——这是纯粹警觉者永远不会遇到的事。", "Wrong call: the loss lands on your capital — something the pure alert entrepreneur never faces.")}`, pnl >= 0 ? "ok" : "bad");
    sel = []; $("aa-commit").disabled = true;
    paintMap(); paintScore();
  };

  const reset = () => {
    towns.forEach((t, i) => { t.p = basePrices[i]; });
    sel = []; capital = 1000; $("aa-commit").disabled = true;
    $("aa-log").innerHTML = "";
    paintMap(); paintScore();
  };

  $("aa-seg").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    mode = b.dataset.m;
    $("aa-seg").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    $("aa-judge-ctl").hidden = mode !== "judge";
    sel = []; $("aa-commit").disabled = true;
    paintMap(); paintScore();
  }));
  $("aa-qty-sl").addEventListener("input", (e) => { qty = +e.target.value; $("aa-qty").textContent = qty; });
  $("aa-commit").addEventListener("click", doCommit);
  $("aa-reset").addEventListener("click", reset);

  paintMap(); paintScore();
}
