export default {
  id: "empirical-method",
  stage: 13,
  order: 1,
  title: "How Austrians Do Empirical Work: Explain, Don't Test",
  difficulty: "mastery",
  prereqs: ["individualism-history", "apriori-empirical"],

  oneLiner:
    "Austrians do not “test” the business cycle theory with a regression — and that sentence is routinely misread as “Austrians don't look at data.” The opposite is true. The division Mises drew in *Theory and History* (1957) is that **theory is a priori, while history is the application of theory to understand events that happen only once** — and understanding a piece of history means laying out credit aggregates, the term structure, sectoral employment and Gross Output without skipping any of them. Rothbard's *America's Great Depression* (1963) is the template: **half logic, half archive.** This lesson explains why data in Austrian hands **illustrate** rather than **test**, what good Austrian empirical work looks like, what bad looks like, how to read a mainstream econometrics paper through Austrian eyes — and it admits, plainly, that the school's empirical output is thin.",

  intuition: `
Start with a forensic pathologist.

A man lies on the floor with a stab wound to the chest. The pathologist writes: “cause of death, exsanguination.” How does she *know* that a stab wound causes bleeding and that bleeding causes death? Not by tallying ten thousand corpses and running a regression. **That is physiology**, settled long before she walked into the room. What she does at the scene is a completely different kind of work: **was this man killed by this knife, at this hour, for this reason?** The angle of the wound, the spread of the blood, the time of death, the absence of other pathology — those are data, and she has to look at every one of them.

She would never say “I already have physiology, so I needn't look at the body.” Nor would she say “I will use this body to test physiology.” **Physiology is theory; the scene is history; the report is the application of theory to this one case.** Three different things, each with its own kind of evidence.

That is exactly how the Austrian School does empirical work. Stage 2.2 explained why the core laws of economics — “pushing the interest rate down misleads intertemporal investment,” “whoever gets the new money first gains” — are derived from the logic of action and cannot be confirmed or refuted by statistics. Stage 2.3 introduced the line Mises drew in *Theory and History* (1957): **theory** deals with the structure common to all action; **history** deals with what particular people did at particular moments. Many readers stop there and conclude “Austrians don't do data.” That is the first misunderstanding this lesson corrects.

Mises was explicit: the historian's job — the economic historian's included — is **understanding** (*Verstehen*). Facing an event that happened once and will never happen again, the historian must mobilize *all* the relevant theory (economics, psychology, technology, politics), plus a grasp of what the actors wanted and believed, and say *why it went this way*. That job is impossible without data: how much did the money supply grow in the 1920s, into which assets, who borrowed, what for, and what stopped the liquidation afterward? Without those numbers, all you can say is “in theory credit expansion causes depressions” — never “**this** depression came about that way.”

So the split between Austrians and the mainstream is not whether to look at data but **what role the data play in the argument**. The standard mainstream procedure: state a hypothesis, gather data, run a regression, read the p-value, declare the hypothesis “supported” or “rejected.” The Austrian procedure: the theory is already established logically; ask “did the mechanism the theory describes show up in this episode, how strongly, and what other forces added to or cancelled it?”; use data to **show the mechanism was present**, and use narrative to connect the mechanism to particular people making particular decisions. One treats the data as judge; the other treats it as witness.

None of this is exotic. The mainstream's own economic-history tradition has always worked this way — Friedman and Schwartz's *A Monetary History of the United States* (1963) is narrative plus data, not a regression. The disagreement is that Austrians think this is the *only* legitimate way, because there are no constant quantitative relations in economics for a regression to “estimate” (the “constants hunt” demo in Stage 2.2 already showed you that).

Does that mean Austrians never predict? No. Hayek gave the precise formulation: **pattern prediction**. Theory can tell you the *shape* — “after rates are pushed down, long projects will expand relative to short ones and then be liquidated” — but not the *number* — “the Nasdaq falls 31% in Q3 2027.” You met the idea in Stage 2.3; here we ask how a pattern is displayed with data, and how that differs from a test.

The last part is the honest part. Stage 14.4 catalogues the school's recurring mistakes, and one of them is **thin empirical output**. A school that is logically right but produces only a handful of serious case studies in six decades will be marginalized in the academic market — that is a fact, not enemy propaganda. So this lesson covers not only “how Austrians should do it” but “what they actually did, how well, and where they fell short.” The four case lessons that follow — Stage 13.2 on the Great Depression, Stage 13.3 on Japan, Stage 13.4 on 2008 and QE, Stage 13.5 on reading the Fed — put this method to work for real.

**In this lesson we break it into five pieces:**

- **① Mises's division of labor: theory a priori, history unique, “understanding” as the craft that joins them**
- **② Illustrating vs testing: why Austrians don't run regressions to test ABCT, yet use data to show the pattern was present**
- **③ Hayek's pattern predictions: what can be predicted, what can't, and how to draw a pattern with data**
- **④ What good Austrian empirical work looks like — and what bad looks like**
- **⑤ Reading a mainstream econometrics paper as an Austrian, and owning the school's weak spot**
`,

  mechanics: `
### ① Mises's division of labor: theory a priori, history unique, “understanding” as the craft that joins them

In *Theory and History* (1957) and in Chapter II of *Human Action* (1949) Mises keeps drawing the same line. Lay it out as three tiers:

- **Theory** (praxeology): every proposition derived from “humans act purposefully.” Both parties to an exchange expect to gain. Credit expansion that pushes the market rate below the natural rate induces a longer production structure than voluntary saving can sustain. New money changes relative prices along its path of injection. The truth of these claims **does not depend on any episode** — you cannot “refute” them with 1929 any more than you can refute “a triangle's angles sum to 180 degrees” with a badly drawn triangle.
- **History** (facts): unique, unrepeatable events. The Fed's discount-rate moves of 1924–27, stock prices in October 1929, the size of the Fed's balance-sheet expansion in March 2020, the 2021 CPI print. These are **data**: checkable, revisable, arguable. But they explain nothing on their own — a table showing “M2 rose about 40%” does not tell you why it rose or what happened next.
- **Application / understanding** (*Verstehen*, or in Mises's late vocabulary *thymology*): theory brought to bear on history. “Money growth of about 40% in 2020–21 was **the** main cause of the 2021–23 inflation” — that sentence is neither theory (it is about particular years and a particular chain of causation) nor fact (it is an interpretation; someone else can propose supply chains instead). It is **application**. Whether it is right depends on three things: is the theory applied correctly (does the mechanism hold), were the facts checked (did the money really reach consumers first), and were rival explanations dealt with (how much can supply chains account for)?

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Three kinds of claim, three kinds of evidence: theory · history · application</text><rect x="30" y="50" width="180" height="120" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="120" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">Theory (a priori)</text><text x="120" y="94" text-anchor="middle" font-size="10.5" fill="var(--ink)">“Credit expansion pushes the market</text><text x="120" y="108" text-anchor="middle" font-size="10.5" fill="var(--ink)">rate below the natural rate”</text><text x="120" y="132" text-anchor="middle" font-size="10" fill="var(--muted)">Evidence: does the derivation hold?</text><text x="120" y="147" text-anchor="middle" font-size="10" fill="var(--muted)">Data neither confirm nor refute</text><rect x="430" y="50" width="180" height="120" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="520" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--blue)">History (fact)</text><text x="520" y="94" text-anchor="middle" font-size="10.5" fill="var(--ink)">“US M2 grew about 40%</text><text x="520" y="108" text-anchor="middle" font-size="10.5" fill="var(--ink)">in 2020–21”</text><text x="520" y="132" text-anchor="middle" font-size="10" fill="var(--muted)">Evidence: archives, statistics, sources</text><text x="520" y="147" text-anchor="middle" font-size="10" fill="var(--muted)">Revisable, but explains nothing alone</text><path d="M210 110 L 290 190" stroke="var(--orange)" stroke-width="2" fill="none"/><path d="M430 110 L 350 190" stroke="var(--blue)" stroke-width="2" fill="none"/><rect x="200" y="190" width="240" height="90" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="320" y="212" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Application / Verstehen</text><text x="320" y="232" text-anchor="middle" font-size="10.5" fill="var(--ink)">“The 2021–23 inflation was mainly caused by</text><text x="320" y="246" text-anchor="middle" font-size="10.5" fill="var(--ink)">the 2020 expansion injected into households”</text><text x="320" y="268" text-anchor="middle" font-size="10" fill="var(--muted)">Evidence: mechanism right? · facts checked? · rivals ruled out?</text></svg><figcaption>Theory is checked by logic, history by archives; an application has to clear three bars at once — mechanism, facts, rival explanations. All Austrian empirical work lives in the bottom box.</figcaption></figure>

Why does the three-way split matter so much? Because **confusing the tiers is the source of most economic quarrels.** Someone cites 2010–19 — “they printed all that money and there was no inflation” — as proof that “Austrian theory has been falsified.” That uses an episode to attack a theory: a category error. The right response is to ask what went wrong at the application level (the answer is in Stage 13.4: a different injection point, a different demand for money). In the other direction, someone reasons from “credit expansion must end in a bust” straight to “the crash comes in 2025.” That treats theory as if it were history, skipping the entire application layer — how big was this expansion, where did it go, what offsets it, and the timing cannot be derived from theory at all. The permabear disease diagnosed in Stage 14.4 is precisely this jump.

Rothbard's *America's Great Depression* (1963) is the template, and its **structure** is the lesson. Part One is pure theory: a statement of the cycle theory and replies to its critics, without a single number. Part Two is pure history: the money supply of 1921–29 (on his own definition he estimated growth of roughly 60% over the decade), every Fed operation, Benjamin Strong's cooperation with the Bank of England, and each Hoover intervention after 1929. **The theory part never cites history to prove itself; the history part never pretends to be testing the theory.** Joined together, they make a judgment: “seen through this theory, this episode is coherent; seen through others, an unexplained residue remains.” That is application. Stage 12.4 covered how to read the book; Stage 13.2 sets it beside Friedman and Schwartz.

### ② Illustrating vs testing: why Austrians don't run regressions to test ABCT, yet use data to show the pattern was present

Picture a mainstream economist “testing ABCT” by the book. Find a proxy for “the rate below the natural rate” (say, the fed funds rate minus a Taylor-rule estimate). Find a proxy for “lengthening of the production structure” (the ratio of durable to non-durable output, or the employment share of capital-goods industries). Run a VAR and see whether a shock to the first produces a significant response in the second some quarters later. Significant: “ABCT is supported.” Not significant: “ABCT is rejected.”

Why don't Austrians do this? **Not because they fear the result**, but because all three premises of the procedure fail on Austrian grounds:

- **Premise one: a stable quantitative relation exists to be estimated.** The regression estimates “a one-point rate deviation moves capital-goods employment by β points after t quarters.” But β is not a natural constant. It depends on how entrepreneurs read the rate this time (the judgment of Stage 6.1), which sector the credit flows into this time (stocks and construction in the 1920s, housing in the 2000s, perhaps AI capex in the 2020s — Stage 18.5), on regulation, taxes, expectations. **Each cycle is a unique event.** Averaging them yields a β that describes none of them. Stage 2.2 showed you: there is no speed of light in economics.
- **Premise two: no significance means no mechanism.** A mechanism can be fully present yet swamped by something else. Suppose credit expansion did misdirect investment in 2010–19 (mechanism present) while shale oil, globalization and technology were pushing consumer prices down — a CPI regression would “see nothing.” Inferring “absent” from “not found,” with one experiment and tangled variables, is illegitimate.
- **Premise three: data decide whether the theory is true.** This is the core of Stage 2.2. “A depressed rate misleads intertemporal plans” is derived from the logic of action, like “two people trade because they rank the goods differently.” It is **a priori**. The question you may ask is not “is it true?” but “how much did it matter this time?”

So what do data do in Austrian hands? **Illustrate**: show that the mechanism was **present** in this episode and large enough to account for what we observe. Concretely:

- Was there credit expansion? → Look at money and credit aggregates: M2, bank credit, the Rothbard–Salerno “True Money Supply” (TMS), the central bank's balance sheet.
- Was the rate pushed below the natural rate? → The natural rate is unobservable (Stage 3.5), but there are **indirect signs**: a real policy rate negative for years, an abnormally flat or inverted term structure, credit spreads compressed to unusual lows, saving and investment rates diverging.
- Did the production structure lengthen? → Look at **sectors**, not totals: employment and output in capital-goods and durables relative to consumer goods, the swelling of construction and mining, and the far larger swings of upstream stages visible in **Gross Output** (GO, championed by Mark Skousen and published officially by the BEA since 2014 — Stage 10.2 explained why GO sees upstream where GDP cannot).
- Did liquidation happen, and what blocked it? → Bankruptcies, disposal of bad loans, the share of zombie firms (Stage 10.4), policies that obstruct price and wage adjustment.

None of this “tests” the theory. It **answers the questions the theory poses**. Theory tells you where to look; data tell you what is there. An Austrian can perfectly well conclude “ABCT's mechanism explains maybe three-tenths of this cycle and pandemic supply chains the rest” — that is an application-level judgment and it costs the theory nothing.

There is a subtle but important corollary: **Austrians may use regressions, provided they treat them as description, not judge.** Salerno, Garrison and others have no objection to correlation coefficients, scatter plots, or a VAR used to **summarize** the shape of the data; what they reject is the p-value as a verdict on theory. Indeed a body of Austrian or Austrian-adjacent work exists in this spirit: Keeler (2001, *Review of Austrian Economics*) displayed the co-movement of the term structure and the structure of output in postwar US data; Mulligan (2006, *Quarterly Journal of Austrian Economics*) used cointegration methods on rates and employment by stage; Young (2005, *Economics Letters*) showed Hayekian reallocation of labor across stages; Luther and Cohen (2014) did similar work. The right way to read these papers: **they show the pattern is recognizable in the data**, not “ABCT passed the test.” Most of their authors would say the same.

### ③ Hayek's pattern predictions: what can be predicted, what can't, and how to draw a pattern with data

In “Degrees of Explanation” (1955), “The Theory of Complex Phenomena” (1964) and the Nobel lecture “The Pretence of Knowledge” (1974), Hayek drew the boundary of what Austrian empirical work can hope to do. The argument: the economy is a **complex phenomenon** — the number of variables determining an outcome vastly exceeds what any observer can measure, and much of it is tacit knowledge that cannot be quantified at all. For such phenomena, science can predict not **specific values** but **patterns**: a structural feature will certainly appear, but its timing, magnitude and specific carrier are unknowable.

Make it concrete. Theory says: **push the market rate below the natural rate and intertemporal discoordination follows.** Packed inside that sentence are these pattern predictions:

- **Direction**: upstream and long-lived projects expand relative to downstream and short-lived ones (watch: rising capital-goods employment share, accelerating construction and mining investment, surges in M&A and IPOs, rising valuations of long-duration assets — Stage 10.3 covered duration and rates).
- **Sequence**: first asset prices and upstream boom, then input prices and wages squeezing margins, then liquidation. The order is not coincidence; it is endogenous to the mechanism (Stage 5.2).
- **Fragility**: the more the boom depends on continued credit expansion, the more sensitive it is to rising rates — which is why, after the Fed raised rates in 2022, the longest-duration assets (long bonds, unprofitable tech, commercial real estate) were hurt first. Not a coincidence.

What a pattern prediction **does not** contain: when the turn comes (that depends on when the central bank stops, when entrepreneurs wake up, when an external shock lands), how far things fall, which particular firm fails. Hayek's analogy: you can predict the *shape* of a football match — attackers, defenders, the ball moving around the goals — but not the score.

How do you draw a pattern with data? Garrison's method in *Time and Money* (2001) is to render ABCT as three interlocking diagrams (Stage 10.1) and then ask whether historical data fit into them. **Do consumption and investment rise together** (the signature of a credit boom, the opposite of saving-driven growth where one gives way to the other)? **Does the term structure twist with central-bank operations?** **Are upstream swings markedly larger than downstream ones?** Plot these and the presence or absence of the pattern is visible — no p-value required.

Here is a mistake Austrians are prone to, and the vaccine belongs here: **quietly upgrading “the pattern is present” into “the pattern is the only cause.”** Capital-goods industries expanded in the 1920s — pattern present. But electrification, automobiles and radio were real technological revolutions also pushing capital-goods industries, and that part of the expansion was not malinvestment. Separating the two needs finer evidence: technology-driven investment stays profitable when rates rise; credit-driven investment is exposed as loss-making. After 1929, which capacity was permanently scrapped and which merely paused and resumed — that is where the distinction lives. **Pattern prediction gives you a shape; the historian's job is to measure its size and peel the other shapes away.**

### ④ What good Austrian empirical work looks like — and what bad looks like

Let us make “good” concrete with a checklist. A good piece of Austrian empirical work has:

**1. A complete narrative plus a set of structural data.** The narrative answers “who did what, when, and why”; the data answer “how big.” Narrative without data is storytelling; data without narrative is a handsome table. Rothbard's *America's Great Depression* has both.

**2. Structural data ahead of aggregates.** Stage 10.2 explained why GDP flattens the upstream: the very information Austrians care about most — the stretching and contracting of the production structure — is erased in the total. So the standard Austrian data kit is: **credit aggregates** (who is expanding, into what); **the term structure** (short end suppressed, long end artificially flattened, or naturally formed); **sectoral employment and output** (capital goods vs consumer goods, upstream vs downstream); **Gross Output** (upstream swings); and **the distribution of prices**, not one CPI number (asset prices, input prices and consumer prices each moving on their own — Cantillon effects hide in that distribution, Stage 4.3).

**3. Rival explanations, stated fairly and given a real punch.** For the Depression: monetarism (collapsing money stock) and Keynes (deficient demand). For Japan: the liquidity trap, demographics. For 2008: the global saving glut, regulatory failure. Good Austrian work lays them out and says “this is what they explain and this is what they leave unexplained,” rather than pretending they don't exist.

**4. Honesty about the boundary of one's own explanation.** “ABCT explains the structure of the boom and why it had to end, but not the depth of the 1930–33 deflationary spiral — Friedman and Schwartz's contribution there is real.” Sentences like that should be common in good Austrian work.

**5. Checkability.** Sources, definitions, periods stated; approximations flagged with “about.”

Run the checklist over works widely regarded as done right:

- **Rothbard, *America's Great Depression* (1963)**: narrative + monetary aggregates + an itemized policy list. Its weaknesses belong on the record too: thin treatment of the post-1929 monetary contraction, little engagement with rivals (the *Monetary History* had only just appeared when he wrote).
- **Higgs, “Regime Uncertainty” (*The Independent Review*, 1997)**: explains why private investment stayed depressed in 1935–40 — not deficient demand, but New Deal changes to property rights and taxation that left investors unable to judge whether their returns would be confiscated. His evidence combines what businessmen said at the time (*Verstehen*!) with structural shifts in corporate bond spreads and investment data. A classic of understanding married to numbers.
- **Powell, “Explaining Japan's Recession” (*QJAE*, 2002)**: assembles the 1980s credit expansion and the post-1990 obstruction of liquidation into one chain, answering the Keynesian and monetarist readings one by one. Stage 13.3 goes through it.
- **Ravier and Lewin, “The Subprime Crisis” (*QJAE*, 2012)**: uses the 2001–04 fed funds rate, real-estate credit and construction employment to display the pre-2008 pattern, while discussing the overlay of the GSEs and regulation. One of the sources for Stage 13.4.
- **Salerno's work on money-supply definitions**: the Rothbard–Salerno “True Money Supply” matters because **what you measure determines what you see** — whether money-market fund shares inside M2 count as “money” changes your reading of how loose or tight policy was around 2008. This is an Austrian contribution to the *tools* of empirical work, not merely to its conclusions.
- **Garrison, *Time and Money* (2001)**: not a case study but the rendering of ABCT into diagrams that can be held up against data — the frame everyone afterward fills in.

Now the **bad** — equally important, because there is plenty of it in Austrian circles:

- **Cherry-picking**: choosing only the periods and indicators that fit. Using the 2021–23 inflation to prove “printing always inflates” while staying silent on 2010–19; or the mainstream doing the reverse, using 2010–19 to prove “printing doesn't inflate” and staying silent on 2021. Both sides are picking cherries.
- **Ignoring counter-evidence**: Japan has had near-zero rates since 1999; theory would seem to predict a huge malinvestment boom, yet nothing like the 1980s bubble reappeared. Why? An Austrian article that does not confront this is not honest. (Stage 13.3 confronts it: a zombified banking system did not turn new base money into new credit.)
- **Refusing all quantification**: declining to report any number on the grounds that “subjective value cannot be measured.” That misuses Stage 1.2 — utility cannot be measured, but money prices, credit aggregates and employment can be counted. Austrian work that refuses to count leaves the reader unable to tell whether the mechanism was the main cause or a rounding error.
- **Treating theory as history**: leaping from “credit expansion must end in a bust” to “crash next month.” That is the permabear Stage 14.4 criticizes by name.
- **Not reading the other side**: writing about 2008 without Bernanke's saving-glut argument, or about the Depression without the *Monetary History*. A rebuttal that does not target the opponent's strongest version is not a rebuttal.

### ⑤ Reading a mainstream econometrics paper as an Austrian, and owning the school's weak spot

Over a career you will read countless papers titled “The effect of monetary policy shocks on X: evidence from Y.” How does an Austrian read them? Not by skipping them, but by **asking a different set of questions**.

**First, what it can tell you:**

- **Descriptive facts.** The most valuable part of a good empirical paper is often not the regression but the data it assembles: sectoral credit flows, firm-level investment timing, household cash holdings. Those are **history**, and Austrians can use them freely.
- **Recognizability of a pattern.** If a VAR shows that after a rate shock durable-goods output swings three times as much as non-durables, that is a useful **display** of the Austrian pattern “upstream swings exceed downstream” — not a proof, a display.
- **A rough sense of magnitude.** The coefficient is no constant, but it gives an order of magnitude: if the paper estimates that a monetary shock moves capital-goods employment by a few hundredths of a point, you at least learn that in this sample the mechanism's visible strength was small — informative for judging “how much did it matter this time.”

**Then, what it cannot tell you:**

- **It cannot verify or refute an a priori proposition.** A regression saying “rates and investment structure show no significant relation in this sample” means only that nothing was seen in this sample, on this definition, under this identification strategy — not that the mechanism does not exist.
- **Its “identification” rests on assumptions you should not accept.** A VAR needs an ordering of shocks; a DSGE needs a representative agent and equilibrium (Stage 11.3). Those assumptions assume away exactly what Austrians care about — heterogeneity, real time, entrepreneurial judgment. Ask: “if I drop this assumption, does the conclusion survive?”
- **It flattens time.** An average lag of “six quarters” hides the fact that the lag differs in every cycle. The Lucas critique (1976) — change the policy and the parameters change — is the mainstream's own point, and it is in fact a special case of Mises's “no constants.” Austrians should turn the blade around: will the parameters this paper estimates survive the next policy change?
- **Its “external validity” is zero until you add understanding.** Whether a paper on 1990s America applies to the 2020s is decided not by statistics but by your **understanding** of whether the actors' situations in the two eras are alike.

A practical reading rule: **skip the “conclusions” section; read the “data” section and the “robustness” section.** The data section gives you facts; the robustness section tells you how fragile the conclusion is — both are usually far more honest than the abstract.

Finally, the honesty promised at the outset. **The Austrian School's empirical output is thin.** From *America's Great Depression* in 1963 to today, the Austrian works that meet the standard of a serious case study can be counted on two hands, while mainstream economic history and monetary economics have produced thousands. The reasons: the school is small; the a priori method was misread by some as a license not to look at data; Austrian journals have a refereeing tradition weighted toward theory; and a certain cultural arrogance — “we already know the answer.” Stage 14.4 develops this self-criticism. But one thing must be said clearly: **thinness is not a consequence of the methodology.** Mises's division explicitly makes history half the job, and Rothbard, Higgs, Powell, Salerno and Garrison show that half can be done well. The four case lessons that follow show that half being done — then the five-step method of Stage 14.1 turns it into a procedure you can repeat, and the capstone in Stage ∞.3 asks you to do it yourself.
`,

  demo: "evidence-role",

  analogy: `
Think of Austrian empirical work as **an old sea captain reading the weather**.

The captain has a book of seamanship — how tides form, what a falling barometer means, what sea a wind from each quarter brings. He did not compile that book from statistics on ten thousand voyages; it comes from fluid mechanics and astronomy, and one freak storm does not make him throw it overboard. That is **theory**.

Every morning he reads the barometer, the clouds, the color of the sea, the direction the birds are flying. Those are **data** — unique, today's alone. The barometer reading does not say “storm coming”; it is just a number.

Then he does the thing called **judgment**: “Pressure has dropped this much in two hours, given that cloud shape and this season — a southwesterly is likely tonight, but this coast is tricky and I can't say what hour.” He does not say “the glass fell five millibars, so by the historical average the wind rises at 9:14 p.m.” — that would squash many different voyages into one mean. Nor does he say “seamanship says falling pressure means a storm, so I needn't look at the clouds” — that would mistake theory for the scene.

Ask him “is your method scientific? can it be tested?” and he answers: “Seamanship isn't tested tonight — it stood on its own logic long ago. What tonight tests is **me** — whether I applied it right.”

There are two kinds of bad captain. One never looks at the barometer, only recites the book, and tells everyone a storm is coming — and when one does arrive he says “I told you so,” though nine times in ten it did not come (the permabear of Stage 14.4). The other looks only at the barometer, runs a regression, finds “each millibar of drop adds two knots on average,” and applies it in waters he has never sailed — and when the ship hits the rocks he says “but the R-squared was 0.8.”

Over the next four lessons you will read the logs of some good captains: 1929, Japan in 1990, 2008, and today's Federal Reserve.
`,

  misconceptions: [
    "**“Austrians reject empirical research and only do pure logic.”** — Mises explicitly split economics into theory and history, and the second half requires all available data and archives to understand particular events; half of Rothbard's *America's Great Depression* is monetary statistics and a list of policies. What Austrians reject is using data as judge over theory, not looking at data.",
    "**“If they won't test it, Austrian theory is unfalsifiable pseudoscience.”** — A priori propositions (“both parties to an exchange expect to gain”) are indeed not falsified by data, just as geometry is not falsified by measurement; but they can be refuted logically, by finding an error in the derivation. And Austrian *applied* claims (“this bust was mainly caused by credit expansion”) can be fully overturned by facts and rival explanations — that is the level where empirical argument belongs.",
    "**“A regression shows no link between rates and investment structure, so ABCT is wrong.”** — In a world with one experiment, tangled variables and parameters that shift with policy, “not found” is not “not there.” The valid inference: in this sample, on this definition, under this identification, the mechanism's visible strength was small. That is information about application, not a verdict on theory.",
    "**“Austrians can use the theory to predict when the crash comes.”** — Theory yields patterns (direction, sequence, fragility), not timing or magnitude; the turn depends on central banks, entrepreneurs and external shocks that cannot be deduced a priori. Jumping from theory to a date treats theory as history — and is the source of the permabear reputation.",
    "**“Austrian empirical work is thin because the methodology forbids it.”** — Thin it is, but the causes are a small school, a method misread as a license not to look, and journals weighted toward theory — not the methodology itself. Higgs, Powell, Salerno and Garrison show the historical half can be done rigorously.",
  ],

  quiz: [
    {
      q: "Under Mises's division in Theory and History, what kind of claim is “credit expansion that pushes the market rate below the natural rate misleads intertemporal investment,” and what evidence bears on it?",
      options: [
        "A historical claim; the evidence is 1920s monetary statistics",
        "A theoretical claim; the evidence is whether the derivation from the logic of action holds",
        "An applied claim; the evidence is how many cycles it has been observed in",
        "A forecast; the evidence is whether the next cycle arrives on schedule",
      ],
      answer: 1,
      explain: "It concerns the structure common to every credit expansion and names no year — an **a priori theoretical claim**. Data can neither confirm nor refute it; only the derivation can be checked for gaps.",
    },
    {
      q: "An Austrian notices that the Fed expanded its balance sheet massively in 2010–19 with no CPI inflation. Following this lesson, the correct reaction is to:",
      options: [
        "Concede that ABCT has been falsified",
        "Declare the data manipulated",
        "Return to the application layer: where was the money injected, how did money demand change, what offset it",
        "Ignore it, since subjective value cannot be measured",
      ],
      answer: 2,
      explain: "Theory is not falsified by an episode; the job is to check the **application**: injection point (bank reserves, not households), money demand (surging after the crisis), offsets (globalization, technology). Stage 13.4 does exactly this.",
    },
    {
      q: "For “pushing the rate down,” what can Hayek's pattern prediction tell you and what can it not?",
      options: [
        "It gives the year of the crash but not the size",
        "It gives direction, sequence and fragility, but not timing or magnitude",
        "Nothing at all, because the economy is a complex phenomenon",
        "Every detail, given enough data",
      ],
      answer: 1,
      explain: "Complex phenomena admit prediction of **structural features**: upstream expands relatively, the sequence asset prices → input prices → liquidation, sensitivity to rising rates — but the turning point, the drop and the specific carriers cannot be derived a priori.",
    },
    {
      q: "Which of the following best fits the standard of “good Austrian empirical work”?",
      options: [
        "Theory only, with no statistics, to avoid being misled by aggregates",
        "Using the 2021 inflation to prove printing always inflates, without mentioning the 2010s",
        "Narrative plus structural data (credit, term structure, sectors, GO), with rival explanations stated and the limits of one's own account marked",
        "Running a VAR and declaring ABCT confirmed when p < 0.05",
      ],
      answer: 2,
      explain: "The five-item checklist: full narrative, structural data first, fair treatment of rivals, honest boundaries, checkability. A refuses to quantify, B cherry-picks, D makes the regression the judge.",
    },
    {
      q: "Reading a mainstream VAR paper as an Austrian, the most valuable sections to read are:",
      options: [
        "The concluding sentence of the abstract",
        "The data section and the robustness section — the first gives facts, the second exposes how fragile the conclusion is",
        "The authors' affiliations and the journal's ranking",
        "The literature review in the introduction",
      ],
      answer: 1,
      explain: "Data are history and can be used directly; robustness checks reveal how the conclusion shifts when identification assumptions change — exactly what the Lucas critique and the “no constants” argument care about.",
    },
  ],

  further: [
    { label: "Mises, Theory and History (1957) — the original statement of theory vs history, Verstehen and thymology (full text, Mises Institute)", url: "https://mises.org/library/book/theory-and-history-interpretation-social-and-economic-evolution" },
    { label: "Rothbard, America's Great Depression (1963) — the template of theory plus history (full text)", url: "https://mises.org/library/book/americas-great-depression" },
    { label: "Hayek, “The Pretence of Knowledge” (Nobel lecture, 1974) — complex phenomena and pattern prediction", url: "https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/lecture/" },
    { label: "Higgs, “Regime Uncertainty” (The Independent Review, 1997) — the classic marriage of Verstehen and data", url: "https://www.independent.org/publications/tir/article.asp?id=430" },
    { label: "Powell, “Explaining Japan's Recession” (QJAE, 2002) — the Austrian account of the Japanese case", url: "https://mises.org/library/explaining-japans-recession" },
  ],
};
