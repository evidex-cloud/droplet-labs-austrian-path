// 交互演示：每日公投——8 个带预算的消费者每轮用钱给 4 家企业“投票”；
// 赚到利润的企业扩张，亏损的收缩直至退出。读者可以接管 1 号企业，自己定价格与质量。
// 真算：消费者按“愿付价 − 价格”挑选，企业按“收入 − 要素成本（含利息）”计算损益。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const rnd = (a, b) => a + Math.random() * (b - a);
  const FIRMS = 4, CONS = 8;
  let firms, consumers, round, tally, play;

  const newFirm = (i, size) => ({ id: i + 1, price: +rnd(4, 9).toFixed(1), quality: +rnd(0.2, 0.9).toFixed(2), size: size == null ? 10 : size, alive: true, revenue: 0, cost: 0, profit: 0, votes: 0, cumVotes: 0, sold: 0 });
  const newConsumer = (i) => ({ id: i + 1, budget: Math.round(rnd(12, 36)), qw: +rnd(4, 14).toFixed(1), base: +rnd(3, 6).toFixed(1) }); // 愿付价 = base + qw × quality
  const reset = () => {
    firms = Array.from({ length: FIRMS }, (_, i) => newFirm(i));
    consumers = Array.from({ length: CONS }, (_, i) => newConsumer(i));
    round = 0; tally = [];
    if (play) { firms[0].price = +$("pl-p").value; firms[0].quality = +$("pl-q").value; }
  };
  const unitCost = (f) => 1.5 + 5 * f.quality;       // 要素成本随质量上升
  const fixedCost = (f) => 0.6 * f.size;              // 房租 + 资本利息，随规模上升
  const capacity = (f) => f.size * 2;                 // 规模决定最多能卖多少件

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗳️ 每日公投：8 个钱包，4 家企业，每一块钱都是一张票", "🗳️ The daily plebiscite: 8 wallets, 4 firms, every dollar a ballot")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="pl-mode">
          <button class="on" data-m="auto">${T("四家全自动", "All four automatic")}</button>
          <button data-m="play">${T("我来经营 1 号企业", "I run Firm 1")}</button>
        </div>
        <div class="demo-btns" style="margin:0">
          <button class="demo-btn" id="pl-step">${T("▶ 投一轮票", "▶ Hold one vote")}</button>
          <button class="demo-btn" id="pl-five">${T("▶▶ 投五轮", "▶▶ Five rounds")}</button>
          <button class="demo-btn" id="pl-reset">${T("重开市场", "Restart market")}</button>
        </div>
      </div>
      <div class="demo-block" id="pl-ctl" hidden>
        <div class="demo-grid">
          <div><label class="demo-label">${T("1 号的价格", "Firm 1 price")} $<b id="pl-pv">6</b></label><input class="demo-slider" type="range" min="2" max="14" step="0.5" value="6" id="pl-p" /></div>
          <div><label class="demo-label">${T("1 号的质量（单位成本 = 1.5 + 5×质量）", "Firm 1 quality (unit cost = 1.5 + 5×quality)")} <b id="pl-qv">0.5</b></label><input class="demo-slider" type="range" min="0" max="1" step="0.05" value="0.5" id="pl-q" /></div>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("本轮公投：条长 = 收到的选票（美元）；右侧 = 本轮损益 → 规模变化", "This round's vote: bar = dollars received; right = P&L → change in size")}</div>
        <div id="pl-board"></div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <div class="demo-label">${T("消费者（预算 · 对质量的看重）", "Consumers (budget · how much they value quality)")}</div>
          <div id="pl-cons" class="demo-meta"></div>
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("累计选票（公投计数器）", "Cumulative votes (plebiscite tally)")}</div>
          <div id="pl-tally"></div>
        </div>
      </div>
      <div class="demo-block"><div class="demo-log" id="pl-log"></div></div>
      <p class="demo-tip">${T(
        "盯住“规模”一栏：赚到利润的企业下一轮能卖更多，亏损的企业缩小、直到退出——<strong>消费者的钱包在决定谁能继续用资源</strong>，没有任何人下命令。接管 1 号企业试试：把价格定得太高，选票流向别家；把质量做得太高而价格跟不上，成本会吃掉你（利息也在成本里）。找到消费者真正愿意付钱的那个组合，就是“判断对了”。",
        "Watch the “size” column: firms that earn profit can sell more next round; firms that lose shrink until they exit — <strong>consumers' wallets decide who keeps using resources</strong>, with nobody giving orders. Take over Firm 1: set the price too high and votes flow elsewhere; raise quality without a price to match and costs (interest included) eat you. Finding the combination consumers will actually pay for is what “judging right” means."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const log = (html, cls) => { const d = document.createElement("div"); if (cls) d.className = cls; d.innerHTML = html; const l = $("pl-log"); l.prepend(d); while (l.children.length > 5) l.lastChild.remove(); };
  play = false;
  reset();

  const vote = () => {
    round++;
    const alive = firms.filter((f) => f.alive);
    for (const f of firms) { f.revenue = 0; f.sold = 0; f.votes = 0; }
    const cap = Object.fromEntries(alive.map((f) => [f.id, capacity(f)]));
    // 每个消费者：逐件购买，每次挑“愿付价 − 价格”最大且还有货、且买得起的企业
    for (const c of consumers) {
      let money = c.budget;
      for (let k = 0; k < 40; k++) {
        let best = null, bestS = 0;
        for (const f of alive) {
          if (cap[f.id] <= 0 || f.price > money) continue;
          const s = c.base + c.qw * f.quality - f.price; // 消费者剩余
          if (s > bestS) { bestS = s; best = f; }
        }
        if (!best) break;
        cap[best.id]--; money -= best.price; best.revenue += best.price; best.sold++; best.votes += best.price;
      }
    }
    // 损益与规模调整
    const notes = [];
    for (const f of alive) {
      f.cost = f.sold * unitCost(f) + fixedCost(f);
      f.profit = f.revenue - f.cost;
      f.cumVotes += f.votes;
      const oldSize = f.size;
      f.size = Math.max(0, +(f.size + f.profit * 0.25).toFixed(1));
      if (f.size <= 1) { f.alive = false; f.size = 0; notes.push(T(f.id + " 号资源耗尽，退出", "Firm " + f.id + " runs out of resources and exits")); continue; }
      if (!(play && f.id === 1)) {
        // 自动企业的学习：亏损就试着调价 / 调质量；盈利就小幅试探
        if (f.profit < 0) {
          if (f.sold < capacity(f) * 0.5) f.price = +Math.max(2, f.price - rnd(0.3, 1)).toFixed(1); // 卖不动 → 降价
          else f.quality = +Math.max(0, f.quality - rnd(0.02, 0.1)).toFixed(2);                    // 卖得动却亏 → 降成本
        } else if (f.sold >= capacity(f)) f.price = +(f.price + rnd(0.1, 0.5)).toFixed(1);       // 卖光了 → 试着涨价
        else if (Math.random() < 0.3) f.quality = +Math.min(1, f.quality + rnd(-0.05, 0.08)).toFixed(2);
      }
      if (f.size > oldSize * 1.3) notes.push(T(f.id + " 号扩张", "Firm " + f.id + " expands"));
    }
    // 自由进入：有企业退出且市场仍有利润时，新进入者顶替
    const dead = firms.filter((f) => !f.alive);
    if (dead.length && alive.some((f) => f.profit > 3) && Math.random() < 0.6) { const f = dead[0]; Object.assign(f, newFirm(f.id - 1, 6), { cumVotes: f.cumVotes }); notes.push(T(f.id + " 号以新面目重新进入", "Firm " + f.id + " re-enters with a new offer")); }
    tally.push(alive.map((f) => ({ id: f.id, votes: f.votes, profit: f.profit })));
    const w = alive.slice().sort((a, b) => b.votes - a.votes)[0];
    log(`${T("第", "Round")} ${round} ${T("轮：得票最多", ": most votes")} <b>${T(w.id + " 号", "Firm " + w.id)}</b>（$${w.votes.toFixed(0)}，${T("损益", "P&L")} ${w.profit >= 0 ? "+" : ""}${w.profit.toFixed(1)}）。${notes.join("；") || T("各家按结果微调价格与质量。", "Firms adjust price and quality to the result.")}`, w.profit >= 0 ? "ok" : "warn");
    paint();
  };

  const paint = () => {
    const maxV = Math.max(1, ...firms.map((f) => f.votes));
    $("pl-board").innerHTML = firms.map((f) => `<div class="bar2">
      <span class="lab" style="${!f.alive ? "opacity:.5;text-decoration:line-through" : play && f.id === 1 ? "color:var(--orange-ink);font-weight:700" : ""}">${T(f.id + " 号", "Firm " + f.id)} · $${f.price} · q${f.quality}</span>
      <div class="track"><div class="fill" style="width:${(f.votes / maxV) * 100}%;background:${!f.alive ? "var(--line)" : f.profit >= 0 ? "var(--green)" : "var(--red)"}"></div></div>
      <span class="val" style="width:150px;color:${f.profit >= 0 ? "var(--green)" : "var(--red)"}">${!f.alive ? T("已退出", "exited") : `$${f.votes.toFixed(0)} · ${f.profit >= 0 ? "+" : ""}${f.profit.toFixed(0)} → ${T("规模", "size")} ${f.size}`}</span>
    </div>`).join("");
    $("pl-cons").innerHTML = consumers.map((c) => `<span class="pill" style="background:var(--surface-2);margin:2px">${T("#", "#")}${c.id} $${c.budget} · q${c.qw}</span>`).join(" ");
    const maxC = Math.max(1, ...firms.map((f) => f.cumVotes));
    $("pl-tally").innerHTML = firms.map((f) => `<div class="bar2"><span class="lab">${T(f.id + " 号", "Firm " + f.id)}</span><div class="track"><div class="fill" style="width:${(f.cumVotes / maxC) * 100}%;background:var(--orange)"></div></div><span class="val">$${f.cumVotes.toFixed(0)}</span></div>`).join("");
  };

  $("pl-mode").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    play = b.dataset.m === "play"; $("pl-mode").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    $("pl-ctl").hidden = !play;
    if (play) { const f = firms[0]; if (!f.alive) { Object.assign(f, newFirm(0, 8), { cumVotes: f.cumVotes }); } f.price = +$("pl-p").value; f.quality = +$("pl-q").value; }
    paint();
  }));
  $("pl-p").addEventListener("input", (e) => { $("pl-pv").textContent = e.target.value; firms[0].price = +e.target.value; paint(); });
  $("pl-q").addEventListener("input", (e) => { $("pl-qv").textContent = e.target.value; firms[0].quality = +e.target.value; paint(); });
  $("pl-step").addEventListener("click", vote);
  $("pl-five").addEventListener("click", () => { for (let i = 0; i < 5; i++) vote(); });
  $("pl-reset").addEventListener("click", () => { reset(); $("pl-log").innerHTML = ""; paint(); });
  paint();
}
