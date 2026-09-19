// 交互演示：发现竞赛——六家企业每轮选策略（价格 / 质量 / 广告），面对一组事先谁也不知道的消费者偏好；
// 市场揭晓赢家，输家模仿或退出。对照“完全竞争”屏：一切已知、没有任何可发现的东西。
// 读数：消费者剩余、产品多样性、行业已发现的“真相”比例。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const N = 6, CONSUMERS = 200;
  const names = ["A", "B", "C", "D", "E", "F"];
  // 消费者真实偏好（隐藏）：对质量的看重、对价格的敏感、对广告（信息）的响应。每次重置随机生成。
  let taste = null;
  let firms = [];
  let round = 0;
  let screen = "rival"; // rival | perfect
  let mode = "auto"; // auto | play
  let history = [];

  const rnd = (a, b) => a + Math.random() * (b - a);
  const newTaste = () => ({ q: rnd(0.3, 1.4), p: rnd(0.6, 1.6), ad: rnd(0.1, 0.8), sweet: Math.random() < 0.5 ? 1 : -1 });
  const newFirm = (i) => ({ id: names[i], price: +rnd(6, 12).toFixed(1), quality: +rnd(0.2, 1).toFixed(2), ad: +rnd(0, 0.5).toFixed(2), alive: true, profit: 0, cum: 0, share: 0, tries: 0 });
  const unitCost = (f) => 3 + 4 * f.quality; // 质量越高成本越高
  const reset = () => { taste = newTaste(); firms = names.map((_, i) => newFirm(i)); round = 0; history = []; };
  reset();

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏁 发现竞赛：六家企业，一组谁也不知道的消费者口味", "🏁 The discovery race: six firms, one set of consumer tastes nobody knows")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="dr-screen">
          <button class="on" data-s="rival">${T("真实竞争（发现程序）", "Rivalry (discovery procedure)")}</button>
          <button data-s="perfect">${T("“完全竞争”屏", "The “perfect competition” screen")}</button>
        </div>
        <div class="demo-seg" id="dr-mode">
          <button class="on" data-m="auto">${T("全部自动", "All automatic")}</button>
          <button data-m="play">${T("我来当 A 公司", "I play Firm A")}</button>
        </div>
      </div>
      <div class="demo-block" id="dr-play" hidden>
        <div class="demo-grid-3">
          <div><label class="demo-label">${T("A 的价格", "A's price")} $<b id="dr-pv">9</b></label><input class="demo-slider" type="range" min="4" max="14" step="0.5" value="9" id="dr-p" /></div>
          <div><label class="demo-label">${T("A 的质量（成本随之上升）", "A's quality (cost rises with it)")} <b id="dr-qv">0.5</b></label><input class="demo-slider" type="range" min="0" max="1" step="0.05" value="0.5" id="dr-q" /></div>
          <div><label class="demo-label">${T("A 的广告投入", "A's ad spend")} <b id="dr-av">0.2</b></label><input class="demo-slider" type="range" min="0" max="1" step="0.05" value="0.2" id="dr-a" /></div>
        </div>
      </div>
      <div class="demo-btns">
        <button class="demo-btn" id="dr-step">${T("▶ 跑一轮", "▶ Run one round")}</button>
        <button class="demo-btn" id="dr-five">${T("▶▶ 跑五轮", "▶▶ Run five rounds")}</button>
        <button class="demo-btn" id="dr-reset">${T("新市场（重抽口味）", "New market (redraw tastes)")}</button>
      </div>
      <div class="demo-block"><div id="dr-board"></div></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("轮次", "Round")}</div><div class="v" id="dr-round">0</div></div>
        <div class="stat"><div class="k">${T("消费者剩余", "Consumer surplus")}</div><div class="v acc" id="dr-cs">–</div></div>
        <div class="stat"><div class="k">${T("产品多样性", "Variety")}</div><div class="v" id="dr-var">–</div></div>
        <div class="stat"><div class="k">${T("口味被发现了几成", "Tastes discovered")}</div><div class="v" id="dr-disc">–</div></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="dr-log"></div></div>
      <p class="demo-tip">${T(
        "看右上角的“口味被发现了几成”：每一轮，赢家的做法被模仿、输家退出或改道，行业对消费者的了解就多一点——这就是哈耶克说的<strong>发现程序</strong>。切到“完全竞争”屏：所有企业一模一样、一切已知、没人能降价也没人能改产品——读数从第一轮起就不再变化，因为<strong>没有任何东西可以被发现</strong>。再试试自己当 A 公司，猜猜隐藏的口味。",
        "Watch “Tastes discovered” at the top right: each round, winners get imitated and losers exit or change course, and the industry learns a little more about what consumers want — Hayek's <strong>discovery procedure</strong>. Switch to the “perfect competition” screen: identical firms, everything already known, nobody can cut a price or change a product — the readouts freeze from round one, because <strong>there is nothing left to discover</strong>. Then play Firm A yourself and try to guess the hidden tastes."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const log = (html, cls) => { const d = document.createElement("div"); if (cls) d.className = cls; d.innerHTML = html; const l = $("dr-log"); l.prepend(d); while (l.children.length > 5) l.lastChild.remove(); };

  // 消费者对某家企业的“吸引力”：质量按口味加权，价格按敏感度扣分，广告让更多人知道它存在
  const appeal = (f) => Math.exp(taste.q * 3 * f.quality - taste.p * 0.35 * f.price + taste.ad * 1.5 * Math.sqrt(f.ad));
  const awareness = (f) => 0.35 + 0.65 * Math.min(1, Math.sqrt(f.ad) + 0.15);

  // 消费者愿付价：由质量与口味决定；剩余 = 愿付 − 价格
  const wtp = (f) => 5 + taste.q * 9 * f.quality;

  const runRound = () => {
    round++;
    const alive = firms.filter((f) => f.alive);
    if (screen === "perfect") {
      // 完全竞争屏：所有企业同质、价格 = 边际成本、没人能改任何东西
      const q = 0.5, cost = 3 + 4 * q;
      for (const f of firms) { f.alive = true; f.price = cost; f.quality = q; f.ad = 0; f.share = 1 / N; f.profit = 0; }
      history.push({ cs: (wtp(firms[0]) - cost) * CONSUMERS * (wtp(firms[0]) > cost ? 1 : 0), variety: 0, disc: 0 });
      log(T("完全竞争屏：六家企业一模一样，P = MC，利润为零，没有人降价、没有人改产品、没有人打广告——因为模型假设这些都已经不需要了。", "Perfect-competition screen: six identical firms, P = MC, zero profit; nobody cuts price, changes the product or advertises — the model assumes none of that is needed any more."), "warn");
      paint(); return;
    }
    // 真实竞争：消费者按吸引力 × 知晓度分配
    const w = alive.map((f) => appeal(f) * awareness(f));
    const tot = w.reduce((s, x) => s + x, 0);
    let cs = 0;
    alive.forEach((f, i) => {
      f.share = w[i] / tot;
      const buyers = f.share * CONSUMERS;
      const surplus = Math.max(0, wtp(f) - f.price);
      cs += surplus * buyers;
      f.profit = buyers * (f.price - unitCost(f)) - f.ad * 120; // 广告是固定支出
      f.cum += f.profit; f.tries++;
    });
    firms.filter((f) => !f.alive).forEach((f) => { f.share = 0; f.profit = 0; });
    const winner = alive.slice().sort((a, b) => b.profit - a.profit)[0];
    const loser = alive.slice().sort((a, b) => a.profit - b.profit)[0];
    // 模仿 / 退出 / 试错：输家退出或大改；其余向赢家靠拢一小步并各自做一点随机试探
    const events = [];
    for (const f of alive) {
      if (mode === "play" && f.id === "A") continue; // 玩家自己控制
      if (f === winner) { f.price = +(f.price + rnd(-0.3, 0.3)).toFixed(1); continue; }
      if (f === loser && f.profit < -40 && alive.length > 2) {
        if (Math.random() < 0.5) { f.alive = false; events.push(T(f.id + " 亏损退出", f.id + " exits after losses")); continue; }
        // 大改道：随机新猜想
        Object.assign(f, newFirm(names.indexOf(f.id)), { cum: f.cum, tries: f.tries });
        events.push(T(f.id + " 换了个完全不同的猜想", f.id + " tries a completely new guess"));
        continue;
      }
      // 向赢家靠拢 + 试探
      f.price = +Math.max(3, f.price + (winner.price - f.price) * 0.35 + rnd(-0.5, 0.5)).toFixed(1);
      f.quality = +Math.min(1, Math.max(0, f.quality + (winner.quality - f.quality) * 0.35 + rnd(-0.08, 0.08))).toFixed(2);
      f.ad = +Math.min(1, Math.max(0, f.ad + (winner.ad - f.ad) * 0.35 + rnd(-0.08, 0.08))).toFixed(2);
    }
    // 偶尔有新进入者顶替退出者（自由进入）
    const dead = firms.filter((f) => !f.alive);
    if (dead.length && Math.random() < 0.5) { const f = dead[0]; Object.assign(f, newFirm(names.indexOf(f.id)), { cum: f.cum, tries: f.tries }); events.push(T(f.id + " 以新面目重新进入", f.id + " re-enters with a new idea")); }
    // “发现度”：行业加权平均策略与真实口味最优策略的接近程度
    const disc = discovery();
    const variety = alive.length > 1 ? Math.min(1, stdev(alive.map((f) => f.quality)) * 3 + stdev(alive.map((f) => f.price)) / 4) : 0;
    history.push({ cs, variety, disc });
    log(`${T("第", "Round")} ${round} ${T("轮：赢家", ": winner")} <b>${winner.id}</b>（${T("价", "price")} $${winner.price}，${T("质", "quality")} ${winner.quality}，${T("广告", "ads")} ${winner.ad}，${T("利润", "profit")} ${winner.profit.toFixed(0)}）；${T("最差", "worst")} ${loser.id}（${loser.profit.toFixed(0)}）。${events.join("；") || T("其余企业向赢家靠拢并各自试探。", "the rest edge toward the winner and keep experimenting.")}`, winner.profit > 0 ? "ok" : "bad");
    paint();
  };

  const stdev = (a) => { const m = a.reduce((s, x) => s + x, 0) / a.length; return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / a.length); };
  // 真正的最优：在口味下利润最大的 (price, quality)；用粗网格搜索
  const optimum = () => {
    let best = null;
    for (let q = 0; q <= 1.0001; q += 0.1) for (let p = 4; p <= 14; p += 0.5) {
      const f = { price: p, quality: q, ad: 0.2 };
      const v = appeal(f) * (p - unitCost(f));
      if (!best || v > best.v) best = { p, q, v };
    }
    return best;
  };
  const discovery = () => {
    const o = optimum();
    const alive = firms.filter((f) => f.alive);
    const tot = alive.reduce((s, f) => s + f.share, 0) || 1;
    const p = alive.reduce((s, f) => s + f.price * f.share, 0) / tot, q = alive.reduce((s, f) => s + f.quality * f.share, 0) / tot;
    const d = Math.abs(p - o.p) / 10 + Math.abs(q - o.q);
    return Math.max(0, Math.min(1, 1 - d));
  };

  const paint = () => {
    $("dr-round").textContent = round;
    const h = history[history.length - 1];
    $("dr-cs").textContent = h ? h.cs.toFixed(0) : "–";
    $("dr-var").textContent = h ? (h.variety * 100).toFixed(0) + "%" : "–";
    $("dr-disc").textContent = h ? (h.disc * 100).toFixed(0) + "%" : "–";
    const maxShare = Math.max(0.01, ...firms.map((f) => f.share));
    $("dr-board").innerHTML = firms.map((f) => {
      const dead = !f.alive;
      return `<div class="bar2">
        <span class="lab" style="${dead ? "text-decoration:line-through;opacity:.5" : f.id === "A" && mode === "play" ? "color:var(--orange-ink);font-weight:700" : ""}">${f.id} · $${f.price} · q${f.quality} · ad${f.ad}</span>
        <div class="track"><div class="fill" style="width:${(f.share / maxShare) * 100}%;background:${dead ? "var(--line)" : f.profit >= 0 ? "var(--green)" : "var(--red)"}"></div></div>
        <span class="val" style="color:${f.profit >= 0 ? "var(--green)" : "var(--red)"}">${dead ? T("退出", "out") : (f.profit >= 0 ? "+" : "") + f.profit.toFixed(0)}</span>
      </div>`;
    }).join("") + `<div class="demo-meta">${T("条长 = 市场份额；数字 = 本轮利润。隐藏口味：", "Bar = market share; number = this round's profit. Hidden tastes: ")}${screen === "rival" && round >= 8 ? T("质量权重 " + taste.q.toFixed(2) + " · 价格敏感 " + taste.p.toFixed(2) + " · 广告响应 " + taste.ad.toFixed(2) + "（跑满 8 轮后揭晓）", "quality weight " + taste.q.toFixed(2) + " · price sensitivity " + taste.p.toFixed(2) + " · ad response " + taste.ad.toFixed(2) + " (revealed after 8 rounds)") : T("？？？——只有跑起来才会被发现", "??? — discovered only by running the race")}</div>`;
  };

  $("dr-screen").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    screen = b.dataset.s; $("dr-screen").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    reset(); $("dr-log").innerHTML = ""; paint();
  }));
  $("dr-mode").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    mode = b.dataset.m; $("dr-mode").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    $("dr-play").hidden = mode !== "play";
    if (mode === "play") { const a = firms[0]; a.alive = true; a.price = +$("dr-p").value; a.quality = +$("dr-q").value; a.ad = +$("dr-a").value; }
    paint();
  }));
  for (const [id, key, out] of [["dr-p", "price", "dr-pv"], ["dr-q", "quality", "dr-qv"], ["dr-a", "ad", "dr-av"]]) {
    $(id).addEventListener("input", (e) => { const v = +e.target.value; $(out).textContent = v; firms[0][key] = v; firms[0].alive = true; paint(); });
  }
  $("dr-step").addEventListener("click", runRound);
  $("dr-five").addEventListener("click", () => { for (let i = 0; i < 5; i++) runRound(); });
  $("dr-reset").addEventListener("click", () => { reset(); $("dr-log").innerHTML = ""; paint(); });
  paint();
}
