// 交互演示：稀缺 → 冲突 → 产权规则。六种资源（田地、歌曲、渔场、域名、比特币 UTXO、空气）
// 按竞争性/排他性分类；选一条规则（先占 / 公地开放 / 国家指派），拖动“想用的人数”，看模拟若干回合的冲突计数。
// 模型是示意性的：冲突压力 ∝ 竞争性 × 人数的两两组合；规则决定多少比例的撞车能被“事先可知的规则”化解。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // rival: 竞争性(0–1)；excl: 排他成本的倒数——越高越容易排他(0–1)；dyn: 竞争性是否随人数上升（空气）
  const RES = [
    { id: "field",   icon: "🌾", name: T("一块田", "A field"),               rival: 1.0, excl: 0.9,  note: T("你盖房我就不能种菜", "your house blocks my vegetables") },
    { id: "song",    icon: "🎵", name: T("一首歌", "A song"),                rival: 0.0, excl: 0.3,  note: T("你唱了我还能唱", "you singing it leaves me the whole song") },
    { id: "fishery", icon: "🐟", name: T("一片渔场", "A fishing ground"),    rival: 0.8, excl: 0.3,  note: T("鱼会被捞光，海却围不住", "fish run out; the sea has no fence") },
    { id: "domain",  icon: "🌐", name: T("一个域名", "A domain name"),       rival: 1.0, excl: 1.0,  note: T("注册表只认一个主人", "the registry knows exactly one owner") },
    { id: "utxo",    icon: "₿",  name: T("一个比特币 UTXO", "A Bitcoin UTXO"), rival: 1.0, excl: 1.0, note: T("私钥即排他，无需法院", "the private key excludes, no court needed") },
    { id: "air",     icon: "🌫️", name: T("一片空气", "The air"),             rival: 0.05, excl: 0.05, dyn: true, note: T("人少时不争，工厂多了就争", "nobody fights over it until the factories arrive") },
  ];
  const RULES = [
    { id: "first",  name: T("先占（谁先用归谁）", "First use (homesteading)") },
    { id: "common", name: T("公地（人人可用）", "Open commons") },
    { id: "state",  name: T("国家指派", "State-assigned") },
  ];

  let users = 12, rounds = 30, rule = "first";

  // 确定性伪随机（mulberry32），保证同参数得到同结果
  const rng = (seed) => () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const poisson = (lambda, r) => { let L = Math.exp(-lambda), k = 0, p = 1; do { k++; p *= r(); } while (p > L); return k - 1; };

  // 对某资源在某规则下模拟 rounds 回合，返回 {total, series, depleted}
  function simulate(res, ruleId, n, N, seedBase) {
    const r = rng(seedBase);
    let stock = 1, total = 0; const series = [];
    for (let t = 0; t < N; t++) {
      const rival = res.dyn ? Math.min(1, res.rival + n / 60) : res.rival;
      // 两两计划撞车的期望次数（示意尺度）
      // 人数越多、两两撞车越多（示意：随人数超线性增长）
      const pressure = (rival * Math.pow(n, 1.5)) / 20;
      let lambda = 0;
      if (ruleId === "first") {
        // 规则可自我执行的程度 ≈ 排他性；剩下的撞车仍需打官司
        lambda = pressure * (1 - 0.97 * res.excl);
      } else if (ruleId === "common") {
        // 无人让路：全部撞车都成为冲突；竞争性资源还会被耗竭，越少越争
        lambda = pressure * (1 + 1.5 * (1 - stock));
        stock = Math.max(0, stock - (rival * n) / 400);
      } else {
        // 国家指派：物理冲突被压下去，但换来围绕分配权的争夺（寻租、申诉、重新分配）
        const physical = pressure * 0.25;
        const lobbying = (n * 0.05) * (0.5 + 0.5 * rival);
        const reassign = t % 6 === 5 ? n * 0.1 : 0;
        // 对非竞争性资源（歌曲），国家指派 = 知识产权：在别人的稀缺资源上执法，产生新的冲突
        const ip = (1 - rival) * n * 0.05;
        lambda = physical + lobbying + reassign + ip;
      }
      const c = poisson(lambda, r);
      total += c; series.push(c);
    }
    return { total, series, depleted: stock };
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⚖️ 稀缺 → 冲突 → 规则：六种资源、三条规则、几十回合", "⚖️ Scarcity → conflict → rule: six resources, three rules, a few dozen rounds")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("想用这些资源的人数：", "People who want to use each resource:")} <b id="sc-users">${users}</b></label>
          <input class="demo-slider" type="range" min="2" max="60" step="1" value="${users}" id="sc-users-sl" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("模拟回合数：", "Rounds to simulate:")} <b id="sc-rounds">${rounds}</b></label>
          <input class="demo-slider" type="range" min="10" max="80" step="5" value="${rounds}" id="sc-rounds-sl" />
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("选一条规则（决定“谁让路”）", "Pick the rule that decides who yields")}</label>
        <div class="demo-seg" id="sc-seg">${RULES.map((x) => `<button data-rule="${x.id}" class="${x.id === rule ? "on" : ""}">${x.name}</button>`).join("")}</div>
      </div>
      <div class="demo-block" id="sc-table"></div>
      <div class="demo-block">
        <label class="demo-label">${T("同样的人数与回合，三条规则的冲突总数对照", "Same people, same rounds: total conflicts under each rule")}</label>
        <div class="cmp-3" id="sc-cmp"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="sc-log"></div></div>
      <p class="demo-tip">${T(
        "先看<strong>歌曲</strong>那一行：在“先占”和“公地”下它永远是 0——非竞争性资源上没有撞车，产权论证根本用不上；切到“国家指派”（相当于知识产权）冲突才出现。再把人数从 12 拖到 50，看<strong>空气</strong>怎么从“没人争”变成“值得立规则”——这就是德姆塞茨的毛皮故事。",
        "Look at the <strong>song</strong> row first: under “first use” and “commons” it stays at 0 forever — nothing collides on a non-rivalrous good, so the property argument has nothing to do; switch to “state-assigned” (in effect, IP) and conflicts appear. Then drag people from 12 to 50 and watch the <strong>air</strong> go from “nobody argues” to “worth a rule” — Demsetz's fur story in miniature."
      )}</p>
    </div>`;

  const pill = (ok, txtOk, txtBad) => `<span class="pill ${ok ? "ok" : "bad"}">${ok ? txtOk : txtBad}</span>`;

  const paint = () => {
    root.querySelector("#sc-users").textContent = users;
    root.querySelector("#sc-rounds").textContent = rounds;
    root.querySelectorAll("#sc-seg button").forEach((b) => b.classList.toggle("on", b.dataset.rule === rule));

    // 所有规则都算一遍，便于对照
    const results = {};
    for (const R of RULES) results[R.id] = RES.map((res, i) => simulate(res, R.id, users, rounds, 1000 + i * 17 + users * 3 + rounds));
    const cur = results[rule];
    const maxC = Math.max(1, ...cur.map((x) => x.total));

    root.querySelector("#sc-table").innerHTML = RES.map((res, i) => {
      const rivalNow = res.dyn ? Math.min(1, res.rival + users / 60) : res.rival;
      const isRival = rivalNow >= 0.5, isExcl = res.excl >= 0.5;
      const c = cur[i].total;
      const w = (c / maxC) * 100;
      const color = c === 0 ? "var(--green)" : c < maxC * 0.35 ? "var(--orange)" : "var(--red)";
      return `<div class="bar2">
        <span class="lab" style="width:150px">${res.icon} ${res.name}</span>
        <div class="track" title="${res.note}"><div class="fill" style="width:${w}%;background:${color}"></div></div>
        <span class="val" style="width:56px"><b>${c}</b></span>
        <span style="flex:none;display:flex;gap:4px;flex-wrap:wrap">
          ${pill(isRival, T("竞争性", "rivalrous"), T("非竞争", "non-rival"))}
          ${pill(isExcl, T("可排他", "excludable"), T("难排他", "hard to exclude"))}
          ${rule === "common" && isRival ? `<span class="pill bad">${T("存量剩", "stock")} ${(cur[i].depleted * 100).toFixed(0)}%</span>` : ""}
        </span>
      </div>`;
    }).join("");

    const totals = RULES.map((R) => results[R.id].reduce((s, x) => s + x.total, 0));
    const best = Math.min(...totals);
    root.querySelector("#sc-cmp").innerHTML = RULES.map((R, k) => `
      <div class="cmp-cell ${R.id === rule ? "hl" : totals[k] === best ? "" : "cold"}">
        <h5>${R.name}</h5>
        <div style="font-size:22px;font-weight:700;color:${totals[k] === best ? "var(--green)" : "var(--ink)"}">${totals[k]}</div>
        <div style="font-size:12px;color:var(--muted)">${T("次冲突 /", "conflicts /")} ${rounds} ${T("回合", "rounds")}</div>
      </div>`).join("");

    const lines = [];
    const song = cur[1].total, air = cur[5].total, fish = cur[2].total, dom = cur[3].total;
    if (rule === "first") {
      lines.push(`<span class="ok">${T("先占规则：域名与 UTXO 的冲突最少——排他性由注册表 / 私钥自动执行，无需裁判；田地靠围栏与登记，也很低。", "First use: the domain and the UTXO see the fewest conflicts — the registry / private key enforces exclusion automatically, no referee needed; the fenced, registered field is low too.")}</span>`);
      lines.push(`<span class="${fish > 5 ? "warn" : "ok"}">${T("渔场与空气仍有冲突：不是规则错了，而是“第一使用者是谁”在难以排他的资源上不好证明——这正是阶段 9.2 要处理的外部性问题。", "The fishery and the air still see conflict: not because the rule is wrong but because “who used it first” is hard to prove on hard-to-exclude resources — exactly the externality problem of Stage 9.2.")}</span>`);
    } else if (rule === "common") {
      lines.push(`<span class="bad">${T("公地：没有人让路，所有撞车都成了冲突；竞争性资源还在被耗竭——存量越少越争，这就是“公地悲剧”。", "Commons: nobody yields, every collision becomes a conflict; rivalrous stocks are being depleted — the scarcer, the fiercer: the tragedy of the commons.")}</span>`);
      lines.push(`${T("注意歌曲仍是 0：非竞争性资源根本没有“公地悲剧”，因为没有东西会被用光。", "Note the song is still 0: a non-rivalrous good has no tragedy of the commons, because nothing gets used up.")}`);
    } else {
      lines.push(`<span class="warn">${T("国家指派：物理冲突被压低了，但争夺“分配权”的冲突（游说、申诉、每几回合的重新分配）取而代之——冲突没有消失，只是换了战场。", "State assignment: physical conflicts fall, but fights over the *assignment* (lobbying, appeals, periodic reallocation) replace them — conflict does not vanish, it moves to a new arena.")}</span>`);
      lines.push(`<span class="bad">${T("歌曲第一次出现冲突（", "The song shows conflict for the first time (")}${song}${T("）：把非竞争性的想法指派给某个人，等于在别人的硬盘、纸张、工厂上执法——金塞拉说的“人为稀缺”。", "): assigning a non-rivalrous idea to one person means enforcing on other people's drives, paper and factories — Kinsella's “artificial scarcity.”")}</span>`);
    }
    lines.push(`${T("空气此刻的冲突：", "Air right now:")} <b>${air}</b>${T("。人数 ≤ 10 时它几乎不争；人数上去后竞争性上升，规则才变得“值得”——德姆塞茨：界定产权的收益超过成本时，产权才会出现。", ". With ≤ 10 people it is barely contested; as numbers rise so does rivalry, and only then is a rule “worth it” — Demsetz: rights get defined when the gains from defining them exceed the cost.")}`);
    lines.push(`${T("域名此刻的冲突：", "Domain right now:")} <b>${dom}</b>${T("——它是 1990 年代才被发明出来的“新稀缺”；先注册先得 + 仲裁，是一条几乎完全自我执行的先占规则。", " — a “new scarcity” invented only in the 1990s; first-to-register plus arbitration is a nearly self-enforcing homesteading rule.")}`);
    root.querySelector("#sc-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#sc-users-sl").addEventListener("input", (e) => { users = +e.target.value; paint(); });
  root.querySelector("#sc-rounds-sl").addEventListener("input", (e) => { rounds = +e.target.value; paint(); });
  root.querySelectorAll("#sc-seg button").forEach((b) => b.addEventListener("click", () => { rule = b.dataset.rule; paint(); }));
  paint();
}
