// 交互演示：秩序的涌现。模式一“欲望路径”：网格上的行人在几个地点之间来回走，脚印把路踩出来，
// 没有任何规划者；叠加一条“规划的路”看它与真实人流的错位。模式二“规范的涌现”：两人相遇随机选左/右，
// 只按“上次成功的那一边”调整，全城很快收敛到同一种“靠边”规范——没有人下令。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  let mode = "paths"; // paths | norm
  let timer = null;

  // ---------- 模式一：欲望路径 ----------
  const W = 32, H = 20;
  const spots = [
    { x: 2, y: 2, n: T("宿舍", "Dorms") }, { x: 29, y: 3, n: T("食堂", "Dining") },
    { x: 27, y: 17, n: T("图书馆", "Library") }, { x: 4, y: 16, n: T("教学楼", "Lecture hall") }, { x: 15, y: 9, n: T("车站", "Bus stop") },
  ];
  let wear, walkers, steps, planned;
  const resetPaths = () => {
    wear = new Float32Array(W * H); walkers = []; steps = 0;
    for (let i = 0; i < 40; i++) walkers.push(newWalker());
    // “规划者”的路：所有地点先连到网格中心的一条环线，再直角连出去（好看，但没人这么走）
    planned = new Set();
    for (let x = 6; x <= 26; x++) { planned.add(x + 4 * W); planned.add(x + 15 * W); }
    for (let y = 4; y <= 15; y++) { planned.add(6 + y * W); planned.add(26 + y * W); }
    for (const s of spots) { // 直角连接到环线
      const tx = Math.max(6, Math.min(26, s.x)), ty = Math.max(4, Math.min(15, s.y));
      for (let x = Math.min(s.x, tx); x <= Math.max(s.x, tx); x++) planned.add(x + s.y * W);
      for (let y = Math.min(s.y, ty); y <= Math.max(s.y, ty); y++) planned.add(tx + y * W);
    }
  };
  function newWalker() {
    const a = Math.floor(Math.random() * spots.length);
    let b = Math.floor(Math.random() * (spots.length - 1)); if (b >= a) b++;
    return { x: spots[a].x, y: spots[a].y, tx: spots[b].x, ty: spots[b].y };
  }
  const stepPaths = () => {
    steps++;
    for (const w of walkers) {
      // 走向目标：每步在“最短方向”与“已被踩实的邻格”之间取舍——踩得越实越省力
      const cand = [];
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) {
        const nx = w.x + dx, ny = w.y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const dNow = Math.hypot(w.tx - w.x, w.ty - w.y), dNext = Math.hypot(w.tx - nx, w.ty - ny);
        if (dNext >= dNow) continue;
        const gain = dNow - dNext + 0.9 * Math.min(1, wear[nx + ny * W] / 8); // 踩实的路更“便宜”
        cand.push({ nx, ny, gain });
      }
      if (!cand.length) { Object.assign(w, newWalker()); continue; }
      cand.sort((p, q) => q.gain - p.gain);
      const pick = Math.random() < 0.85 ? cand[0] : cand[Math.floor(Math.random() * cand.length)];
      w.x = pick.nx; w.y = pick.ny;
      wear[w.x + w.y * W] += 1;
      if (w.x === w.tx && w.y === w.ty) Object.assign(w, newWalker());
    }
    // 草慢慢长回来
    if (steps % 5 === 0) for (let i = 0; i < wear.length; i++) wear[i] *= 0.985;
  };

  // ---------- 模式二：规范的涌现 ----------
  const N = 60;
  let agents, rounds, normHist;
  const resetNorm = () => {
    agents = []; rounds = 0; normHist = [];
    for (let i = 0; i < N; i++) agents.push({ p: Math.random() }); // p = 选择“靠右”的概率
  };
  const stepNorm = () => {
    rounds++;
    const idx = agents.map((_, i) => i).sort(() => Math.random() - 0.5);
    for (let k = 0; k + 1 < idx.length; k += 2) {
      const a = agents[idx[k]], b = agents[idx[k + 1]];
      const ra = Math.random() < a.p, rb = Math.random() < b.p;
      const ok = ra === rb; // 同侧 = 顺利错身；异侧 = 撞上
      // 只按自己这次的经验调整：成功就加强这次的选择，失败就削弱
      for (const [ag, r] of [[a, ra], [b, rb]]) {
        const dir = r ? 1 : -1; // 这次选了右 → 成功就更靠右，失败就更靠左
        ag.p = Math.max(0.02, Math.min(0.98, ag.p + (ok ? 0.12 : -0.12) * dir));
      }
    }
    normHist.push(agents.reduce((s, a) => s + a.p, 0) / N);
  };

  resetPaths(); resetNorm();

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🌱 秩序是怎么长出来的：没有规划者的路，没有立法者的规矩", "🌱 How order grows: paths without a planner, a norm without a legislator")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="oe-seg">
          <button data-m="paths" class="on">${T("模式一 · 欲望路径", "Mode 1 · Desire paths")}</button>
          <button data-m="norm">${T("模式二 · 规范的涌现", "Mode 2 · A norm emerges")}</button>
        </div>
        <div class="demo-btns" style="margin:0">
          <button class="demo-btn" id="oe-step">${T("▶ 走 20 步", "▶ Step ×20")}</button>
          <button class="demo-btn" id="oe-run">${T("⏩ 自动", "⏩ Auto")}</button>
          <button class="demo-btn" id="oe-plan">${T("🗺 叠加规划的路", "🗺 Overlay planned paths")}</button>
          <button class="demo-btn" id="oe-reset">${T("↺ 重置", "↺ Reset")}</button>
        </div>
      </div>
      <div class="demo-block" id="oe-canvas"></div>
      <div class="stat-row" id="oe-stats"></div>
      <div class="demo-block"><div class="demo-log" id="oe-log"></div></div>
      <p class="demo-tip">${T(
        "模式一：按“自动”，看几十个行人在五个地点之间来回走——脚印在最常走的线上越踩越深，一张路网自己长出来；再点“叠加规划的路”，蓝色是设计师画的直角步道，它和真实人流几乎不重合。模式二：六十个人两两相遇，随机选左或右，只按自己上一次是否撞上来调整——几十轮后全城收敛到同一侧。<strong>没有人下令，秩序却出现了；而且哪一侧胜出是偶然的——规则可以是任意的，秩序依然是真的。</strong>",
        "Mode 1: hit “Auto” and watch dozens of walkers move between five spots — footprints deepen along the most-used lines and a path network grows by itself; then click “Overlay planned paths”: the blue right-angled walkways the designer drew barely coincide with real flows. Mode 2: sixty people meet in pairs, each picks left or right at random and adjusts only on whether they personally collided last time — within a few dozen rounds the whole town converges on one side. <strong>Nobody gave an order, yet order appeared; and which side wins is an accident — the rule can be arbitrary while the order is real.</strong>"
      )}</p>
    </div>`;

  const showPlan = { on: false };
  const paint = () => {
    root.querySelectorAll("#oe-seg button").forEach((b) => b.classList.toggle("on", b.dataset.m === mode));
    root.querySelector("#oe-plan").hidden = mode !== "paths";
    root.querySelector("#oe-plan").classList.toggle("active", showPlan.on);
    const cv = root.querySelector("#oe-canvas"), st = root.querySelector("#oe-stats"), lg = root.querySelector("#oe-log");
    if (mode === "paths") {
      const cell = 18;
      let cells = "";
      let maxW = 1; for (const v of wear) if (v > maxW) maxW = v;
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        const v = wear[x + y * W], o = Math.min(1, v / (maxW * 0.5));
        cells += `<rect x="${x * cell}" y="${y * cell}" width="${cell}" height="${cell}" fill="var(--orange)" opacity="${(o * 0.95).toFixed(2)}"/>`;
      }
      let plan = "";
      if (showPlan.on) for (const i of planned) { const x = i % W, y = Math.floor(i / W); plan += `<rect x="${x * cell + 5}" y="${y * cell + 5}" width="${cell - 10}" height="${cell - 10}" fill="var(--blue)" opacity=".75"/>`; }
      const dots = walkers.map((w) => `<circle cx="${w.x * cell + cell / 2}" cy="${w.y * cell + cell / 2}" r="3" fill="var(--ink)"/>`).join("");
      const labels = spots.map((s) => `<circle cx="${s.x * cell + cell / 2}" cy="${s.y * cell + cell / 2}" r="7" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.5"/><text x="${s.x * cell + cell / 2}" y="${s.y * cell - 6}" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">${s.n}</text>`).join("");
      cv.innerHTML = `<div class="chart"><svg viewBox="0 0 ${W * cell} ${H * cell}" style="background:var(--green-soft);border-radius:8px"><rect width="${W * cell}" height="${H * cell}" fill="var(--green-soft)"/>${cells}${plan}${dots}${labels}</svg></div>`;
      // 规划的路与真实脚印的重合度
      let onPlan = 0, total = 0;
      for (let i = 0; i < wear.length; i++) { total += wear[i]; if (planned.has(i)) onPlan += wear[i]; }
      const cover = total > 0 ? (onPlan / total) * 100 : 0;
      const worn = Array.from(wear).filter((v) => v > maxW * 0.15).length;
      st.innerHTML = `
        <div class="stat"><div class="k">${T("步数", "Steps")}</div><div class="v">${steps}</div></div>
        <div class="stat"><div class="k">${T("行人", "Walkers")}</div><div class="v">${walkers.length}</div></div>
        <div class="stat"><div class="k">${T("踩实的格子", "Worn cells")}</div><div class="v acc">${worn}</div></div>
        <div class="stat"><div class="k">${T("脚印落在规划路上", "Footfall on planned paths")}</div><div class="v ${cover > 40 ? "pos" : "neg"}">${cover.toFixed(0)}%</div></div>`;
      const lines = [];
      if (steps < 40) lines.push(T("刚开始：脚印四散。每个人只想走最近的路，没有人想“修一条路”。", "Early on: footprints scattered. Each walker only wants the shortest route; nobody intends to “build a path.”"));
      else lines.push(`<span class="ok">${T("路网长出来了：踩实的格子更省力，于是更多人走它，它就更实——正反馈把最常用的线固定下来。这是“人的行动的结果，而非人的设计的结果”。", "A network has grown: worn cells are easier to walk, so more people use them, so they wear more — positive feedback locks in the most-used lines. “The result of human action, but not of human design.”")}</span>`);
      if (showPlan.on) lines.push(`<span class="${cover > 40 ? "warn" : "bad"}">${T(`设计师的直角步道只承接了 ${cover.toFixed(0)}% 的脚印。它是 taxis：好看、对称、来自一颗头脑；而人流是 cosmos：来自几十个人各自的时地知识（我从哪来、去哪、赶不赶时间）。聪明的设计师会先让人踩一年，再沿着痕迹铺石板。`, `The designer's right-angled walkways carry only ${cover.toFixed(0)}% of the footfall. They are taxis: tidy, symmetric, from one mind. The flows are cosmos: from dozens of people's own time-and-place knowledge (where I start, where I go, how much of a hurry I'm in). A wise designer lets people walk for a year, then paves the tracks.`)}</span>`);
      lg.innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
    } else {
      const avg = normHist.length ? normHist[normHist.length - 1] : 0.5;
      const right = agents.filter((a) => a.p > 0.5).length;
      const dots = agents.map((a, i) => { const x = 24 + (i % 12) * 46, y = 24 + Math.floor(i / 12) * 40; const col = a.p > 0.5 ? "var(--orange)" : "var(--blue)"; return `<circle cx="${x}" cy="${y}" r="${8 + 8 * Math.abs(a.p - 0.5)}" fill="${col}" opacity="${(0.35 + Math.abs(a.p - 0.5) * 1.3).toFixed(2)}"/>`; }).join("");
      const n = normHist.length;
      const pts = normHist.map((v, i) => `${(40 + (i / Math.max(1, n - 1)) * 500).toFixed(1)},${(230 - v * 60).toFixed(1)}`).join(" ");
      cv.innerHTML = `<div class="chart"><svg viewBox="0 0 560 250"><rect width="560" height="250" fill="var(--surface-2)" rx="8"/>${dots}<line x1="40" y1="200" x2="540" y2="200" stroke="var(--line)" stroke-dasharray="3 3"/><text x="44" y="196" font-size="10" fill="var(--muted)">${T("50%：无规范", "50%: no norm")}</text>${n > 1 ? `<polyline points="${pts}" fill="none" stroke="var(--ink)" stroke-width="2"/>` : ""}<text x="540" y="244" text-anchor="end" font-size="10" fill="var(--muted)">${T("黑线：全城“靠右”倾向的平均值（170=全靠右，230=全靠左）", "black line: average “keep-right” tendency (170 = all right, 230 = all left)")}</text></svg></div>`;
      const collisions = agents.length ? (2 * avg * (1 - avg) * 100) : 50;
      st.innerHTML = `
        <div class="stat"><div class="k">${T("轮次", "Rounds")}</div><div class="v">${rounds}</div></div>
        <div class="stat"><div class="k">${T("倾向靠右的人", "Lean right")}</div><div class="v" style="color:var(--orange-ink)">${right}</div></div>
        <div class="stat"><div class="k">${T("倾向靠左的人", "Lean left")}</div><div class="v" style="color:var(--blue)">${N - right}</div></div>
        <div class="stat"><div class="k">${T("预期碰撞率", "Expected collision rate")}</div><div class="v ${collisions < 10 ? "pos" : "neg"}">${collisions.toFixed(0)}%</div></div>`;
      const lines = [];
      if (rounds === 0) lines.push(T("六十个人，各自随机倾向。两两相遇：同侧顺利错身，异侧撞上。每人只知道自己这次撞没撞。", "Sixty people with random leanings. They meet in pairs: same side, they pass; different sides, they collide. Each knows only whether they collided this time."));
      else if (Math.abs(avg - 0.5) < 0.3) lines.push(`<span class="warn">${T("还在摸索：有人往右、有人往左，碰撞率高。注意没有人看得到“全城的倾向”——每个人只有自己的经验。", "Still groping: some lean right, some left, collisions are frequent. Note that nobody can see the “town-wide tendency” — each person has only their own experience.")}</span>`);
      else lines.push(`<span class="ok">${T(`规范出现了：全城收敛到“靠${avg > 0.5 ? "右" : "左"}”。没有立法者，没有会议，没有人知道整体——只有几十次“撞上/没撞上”的局部反馈。而且是靠右还是靠左纯属偶然（重置再试一次），这就是哈耶克说的：规则可以是任意的，但规则一旦成型，秩序就是真的。`, `A norm has emerged: the town has converged on “keep ${avg > 0.5 ? "right" : "left"}.” No legislator, no meeting, nobody who saw the whole — only dozens of local “collided / didn't” signals. And whether it is right or left is pure accident (reset and try again): as Hayek said, the rule may be arbitrary, but once it forms, the order is real.`)}</span>`);
      lines.push(T("同样的结构长出了语言的用法、货币的选择、普通法的先例——以及阶段 17.4 的协议共识。", "The same structure grows linguistic usage, the choice of money, common-law precedent — and the protocol consensus of Stage 17.4."));
      lg.innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
    }
  };

  const tick = () => { if (mode === "paths") { for (let i = 0; i < 20; i++) stepPaths(); } else { for (let i = 0; i < 3; i++) stepNorm(); } paint(); };
  const stopAuto = () => { if (timer) { clearInterval(timer); timer = null; root.querySelector("#oe-run").classList.remove("active"); } };

  root.querySelectorAll("#oe-seg button").forEach((b) => b.addEventListener("click", () => { stopAuto(); mode = b.dataset.m; paint(); }));
  root.querySelector("#oe-step").addEventListener("click", tick);
  root.querySelector("#oe-run").addEventListener("click", () => {
    if (timer) return stopAuto();
    root.querySelector("#oe-run").classList.add("active");
    let k = 0; timer = setInterval(() => { tick(); if (++k >= 60) stopAuto(); }, 160);
  });
  root.querySelector("#oe-plan").addEventListener("click", () => { showPlan.on = !showPlan.on; paint(); });
  root.querySelector("#oe-reset").addEventListener("click", () => { stopAuto(); if (mode === "paths") resetPaths(); else resetNorm(); paint(); });
  paint();
}
