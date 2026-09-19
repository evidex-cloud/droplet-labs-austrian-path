// 交互演示：稀缺排程器——把有限的手段（一个晚上的小时数 / 一家创业公司的跑道）分配给按重要性排好的目的；
// 拖动“手段有多少”，看哪些目的被装进去、哪个目的卡在边界上（边际目的）、哪些被整个放弃。
// 支持调整每个目的的“要多少”，以及用 ▲▼ 重排优先级——排序是行动人自己的事，经济学只看稀缺怎么逼他。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const scenarios = {
    student: {
      label: T("🎓 一个学生的晚上", "🎓 A student's evening"),
      unit: T("小时", "h"),
      unitLong: T("小时", "hours"),
      min: 1, max: 12, step: 0.5, start: 6,
      meansLabel: T("今晚可用的时间", "Time available tonight"),
      ends: [
        { name: T("复习明天的考试", "Revise for tomorrow's exam"), need: 2, max: 4 },
        { name: T("做一单兼职设计稿", "Finish a freelance design job"), need: 2, max: 4 },
        { name: T("去健身房", "Go to the gym"), need: 1, max: 3 },
        { name: T("给爸妈打电话", "Call parents"), need: 0.5, max: 2 },
        { name: T("追两集剧", "Watch two episodes"), need: 1.5, max: 4 },
      ],
    },
    founder: {
      label: T("🚀 一家创业公司的跑道", "🚀 A founder's runway"),
      unit: T("万", "k"),
      unitLong: T("万元", "k dollars"),
      min: 200, max: 4000, step: 100, start: 1800,
      meansLabel: T("账上的钱（万）", "Cash in the bank ($k)"),
      ends: [
        { name: T("把产品做完（8 个月人力）", "Finish the product (8 months of payroll)"), need: 800, max: 1600 },
        { name: T("再招 5 个工程师（一年）", "Hire 5 more engineers (one year)"), need: 360, max: 800 },
        { name: T("一轮市场推广", "One marketing push"), need: 300, max: 800 },
        { name: T("开一个海外办公室", "Open an overseas office"), need: 500, max: 1000 },
        { name: T("留 6 个月缓冲", "Keep a 6-month cushion"), need: 600, max: 1200 },
      ],
    },
  };

  let key = "student";
  let means = scenarios.student.start;
  // 每个场景独立保存当前的目的顺序与需求量（深拷贝，避免污染原始数据）
  const state = {};
  for (const k in scenarios) state[k] = scenarios[k].ends.map((e) => ({ ...e }));

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🍱 稀缺排程器：手段不够时，哪个目的被挤出去？", "🍱 The scarcity scheduler: when means run short, which end gets squeezed out?")}</div>
      <div class="demo-seg" id="ss-seg">
        ${Object.keys(scenarios).map((k) => `<button data-k="${k}" class="${k === key ? "on" : ""}">${scenarios[k].label}</button>`).join("")}
      </div>
      <div class="demo-grid" style="margin-top:12px">
        <div class="demo-block">
          <label class="demo-label" id="ss-means-label"></label>
          <input class="demo-slider" type="range" id="ss-means" />
          <div class="stat-row">
            <div class="stat"><div class="k">${T("手段总量", "Total means")}</div><div class="v acc" id="ss-st-means">–</div></div>
            <div class="stat"><div class="k">${T("目的总需求", "Total wants")}</div><div class="v" id="ss-st-wants">–</div></div>
            <div class="stat"><div class="k">${T("缺口", "Shortfall")}</div><div class="v" id="ss-st-gap">–</div></div>
          </div>
          <div class="demo-meta">${T("按目的的重要性从队头往后填：填满的进队，填到一半的卡在边界，填不到的被放弃。用 ▲▼ 改排序、拖动“要多少”改需求——看边界怎么移动。", "Fill from the top of the ranking: fully funded ends get in, the one that only partly fits sits on the boundary, the rest are dropped. Re-rank with ▲▼ and change “how much” to watch the boundary move.")}</div>
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("目的（按你的排序）", "Ends (in your ranking)")}</div>
          <div class="stages" id="ss-ends"></div>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-log" id="ss-log"></div>
      </div>
      <p class="demo-tip">${T(
        "盯住<strong>橙色虚线框</strong>的那一项：它是“边际目的”——手段每少一点，先被砍的就是它；手段每多一点，先回来的也是它。价格、机会成本、边际效用，全部都在这条边界上发生（阶段 1.1、阶段 1.4）。把跑道从 1800 拖到 3000，再拖到 600，看边界怎么一路往上爬。",
        "Watch the item in the <strong>orange dashed box</strong>: that is the “marginal end” — the first to be cut when means shrink, the first to return when means grow. Prices, opportunity cost and marginal utility all happen on this boundary (Stage 1.1, Stage 1.4). Drag the runway from 1,800 to 3,000, then down to 600, and watch the boundary climb the list."
      )}</p>
    </div>`;

  const seg = root.querySelector("#ss-seg");
  const slider = root.querySelector("#ss-means");
  const endsBox = root.querySelector("#ss-ends");

  const fmt = (v) => (Math.round(v * 10) / 10).toString();

  const setupSlider = () => {
    const sc = scenarios[key];
    slider.min = sc.min; slider.max = sc.max; slider.step = sc.step; slider.value = means;
  };

  // 真算：按顺序把手段分给目的
  const allocate = () => {
    const ends = state[key];
    let left = means;
    const rows = [];
    let marginalIdx = -1;
    for (let i = 0; i < ends.length; i++) {
      const e = ends[i];
      const got = Math.max(0, Math.min(e.need, left));
      left -= got;
      let status;
      if (got >= e.need - 1e-9) status = "full";
      else if (got > 0) status = "partial";
      else status = "dropped";
      if (marginalIdx < 0 && status !== "full") marginalIdx = i;
      rows.push({ ...e, got, status });
    }
    // 如果全部装满，边际目的就是最后一个（再少一点手段，它先被砍）
    if (marginalIdx < 0 && rows.length) marginalIdx = rows.length - 1;
    return { rows, left: Math.max(0, left), marginalIdx };
  };

  const paint = () => {
    const sc = scenarios[key];
    root.querySelector("#ss-means-label").innerHTML = `${sc.meansLabel}：<b>${fmt(means)}</b> ${sc.unit}`;
    const { rows, left, marginalIdx } = allocate();
    const wants = rows.reduce((s, r) => s + r.need, 0);
    const gap = wants - means;
    root.querySelector("#ss-st-means").textContent = fmt(means) + " " + sc.unit;
    root.querySelector("#ss-st-wants").textContent = fmt(wants) + " " + sc.unit;
    const gapEl = root.querySelector("#ss-st-gap");
    gapEl.textContent = (gap > 0 ? "−" : "+") + fmt(Math.abs(gap)) + " " + sc.unit;
    gapEl.className = "v " + (gap > 0 ? "neg" : "pos");

    const maxNeed = Math.max(...rows.map((r) => r.max));
    endsBox.innerHTML = rows.map((r, i) => {
      const marginal = i === marginalIdx;
      const color = r.status === "full" ? "var(--orange)" : r.status === "partial" ? "var(--orange)" : "var(--line)";
      const pct = (r.need / maxNeed) * 100;
      const gotPct = r.need > 0 ? (r.got / r.need) * 100 : 0;
      const tag = r.status === "full" ? `<span class="pill ok">${T("进队", "in")}</span>`
        : r.status === "partial" ? `<span class="pill" style="background:var(--orange-soft);color:var(--orange-ink)">${T("卡在边界", "on the edge")}</span>`
        : `<span class="pill bad">${T("放弃", "dropped")}</span>`;
      return `<div class="stage-bar" style="${marginal ? "outline:2px dashed var(--orange);outline-offset:3px;border-radius:6px" : ""}">
        <span class="lab" style="width:150px;text-align:left;${r.status === "dropped" ? "color:var(--muted)" : "color:var(--ink);font-weight:600"}">
          <button class="demo-btn" data-up="${i}" style="padding:0 5px;font-size:10px;line-height:16px" ${i === 0 ? "disabled" : ""}>▲</button><button class="demo-btn" data-down="${i}" style="padding:0 5px;font-size:10px;line-height:16px" ${i === rows.length - 1 ? "disabled" : ""}>▼</button>
          ${i + 1}. ${r.name}
        </span>
        <div class="track" style="width:${pct}%;flex:none;max-width:60%">
          <div class="fill" style="width:${gotPct}%;background:${color};opacity:${r.status === "dropped" ? 0.25 : 1}"></div>
        </div>
        <span class="val" style="min-width:150px;display:inline-flex;gap:6px;align-items:center;font-size:12px">
          <input type="range" data-need="${i}" min="${sc.step}" max="${r.max}" step="${sc.step}" value="${r.need}" style="width:60px;accent-color:var(--orange)" title="${T("要多少", "how much")}"/>
          ${fmt(r.got)}/${fmt(r.need)} ${tag}
        </span>
      </div>`;
    }).join("");

    const lines = [];
    const m = rows[marginalIdx];
    const dropped = rows.filter((r) => r.status === "dropped");
    if (gap <= 0) {
      lines.push(`<span class="ok">${T("手段够用：所有目的都装下了，还剩", "Means suffice: every end fits, with")} <b>${fmt(left)} ${sc.unit}</b> ${T("没用上。经济学的问题在这里几乎消失——但只要你再想多做一件事，它马上回来。", "to spare. The economic problem almost vanishes here — add one more wish and it is back at once.")}</span>`);
      lines.push(`${T("此刻的边际目的是", "The marginal end right now is")} <b>${m.name}</b>${T("：手段再少", ": cut the means by")} ${fmt(m.need)} ${sc.unit}${T("，它就第一个被砍。", " and it is the first to go.")}`);
    } else {
      lines.push(`<span class="warn">${T("缺口", "Shortfall")} <b>${fmt(gap)} ${sc.unit}</b>${T("：目的总需求超过手段，必须放弃。", ": wants exceed means; something has to give.")}</span>`);
      if (m) {
        if (m.status === "partial") lines.push(`${T("边际目的", "Marginal end")} <b>${m.name}</b> ${T("只拿到", "gets only")} ${fmt(m.got)}/${fmt(m.need)} ${sc.unit}${T("——它就是你为前面几项付出的真实成本（机会成本）。", " — it is the real cost of everything ranked above it (opportunity cost).")}`);
        else lines.push(`${T("边际目的", "Marginal end")} <b>${m.name}</b> ${T("被整个放弃——它是你这次选择的机会成本。", "is dropped entirely — that is the opportunity cost of this choice.")}`);
      }
      if (dropped.length) lines.push(`${T("被放弃的目的：", "Dropped ends: ")}<span class="bad">${dropped.map((d) => d.name).join(T("、", ", "))}</span>${T("——它们在任何账本上都看不见，但它们是真的（阶段 1.4）。", " — invisible in any ledger, but real (Stage 1.4).")}`);
    }
    const fullCount = rows.filter((r) => r.status === "full").length;
    lines.push(`${T("装进队的目的：", "Ends fully funded: ")}<b>${fullCount}/${rows.length}</b>${T("。注意：排序是你的，经济学不评判它；它只告诉你——给定这个排序，稀缺会把边界画在哪。", ". Note: the ranking is yours and economics does not judge it; it only tells you where scarcity draws the line, given that ranking.")}`);
    root.querySelector("#ss-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  seg.addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-k]");
    if (!b) return;
    key = b.dataset.k;
    means = scenarios[key].start;
    seg.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    setupSlider();
    paint();
  });
  slider.addEventListener("input", () => { means = +slider.value; paint(); });
  endsBox.addEventListener("input", (ev) => {
    const inp = ev.target.closest("input[data-need]");
    if (!inp) return;
    state[key][+inp.dataset.need].need = +inp.value;
    paint();
  });
  endsBox.addEventListener("click", (ev) => {
    const up = ev.target.closest("button[data-up]"), down = ev.target.closest("button[data-down]");
    const arr = state[key];
    if (up) { const i = +up.dataset.up; if (i > 0) { [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; paint(); } }
    if (down) { const i = +down.dataset.down; if (i < arr.length - 1) { [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; paint(); } }
  });

  setupSlider();
  paint();
}
