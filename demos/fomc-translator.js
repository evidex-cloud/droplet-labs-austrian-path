// 交互演示：FOMC 声明翻译器——一组风格化的（非真实引用）央行句子，点开看奥派翻译、对应概念与出处课程；
// 下方“搭建你的阅读清单”：勾选你要在每次声明后检查的结构性指标，生成一份可复制的清单，并给出“扭曲预警”评分。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const sentences = [
    { s: T("委员会将维持联邦基金利率目标区间在 0–0.25%，直到劳动力市场状况达到与最大就业相符的水平。", "The Committee will maintain the target range at 0 to 1/4 percent until labor market conditions have reached levels consistent with maximum employment."),
      tr: T("我们承诺把市场利率压在自然利率之下，直到几个总量指标说可以停——不管在此期间生产结构被拉成什么样。", "We commit to holding the market rate below the natural rate until a few aggregates say we may stop — whatever shape the production structure takes meanwhile."),
      c: T("人为压低利率 · 总量看不见结构", "Artificially suppressed rate · aggregates blind to structure"), ref: T("阶段 3.5、5.1、10.2", "Stages 3.5, 5.1, 10.2"), dist: 3 },
    { s: T("委员会的决定将是数据依赖的。", "The Committee's decisions will be data dependent."),
      tr: T("我们靠后视镜开车：对滞后一到三个月、事后大幅修正的总量做反应，而政策效果本身滞后一到两年。", "We drive by the rear-view mirror: reacting to aggregates published months late and heavily revised, while policy's own effects lag one to two years."),
      c: T("滞后 · 系统性太晚", "Lags · systematically late"), ref: T("阶段 10.2、13.5", "Stages 10.2, 13.5"), dist: 1 },
    { s: T("委员会判断当前政策立场大致处于中性水平。", "The Committee judges that the current stance of policy is roughly neutral."),
      tr: T("我们估计的那个看不见的数，和我们设定的这个数，差不多。——这句话无法验证，说的人也知道。", "The number we estimated for the thing we cannot see is about equal to the number we set. — Unverifiable, and the speaker knows it."),
      c: T("自然利率不可观测 · 美联储的知识问题", "Natural rate unobservable · the Fed's knowledge problem"), ref: T("阶段 3.5、7.2", "Stages 3.5, 7.2"), dist: 2 },
    { s: T("委员会预计在一段时间内维持限制性政策立场是合适的。", "The Committee anticipates that maintaining a restrictive stance for some time will be appropriate."),
      tr: T("清算终于被允许开始——但“一段时间”意味着我们随时准备在痛苦出现时停止。", "Liquidation is finally being allowed to begin — but “for some time” means we stand ready to stop the moment it hurts."),
      c: T("清算是治疗 · 美联储看跌期权", "Liquidation is the cure · the Fed put"), ref: T("阶段 5.3、10.3", "Stages 5.3, 10.3"), dist: -2 },
    { s: T("委员会预计至少到明年年中都将维持异常低的利率水平。", "The Committee anticipates that exceptionally low levels of the federal funds rate are likely to be warranted at least through the middle of next year."),
      tr: T("我们不只压短端，还要用承诺压平整条收益率曲线——所有人都去做久期赌注吧。", "We are not only suppressing the short end; we are using promises to flatten the whole yield curve — everyone, go make duration bets."),
      c: T("前瞻指引 · 期限溢价被压平 · 久期赌注", "Forward guidance · crushed term premium · duration bets"), ref: T("阶段 3.5、13.4", "Stages 3.5, 13.4"), dist: 3 },
    { s: T("资产负债表缩减将以可预测的方式进行，主要通过调整再投资规模。", "Balance-sheet reduction will proceed in a predictable manner, primarily by adjusting reinvestment."),
      tr: T("反向的坎蒂隆效应开始了：先到者（金融资产持有者）先失去——长债、成长股、加密、商业地产，按这个顺序。", "The reverse Cantillon effect begins: the first recipients (financial-asset holders) lose first — long bonds, growth stocks, crypto, commercial real estate, in that order."),
      c: T("坎蒂隆效应（反向）", "Cantillon effect (in reverse)"), ref: T("阶段 4.3、13.4", "Stages 4.3, 13.4"), dist: -2 },
    { s: T("通胀上升在很大程度上反映了暂时性因素。", "The rise in inflation largely reflects transitory factors."),
      tr: T("这是一个关于注入点的判断——供给冲击只改变相对价格，所有价格一起涨需要货币。2021 年这个判断错了。", "A judgment about the injection point — a supply shock changes relative prices; all prices rising together takes money. In 2021 that judgment was wrong."),
      c: T("注入点 · 货币非中性", "Injection point · non-neutrality of money"), ref: T("阶段 4.2、4.3、13.4", "Stages 4.2, 4.3, 13.4"), dist: 2 },
    { s: T("委员会将密切关注金融条件。", "The Committee will closely monitor financial conditions."),
      tr: T("美联储看股市，股市知道美联储看股市——资产价格从“对未来的评估”变成“对美联储反应函数的押注”。", "The Fed watches the stock market, and the market knows it — asset prices turn from “an assessment of the future” into “a bet on the Fed's reaction function.”"),
      c: T("美联储看跌期权 · 反身性", "The Fed put · reflexivity"), ref: T("阶段 10.3、16.5", "Stages 10.3, 16.5"), dist: 2 },
    { s: T("委员会致力于实现其双重使命：最大就业与价格稳定。", "The Committee is committed to its dual mandate of maximum employment and price stability."),
      tr: T("用两个总量定义成功，意味着两个总量之外的一切扭曲都不算失败——2003–06 年双重使命完美达成，房地产泡沫同时膨胀。", "Defining success by two aggregates means any distortion outside them does not count as failure — the dual mandate was perfectly met in 2003–06 while the housing bubble inflated."),
      c: T("总量的局限 · “稳定物价”掩盖信用通胀", "Limits of aggregates · “stable prices” masking credit inflation"), ref: T("阶段 10.2、13.2、13.4", "Stages 10.2, 13.2, 13.4"), dist: 1 },
    { s: T("委员会将在充足准备金框架下实施货币政策。", "The Committee will implement monetary policy in an ample-reserves regime."),
      tr: T("我们已经把基础货币和信用脱钩：可以印任意多的钱而不让它流出银行体系——“看基础货币判断通胀”彻底失效。", "We have decoupled base money from credit: we can print any amount without it leaving the banking system — reading inflation off the monetary base is dead."),
      c: T("准备金付息 · 基础货币 ≠ 信用", "Interest on reserves · base money ≠ credit"), ref: T("阶段 4.4、13.4", "Stages 4.4, 13.4"), dist: 0 },
  ];

  const watch = [
    { k: "credit", s: T("银行信贷（H.8）与真实货币供给（TMS）的增速——利率是价格，信用是数量", "Bank credit (H.8) and True Money Supply growth — the rate is a price, credit is a quantity"), ref: "13.1 / 13.5" },
    { k: "term", s: T("期限溢价（纽约联储 ACM）与收益率曲线形状——长端是自然形成还是被压平", "Term premium (NY Fed ACM) and the shape of the curve — long end natural or flattened"), ref: "3.5 / 13.5" },
    { k: "capex", s: T("分行业资本支出：建筑、采矿、半导体设备、数据中心 vs 消费品行业", "Sectoral capex: construction, mining, chip equipment, data centers vs consumer goods"), ref: "5.2 / 18.5" },
    { k: "go", s: T("总产出（GO）上游阶段相对 GDP 的加速或转跌", "Gross Output upstream stages accelerating or turning ahead of GDP"), ref: "10.2" },
    { k: "spread", s: T("高收益利差、CCC 收益率、低门槛贷款占比——风险的价格是否被压扁", "High-yield spread, CCC yields, covenant-lite share — is the price of risk flattened"), ref: "6.3 / 10.3" },
    { k: "who", s: T("谁在借：政府、大企业、金融机构还是家庭——注入点在哪", "Who is borrowing: government, big firms, financial institutions or households — where is the injection point"), ref: "4.3 / 13.4" },
    { k: "real", s: T("实际政策利率（联邦基金利率 − 通胀）为负持续了多久", "How long the real policy rate (fed funds − inflation) has been negative"), ref: "3.5 / 5.1" },
    { k: "dur", s: T("久期赌注的堆积：银行持有的长期证券、未盈利公司融资、并购与 IPO 数量", "Duration bets piling up: banks' long securities, funding of unprofitable firms, M&A and IPO counts"), ref: "10.3 / 13.4" },
  ];

  let open = new Set();
  let picked = new Set(["credit", "term", "capex"]);
  let stance = new Set();

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗣️ FOMC 翻译器：点一句，看奥派怎么读", "🗣️ FOMC translator: click a sentence to see how an Austrian reads it")}</div>
      <div class="demo-meta">${T("下面的句子是本课写的风格化范例，不是任何真实声明的原文。勾选“本次声明里有这句”，右侧会累计一个“扭曲方向”读数。", "The sentences below are stylized examples written for this course, not quotations from any actual statement. Tick “this statement contains it” and the readout accumulates a “direction of distortion” score.")}</div>
      <div class="demo-block" id="ft-list"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("扭曲方向读数", "Distortion-direction score")}</div><div class="v" id="ft-score">0</div></div>
        <div class="stat"><div class="k">${T("读法", "Reading")}</div><div class="v" id="ft-read" style="font-size:13px">–</div></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("搭建你的阅读清单：每次声明发布后，你要检查哪些美联储之外的指标？", "Build your reading checklist: after each statement, which non-Fed indicators will you check?")}</label>
        <div id="ft-watch"></div>
        <div class="demo-out" id="ft-out"></div>
      </div>
      <p class="demo-tip">${T(
        "注意“扭曲方向读数”只告诉你<strong>这份声明把生产结构往哪边推</strong>（正 = 继续压低利率、压平曲线；负 = 允许清算），它<strong>不</strong>告诉你市场下个月怎么走——正读数可以持续十年。清单才是你真正该带走的东西：每次声明后查这几项，而不是猜下次加不加息。这不是投资建议。",
        "The “distortion-direction score” tells you only <strong>which way this statement pushes the production structure</strong> (positive = keep suppressing rates and flattening the curve; negative = allow liquidation). It does <strong>not</strong> tell you where markets go next month — a positive score can persist for ten years. The checklist is what you should really take away: check these items after every statement instead of guessing the next hike. Not investment advice."
      )}</p>
    </div>`;

  function paintList() {
    root.querySelector("#ft-list").innerHTML = sentences.map((x, i) => `
      <div class="scn" style="cursor:pointer" data-i="${i}">
        <div class="scn-q" style="display:flex;gap:10px;align-items:flex-start">
          <input type="checkbox" data-st="${i}" ${stance.has(i) ? "checked" : ""} title="${T("本次声明里有这句", "This statement contains it")}" style="margin-top:4px"/>
          <span>“${x.s}”</span>
        </div>
        ${open.has(i) ? `<div class="scn-meta" style="border-top:1px solid var(--line);padding-top:8px">
          <div><b style="color:var(--orange-ink)">${T("奥派翻译：", "Austrian translation: ")}</b>${x.tr}</div>
          <div style="margin-top:4px"><span class="pill" style="background:var(--orange-soft);color:var(--orange-ink)">${x.c}</span> <span style="color:var(--muted)">${T("见", "See")} ${x.ref}</span> <span class="pill ${x.dist > 0 ? "bad" : x.dist < 0 ? "ok" : ""}">${x.dist > 0 ? T("推向扭曲 +", "toward distortion +") + x.dist : x.dist < 0 ? T("允许清算 ", "allows liquidation ") + x.dist : T("中性/制度", "neutral / structural")}</span></div>
        </div>` : `<div class="scn-meta">${T("点击展开翻译", "Click to reveal the translation")}</div>`}
      </div>`).join("");
    root.querySelectorAll("#ft-list .scn").forEach((el) => el.addEventListener("click", (e) => {
      if (e.target.tagName === "INPUT") return;
      const i = +el.dataset.i; if (open.has(i)) open.delete(i); else open.add(i); paintList();
    }));
    root.querySelectorAll("[data-st]").forEach((cb) => cb.addEventListener("change", () => {
      const i = +cb.dataset.st; if (cb.checked) stance.add(i); else stance.delete(i); paintScore();
    }));
    paintScore();
  }

  function paintScore() {
    let sc = 0; stance.forEach((i) => { sc += sentences[i].dist; });
    const el = root.querySelector("#ft-score");
    el.textContent = (sc > 0 ? "+" : "") + sc;
    el.className = "v " + (sc > 0 ? "neg" : sc < 0 ? "pos" : "");
    root.querySelector("#ft-read").textContent = stance.size === 0 ? T("勾选本次声明包含的句子", "Tick the sentences this statement contains")
      : sc >= 4 ? T("强力压低利率、压平曲线：扭曲在积累，久期赌注在堆——但时点未知", "Strong suppression and curve-flattening: distortion accumulating, duration bets piling — timing unknown")
      : sc > 0 ? T("偏向继续扭曲，同时用总量语言自我确认", "Leaning toward continued distortion, self-confirmed in aggregate language")
      : sc === 0 ? T("大体中性/制度性表述", "Broadly neutral / structural language")
      : T("允许清算开始——注意“一段时间”这类随时撤回的措辞", "Liquidation allowed to begin — watch for withdrawable phrases like “for some time”");
  }

  function paintWatch() {
    root.querySelector("#ft-watch").innerHTML = watch.map((w) => `
      <label class="demo-check" style="margin:7px 0;align-items:flex-start"><input type="checkbox" data-w="${w.k}" ${picked.has(w.k) ? "checked" : ""} style="margin-top:3px"/><span>${w.s} <span style="color:var(--muted)">(${T("阶段", "Stage")} ${w.ref})</span></span></label>`).join("");
    root.querySelectorAll("[data-w]").forEach((cb) => cb.addEventListener("change", () => { if (cb.checked) picked.add(cb.dataset.w); else picked.delete(cb.dataset.w); paintOut(); }));
    paintOut();
  }
  function paintOut() {
    const items = watch.filter((w) => picked.has(w.k));
    const head = T("我的 FOMC 阅读清单（每次声明后检查）：", "My FOMC reading checklist (check after every statement):");
    const tail = T("提醒：这些指标告诉你扭曲在不在、多大、在哪；不告诉你转折的时点。识别 ≠ 预测。", "Reminder: these tell you whether, how large and where the distortion is — not when it turns. Identification ≠ prediction.");
    root.querySelector("#ft-out").innerHTML = items.length
      ? `${head}<br>${items.map((w, i) => `${i + 1}. ${w.s}`).join("<br>")}<br><span style="color:var(--muted)">${tail}</span>`
      : T("（勾选至少一项）", "(tick at least one item)");
  }

  paintList(); paintWatch();
}
