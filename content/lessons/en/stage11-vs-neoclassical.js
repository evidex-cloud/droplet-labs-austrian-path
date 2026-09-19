export default {
  id: "vs-neoclassical",
  stage: 11,
  order: 3,
  title: "vs Neoclassical & DSGE: The Trouble with Equilibrium Modeling",
  difficulty: "systems",
  prereqs: ["vs-math-models", "garrison-macro"],

  oneLiner:
    "The summit of modern mainstream macroeconomics is the DSGE model — dynamic stochastic general equilibrium: one (or a few) infinitely lived representative agents, rational expectations, random shocks, everything written as solvable equations, parameters calibrated to data, and then the question “what should the central bank do?” It is rigorous, replicable, microfounded, the product of decades of intellectual investment. The Austrian critique is not “bad math.” It is something more precise: **in these models equilibrium is the starting point, whereas in real markets it is a destination never reached; the representative agent erases heterogeneity and the capital structure, and rational expectations erase the entrepreneur and genuine uncertainty — so the models are structurally unable to see something like 2008.** This lesson states the mainstream at full strength, notes where Austrians agree (more than you think), and ends by honestly pricing the Austrian alternative.",

  intuition: `
The mainstream first, at its strongest.

In the 1950s Arrow and Debreu proved something beautiful: under a clear set of assumptions (perfect competition, complete markets, convex preferences and technology) a general equilibrium exists and is Pareto-optimal — nobody can be made better off without making someone else worse off. That is the **First Welfare Theorem**. It turned Adam Smith's “invisible hand” from a metaphor into a theorem, and it produced a clean checklist of when markets might fail: wherever an assumption does not hold.

In the 1970s Robert Lucas replaced the foundations of macroeconomics. His 1976 **Lucas critique** said: the “relationship between consumption and income” or “between inflation and unemployment” estimated from historical data will break down the moment policy changes — because people change their behavior in response to the new policy. So macro models must be built on **microfoundations**: derive the aggregates from individuals' preferences, technology and expectations. And those expectations should be **rational** (Muth, 1961): people do not make the same mistake systematically; they use the model itself to form their forecasts.

Two generations of models grew from this. Kydland and Prescott's **real business cycle (RBC)** model of 1982: the cycle is the optimal response of rational agents to technology shocks, requiring neither money nor policy to explain it. Then the **New Keynesian DSGE** model, which adds price stickiness and a central-bank reaction function (Woodford's *Interest and Prices*, 2003; Smets and Wouters, 2003 and 2007). Nearly every major central bank runs one today.

If you have done Stage 2.4 you expect the Austrians to start swinging. Wait — **Austrians agree with a good deal of this.** Microfoundations? Mises said in 1949 that macro phenomena must be reduced to individual action (the methodological individualism of Stage 2.3). The Lucas critique? It is nearly a corollary of praxeology — people are purposeful and respond to policy, so “there are no constants in the social sciences.” Skepticism of Keynesian aggregates? RBC threw the multiplier out of the model, and Austrians applauded.

The disagreements lie deeper, in three places.

**First: is equilibrium the starting point or the destination?** DSGE assumes the economy is *always in* (stochastic) equilibrium: every period, every market clears, everyone's plans are mutually compatible, and when a shock arrives everyone adjusts optimally and together. Austrians (Hayek, “Economics and Knowledge,” 1937) ask: **why should people's plans be compatible?** The baker plans to sell 100 loaves; the customers plan to buy 80. That kind of mismatch is the normal state of a market; the job of prices and entrepreneurs is to keep correcting it. Equilibrium is where the market *tends* and never *arrives*; make it the starting point and you have assumed away the market's most important work.

**Second: the representative agent.** Most DSGE models contain one “household” and one “firm,” and capital is a single number, K. That means the model has **no** structure of production (Stages 3.2 and 3.4), no “early stages expand while late stages contract,” no group of people borrowing from another group that lends. Yet the Austrian business-cycle theory **lives entirely in heterogeneity** — credit expansion causes not “too much investment in total” but “investment in the wrong stages.” A model with only K is structurally blind to that error.

**Third: rational expectations and uncertainty.** Rational expectations assume everyone knows the true model of the economy and is ignorant only of the next random draw. That eliminates two things: **genuine uncertainty** (Knight, Mises: the future is not a sample from a known distribution) and **the entrepreneur** (Stage 6.1: the entrepreneur's function is to see opportunities others miss — if everyone shares the same correct model there is nothing left to discover). In DSGE the cycle is driven by exogenous shocks (“technology falling from the sky,” “a sudden change in preferences”); in Austrian theory it is **endogenous**, driven by systematic errors that policy induces.

Then came 2008. Most mainstream DSGE models had no financial sector: no banks, no leverage, no default. They were structurally incapable of producing a financial crisis. Afterward, a number of heavyweight mainstream figures said so publicly; this lesson quotes them, carefully.

One last thing, said honestly: **the Austrian alternative has a price.** It is less formal, harder to publish, and harder to turn into “set the rate at X.” The lesson does that arithmetic in the open.

**In this lesson we break it into six pieces:**

- **① The mainstream at full strength: from Arrow–Debreu to DSGE**
- **② Where Austrians agree: microfoundations, the Lucas critique, skepticism of aggregates**
- **③ Disagreement one: equilibrium as end-state or as process**
- **④ Disagreement two: the representative agent erases heterogeneity and the capital structure**
- **⑤ Disagreement three: no genuine uncertainty, no entrepreneur**
- **⑥ After 2008: calibration vs understanding, and the price of the Austrian alternative**
`,

  mechanics: `
### ① The mainstream at full strength: from Arrow–Debreu to DSGE

Draw the lineage of modern macro in four steps:

- **General equilibrium (Walras 1874 → Arrow–Debreu 1954).** Prices and quantities in all markets are determined simultaneously; under standard assumptions an equilibrium exists and is Pareto-optimal (First Welfare Theorem), and any Pareto-optimal allocation can be reached through some initial endowment plus competitive markets (Second Welfare Theorem). This is the mainstream benchmark for where markets are good and where they fail.
- **The neoclassical synthesis (Samuelson, 1940s–60s).** General equilibrium for micro, Keynes's IS–LM for macro, stitched together with “sticky prices.” The stagflation of the 1970s tore the seam.
- **The rational-expectations revolution (Muth 1961, Lucas 1972–76, Sargent).** Expectations must be model-consistent; policy evaluation must start from “deep parameters” (preferences, technology) because behavioral equations shift with policy. **The Lucas critique** is this step's charter.
- **DSGE (Kydland–Prescott 1982 → New Keynesian, 2000s).** Dynamic (intertemporal optimization), stochastic (exogenous shocks), general equilibrium (all markets clear at once). A typical three-equation New Keynesian model:

$$
IS curve: the output gap depends on the expected future gap and the real interest rate
Phillips curve: inflation depends on expected inflation and the output gap (Calvo pricing)
Taylor rule: the policy rate responds to inflation and the output gap
$$

Parameters are not set by whim: they are **calibrated** to data (matching the model's moments to historical moments) or estimated by Bayesian methods. The model runs counterfactuals (“what if the central bank had been more aggressive?”), performs welfare evaluations, and can be replicated. **This is what the mainstream offers and Austrians do not: a machine with a handle you can turn and a dial you can read.** In central banks, at the IMF, in the journals, this is the common language. To criticize it you must first admit why it won: it pushed the scientific demand “state your assumptions” to its limit.

### ② Where Austrians agree: microfoundations, the Lucas critique, skepticism of aggregates

The overlap between Austrians and the mainstream is far larger than the “methodology war” of Stage 2.4 suggests:

- **Microfoundations.** “Only individuals act” is the banner of Mises and Hayek (Stage 2.3). Lucas's demand that macro models start from individual optimization points in the same direction — the disagreement is only over *what the individual is built to be* (section ④).
- **The Lucas critique.** “Behavioral relations shift with policy” is practically a theorem of praxeology: people have purposes and re-plan under new rules. Mises's 1949 statement that “there are no constants in economics” says the same thing, only more radically — Lucas treats **deep parameters** as constants; Mises doubted even those (preferences change, and change *because of* policy).
- **Skepticism of naive aggregates.** RBC expelled the Keynesian multiplier and “demand management” from the model; Lucas's 1976 paper was itself a declaration of war on Keynesian econometric models. Austrians are allies here.
- **Distrust of fine-tuning.** One RBC conclusion: if the cycle is an optimal response to real shocks, stabilization policy is useless and possibly harmful. The Austrian attitude is “right direction, wrong reason” — the cycle should indeed not be “smoothed,” not because it is optimal but because it is **the correction of prior errors** (Stage 5.3).

So when Austrians criticize DSGE, the target is not “using mathematics” or “having microfoundations” but three specific modeling choices — each of which assumes away what Austrians regard as most important.

### ③ Disagreement one: equilibrium as end-state or as process

Hayek's “Economics and Knowledge” (1937) gives the most precise Austrian statement of equilibrium: **equilibrium means that different people's plans are mutually compatible** — the quantity the baker plans to sell equals what the customers plan to buy; the workers the entrepreneur plans to hire are the ones who plan to work for him. Such compatibility is not automatic; it requires **every person to hold correct expectations about everyone else's plans.** And that knowledge is dispersed across countless minds (Stage 7.2). So the real economic question is: **how does dispersed knowledge get coordinated well enough for plans to be roughly compatible?** The answer is prices and entrepreneurs (Stages 6.1 and 6.2) — whose job is to keep discovering and correcting incompatibilities.

DSGE **assumes the question away**: the model's definition already contains “all markets clear every period, all expectations are model-consistent.” Equilibrium is not the thing to be explained; it is the premise of the solution. When a shock arrives, everyone jumps to the new equilibrium at once and correctly. In Mises's terms, DSGE takes the **evenly rotating economy** (Stage 2.4) — the thought-tool Austrians use only as a foil — as a description of reality.

A numerical example shows the difference. Suppose the central bank pushes the rate from 5% to 2%:
- **DSGE:** every household and firm immediately recognizes a monetary shock, rationally computes its persistence, smoothly adjusts consumption and investment, and the output gap returns to trend along a smooth curve. Nobody makes a systematic error.
- **The Austrian process view:** some entrepreneurs read 2% as “society is saving more” (they cannot tell from the number whether the rate fell because saving rose or because the central bank printed — this is exactly what a polluted price signal means, Stage 5.1) and launch ten-year projects; others stay skeptical; workers are drawn into capital-goods industries by higher wages; two years later consumers' real time preference reveals itself, the ten-year projects fail together, and workers and machines must be reallocated. **The time, friction and losses of that process are the core of the model, not noise.**

There is a more technical problem the mainstream itself knows about: the **Sonnenschein–Mantel–Debreu results** (1970s) show that even if every individual is a textbook utility maximizer, the aggregate market demand curve can take any shape — general equilibrium may be multiple or unstable. In other words, **micro optimization does not deliver macro uniqueness or stability.** DSGE's way around this is the subject of the next section: put only one person in the model.

### ④ Disagreement two: the representative agent erases heterogeneity and the capital structure

Most DSGE models have one representative household and one representative firm. This is not laziness; it is mathematical necessity: aggregating many heterogeneous agents runs into the Sonnenschein–Mantel–Debreu trouble. Alan Kirman's classic 1992 paper, “Whom or What Does the Representative Individual Represent?”, showed that the representative agent's behavior can differ from that of *every single one* of the people he supposedly represents; he is not an approximation but a fiction.

For Austrians this is not a technical detail. It **assumes away the entire content of business-cycle theory**:

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="160" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--blue)">DSGE: one agent, one K</text><rect x="90" y="50" width="140" height="70" rx="8" fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="2"/><text x="160" y="80" text-anchor="middle" font-size="12" fill="var(--ink)">Representative household</text><text x="160" y="98" text-anchor="middle" font-size="10.5" fill="var(--muted)">saver and borrower at once</text><rect x="90" y="150" width="140" height="70" rx="8" fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="2"/><text x="160" y="180" text-anchor="middle" font-size="12" fill="var(--ink)">Representative firm</text><text x="160" y="198" text-anchor="middle" font-size="10.5" fill="var(--muted)">capital = one number, K</text><line x1="160" y1="120" x2="160" y2="150" stroke="var(--blue)" stroke-width="2"/><text x="160" y="250" text-anchor="middle" font-size="11" fill="var(--blue)">shock → all adjust optimally at once → smooth return to trend</text><text x="160" y="268" text-anchor="middle" font-size="10.5" fill="var(--muted)">nobody borrows wrongly, no stage overbuilt, no liquidation</text><text x="470" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--orange-ink)">Austrian: heterogeneous agents, heterogeneous capital</text><g fill="var(--orange)"><rect x="340" y="60" width="26" height="14" rx="3" opacity=".5"/><rect x="372" y="60" width="26" height="14" rx="3" opacity=".9"/><rect x="404" y="60" width="26" height="14" rx="3" opacity=".7"/><rect x="436" y="60" width="26" height="14" rx="3" opacity=".4"/><rect x="468" y="60" width="26" height="14" rx="3" opacity=".8"/><rect x="500" y="60" width="26" height="14" rx="3" opacity=".6"/><rect x="532" y="60" width="26" height="14" rx="3" opacity=".9"/><rect x="564" y="60" width="26" height="14" rx="3" opacity=".5"/></g><text x="470" y="52" text-anchor="middle" font-size="10.5" fill="var(--muted)">entrepreneurs: each with their own expectations (shade = optimism)</text><polygon points="340,220 590,220 590,120" fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="2"/><text x="352" y="212" font-size="10" fill="var(--muted)">mines · machine tools · R&amp;D</text><text x="530" y="212" font-size="10" fill="var(--muted)">retail</text><rect x="350" y="160" width="60" height="40" fill="var(--red-soft)" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/><text x="380" y="150" text-anchor="middle" font-size="10" fill="var(--red)">malinvestment clusters here</text><text x="470" y="250" text-anchor="middle" font-size="11" fill="var(--orange-ink)">shock → some misjudge → early stages over-expand → a cluster of failures → re-coordination</text><text x="470" y="268" text-anchor="middle" font-size="10.5" fill="var(--muted)">time, friction and losses are the core, not noise</text></svg><figcaption>The same interest-rate shock: the left model can only answer “by how much did total investment change?”; the right model answers “who invested, in which stage, and which projects will fail.” The whole content of Austrian cycle theory sits inside that red box on the right — and the model on the left cannot draw the box.</figcaption></figure>

- **No borrowers and lenders**, no transmission of credit expansion: the representative household is both saver and borrower, and it cannot be “fooled by the interest rate,” because the money fooling it is its own.
- **Capital as a single K**, no structure of production (Stage 3.2): the model can say “investment rose or fell,” never “investment went into stages too far from consumption.” Lachmann's entire insight (Stage 3.4) — capital goods are heterogeneous, complementary, and only partly convertible — disappears inside K. The Cambridge capital controversy of the 1950s–60s once forced the mainstream to concede that aggregating capital into K is logically problematic (Samuelson admitted it in print in 1966), but that concession was forgotten in the DSGE era.
- **No heterogeneous expectations**, so nobody is fooled and nobody stays sober: Kirzner's entrepreneur (Stage 6.1) earns profit by seeing what others miss; if everyone shares the same correct model there is nothing to discover.

To be fair, the mainstream is moving. The **HANK models** (Heterogeneous-Agent New Keynesian) that emerged in the 2010s add households with different incomes and wealth, and find that monetary transmission looks very different from the representative-agent case. Austrians should welcome this — the mainstream is walking toward ground Austrians occupied decades ago — while noting that HANK adds heterogeneity of *households*; heterogeneity of *capital* is still absent.

### ⑤ Disagreement three: no genuine uncertainty, no entrepreneur

The precise meaning of rational expectations: **agents know the true structure of the economy (the model itself) and are ignorant only of the realization of the next random shock.** That is “risk” (Knight, 1921; Mises's “class probability”): the distribution is known, only the draw is not. It excludes “uncertainty” (Knight; Mises's “case probability”): the distribution itself is unknown, or the very notion of a distribution does not apply — the technology of twenty years hence, the next war, a business model that has never existed. Stage 11.1 noted that Keynes in 1937 stood with the Austrians on this; DSGE is **the common opponent of Keynes and the Austrians** on this point.

The consequences are twofold:

- **The entrepreneur vanishes.** In DSGE the “firm” is an optimization routine that applies known technology to known demand. It discovers no new markets, misjudges nothing, never goes bankrupt (most models have no default). Austrians hold that entrepreneurial judgment — staking real money without a known distribution — is the engine of the market process (Stages 6.1 and 6.3).
- **The cycle is exogenized.** Since agents make no systematic errors, the cycle can only come from outside: technology shocks, preference shocks, “markup shocks,” “risk-premium shocks.” Critics, including insiders, have noted that Smets–Wouters-type models need seven or eight mutually unrelated exogenous shocks to fit the data — each a name for something the model cannot explain. The Austrian cycle is **endogenous**: policy lowers the rate → the price signal is polluted → some entrepreneurs err systematically → a cluster of failures. **It has a specific culprit and a specific causal chain**, not “a negative technology shock fell from the sky.”

A common mainstream retort: “if Austrian cycle theory were true, rational entrepreneurs would see through the central bank and stop being fooled” (Stage 5.5 covered this critique). The Austrian reply has two layers. First, an entrepreneur cannot tell from a single interest-rate number whether “saving rose” or “the central bank printed”; all he can see is the price. Second, even if he knows it is the central bank, he does not know whether *others* will be fooled or how long the boom will last — those who exit a boom early also go broke (think of the funds that shorted tech stocks in 1999). That is the heart of reflexivity in Stage 16.5: expectations are expectations about other people's expectations, not about “the true model.”

### ⑥ After 2008: calibration vs understanding, and the price of the Austrian alternative

Before 2008 most mainstream DSGE models had no financial sector: no banks, no leverage, no default, no asset-price feedback. They were structurally incapable of generating a financial crisis detonated by mortgage securities — not a wrong forecast, but **no place in the model for such a thing to happen.** Afterward, several heavyweight mainstream figures said so publicly; quote them accurately:

- Willem Buiter (former member of the Bank of England's Monetary Policy Committee), 2009: “state of the art” academic monetary economics had, over the previous thirty years, led macroeconomics into a dead end, and the models ruled out the possibility of a financial crisis.
- Paul Krugman, 2009, *New York Times Magazine*, “How Did Economists Get It So Wrong?”: economists “mistook beauty, clad in impressive-looking mathematics, for truth.”
- Robert Solow, testifying to the U.S. Congress in 2010: he did not believe DSGE models passed the “smell test”; a model in which one representative agent is simultaneously consumer, worker and capital-owner cannot study coordination failure.
- ECB President Jean-Claude Trichet, 2010: in the crisis “we felt abandoned by conventional tools”; the models “broke down” when the crisis arrived.
- Paul Romer (Nobel 2018), 2016, “The Trouble with Macroeconomics”: criticized the RBC/DSGE tradition's reliance on “unidentifiable” shock parameters and compared it to pseudoscience.
- Olivier Blanchard (former IMF chief economist), 2016, “Do DSGE Models Have a Future?”: the models “have serious flaws” but “can be improved” — the majority mainstream attitude.

The mainstream response has been to add things: financial frictions (the Bernanke–Gertler–Gilchrist “financial accelerator”), a banking sector, heterogeneous households (HANK), the zero lower bound. The Austrian assessment: **every addition is an admission that what had been assumed away was the crux**; but as long as equilibrium remains the starting point, capital remains K, and expectations remain rational, the model still cannot see “a cluster of malinvestment” — only “a bigger negative shock.” That is what Hayek's 1974 Nobel lecture, “The Pretence of Knowledge,” was about: in complex phenomena we can make **pattern predictions** (“after a credit expansion there will be a cluster of failures”), not **point predictions** (“unemployment will reach 7.2% in the third quarter”); pretending to do the latter is the mark of pseudoscience.

Now the Austrian bill, honestly totaled:

- **Less formal.** Garrison's three diagrams (Stage 10.1) are the closest thing Austrian macro has to a “model,” but they cannot be calibrated, simulated, or made to yield numbers as DSGE can. “Process” is harder to write as equations than “equilibrium” — a real intellectual difficulty, not mainstream prejudice.
- **Harder to publish.** The language of the top journals is model plus data; a paper without an estimable equation struggles to pass review. Stage 13.1 shows how Austrians do empirical work; Stage 14.5 shows where Austrian scholars actually publish.
- **No policy dial.** The central bank asks “what rate should we set?”; DSGE gives a number; Austrians say “you shouldn't be setting it.” Intellectually consistent, politically self-marginalizing.
- **Internal disagreement.** Some Austrians (especially those close to complexity science) hold that **agent-based models** (the Santa Fe Institute line) can formalize the Austrian process view — heterogeneous agents, local information, out-of-equilibrium dynamics, emergence — while more orthodox Austrians hold that any simulation loses judgment and subjectivity. The argument is unresolved.

It is worth noting that the mainstream's internal critics (Romer, Kirman, Buiter) overlap heavily with the Austrian critique in **content**, though they rarely cite Austrians. That itself says something: **the critique is right; Austrians merely said it first.** Stage 18.1 pushes this argument to its limit — when someone claims “AI can solve general equilibrium in real time from vast data,” the question you must judge is exactly this: is that equilibrium the market's **destination** (computable) or the market's **process** (only traversable)?

One sentence to close: **DSGE is a machine that takes “equilibrium” as the starting point, “people” as one person, and “the future” as a known distribution; it is rigorous, useful, and it won the academy and the central banks — but it is structurally blind to what Austrians think matters most in a cycle: how dispersed knowledge is coordinated, how credit expansion systematically misleads it, and how a cluster of failures re-coordinates it. The Austrian alternative sees those things, at the price of having no handle to turn and no dial to read.**
`,

  demo: "dsge-vs-process",

  analogy: `
Two analysts are forecasting a symphony orchestra's performance.

**The DSGE analyst** treats the orchestra as **one player** holding the correct full score, who knows what every bar should sound like; now and then a gust of wind scatters the pages (an exogenous shock), he flips back optimally, and the music glides back to the melody. The analyst can tell you exactly how many beats the tune deviates per gust and how many seconds it takes to recover. His model can be calibrated and replicated, and the conductor (the central bank) loves it.

**The Austrian analyst** sees **eighty players**, each able to read only their own part and watch their neighbors, coordinating through the conductor's gestures and their own ears. The performance succeeds not because “the orchestra is in equilibrium” but because everyone keeps adjusting to everyone else — and that adjustment *is* the music. Now the conductor (the central bank) makes a wrong gesture, beating an adagio as an allegro: some follow, some do not; the strings rush ahead while the brass stays put; the confusion lasts several bars, and then the players find each other again by ear. **That confusion is not “noise.” It is the most important part of the performance: how dispersed players re-find one another.**

The DSGE analyst's model has no room for that passage — with a single player, nobody can be out of step with himself. So when the whole orchestra fell apart in 2008, his model said: “that must have been an unusually large gust.”

The Austrian analyst can explain where the confusion came from and roughly how it will resolve, but he cannot say “bar 37, beat 3, will drift by 0.4 seconds” — and that number is exactly what the conductor wants. Those are the two schools' respective prices.
`,

  misconceptions: [
    "**“Austrians reject mathematics and microfoundations.”** — Austrians reject three specific modeling choices: equilibrium as the starting point, a single representative agent, and rational expectations. Microfoundations are Mises's own banner (methodological individualism); the Lucas critique is nearly a corollary of praxeology. Some Austrians even propose agent-based models to formalize the process view.",
    "**“DSGE now includes financial frictions and heterogeneous households, so the Austrian critique is out of date.”** — Every addition is an admission that what was previously assumed away was the crux, which supports the critique. But as long as equilibrium is the premise, capital is a single K, and expectations are model-consistent, the model still sees “a bigger negative shock,” not “a cluster of malinvestment.” HANK adds household heterogeneity; capital heterogeneity is still absent.",
    "**“Rational expectations mean people don't err, so the Austrian ‘entrepreneur fooled by the rate’ assumes stupidity.”** — Rational expectations assume everyone knows the true model. The Austrian entrepreneur is not stupid; he simply cannot tell from one interest-rate number whether saving rose or the central bank printed, nor whether others will be fooled or how long the boom will last — leaving a boom early bankrupts you too. Expectations are about other people's expectations, not about “the true model.”",
    "**“2008 proved that all economics failed.”** — More precisely: mainstream DSGE models had no structural place for a financial crisis (no banks, leverage or default), which Buiter, Solow, Romer, Blanchard and others admitted themselves. Some Austrians did warn of the housing bubble in 2004–07 on credit-expansion grounds — but Austrian pattern prediction gives no dates, and Stage 14.4 addresses the “permabear” problem.",
    "**“The Austrian alternative is better, so the mainstream will come around eventually.”** — The Austrian alternative is less formal, harder to publish, and offers no policy dial; those are real costs, not mainstream prejudice. The mainstream's own critics (Romer, Kirman) overlap heavily with Austrians in content yet rarely cite them — which shows both that the critique is right and how marginal Austrians remain in academic competition.",
  ],

  quiz: [
    {
      q: "What is the core claim of the Lucas critique (1976), and what is the Austrian attitude toward it?",
      options: [
        "Macro models need no microfoundations; Austrians disagree",
        "Behavioral relations estimated from history break down when policy changes, so macro must start from individual preferences and technology; Austrians largely agree, and hold that Mises's “no constants in economics” goes further",
        "Policy is always ineffective; Austrians agree",
        "Expectations are irrational; Austrians disagree",
      ],
      answer: 1,
      explain: "The Lucas critique is nearly a corollary of praxeology: purposeful people re-plan under new rules. The only disagreement is what the “individual” is built to be — Lucas keeps deep parameters constant; Mises doubted even those.",
    },
    {
      q: "How does Hayek's “Economics and Knowledge” (1937) define equilibrium, and what does that imply for DSGE?",
      options: [
        "All prices equal costs; DSGE satisfies this",
        "Aggregate supply equals aggregate demand; DSGE fails this",
        "Nobody earns profit; irrelevant to DSGE",
        "Different people's plans are mutually compatible, which requires dispersed knowledge to be coordinated; DSGE assumes that coordination as a premise, whereas Austrians hold it is exactly what needs explaining",
      ],
      answer: 3,
      explain: "Equilibrium is where the market **tends** and never **arrives**; taking it as the starting point assumes away the most important work of prices and entrepreneurs — discovering and correcting incompatible plans.",
    },
    {
      q: "Why is “representative agent + capital as a single K” structurally blind to the Austrian business cycle?",
      options: [
        "Because with no borrowers and lenders there is no transmission of credit expansion; with no structure of production there is no way to say “investment went to the wrong stage”; with no heterogeneous expectations nobody is fooled and nobody stays sober",
        "Because the representative agent is too clever",
        "Because K is too large",
        "Because DSGE forbids interest-rate changes",
      ],
      answer: 0,
      explain: "The whole content of Austrian cycle theory lives in heterogeneity: who borrowed, in which stage, which projects fail. A representative household that is both saver and borrower cannot be “fooled by its own money.” Kirman (1992) showed the representative agent is a fiction, not an approximation.",
    },
    {
      q: "What do rational expectations exclude, and what does that have to do with the entrepreneur?",
      options: [
        "They exclude risk; hence no entrepreneur",
        "They exclude sticky prices; hence entrepreneurs earn no profit",
        "They exclude genuine uncertainty (the distribution itself unknown); if everyone shares the same correct model there are no unseen opportunities to discover, and the Kirznerian entrepreneur has nothing to do",
        "They exclude technology shocks; hence entrepreneurs can only imitate",
      ],
      answer: 2,
      explain: "Rational expectations = knowing the true model, ignorant only of the next draw (Knight's “risk”). The “uncertainty” that Keynes (1937) and Austrians both stress is excluded; entrepreneurial judgment — staking money without a known distribution — vanishes, and the cycle must be exogenized.",
    },
    {
      q: "Which of the following honestly describes the price of the Austrian alternative?",
      options: [
        "It has no price; the mainstream is merely biased",
        "It is less formal, harder to publish, and cannot say “set the rate at X”; Austrians also disagree among themselves about whether agent-based models can formalize the process view",
        "It makes better point predictions than DSGE",
        "It is just DSGE plus financial frictions",
      ],
      answer: 1,
      explain: "Hayek's “pattern prediction vs point prediction” is both the Austrian position and its cost: one can say “after a credit expansion there will be a cluster of failures,” not “unemployment will be 7.2% in Q3.” Facing that bill honestly is a requirement of this course.",
    },
  ],

  further: [
    { label: "Hayek, “Economics and Knowledge” (Economica 1937) — equilibrium as plan-compatibility and the coordination of knowledge (full text)", url: "https://mises.org/library/economics-and-knowledge" },
    { label: "Hayek, “The Pretence of Knowledge” (Nobel lecture, 1974) — pattern prediction vs point prediction", url: "https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/lecture/" },
    { label: "Econlib Encyclopedia: Robert E. Lucas Jr. — a short introduction to the Lucas critique and rational expectations", url: "https://www.econlib.org/library/Enc/bios/Lucas.html" },
    { label: "Kirman, “Whom or What Does the Representative Individual Represent?” (JEP 1992) — the classic critique of the representative agent", url: "https://www.aeaweb.org/articles?id=10.1257/jep.6.2.117" },
    { label: "Romer, “The Trouble with Macroeconomics” (2016) — an insider's critique of RBC/DSGE", url: "https://paulromer.net/the-trouble-with-macro/" },
    { label: "Blanchard, “Do DSGE Models Have a Future?” (PIIE 2016) — the mainstream majority's self-assessment", url: "https://www.piie.com/publications/policy-briefs/do-dsge-models-have-future" },
  ],
};
