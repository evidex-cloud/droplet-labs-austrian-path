// 交互演示：巴斯夏的破窗——追踪 250 美元：换窗 vs 买鞋；“看得见”与“看不见”两栏账；
// 可开启“刺激”情景：国家砸 k 扇窗“创造就业”，看记录的 GDP 上升而社会实际拥有的物品下降。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const N = 10;           // 10 家店，每家一扇窗、250 美元
  const P = 250;
  let broken = 1;         // 被砸的窗数
  let plan = "shoes";     // 店主本来打算：shoes / save / cash
  let stimulus = false;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🪟 破窗账本：看得见的一栏，看不见的一栏", "🪟 The broken-window ledger: one column seen, one column unseen")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("情景", "Scenario")}</label>
          <div class="demo-seg" id="bw-mode">
            <button data-m="accident" class="on">${T("顽童砸窗", "A boy's rock")}</button>
            <button data-m="stimulus">${T("“刺激”：国家砸窗创造就业", "“Stimulus”: the state breaks windows for jobs")}</button>
          </div>
          <label class="demo-label" style="margin-top:12px">${T("被砸的窗：", "Windows broken: ")}<b id="bw-k">${broken}</b> / ${N}</label>
          <input class="demo-slider" type="range" min="0" max="${N}" step="1" value="${broken}" id="bw-slider" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("店主本来打算用这 250 美元…", "The shopkeeper was going to use the $250 to…")}</label>
          <div class="demo-seg" id="bw-plan">
            <button data-p="shoes" class="on">${T("买一双鞋", "Buy shoes")}</button>
            <button data-p="save">${T("存进银行", "Save at the bank")}</button>
            <button data-p="cash">${T("锁进抽屉", "Lock in a drawer")}</button>
          </div>
          <div class="demo-meta" id="bw-planmeta"></div>
        </div>
      </div>
      <div class="cmp" id="bw-cols"></div>
      <div class="demo-block">
        <label class="demo-label">${T("社会实际拥有的物品（10 家店）", "What society actually owns (10 shops)")}</label>
        <div class="stages" id="bw-goods"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("记录在 GDP 里的交易", "Transactions recorded in GDP")}</div><div class="v" id="bw-gdp">–</div></div>
          <div class="stat"><div class="k">${T("“创造”的玻璃匠岗位", "Glazier jobs “created”")}</div><div class="v acc" id="bw-jobs">–</div></div>
          <div class="stat"><div class="k">${T("消失的鞋匠岗位", "Cobbler jobs vanished")}</div><div class="v neg" id="bw-lost">–</div></div>
          <div class="stat"><div class="k">${T("社会物品总数", "Total goods in society")}</div><div class="v" id="bw-total">–</div></div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("追踪一张 250 美元", "Trace one $250")}</label>
        <div class="tl" id="bw-trace"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="bw-log"></div></div>
      <p class="demo-tip">${T(
        "把滑块从 0 拉到 10：<strong>记录的 GDP 一分不少、“创造”的岗位越来越多，而社会拥有的物品一路减少</strong>——每多砸一扇窗，就少一双鞋。切到“存进银行”或“锁进抽屉”，看“钱是死的”这个反驳为什么救不了破窗论。",
        "Drag the slider from 0 to 10: <strong>recorded GDP never falls, jobs “created” keep rising, and the goods society owns keep falling</strong> — one more broken window, one fewer pair of shoes. Switch to “Save at the bank” or “Lock in a drawer” to see why the “idle money” objection does not rescue the broken-window argument."
      )}</p>
    </div>`;

  const paint = () => {
    const k = broken;
    root.querySelector("#bw-k").textContent = k;

    // 店主原计划的说明
    const planMeta = {
      shoes: T("这是巴斯夏的原版：250 美元本来会去鞋匠那里，社会会多一双鞋。", "Bastiat's original: the $250 would have gone to the cobbler, and society would have one more pair of shoes."),
      save: T("钱不是死的：银行把它借给买机器的人。看不见的不是鞋，而是那台机器（阶段 3.3）。", "The money is not idle: the bank lends it to someone buying a machine. The unseen thing is not shoes but that machine (Stage 3.3)."),
      cash: T("即使锁进抽屉，持有现金也让其他人手里的钱购买力略升（阶段 4.2）。砸窗仍然没有增加任何东西——它只是把玻璃和工时用于回到原点。", "Even locked in a drawer, holding cash slightly raises the purchasing power of everyone else's money (Stage 4.2). Breaking the window still adds nothing — it just spends glass and hours getting back to square one."),
    };
    root.querySelector("#bw-planmeta").textContent = planMeta[plan];

    const altName = plan === "shoes" ? T("一双鞋", "a pair of shoes") : plan === "save" ? T("一台（被贷款买下的）机器", "a machine (bought with the loan)") : T("一点购买力（留给别人的钱）", "a bit of purchasing power (for everyone else's money)");
    const altWho = plan === "shoes" ? T("鞋匠", "the cobbler") : plan === "save" ? T("借款买机器的企业家", "the entrepreneur who would have borrowed") : T("所有持币者", "every holder of money");

    // 两栏账
    const glazier = k * P, lost = k * P;
    const recordedSpend = plan === "cash" ? k * P : N * P; // 抽屉情景下，只有砸窗的钱被花掉并记录
    const seen = [
      `${T("玻璃匠收入", "Glazier income")}：<b>+$${glazier}</b>`,
      `${T("玻璃匠岗位", "Glazier jobs")}：<b>+${k}</b>`,
      `${T("记录的交易额", "Recorded transactions")}：<b>$${recordedSpend}</b>`,
      k ? `${T("新闻标题：", "Headline: ")}“${T("玻璃业迎来繁荣", "Boom in the glass trade")}”` : T("（没有窗被砸，没有头条）", "(no window broken, no headline)"),
    ];
    const unseen = [
      `${altWho}${T("的收入", "'s income")}：<b>−$${lost}</b>`,
      `${T("没被造出来的", "Never made: ")}${altName}：<b>−${k}</b>`,
      `${T("被用于“回到原点”的玻璃与工时", "Glass and hours spent returning to square one")}：<b>${k}</b> ${T("份", "units")}`,
      k ? T("没有新闻会采访那个没被雇的人", "No reporter interviews the person who was not hired") : T("（一切照常，鞋匠照常开工）", "(business as usual; the cobbler works as usual)"),
    ];
    root.querySelector("#bw-cols").innerHTML = `
      <div class="cmp-cell hl"><h5>👁 ${T("看得见的", "What is seen")}</h5>${seen.map((s) => `<div style="font-size:13.5px;margin:4px 0">${s}</div>`).join("")}</div>
      <div class="cmp-cell cold"><h5>🫥 ${T("看不见的", "What is not seen")}</h5>${unseen.map((s) => `<div style="font-size:13.5px;margin:4px 0">${s}</div>`).join("")}</div>`;

    // 物品计数
    const windows = N;                      // 砸了也修好了
    const alt = N - k;                      // 未被砸的店主照原计划办事
    const total = windows + alt;
    const bar = (lab, val, max, color) => `<div class="stage-bar"><span class="lab">${lab}</span><div class="track"><div class="fill" style="width:${(val / max) * 100}%;background:${color}"></div></div><span class="val">${val}</span></div>`;
    root.querySelector("#bw-goods").innerHTML =
      bar(T("窗户", "Windows"), windows, N, "var(--orange)") +
      bar(altName, alt, N, plan === "shoes" ? "var(--green)" : "var(--blue)") +
      bar(T("合计", "Total"), total, 2 * N, "var(--ink)");
    root.querySelector("#bw-gdp").textContent = "$" + recordedSpend;
    root.querySelector("#bw-jobs").textContent = "+" + k;
    root.querySelector("#bw-lost").textContent = "−" + k;
    const tot = root.querySelector("#bw-total");
    tot.textContent = total + " / " + 2 * N;
    tot.className = "v " + (k === 0 ? "pos" : "neg");

    // 追踪一张 250
    root.querySelector("#bw-trace").innerHTML = k > 0
      ? `<div class="tl-item"><span class="when">1</span>${T("店主的 250 美元 → 玻璃匠（换回一扇本来就有的窗）", "Shopkeeper's $250 → glazier (buys back a window he already had)")}</div>
         <div class="tl-item"><span class="when">2</span>${T("玻璃匠花掉 250 → 面包师、裁缝……“钱转起来了”", "Glazier spends $250 → baker, tailor … “the money goes round”")}</div>
         <div class="tl-item dim"><span class="when">✗</span>${T("本来：店主的 250 美元 → ", "Otherwise: shopkeeper's $250 → ")}${altWho}${T(" → 面包师、裁缝……钱同样会转，而且社会多", " → baker, tailor … the money would go round just the same, and society would also have ")}${altName}</div>`
      : `<div class="tl-item"><span class="when">1</span>${T("店主的 250 美元 → ", "Shopkeeper's $250 → ")}${altWho}</div>
         <div class="tl-item"><span class="when">2</span>${T("社会拥有：一扇窗 + ", "Society owns: a window + ")}${altName}</div>
         <div class="tl-item dim"><span class="when">·</span>${T("玻璃匠去给新房子装窗——他并不需要靠破坏吃饭", "The glazier fits windows on new houses — he never needed destruction to make a living")}</div>`;

    // 结论
    const lines = [];
    if (k === 0) lines.push(`<span class="ok">${T("没有窗被砸。10 家店各有一扇窗，外加 10 份原计划的物品。这是基准线。", "No windows broken. Ten shops each have a window plus ten units of what they planned. This is the baseline.")}</span>`);
    else {
      lines.push(`${T("砸了", "Broke")} ${k} ${T("扇窗：玻璃匠 +$", "windows: glazier +$")}${glazier}${T("，", ", ")}${altWho} −$${lost}${T(" —— 这一项是转移，社会净值为零。", " — this line is a transfer; society nets zero.")}`);
      lines.push(`<span class="bad">${T("但社会少了", "But society lost")} ${k} ${T("份", "units of ")}${altName}${T("。GDP 记录的交易额没有减少（", ". Recorded GDP did not fall (")}$${recordedSpend}${T("），因为 GDP 只加看得见的。", "), because GDP only adds what is seen.")}</span>`);
    }
    if (stimulus && k > 0) lines.push(`<span class="warn">${T("“刺激”版：国家为了创造", "The “stimulus” version: to create")} ${k} ${T("个玻璃匠岗位砸了", "glazier jobs the state broke")} ${k} ${T("扇窗。新闻会报道岗位；没有人报道消失的", "windows. The news will report the jobs; nobody reports the vanished")} ${k} ${T("个", "")}${altWho}${T("岗位。这就是黑兹利特的“一课”——看所有群体，不只看受益者。", " jobs. That is Hazlitt's one lesson — look at all groups, not just the beneficiaries.")}</span>`);
    if (stimulus && k === N) lines.push(`<span class="bad">${T("砸光所有窗：玻璃业“充分就业”，社会物品从 20 份掉到 10 份。用勺子挖运河也能“充分就业”。", "Every window broken: “full employment” in glazing, and society's goods fall from 20 to 10. Digging canals with spoons would also give “full employment.”")}</span>`);
    root.querySelector("#bw-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#bw-slider").addEventListener("input", (e) => { broken = +e.target.value; paint(); });
  root.querySelectorAll("#bw-mode button").forEach((b) => b.addEventListener("click", () => {
    stimulus = b.dataset.m === "stimulus";
    root.querySelectorAll("#bw-mode button").forEach((x) => x.classList.toggle("on", x === b));
    if (stimulus && broken < 3) { broken = 5; root.querySelector("#bw-slider").value = 5; }
    paint();
  }));
  root.querySelectorAll("#bw-plan button").forEach((b) => b.addEventListener("click", () => {
    plan = b.dataset.p;
    root.querySelectorAll("#bw-plan button").forEach((x) => x.classList.toggle("on", x === b));
    paint();
  }));
  paint();
}
