export default {
  id: "writing-argument",
  stage: 14,
  order: 2,
  title: "Writing & Argument: Clear like Mises, Humble like Hayek",
  difficulty: "mastery",
  prereqs: ["five-step-analysis"],

  oneLiner:
    "By now you own a full Austrian toolkit. But **an analysis only exists once it is written down, understood by someone who does not already agree, and able to survive a reply.** The characteristic Austrian writing failures are two virtues gone wrong: Mises's clarity hardened into dogma (“praxeology has proved…”) and Hayek's humility thrown away in favor of dated prophecy (“the dollar goes to zero by 2023”). This lesson gives you a working method: **no hedging on the logic, real hedging on the application**; steelman the opponent until he nods, then reply; translate every term into plain English; let data illustrate rather than “prove.” Finally we borrow real craft from Hazlitt, Bastiat, Leonard Read and Hayek.",

  intuition: `
Read two paragraphs about the same event — a central bank cutting rates.

Paragraph one: “Praxeology shows that artificially lowering the interest rate must cause malinvestment; this is an a priori truth that no data can refute. The Fed's money printing is theft from savers, and the collapse is only a matter of time — 2026 at the latest.”

Paragraph two: “The interest rate is the price savers and borrowers agree on for ‘how long are you willing to wait.’ When the central bank pushes it to 1%, it tells every entrepreneur ‘society is willing to wait longer’ — but savers have not actually saved more. So the projects that only looked profitable at 1% — a data center that earns nothing for ten years, a third vacation home — get started. That step is logic, and I will not water it down. But how many projects get misdirected, in which year the error surfaces, and in what form, depend on money demand, fiscal policy and outside shocks that I cannot see in full. What I expect is a pattern: prices rise first where the new money lands first, and long projects get hurt more than short ones. If, ten years from now, a 1% rate has produced no rise in the share of long-dated projects, I will conclude the theory failed in this case.”

The theory in both paragraphs is identical. **Nobody will be persuaded by the first; some readers will be persuaded by the second.** The difference is not the position — it is the writing. The first paragraph mixes what is logically certain with what is empirically uncertain, uses vocabulary in place of argument, substitutes a moral verdict for a description, and attaches a date that will inevitably be thrown back in the author's face. The second translates every term, separates logic from application, and says what it predicts, what it does not predict, and what would change the author's mind.

That is the whole lesson. Mises's virtue is **clarity**: define your terms, one claim per paragraph, no hedging on deductive conclusions. Hayek's virtue is **humility**: acknowledge the limits of knowledge, make “pattern predictions” rather than “point predictions,” settle for an “explanation of the principle.” **Clarity belongs to the theory layer; humility belongs to the application layer.** They do not compete — they are the two wings of a good essay. Stage 2.1 and Stage 2.2 explained why the core Austrian laws are a priori and not confirmed by statistics; Stage 13.1 explained that Austrian empirical work “explains rather than tests”; Stage 14.1 gave you a five-step method for analyzing any policy. This lesson is about turning all of that **into prose**.

Why does this deserve its own lesson? Because the Austrian School's public reputation was, to a large degree, written badly rather than thought badly. The same ABCT is rigorous capital-based macro in Garrison's hands and “Fed conspiracy plus doomsday countdown” on certain blogs. A reader who cannot tell the two apart files the first under the second. Stage 14.4 catalogues the failed hyperinflation calls and the permabear reflex — and nearly every entry traces back to a writing error covered here: confusing theory with application, replacing a pattern with a date, replacing a mechanism with a moral.

There is also a practical reason: **the capstone in Stage ∞.3 asks you to write an Austrian analysis by hand.** This lesson is the style manual for that essay.

**In this lesson we break it into six pieces:**

- **① Two virtues: Mises's clarity and Hayek's humility**
- **② The skeleton of an Austrian essay: question → theory → application → what would change my mind**
- **③ Steelman first, then reply: write the opponent until he nods**
- **④ Three bad habits and their rewrites: jargon-as-argument, moralizing, dated prophecy**
- **⑤ Writing for non-Austrians: a translation table and five rhetorical failures**
- **⑥ Handling data honestly, and learning craft from the masters**
`,

  mechanics: `
### ① Two virtues: Mises's clarity and Hayek's humility

Mises's prose has an unusual **hardness**. Read the first chapter of *Human Action* (1949) and you will notice three habits:

- **Define before you use.** “Action,” “end,” “means,” “exchange” are all defined before they carry weight. He never assumes the reader “roughly knows.” For your own writing: every word that bears argumentative load gets a sentence, at first appearance, of the form “by X I mean …”.
- **One claim per paragraph.** A Mises paragraph usually does one thing: state a proposition, then derive it. He does not stack three layers of meaning into one block. Rule of thumb: if your paragraph contains two “moreover”s, it is probably two paragraphs.
- **No hedging on deductions.** Mises never writes “credit expansion may perhaps tend, to some degree, to distort the structure of production.” He writes: “Credit expansion necessarily distorts the structure of production.” Because the claim follows from the logic of action, hedging it is not modesty — it is dishonesty, pretending a deductive conclusion is a statistical estimate.

But his refusal to hedge has a sharp boundary: **it covers logic, not application.** Throughout *Human Action* he insists that economics cannot tell you how long a credit expansion will run, when the boom turns to bust, or which industries will be hit hardest — those depend on the concrete historical situation and belong to *Verstehen* (Stage 2.3), not to theory. **Certain about the logic, cautious about the application** is not two styles; it is one honesty operating on two layers.

Hayek supplied the other half. In “Degrees of Explanation” (1955) and “The Theory of Complex Phenomena” (1964) he distinguished two kinds of prediction: **point predictions** (“CPI will rise 4.2% next year”) and **pattern predictions** (“after a credit expansion, the share of long-dated projects rises, and prices rise first in the sectors that receive the new money first”). For a system of “organized complexity” like an economy, we can usually only do the second — not from laziness, but because the variables that fix the exact numbers are too many, and most of them live in other people's heads (the knowledge problem of Stage 7.2). He also proposed the “explanation of the principle”: we can explain **how** a phenomenon is possible without being able to say **when** it will occur. His 1974 Nobel lecture, “The Pretence of Knowledge,” pushed the point to its conclusion: pretending to make point predictions is the most unscientific thing an economist can do.

Put the two men on one chart:

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Clarity for the theory layer, humility for the application layer</text><line x1="90" y1="260" x2="600" y2="260" stroke="var(--line)" stroke-width="1.5"/><line x1="90" y1="260" x2="90" y2="50" stroke="var(--line)" stroke-width="1.5"/><text x="345" y="288" text-anchor="middle" font-size="11" fill="var(--muted)">→ Are you talking theory (deduction) or application (specific timing, size, sector)?</text><text x="22" y="150" text-anchor="middle" font-size="11" fill="var(--muted)" transform="rotate(-90 22 150)">Tone: hedged ← → unhedged</text><rect x="110" y="60" width="220" height="90" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="220" y="88" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">Mises zone: theory × unhedged</text><text x="220" y="108" text-anchor="middle" font-size="10.5" fill="var(--ink)">“Credit expansion must distort production.”</text><text x="220" y="126" text-anchor="middle" font-size="10.5" fill="var(--muted)">define terms · one claim per paragraph</text><rect x="360" y="160" width="220" height="90" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="470" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="var(--blue)">Hayek zone: application × hedged</text><text x="470" y="208" text-anchor="middle" font-size="10.5" fill="var(--ink)">“I expect a pattern, not a date.”</text><text x="470" y="226" text-anchor="middle" font-size="10.5" fill="var(--muted)">pattern predictions · what would change me</text><rect x="360" y="60" width="220" height="90" rx="8" fill="var(--red-soft)" stroke="var(--red)" stroke-dasharray="5 3"/><text x="470" y="88" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)">Dogma zone: application × unhedged</text><text x="470" y="108" text-anchor="middle" font-size="10.5" fill="var(--ink)">“The dollar must hit zero before 2026.”</text><text x="470" y="126" text-anchor="middle" font-size="10.5" fill="var(--muted)">dated prophecy · the failure list of Stage 14.4</text><rect x="110" y="160" width="220" height="90" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-dasharray="5 3"/><text x="220" y="188" text-anchor="middle" font-size="12" font-weight="700" fill="var(--muted)">Mush zone: theory × hedged</text><text x="220" y="208" text-anchor="middle" font-size="10.5" fill="var(--ink)">“Credit expansion may perhaps tend to…”</text><text x="220" y="226" text-anchor="middle" font-size="10.5" fill="var(--muted)">a deduction dressed up as a statistic</text></svg><figcaption>The horizontal axis asks “theory or application?”; the vertical axis asks “should the tone be hedged?” Good essays live in the top-left and bottom-right cells. Dogma lives top-right; mush lives bottom-left.</figcaption></figure>

The chart is a tool, not a decoration: **after every paragraph, ask which cell it sits in.** Top-right: delete the date, replace it with a pattern. Bottom-left: delete the “perhaps,” write the deduction hard.

### ② The skeleton of an Austrian essay: question → theory → application → what would change my mind

A good Austrian analysis has a reusable skeleton in four parts:

<figure><svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The four-part skeleton of an Austrian analysis</text><g><rect x="20" y="50" width="135" height="100" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="87" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">1 · Question</text><text x="87" y="94" text-anchor="middle" font-size="10" fill="var(--muted)">one sentence:</text><text x="87" y="108" text-anchor="middle" font-size="10" fill="var(--muted)">who, which policy,</text><text x="87" y="122" text-anchor="middle" font-size="10" fill="var(--muted)">how big a change,</text><text x="87" y="136" text-anchor="middle" font-size="10" fill="var(--muted)">which margins</text></g><path d="M158 100 L178 100" stroke="var(--orange)" stroke-width="2"/><g><rect x="182" y="50" width="135" height="100" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="249" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">2 · Theory</text><text x="249" y="94" text-anchor="middle" font-size="10" fill="var(--ink)">define the terms</text><text x="249" y="108" text-anchor="middle" font-size="10" fill="var(--ink)">deduce from action</text><text x="249" y="122" text-anchor="middle" font-size="10" fill="var(--ink)">no hedging</text><text x="249" y="136" text-anchor="middle" font-size="10" fill="var(--muted)">(Mises zone)</text></g><path d="M320 100 L340 100" stroke="var(--orange)" stroke-width="2"/><g><rect x="344" y="50" width="135" height="100" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="411" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--blue)">3 · Application</text><text x="411" y="94" text-anchor="middle" font-size="10" fill="var(--ink)">who is marginal</text><text x="411" y="108" text-anchor="middle" font-size="10" fill="var(--ink)">which margin adjusts</text><text x="411" y="122" text-anchor="middle" font-size="10" fill="var(--ink)">pattern, not date</text><text x="411" y="136" text-anchor="middle" font-size="10" fill="var(--muted)">(Hayek zone)</text></g><path d="M482 100 L502 100" stroke="var(--orange)" stroke-width="2"/><g><rect x="506" y="50" width="120" height="100" rx="8" fill="var(--green-soft)" stroke="var(--green)"/><text x="566" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--green)">4 · What would</text><text x="566" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="var(--green)">change my mind</text><text x="566" y="110" text-anchor="middle" font-size="10" fill="var(--ink)">describe the disproof</text><text x="566" y="124" text-anchor="middle" font-size="10" fill="var(--ink)">state the theory's limits</text><text x="566" y="138" text-anchor="middle" font-size="10" fill="var(--muted)">(source of credibility)</text></g><path d="M249 152 L249 190 L411 190 L411 152" fill="none" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/><text x="330" y="208" text-anchor="middle" font-size="10.5" fill="var(--red)">The seam between 2 and 3 is where the smuggling happens: theory's certainty lent to application's guesses</text></svg><figcaption>Four parts. The theory section borrows Mises's hardness, the application section Hayek's softness, and the fourth section is what decides whether the reader trusts you.</figcaption></figure>

Walk it through on a real topic. Suppose a city raises its minimum wage from $12 to $18 — a 50% increase.

**1 · Question.** “After the rise to $18, what happens to the employment, hours and benefits of workers in this city who currently earn between $12 and $18?” Notice the question already fixes the population (people in the $12–18 band) and the dimensions (not just “the unemployment rate”). A vague question — “is the minimum wage good?” — cannot produce a good essay.

**2 · Theory.** A wage is an employer's estimate of a worker's **marginal product**, and that estimate ultimately comes from what consumers will pay for the output (the imputation of Stage 1.1). A law forbidding employment below $18 forbids every job the employer values below $18. That step is logic; I add no “perhaps.” But **adjustment does not run only along the “fire people” margin**: employers can cut hours, drop the free meal, raise hiring standards, bring forward the self-order kiosk, demand more from existing staff, or raise prices and pass the cost to customers — every one of those is a “forbidden trade” finding another exit (Stage 8.2). What theory tells me is: **some margin will adjust. Theory does not tell me which.**

**3 · Application.** Who are this city's marginal workers? Most likely inexperienced teenagers, part-timers in small restaurants and retail, recent immigrants with weak language skills. Which margin will give? Look at local conditions: if restaurants are highly competitive and customers price-sensitive, the “raise prices” exit is closed, and hours and kiosks become more likely. Timing: contracts and menu costs delay the effect; the sharpest moment will be the year employers **replace equipment**. What I am making here is a pattern prediction — “the effect lands on the $12–18 band, mostly as hours and benefits, showing up gradually over one to three years” — not “unemployment rises by 0.8 points.”

**4 · What would change my mind.** If low-wage employers in this city have strong **monopsony** power (workers find it hard to switch employers), and the old $12 sat well below workers' marginal product, then a rise inside that gap might not reduce employment — this is exactly the claim of Card and Krueger's 1994 New Jersey fast-food study. So my judgment is conditional: **the larger the increase, the closer it comes to the local median wage, and the more competitive the employers, the clearer the negative effect.** For a rise from $12 to $13 I would predict no visible consequence at all. If, three years after the $18 floor, total hours in the affected band have not fallen relative to comparable cities and employers have not accelerated automation, I will conclude the monopsony story is the stronger explanation in this case.

The writer who includes part four is **more** credible than the one who stops at three, not weaker. It does two things: it shows you understand the theory's domain of validity (the last step of the five-step method in Stage 14.1), and it hands the reader something to check.

### ③ Steelman first, then reply: write the opponent until he nods

A steelman is the opposite of a strawman: **you write the opponent's position in the strongest form he himself would write it**, and only then reply. Austrians need this step more than most, because our conclusions so often run against the mainstream that a reader's default suspicion is “you never understood the other side.”

Take a Keynesian stimulus argument in weak and strong form.

**Weak (strawman):** “Keynesians believe the government can create wealth by spending money, and where the money comes from does not concern them. They think digging holes and filling them in again makes an economy prosper.”

Three things are wrong with this. No serious Keynesian would sign it; “digging holes” was Keynes's own sarcastic extreme case, not his proposal; and any mainstream reader has already closed the tab.

**Strong (steelman):** “In a demand-collapse recession — 2009, say — enormous resources are idle: workers unemployed, machines stopped, warehouses full. The private sector, facing uncertainty, deleverages and hoards cash all at once, and everyone's individual prudence adds up to a collective slump. If the government now borrows the savings nobody is willing to spend and spends them, it is using **resources nobody else was using**; the opportunity cost is close to zero. Recipients spend again, so the multiplier exceeds one. The strongest version adds its own limits: stimulus should be temporary, aimed at idle resources, and it works best when the interest rate is already at the zero lower bound and monetary policy is exhausted — Krugman's liquidity-trap argument since 1998.”

At this point a Keynesian nods: “Yes, that is what I mean.” **Now you have earned the right to reply.**

**The reply:** the load-bearing wall of this argument is “idle resources have near-zero opportunity cost.” The Austrian answer starts from heterogeneous capital (Stage 3.4): what sat idle in 2009 was not abstract “resources” but **construction workers, real-estate development capital and the supply chain built around them** — idle precisely because consumers had voted with their feet that they did not want that many houses. If government spending locks those resources back into the old structure, the opportunity cost is not zero: it is **delayed liquidation and re-allocation** (Stage 5.3). If the money is spent elsewhere, it competes with the private sector for resources and credit that are not idle at all, and whoever receives the new money first gains at the expense of whoever receives it last (the Cantillon effect of Stage 4.3). As for “everyone's prudence adds up to a slump” — Austrians accept the phenomenon (the older Hayek called it a “secondary deflation” and conceded there was a case for preventing the money stock from collapsing), but read it as a **symptom** of the preceding credit expansion, not an independent disease; treating the symptom while ignoring the cause buries the next cycle inside this cycle's medicine. Stage 11.1 gives the full comparison.

Watch the mechanics of the reply: **attack only the load-bearing wall** (the opportunity cost of idle resources), not the trim; **concede what the opponent gets right** (secondary deflation is real); **use the opponent's own example** (2009) rather than switching to one that favors you.

### ④ Three bad habits and their rewrites: jargon-as-argument, moralizing, dated prophecy

The three most common Austrian writing diseases, each with a before-and-after.

**Disease one: jargon as argument.** A technical term is a compressed argument, not an argument. To a reader outside the school, “praxeology proves…” sounds exactly like “because I say so.”

- Before: “According to praxeology, the minimum wage necessarily causes unemployment; this is an a priori truth that requires no data.”
- After: “A wage is an employer's estimate of how much more money a worker will earn for him. A law forbidding employment below $18 forbids every job valued below $18. That step needs no data — it is the same logic as ‘if it is illegal to sell apples below $18, nobody sells a $15 apple.’ But **how many jobs fall inside that band, and along which margin employers adjust**, are empirical questions, and I estimate them below from the city's wage distribution.”

The rewrite never uses “praxeology” or “a priori,” yet not a gram of their content is lost — and for the first time the reader understands what “a priori” meant: **the step that needs no data has been separated from the step that does.**

**Disease two: moralizing.** Austrian arguments draw their power from mechanisms, not adjectives. The moment you write “theft” or “crime,” the reader either already agrees (and did not need persuading) or files you under “ideology.”

- Before: “Central bank money printing is naked theft from savers, a crime by the state against the people.”
- After: “When the central bank expands the money supply, the new money reaches primary dealers, government contractors and well-collateralized borrowers first, and fixed-salary earners and depositors last. Those at the front buy at old prices; those at the back face prices that have already risen. This is a **redistribution nobody voted on**, running from late receivers to early receivers. The reader can decide whether to call that ‘theft’; I only describe who gains, who loses, and by what route.”

The rewrite is more damaging, not less — because the reader reaches the moral verdict **himself**.

**Disease three: dated prophecy.** This is the number-one killer of the Austrian public image (Stage 14.4). Theory gives you a pattern, not a timestamp; writing down a date means underwriting Mises's theory with exactly the point prediction Hayek said is impossible.

- Before: “The Fed's 2020 money flood will unleash hyperinflation before 2023 and the dollar will go to zero.”
- After: “In 2020–21 broad money in the United States grew by roughly 25% in a year, the fastest of the postwar era. On the theory this raises prices and distorts relative prices, with the sectors that receive the new money first — assets, then consumer goods — rising first. The theory does **not** tell me the timing or the size, because those depend on how people's willingness to hold cash changes. Hyperinflation requires an extra condition — a collapse in the public's demand for money, Mises's crack-up boom — and there is no sign of it. If within two years consumer prices have not risen noticeably faster than in the 2010s, I will re-examine whether money demand absorbed the entire expansion.”

In hindsight the rewrite was borne out in 2021–23 (Stage 13.4); the original was humiliated. **Same theory; the writing decided whether it was vindicated or mocked.**

### ⑤ Writing for non-Austrians: a translation table and five rhetorical failures

Austrian vocabulary is shorthand inside the school and a wall outside it. When writing for non-Austrians, translate every term into one plain sentence the first time it appears — and you will often find the term never needs to appear again.

- **Malinvestment** → projects that only looked profitable at 1%
- **Cantillon effect** → whoever gets the new money first wins
- **Time preference** → how steeply you discount next year's dollar
- **Economic calculation** → without prices you cannot add up apples and steel
- **Knowledge problem** → nobody knows everything, and prices let people who don't know coordinate anyway
- **A priori** → a conclusion you can reach without data, like “both sides of a voluntary trade expect to gain”
- **Natural rate of interest** → the rate savers and borrowers would settle on if nobody intervened
- **Credit expansion** → banks lending out money nobody actually saved
- **Liquidation** → repricing, selling off and re-purposing the projects that were mistakes
- **Spontaneous order** → order nobody designed but everybody helped grow, like a language

**Rule: a term may reappear as an abbreviation after its translation, never instead of one.** A good test: hand the essay to a clever friend who is not an economist and ask what each bold word means.

Now the five most common rhetorical failures. What they share is this: **each substitutes something for an argument.**

- **Appeal to Mises (appeal to authority).** “Mises proved long ago that socialism is impossible.” Mises's 1920 paper is an argument; his name is not. If the reader does not accept Mises, you have said nothing; if he does, you have merely repeated. The correct form **restates the argument**: “Without a market for capital goods there are no prices for capital goods; without prices a planner cannot compare two production plans and see which one wastes less — not a shortage of computing power, but a shortage of numbers to compute with.” (Stage 7.1)
- **Gotcha quoting.** Quoting Keynes's “in the long run we are all dead” to show he did not care about the future is a misquotation by omission — the sentence attacks the classical habit of answering today's storm with “it will right itself in the long run.” Quoting Krugman's 1998 miss on the internet to dismiss his macroeconomics is equally irrelevant: being wrong about A does not make someone wrong about B. Rule: **quote only what bears on the claim, and quote the context.**
- **Conspiracy framing.** “The Fed exists to make bankers rich.” The Cantillon effect is a **structural consequence** that happens with no malice from anyone — which is exactly what makes it persuasive. Framing it as a conspiracy swaps a testable mechanism for an untestable motive, and reads as storytelling.
- **“The mainstream is stupid.”** Samuelson, Friedman and Krugman were not short of intelligence. The disagreement is about method (Stage 2.4): they treat economics as models calibrated on data; Austrians treat it as theory deduced from the logic of action. Recasting a methodological dispute as an IQ gap makes the reader (correctly) suspect you never understood the other side.
- **The motte-and-bailey between theory and application.** You first claim “this rate cut will trigger a crash within two years” (a bold applied claim — the bailey). Challenged, you retreat to “credit expansion necessarily distorts the structure of production” (a secure theoretical claim — the motte). When the pressure passes, you return to the bailey. This is the most insidious and most credibility-destroying move in Austrian writing. The cure is the skeleton of ②: **write the theory section and the application section separately, and make every sentence know which section it belongs to.**

### ⑥ Handling data honestly, and learning craft from the masters

Stage 13.1 set the Austrian rule for data: **illustrate, don't prove.** In writing, that becomes three disciplines.

**First, show the counter-series.** If you put up a 2020–23 chart of “M2 growth vs CPI” to illustrate that monetary expansion raises prices, you must also put up the 2009–19 chart — M2 grew through that decade too, and CPI stayed tame. Then explain the difference: in 2009–19 most of the new money became excess bank reserves and a higher public willingness to hold cash (rising money demand absorbed the supply); in 2020–21 it went straight into household accounts. Show only the favorable chart and, the moment the reader finds the other one, your entire argument is under suspicion.

**Second, say what the theory predicts and what it does not.** The non-neutrality of money predicts that new money changes relative prices and the structure of production. It does not predict a specific CPI reading, the month of the turn, or that any particular index must rise (if money demand rises in step, the price level can stay flat and the theory still holds, because relative prices were still distorted). Writing down “what it does not predict” is not weakness; it tells the reader which data **could** refute you and which **could not**.

**Third, say “about.”** Numbers you are not certain of get “about 25%,” “roughly doubled.” A figure quoted to two decimals that turns out wrong makes the reader doubt your logic along with your arithmetic.

Finally, a few lessons in craft from five Austrian classics — not what they said, but **how they wrote it**.

- **Hazlitt, Economics in One Lesson (1946).** The whole book has one thesis (look at all groups, and at the long run), and each chapter applies it to one fallacy: tariffs, minimum wages, rent control, machines destroying jobs … Chapters are short, examples concrete, terminology almost absent. What to steal: **structure** — one principle, applied again and again, each time in a setting the reader already knows.
- **Bastiat, “What Is Seen and What Is Not Seen” (1850).** The broken-window parable turns opportunity cost into a picture: everyone sees the six francs the glazier receives; nobody sees the six francs the cobbler never got. What to steal: **give the invisible thing a name.** Nearly every Austrian argument is about something unseen — the project never started, the worker never hired, the liquidation that never happened — and the reader needs an image to “see” it.
- **Bastiat, “The Candlemakers' Petition” (1845).** Candlemakers petition the government to board up every window to protect them from the unfair competition of the sun. What to steal: **reductio ad absurdum** — push the opponent's logic, unaltered, to its own conclusion and let the absurdity appear by itself. Ten times stronger than a direct rebuttal, provided the push is **fair** (which makes it a second use of the steelman).
- **Leonard Read, “I, Pencil” (1958).** A pencil narrates its own family tree in the first person: loggers, graphite mines, rubber plantations, the lacquer works … “no single person on the face of this earth knows how to make me.” The words “knowledge problem” and “spontaneous order” never appear, yet the reader feels both in his bones. What to steal: **narrate instead of asserting** — let the reader reach the conclusion himself.
- **Hayek, “The Use of Knowledge in Society” (1945).** It opens by asking “what is the problem we wish to solve?” and reopens a question the reader thought was settled; its middle explains the entire price system with one example about tin (Stage 7.2); it states the planners' case with scrupulous fairness; and when it finally calls the price system a “marvel,” the tone is wonder, not sermon. What to steal: **a humble voice can carry the strongest argument.** That essay changed how the discipline thinks about prices, and it never once says “I have proved.”

The whole lesson in one line: **theory section like Mises, application section like Hayek, opponent section like a steelman, vocabulary like a translator, data like a witness rather than a lawyer.** Stage 14.3 shows how the three Austrian lines differ in their writing style; Stage ∞.2 treats writing as one Austrian career path; and the capstone in Stage ∞.3 is where you use this skeleton for real.
`,

  demo: "argument-builder",

  analogy: `
Think of writing an Austrian analysis as **arguing a case in court.**

**The theory section is the statute.** You cite it without “perhaps”: “Section X of the contracts act provides …” — you would never say “the contracts act may tend to hold.” Mises's clarity is that register: it comes from the logic, not from your self-confidence.

**The application section is the statement of facts.** Here you must be humble: witnesses misremember, cameras have blind spots. You cannot say “the defendant necessarily fired at 9:15”; you can say “the pattern of evidence places the defendant on the premises between 9:00 and 9:30.” Hayek's pattern prediction is that register: it comes from honesty about the limits of the evidence, not from timidity.

**The steelman is letting opposing counsel finish.** A lawyer who interrupts and answers only a version he invented is not believed by the jury — not because he is wrong, but because he looks afraid to listen.

**The translation table is speaking to the jury.** Jurors do not know “a priori” or “Cantillon” any more than they know “procedural defect.” Translate or lose.

**Data are witnesses, not lawyers.** You may call witnesses, but you may not call only the helpful ones, and you may not put words in their mouths (“this chart proves …”). An honest lawyer says: “This witness's testimony establishes X; it cannot establish Y.”

**“What would change my mind” is the moment you say, in open court, “if the other side can produce Z, my charge fails.”** The jury's trust in you goes up at that moment, not down — because only a lawyer who actually believes his case dares to say it.

A lawyer who comes without the statute is ignorant; one who ignores the facts is dogmatic; one who will not listen to the other side is cowardly; one who will not translate is arrogant; one who calls only friendly witnesses is dishonest. Those five faults are exactly the bad habits of ④ and ⑤. **A good Austrian analysis is a trial you would be willing to sit through as a juror.**
`,

  misconceptions: [
    "**“Austrian theory is a priori, so I don't need to hedge the application either.”** — The a priori covers the deduction (credit expansion necessarily distorts the structure of production), not the application (which year, which sector, how large). Writing the application as hard as the theory is the common origin of every failed prophecy in Stage 14.4; Mises himself said plainly that theory cannot tell you how long a boom will last.",
    "**“Hedging drains the force from an essay; readers want certainty.”** — Readers want credibility. An author who writes the logic hard, the application soft, and says what would change his mind is more convincing than one who is certain about everything, because the reader can see the first author knows what he is and is not claiming. Hayek's 1945 essay never says “I have proved” and it changed the discipline.",
    "**“Steelmanning gives points to the opponent and weakens my case.”** — The reverse. An essay that attacks only strawmen persuades nobody who does not already agree; writing the opponent until he nods, then attacking only the load-bearing wall, is the only way to move readers from the other camp. And the steelman usually shows you where your own argument is actually thin.",
    "**“Words like ‘theft’ and ‘crime’ make the reader feel how serious the problem is.”** — Moral vocabulary sorts readers into two teams: those who already agree do not need it, and those who do not immediately file you under ideology. Describing the mechanism (who gets the new money first, who last, by what route) lets the reader reach the moral verdict himself — and a verdict he reached is far sturdier than one you handed him.",
    "**“Data either prove the theory or are useless, so it's enough to show the chart that supports me.”** — Stage 13.1: Austrians use data to illustrate, not to prove. Show only the favorable chart and, once the reader sees the counter-series (M2 rising while CPI stayed flat in 2009–19), the whole essay is suspect. The honest form shows the counter-series, explains it (money demand absorbed the new money), and states what the theory predicts and what it does not.",
  ],

  quiz: [
    {
      q: "Which of these sentences sits in the “dogma zone” (application layer × unhedged)?",
      options: [
        "“Credit expansion necessarily distorts the structure of production.”",
        "“After this rate cut, the share of long-dated projects will rise and prices will rise first in the sectors that receive the new money first.”",
        "“The dollar must hit zero before 2026.”",
        "“If total hours in the affected wage band have not fallen after three years, I will re-examine the monopsony explanation.”",
      ],
      answer: 2,
      explain: "A is a theory-layer deduction and is rightly hard; B is a pattern prediction; D is a “what would change my mind.” Only C applies theory-layer certainty to an **application-layer** specific (timing and magnitude) — exactly the point prediction Hayek said is impossible.",
    },
    {
      q: "Which of the following is a steelman, not a strawman, of the Keynesian stimulus argument?",
      options: [
        "“Keynesians think government spending creates wealth and don't care where the money comes from.”",
        "“They believe digging holes and filling them in brings prosperity.”",
        "“In a demand-collapse recession, idle resources have near-zero opportunity cost; the government borrows savings nobody will spend, recipients spend again so the multiplier exceeds one; it works best at the zero lower bound.”",
        "“Keynes himself said in the long run we are all dead, so he didn't care about the future.”",
      ],
      answer: 2,
      explain: "C is a version a Keynesian would sign (idle resources, opportunity cost, the multiplier, the liquidity trap). A and B are strawmen; D is gotcha quoting. The reply should attack only C's load-bearing wall — “near-zero opportunity cost” — using heterogeneous capital.",
    },
    {
      q: "“According to praxeology, the minimum wage necessarily causes unemployment; this is an a priori truth that needs no data.” What is the main writing problem?",
      options: [
        "The conclusion is wrong; minimum wages do not affect employment",
        "It uses vocabulary in place of argument and blurs the data-free logical step together with the data-dependent applied step",
        "The tone is too soft; it should be more emphatic",
        "It fails to quote Mises directly",
      ],
      answer: 1,
      explain: "To a reader outside the school, “praxeology proves” means “because I say so.” The rewrite restates the argument (a wage is an estimate of marginal product; forbidding employment below $18 forbids every job valued below $18) and marks “how many jobs fall in the band, and which margin adjusts” as empirical.",
    },
    {
      q: "What is the “motte-and-bailey” between theory and application?",
      options: [
        "Stating the theory before applying it — the correct essay structure",
        "Making a bold applied prophecy, retreating to the secure theoretical claim when challenged, then returning to the prophecy once the pressure passes",
        "Hedging the theory while leaving the application unhedged",
        "Quoting an opponent while deliberately dropping the context",
      ],
      answer: 1,
      explain: "The motte-and-bailey lends theory's certainty to application's guesses. The cure is the four-part skeleton: write theory and application in separate sections, let every sentence know where it belongs, and state in part four what would change your mind.",
    },
    {
      q: "You want to use a 2020–23 chart of M2 vs CPI to illustrate that monetary expansion raises prices. By this lesson's data discipline, what else must you do?",
      options: [
        "Adjust the axes until the correlation looks strongest",
        "Also show the 2009–19 counter-series where M2 rose and CPI stayed flat, explain the difference in money demand, and state what the theory does and does not predict",
        "Drop the data entirely, since Austrian theory is a priori",
        "Caption the chart “this proves ABCT”",
      ],
      answer: 1,
      explain: "Stage 13.1: data illustrate, they do not prove. Volunteer the counter-series and explain it (in 2009–19 the new money was absorbed by excess reserves and higher cash holdings), and say that non-neutrality predicts relative-price distortion, not a specific CPI print — so the reader knows which data could refute you and which could not.",
    },
  ],

  further: [
    { label: "Henry Hazlitt, Economics in One Lesson (1946) — the model of one principle applied again and again (full text, Mises Institute)", url: "https://mises.org/library/book/economics-one-lesson" },
    { label: "Frédéric Bastiat, “What Is Seen and What Is Not Seen” (1850) — naming the invisible (Econlib)", url: "https://www.econlib.org/library/Bastiat/basEss.html" },
    { label: "Bastiat, Economic Sophisms — includes “The Candlemakers' Petition” (1845), the textbook reductio (Econlib)", url: "https://www.econlib.org/library/Bastiat/basSoph.html" },
    { label: "Leonard Read, “I, Pencil” (1958) — narration instead of assertion (FEE)", url: "https://fee.org/ebooks/i-pencil/" },
    { label: "F. A. Hayek, “The Use of Knowledge in Society” (1945) — a humble voice carrying the strongest argument (Econlib)", url: "https://www.econlib.org/library/Essays/hykKnw.html" },
  ],
};
