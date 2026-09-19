// 交互演示：审核权衡沙盘——你经营一家平台：调审核严格度、申诉程序、透明度；
// 五类用户（主流、言论最大化者、创作者、捣乱者、随手用户）按赫希曼的“退出 / 呼吁 / 忠诚”反应；
// 两家政策不同的竞争者与一个联邦网络在旁边；读出用户份额、广告收入、信任分；“国家施压”开关。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const ROUNDS = 30;
  // 用户段：share 初始占比；pref 偏好的严格度；wA 申诉权重；wT 透明度权重；harm 对骚扰的敏感度；exitK 退出敏感度
  const SEG = [
    { id: "main",  name: T("主流 / 家庭", "Mainstream / families"), share: 0.40, pref: 70, wA: 0.2, wT: 0.3, harm: 1.0, exitK: 0.35 },
    { id: "free",  name: T("言论最大化者", "Free-speech maximalists"), share: 0.15, pref: 15, wA: 0.6, wT: 0.6, harm: 0.2, exitK: 0.6 },
    { id: "creat", name: T("创作者", "Creators"), share: 0.20, pref: 50, wA: 1.0, wT: 0.8, harm: 0.5, exitK: 0.45 },
    { id: "troll", name: T("捣乱者 / 垃圾号", "Trolls / spammers"), share: 0.10, pref: 0, wA: 0.3, wT: 0.0, harm: 0.0, exitK: 0.8 },
    { id: "casu",  name: T("随手用户", "Casual users"), share: 0.15, pref: 50, wA: 0.1, wT: 0.1, harm: 0.5, exitK: 0.15 },
  ];
  // 竞争者：固定政策；联邦网络让每段用户各选自己偏好的严格度，但网络价值打折
  const RIVALS = [
    { id: "strict", name: T("严格公司", "Strict Inc."), strict: 85, appeal: 40, transp: 40, fed: false },
    { id: "lax",    name: T("宽松公司", "Lax Corp."), strict: 15, appeal: 20, transp: 30, fed: false },
    { id: "fed",    name: T("联邦网络", "Federated network"), strict: null, appeal: 60, transp: 90, fed: true },
  ];

  let strict = 55, appeal = 40, transp = 40, pressure = false;

  // 平台 p 对用户段 s 的效用（0–100 量纲）
  function utility(p, s, users, trollShare) {
    const st = p.fed ? s.pref : p.strict;
    const eff = pressure && !p.fed ? Math.max(st, 75) : st;              // 国家施压：境内平台被迫对某类内容从严
    const fit = 100 - Math.abs(s.pref - eff) * 1.1;                      // 政策贴合度
    const fp = eff / 100 * 25 * (1 - p.appeal / 100);                    // 误伤：越严误伤越多，申诉可以减轻
    const harass = (1 - eff / 100) * 40 * trollShare * 4 * s.harm;       // 骚扰：宽松 + 捣乱者多 → 主流受害
    const proc = p.appeal / 100 * 15 * s.wA + p.transp / 100 * 15 * s.wT; // 申诉与透明度本身的价值
    const net = 30 * Math.log(1 + 9 * users) / Math.log(10) * (p.fed ? 0.5 : 1); // 网络效应：人越多越值钱，联邦打折
    const fric = p.fed ? 14 : 0;                                             // 联邦网络：发现难、搬家有摩擦、体验粗糙
    const gov = pressure && !p.fed ? 8 * (s.wT + s.wA) / 1.6 : 0;      // 国家施压对信任的损耗，看重程序的人更在意
    return fit - fp - harass + proc + net - gov - fric;
  }

  function simulate() {
    const me = { id: "me", strict, appeal, transp, fed: false };
    const plats = [me, ...RIVALS];
    // 各段用户在各平台的份额：初始你占 70%，其余平分
    const dist = {};
    for (const s of SEG) { dist[s.id] = { me: 0.7 }; for (const r of RIVALS) dist[s.id][r.id] = 0.1; }
    const hist = { users: [], adv: [], trust: [] };
    let voice = 0; // 累计：本要退出、因申诉与透明而留下的用户量
    for (let t = 0; t < ROUNDS; t++) {
      const users = {}, trolls = {};
      for (const p of plats) { users[p.id] = 0; trolls[p.id] = 0; }
      for (const s of SEG) for (const p of plats) { users[p.id] += s.share * dist[s.id][p.id]; if (s.id === "troll") trolls[p.id] += s.share * dist[s.id][p.id]; }
      const trollShare = {}; for (const p of plats) trollShare[p.id] = users[p.id] > 0 ? trolls[p.id] / users[p.id] : 0;
      for (const s of SEG) {
        const u = {}; for (const p of plats) u[p.id] = utility(p, s, users[p.id], trollShare[p.id]);
        const best = plats.reduce((a, b) => (u[b.id] > u[a.id] ? b : a));
        for (const p of plats) {
          if (p === best) continue;
          const gap = u[best.id] - u[p.id] - 6;                           // 切换成本 6
          if (gap <= 0) continue;
          let mv = Math.min(dist[s.id][p.id], dist[s.id][p.id] * s.exitK * gap / 40);
          if (p.id === "me") {                                           // 赫希曼：申诉+透明 → 一部分“退出”变成“呼吁”并留下
            const stay = mv * (appeal + transp) / 200 * 0.6;
            voice += s.share * stay; mv -= stay;
          }
          dist[s.id][p.id] -= mv; dist[s.id][best.id] += mv;
        }
      }
      const myUsers = SEG.reduce((a, s) => a + s.share * dist[s.id].me, 0);
      const myTroll = SEG.filter((s) => s.id === "troll").reduce((a, s) => a + s.share * dist[s.id].me, 0);
      const effStrict = pressure ? Math.max(strict, 75) : strict;
      const brandSafe = 0.35 + 0.65 * effStrict / 100;                     // 广告主要品牌安全
      const adv = myUsers * brandSafe * (1 - (myUsers > 0 ? myTroll / myUsers : 0) * 3) * 100;
      const consistency = 1 - Math.abs(strict - 50) / 200;                 // 极端政策更难一致执行
      let trust = 20 + 0.35 * transp + 0.3 * appeal + 20 * consistency - (pressure ? 15 : 0);
      hist.users.push(myUsers); hist.adv.push(Math.max(0, adv)); hist.trust.push(Math.max(0, Math.min(100, trust)));
    }
    return { hist, dist, voice };
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏛️ 审核权衡沙盘：你来当平台，用户用脚投票", "🏛️ Moderation trade-offs: you run the platform, users vote with their feet")}</div>
      <div class="demo-grid-3">
        <div class="demo-block">
          <label class="demo-label">${T("审核严格度：", "Moderation strictness: ")}<b id="mt-sv">55</b></label>
          <input class="demo-slider" id="mt-strict" type="range" min="0" max="100" step="5" value="55" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("申诉程序：", "Appeal process: ")}<b id="mt-av">40</b></label>
          <input class="demo-slider" id="mt-appeal" type="range" min="0" max="100" step="5" value="40" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("透明度：", "Transparency: ")}<b id="mt-tv">40</b></label>
          <input class="demo-slider" id="mt-transp" type="range" min="0" max="100" step="5" value="40" />
        </div>
      </div>
      <div class="demo-btns"><button class="demo-btn" id="mt-gov">${T("国家施压：关", "State pressure: off")}</button></div>
      <div id="mt-chart"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("你的用户份额", "Your user share")}</div><div class="v acc" id="mt-users">–</div></div>
        <div class="stat"><div class="k">${T("广告收入（指数）", "Ad revenue (index)")}</div><div class="v" id="mt-adv">–</div></div>
        <div class="stat"><div class="k">${T("信任分", "Trust score")}</div><div class="v" id="mt-trust">–</div></div>
        <div class="stat"><div class="k">${T("“呼吁”而非退出", "“Voice” instead of exit")}</div><div class="v" id="mt-voice">–</div></div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("30 轮后，各类用户留在你这里的比例（虚线框 = 初始 70%）", "After 30 rounds, share of each segment still with you (dashed = initial 70%)")}</div>
        <div class="stages" id="mt-bars"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="mt-log"></div></div>
      <p class="demo-tip">${T(
        "试三件事：① 把严格度拉到 10：捣乱者留下、主流走人、广告主撤——“不审核”不是中立，是另一种产品；拉到 95：言论最大化者和创作者走人。② 把申诉与透明度拉高：同样的严格度下，一部分本要退出的人变成“呼吁”留下——这是赫希曼，也是平台为自己的知识问题买保险。③ 打开“国家施压”：所有境内平台被迫从严，信任分掉一截，只有联邦网络接住流失的人——问题在电话那一头，不在房规。",
        "Try three things: ① strictness to 10: trolls stay, the mainstream leaves, advertisers pull out — “no moderation” is not neutral, it is another product; to 95: free-speech users and creators leave. ② Raise appeals and transparency: at the same strictness, part of the would-be exit turns into “voice” and stays — Hirschman, and the platform insuring against its own knowledge problem. ③ Switch on “state pressure”: every domestic platform is forced stricter, trust drops, and only the federated network catches the leavers — the problem is at the phone-call end, not the house rules."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const paint = () => {
    $("mt-sv").textContent = strict; $("mt-av").textContent = appeal; $("mt-tv").textContent = transp;
    $("mt-gov").textContent = pressure ? T("国家施压：开", "State pressure: on") : T("国家施压：关", "State pressure: off");
    $("mt-gov").classList.toggle("active", pressure);

    const { hist, dist, voice } = simulate();
    const at = (arr) => (x) => arr[Math.min(arr.length - 1, Math.max(0, Math.round(x)))];
    const res = lineChart({ fns: [{ f: (x) => at(hist.users)(x) * 100, cls: "line" }, { f: at(hist.adv), cls: "line2" }, { f: at(hist.trust), cls: "line4" }], lo: 0, hi: ROUNDS - 1, samples: ROUNDS - 1, xlabel: T("轮次", "round"), forceZero: true, uid: "mt", H: 220 });
    $("mt-chart").innerHTML = chartBlock(res, [["var(--orange)", T("你的用户份额 %", "your user share %")], ["var(--blue)", T("广告收入指数", "ad revenue index")], ["var(--green)", T("信任分", "trust score")]]);

    const last = ROUNDS - 1;
    $("mt-users").textContent = (hist.users[last] * 100).toFixed(0) + "%";
    $("mt-adv").textContent = hist.adv[last].toFixed(0);
    const tr = $("mt-trust"); tr.textContent = hist.trust[last].toFixed(0); tr.className = "v " + (hist.trust[last] >= 60 ? "pos" : hist.trust[last] < 35 ? "neg" : "");
    $("mt-voice").textContent = (voice * 100).toFixed(1) + T(" 点", " pts");

    $("mt-bars").innerHTML = SEG.map((s) => {
      const v = dist[s.id].me;
      const where = RIVALS.reduce((a, r) => (dist[s.id][r.id] > dist[s.id][a.id] ? r : a));
      return `<div class="stage-bar"><span class="lab">${s.name}</span><div class="track"><div class="fill" style="width:${v * 100}%;background:${s.id === "troll" ? "var(--red)" : "var(--orange)"};opacity:.8"></div><div class="fill ghost" style="width:70%"></div></div><span class="val">${(v * 100).toFixed(0)}%${v < 0.5 ? ` → ${where.name}` : ""}</span></div>`;
    }).join("");

    const lines = [];
    const effStrict = pressure ? Math.max(strict, 75) : strict;
    if (strict <= 20) lines.push(`<span class="bad">${T("几乎不审核：捣乱者留下，骚扰把主流赶走，广告主不肯挂在吵架旁边。“不审核”不是中立——它是一种为捣乱者优化的产品。", "Almost no moderation: trolls stay, harassment drives the mainstream off, advertisers will not hang beside brawls. “No moderation” is not neutral — it is a product optimized for trolls.")}</span>`);
    if (strict >= 85) lines.push(`<span class="bad">${T("极严：误伤最多，言论最大化者与创作者退出到宽松公司或联邦网络；广告主满意，但用户基数在缩。", "Very strict: most false positives; free-speech users and creators exit to Lax Corp. or the federated network; advertisers are happy, but the base shrinks.")}</span>`);
    if (appeal + transp >= 140) lines.push(`<span class="ok">${T("申诉 + 透明度高：误伤可以被纠正，语境被送回来（阶段 7.2 的知识问题），一部分退出变成呼吁——创作者尤其在意这个。", "High appeals + transparency: false positives get corrected, context comes back (Stage 7.2's knowledge problem), part of the exit becomes voice — creators care most about this.")}</span>`);
    if (pressure) lines.push(`<span class="warn">${T("国家施压：你和两家境内竞争者都被迫把有效严格度抬到 ", "State pressure: you and both domestic rivals are forced to an effective strictness of ")}${effStrict}${T("，信任分被扣 15 点，看重程序的用户流向联邦网络——它不在电话簿上。这不是“私有产权失败”，是电话那一头的问题（阶段 8.4）。", "; trust loses 15 points, and users who care about process flow to the federated network — it is not in the phone book. This is not “private property failing”; it is the phone-call end (Stage 8.4).")}</span>`);
    lines.push(`${T("留存最差的一段：", "Worst-retained segment: ")}<b>${SEG.reduce((a, s) => (dist[s.id].me < dist[a.id].me ? s : a)).name}</b>${T("。没有一组旋钮能让五类用户都满意——不存在“正确的审核标准”，只存在不同产品（阶段 6.3）。联邦网络之所以接得住各类人，是因为它让每段用户各选各的严格度，代价是网络价值打五折、体验有摩擦。", ". No setting satisfies all five segments — there is no “correct moderation standard,” only different products (Stage 6.3). The federated network catches everyone because each segment picks its own strictness, at the cost of half the network value and rougher usability.")}`);
    $("mt-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("mt-strict").addEventListener("input", (e) => { strict = +e.target.value; paint(); });
  $("mt-appeal").addEventListener("input", (e) => { appeal = +e.target.value; paint(); });
  $("mt-transp").addEventListener("input", (e) => { transp = +e.target.value; paint(); });
  $("mt-gov").addEventListener("click", () => { pressure = !pressure; paint(); });
  paint();
}
