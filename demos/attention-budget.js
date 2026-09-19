// 交互演示：注意力预算——16 个清醒小时按边际效用分给排好序的用途；几家平台带着“钩子强度”来竞价，
// 事中感知的边际效用被放大，小时数漂移，最不迫切的用途先被挤掉；切换“付费层 / 摩擦工具”看结果怎么变；
// 读出平台侧的“注意力价格”（每小时广告收入）与你这一侧的机会成本。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const HOURS = 16, SLOT = 0.5, SLOTS = HOURS / SLOT;

  // 排好序的用途：v0 = 第一小时的（反思后的）边际价值；d = 每多一小时的递减系数
  const acts = [
    { id: "work",   name: T("工作 / 学习", "Work / study"),     v0: 10,  d: 0.75, color: "var(--orange)" },
    { id: "family", name: T("陪家人", "Family"),                v0: 8,   d: 0.70, color: "var(--orange)" },
    { id: "meals",  name: T("做饭吃饭", "Cooking & meals"),     v0: 7,   d: 0.45, color: "var(--orange)" },
    { id: "sport",  name: T("运动", "Exercise"),                v0: 5,   d: 0.55, color: "var(--orange)" },
    { id: "friend", name: T("见朋友", "Friends"),               v0: 4.5, d: 0.60, color: "var(--orange)" },
    { id: "read",   name: T("读书", "Reading"),                 v0: 3.4, d: 0.75, color: "var(--orange)" },
    { id: "idle",   name: T("发呆 / 早睡", "Idling / early night"), v0: 2.6, d: 0.80, color: "var(--orange)" },
  ];
  // 平台：base 是反思后的第一小时价值；平台的“钩子”只放大事中感知，不改变反思价值
  const plats = [
    { id: "short", name: T("短视频", "Short video"),  v0: 5.0, d: 0.60 },
    { id: "feed",  name: T("社交信息流", "Social feed"), v0: 4.2, d: 0.62 },
    { id: "chat",  name: T("群聊 / 消息", "Group chats"), v0: 3.6, d: 0.58 },
  ];

  let hook = 1.2;          // 钩子强度 0–3
  let mode = "ads";        // ads / friction / paid
  let adPerHour = 1.0;     // 平台每小时广告收入（美元）
  let wage = 25;           // 你的机会成本（美元/小时）

  // 感知 vs 反思：感知 MU = 反思 MU × (1 + k·hook)，并把递减放慢（“下一条更精彩”）
  const effHook = () => (mode === "ads" ? hook : mode === "friction" ? hook * 0.35 : 0);
  const reflMU = (a, h) => a.v0 * Math.pow(a.d, h);                 // h = 已用小时数
  const percMU = (p, h) => {
    const k = effHook();
    const dSlow = p.d + (1 - p.d) * Math.min(1, k / 3) * 0.55;       // 钩子越强，递减越慢
    const bonus = mode === "paid" ? 1.1 : 1;                          // 付费层：无广告，内容本身略好
    return p.v0 * bonus * (1 + 0.45 * k) * Math.pow(dSlow, h);
  };
  const paidReflMU = (p, h) => p.v0 * (mode === "paid" ? 1.1 : 1) * Math.pow(p.d, h);

  // 贪心分配：每个半小时给“当下边际效用最高”的用途
  function allocate(withPlatforms, byReflection) {
    const hrs = {};
    acts.forEach((a) => (hrs[a.id] = 0));
    plats.forEach((p) => (hrs[p.id] = 0));
    for (let s = 0; s < SLOTS; s++) {
      let best = null, bestMU = -1;
      for (const a of acts) { const mu = reflMU(a, hrs[a.id]); if (mu > bestMU) { bestMU = mu; best = a.id; } }
      if (withPlatforms) for (const p of plats) {
        const mu = byReflection ? paidReflMU(p, hrs[p.id]) : percMU(p, hrs[p.id]);
        if (mu > bestMU) { bestMU = mu; best = p.id; }
      }
      hrs[best] += SLOT;
    }
    return hrs;
  }
  // 反思价值：把分配好的小时按“反思 MU”积分
  function reflValue(hrs) {
    let v = 0;
    for (const a of acts) for (let h = 0; h < hrs[a.id]; h += SLOT) v += reflMU(a, h) * SLOT;
    for (const p of plats) for (let h = 0; h < hrs[p.id]; h += SLOT) v += paidReflMU(p, h) * SLOT;
    return v;
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⏳ 注意力预算：16 个清醒小时，谁在竞价，谁被挤掉", "⏳ The attention budget: 16 waking hours — who bids, who gets pushed off")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("平台钩子强度（无限滚动、自动播放、红点）：", "Platform hook strength (infinite scroll, autoplay, badges): ")}<b id="ab-hv">1.2</b></label>
          <input class="demo-slider" id="ab-hook" type="range" min="0" max="3" step="0.1" value="1.2" />
          <div class="demo-label" style="margin-top:12px">${T("商业模式 / 用户工具", "Business model / user tools")}</div>
          <div class="demo-seg" id="ab-mode">
            <button class="on" data-m="ads">${T("广告驱动", "Ad-funded")}</button>
            <button data-m="friction">${T("+ 摩擦工具", "+ friction tools")}</button>
            <button data-m="paid">${T("付费层", "Paid tier")}</button>
          </div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("平台每小时广告收入（美元）：", "Platform ad revenue per hour ($): ")}<b id="ab-av">1.0</b></label>
          <input class="demo-slider" id="ab-ad" type="range" min="0.2" max="4" step="0.1" value="1" />
          <label class="demo-label" style="margin-top:12px">${T("你的机会成本（美元/小时）：", "Your opportunity cost ($/hour): ")}<b id="ab-wv">25</b></label>
          <input class="demo-slider" id="ab-wage" type="range" min="5" max="100" step="5" value="25" />
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("小时分配（实线 = 有平台时的事中分配；虚线框 = 没有平台时的基线）", "Hours allocated (solid = in-the-moment allocation with platforms; dashed = baseline without platforms)")}</div>
        <div class="stages" id="ab-bars"></div>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("平台小时/天", "Platform hrs/day")}</div><div class="v acc" id="ab-ph">–</div></div>
        <div class="stat"><div class="k">${T("反思价值（当前）", "Reflective value (now)")}</div><div class="v" id="ab-rv">–</div></div>
        <div class="stat"><div class="k">${T("反思最优", "Reflective optimum")}</div><div class="v" id="ab-ro">–</div></div>
        <div class="stat"><div class="k">${T("后悔缺口", "Regret gap")}</div><div class="v" id="ab-gap">–</div></div>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("平台从你身上：$/年", "Platform earns from you: $/yr")}</div><div class="v" id="ab-earn">–</div></div>
        <div class="stat"><div class="k">${T("你的时间成本：$/年", "Your time cost: $/yr")}</div><div class="v" id="ab-cost">–</div></div>
        <div class="stat"><div class="k">${T("最先被挤掉的用途", "First use dropped")}</div><div class="v" id="ab-drop" style="font-size:14px">–</div></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="ab-log"></div></div>
      <p class="demo-tip">${T(
        "看三件事：① 钩子从 0 拉到 3，平台小时数上升，被挤掉的用途按<strong>边际顺序</strong>消失——先“发呆/早睡”，再“读书”，最后是“运动”和“家人”；② <strong>后悔缺口</strong>只在钩子放大了“事中感知”时才出现——钩子为 0 时，刷几小时也是正确的边际分配；③ 切到“付费层”，平台不再优化时长，缺口消失，但你要付订阅费——这就是用价格把两侧重新绑在一起。",
        "Watch three things: ① as hook strength goes from 0 to 3, platform hours rise and the uses pushed off vanish in <strong>marginal order</strong> — idling first, then reading, and finally exercise and family; ② the <strong>regret gap</strong> appears only when the hook inflates in-the-moment perception — at hook 0, a few hours of scrolling is a perfectly correct marginal allocation; ③ switch to “paid tier”: the platform stops optimizing duration, the gap closes, but you pay a subscription — price re-tying the two sides."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const paint = () => {
    $("ab-hv").textContent = hook.toFixed(1);
    $("ab-av").textContent = adPerHour.toFixed(1);
    $("ab-wv").textContent = wage;

    const base = allocate(false, false);            // 没有平台
    const now = allocate(true, false);              // 有平台，按事中感知分配
    const opt = allocate(true, true);               // 有平台，按反思价值分配（“今早的你”会怎么分）
    const vNow = reflValue(now), vOpt = reflValue(opt), vBase = reflValue(base);

    const all = [...acts, ...plats];
    const maxH = 7;
    $("ab-bars").innerHTML = all.map((x) => {
      const isP = plats.includes(x);
      const h = now[x.id], b = base[x.id] || 0;
      const lost = !isP && h < b - 1e-9;
      return `<div class="stage-bar">
        <span class="lab" style="${isP ? "color:var(--blue);font-weight:600" : lost ? "color:var(--red)" : ""}">${x.name}</span>
        <div class="track">
          <div class="fill" style="width:${(h / maxH) * 100}%;background:${isP ? "var(--blue)" : "var(--orange)"};opacity:${isP ? 0.9 : 0.75}"></div>
          ${!isP ? `<div class="fill ghost" style="width:${(b / maxH) * 100}%"></div>` : ""}
        </div>
        <span class="val" style="${lost ? "color:var(--red)" : ""}">${h.toFixed(1)}h${lost ? ` (−${(b - h).toFixed(1)})` : ""}</span>
      </div>`;
    }).join("");

    const ph = plats.reduce((s, p) => s + now[p.id], 0);
    const gap = vOpt > 0 ? (vOpt - vNow) / vOpt : 0;
    $("ab-ph").textContent = ph.toFixed(1);
    $("ab-rv").textContent = vNow.toFixed(1);
    $("ab-ro").textContent = vOpt.toFixed(1);
    const g = $("ab-gap"); g.textContent = (gap * 100).toFixed(1) + "%"; g.className = "v " + (gap > 0.08 ? "neg" : gap > 0.02 ? "" : "pos");

    const earn = mode === "paid" ? 0 : ph * 365 * adPerHour;
    const sub = mode === "paid" ? 12 * 12 : 0; // 付费层示意：12 美元/月
    $("ab-earn").textContent = "$" + Math.round(earn + sub).toLocaleString() + (mode === "paid" ? T("（订阅）", " (subs)") : "");
    $("ab-cost").textContent = "$" + Math.round(ph * 365 * wage).toLocaleString();

    // 被挤掉的用途：按“基线里排最后”的顺序找第一个丢小时的
    // 按“基线里最后那半小时的边际效用”从低到高排：最低的那个最先被挤掉
    const dropped = acts.filter((a) => now[a.id] < (base[a.id] || 0) - 1e-9)
      .sort((a, b) => reflMU(a, base[a.id] - SLOT) - reflMU(b, base[b.id] - SLOT));
    const first = dropped.length ? dropped[0] : null;
    $("ab-drop").textContent = first ? first.name : T("（无）", "(none)");

    const lines = [];
    if (ph === 0) lines.push(`<span class="warn">${T("平台一小时都没拿到——它们的第一小时价值低于你所有用途的边际价值。把钩子拉高试试。", "Platforms got no hours — their first hour is worth less than the margin of every other use. Raise the hook.")}</span>`);
    else {
      const optPh = plats.reduce((s, p) => s + opt[p.id], 0);
      lines.push(`${T("按反思价值，你会给平台", "By reflective value you would give platforms")} <b>${optPh.toFixed(1)}h</b>${T("；事中你给了", "; in the moment you gave")} <b>${ph.toFixed(1)}h</b>。${ph > optPh + 0.01 ? `<span class="bad">${T("多出的", "The extra")} ${(ph - optPh).toFixed(1)}h ${T("就是“第四个小时为什么没停”。", "is “why you didn't stop at hour four.”")}</span>` : `<span class="ok">${T("两者一致：刷这些小时是正确的边际分配，没有后悔缺口。", "They agree: these hours are a correct marginal allocation — no regret gap.")}</span>`}`);
      if (dropped.length) lines.push(`${T("被挤掉的用途（边际顺序）：", "Uses pushed off (marginal order): ")}${dropped.map((a) => `<b>${a.name}</b> −${(base[a.id] - now[a.id]).toFixed(1)}h`).join("　")}`);
      lines.push(`${T("平台侧的注意力价格：", "Attention price on the platform side: ")}<b>$${adPerHour.toFixed(2)}/h</b>${T("；你这一侧的机会成本：", "; your side's opportunity cost: ")}<b>$${wage}/h</b>${T("。差 ", ". A ")}${(wage / Math.max(0.01, adPerHour)).toFixed(0)}×${T(" 不是剥削——是同一小时的两种评价（阶段 1.2）。", " gap is not exploitation — it is two valuations of the same hour (Stage 1.2).")}`);
      if (mode === "paid") lines.push(`<span class="ok">${T("付费层：平台收入取决于你续不续费，它不再有放大“事中感知”的动机——钩子被置零，缺口消失。代价：约 $144/年的订阅。", "Paid tier: revenue now depends on whether you renew, so the platform has no motive to inflate in-the-moment perception — hook set to zero, gap closed. Cost: about $144/yr in subscriptions.")}</span>`);
      if (mode === "friction") lines.push(`<span class="ok">${T("摩擦工具：钩子的有效强度降到 35%——这是市场为“今早的你”提供的武器，不需要监管。", "Friction tools: effective hook cut to 35% — the market arming “this morning's you,” no regulation needed.")}</span>`);
      lines.push(`${T("没有平台时的反思价值 ", "Reflective value without platforms ")}${vBase.toFixed(1)}${T("；有平台、按反思分配 ", "; with platforms, allocated reflectively ")}${vOpt.toFixed(1)}${T(" —— 平台本身", " — the platforms themselves ")}${vOpt > vBase ? T("提高了你的价值：它们不是零和的。", "raise your value: they are not zero-sum.") : T("没有提高你的价值。", "add nothing.")}`);
    }
    $("ab-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("ab-hook").addEventListener("input", (e) => { hook = +e.target.value; paint(); });
  $("ab-ad").addEventListener("input", (e) => { adPerHour = +e.target.value; paint(); });
  $("ab-wage").addEventListener("input", (e) => { wage = +e.target.value; paint(); });
  $("ab-mode").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    mode = b.dataset.m;
    $("ab-mode").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    paint();
  }));
  paint();
}
