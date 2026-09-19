// 交互演示：奥派错误探测器——十二句“听起来很奥派”的话，先自己判定“成立 / 错误 / 需限定”，
// 再揭晓每句话错在哪一级台阶、属于哪种错误类型、正确说法是什么；最后统计你最容易“放行”的错误类型。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 错误类型（与课文第 ⑥ 节的十种错误一一对应）
  const TYPES = {
    permabear:      T("永久熊（方向当日期）", "Permabear (direction mistaken for a date)"),
    hyperinflation: T("恶性通胀反射", "Hyperinflation reflex"),
    dogmatism:      T("黄金/比特币教条（制度论证当价格预测）", "Gold/Bitcoin dogmatism (institutional argument as price forecast)"),
    solvent:        T("万能溶剂（一切皆错误投资）", "Universal solvent (everything is malinvestment)"),
    mainstream:     T("无视主流贡献", "Ignoring mainstream contributions"),
    conspiracy:     T("阴谋论式表述", "Conspiracy framing"),
    moralizing:     T("道德化替代分析", "Moralizing instead of analyzing"),
    authority:      T("引米塞斯当证据（诉诸权威）", "Quoting Mises as proof (appeal to authority)"),
    settled:        T("把争论当已决", "Treating debates as settled"),
    state:          T("低估国家的拖延能力", "Underrating the state's ability to stall"),
  };

  // verdict: sound（成立）/ mistake（错误）/ qualify（需限定）
  // type: 这句话（若被不加限定地接受 / 拒绝）所落入的错误类型；rung: 课文里的台阶（1 理论 2 辅助假设 3 模式预测 4 定时定量预言）
  const CLAIMS = [
    {
      text: T("量化宽松将在两年内引发恶性通胀。", "QE will cause hyperinflation within two years."),
      verdict: "mistake", type: "hyperinflation", rung: 4,
      fix: T("新钱注入银行准备金且准备金付息、乘数塌落、货币需求上升时，理论预测的是“资产价格先涨、CPI 迟迟不动”。可说：“若新钱进入支付链且货币需求回落，消费品价格会随之上升”——不报日期。",
             "With the new money injected into interest-bearing bank reserves, a collapsed multiplier and rising money demand, the theory predicts ‘asset prices first, CPI flat for a long time.’ Defensible version: ‘If new money reaches the payments chain and money demand recedes, consumer prices will follow’ — with no date."),
    },
    {
      text: T("信用扩张会扭曲生产结构。", "Credit expansion distorts the structure of production."),
      verdict: "sound", type: null, rung: 1,
      fix: T("这是 ABCT 的核心定理（第 1 级台阶）：低于自然利率的信用扩张让远离消费的长期项目显得可行，资源被错误配置。它讲的是结构与方向，不含日期——照原样接受即可。",
             "This is the core theorem of ABCT (rung 1): credit expansion below the natural rate makes long projects far from consumption look viable and misallocates resources. It speaks of structure and direction, with no date — accept it as stated."),
    },
    {
      text: T("股市创了历史新高，所以崩盘迫在眉睫。", "The stock market is at all-time highs, so a crash is imminent."),
      verdict: "mistake", type: "permabear", rung: 4,
      fix: T("“新高”本身不是 ABCT 的判据；理论只能说“若繁荣由低于自然利率的信用支撑，则结构脆弱、越拖越痛”。可说：“这轮上涨依赖信用扩张的程度是 X，脆弱性在上升；我不知道何时暴露。”",
             "An all-time high is not an ABCT criterion. The theory can only say ‘if the boom rests on credit below the natural rate, the structure is fragile and the unwinding grows costlier the longer it waits.’ Defensible version: ‘This rally depends on credit expansion to degree X; fragility is rising; I do not know when it surfaces.’"),
    },
    {
      text: T("黄金是货币，所以金价必然上涨。", "Gold is money, so its price must rise."),
      verdict: "mistake", type: "dogmatism", rung: 4,
      fix: T("“硬钱更难被滥用”是制度论证，不推出任何价格路径。黄金 2011–2019 大致横盘十年就是反例。可说：“若法币购买力持续下降且货币需求转向黄金，金价会反映这一点——但时点与幅度不可知。”不构成投资建议。",
             "‘Hard money is harder to abuse’ is an institutional argument; it implies no price path. Gold going roughly sideways from 2011 to 2019 is the counterexample. Defensible version: ‘If fiat keeps losing purchasing power and money demand shifts toward gold, its price will reflect that — timing and size unknown.’ Not investment advice."),
    },
    {
      text: T("每一次繁荣都是错误投资。", "Every boom is malinvestment."),
      verdict: "mistake", type: "solvent", rung: 2,
      fix: T("要先问三件事：钱从哪来（真实储蓄还是信用扩张）？市场利率是否低于自然利率？膨胀的是不是利率最敏感的长期项目部门？生产率驱动的繁荣在稳定货币下表现为物价下降、产出普遍增长。",
             "Ask three things first: where does the money come from (real saving or credit expansion)? Is the market rate below the natural rate? Are the most interest-sensitive, long-duration sectors the ones swelling? A productivity-driven boom shows up, under stable money, as falling prices and broad output growth."),
    },
    {
      text: T("在其他条件不变的情况下，最低工资会减少生产率最低者的就业。", "The minimum wage reduces employment of the least productive, other things equal."),
      verdict: "sound", type: null, rung: 1,
      fix: T("加上“其他条件不变”，这是价格下限的定性定理（第 1 级）：高于边际产出价值的工资让最不熟练者失去岗位或工时。理论不给出幅度——去掉限定、或断言“失业率会升 2 个百分点”，才会出错。",
             "With ‘other things equal’ attached, this is the qualitative theorem of a price floor (rung 1): a wage above the value of marginal product costs the least skilled jobs or hours. The theory gives no magnitude — the error would be dropping the qualifier or asserting ‘unemployment rises 2 points.’"),
    },
    {
      text: T("公共选择理论是主流的干扰项，奥派不必理会。", "Public choice is a mainstream distraction."),
      verdict: "mistake", type: "mainstream", rung: 2,
      fix: T("布坎南与塔洛克把“官员也是追求自身目的的行动人”变成可操作的学问，正好补上奥派“干预为什么仍会被采纳”的短板。它是同一问题的另一半，也是替代阴谋论的更准解释。",
             "Buchanan and Tullock turned ‘officials are acting people pursuing their own ends too’ into a working research program — exactly the piece Austrians lack on ‘why interventions get adopted anyway.’ It is the other half of the same problem and the accurate alternative to conspiracy talk."),
    },
    {
      text: T("美联储是一个让银行家致富的阴谋。", "The Fed is a conspiracy to enrich bankers."),
      verdict: "mistake", type: "conspiracy", rung: 2,
      fix: T("更准的说法：美联储的激励结构（任内“做点什么”、按 CPI 与就业考核、无法掌握分散知识）导致它系统性偏向宽松、拖延与救助，而先拿到新钱的金融部门因坎蒂隆效应受益——不需要假设任何人是坏人。",
             "More accurate: the Fed's incentive structure (pressure to ‘do something’ in office, evaluation by CPI and employment, no access to dispersed knowledge) produces a systematic tilt toward easing, delay and bailouts, and the financial sector that receives new money first benefits through Cantillon effects — no villains required."),
    },
    {
      text: T("米塞斯已经证明社会主义不可能，所以争论结束了。", "Mises proved socialism is impossible, so debate is over."),
      verdict: "qualify", type: "settled", rung: 2,
      fix: T("计算论证本身站得住：没有生产资料的市场价格就没有经济计算。但“争论结束”是错的——它的力量在推理链而非米塞斯的名字，而且大数据与 AI 能否替代价格（阶段 7.5、18.1）、知识论证与计算论证谁更根本，仍是活的争论。",
             "The calculation argument itself stands: without market prices for the means of production there is no economic calculation. But ‘debate is over’ is wrong — the force lies in the reasoning, not in Mises's name, and whether big data or AI can substitute for prices (Stage 7.5, 18.1), and whether knowledge or calculation is the deeper argument, remain live questions."),
    },
    {
      text: T("比特币的固定供给使它成为更优越的货币，所以它将在 2030 年前取代美元。", "Bitcoin's fixed supply makes it superior money, so it will replace the dollar by 2030."),
      verdict: "mistake", type: "dogmatism", rung: 4,
      fix: T("固定供给是事实；“更优越”是有争议的制度论证（稳定性、可销售性、周期问题，见阶段 17.2、17.5）；“2030 年取代美元”是理论从未授权的定时预言。三环里只有第一环是事实。不构成投资建议。",
             "Fixed supply is a fact; ‘superior’ is a contested institutional argument (stability, saleableness, cycles — see Stage 17.2, 17.5); ‘replaces the dollar by 2030’ is a dated prophecy the theory never licensed. Of the three links only the first is a fact. Not investment advice."),
    },
    {
      text: T("只要继续扩张，中央银行可以把萧条拖延很长时间。", "A central bank can postpone the bust for a long time by continuing expansion."),
      verdict: "qualify", type: "state", rung: 3,
      fix: T("大体成立，而且是很多奥派低估的一点：日本 1990 年后拖了三十多年。需要的限定是——“拖延”不是“避免”，代价以僵尸企业、低生产率与资本消耗的形式累积；极限在货币需求：只要公众仍愿持有本币，就没有崩溃繁荣。",
             "Largely right — and it is exactly what many Austrians underrate: Japan has stalled for more than thirty years since 1990. The needed qualification: ‘postpone’ is not ‘avoid’; the cost accrues as zombie firms, low productivity and capital consumption; and the limit is money demand — as long as the public still wants to hold the currency, there is no crack-up boom."),
    },
    {
      text: T("价格传递着任何计划者都无法收集的知识。", "Prices convey knowledge that no planner can collect."),
      verdict: "sound", type: null, rung: 1,
      fix: T("这是哈耶克 1945 年的核心命题：分散的、默会的、随时变化的知识只能通过价格被间接利用。它是理论级陈述，不含预言——照原样接受，并准备好回答“大数据能否例外”（阶段 7.5）。",
             "Hayek's 1945 thesis: dispersed, tacit, constantly changing knowledge can only be used indirectly, through prices. A theory-level statement with no forecast in it — accept it as stated, and be ready for ‘can big data be the exception?’ (Stage 7.5)."),
    },
  ];

  const VERDICT_LABEL = {
    sound:   T("成立", "Sound"),
    mistake: T("错误", "Mistake"),
    qualify: T("需限定", "Needs qualification"),
  };
  const RUNG_LABEL = {
    1: T("第 1 级 · 理论", "Rung 1 · theory"),
    2: T("第 2 级 · 辅助假设", "Rung 2 · auxiliary assumptions"),
    3: T("第 3 级 · 模式预测", "Rung 3 · pattern prediction"),
    4: T("第 4 级 · 定时定量预言", "Rung 4 · dated prophecy"),
  };

  let answers = new Array(CLAIMS.length).fill(null);
  let revealed = false;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔎 奥派错误探测器：十二句“听起来很奥派”的话，你放行哪几句？", "🔎 Austrian mistake detector: twelve Austrian-sounding claims — which ones do you wave through?")}</div>
      <div class="demo-meta" style="margin-bottom:10px">${T(
        "对每句话选一个判定：<b>成立</b>（理论确实这么说）、<b>错误</b>（理论没说，是从别处混进来的）、<b>需限定</b>（有一个成立的核，但按字面接受会出错）。全部选完后点“揭晓”。",
        "Give each claim one verdict: <b>Sound</b> (the theory really says this), <b>Mistake</b> (the theory does not; it crept in from elsewhere), or <b>Needs qualification</b> (a sound core, but taken literally it misleads). Answer all twelve, then press Reveal."
      )}</div>
      <div id="md-list"></div>
      <div class="demo-btns" style="margin-top:12px">
        <button class="demo-btn" id="md-reveal">${T("揭晓", "Reveal")}</button>
        <button class="demo-btn" id="md-reset">${T("重来", "Reset")}</button>
        <span class="demo-meta" id="md-progress"></span>
      </div>
      <div class="stat-row" id="md-stats" style="display:none"></div>
      <div class="demo-block" id="md-bars-block" style="display:none">
        <div class="demo-label">${T("你对各类错误的“放行率”（接受的 ÷ 该类出现次数）", "Your pass-through rate by error type (accepted ÷ occurrences of that type)")}</div>
        <div id="md-bars"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="md-log"></div></div>
      <p class="demo-tip">${T(
        "看两件事：<strong>你放行了哪一类错误</strong>——大多数奥派读者最容易放行的是“恶性通胀反射”与“永久熊”，因为它们听起来最像理论；以及<strong>你误杀了哪句成立的话</strong>——把“央行能拖延很久”判成错误的人，正在犯“低估国家”的错。错误几乎从不在第 1 级台阶，几乎总在第 2 与第 4 级。",
        "Watch two things: <strong>which error type you waved through</strong> — most Austrian readers pass the hyperinflation reflex and the permabear, because those sound most like the theory; and <strong>which sound claim you shot down</strong> — marking ‘a central bank can stall for a long time’ as a mistake is itself the ‘underrating the state’ error. Errors almost never sit on rung 1; they almost always sit on rungs 2 and 4."
      )}</p>
    </div>`;

  const list = root.querySelector("#md-list");
  const revealBtn = root.querySelector("#md-reveal");
  const progress = root.querySelector("#md-progress");
  const log = root.querySelector("#md-log");
  const stats = root.querySelector("#md-stats");
  const barsBlock = root.querySelector("#md-bars-block");
  const bars = root.querySelector("#md-bars");

  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // 评分：exact=1，partial=0.5，wrong=0；并记录“放行的错误类型”与“误杀的成立命题”
  function grade(claim, a) {
    if (a == null) return { score: 0, kind: "skip" };
    if (a === claim.verdict) return { score: 1, kind: "exact" };
    if (claim.verdict === "mistake") {
      return a === "sound" ? { score: 0, kind: "accepted" } : { score: 0.5, kind: "half-accepted" };
    }
    if (claim.verdict === "qualify") {
      return a === "sound" ? { score: 0.5, kind: "accepted-unqualified" } : { score: 0.5, kind: "over-rejected" };
    }
    // verdict === sound
    return a === "mistake" ? { score: 0, kind: "rejected-sound" } : { score: 0.5, kind: "over-hedged" };
  }

  function paintList() {
    list.innerHTML = CLAIMS.map((c, i) => {
      const a = answers[i];
      const seg = `<div class="demo-seg" data-i="${i}">${["sound", "mistake", "qualify"].map((v) =>
        `<button data-v="${v}" class="${a === v ? "on" : ""}" ${revealed ? "disabled" : ""}>${VERDICT_LABEL[v]}</button>`).join("")}</div>`;
      let meta = "";
      if (revealed) {
        const g = grade(c, a);
        const pillCls = g.score === 1 ? "ok" : g.score === 0.5 ? "" : "bad";
        const pillStyle = g.score === 0.5 ? 'style="background:var(--orange-soft);color:var(--orange-ink)"' : "";
        const pillTxt = g.score === 1 ? T("✓ 判对", "✓ right") : g.score === 0.5 ? T("△ 一半", "△ half") : a == null ? T("— 未答", "— skipped") : T("✗ 判错", "✗ wrong");
        const typeLine = c.type ? `${T("错误类型：", "Error type: ")}<b>${TYPES[c.type]}</b>` : T("错误类型：无（理论级命题）", "Error type: none (a theory-level claim)");
        meta = `<div class="scn-meta">
          <div><span class="pill ${pillCls}" ${pillStyle}>${pillTxt}</span> &nbsp;${T("判定：", "Verdict: ")}<b>${VERDICT_LABEL[c.verdict]}</b> · ${RUNG_LABEL[c.rung]}${a && a !== c.verdict ? ` · ${T("你选了", "you chose")} “${VERDICT_LABEL[a]}”` : ""}</div>
          <div style="margin-top:4px">${typeLine}</div>
          <div style="margin-top:6px;color:var(--ink)"><b>${T("站得住的说法：", "Defensible version: ")}</b>${esc(c.fix)}</div>
        </div>`;
      }
      return `<div class="scn" style="margin-bottom:8px">
        <div class="scn-q"><span class="demo-meta" style="margin-right:6px">${i + 1}.</span>${esc(c.text)}</div>
        <div class="demo-row">${seg}</div>
        ${meta}
      </div>`;
    }).join("");
    paintProgress();
  }

  function paintProgress() {
    const done = answers.filter((x) => x != null).length;
    progress.textContent = revealed ? "" : T(`已判定 ${done} / ${CLAIMS.length}`, `${done} / ${CLAIMS.length} answered`);
    revealBtn.disabled = revealed || done < CLAIMS.length;
    revealBtn.classList.toggle("active", !revealed && done === CLAIMS.length);
  }

  function reveal() {
    revealed = true;
    let exact = 0, partial = 0, wrong = 0, score = 0;
    const accepted = {};          // type → count of mistakes/unqualified claims accepted (weight 1 or 0.5)
    const occurrences = {};       // type → number of claims of that type where acceptance is possible
    const acceptedList = [];
    const rejectedSound = [];
    const overRejected = [];
    CLAIMS.forEach((c, i) => {
      const g = grade(c, answers[i]);
      score += g.score;
      if (g.score === 1) exact++; else if (g.score === 0.5) partial++; else wrong++;
      if (c.type && (c.verdict === "mistake" || c.verdict === "qualify")) {
        occurrences[c.type] = (occurrences[c.type] || 0) + 1;
        if (g.kind === "accepted") { accepted[c.type] = (accepted[c.type] || 0) + 1; acceptedList.push(i); }
        if (g.kind === "half-accepted" || g.kind === "accepted-unqualified") { accepted[c.type] = (accepted[c.type] || 0) + 0.5; acceptedList.push(i); }
        if (g.kind === "over-rejected") overRejected.push(i);
      }
      if (g.kind === "rejected-sound") rejectedSound.push(i);
    });
    const pct = Math.round((score / CLAIMS.length) * 100);

    stats.style.display = "";
    stats.innerHTML = `
      <div class="stat"><div class="k">${T("得分", "Score")}</div><div class="v ${pct >= 75 ? "pos" : pct >= 50 ? "acc" : "neg"}">${pct}%</div></div>
      <div class="stat"><div class="k">${T("判对", "Right")}</div><div class="v pos">${exact}</div></div>
      <div class="stat"><div class="k">${T("一半", "Half")}</div><div class="v acc">${partial}</div></div>
      <div class="stat"><div class="k">${T("判错", "Wrong")}</div><div class="v neg">${wrong}</div></div>
      <div class="stat"><div class="k">${T("放行的错误", "Mistakes waved through")}</div><div class="v ${acceptedList.length ? "neg" : "pos"}">${acceptedList.length}</div></div>
      <div class="stat"><div class="k">${T("误杀的成立命题", "Sound claims shot down")}</div><div class="v ${rejectedSound.length ? "neg" : "pos"}">${rejectedSound.length}</div></div>`;

    // 放行率条形图（只画本演示里出现过的类型）
    const typeKeys = Object.keys(occurrences);
    barsBlock.style.display = "";
    bars.innerHTML = typeKeys.map((k) => {
      const acc = accepted[k] || 0, occ = occurrences[k];
      const w = Math.round((acc / occ) * 100);
      return `<div class="bar2"><span class="lab">${TYPES[k]}</span><div class="track"><div class="fill" style="width:${w}%;background:${w >= 100 ? "var(--red)" : w > 0 ? "var(--orange)" : "var(--green)"}"></div></div><span class="val">${acc} / ${occ}</span></div>`;
    }).join("");

    // 诊断日志
    const lines = [];
    const ranked = typeKeys.map((k) => [k, accepted[k] || 0, occurrences[k]]).filter((x) => x[1] > 0).sort((a, b) => b[1] / b[2] - a[1] / a[2] || b[1] - a[1]);
    if (ranked.length === 0) {
      lines.push(`<span class="ok">${T("你没有放行任何错误——十二句里所有从第 2 级与第 4 级台阶混进来的话都被你拦住了。", "You waved through no mistakes — every claim that crept in on rungs 2 and 4 got stopped.")}</span>`);
    } else {
      const top = ranked.slice(0, 3).map(([k, a, o]) => `<b>${TYPES[k]}</b>（${a}/${o}）`).join(T("、", ", "));
      lines.push(`<span class="bad">${T("你最容易放行的错误类型：", "The error types you are most prone to accept: ")}${top}</span>`);
      const nums = acceptedList.map((i) => i + 1).join(", ");
      lines.push(`${T("放行的句子：第 ", "Claims waved through: #")}${nums}${T(" 句。回头看每句的“站得住的说法”——注意它们都把日期、幅度或制度假设从句子里拿掉了。", ". Reread each one's ‘defensible version’ — notice that every fix removes a date, a magnitude or an unstated institutional assumption.")}`);
      const k0 = ranked[0][0];
      const advice = {
        hyperinflation: T("补上货币需求与注入点这两条腿（阶段 4.2、13.4）：问“新钱停在哪”，而不是“印了多少”。", "Reattach the money-demand and injection-point legs (Stage 4.2, 13.4): ask ‘where did the new money stop,’ not ‘how much was printed.’"),
        permabear:      T("把“脆弱”与“日期”分开写：方向 + 脆弱性 ≠ 时点 + 幅度。给自己开一本判断账本。", "Write ‘fragile’ and ‘when’ in separate sentences: direction + fragility ≠ timing + magnitude. Start a ledger of your calls."),
        dogmatism:      T("每次听到“所以价格必涨”，追问：哪条定理推出了价格路径？答案总是：没有。", "Every time you hear ‘so the price must rise,’ ask which theorem implies a price path. The answer is always: none."),
        solvent:        T("用三问过滤每一次繁荣：钱从哪来？利率是否低于自然利率？哪些部门在膨胀？", "Run every boom through three questions: where does the money come from? Is the rate below the natural rate? Which sectors are swelling?"),
        mainstream:     T("读一本公共选择、读科斯、读一篇机制设计——批评主流之前先让对方点头。", "Read one public-choice book, read Coase, read one mechanism-design paper — make the mainstream nod before you criticize it."),
        conspiracy:     T("把“阴谋”换成“激励”：同样的结论，更准确，也更能说服受过训练的听众。", "Replace ‘conspiracy’ with ‘incentives’: same conclusion, more accurate, more persuasive to a trained audience."),
        settled:        T("把“米塞斯证明了”换成一条你能自己重推的推理链，并列出仍在争论的部分。", "Replace ‘Mises proved’ with a chain of reasoning you can rebuild yourself, and list what is still contested."),
        authority:      T("引文只证明观点，不证明正确；不引人名再推一遍。", "A quotation proves an opinion, not its truth; rebuild the argument without the name."),
        moralizing:     T("先回答“会导致什么”，再回答“道德吗”。", "Answer ‘what does it cause’ before ‘is it moral.’"),
        state:          T("记住日本：一个能压零利率、能财政兜底的国家可以拖很久；崩溃繁荣是条件，不是时间表。", "Remember Japan: a state that can hold zero rates and backstop fiscally can stall for a very long time; the crack-up boom is a condition, not a schedule."),
      };
      lines.push(`<span class="warn">${T("对症的习惯：", "The matching habit: ")}${advice[k0]}</span>`);
    }
    if (rejectedSound.length) {
      lines.push(`<span class="bad">${T("你把这些理论级命题判成了错误：第 ", "You marked these theory-level claims as mistakes: #")}${rejectedSound.map((i) => i + 1).join(", ")}${T(" 句。自我批评不等于反射式怀疑——第 1 级台阶的命题（信用扩张扭曲结构、价格传递知识、价格下限的定性效应）正是理论最硬的部分。", ". Self-critique is not reflexive doubt — rung-1 claims (credit expansion distorts structure, prices carry knowledge, the qualitative effect of a price floor) are the hardest part of the theory.")}</span>`);
    }
    if (overRejected.length) {
      lines.push(`<span class="warn">${T("这些话你整句否定了，其实有一个成立的核：第 ", "You rejected these outright, though each has a sound core: #")}${overRejected.map((i) => i + 1).join(", ")}${T(" 句。", ".")}${overRejected.includes(10) ? T(" 尤其第 11 句——把“央行能拖延很久”判成错误，本身就是“低估国家”的错误。", " Especially #11 — calling ‘a central bank can stall for a long time’ a mistake is itself the ‘underrating the state’ error.") : ""}</span>`);
    }
    if (!rejectedSound.length && !overRejected.length && ranked.length === 0) {
      lines.push(`${T("满分。现在把同样的检查用到你自己最近三次公开判断上。", "Full marks. Now run the same check on your own last three public calls.")}`);
    }
    lines.push(`<span class="demo-meta">${T("台阶提示：本演示里第 1 级命题 3 句、第 2 级 4 句、第 3 级 1 句、第 4 级 4 句——错误从不在第 1 级。", "Rung note: this set has 3 rung-1 claims, 4 on rung 2, 1 on rung 3 and 4 on rung 4 — none of the errors sit on rung 1.")}</span>`);
    log.innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
    paintList();
  }

  function reset() {
    answers = new Array(CLAIMS.length).fill(null);
    revealed = false;
    stats.style.display = "none";
    barsBlock.style.display = "none";
    log.innerHTML = `<div>${T("先判定十二句话，再揭晓。", "Judge all twelve claims, then reveal.")}</div>`;
    paintList();
  }

  list.addEventListener("click", (ev) => {
    const btn = ev.target.closest("button[data-v]");
    if (!btn || revealed) return;
    const seg = btn.closest(".demo-seg");
    const i = +seg.dataset.i;
    answers[i] = btn.dataset.v;
    // 只更新这一行的按钮状态，不重绘整个列表（避免焦点与滚动位置丢失）
    seg.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b === btn));
    paintProgress();
  });
  revealBtn.addEventListener("click", () => { if (!revealBtn.disabled) reveal(); });
  root.querySelector("#md-reset").addEventListener("click", reset);

  reset();
}
