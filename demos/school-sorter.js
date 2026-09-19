// 交互演示：学派分拣器——12 条陈述，逐条判断它是“奥派立场”“主流立场”还是“两派都同意”；
// 每次选择立刻给出解释并计分，最后给出一张“你的分歧地图”：你在哪些维度上分错了，说明哪一维最容易混淆。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const CATS = [
    { id: "au", label: T("奥派", "Austrian"), cls: "hl" },
    { id: "ms", label: T("主流", "Mainstream"), cls: "cold" },
    { id: "both", label: T("两派都同意", "Both agree"), cls: "" },
  ];

  // dim: 对应课文六维对照表 —— method / value / capital / money / eq / math，以及 politics（是什么/不是什么）
  const items = [
    { dim: "method", ans: "au", s: T("经济学的核心定律是从“人有目的地行动”逻辑演绎出来的，统计数据不能证实也不能证伪它们。", "The core laws of economics are deduced from “humans act purposefully”; statistics can neither confirm nor refute them."),
      why: T("这是米塞斯的行动学立场（阶段 2.1、2.2）。主流认为理论必须像物理学一样可被数据证伪。", "This is Mises's praxeological position (Stage 2.1, 2.2). The mainstream holds theory must be falsifiable by data, as in physics.") },
    { dim: "value", ans: "both", s: T("一件东西的价值取决于边际单位的效用，而不是整类东西的总用处。", "The value of a thing depends on the utility of the marginal unit, not the total usefulness of the whole class."),
      why: T("边际革命（1871）是奥派与新古典的共同起点——分歧在后面：效用能不能测量、能不能加总。", "The marginal revolution (1871) is the shared root of Austrian and neoclassical economics — the split comes later: can utility be measured and summed?") },
    { dim: "value", ans: "ms", s: T("可以把不同人的效用加总，计算一项政策的“社会福利”净变化。", "Utilities of different people can be summed to compute a policy's net change in “social welfare.”"),
      why: T("主流福利经济学的常规做法。奥派认为效用是序数的、不能跨人比较，所以“社会福利函数”没有意义。", "Standard practice in mainstream welfare economics. Austrians hold utility is ordinal and not interpersonally comparable, so a “social welfare function” is meaningless.") },
    { dim: "capital", ans: "au", s: T("资本不是一个总量 K，而是一串异质的、有时间顺序的生产阶段——印钞机改不成拖拉机。", "Capital is not an aggregate K but a sequence of heterogeneous, time-ordered production stages — a printing press cannot become a tractor."),
      why: T("奥派资本理论（庞巴维克、哈耶克、拉赫曼，阶段 3）。主流生产函数 Y = F(K, L) 把资本压成一个数。", "Austrian capital theory (Böhm-Bawerk, Hayek, Lachmann; Stage 3). The mainstream production function Y = F(K, L) compresses capital into one number.") },
    { dim: "money", ans: "both", s: T("长期看，货币供给持续大幅增加会推高物价。", "Over the long run, a sustained large increase in the money supply pushes prices up."),
      why: T("货币主义和奥派都同意这一点。分歧在于过程：主流关注总价格水平，奥派强调新钱沿路径扭曲相对价格（坎蒂隆效应，阶段 4.3）。", "Monetarists and Austrians both accept this. The disagreement is about the process: the mainstream watches the price level, Austrians stress that new money distorts relative prices along its path (Cantillon effects, Stage 4.3).") },
    { dim: "money", ans: "ms", s: T("货币在长期是中性的：只改变价格水平，不改变真实产出和资源配置。", "Money is neutral in the long run: it changes the price level but not real output or the allocation of resources."),
      why: T("主流（尤其货币主义）的标准命题。奥派说没有“长期”这个地方——每一次注入都改变了生产结构（阶段 4.2）。", "A standard mainstream (especially monetarist) proposition. Austrians say there is no place called the long run — every injection reshapes the structure of production (Stage 4.2).") },
    { dim: "eq", ans: "au", s: T("市场是一个由企业家推动的发现过程；“均衡”只是一个帮助思考的虚构，不是对现实的描述。", "The market is an entrepreneur-driven discovery process; “equilibrium” is a useful fiction for thinking, not a description of reality."),
      why: T("哈耶克的“竞争作为发现程序”、柯兹纳的企业家（阶段 6.1、6.2）。主流把均衡当作分析的核心对象。", "Hayek's “competition as a discovery procedure,” Kirzner's entrepreneur (Stage 6.1, 6.2). The mainstream makes equilibrium the central object of analysis.") },
    { dim: "eq", ans: "both", s: T("价格管制（如租金上限）会导致短缺。", "Price controls such as rent ceilings cause shortages."),
      why: T("这是教科书供需分析的标准结论，奥派与主流一致（阶段 8.2）。奥派会额外强调管制对质量、投资与知识传递的破坏。", "A textbook supply-and-demand result shared by Austrians and the mainstream (Stage 8.2). Austrians add the damage to quality, investment and the transmission of knowledge.") },
    { dim: "math", ans: "ms", s: T("一个论证如果不能写成形式模型，就算不上严格的经济学。", "An argument that cannot be written as a formal model does not count as rigorous economics."),
      why: T("主流的方法论默认。奥派认为数学可以说明、不能发现，而真实时间与不确定性恰恰写不成方程（阶段 2.4）。", "The mainstream's methodological default. Austrians hold math can illustrate but not discover, and real time and uncertainty are exactly what cannot be written as equations (Stage 2.4).") },
    { dim: "math", ans: "au", s: T("经济学家永远无法精确预测下一次衰退的时间——最多能识别出繁荣是否建立在信用扩张之上。", "Economists can never precisely predict the timing of the next recession — at most they can recognize whether a boom rests on credit expansion."),
      why: T("奥派对“模式预测 vs 精确预测”的区分（哈耶克“知识的僭妄”）。主流宏观模型的目标之一恰恰是量化预测。", "The Austrian distinction between pattern prediction and precise prediction (Hayek's “Pretence of Knowledge”). Quantitative forecasting is exactly one goal of mainstream macro models.") },
    { dim: "politics", ans: "both", s: T("经济学作为科学不评判目的，只研究手段能否达到目的。", "Economics as a science does not judge ends; it studies whether means achieve them."),
      why: T("价值中立（韦伯）在原则上被两派接受。奥派尤其强调它，以区分“奥派经济学”与“自由至上主义政治哲学”（阶段 0.2）。", "Value-freedom (Weber) is accepted in principle by both. Austrians stress it especially, to separate “Austrian economics” from “libertarian political philosophy” (Stage 0.2).") },
    { dim: "politics", ans: "au", s: T("央行把利率压到自然利率之下，会系统性地误导企业家，把资源投向消费者其实不愿等待的长期项目。", "A central bank pushing the interest rate below the natural rate systematically misleads entrepreneurs into long projects consumers are not actually willing to wait for."),
      why: T("这是奥地利学派商业周期理论的核心（阶段 5.1）。主流承认利率影响投资，但不接受“错误投资的结构性积累”这一机制。", "The core of Austrian business cycle theory (Stage 5.1). The mainstream grants that rates affect investment but does not accept the mechanism of structurally accumulating malinvestment.") },
  ];

  const DIMS = {
    method: T("方法", "Method"), value: T("价值", "Value"), capital: T("资本", "Capital"),
    money: T("货币", "Money"), eq: T("均衡 vs 过程", "Equilibrium vs process"), math: T("数学", "Math"), politics: T("是什么 / 不是什么", "Is / isn't"),
  };

  const picks = new Array(items.length).fill(null);

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗂️ 学派分拣器：这句话是谁说的？", "🗂️ The school sorter: who would say this?")}</div>
      <div class="demo-meta">${T("12 条陈述。每条选“奥派”“主流”或“两派都同意”，立刻看解释。注意有几条是两派共识——奥派与主流的分歧比很多人以为的小，也比很多人以为的深。", "12 statements. For each, pick Austrian, Mainstream or Both agree, and read the explanation immediately. Several are shared ground — the Austrian–mainstream gap is narrower than many think, and deeper than many think.")}</div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("已答", "Answered")}</div><div class="v" id="sso-done">0/${items.length}</div></div>
        <div class="stat"><div class="k">${T("答对", "Correct")}</div><div class="v pos" id="sso-ok">0</div></div>
        <div class="stat"><div class="k">${T("得分", "Score")}</div><div class="v acc" id="sso-score">0%</div></div>
      </div>
      <div id="sso-list"></div>
      <div class="demo-btns"><button class="demo-btn" id="sso-reset">${T("重来", "Reset")}</button></div>
      <div class="demo-block" id="sso-summary" hidden></div>
      <p class="demo-tip">${T(
        "错得最多的往往是“两派都同意”那几条——人们把奥派想象得比它实际上更离经叛道。答完看底部的“分歧地图”：你在哪个维度上分错最多，那个维度就是阶段 2.4 和阶段 11 要重点看的。",
        "The most-missed items are usually the “both agree” ones — people imagine Austrians to be more heterodox than they are. When you finish, check the “disagreement map” at the bottom: the dimension you missed most is the one to watch for in Stage 2.4 and Stage 11."
      )}</p>
    </div>`;

  const list = root.querySelector("#sso-list");

  const paint = () => {
    list.innerHTML = items.map((it, i) => {
      const p = picks[i];
      const right = p && p === it.ans;
      return `<div class="scn" style="margin-top:10px;${p ? (right ? "border-color:var(--green)" : "border-color:var(--red)") : ""}">
        <div class="scn-q"><span style="color:var(--muted);font-size:12px;margin-right:8px">${i + 1}/${items.length} · ${DIMS[it.dim]}</span>${it.s}</div>
        <div class="demo-btns" style="margin:6px 0">
          ${CATS.map((c) => `<button class="demo-btn ${p === c.id ? "active" : ""}" data-i="${i}" data-c="${c.id}" ${p ? "disabled" : ""}>${c.label}</button>`).join("")}
        </div>
        ${p ? `<div class="scn-meta"><span class="pill ${right ? "ok" : "bad"}">${right ? T("答对", "Correct") : T("答错", "Missed")}</span> ${T("正确答案：", "Answer: ")}<b>${CATS.find((c) => c.id === it.ans).label}</b>。${it.why}</div>` : ""}
      </div>`;
    }).join("");

    const done = picks.filter(Boolean).length;
    const ok = picks.filter((p, i) => p === items[i].ans).length;
    root.querySelector("#sso-done").textContent = `${done}/${items.length}`;
    root.querySelector("#sso-ok").textContent = ok;
    root.querySelector("#sso-score").textContent = done ? Math.round((ok / done) * 100) + "%" : "0%";

    const sum = root.querySelector("#sso-summary");
    if (done === items.length) {
      // 分歧地图：按维度统计错误
      const byDim = {};
      items.forEach((it, i) => {
        byDim[it.dim] = byDim[it.dim] || { n: 0, miss: 0 };
        byDim[it.dim].n++;
        if (picks[i] !== it.ans) byDim[it.dim].miss++;
      });
      const bothMiss = items.filter((it, i) => it.ans === "both" && picks[i] !== it.ans).length;
      const bothN = items.filter((it) => it.ans === "both").length;
      const worst = Object.entries(byDim).sort((a, b) => (b[1].miss / b[1].n) - (a[1].miss / a[1].n))[0];
      sum.hidden = false;
      sum.innerHTML = `
        <div class="demo-label">${T("你的分歧地图", "Your disagreement map")}</div>
        <div class="stages">
          ${Object.entries(byDim).map(([d, v]) => `<div class="stage-bar">
            <span class="lab">${DIMS[d]}</span>
            <div class="track"><div class="fill" style="width:${((v.n - v.miss) / v.n) * 100}%;background:${v.miss ? "var(--orange)" : "var(--green)"}"></div></div>
            <span class="val">${v.n - v.miss}/${v.n}</span>
          </div>`).join("")}
        </div>
        <div class="demo-log">
          <div class="${ok >= 10 ? "ok" : ok >= 7 ? "warn" : "bad"}">${T("总分", "Total")} ${ok}/${items.length}。${ok >= 10 ? T("你已经能分清奥派、主流与共识——阶段 0.4 的五大支柱会更顺手。", "You can already tell Austrian, mainstream and shared ground apart — the five pillars in Stage 0.4 will come easily.") : ok >= 7 ? T("大方向对了，细节在阶段 2.4 与阶段 11 会补齐。", "The broad picture is right; Stage 2.4 and Stage 11 will fill in the details.") : T("别担心，这恰恰说明刻板印象有多顽固。带着这些错题去读阶段 0.4。", "No worry — this is exactly how stubborn the stereotypes are. Take these misses with you into Stage 0.4.")}</div>
          <div>${T("“两派都同意”的题你错了", "On the “both agree” items you missed")} <b>${bothMiss}/${bothN}</b>${T("。", ".")} ${bothMiss >= 2 ? T("典型症状：把奥派想得比它实际更离经叛道——边际主义、价格管制导致短缺、价值中立，都是共同地基。", "Typical symptom: imagining Austrians more heterodox than they are — marginalism, shortages under price controls, value-freedom are all shared ground.") : T("你没有把奥派过度“异端化”，很好。", "You did not over-“heretic” the Austrians — good.")}</div>
          ${worst && worst[1].miss ? `<div>${T("分错最多的维度：", "Most-missed dimension: ")}<b>${DIMS[worst[0]]}</b>${T("——这正是六维对照表里最容易混淆的一行。", " — the row of the six-dimension table that is easiest to confuse.")}</div>` : ""}
        </div>`;
    } else {
      sum.hidden = true;
    }
  };

  list.addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-i]");
    if (!b || b.disabled) return;
    picks[+b.dataset.i] = b.dataset.c;
    paint();
  });
  root.querySelector("#sso-reset").addEventListener("click", () => { picks.fill(null); paint(); });
  paint();
}
