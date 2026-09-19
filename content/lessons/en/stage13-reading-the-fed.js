export default {
  id: "reading-the-fed",
  stage: 13,
  order: 5,
  title: "Reading the Fed: FOMC Statements through Austrian Glasses",
  difficulty: "mastery",
  prereqs: ["natural-rate", "case-2008-qe"],

  oneLiner:
    "Eight times a year, at 2 p.m. Eastern, the Federal Open Market Committee releases a few hundred words and traders around the world parse every one: “data dependent,” “neutral rate,” “forward guidance,” “balance-sheet runoff,” “restrictive stance.” What does each phrase mean, and how does an Austrian translate it? This lesson is a **dictionary**. For instance, “we will hold rates at zero until the labor market reaches maximum employment” translates to “**we commit to holding the market rate below the natural rate until a few aggregates tell us to stop**” — and Stage 3.5 told you the natural rate is unobservable, while Stage 7.2 told you why the Fed itself cannot know where it is. By the end you will read what a statement does not say: which price it is distorting, by how much — and, the Austrian humility, **you can identify a distortion but you cannot time the turn.** This is not investment advice.",

  intuition: `
Imagine a city where the price of water is set by a committee. It meets every six weeks and issues a bulletin: “The Committee judges that the current water price is broadly consistent with fundamentals of supply and demand, will remain data dependent in deciding further adjustments, and anticipates the price will remain at its current level for some time.”

An ordinary citizen reads: “the price of water isn't changing for now.” Someone who has done Stages 7.1 and 7.2 reads something entirely different: **how could this committee possibly know what price is “consistent with fundamentals”?** That price should emerge from the daily decisions of millions of households and thousands of firms about how much water to use; the committee has only last month's total consumption, the reservoir level, last year's rainfall — all past, all aggregated. It is not *discovering* the price of water. It is **replacing** a price that should have been discovered, and then guessing from a few aggregates whether it guessed right.

The Fed is that committee, and the price it sets is **the price of time** — the interest rate. Stage 3.5 explained that the rate is the price formed between savers and borrowers in intertemporal exchange, coordinating society's most important decision: consume now or later. Stage 5.1 explained that pushing that price below its natural level makes entrepreneurs believe there is more saving than there is, and sends resources into long projects consumers are not actually willing to wait for. Every six weeks the Fed meets and sets that price; then it issues a statement explaining why.

**First lesson in reading an FOMC statement: it is not reporting a price. It is setting one, and trying to persuade you the price is “neutral.”**

Second lesson: Fed language is a highly ritualized code. “Inflation remains elevated,” “the labor market remains strong,” “the Committee will continue to assess additional information and its implications for monetary policy” — every word is weighed, and changing one adverb (“will” to “may”) can move markets. A trader's job is to decode what those words mean for the next rate decision. **An Austrian's job is different: decode what they mean for the structure of production.**

Third lesson: the Fed does not know what it is doing — and that is not a sneer; the Fed chair said it. Powell's 2018 Jackson Hole speech compared monetary policy to “navigating by the stars under cloudy skies”: the natural rate (r*), the natural rate of unemployment (u*) — the “stars” — are unobservable, can only be estimated, and the estimation errors are large enough to turn policy from “easy” to “tight” without anyone noticing. The Austrian reaction: **yes, that is the knowledge problem of Stage 7.2 — and it is not a technical problem but a structural one.** No better model can tell you a price that should have been discovered by a market process.

Fourth lesson: if the Fed's words carry limited credibility, what should an Austrian look at? **Things outside the Fed**: whether credit aggregates are expanding or contracting, whether the term structure formed naturally or was flattened by policy, which sectors' capital spending is swelling abnormally, what the upstream stages of Gross Output are doing. These data will not tell you the next meeting's decision, but they tell you **whether the distortion is present, how large, and where it is concentrated.**

The last lesson matters most: **Austrians can identify distortion; they cannot time the turn.** Stage 13.1 drew the boundary of pattern prediction, and Stage 14.4 will count how many Austrians became “permabears” by forgetting it. An FOMC statement can tell you the Fed is holding the rate below a natural rate whose location it does not know; it cannot tell you whether that lasts three months or three years. So this lesson is a framework for thinking, not investment advice — Stage 10.5 said that already, and it bears repeating.

**In this lesson we break it into five pieces:**

- **① How the Fed speaks: statement, minutes, dot plot, SEP, press conference — anatomy of a ritual**
- **② The dictionary: ten key phrases translated into Austrian**
- **③ The “neutral rate”: the Fed's own knowledge problem**
- **④ What to watch beyond the Fed: credit, the term premium, sectoral capex, Gross Output**
- **⑤ Austrian humility: you can identify distortion, not time the turn — and why this is not investment advice**
`,

  mechanics: `
### ① How the Fed speaks: statement, minutes, dot plot, SEP, press conference — anatomy of a ritual

Lay out the Fed's channels first, because each differs in credibility and information content:

- **The FOMC statement.** Released at the end of each of eight meetings a year, a few hundred words, in a fixed structure: assessment of current conditions (employment, inflation, financial conditions) → the policy decision (the fed funds target range, balance-sheet operations) → guidance about the future (“the Committee anticipates …”) → the vote (who dissented and why). The most important document, because the committee signs it **collectively**.
- **The minutes.** Released three weeks later, several thousand words, recording the disagreements: “some participants noted … other participants observed …” The minutes tell you how much dissent sits behind the statement's “consensus.”
- **The Summary of Economic Projections (SEP) and the dot plot.** Four times a year (March, June, September, December) each participant submits anonymous projections for GDP, unemployment, inflation and **the fed funds rate** over the next few years. The rate projections are drawn as a scatter — **the dot plot** (published since 2012). Markets treat the median dot as “the Fed's rate path.” Note: it is not a commitment but nineteen individual guesses, with a poor track record — the December 2021 median projected a rate of about 0.9% at end-2022; the actual figure was 4.25–4.5%.
- **The press conference.** The chair takes questions after every meeting (since 2019). The leakiest channel, because the chair must improvise explanations of the committee's thinking — “transitory” and “we're not even thinking about thinking about raising rates” both came from press conferences.
- **Congressional testimony, speeches, the Beige Book.** Semi-annual testimony, speeches by individual governors and presidents (often used to “float” ideas), and the Beige Book summarizing regional business conditions.

An Austrian reads this ritual from one basic vantage point: **every document speaks the language of aggregates.** “The labor market,” “inflation,” “economic activity” — each is a statistic of the kind Stage 10.2 described, heterogeneous things summed into one number. A statement will never contain “capital spending in construction has expanded relative to consumer-goods industries by so much” or “credit has flowed into these durations” — which is exactly what Austrians care about. This is not an oversight; it is the Fed's **epistemology**: it believes the economy can be described and steered by a handful of aggregates.

### ② The dictionary: ten key phrases translated into Austrian

Below are phrases you will meet in nearly every statement or press conference. For each: what the Fed means → the Austrian translation → the concept in this course. Note that the sentences are our own **stylized examples**, not quotations from any actual statement.

**1. “The Committee will maintain the target range for the federal funds rate at 0 to 1/4 percent until labor market conditions have reached levels consistent with maximum employment.”**
→ Fed meaning: zero rates continue until unemployment falls to some threshold.
→ Austrian translation: **we commit to holding the market rate below the natural rate until a few aggregates say we may stop — whatever shape the production structure takes in the meantime.** This is the purest possible pledge to suppress the rate artificially (Stages 3.5, 5.1). And “maximum employment” is defined by one number, the unemployment rate — which cannot see **in which sectors** employment is growing (Stage 10.2).

**2. “The Committee's decisions will be data dependent.”**
→ Fed meaning: we make no advance commitment; we'll see what the data say.
→ Austrian translation: **we drive by the rear-view mirror.** CPI, unemployment and GDP are aggregates published one to three months late and heavily revised afterward; monetary policy itself works with a lag of one to two years (Friedman's “long and variable”). “Data dependent” means policy is forever reacting to **past** aggregates — which is why the Fed is systematically late: still doing QE in 2021 with inflation already rising, still hiking in 2007 with house prices already a year into decline.

**3. “The Committee judges that the current stance of policy is roughly neutral.”**
→ Fed meaning: the rate neither stimulates nor restrains.
→ Austrian translation: **the number we estimated for the thing we cannot see is about equal to the number we set.** See ③ — the most important and least credible sentence in the whole dictionary.

**4. “The Committee anticipates that maintaining a restrictive stance for some time will be appropriate.”**
→ Fed meaning: rates stay high for a while (“higher for longer”).
→ Austrian translation: **liquidation is finally being allowed to begin — but “for some time” means we stand ready to stop the moment it hurts.** Stage 5.3 explained that liquidation is the cure; the Fed treats it as an unavoidable side effect.

**5. “Forward guidance” (e.g. “The Committee anticipates that exceptionally low levels of the federal funds rate are likely to be warranted at least through mid-20XX.”)**
→ Fed meaning: manage market expectations of future rates to push long rates down.
→ Austrian translation: **we are not only suppressing the short end; we are using promises to flatten the whole yield curve.** The long end should reflect savers' distant time preference and uncertainty (the term premium); forward guidance makes it a policy variable too. The consequence is that everyone makes duration bets — the logic behind Silicon Valley Bank buying thirty-year MBS in 2021 was precisely “the Fed said rates will stay low” (Stage 13.4).

**6. “Balance-sheet reduction will proceed in a predictable manner, primarily by adjusting reinvestment.”**
→ Fed meaning: quantitative tightening — let maturing bonds roll off without repurchase.
→ Austrian translation: **the reverse Cantillon effect has begun: the first recipients (holders of financial assets) lose first.** Stage 4.3 showed who gets new money first; when it is withdrawn, the drain also starts with the assets closest to the injection point — long bonds, growth stocks, crypto, commercial real estate (the 2022 sequence of Stage 13.4).

**7. “The rise in inflation largely reflects transitory factors.”**
→ Fed meaning: price rises come from supply chains and will fade on their own.
→ Austrian translation: **this is a judgment about the injection point, and it was wrong.** In 2021 the Fed treated M2 +40% and fiscal transfers wired to households as a “supply shock.” Stage 13.4 explained that a supply shock changes relative prices; for all prices to rise together takes money.

**8. “The Committee will closely monitor financial conditions.”**
→ Fed meaning: stock prices, credit spreads and the dollar are also policy inputs.
→ Austrian translation: **the Fed watches the stock market, and the stock market knows the Fed is watching.** This is the “Fed put” of Stage 10.3 — whenever asset prices fall far enough, policy turns. It converts asset prices from “the market's assessment of the future” into “a bet on the Fed's reaction function,” an institutionalized case of the reflexivity of Stage 16.5.

**9. “The Committee is committed to its dual mandate of maximum employment and price stability.”**
→ Fed meaning: these are the statutory goals Congress set.
→ Austrian translation: **defining success by two aggregates means any distortion outside those two aggregates does not count as failure.** In 2003–06 CPI was mild and unemployment low — the dual mandate perfectly met — while the housing bubble inflated (Stage 13.4). And “price stability” is itself the goal Hayek attacked in the 1930s: when productivity rises prices should fall, and holding them steady *is* inflation (the 1920s of Stage 13.2).

**10. “The Committee will implement monetary policy in an ample-reserves regime.”**
→ Fed meaning: the post-2008 operating framework — the banking system holds vast reserves, and the rate is controlled by paying interest on reserves (IORB) and reverse repos rather than by scarcity of reserves.
→ Austrian translation: **the Fed has decoupled base money from credit — it can print any amount without the money leaving the banking system.** This is the institutional root of “why QE didn't inflate” in Stage 13.4, and it means the old habit of reading inflation off the monetary base is dead.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">“Navigating under cloudy skies”: the rate the Fed sets vs the natural rate nobody can see (illustrative)</text><line x1="50" y1="240" x2="600" y2="240" stroke="var(--line)"/><line x1="50" y1="50" x2="50" y2="240" stroke="var(--line)"/><text x="325" y="262" text-anchor="middle" font-size="10.5" fill="var(--muted)">time →</text><text x="40" y="150" text-anchor="end" font-size="10.5" fill="var(--muted)" transform="rotate(-90 40 150)">interest rate</text><path d="M50 120 C 150 100, 250 150, 350 130 S 550 90, 600 110 L 600 190 C 550 170, 450 200, 350 210 S 150 180, 50 200 Z" fill="var(--orange-soft)" opacity=".7"/><text x="330" y="165" text-anchor="middle" font-size="11" font-weight="700" fill="var(--orange-ink)">Natural rate r*: known only to lie somewhere in this band</text><text x="330" y="180" text-anchor="middle" font-size="10" fill="var(--orange-ink)">(formed by countless time preferences and entrepreneurial judgments; unobservable)</text><polyline fill="none" stroke="var(--blue)" stroke-width="2.5" points="50,225 120,225 120,222 200,222 200,205 280,205 280,140 360,140 360,105 440,105 440,95 520,95 520,110 600,110"/><text x="90" y="215" font-size="10" fill="var(--blue)" font-weight="700">Rate set by the FOMC</text><path d="M50 200 L50 225 L120 225 L120 222 L200 222 L200 205 L280 205 L280 195 C 250 200, 150 195, 50 200 Z" fill="var(--red-soft)" opacity=".8"/><text x="165" y="245" text-anchor="middle" font-size="10" fill="var(--red)" font-weight="700">Below the band: distortion zone (the boom accumulates)</text><line x1="280" y1="205" x2="280" y2="140" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="3 3"/><text x="290" y="200" font-size="9.5" fill="var(--red)">“Data dependent”: moves only after aggregates change</text><text x="480" y="80" text-anchor="middle" font-size="10" fill="var(--ink)">“Roughly neutral”? — nobody knows</text><text x="320" y="288" text-anchor="middle" font-size="10" fill="var(--muted)">Powell 2018: “navigating by the stars under cloudy skies.” Austrians: those stars should be discovered by the market process, not estimated by a committee.</text></svg><figcaption>The Fed sets a point; the natural rate is an invisible band. When the policy rate sits below the band's lower edge for years, distortion accumulates — and the Fed learns of it only after aggregates move, never sure which side of the band it is on.</figcaption></figure>

### ③ The “neutral rate”: the Fed's own knowledge problem

The “neutral rate” (r*, also the natural or equilibrium real rate) anchors Fed language: policy is “accommodative” or “restrictive” relative to r*. How does the Fed know where r* is? It estimates it with models — most famously the Laubach–Williams model (Williams later became president of the New York Fed), which “filters” an r* out of the historical relations among the output gap, inflation and interest rates. The confidence intervals are startlingly wide: an r* estimate of 0.5% at a given moment may carry a band from −1% to 2%; and the estimates shift substantially **after the fact** as data are revised — the 2019 estimate of r* for 2015 may differ by a full point from the estimate made in 2015.

Powell's 2018 Jackson Hole speech said, in substance, that r*, u* and potential growth — the “stars” — all move, that our estimates of their positions carry large errors, and that we are “navigating by the stars under cloudy skies.” His conclusion was “caution” and “gradualism.” The Austrian conclusion is different.

**This is not a problem of estimation precision but a category problem.** Stage 3.5 explained that the natural rate is not a parameter hiding in the data waiting to be filtered out; it is **the outcome of countless time preferences interacting in intertemporal exchange** — it exists only in the market process, and the Fed's very existence has already altered that process. In Hayek's 1945 terms (Stage 7.2), the knowledge this price requires is dispersed across every saver's and borrower's mind, “knowledge of the particular circumstances of time and place,” and cannot be gathered by any central body. You can estimate a number with a model, just as Lange's central planning board could “simulate” prices by trial and error (Stage 7.3); but the gap between the estimated number and the price the market would have discovered is exactly the source of the distortion in Stage 5.1.

There is a deeper layer, which Mises saw long ago: **the central bank's existence changes r* itself.** If the market knows the Fed will cut when asset prices fall (the “Fed put” of Stage 10.3), then savers' and borrowers' time preferences, entrepreneurs' duration choices and banks' risk-taking all change — the “natural rate absent a central bank” you are trying to estimate does not exist in a world with one. A Heisenberg problem: the observer alters the observed.

So when a statement says “the stance is roughly neutral,” the Austrian reading is: **this is an unverifiable sentence, the people saying it know it is unverifiable, and the whole policy framework rests on it.** That is not a conspiracy theory; it is a structural epistemological predicament. It also explains why the Fed's history is a cycle of “too loose → too late → too tight → too late”: not because officials are foolish, but because the task is impossible.

### ④ What to watch beyond the Fed: credit, the term premium, sectoral capex, Gross Output

If the Fed's self-assessment cannot be trusted, what does an Austrian use to judge whether distortion is present and how large? This is the field version of the “structural data kit” of Stage 13.1:

**Watch credit, not only the rate.** Bank credit (the Fed's weekly H.8), commercial and industrial loans, real-estate loans, consumer credit; the Rothbard–Salerno True Money Supply (TMS); corporate-bond issuance, leveraged loans, private credit. **The rate is a price; credit is a quantity** — in the 2010s the rate was zero but credit grew modestly; in 2020–21 credit (via fiscal transfers) exploded. The strength of the distortion shows in the quantity.

**Watch the shape of the term structure, not only the short end.** Stage 3.5 explained that the yield curve is the market's pricing of time preference and risk. Ask: did the long end form naturally, or was it flattened by QE and forward guidance? The years in which the New York Fed's term-premium estimate (the ACM model) sat below zero — 2012 to 2021 — are the years the long end was artificially flattened. The direct consequence of a crushed term premium is a proliferation of duration bets (the SVB of Stage 13.4). An inverted curve (short above long) is the market saying “you've pushed too hard and will have to cut” — the old recession signal, but the Austrian reading is: **it marks the beginning of liquidation, not the arrival of catastrophe.**

**Watch sectoral capital spending, not only total investment.** ABCT predicts that upstream, long-duration sectors expand relatively (Stage 5.2). Watch: capital-spending growth in construction, mining, semiconductor equipment, data centers and energy exploration versus consumer-goods industries; IPO and M&A counts; venture-capital volumes; funding raised by unprofitable companies. The AI capex frenzy of the 2020s — a handful of tech giants spending hundreds of billions a year on data centers — is exactly what Stage 18.5 examines through this lens: **how much is a genuine technological revolution (like 1920s electrification) and how much a duration bet after a decade of zero rates?** There is no a priori answer; it can only be separated piece by piece with structural data.

**Watch Gross Output, not only GDP.** Stage 10.2 explained that GO includes intermediate inputs and therefore sees the upstream stages. Upstream stages swing two to three times as much as downstream ones — when GO's upstream components accelerate far ahead of GDP, the production structure is being stretched; when they turn down ahead of GDP, liquidation has begun.

**Watch credit spreads and the price of “junk.”** The high-yield spread over Treasuries, yields on CCC-rated bonds, leveraged-loan terms (the share of “covenant-lite” loans). Spreads pressed to historic lows mean the price of risk is distorted — the profit-and-loss feedback of Stage 6.3 blunted by credit expansion.

**Watch who is borrowing.** The Cantillon effect in practice: is new credit flowing to governments, large corporations, financial institutions, or households? That is precisely the difference between 2008 and 2020 (Stage 13.4).

A practical reading rule: **after each FOMC statement, do not ask “hike or cut next time?” Ask “which of the six items above will this statement push toward distortion?”** The statement says “hold at zero until maximum employment” — credit keeps expanding, the term premium stays crushed, duration bets keep piling up. The statement says “runoff will proceed predictably” — the first recipients' assets lose their support first. You are not reading a rate calendar; you are reading a weather forecast for the structure of production.

### ⑤ Austrian humility: you can identify distortion, not time the turn — and why this is not investment advice

Everything so far points at one skill: **identifying distortion.** You can see the Fed holding the rate below a natural rate it cannot locate; you can see which durations and sectors credit is flowing into; you can see the term premium crushed, spreads compressed, upstream swelling. That is a real, useful skill most people lack.

But it has a hard boundary, already drawn in Stage 13.1: **pattern prediction contains no timing.** A distortion can last three months or ten years (2009–2019). The turn depends on when the Fed changes its mind (it does not know either), when entrepreneurs collectively wake up (the judgment of Stage 6.1 is unpredictable), when an external shock lands (a pandemic, a war, a bank run started on Twitter). No Austrian theory can derive any of that.

Stage 14.4 addresses the “permabears” by name — the Austrian commentators who have announced an imminent crash every year since 2009. Their problem was not that the analysis was wrong (the distortion was real) but that **they mistook identification for prediction**, and ten years of wrong dates turned a correct analysis into a joke. If this lesson's dictionary and data kit are used to shout “crash next month,” they have been misused.

So this lesson is **not investment advice** — Stage 10.5 gave the full reasoning; here are only the three most pressing points:

- **Identifying distortion is not knowing the direction.** A distortion can resolve through inflation (asset prices do not fall in nominal terms; purchasing power does) or through deflation (asset prices fall); it can keep rising for years before it falls; it can be caught by the next round of expansion. One analysis maps onto entirely different asset paths.
- **Timing is everything.** Someone who “saw through” QE in 2009 and shorted on that basis lost everything over the following decade; someone who saw through M2 +40% in 2021 and went long commodities had a very hard second half of 2022.
- **You are not the only one who read this lesson.** Thousands of market participants are doing the same translation — the “Fed put” is itself the market's pricing of the Fed's reaction function. Part of your insight is already in the price (the reflexivity of Stage 16.5).

What is the lesson for, then? Three things. **Understanding**: you will no longer be lulled by “data dependent” and “roughly neutral”; you know what they conceal. **Risk awareness**: you know that a decade of zero rates means duration bets piling up, that an SVB will surface somewhere sooner or later, that “stable prices” may be the mask of a credit inflation — which keeps you from one class of mistakes in your own decisions, whether founding a company, borrowing, or choosing a career. **Humility**: you know you do not know the timing, and that knowledge is itself an edge — it keeps you out of the things that require knowing the timing.

The whole lesson in one sentence: **an FOMC statement is a self-assessment, written in the language of aggregates, about a price nobody can see; the Austrian translation tells you what it is distorting, not when the distortion ends — and knowing that boundary is the last kind of honesty this course teaches.** The next stage (Stage 14.1) compresses the method used in this lesson and the four cases before it into a five-step procedure you can apply to any policy.
`,

  demo: "fomc-translator",

  analogy: `
Think of an FOMC statement as **a “climate bulletin” issued every six weeks by a weather bureau chief** — except this chief does not merely forecast the weather; his bureau **controls the gates of a dam**, and the gates decide how much water every farm downstream gets.

The bulletin says: “The Committee judges that current water flow is broadly consistent with agricultural needs and will remain data dependent in deciding future releases.” A farmer hears “no change for now.” Someone who has done this lesson hears three things.

First, **“consistent with agricultural needs” is a sentence he cannot know to be true.** How much water each field needs depends on what hundreds of thousands of farmers are planting, their soils, their judgments about next season — knowledge scattered across the fields, while the chief has only last month's total usage. He is not discovering the right flow; he is substituting for a price an irrigation market should have discovered.

Second, **every word in the bulletin describes an aggregate.** “Agricultural needs” is one number. It cannot see that the orchards upstream are planting like mad because water is cheap (long-duration capital goods), nor that the vegetable plots downstream are actually short. By the time the chief says “flow is appropriate,” the orchards have reached the hilltops.

Third, **you can see the orchards are overplanted, but you cannot know when the chief will close the gates.** Tomorrow, or in three years; perhaps only after the hilltop orchards have died (liquidation), or perhaps he reopens the moment they start to wilt (the Fed put). You see the distortion; you cannot see the timing.

A clever farmer does not bet his savings on “drought next year” just because he has seen through the chief — that is the permabear. What he does: he does not plant on hilltops trees that only pay when water is cheap; he does not take a thirty-year loan on the bet that water stays cheap forever; and every time a bulletin comes out, he asks not “how much water next time?” but “which fields will this bulletin keep misleading?”
`,

  misconceptions: [
    "**“The dot plot is the Fed's commitment to a rate path.”** — It is nineteen anonymous individual guesses with a poor record: the December 2021 median projected about 0.9% at end-2022; the outcome was 4.25–4.5%. The Fed itself says it is “not a plan.” Treating it as a commitment mistakes guesses for a calendar.",
    "**“‘Data dependent’ means the Fed is careful and scientific.”** — It means policy forever reacts to aggregates published one to three months late and heavily revised, while policy's own effects lag one to two years. “Data dependent” is the institutional reason the Fed is systematically late, not a virtue.",
    "**“Better models could let the Fed find the neutral rate.”** — The natural rate is not a parameter hidden in the data but the outcome of countless time preferences interacting in a market process, and the central bank's existence alters it. This is the knowledge problem of Stage 7.2, not an estimation issue — Powell's 2018 “cloudy skies” metaphor half-admits it.",
    "**“If you can read an FOMC statement you can predict the market.”** — The Austrian translation tells you what the Fed is distorting, not when or how the distortion ends; and thousands of others are making the same translation, so the “Fed put” is already in prices. Identifying distortion is not timing the turn — this lesson is not investment advice.",
    "**“Fed officials are either stupid or malicious.”** — Their task is structurally impossible: to set a price that should be discovered by a market, and judge it by a few aggregates. The “too loose → too late → too tight → too late” cycle is a product of the task, not of character. The Austrian critique targets the institution, not the people.",
  ],

  quiz: [
    {
      q: "The statement says: “The Committee will hold rates at zero until labor market conditions reach levels consistent with maximum employment.” The Austrian translation is:",
      options: [
        "The Fed is reporting a market-determined rate",
        "The Fed commits to holding the market rate below the natural rate until a few aggregates say it may stop",
        "The Fed has relinquished control of rates",
        "The Fed is forecasting unemployment",
      ],
      answer: 1,
      explain: "The purest pledge to suppress the rate artificially (Stages 3.5, 5.1); “maximum employment” is defined by one number and cannot see in which sectors employment grows.",
    },
    {
      q: "How do Austrians read Powell's 2018 metaphor of “navigating by the stars under cloudy skies”?",
      options: [
        "The Fed needs a better telescope (model)",
        "The “stars” such as r* should be discovered by the market process; a committee estimating them is a category error — the knowledge problem of Stage 7.2",
        "The Fed should meet more often",
        "Monetary policy has no effect at all",
      ],
      answer: 1,
      explain: "The natural rate is the outcome of countless interacting time preferences and exists only in the market process; the central bank's existence itself alters it. Not an estimation problem but a structural epistemological one.",
    },
    {
      q: "What is the main effect of “forward guidance” on the structure of production?",
      options: [
        "It affects only the overnight rate",
        "It uses promises to flatten the long end of the yield curve, crushing the term premium and encouraging duration bets (e.g. SVB buying long MBS in 2021)",
        "It raises the saving rate",
        "It steers credit toward consumer-goods industries",
      ],
      answer: 1,
      explain: "The long end should reflect savers' distant time preference and uncertainty; forward guidance makes it a policy variable, and everyone piles into duration — the SVB of Stage 13.4.",
    },
    {
      q: "Which of the following is NOT among the data an Austrian should watch beyond the FOMC statement?",
      options: [
        "Growth of bank credit and the True Money Supply",
        "The term premium and the shape of the yield curve",
        "Sectoral capital spending and the upstream components of Gross Output",
        "The history of the dot-plot median",
      ],
      answer: 3,
      explain: "Credit quantities, the term structure, sectoral capex and upstream GO are the structural data for judging whether distortion is present, how large and where; the dot plot is nineteen guesses with a poor record.",
    },
    {
      q: "Why does this lesson state explicitly that it is “not investment advice”?",
      options: [
        "Because Fed statements cannot be read",
        "Because identifying distortion is not knowing direction or timing, and thousands are making the same translation, so the insight is partly in prices already",
        "Because Austrians oppose investing",
        "Because the law forbids it",
      ],
      answer: 1,
      explain: "A distortion can last ten years and resolve through inflation or deflation, two opposite paths; those who shorted on this basis in 2009 lost everything. Identification is not prediction — the boundary of Stages 13.1 and 14.4.",
    },
  ],

  further: [
    { label: "Federal Reserve: FOMC statements, minutes and Summary of Economic Projections archive (official source — read the originals)", url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
    { label: "Powell, “Monetary Policy in a Changing Economy” (Jackson Hole, 2018) — “navigating by the stars under cloudy skies”", url: "https://www.federalreserve.gov/newsevents/speech/powell20180824a.htm" },
    { label: "Hayek, “The Use of Knowledge in Society” (AER, 1945) — why a committee cannot know the neutral rate", url: "https://www.econlib.org/library/Essays/hykKnw.html" },
    { label: "Mises Institute: the True Money Supply (TMS) data and explanation — the credit measure to watch beyond the Fed", url: "https://mises.org/library/true-money-supply-and-rothbard-salerno-measure" },
    { label: "Federal Reserve Bank of New York: term-premium estimates (ACM model) — for judging whether the long end is artificially flattened", url: "https://www.newyorkfed.org/research/data_indicators/term-premia-tabs" },
  ],
};
