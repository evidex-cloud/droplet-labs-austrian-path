// 交互演示：干预的螺旋——选一个起点干预（牛奶限价 / 燃油补贴 / 租金冻结），
// 每一轮用一个线性供需模型真算出“意外后果”，然后你选择“再加一道”还是“撤回”。
// 分支树用 .tl 时间线填充；终点要么是撤回（市场重新出清，但已有资本损失），要么是全面管制。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);
  const f1 = (v) => (Math.round(v * 10) / 10).toString();

  // 线性市场：Qd = a − b·P，Qs = c + d·P；每一轮 c 下降 k（边际生产者退出、资本外流）
  const scenarios = {
    milk: {
      name: T("🥛 牛奶限价", "🥛 Milk price cap"),
      unit: T("万升/天", "10k liters/day"),
      money: T("元", ""),
      a: 100, b: 20, c: -20, d: 20, k: 8, cap: 2,
      metric: T("短缺", "Shortage"),
      rounds: [
        { rule: T("① 牛奶零售价 ≤ 2 元（市场价 3 元）", "① Retail milk capped at 2 (market price 3)"),
          why: T("目的：让穷人喝到更多牛奶", "Goal: more milk for the poor"),
          effect: T("边际奶农亏损退出；2 元的牛奶人人多买。货架空了。", "Marginal dairy farmers lose money and exit; at 2 everyone buys more. Shelves empty."),
          next: T("② 限制饲料价格，“降低奶农成本”", "② Cap feed prices to “lower farmers' costs”") },
        { rule: T("② 饲料价格 ≤ 5 元（市场价 6 元）", "② Feed capped at 5 (market price 6)"),
          why: T("理由：奶农退出是因为饲料太贵", "Rationale: farmers left because feed is too dear"),
          effect: T("边际饲料商退出，饲料短缺；能买到饲料的奶农更少，牛奶缺口反而扩大。", "Marginal feed merchants exit; feed runs short; fewer farmers can get feed, and the milk gap widens."),
          next: T("③ 限制化肥、柴油价格 + 冻结农业工资", "③ Cap fertilizer & diesel, freeze farm wages") },
        { rule: T("③ 化肥、柴油限价 + 农业工资冻结", "③ Fertilizer & diesel capped, farm wages frozen"),
          why: T("理由：饲料商退出是因为投入品太贵", "Rationale: feed merchants left because inputs are too dear"),
          effect: T("整条农业链条上的边际生产者都在退出；农业工人流向城市；短缺沿链条向上蔓延。", "Marginal producers exit all along the agricultural chain; farm workers drift to the cities; shortages spread upstream."),
          next: T("④ 强制交售配额 + 禁止奶牛出售/屠宰", "④ Compulsory delivery quotas + ban on selling or slaughtering cows") },
        { rule: T("④ 强制交售配额 + 禁止处置奶牛", "④ Compulsory delivery quotas + ban on disposing of cows"),
          why: T("理由：“囤积”与“破坏生产”必须被制止", "Rationale: “hoarding” and “sabotage” must be stopped"),
          effect: T("奶农失去对产出与资本品的处置权；黑市与瞒报成为常态；监督成本暴涨。", "Farmers lose control over output and capital goods; black markets and under-reporting become the norm; enforcement costs explode."),
          next: T("⑤ 国家统一定价、定产、定分配", "⑤ The state sets all prices, output and allocation") },
      ],
    },
    fuel: {
      name: T("⛽ 燃油补贴", "⛽ Fuel subsidy"),
      unit: T("百万升/天", "M liters/day"),
      money: T("元", ""),
      a: 120, b: 20, c: -40, d: 20, k: 10, cap: 3.5, subsidy: 1,
      metric: T("短缺 / 财政窟窿", "Shortage / fiscal hole"),
      rounds: [
        { rule: T("① 每升燃油补贴 1 元（市场价 4 元，消费者只付 3.5 元）", "① Subsidy of 1 per liter (market price 4, consumers pay 3.5)"),
          why: T("目的：减轻家庭出行负担", "Goal: ease household transport costs"),
          effect: T("消费量大增；财政每天多付一大笔；邻国走私客开着油罐车来买。", "Consumption jumps; the treasury pays out every day; smugglers from next door arrive with tankers."),
          next: T("② 禁止燃油出口 + 边境检查", "② Ban fuel exports + border checks") },
        { rule: T("② 燃油出口禁令 + 边境检查", "② Fuel export ban + border checks"),
          why: T("理由：补贴被走私客“偷走了”", "Rationale: smugglers are “stealing” the subsidy"),
          effect: T("走私转入地下，检查成本上升；补贴账单继续膨胀，财政开始拖欠炼油厂。", "Smuggling goes underground; enforcement costs rise; the subsidy bill keeps growing and the treasury falls behind on payments to refiners."),
          next: T("③ 按人头配给：油票制", "③ Per-person rationing: fuel coupons") },
        { rule: T("③ 油票配给（每人每月定量）", "③ Fuel coupons (fixed monthly quota per person)"),
          why: T("理由：控制财政支出，“公平分配”", "Rationale: contain spending, “fair shares”"),
          effect: T("油票黑市出现；加油站排长队；炼油厂因拖欠款减产，供应量下降。", "A black market in coupons appears; long queues at pumps; refiners cut output because they are not being paid."),
          next: T("④ 炼油厂零售限价 + 强制供应义务", "④ Retail price cap on refiners + compulsory supply obligation") },
        { rule: T("④ 炼油零售限价 + 强制供应", "④ Refinery price cap + compulsory supply"),
          why: T("理由：“炼油厂在要挟国家”", "Rationale: “refiners are holding the country hostage”"),
          effect: T("民营炼油厂亏损停产或被接管；进口依赖上升；外汇告急。", "Private refiners run at a loss, shut or are taken over; import dependence rises; foreign exchange runs short."),
          next: T("⑤ 炼油与分销国有化，统一定量", "⑤ Nationalise refining and distribution, central rationing") },
      ],
    },
    rent: {
      name: T("🏠 租金冻结", "🏠 Rent freeze"),
      unit: T("千套", "thousand units"),
      money: T("元/月", "/mo"),
      a: 3000, b: 2, c: -1000, d: 2, k: 120, cap: 800,
      metric: T("住房短缺", "Housing shortage"),
      rounds: [
        { rule: T("① 租金冻结在 800（市场价 1000）", "① Rents frozen at 800 (market 1000)"),
          why: T("目的：让租客住得起", "Goal: keep housing affordable for tenants"),
          effect: T("出租房源减少（转售、转商用、空置）；申请者暴增；找房靠关系。", "Rental supply shrinks (sales, conversions, vacancies); applicants surge; flats go to whoever knows someone."),
          next: T("② 禁止改售/改商用 + 禁止驱逐", "② Ban conversions/sales + ban evictions") },
        { rule: T("② 禁止改售改商用 + 禁止驱逐", "② Conversion ban + eviction ban"),
          why: T("理由：房东在“逃避管制”", "Rationale: landlords are “dodging the controls”"),
          effect: T("房东削减维修与服务，楼房质量下降；现住租客不搬，新租客更找不到房。", "Landlords cut maintenance and services; buildings decay; sitting tenants never move, so newcomers find nothing."),
          next: T("③ 强制维修标准 + 罚款", "③ Mandatory maintenance standards + fines") },
        { rule: T("③ 强制维修标准 + 罚款", "③ Mandatory maintenance standards + fines"),
          why: T("理由：房东“故意让房子烂掉”", "Rationale: landlords are “letting buildings rot on purpose”"),
          effect: T("维修成本高于冻结租金，房东弃楼或抵押违约；新建出租房归零。", "Repair costs exceed frozen rents; landlords abandon buildings or default; new rental construction falls to zero."),
          next: T("④ 市政接管弃楼 + 统一轮候名单", "④ Municipal takeover of abandoned buildings + a single waiting list") },
        { rule: T("④ 市政接管 + 统一轮候名单", "④ Municipal takeover + central waiting list"),
          why: T("理由：私人房东“不可靠”", "Rationale: private landlords are “unreliable”"),
          effect: T("轮候时间以年计（斯德哥尔摩式）；分配靠积分、关系与运气；房子仍然不够。", "Waiting times run into years (Stockholm-style); allocation by points, connections and luck; still not enough housing."),
          next: T("⑤ 住房全面公有、统一分配", "⑤ Housing fully public, centrally allocated") },
      ],
    },
  };

  let key = "milk";
  let round = 0;          // 已生效的干预数
  let ended = null;       // null | 'repeal' | 'total'
  let history = [];       // 每轮记录

  const eq = (s, r) => {
    const c = s.c - s.k * r;
    const P = (s.a - c) / (s.b + s.d);
    return { P, Q: s.a - s.b * P, c };
  };
  const gapAt = (s, r) => {
    const c = s.c - s.k * r;
    const sub = s.subsidy || 0;
    const Qd = s.a - s.b * s.cap;                 // 消费者按管制价/补贴后价买
    const Qs = Math.max(0, c + s.d * (s.cap + sub)); // 生产者拿到管制价 + 补贴
    const traded = Math.min(Qd, Qs);
    return { Qd, Qs, gap: Math.max(0, Qd - Qs), budget: traded * sub, traded };
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🌀 干预的螺旋：每一道命令都在呼唤下一道", "🌀 The intervention spiral: every command calls for the next")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("选一个起点干预", "Pick a starting intervention")}</label>
        <div class="demo-seg" id="is-seg">
          ${Object.keys(scenarios).map((k) => `<button data-k="${k}" class="${k === key ? "on" : ""}">${scenarios[k].name}</button>`).join("")}
        </div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <div class="stat-row">
            <div class="stat"><div class="k">${T("已生效的规则", "Rules in force")}</div><div class="v acc" id="is-rules">0</div></div>
            <div class="stat"><div class="k" id="is-metric-k">${T("短缺", "Shortage")}</div><div class="v neg" id="is-gap">0</div></div>
            <div class="stat"><div class="k">${T("实际成交量", "Quantity traded")}</div><div class="v" id="is-traded">–</div></div>
          </div>
          <div class="scn" id="is-scn"></div>
          <div class="demo-btns" id="is-btns"></div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("分支树（你走过的路）", "Branch tree (the path you took)")}</label>
          <div class="tl" id="is-tl"></div>
        </div>
      </div>
      <div class="demo-block"><div class="demo-log" id="is-log"></div></div>
      <p class="demo-tip">${T(
        "看两个数字怎么一起涨：<strong>规则数</strong>与<strong>短缺</strong>。每一轮的“意外后果”不是随机的——它由同一个线性供需模型算出来：价格被压在市场价之下，边际生产者退出，供给截距每轮下降。任何一轮你都可以撤回；注意撤回后的出清价格比最初的市场价<strong>更高</strong>——那是被螺旋毁掉的资本在报价。",
        "Watch two numbers rise together: <strong>rules in force</strong> and <strong>shortage</strong>. Each round's “unintended effect” is not random — it comes from the same linear supply–demand model: a price held below the market price, marginal producers exiting, the supply intercept falling every round. You can repeal at any round; notice the post-repeal clearing price is <strong>higher</strong> than the original market price — that is the capital destroyed by the spiral, quoting its bill."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const paint = () => {
    const s = scenarios[key];
    const base = eq(s, 0);
    $("is-rules").textContent = round;
    $("is-metric-k").textContent = s.metric;
    const g = gapAt(s, round);
    const gapShown = round === 0 ? 0 : (s.subsidy && round === 1 ? g.budget : g.gap);
    $("is-gap").textContent = round === 0 ? "0" : (s.subsidy && round === 1 ? f1(g.budget) + T(" 元/天", "/day") : f1(gapShown) + " " + s.unit);
    $("is-gap").className = "v " + (gapShown > 0 ? "neg" : "pos");
    $("is-traded").textContent = (round === 0 ? f1(base.Q) : f1(g.traded)) + " " + s.unit;

    // 场景卡
    let html = "";
    if (ended === "repeal") {
      const e = eq(s, round);
      html = `<div class="scn-q">${T("✅ 撤回。市场重新出清。", "✅ Repealed. The market clears again.")}</div>
        <div class="scn-meta">${T("出清价格", "Clearing price")} <b>${f1(e.P)}${s.money}</b>（${T("最初的市场价", "originally")} ${f1(base.P)}${s.money}），${T("成交量", "quantity")} <b>${f1(e.Q)} ${s.unit}</b>（${T("最初", "originally")} ${f1(base.Q)}）。<br>${
          round > 0
            ? T("短缺消失了，但价格比最初更高、数量更少——因为 " + round + " 轮里退出的生产者与被毁掉的资本不会一夜回来。这是希格斯说的“棘轮”留下的残余。", "The shortage is gone, but the price is higher and the quantity lower than at the start — the producers who left and the capital destroyed over " + round + " round(s) do not come back overnight. That is the residue of Higgs's ratchet.")
            : T("你在第一道命令生效前就停手了——市场没有受伤。", "You stopped before the first command took effect — the market is unhurt.")
        }</div>`;
    } else if (ended === "total") {
      html = `<div class="scn-q">${T("⛔ 全面管制。", "⛔ Comprehensive control.")}</div>
        <div class="scn-meta">${T("产权名义上还在，但价格、数量、分配、生产全部由命令决定。没有一个价格是市场形成的，所以也没有一个数字能告诉计划者“这里该多、那里该少”——这就是阶段 7.1 的经济计算问题。米塞斯（1950）：中间道路不是终点，它通向这里。", "Property still exists in name, but prices, quantities, allocation and output are all decided by command. No price is market-formed, so no number tells the planner where there should be more and where less — Stage 7.1's calculation problem. Mises (1950): the middle of the road is not a destination; it leads here.")}</div>`;
    } else if (round === 0) {
      const r0 = s.rounds[0];
      html = `<div class="scn-q">${T("起点：", "Start: ")}${r0.rule}</div><div class="scn-meta">${r0.why}。${T("市场价", "Market price")} ${f1(base.P)}${s.money}，${T("成交量", "quantity")} ${f1(base.Q)} ${s.unit}。${T("要下这道命令吗？", "Issue the command?")}</div>`;
    } else {
      const r = s.rounds[round - 1];
      const nxt = s.rounds[round] ? s.rounds[round].rule : r.next;
      html = `<div class="scn-q">${T("第 " + round + " 轮的意外后果", "Round " + round + ": the unintended effect")}</div>
        <div class="scn-meta"><b>${r.rule}</b><br>${r.effect}<br>
        ${s.subsidy && round === 1
          ? T("模型：消费者付 " + f1(s.cap) + "，生产者拿 " + f1(s.cap + s.subsidy) + "；成交 " + f1(g.traded) + " " + s.unit + "（原本 " + f1(base.Q) + "）；财政每天付 " + f1(g.budget) + "。", "Model: consumers pay " + f1(s.cap) + ", producers receive " + f1(s.cap + s.subsidy) + "; traded " + f1(g.traded) + " " + s.unit + " (was " + f1(base.Q) + "); the treasury pays " + f1(g.budget) + " per day.")
          : T("模型：限价 " + f1(s.cap) + s.money + " 下，需求 " + f1(g.Qd) + "、供给 " + f1(g.Qs) + " → 缺口 " + f1(g.gap) + " " + s.unit + "；实际只能成交 " + f1(g.traded) + "（原本 " + f1(base.Q) + "）。", "Model: at the controlled price " + f1(s.cap) + s.money + ", demand " + f1(g.Qd) + ", supply " + f1(g.Qs) + " → gap " + f1(g.gap) + " " + s.unit + "; only " + f1(g.traded) + " actually trades (was " + f1(base.Q) + ").") + (s.subsidy ? T(" 财政每天仍付 " + f1(g.budget) + "。", " The treasury still pays " + f1(g.budget) + " per day.") : "")}
        <br><span style="color:var(--orange-ink)">${T("岔路口：", "The fork: ")}</span>${T("撤回，还是再加一道——", "repeal, or add one more — ")}<i>${nxt}</i>？</div>`;
    }
    $("is-scn").innerHTML = html;

    // 按钮
    let btns = "";
    if (!ended) {
      if (round === 0) {
        btns = `<button class="demo-btn active" data-act="next">${T("下这道命令", "Issue the command")}</button>`;
      } else if (round < s.rounds.length) {
        btns = `<button class="demo-btn active" data-act="next">${T("再加一道 →", "Add one more →")}</button><button class="demo-btn" data-act="repeal">${T("撤回全部，回到市场", "Repeal everything")}</button>`;
      } else {
        btns = `<button class="demo-btn active" data-act="total">${T("走完最后一步：全面管制", "Take the last step: full control")}</button><button class="demo-btn" data-act="repeal">${T("撤回全部，回到市场", "Repeal everything")}</button>`;
      }
    }
    btns += `<button class="demo-btn" data-act="reset">${T("重来", "Reset")}</button>`;
    $("is-btns").innerHTML = btns;

    // 分支树
    $("is-tl").innerHTML = history.length
      ? history.map((h) => `<div class="tl-item ${h.kind === "repeal" ? "dim" : ""}"><span class="when">${h.when}</span>${h.text}</div>`).join("")
      : `<div class="tl-item dim"><span class="when">0</span>${T("自由市场：价格 " + f1(base.P) + s.money + "，成交 " + f1(base.Q) + " " + s.unit, "Free market: price " + f1(base.P) + s.money + ", quantity " + f1(base.Q) + " " + s.unit)}</div>`;

    // 日志
    const lines = [];
    if (round >= 2 && !ended) lines.push(`<span class="warn">${T("注意：第 " + round + " 轮的缺口比第 1 轮更大。每一道“补救”都把边际生产者赶出上游市场，供给曲线整体左移。", "Note: the gap in round " + round + " is larger than in round 1. Each “repair” drives marginal producers out of an upstream market, shifting the whole supply curve left.")}</span>`);
    if (round >= 1 && !ended) lines.push(T("干预者自己的标准是“让更多人得到它”。此刻得到它的人比不干预时更少——这就是米塞斯定理。", "The intervenors' own standard was “more people get it.” Right now fewer people get it than with no intervention — that is Mises's theorem."));
    if (ended === "repeal" && round >= 3) lines.push(`<span class="bad">${T("撤回得太晚：出清价格已经明显高于最初的市场价。越早撤回，棘轮留下的残余越小。", "Repealed late: the clearing price is now well above the original. The earlier the repeal, the smaller the ratchet's residue.")}</span>`);
    if (ended === "repeal" && round > 0 && round < 3) lines.push(`<span class="ok">${T("撤回得早：损失有限，市场很快恢复出清。", "Repealed early: limited damage, the market clears again quickly.")}</span>`);
    if (ended === "total") lines.push(`<span class="bad">${T("终点：" + round + " 道规则，产权名存实亡。没有人“决定”要走到这里。", "End state: " + round + " rules, property in name only. Nobody “decided” to come here.")}</span>`);
    if (!lines.length) lines.push(T("每一轮都有两个出口。看看你在哪一轮会停手。", "Every round has two exits. See at which round you stop."));
    $("is-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#is-seg").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-k]"); if (!b) return;
    key = b.dataset.k; round = 0; ended = null; history = [];
    root.querySelectorAll("#is-seg button").forEach((x) => x.classList.toggle("on", x.dataset.k === key));
    paint();
  });
  root.querySelector("#is-btns").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-act]"); if (!b) return;
    const s = scenarios[key];
    const act = b.dataset.act;
    if (act === "next") {
      const r = s.rounds[round];
      round += 1;
      const g = gapAt(s, round);
      history.push({ when: String(round), kind: "rule", text: `<b>${r.rule}</b><br><span style="color:var(--red)">${r.effect}</span> <span style="color:var(--muted)">(${s.subsidy && round === 1 ? T("财政", "budget") + " " + f1(g.budget) : T("缺口", "gap") + " " + f1(g.gap) + " " + s.unit})</span>` });
    } else if (act === "repeal") {
      ended = "repeal";
      const e2 = eq(s, round);
      history.push({ when: "↩", kind: "repeal", text: `<b>${T("撤回全部规则", "All rules repealed")}</b> → ${T("价格", "price")} ${f1(e2.P)}${s.money}，${T("成交", "quantity")} ${f1(e2.Q)} ${s.unit}` });
    } else if (act === "total") {
      ended = "total";
      history.push({ when: "∞", kind: "rule", text: `<b>${s.rounds[s.rounds.length - 1].next}</b>` });
      round += 1;
    } else if (act === "reset") {
      round = 0; ended = null; history = [];
    }
    paint();
  });
  paint();
}
