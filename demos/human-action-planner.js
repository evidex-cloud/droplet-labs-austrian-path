// 交互演示：《人的行动》阅读规划器——选每周小时数与目标（速览 / 精读 / 备课），
// 按各章约页数与阅读速度真算出逐周计划（章节 + 检查题），并附一个只存在页面状态里的进度清单。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 各章约页数（学者版，估算）；q = 该章的检查题
  const CH = {
    1: { p: 19, part: 1, t: T("行动人", "Acting Man"), q: T("否认“人有目的地行动”为什么自相矛盾？", "Why is denying “man acts purposefully” self-contradictory?") },
    2: { p: 42, part: 1, t: T("认识论问题", "Epistemological Problems"), q: T("方法论二元论主张什么？", "What does methodological dualism claim?") },
    3: { p: 20, part: 1, t: T("经济学与对理性的反叛", "The Revolt Against Reason"), q: T("“多元逻辑”为什么站不住？", "Why does polylogism fail?") },
    4: { p: 7, part: 1, t: T("行动范畴的初步分析", "First Analysis of Action"), q: T("目的、手段、价值序列怎么定义？", "How are ends, means and scales of value defined?") },
    5: { p: 6, part: 1, t: T("时间", "Time"), q: T("为什么行动必然涉及时间？", "Why does action necessarily involve time?") },
    6: { p: 14, part: 1, t: T("不确定性", "Uncertainty"), q: T("案例概率与类概率的区别？", "Case probability vs class probability?") },
    7: { p: 24, part: 1, t: T("世界中的行动", "Action Within the World"), q: T("边际效用递减怎样从行动逻辑推出？", "How is diminishing marginal utility derived from action?") },
    8: { p: 34, part: 2, t: T("人类社会", "Human Society"), q: T("联合法则为什么使合作对强者也有利？", "Why does the law of association benefit even the stronger party?") },
    9: { p: 17, part: 2, t: T("观念的作用", "The Role of Ideas"), q: T("为什么经济学必须面对公众舆论？", "Why must economics face public opinion?") },
    10: { p: 6, part: 2, t: T("社会内的交换", "Exchange Within Society"), q: T("自给式交换与人际交换的区别？", "Autistic vs interpersonal exchange?") },
    11: { p: 12, part: 3, t: T("无计算的估值", "Valuation Without Calculation"), q: T("为什么价值不能相加？", "Why can values not be added?") },
    12: { p: 18, part: 3, t: T("经济计算的范围", "The Sphere of Calculation"), q: T("哪些东西永远进不了账本？", "What never enters the ledger?") },
    13: { p: 4, part: 3, t: T("货币计算", "Monetary Calculation"), q: T("货币计算是工具还是目的？", "Is monetary calculation a tool or an end?") },
    14: { p: 23, part: 4, t: T("交换学的范围与方法（ERE）", "Scope and Method (the ERE)"), q: T("ERE 里为什么没有利润？", "Why is there no profit in the ERE?") },
    15: { p: 70, part: 4, t: T("市场", "The Market"), q: T("消费者主权是什么意思、不是什么意思？", "What does consumer sovereignty mean — and not mean?") },
    16: { p: 71, part: 4, t: T("价格", "Prices"), q: T("米塞斯的垄断价格条件是什么？", "What are Mises's conditions for a monopoly price?") },
    17: { p: 81, part: 4, t: T("间接交换（货币）", "Indirect Exchange (Money)"), q: T("回归定理解决了什么循环论证？", "What circularity does the regression theorem resolve?") },
    18: { p: 45, part: 4, t: T("时间流逝中的行动", "Action in the Passing of Time"), q: T("为什么时间偏好是“范畴”而非“偏好”？", "Why is time preference a category, not a taste?") },
    19: { p: 14, part: 4, t: T("利息", "Interest"), q: T("利息为什么不是资本的产出？", "Why is interest not the yield of capital?") },
    20: { p: 49, part: 4, t: T("利息、信用扩张与商业周期", "Credit Expansion and the Trade Cycle"), q: T("为什么信用扩张不能靠更多扩张永远续下去？", "Why can't expansion be sustained by more expansion forever?") },
    21: { p: 48, part: 4, t: T("工作与工资", "Work and Wages"), q: T("工资由什么决定？", "What determines wages?") },
    22: { p: 9, part: 4, t: T("非人的原始生产要素", "Nonhuman Original Factors"), q: T("土地的价格从哪里来？", "Where does the price of land come from?") },
    23: { p: 20, part: 4, t: T("市场的数据", "The Data of the Market"), q: T("什么是市场的“数据”？", "What are the market's “data”?") },
    24: { p: 25, part: 4, t: T("利益的和谐与冲突", "Harmony and Conflict of Interests"), q: T("“利益和谐”在什么意义上成立？", "In what sense do interests harmonize?") },
    25: { p: 5, part: 5, t: T("社会主义社会的假想构造", "Imaginary Socialist Society"), q: T("社会主义的定义是什么？", "How is socialism defined?") },
    26: { p: 18, part: 5, t: T("社会主义下计算的不可能", "Impossibility of Calculation"), q: T("米塞斯与哈耶克的论证差在哪？", "How does Mises's argument differ from Hayek's?") },
    27: { p: 17, part: 6, t: T("政府与市场", "Government and the Market"), q: T("干预的定义是什么？", "How is intervention defined?") },
    28: { p: 7, part: 6, t: T("税收干预", "Interference by Taxation"), q: T("税收在什么点上变成没收？", "When does taxation become confiscation?") },
    29: { p: 5, part: 6, t: T("限制生产", "Restriction of Production"), q: T("限产谁受益、谁受损？", "Who gains and who loses from restriction?") },
    30: { p: 27, part: 6, t: T("干预价格结构", "Interference with Prices"), q: T("最低工资的失业效应是先验的还是经验的？", "Is the minimum wage's unemployment effect a priori or empirical?") },
    31: { p: 34, part: 6, t: T("操纵通货与信用", "Currency and Credit Manipulation"), q: T("法币下的通胀与金本位下的有何不同？", "How does fiat inflation differ from inflation under gold?") },
    32: { p: 9, part: 6, t: T("没收与再分配", "Confiscation and Redistribution"), q: T("再分配对资本积累的影响？", "Effect of redistribution on capital accumulation?") },
    33: { p: 7, part: 6, t: T("工团主义与社团主义", "Syndicalism and Corporativism"), q: T("工团主义为什么不可行？", "Why is syndicalism unworkable?") },
    34: { p: 11, part: 6, t: T("战争经济学", "The Economics of War"), q: T("战争与自由市场能否共存？", "Can war and the free market coexist?") },
    35: { p: 23, part: 6, t: T("福利原则 vs 市场原则", "Welfare vs Market Principle"), q: T("福利原则的三项指控各是什么？", "What are the welfare principle's three charges?") },
    36: { p: 8, part: 6, t: T("干预主义的危机", "The Crisis of Interventionism"), q: T("“中间道路”为什么不稳定？", "Why is the middle of the road unstable?") },
    37: { p: 7, part: 7, t: T("经济学的特殊性质", "The Nondescript Character of Economics"), q: T("经济学为什么不像自然科学？", "Why is economics unlike natural science?") },
    38: { p: 10, part: 7, t: T("经济学在学问中的位置", "Economics in Learning"), q: T("为什么经济学不能留给专家？", "Why can't economics be left to experts?") },
    39: { p: 5, part: 7, t: T("经济学与人类生存", "Economics and Human Existence"), q: T("米塞斯的告别辞说了什么？", "What does Mises's farewell say?") },
  };
  const PART = { 1: T("第一部分 人的行动", "Part I Human Action"), 2: T("第二部分 社会", "Part II Society"), 3: T("第三部分 经济计算", "Part III Calculation"), 4: T("第四部分 市场", "Part IV The Market"), 5: T("第五部分 无市场", "Part V No Market"), 6: T("第六部分 干预", "Part VI Intervention"), 7: T("第七部分 尾声", "Part VII Coda") };

  // 三种目标的章节序列（本课推荐路线：先第四部分，再回第一部分）
  const ROUTES = {
    survey: { label: T("速览", "Survey"), speed: 12, extra: 0, chs: [14, 15, 16, 17, 18, 19, 20, 1, 4, 7, 11, 12, 13, 25, 26, 27, 30, 31, 36],
      desc: T("19 章核心路线：市场 → 公理 → 计算/社会主义 → 干预核心。跳过认识论论战与 1930 年代话题。", "19-chapter core route: market → axiom → calculation/socialism → core of intervention. Skips the epistemological polemics and 1930s topics.") },
    deep: { label: T("精读", "Deep"), speed: 10, extra: 0, chs: [14, 15, 16, 17, 18, 19, 20, 1, 4, 7, 11, 12, 13, 25, 26, 27, 28, 29, 30, 31, 32, 36, 2, 3, 5, 6, 8, 9, 10, 21, 22, 23, 24, 33, 34, 35, 37, 38, 39],
      desc: T("全部 39 章，按推荐路线而非目录顺序；每章配一道检查题。", "All 39 chapters in the recommended route rather than table-of-contents order; one checkpoint question per chapter.") },
    teaching: { label: T("备课", "Teaching"), speed: 8, extra: 0.35, chs: [14, 15, 16, 17, 18, 19, 20, 1, 4, 7, 11, 12, 13, 25, 26, 27, 28, 29, 30, 31, 32, 36, 2, 3, 5, 6, 8, 9, 10, 21, 22, 23, 24, 33, 34, 35, 37, 38, 39, 14, 16, 20, 26],
      desc: T("全部 39 章 + 回读第 14、16、20、26 章；每周约 35% 的时间留给写讲义与例子；每周两道检查题要写成书面答案。", "All 39 chapters plus a re-read of 14, 16, 20 and 26; ~35% of each week reserved for writing notes and examples; two checkpoint questions per week answered in writing.") },
  };

  let hours = 7, goal = "deep", plan = [], done = new Set();

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("📅 《人的行动》规划器：你的时间 × 你的目标 → 逐周计划与检查题", "📅 Human Action planner: your hours × your goal → a week-by-week plan with checkpoints")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("每周可投入", "Hours per week")}: <b id="hap-h">7</b> h</label>
          <input class="demo-slider" id="hap-slider" type="range" min="2" max="15" step="1" value="7" />
          <div class="demo-meta" id="hap-speed"></div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("目标", "Goal")}</label>
          <div class="demo-seg" id="hap-goal">
            ${Object.entries(ROUTES).map(([k, r]) => `<button data-g="${k}" class="${k === goal ? "on" : ""}">${r.label}</button>`).join("")}
          </div>
          <div class="demo-meta" id="hap-desc"></div>
        </div>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("章数", "Chapters")}</div><div class="v" id="hap-n">–</div></div>
        <div class="stat"><div class="k">${T("约页数", "~Pages")}</div><div class="v" id="hap-p">–</div></div>
        <div class="stat"><div class="k">${T("周数", "Weeks")}</div><div class="v acc" id="hap-w">–</div></div>
        <div class="stat"><div class="k">${T("进度", "Progress")}</div><div class="v pos" id="hap-prog">0%</div></div>
      </div>
      <div class="demo-bar"><span id="hap-bar"></span></div>
      <div class="demo-block">
        <div class="tl" id="hap-tl"></div>
      </div>
      <div class="demo-log" id="hap-log"></div>
      <p class="demo-tip">${T(
        "把每周小时拖到 2，看“精读”要多少周——这就是大多数人半途而废的原因：不是书难，是节奏不对。再切到“备课”：页数不变，周数却大涨，因为写比读慢。勾选完成的周，进度只存在本页面里，刷新即清零。",
        "Drag hours down to 2 and watch how many weeks “Deep” takes — that is why most people quit: not the book, the pace. Switch to “Teaching”: same pages, far more weeks, because writing is slower than reading. Tick weeks as done; progress lives only in this page and resets on reload."
      )}</p>
    </div>`;

  const build = () => {
    const r = ROUTES[goal];
    const pagesPerWeek = hours * r.speed * (1 - r.extra);
    plan = [];
    let cur = { chs: [], pages: 0 };
    for (const n of r.chs) {
      const p = CH[n].p;
      if (cur.chs.length && cur.pages + p > pagesPerWeek) { plan.push(cur); cur = { chs: [], pages: 0 }; }
      cur.chs.push(n); cur.pages += p;
    }
    if (cur.chs.length) plan.push(cur);
    done = new Set();
    paint();
  };

  const paint = () => {
    const r = ROUTES[goal];
    const totalPages = r.chs.reduce((s, n) => s + CH[n].p, 0);
    root.querySelector("#hap-h").textContent = hours;
    root.querySelector("#hap-speed").innerHTML = T("阅读速度按约 " + r.speed + " 页/小时" + (r.extra ? "，另留 " + Math.round(r.extra * 100) + "% 写讲义" : ""), "Reading speed ~" + r.speed + " pp./hour" + (r.extra ? ", with " + Math.round(r.extra * 100) + "% reserved for writing" : ""));
    root.querySelector("#hap-desc").textContent = r.desc;
    root.querySelector("#hap-n").textContent = r.chs.length;
    root.querySelector("#hap-p").textContent = totalPages;
    root.querySelector("#hap-w").textContent = plan.length;
    const pct = plan.length ? Math.round(done.size / plan.length * 100) : 0;
    root.querySelector("#hap-prog").textContent = pct + "%";
    root.querySelector("#hap-bar").style.width = pct + "%";

    root.querySelector("#hap-tl").innerHTML = plan.map((w, i) => {
      const parts = [...new Set(w.chs.map((n) => CH[n].part))].map((p) => PART[p]).join(" · ");
      const chs = w.chs.map((n) => T("第 " + n + " 章", "Ch. " + n) + " " + CH[n].t).join("；");
      const qs = w.chs.slice(0, 2).map((n) => "• " + CH[n].q).join("<br>");
      const isDone = done.has(i);
      return `<div class="tl-item${isDone ? " dim" : ""}">
        <span class="when">${T("第 " + (i + 1) + " 周", "Week " + (i + 1))}</span>
        <label style="cursor:pointer"><input type="checkbox" data-w="${i}" ${isDone ? "checked" : ""} /> <b>${parts}</b> · ${T("约", "~")}${w.pages} ${T("页", "pp.")}</label>
        <div style="font-size:13px;color:var(--muted);margin-top:3px">${chs}</div>
        <div style="font-size:12.5px;margin-top:4px;color:var(--orange-ink)"><b>${T("检查题", "Checkpoint")}</b><br>${qs}</div>
      </div>`;
    }).join("");

    const log = [];
    const hoursTotal = plan.length * hours;
    log.push(`${T("总计约", "About")} ${totalPages} ${T("页 ÷ 每周约", "pp. ÷ ~")} ${Math.round(hours * r.speed * (1 - r.extra))} ${T("页 ≈", "pp./week ≈")} <b>${plan.length}</b> ${T("周，约", "weeks, roughly")} ${hoursTotal} ${T("小时。", "hours.")}`);
    if (plan.length > 26) log.push(`<span class="bad">${T("超过半年——多数人会在第 8 周放弃。要么加时间，要么先用“速览”走一遍再精读。", "More than six months — most people quit around week 8. Add hours, or do a “Survey” pass first and go deep afterwards.")}</span>`);
    else if (plan.length > 14) log.push(`<span class="warn">${T("三到六个月：可行，但请每周固定一个时间段，并把检查题写成书面答案。", "Three to six months: feasible, but fix a weekly slot and answer the checkpoints in writing.")}</span>`);
    else log.push(`<span class="ok">${T("三个月内可完成。第一周从第 14 章进城，别从第 1 章。", "Doable within three months. Enter at Chapter 14 in week one — not Chapter 1.")}</span>`);
    if (goal !== "survey") log.push(T("卡住时翻罗斯巴德 MES 的对应章节，或墨菲《学习指南》——当地图用，别当替代品。", "When stuck, open the matching chapter of Rothbard's MES or Murphy's Study Guide — as a map, not a substitute."));
    root.querySelector("#hap-log").innerHTML = log.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#hap-slider").addEventListener("input", (e) => { hours = +e.target.value; build(); });
  root.querySelector("#hap-goal").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-g]"); if (!b) return;
    goal = b.dataset.g;
    root.querySelectorAll("#hap-goal button").forEach((x) => x.classList.toggle("on", x === b));
    build();
  });
  root.querySelector("#hap-tl").addEventListener("change", (e) => {
    const cb = e.target.closest("input[data-w]"); if (!cb) return;
    const i = +cb.dataset.w;
    if (cb.checked) done.add(i); else done.delete(i);
    paint();
  });
  build();
}
