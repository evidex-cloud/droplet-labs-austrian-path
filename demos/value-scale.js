// 交互演示：价值序列（value scale）——用上/下按钮给 8 样东西排名（只有名次、没有分数）；
// “选择测试”读出展示性偏好；再和另一位“人物 × 天气”的排名对照，看排名怎样因人、因时刻而异，
// 以及“排名相反”的地方正是交换发生的地方。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const ITEMS = [
    { id: "umb", zh: "一把伞", en: "An umbrella", icon: "☂️" },
    { id: "cash", zh: "30 元现金", en: "$12 in cash", icon: "💵" },
    { id: "coffee", zh: "一杯咖啡", en: "A coffee", icon: "☕" },
    { id: "movie", zh: "一张电影票", en: "A movie ticket", icon: "🎬" },
    { id: "sleep", zh: "多睡一小时", en: "An extra hour of sleep", icon: "😴" },
    { id: "book", zh: "一本新书", en: "A new book", icon: "📖" },
    { id: "bus", zh: "一张公交票", en: "A bus ride", icon: "🚌" },
    { id: "pizza", zh: "一片披萨", en: "A slice of pizza", icon: "🍕" },
  ];
  const name = (id) => { const it = ITEMS.find((x) => x.id === id); return it.icon + " " + T(it.zh, it.en); };

  // 两位人物 × 两种天气的排名（纯序数）
  const PERSONAS = {
    rae: {
      label: T("小雨（没伞、赶着出门）", "Rae (no umbrella, heading out)"),
      rain: ["umb", "cash", "bus", "coffee", "sleep", "pizza", "movie", "book"],
      sun:  ["cash", "sleep", "coffee", "book", "movie", "pizza", "bus", "umb"],
    },
    sol: {
      label: T("小晴（家里三把伞、今天不出门）", "Sol (owns three umbrellas, staying in)"),
      rain: ["sleep", "cash", "book", "pizza", "movie", "coffee", "bus", "umb"],
      sun:  ["cash", "book", "sleep", "movie", "pizza", "coffee", "bus", "umb"],
    },
  };

  let mine = ["coffee", "cash", "sleep", "umb", "pizza", "movie", "book", "bus"];
  let persona = "rae", weather = "rain";
  let test = null; // {a, b, chosen}
  let testLog = [];

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧭 价值序列：只能排序，不能打分", "🧭 The value scale: you can sort, but you cannot score")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("① 你的排名（点 ▲▼ 调整；此刻、只属于你）", "① Your ranking (use ▲▼; this moment, yours alone)")}</label>
          <div id="vs-mine"></div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("③ 另一个人、另一种天气", "③ Another person, another kind of weather")}</label>
          <div class="demo-row">
            <div class="demo-seg" id="vs-persona">
              <button data-p="rae" class="on">${T("小雨", "Rae")}</button>
              <button data-p="sol">${T("小晴", "Sol")}</button>
            </div>
            <div class="demo-seg" id="vs-weather">
              <button data-w="rain" class="on">${T("🌧 下雨", "🌧 Rain")}</button>
              <button data-w="sun">${T("☀️ 晴天", "☀️ Sun")}</button>
            </div>
          </div>
          <div class="demo-meta" id="vs-plabel"></div>
          <div id="vs-theirs"></div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("② 选择测试：嘴上的排名 vs 手上的选择", "② Choice test: the ranking you wrote vs the choice you make")}</label>
        <div class="scn">
          <div class="scn-q" id="vs-q"></div>
          <div class="demo-btns" id="vs-choice"></div>
          <div class="scn-meta" id="vs-verdict"></div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("排名相反的地方 = 交换可能发生的地方", "Where the rankings reverse = where exchange can happen")}</label>
        <div class="demo-log" id="vs-log"></div>
      </div>
      <p class="demo-tip">${T(
        "看三件事：<strong>每一行只有名次，没有分数</strong>——你没法说“伞比咖啡高 2.3 分”；把天气从雨切到晴，小雨对伞的排名从第 1 掉到第 8——<strong>伞没变，时刻变了</strong>；最下面列出的每一对“你排 A&gt;B、对方排 B&gt;A”，就是一笔双方都预期获益的交换——这是阶段 1.5 的起点。",
        "Watch three things: <strong>each row has a position and no score</strong> — you cannot say “the umbrella is 2.3 points above the coffee”; flip the weather from rain to sun and Rae's umbrella drops from 1st to 8th — <strong>the umbrella did not change, the moment did</strong>; every pair listed at the bottom where you rank A&gt;B and they rank B&gt;A is an exchange both sides expect to gain from — the starting point of Stage 1.5."
      )}</p>
    </div>`;

  const rowHtml = (list, editable) => list.map((id, i) => `
    <div class="stage-bar" style="margin:4px 0">
      <span class="lab" style="width:34px;text-align:right;font-weight:700;color:${i === 0 ? "var(--orange-ink)" : "var(--muted)"}">#${i + 1}</span>
      <div class="track" style="height:auto;background:${id === "umb" ? "var(--orange-soft)" : "var(--surface-2)"};padding:6px 10px;font-size:13.5px;color:var(--ink);border-radius:6px">${name(id)}</div>
      ${editable ? `<span style="display:flex;gap:4px;flex:none">
        <button class="demo-btn" data-up="${i}" style="padding:3px 8px;font-size:12px" ${i === 0 ? "disabled" : ""}>▲</button>
        <button class="demo-btn" data-down="${i}" style="padding:3px 8px;font-size:12px" ${i === list.length - 1 ? "disabled" : ""}>▼</button>
      </span>` : `<span class="val" style="width:10px"></span>`}
    </div>`).join("");

  const newTest = () => {
    const a = Math.floor(Math.random() * ITEMS.length);
    let b = Math.floor(Math.random() * (ITEMS.length - 1)); if (b >= a) b++;
    test = { a: ITEMS[a].id, b: ITEMS[b].id, chosen: null };
  };

  const paint = () => {
    root.querySelector("#vs-mine").innerHTML = rowHtml(mine, true);
    root.querySelectorAll("[data-up]").forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.up; [mine[i - 1], mine[i]] = [mine[i], mine[i - 1]]; paint();
    }));
    root.querySelectorAll("[data-down]").forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.down; [mine[i + 1], mine[i]] = [mine[i], mine[i + 1]]; paint();
    }));

    const theirs = PERSONAS[persona][weather];
    root.querySelector("#vs-plabel").textContent = PERSONAS[persona].label + " · " + (weather === "rain" ? T("下雨天", "raining") : T("大晴天", "sunny"));
    root.querySelector("#vs-theirs").innerHTML = rowHtml(theirs, false);

    // 选择测试
    if (!test) newTest();
    const q = root.querySelector("#vs-q"), c = root.querySelector("#vs-choice"), v = root.querySelector("#vs-verdict");
    q.textContent = T("此刻只能拿一样，你拿哪个？（点了就算数，不许改）", "You can take exactly one right now. Which? (Clicking counts — no take-backs.)");
    if (test.chosen == null) {
      c.innerHTML = `<button class="demo-btn" data-pick="${test.a}">${name(test.a)}</button><button class="demo-btn" data-pick="${test.b}">${name(test.b)}</button>`;
      c.querySelectorAll("[data-pick]").forEach((b) => b.addEventListener("click", () => { test.chosen = b.dataset.pick; paint(); }));
      v.innerHTML = T("你的排名表说的是一回事；点下去的那一下，才是经济学承认的“展示性偏好”。", "Your written ranking is one thing; the click is the only thing economics counts as demonstrated preference.")
        + testLog.map((t) => `<div style="margin-top:6px;color:${t.ok ? "var(--green)" : "var(--orange-ink)"}">${t.line}</div>`).join("");
    } else {
      const other = test.chosen === test.a ? test.b : test.a;
      const saidRank = mine.indexOf(test.chosen) < mine.indexOf(other);
      const line = saidRank
        ? T(`你选了 ${name(test.chosen)}，和你写的排名一致。注意：一致不是“证明了排名表是真的”——它只证明<b>这一刻</b>你把它排在 ${name(other)} 前面。`, `You chose ${name(test.chosen)}, consistent with your list. Note: consistency does not “prove the list is true” — it only shows that <b>at this moment</b> you ranked it above ${name(other)}.`)
        : T(`你选了 ${name(test.chosen)}，可你的表把 ${name(other)} 排在它前面。奥派只认那一下点击：<b>行动展示的排名才算数</b>，表是表态。（罗斯巴德：偏好只在行动中被展示。）`, `You chose ${name(test.chosen)}, but your list puts ${name(other)} above it. Austrians count the click, not the list: <b>only the ranking demonstrated in action counts</b>; the list is a statement. (Rothbard: preference is demonstrated only in action.)`);
      if (!test.logged) { testLog.unshift({ ok: saidRank, line }); testLog = testLog.slice(0, 4); test.logged = true; }
      c.innerHTML = `<button class="demo-btn active" id="vs-next">${T("再来一题", "Another pair")}</button>`;
      c.querySelector("#vs-next").addEventListener("click", () => { newTest(); paint(); });
      v.innerHTML = testLog.map((t) => `<div class="${t.ok ? "" : ""}" style="margin-top:6px;color:${t.ok ? "var(--green)" : "var(--orange-ink)"}">${t.line}</div>`).join("");
    }

    // 交换可能：你排 A>B 且对方排 B>A
    const pairs = [];
    for (let i = 0; i < mine.length; i++) for (let j = i + 1; j < mine.length; j++) {
      const A = mine[i], B = mine[j]; // 你：A > B
      if (theirs.indexOf(B) < theirs.indexOf(A)) pairs.push([A, B]);
    }
    const log = root.querySelector("#vs-log");
    const head = `${T("你和", "Between you and")} <b>${PERSONAS[persona].label}</b>${T("之间，排名相反的组合有", " the number of reversed pairs is")} <b>${pairs.length}</b> / 28。`;
    const umbMine = mine.indexOf("umb") + 1, umbTheirs = theirs.indexOf("umb") + 1;
    const umbLine = `☂️ ${T("伞：你排第", "Umbrella: you rank it #")}${umbMine}${T("，对方排第", ", they rank it #")}${umbTheirs}。${weather === "rain" && persona === "rae" ? T("下雨天的小雨把伞排第 1——同一把伞，晴天她排第 8。", "Rae in the rain ranks it 1st — the same umbrella she ranks 8th in the sun.") : T("切换天气或人物，看伞的名次怎么跳。", "Switch the weather or the person and watch where it lands.")}`;
    const ex = pairs.slice(0, 4).map(([A, B]) => `<span class="ok">✓</span> ${T("你用", "You give")} ${name(B)} ${T("换来", "and get")} ${name(A)}${T("；对方正好相反。双方都预期获益——没有“等价交换”，只有相反的排名。", "; they do the reverse. Both expect to gain — no “equal value,” only reversed rankings.")}`);
    if (!pairs.length) ex.push(`<span class="warn">${T("两张表完全一样——没有任何交换会发生。交换需要分歧，不需要“公平”。", "The two lists are identical — no exchange can happen. Trade needs disagreement, not “fairness.”")}</span>`);
    log.innerHTML = [head, umbLine, ...ex].map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("#vs-persona button").forEach((b) => b.addEventListener("click", () => {
    persona = b.dataset.p; root.querySelectorAll("#vs-persona button").forEach((x) => x.classList.toggle("on", x === b)); paint();
  }));
  root.querySelectorAll("#vs-weather button").forEach((b) => b.addEventListener("click", () => {
    weather = b.dataset.w; root.querySelectorAll("#vs-weather button").forEach((x) => x.classList.toggle("on", x === b)); paint();
  }));
  paint();
}
