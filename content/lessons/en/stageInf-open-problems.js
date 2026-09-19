export default {
  id: "open-problems",
  stage: "∞",
  order: 1,
  title: "Open Problems & Frontiers of the Austrian School",
  difficulty: "infinity",
  prereqs: ["internal-debates", "common-mistakes"],

  oneLiner:
    "After 95 lessons you may picture the Austrian School as a finished house. It is not — it is a building site. Almost everything good written in this tradition since Mises's 1949 *Human Action* has been written at the edges: how to put a number on capital theory, how the cycle theory copes with shadow banking, what the regression theorem says about Bitcoin, where exactly the knowledge problem draws its line against AI. **This lesson lays out ten genuinely unanswered questions and says three things about each: what the question is, who is working on it, and what would count as progress.** It is not a review. It is a job posting.",

  intuition: `
The sign that a school of thought is alive is not how devout its followers are. It is how long and how specific its **list of open problems** is. Physics has dark matter; mathematics has the Riemann hypothesis. A school whose only remaining activity is “re-read the founders” is already a museum.

The Austrian School is in a delicate spot here. On one side, its core propositions — value is subjective, people act purposefully, prices carry knowledge, time and uncertainty cannot be assumed away (the four through-lines of Stage 0.4) — were polished by Menger, Böhm-Bawerk, Mises and Hayek between 1871 and 1949 to a degree that has tempted many later Austrians to conclude that everything worth saying has been said and the only job left is to say it to more people. On the other side, the world did not stop: the pure-fiat system after 1971, the shadow banks of 2008, Bitcoin in 2009, large language models in 2022. Each one bangs on the boundary of the theory and asks: how far can you actually explain?

Stage 14.4 already made the confession: thin empirical work, a permabear reflex, a streak of dogmatism. What this lesson does is **turn that self-criticism into a positive research agenda.** The flip side of a weakness is an opening — a thin place is exactly where a newcomer can add something.

First, what “open” means here. Not “Austrians are still arguing among themselves” (that was Stage 14.3), and not “the mainstream does not accept it” (that was Stage 11). Open means: **with the Austrian tools we have, this question does not yet have an answer that Austrians themselves find satisfying.** Three examples to feel the texture:

- Lachmann said capital is heterogeneous (Stage 3.4), so a “capital stock” total is meaningless. Fine — then how does an entrepreneur know whether his own structure of production just got longer or shorter? He needs a number. For a century the school did not give him one.
- The Mises–Hayek cycle theory (Stage 5.1) says a central bank pushing the rate below the natural rate induces malinvestment. From 2010 to 2019 the Federal Reserve held rates near zero for a decade and consumer prices barely moved. Austrians have explanations (asset prices, global dollar funding, interest on reserves), but they were assembled after the fact and none has been folded into a standard version of ABCT.
- Hayek said markets run on “knowledge of the particular circumstances of time and place” that no planner can gather (Stage 7.2). A model today has read essentially everything humans have written. How much of that knowledge did it get? Where, to the meter, is the “tacit knowledge” line?

None of these is a mainstream economist's problem. The mainstream does not think heterogeneous capital is a problem, does not find a decade of zero rates puzzling, and does not much care about tacit knowledge. **These are the Austrians' own problems: only Austrians ask them, and only Austrians can answer them.** That is the point of this lesson. The school's next fifty years depend on whether someone claims them.

One warning. For every problem below I write out “what would count as progress.” That is deliberate. There is a habit in Austrian circles of counting “an article showing the mainstream is wrong” as a contribution. It is not. **Progress is when Austrian theory can answer a question it could not answer yesterday, or be applied to a setting it could not reach yesterday.** Set the bar high, and the opportunities become real.

**In this lesson we break it into six pieces:**

- **① Formalization: can process theory be modeled? Complexity economics and “big players”**
- **② Capital and finance: duration, EVA and shadow banking — giving capital theory a number**
- **③ Empirical work and money: Austrian evidence at scale, and “what is money now?”**
- **④ AI and the knowledge problem: where, to the meter, is the computable/tacit boundary?**
- **⑤ Institutions, development and entrepreneurs: mainline economics, development, and the business school**
- **⑥ The philosophy of praxeology after Mises — and what counts as progress**
`,

  mechanics: `
### ① Formalization: can process theory be modeled? Complexity economics and “big players”

**The question.** Stage 2.4 explained why Austrians reject equilibrium modeling: a real market is a process in which knowledge is incomplete, plans conflict, and time does not run backward. But rejecting equilibrium models is not the same as rejecting all models. So: **is there a mathematical or computational tool that captures the “process” itself, without flattening it into an equilibrium snapshot?**

**State of play.** The closest candidates are **agent-based computational economics** and the **complexity economics** of the Santa Fe Institute. W. Brian Arthur's *Increasing Returns and Path Dependence in the Economy* (1994) and *Complexity and the Economy* (2015) describe something that sounds like Hayek: many heterogeneous agents acting on local information, learning and imitating, with macro patterns “emerging” from interaction and never settling. Arthur acknowledges Hayek's influence. On the Austrian side the main bridge is Roger Koppl. With Leland Yeager he proposed the theory of **“Big Players”** in 1996: when an actor enters a market that is **immune to market discipline yet powerful enough to change outcomes** — a central bank, a treasury — everyone else's expectations shift from “read the fundamentals” to “guess what the Big Player will do,” and the market herds. Koppl's 2002 book *Big Players and the Economic Theory of Expectations* worked it out; his later collaborations with Stuart Kauffman and others connect the Austrian notion of unforeseeable novelty to the complexity idea of the “adjacent possible.”

**The hard part.** An agent in an agent-based model is a program; its “rules of action” were written by the author. Kirzner's alertness (Stage 6.1) is precisely the noticing of something outside the rules. How do you make a program discover an opportunity the programmer did not think of? This is not a technical difficulty but a conceptual one. **Every model that writes the entrepreneur as an algorithm abolishes the entrepreneur at the moment of writing.**

**What would count as progress.** Not “another Austrian-flavored simulation,” but: (1) a model that reproduces the key ABCT sequence — credit expansion, upstream prices rising first, resources tightening, upstream falling first — with the interest-rate signal generated endogenously rather than toggled by the author; (2) a measurable index of the “Big Player” effect that can be applied to post-2008 central-bank behavior; (3) hardest of all, a formal representation of novelty — the “adjacent possible” work of Koppl and co-authors is a starting point. The entry cost on this line is programming and dynamical systems; the payoff is moving Austrians from “critics of models” to “owners of a model.”

### ② Capital and finance: duration, EVA and shadow banking — giving capital theory a number

**Question (b).** Böhm-Bawerk's “average period of production” (Stage 3.2) was shot full of holes by Frank Knight in the 1930s and by the Cambridge capital controversy afterward: if capital is heterogeneous and cannot be summed, how do you measure “roundaboutness” at all? Lachmann's answer was, in effect, don't (Stage 3.4). Yet entrepreneurs and investors do it every day — they must know how “long” a project is.

**State of play.** Over the past decade Peter Lewin and Nicolás Cachanosky did something clean: **they replaced Böhm-Bawerk's average period with the finance concept of duration.** Macaulay duration is the present-value-weighted average time to a project's cash flows; the longer the duration, the more sensitive the present value is to the interest rate. That is exactly what ABCT needs: push the rate down and long-duration projects gain the most present value, so capital flows toward them — malinvestment expressed in the language of finance, with no need for a physical “average period.” Their 2014 paper in the *Review of Political Economy* was titled, pointedly, “Roundaboutness Is Not a Mysterious Concept”; *Austrian Capital Theory: A Modern Survey of the Essentials* (Cambridge Elements, 2019) systematized it; *Capital and Finance* (2020) supplied the history. They also use **EVA** (economic value added: after-tax operating profit minus the cost of capital times capital employed) to express Mises's economic calculation (Stage 7.1): whether a firm is creating value or consuming capital, EVA gives the Austrian answer.

**Question (d).** Standard ABCT is a story about banks lending and firms borrowing to build plant. The credit expansion of 2008 ran largely through **shadow banking** — repo, money-market funds, securitization. Much of the “credit” of the 2010s was **global dollar funding** (offshore dollars, the Eurodollar market) and the **asset-price channel** (Stage 10.3): low rates push up equities, housing and private valuations first, then transmit through wealth effects and collateral values. Most awkward of all is the **“missing inflation”** of 2010–2019. Austrians broadly predicted that QE would raise consumer prices (Stage 14.4); what happened was asset-price inflation without goods-price inflation. Cachanosky and Andrew Salter's “The View from Vienna” (*Review of Austrian Economics*, 2017) surveys the extensions, but honestly, **they are patches, not a new version.**

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Ten frontier problems: difficulty × payoff (illustrative)</text><line x1="70" y1="250" x2="600" y2="250" stroke="var(--line)" stroke-width="1.5"/><line x1="70" y1="250" x2="70" y2="40" stroke="var(--line)" stroke-width="1.5"/><text x="335" y="280" text-anchor="middle" font-size="11" fill="var(--muted)">Difficulty (tools required: math / data / code / philosophy) →</text><text x="22" y="145" text-anchor="middle" font-size="11" fill="var(--muted)" transform="rotate(-90 22 145)">Payoff for the school →</text><rect x="72" y="42" width="264" height="104" fill="var(--green-soft)" opacity=".5"/><text x="80" y="58" font-size="10" fill="var(--green)" font-weight="600">Low entry, high payoff: start here</text><rect x="336" y="42" width="262" height="104" fill="var(--orange-soft)" opacity=".5"/><text x="344" y="58" font-size="10" fill="var(--orange-ink)" font-weight="600">High entry, high payoff: cross-disciplinary</text><g><circle cx="470" cy="95" r="9" fill="var(--blue)"/><text x="470" y="80" text-anchor="middle" font-size="10" fill="var(--ink)">a Formalization</text></g><g><circle cx="380" cy="75" r="9" fill="var(--orange)"/><text x="380" y="60" text-anchor="middle" font-size="10" fill="var(--ink)">b Capital measure</text></g><g><circle cx="250" cy="70" r="9" fill="var(--orange)"/><text x="250" y="55" text-anchor="middle" font-size="10" fill="var(--ink)">c Empirics</text></g><g><circle cx="410" cy="120" r="9" fill="var(--orange)"/><text x="410" y="140" text-anchor="middle" font-size="10" fill="var(--ink)">d Shadow banking</text></g><g><circle cx="200" cy="105" r="9" fill="var(--green)"/><text x="200" y="125" text-anchor="middle" font-size="10" fill="var(--ink)">e Digital money</text></g><g><circle cx="520" cy="65" r="9" fill="var(--blue)"/><text x="520" y="50" text-anchor="middle" font-size="10" fill="var(--ink)">f AI boundary</text></g><g><circle cx="300" cy="135" r="9" fill="var(--green)"/><text x="300" y="155" text-anchor="middle" font-size="10" fill="var(--ink)">g Development</text></g><g><circle cx="160" cy="160" r="9" fill="var(--green)"/><text x="160" y="180" text-anchor="middle" font-size="10" fill="var(--ink)">h Institutions</text></g><g><circle cx="230" cy="190" r="9" fill="var(--green)"/><text x="230" y="210" text-anchor="middle" font-size="10" fill="var(--ink)">i Management</text></g><g><circle cx="540" cy="200" r="9" fill="var(--red)"/><text x="540" y="220" text-anchor="middle" font-size="10" fill="var(--ink)">j Praxeology</text></g><text x="320" y="296" text-anchor="middle" font-size="10" fill="var(--muted)">Positions are the author's judgment, not measurements; the demo lets you move them.</text></svg><figcaption>The ten frontiers laid out roughly by “what tools it takes” and “how much it would matter if done.” The top-right three (formalization, capital measurement, the AI boundary) have the highest entry cost and the greatest chance of changing what the school looks like; the top-left ones (empirics, digital money) are where a newcomer can start.</figcaption></figure>

**What would count as progress.** For (b): apply the duration/EVA framework to a real cycle and produce an empirical chart of how the distribution of project durations across industries lengthens in the boom and gets cut short in the bust — turning Stage 5.2 from prose into something checkable. For (d): an ABCT 2.0 that spells out **three transmission channels** (bank credit, shadow credit, asset prices) and can explain why the 2010s produced asset inflation without goods inflation, while 2021–23 (Stage 13.4) produced both. Do that, and the whole “failed predictions” column in Stage 14.4 becomes “the theory now states its conditions of application.”

### ③ Empirical work and money: Austrian evidence at scale, and “what is money now?”

**Question (c).** Stage 13.1 set out the Austrian empirical method: **explain, don't test** — theory is a priori, and history is the use of theory to understand a particular event. Rothbard's *America's Great Depression*, Robert Higgs's “regime uncertainty,” Benjamin Powell on Japan (Stages 13.2, 13.3) are the models. But all of them are **single-case narrative histories.** Can an empirical program that respects 13.1 be done at scale — dozens of countries, hundreds of cycles, reproducible coding rules?

**State of play.** The most systematic work here has come from the Austrians' neighbors: public choice and new institutional economics have large cross-country institutional datasets (the Fraser Institute's Economic Freedom of the World index has many Austrian-friendly hands behind it). Inside the school proper, Cachanosky, Salter, Andrew Young and others have checked ABCT against duration or industry-structure data; but overall, as Stage 13.1 said, **you can count the solid work on your fingers.** The obstacle is half cultural (“we already know the answer”) and half an unclarified methodology: if theory cannot be falsified by data, what are data for? Mises actually answered this long ago. Data do not test the theory; they test **your application of the theory.** If you say 2008 was an ABCT episode, then the upstream stages of production should have risen first and fallen first — and that can be checked, and it can be checked across dozens of cycles at once.

**What would count as progress.** A public, reproducible “ABCT pattern checklist”: for a given cycle, list the five to eight patterns the theory implies (the ratio of upstream to downstream prices rises then falls; the investment share of long-duration industries rises first; unemployment appears first in capital-goods sectors; and so on), check each against data, and mark “fits / does not fit / insufficient data.” Do it for 1929, Japan 1990, 2000, 2008, 2020–22, then for twenty countries. **This is not econometric testing; it is large-scale pattern matching** — entirely within the methodology of 13.1 — and it would turn Stage 5.4's “reading history with ABCT” from four stories into one table.

**Question (e).** Stage 17.1 asked whether Bitcoin satisfies the regression theorem; Stage 17.3 covered stablecoins and CBDCs. Put them together and the question gets bigger: **what is money now?** Menger said money evolves out of the most saleable commodity; Mises said today's purchasing power traces back to the day the thing was merely a commodity. But “the dollar” today is simultaneously a Federal Reserve liability (reserves), a commercial-bank liability (deposits), a money-market fund share, an on-chain stablecoin, and an offshore Eurodollar — and these do not always trade one-for-one (money funds “broke the buck” in 2008; a major stablecoin briefly lost its peg during the Silicon Valley Bank episode in 2023). **The “hierarchy of money”** is something Post-Keynesians such as Perry Mehrling have written about at length and Austrians hardly at all, even though Mises's 1912 distinction between money, money-substitutes and fiduciary media was built for exactly this.

**State of play and progress.** George Selgin's 2015 notion of **“synthetic commodity money”** — something like Bitcoin, with no non-monetary use but an absolutely scarce supply — opened a theoretical door alongside the regression theorem; William Luther and Lawrence White have analyzed stablecoins and private currency competition. **Progress** would be a rewrite of today's monetary hierarchy in Mises's three-way vocabulary — which layer stablecoins occupy, which layer a CBDC would nationalize, what Bitcoin's “final settlement” means — followed by an answer to Stage 17.5's question: in such a hierarchy, which layer does the cycle start from?

### ④ AI and the knowledge problem: where, to the meter, is the computable/tacit boundary?

**Question (f).** Stage 7.5 and Stage 18.1 both ask whether AI can central-plan, and both answer no, because knowledge is tacit, local, and created by action. The answer is right, but it is **defensive**: it draws a line without saying where the line is. Large language models have compressed nearly all of the knowledge that has already been articulated. So: **of the knowledge markets run on, what fraction is “inarticulate”?** Is that fraction fixed, or does it shrink as sensors, logs and language models improve?

**State of play.** Austrians have three threads. First, Hayek's 1945 essay itself distinguishes two kinds of knowledge — scientific knowledge (centralizable) and knowledge of particular time and place (not) — and LLMs have plainly swallowed much of the former; the question is the latter. Second, Foss and Klein's *Organizing Entrepreneurial Judgment* (2012) defined Mises's “judgment” as committing resources under uncertainty with no computable odds; Stage 18.3 discussed it: judgment is not information processing, it is bearing the consequences. Third, Polanyi's tacit knowledge comes in two kinds — **skill-type** (you can ride a bicycle but cannot say how) and **judgment-type** (you sense a market is about to turn but cannot say why). Machines are already learning the first (robotics); the second is the Austrians' real fortress. **No Austrian paper has yet tied these three threads together into an operational boundary criterion.**

**What would count as progress.** A criterion that, for any economic decision, says “this part can be delegated to a model; this part must be made by the person who bears the loss” — and whose justification comes from praxeology rather than from the current state of the technology (otherwise it expires next year). One candidate: **the computable part is “given the ends and constraints, solve”; the non-computable part is “choose the ends and bear the loss”** — because a loss can only fall on an acting person with property, and a model has no property (Stage 18.6). Whether that candidate holds is genuinely open. The line requires some machine learning; the payoff is the most important Austrian paper of the AI era.

### ⑤ Institutions, development and entrepreneurs: mainline economics, development, and the business school

**Question (g).** Why are some countries rich and others poor? The mainstream answer moved from “not enough capital” (1950s) to “institutions” (2000s, Acemoglu and Robinson). Austrians got there earlier than anyone: Peter Bauer's *Dissent on Development* (1972) and *Equality, the Third World and Economic Delusion* (1981) argued, when aid was still the consensus, that aid breeds rent-seeking and destroys local entrepreneurs. Bauer was a minority vindicated by time — but he was one man, not a program.

**State of play.** Peter Boettke turned the line into a program. *Why Perestroika Failed* (1993) used the Mises–Hayek framework to explain the Soviet Union's last years; *Calculation and Coordination* (2001) generalized it; with Christopher Coyne and Peter Leeson, “Institutional Stickiness and the New Development Economics” (2008) argued that institutions cannot be parachuted in — they must fit the local “underlying” norms or they snap back. Coyne's *After War* (2008) and *Doing Bad by Doing Good* (2013) explain why state-building and humanitarian aid fail so reliably — **Stage 8.4's public choice plus Stage 7.2's knowledge problem applied across borders.**

**Question (h).** In *Living Economics* (2012) Boettke drew the distinction between **“mainline” and “mainstream.”** The mainline is a thread of thought running from Smith through Hayek to Buchanan — people act purposefully, institutions matter, order is spontaneous; the mainstream is whatever the journals favor this decade. Austrians should be a branch of the mainline, not the opposition to the mainstream. The **practical implication** is that Austrians should fuse deeply with new institutional economics (North, Williamson, Ostrom) and public choice (Buchanan, Tullock), rather than closing themselves in “pure Austrian” journals. Leeson's *The Invisible Hook* (2009, on pirate spontaneous order) and his string of studies of order outside the law are the best examples — published in mainstream journals, asking Hayekian questions.

**Question (i).** Here is a fact that Austrian circles barely notice: **in management science, Austrians have already won half of entrepreneurship theory.** Kirzner's alertness underlies the “opportunity recognition” literature (Scott Shane's classic 2000 paper cites Kirzner directly); the Foss–Klein judgment view is a recognized stream in the *Strategic Entrepreneurship Journal* and similar outlets; Klein's *The Capitalist and the Entrepreneur* (2010) carried Mises's capitalist-entrepreneur into the theory of the firm. **This is the Austrians' largest footprint in mainstream scholarship** — but it lives in business schools, not economics departments.

**What would count as progress.** (g): a concrete, checkable development case using the institutional-stickiness framework — not another “aid does not work” manifesto. (h): any paper accepted both by the *Review of Austrian Economics* and by a mainstream journal is progress on this line; the standard is **the question is Austrian, the reader need not be.** (i): make “judgment” teachable — a course or case collection a business school could use; this connects directly to the “Building” lane of Stage ∞.2.

### ⑥ The philosophy of praxeology after Mises — and what counts as progress

**Question (j).** Stage 2.2 covered Mises's apriorism: the action axiom is self-evident, economic laws are deduced from it, and experience can neither confirm nor refute them. It is the most distinctive and most attacked Austrian position. Since Mises, who has developed it?

**State of play.** Three routes. **Hans-Hermann Hoppe**, in *Economic Science and the Austrian Method* (1995), takes a Kantian–Apelian line: the action axiom is performatively self-evident (to deny it is to act), and he goes further to claim that argumentation itself presupposes private property (“argumentation ethics”) — a step many Austrians decline to take. **Roderick Long** takes an Aristotelian line: “Realism and Abstraction in Economics: Aristotle and Mises versus Friedman” (2006) argues that the “a priori” of praxeology is really an analysis of the **concept** of action, not a Kantian structure of the mind — a version philosophers find easier to accept. **Jörg Guido Hülsmann**, in “Facts and Counterfactuals in Economic Law” (2003), argues that economic laws are about **counterfactuals** (“without the intervention, the price would have been…”), which explains why they cannot be statistically tested — you never observe the counterfactual. This is, in my judgment, the most promising formulation, because it simultaneously accounts for Stage 13.1's “explain, don't test.”

**The critics** deserve their steelman. Bryan Caplan's “Why I Am Not an Austrian Economist” (1999) argues that apriorism isolates Austrians from the profession at too high a price, and that many Austrian criticisms of the mainstream (of cardinal utility, of indifference curves) rest on misreadings. Philosophers of science in Mark Blaug's line hold that an unfalsifiable theory is not science. **The honest reply**: Caplan's point about misreadings is partly right (Stage 2.4 conceded it); the reply to Blaug — mathematical theorems are unfalsifiable too, and useful — is valid, provided Austrians actually use their theorems with mathematical rigor rather than treating “a priori” as a license not to look at data.

**What would count as progress.** A paper publishable in a mainstream philosophy-of-science journal that settles what praxeology is: Kantian synthetic a priori, Aristotelian conceptual analysis, or counterfactual law? The three have different practical consequences — above all, different answers to “what can empirical work do?” (② and ③ depend on that answer). **It is the most philosophical of the ten questions, and the one that decides whether the other nine can be done.**

Step back and look at the six pieces together. The interesting thing is that the ten questions are not parallel; they depend on each other. (j) sets the methodological permission for (c); (b) supplies the measurement for (d) and (a); (f) is (h) and (i) extended into the AI era; (e) is the monetary end of (d). **No one person can do all of them** — which is what the demo's “pick my three” mode is for: find three that support each other and you have a research agenda instead of a pile of interests. Stage ∞.2 turns an agenda into a path; Stage ∞.3 makes you write one piece first.
`,

  demo: "frontier-board",

  analogy: `
Picture the Austrian School as an **old city.**

The center is the old town, built between 1871 and 1949 — Menger's Value Square, Böhm-Bawerk's Capital Street, Mises's cathedral of praxeology, Hayek's market of knowledge. The buildings are sound; the guided tours (Stage 12) take you through every one. Many who come to this city spend their whole lives as tour guides in the old town, walking the same route ten thousand times.

But in a living city the construction sites are always **outside the walls.** To the east someone is fitting Capital Street with gauges (Lewin and Cachanosky's duration). To the south a survey crew is mapping a swamp called shadow banking. To the west a group with computers is asking whether the whole city's traffic can be drawn as a dynamic map (complexity economics). To the north the philosophers are still arguing whether the foundations are granite or concrete (the philosophy of praxeology). Farther out, on the new continent called AI, someone has planted a flag reading “no computation past the tacit-knowledge line” — but nobody has measured which meter the flag belongs on.

What this lesson hands you is not a map of the old town — you already have that — but **the construction sign at every site outside the walls**: what is being built, who is on the crew, which trades are short, and what “finished” would look like. The weaknesses confessed in Stage 14.4 are, seen from this angle, unfinished buildings. Your job is to walk up to one of the signs, read it, and decide whether to pick up a brick.
`,

  misconceptions: [
    "**“The Austrian theory is complete; what remains is spreading it.”** — The core propositions are mature, but **applying** them to shadow banking, stablecoins, large language models or cross-country development runs into genuinely unsolved problems at every turn. A school with nothing left but dissemination is a museum; the best contemporary Austrian work (duration-based capital theory, institutional stickiness, the judgment view) was all done at the edges.",
    "**“Building a model is a betrayal of the school.”** — Austrians object to models that flatten the market into an equilibrium snapshot, not to all models. Complexity economics and agent-based models describe precisely a process, and Koppl and others have worked that seam for thirty years. The real difficulty is conceptual — how a model can contain an opportunity the programmer did not foresee — and that needs Austrians present, not absent.",
    "**“A priori method means data are useless.”** — Data do not test the theory, but they test **your application of it**: if you call an episode ABCT, whether upstream stages rose and fell first is checkable. Stage 13.1's “explain, don't test” licenses large-scale pattern checking; Austrians have simply never done it systematically.",
    "**“Criticizing the mainstream is a scholarly contribution.”** — It is not. Progress means Austrian theory answering a question it could not answer yesterday or reaching a setting it could not reach yesterday. There are already enough “the mainstream is wrong again” papers; one empirical chart of project durations across a real cycle is worth ten of them.",
    "**“The AI question was settled by the phrase ‘tacit knowledge.’”** — That is a defensive line, not a criterion. Of Hayek's two kinds of knowledge, LLMs have already eaten much of the “scientific” half; the real question is where the computable/non-computable boundary lies, why it lies there, and whether it moves. No Austrian paper yet gives an operational criterion — this is an open problem, not an answered one.",
  ],

  quiz: [
    {
      q: "Which finance concept do Lewin and Cachanosky use to replace Böhm-Bawerk's “average period of production”?",
      options: [
        "Net present value (NPV)",
        "The Sharpe ratio",
        "Macaulay duration",
        "CAPM beta",
      ],
      answer: 2,
      explain: "**Duration** is the present-value-weighted average time to a project's cash flows. The longer a project, the more its present value responds to the rate — so when the rate is pushed down, long-duration projects gain most and capital flows to them: malinvestment in the language of finance.",
    },
    {
      q: "What does the Koppl–Yeager “Big Players” theory claim?",
      options: [
        "Large firms monopolize markets through sheer size",
        "Institutional investors are more rational than retail investors",
        "When an actor immune to market discipline but able to change outcomes (e.g. a central bank) enters, others shift from reading fundamentals to guessing its moves, and markets herd",
        "Bigger states have more stable economies",
      ],
      answer: 2,
      explain: "A Big Player changes how expectations form: participants watch the Big Player instead of fundamentals, so the market behaves more like a herd. It is the Austrians' bridge between expectations theory and complexity research.",
    },
    {
      q: "According to this lesson, what would a large-scale empirical program that respects Stage 13.1 look like?",
      options: [
        "Econometric regressions testing whether the action axiom holds",
        "Checking the patterns ABCT implies (upstream rises and falls first, etc.) against data across dozens of cycles, marking fits / does not fit / insufficient data",
        "Abandoning apriorism for mainstream methods",
        "Only single-case narrative histories",
      ],
      answer: 1,
      explain: "Data do not test the theory; they test **the application** of the theory. Large-scale pattern checking sits entirely within “explain, don't test” — the school has simply never done it systematically.",
    },
    {
      q: "What problem was George Selgin's 2015 concept of “synthetic commodity money” meant to address?",
      options: [
        "Why stablecoins lose their pegs",
        "Whether a CBDC can replace cash",
        "Proving that gold is no longer money",
        "Opening a theoretical door beside the regression theorem for something like Bitcoin — no non-monetary use, but absolutely scarce supply",
      ],
      answer: 3,
      explain: "The regression theorem traces money back to a commodity use, which Bitcoin lacks. Selgin's “synthetic commodity money” observes that scarcity can come from rules rather than physics — a starting point for the “what is money now?” question.",
    },
    {
      q: "Which of the ten frontier problems does the lesson say “decides whether the other nine can be done”?",
      options: [
        "The philosophy of praxeology: what the a priori actually is",
        "The AI/knowledge-problem boundary",
        "Measurement in capital theory",
        "Rewriting the monetary hierarchy",
      ],
      answer: 0,
      explain: "Whether praxeology's a priori is Kantian, Aristotelian or counterfactual gives different answers to “what can empirical work do?” — and the empirical, measurement and formalization programs all depend on that permission.",
    },
  ],

  further: [
    { label: "Lewin & Cachanosky, Austrian Capital Theory: A Modern Survey of the Essentials (Cambridge Elements, 2019)", url: "https://www.cambridge.org/core/search?q=Austrian+Capital+Theory+Lewin+Cachanosky" },
    { label: "Cachanosky & Salter, “The View from Vienna” — survey of the ABCT revival (Review of Austrian Economics, 2017)", url: "https://link.springer.com/journal/11138" },
    { label: "Koppl, Big Players and the Economic Theory of Expectations (2002) — the “Big Players” theory (Google Scholar search)", url: "https://scholar.google.com/scholar?q=Koppl+%22Big+Players%22+economic+theory+of+expectations" },
    { label: "Boettke, Living Economics: Yesterday, Today, and Tomorrow (2012) — the source of “mainline vs mainstream”", url: "https://www.independent.org/publications/books/living-economics/" },
    { label: "George Selgin at Cato — author of “Synthetic Commodity Money” (2015) and other monetary work", url: "https://www.cato.org/people/george-selgin" },
    { label: "Journal of Libertarian Studies (Mises Institute) — home of Hülsmann, “Facts and Counterfactuals in Economic Law” (2003)", url: "https://mises.org/journal-libertarian-studies" },
  ],
};
