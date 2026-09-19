export default {
  id: "what-economics-studies",
  stage: 0,
  order: 1,
  title: "What Economics Studies: Scarcity, Choice & Human Action",
  difficulty: "intro",
  prereqs: [],

  oneLiner:
    "Most people assume economics is about money, the stock market, GDP, or how a large machine called “the economy” runs. It is about none of those. Economics studies something plainer and far more universal: **you always want more than you can have, so you must choose — and choosing means giving something up.** Scarcity forces choice; choice reveals your real ranking; behind the ranking stands a person with purposes. From that starting point the Austrian School rebuilt the whole of economics. This lesson pins down the starting point: economics is not the science of money, it is the science of **human action**.",

  intuition: `
Start with something that will happen tonight. A university student gets back to her room at 6 p.m. and has to be asleep by midnight — she has **6 hours**. There are five things she wants to do, ranked in her own head: ① revise for tomorrow's exam (2 hours); ② finish a freelance design job worth $60 (2 hours); ③ go to the gym (1 hour); ④ call her parents (half an hour); ⑤ watch two episodes of a series (1.5 hours). The wish list adds up to **7 hours**.

Six hours cannot hold seven hours of wishes. So she must **give something up**. Which one? Not at random — she starts cutting from the bottom of her own list: the series goes first, or gets trimmed to one episode. If a surprise assignment eats an hour and she has only 5, the gym goes too. Down to 4 hours and she faces a painful trade between the freelance job and the revision.

That perfectly ordinary evening contains every element of economics:

- **Scarcity**: 6 hours of means, 7 hours of ends. Note that scarcity is not poverty — a billionaire's day is also 24 hours long, and his list of wants is longer, not shorter. **Scarcity is everyone's condition, not some people's condition.**
- **Choice**: because of scarcity she must pick. Picking means some things **do not happen**.
- **Ranking**: the order in which she cuts reveals her real preferences — not what she says, but what she does.
- **Ends and means**: the 6 hours are **means**; the five items are **ends**. Economics is about how people allocate limited means among ranked ends.

Now scale it up without changing its shape. A startup has $1.8 million in the bank and burns $100,000 a month — **an 18-month runway**. The founder wants to: finish the product (8 months), hire five more engineers (an extra $30,000 a month), run a marketing push ($300,000 one-off), open an overseas office, and keep a 6-month cushion in case the next fundraise fails. The wishes cost far more than 18 months of cash. What the founder does every day is structurally identical to the student's evening: **limited means, a queue of ends, cut from the back of the queue.**

So economics is **not about money**. Money is one kind of means, and a rather late-arriving one: Robinson Crusoe alone on his island has no money, yet he makes economic decisions every day — fish today, or build a net? Building the net means no fish today but three extra fish every day afterward. That is a pure economic problem with not a cent in it. Nor does economics study **a machine called “the economy”**: nobody has ever seen “the economy.” What you actually see are individual people choosing — buying a coffee, hiring, working late, quitting. “The economy” is the name for all those choices stacked together, not a thing with a will of its own.

Economics, in the shortest form: **the study of how people act purposefully under scarcity, and of what results when those actions combine — results that nobody intended.** The first half is this lesson. The second half takes the whole course: why nobody ever designed “prices,” yet prices coordinate billions of people (Stage 7.2); why nobody wants a recession, yet recessions keep coming (Stage 5.1); why no AI, however powerful, replaces the entrepreneur's judgment (Stage 18.3).

**In this lesson we break it into five pieces:**

- **① Scarcity → choice → ends and means: the skeleton of the economic problem**
- **② Robbins's definition and Mises's praxeology: where the boundary of economics lies**
- **③ Value-freedom: economics does not judge ends, it studies means**
- **④ Not money, not a machine: the two most common misunderstandings**
- **⑤ Micro and macro: why Austrians think that line is drawn by hand**
`,

  mechanics: `
### ① Scarcity → choice → ends and means: the skeleton of the economic problem

Abstract one level up from the student and you get a structure that no person in any era escapes:

- **Ends**: the states you want — pass the exam, have money, be healthy, be close to family, relax.
- **Means**: whatever brings you closer to those ends — time, energy, money, tools, knowledge.
- **Scarcity**: the means are not enough to satisfy every end at once.

Put the three together and **choice** is unavoidable: you must decide which ends come first, which wait, and which are dropped. And **the one you drop is the real cost of the choice you made** — the opportunity cost that Stage 1.4 develops.

Notice something crucial: **the ranking belongs to the person acting.** That the student puts “revise” first and “series” last is her business; someone else might reverse it. Economics does not tell you how you ought to rank (that is ethics, or a philosophy of life). It studies only: “given your ranking, what does scarcity force you to do?” This is why Austrians say **value is subjective**. Same 6 hours, same five items, and two people may allocate them completely differently — and neither has made an “error.” Stage 1.2 pushes the word “subjective” all the way down.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">One evening's economic problem: 6 hours vs 7 hours of wants</text><text x="60" y="52" font-size="11" fill="var(--muted)">Ends (ranked by the actor herself)</text><text x="480" y="52" font-size="11" fill="var(--muted)">Means: 6 hours</text><g><rect x="60" y="62" width="160" height="30" rx="5" fill="var(--orange)"/><text x="70" y="82" font-size="12" fill="#fff" font-weight="600">① Revise · 2h</text></g><g><rect x="60" y="98" width="160" height="30" rx="5" fill="var(--orange)" opacity=".85"/><text x="70" y="118" font-size="12" fill="#fff" font-weight="600">② Freelance job · 2h</text></g><g><rect x="60" y="134" width="80" height="30" rx="5" fill="var(--orange)" opacity=".7"/><text x="70" y="154" font-size="12" fill="#fff" font-weight="600">③ Gym · 1h</text></g><g><rect x="60" y="170" width="40" height="30" rx="5" fill="var(--orange)" opacity=".55"/><text x="106" y="190" font-size="12" fill="var(--ink)" font-weight="600">④ Call parents · 0.5h</text></g><g><rect x="60" y="206" width="120" height="30" rx="5" fill="var(--surface-2)" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/><text x="70" y="226" font-size="12" fill="var(--red)" font-weight="600">⑤ Series · 1.5h</text></g><text x="240" y="226" font-size="11" fill="var(--red)">← the dropped “marginal end”</text><rect x="480" y="62" width="40" height="180" rx="5" fill="var(--surface-2)" stroke="var(--line)"/><rect x="480" y="77" width="40" height="165" rx="5" fill="var(--orange)" opacity=".5"/><text x="530" y="78" font-size="11" fill="var(--muted)">6h filled</text><text x="530" y="250" font-size="11" fill="var(--muted)">1h short</text><line x1="230" y1="250" x2="470" y2="250" stroke="var(--line)" stroke-width="1"/><text x="320" y="285" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">Means run out → drop from the back of the queue → the dropped end is the true cost of the choice</text></svg><figcaption>Ends queue up by importance; the means (6 hours) fill the queue from the front. Whatever the means cannot reach is the dropped “marginal end.” Tighten scarcity (only 4 hours) and the cut reaches further up the list.</figcaption></figure>

One more number to feel what “scarcity tightens” means. The startup: 18 months of runway at $100,000 a month. The founder's ranked ends: finish the product (8 months, $800,000) → hire five engineers (an extra $30,000 a month from then on) → marketing ($300,000) → overseas office ($500,000) → 6-month cushion ($600,000). Do the first two and the burn is $130,000 a month; the remaining $1 million does not even reach month 8. He has to cut: the overseas office first, then marketing, then the hiring plan gets squeezed. **Each cut is scarcity forcing him to reveal his true priorities.** If the next round closes and the runway stretches to 30 months, the cut ends come back from the tail of the queue. What economics studies is exactly this logic of “add a little, take a little, and watch which ends cross the boundary” — that is what “marginal” means, and Stage 1.1 uses diamonds and water to make it unforgettable.

### ② Robbins's definition and Mises's praxeology: where the boundary of economics lies

Ask a textbook what economics studies and it will most likely quote the English economist Lionel Robbins, from his 1932 *Essay on the Nature and Significance of Economic Science*: **“Economics is the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses.”** That maps onto the skeleton above word for word: ends, means, scarcity, alternative uses (hence choice). Robbins was steeped in Vienna at the time — it was he who brought Hayek to the London School of Economics in 1931 — so the definition carries a strong Austrian flavor.

Mises, in *Human Action* (1949), went one step further. He named the method of economics **praxeology** — the general theory of **purposeful action**. Where is the difference?

- Robbins's definition still leaves the impression that there is a class of “economic behavior” (buying, selling, earning, saving) that economics studies, while “non-economic behavior” (falling in love, going to church, writing poetry) belongs to other disciplines.
- Mises says: **there is no such line.** Whenever you use means to pursue ends, you are economizing — the poet is allocating hours; the monastery must decide whether to fix the roof or buy books first. “Economic” is not a species of action; it is **the structure shared by all action.**

So for Mises economics is the most developed branch of praxeology: starting from the one undeniable point that “humans act purposefully” (the action axiom of Stage 2.1), it deduces exchange, prices, money, interest, and the cycle step by step. His reason for the starting point: you cannot deny that humans act purposefully, because denying it is itself a purposeful act. That foundation is firmer than any statistic, and the laws of economics are built on it. Stage 2.2 contrasts this road with the mainstream road of “state a hypothesis, gather data, test.”

A footnote worth having: Kirzner's first book, *The Economic Point of View* (1960), traces the whole history of the definition — from Adam Smith's “wealth,” through Marshall's “material welfare,” to Robbins's “scarcity,” to Mises's “action.” Over two centuries the **object** of economics migrates steadily from things to people.

### ③ Value-freedom: economics does not judge ends, it studies means

A common follow-up: “Does economics teach people to make money? To be selfish?” Neither.

Economics is **value-free** (the term is Max Weber's; Mises carried it through to the end). It **does not judge your ends**; it studies **whether the means will reach them.** You want to give your life savings to a cat shelter — economics does not call you foolish. You want to hoard gold for the apocalypse — economics does not call you clever. It answers one kind of question only: “If you want X, will doing Y get you X? And will it also get you Z, which you did not want?”

An example. Someone proposes: “So that the poor can afford housing, cap rents at half the market rate.” Economics has no comment on the end “the poor should be able to afford housing” — it is a good end, and nearly everyone agrees. Economics studies the means: once rent is pushed to half the market rate, how will landlords act? Tenants? Will new apartments still be built? The conclusion (worked out in Stage 8.2) is that **the means most likely produce the opposite result** — fewer apartments, shabbier ones, harder to find. The criticism lands on the means, not on the end.

This matters especially for Austrians, who are often accused of dressing up political positions as economics. Mises's answer: economics itself **has no** position — it merely works out what an intervention leads to; whether, having seen the consequences, you still want the intervention is your value judgment, and economics has no say in it. Stage 0.2 separates “Austrian economics” from “libertarian political philosophy” more carefully — the same people often hold both, but they are not the same thing.

Honesty requires adding: **value-freedom is an ideal, and it is hard to live up to.** Which questions you choose to study, which words you use (“intervention” or “governance”), which examples you pick — all carry the researcher's leanings. Austrian scholars are no exception. This course's policy is to put its position in plain view (it is an Austrian course) and, every time it criticizes an opponent, to state the opponent's strongest version first.

### ④ Not money, not a machine: the two most common misunderstandings

**Misunderstanding one: economics is about money.** Money matters enormously (all of Stage 4 is about it), but it is one kind of means, and one that **evolved** only after exchange had developed to a certain point (Stage 4.1). The most basic economic problem — how to choose under scarcity — exists just the same in a world without money. Crusoe choosing between “fish today” and “spend three days making a net for three extra fish a day afterward” is a problem of **time preference** and **roundabout production** (Stage 3.1, Stage 3.2), with no money anywhere. Conversely, many money-related events — say, a banking system pushing the interest rate below its market level — matter precisely because they distort people's choices between “now” and “later” (Stage 5.1). Money is the lens; human choice is what the lens is pointed at.

**Misunderstanding two: the economy is a machine.** The golden age of this metaphor was the mid-twentieth century. In 1949 the economist Bill Phillips literally built a machine (the MONIAC) that used flowing water to simulate the circular flow of national income — saving drains out here, investment flows in there, government spending opens a valve. It was ingenious, and it embodied a worldview: **the economy is a system of pipes, valves and water levels, and operators (the central bank, the treasury) can adjust it.**

Give the metaphor its due first (the steelman): it captures the fact that **aggregates are related** — income, consumption, saving and investment do pull on one another — and thinking in aggregates is compact and hands policymakers a lever.

The Austrian reply: **what flows in the pipes is not water but human decisions.** Water does not change its mind when you turn a valve; people do. Push the interest rate down and the “investment valve” opens — but what opens it is a crowd of entrepreneurs who **mistakenly believe** that society's saving has risen, and who start projects that cannot all be completed (Stage 5.2). Print money and the “consumption level” rises — but the people who get the new money first and those who get it last are in entirely different positions (the Cantillon effect of Stage 4.3). The machine metaphor erases all of that: **distribution, expectations, error.** Hayek's name for this habit is **scientism** — applying the methods of physics to purposeful people. Austrian economics never asks “how do we tune the machine?” It asks “how will each of these people act, and what will emerge when they do?” — that is **methodological individualism**, the subject of Stage 2.3.

### ⑤ Micro and macro: why Austrians think that line is drawn by hand

Textbooks cut economics in two: **micro** (individuals, firms, single markets) and **macro** (GDP, inflation, unemployment, interest rates). The two halves use different models, assumptions, even vocabularies — as if the ground floor and the twentieth floor of one building were inhabited by different species.

Steelman the split first: it has practical value. When you study the price in one market, treating total income as given is a reasonable simplification; when you study total income, spreading out every market's details would drown you in data. Layering is a normal move in the study of any complex system.

The Austrian position: **layers are fine, but “macro” cannot have causal laws of its own.** The reason is blunt — GDP does not spend money, the inflation rate does not sign contracts, the unemployment rate does not look for a job. Only people do those things. Any macro phenomenon either can be traced back to the actions of many people and their interaction, or it is not an explanation at all, merely a description. Mises carried this principle all the way: *Human Action* has no chapter called “macroeconomics” — money, interest and the cycle are all derived upward from individuals' **time preference** and **demand for money**. Roger Garrison's *Time and Money* (2001) even built a dedicated “capital-based macroeconomics” (Stage 10.1) to demonstrate that Austrians do not refuse to do macro; they **do macro without abandoning the micro chain of causation.**

Why does the line matter? Take an example. Mainstream macro says: “aggregate demand is insufficient → raise government spending → multiplier effect → GDP recovers.” Here “aggregate demand” is a bucket of water; pour in more and the level rises. An Austrian asks: **which stage of production did that spending land in? Who received it first? What did it crowd out that would otherwise have been done? The crowded-out things are invisible in the data, but they are real** (the “unseen” of Stage 1.4; the multiplier debate of Stage 11.1). Aggregates hide structure — and the economic consequences live in the structure. Stage 10.2 takes up what GDP and CPI can and cannot tell you.

Gather the lesson into one sentence: **economics studies purposeful choice under scarcity and the unintended results of those choices combined; money is the lens, the machine is the wrong metaphor, and macro is micro hidden behind aggregates.** The rest of the course is four through-lines echoing over and over:

- **Value is subjective** (Stage 1.1, Stage 1.2): the ranking lives in minds, not in things.
- **Humans act purposefully** (Stage 2.1): economic laws are deduced from this, not fitted to data.
- **Prices carry knowledge** (Stage 7.2): nobody designed prices, yet they coordinate billions of choices.
- **Time and uncertainty cannot be removed** (Stage 3.1, Stage 5.1, Stage 18.3): every action points at a future nobody knows; when the interest rate is artificially lowered, a whole society's judgment about the future goes wrong together — and no AI can bear that uncertainty on a person's behalf.

Keep those four in mind, and for every lesson that follows you will be able to say which string it is a bead on.
`,

  demo: "scarcity-scheduler",

  analogy: `
Think of scarcity as **a lunchbox with exactly six compartments**, and of everything you want to do as **a row of dishes waiting to be packed**, which you have already lined up by “what I most want today.”

Economics has no opinion about your taste — the order of the queue is your business. It studies one thing only: **the box is this big; packing from the front of the queue, at which dish do you run out of room?** The dish that does not fit is the true price you paid for today's lunch. If the box shrinks by one compartment (scarcity tightens), the dish squeezed out is the one that only just fit — not your favorite, not your least favorite, but **the one on the boundary.**

Money is just one kind of lunchbox (swap it for time, energy or attention); “the economy” is not a machine that packs lunches by itself but billions of people each packing their own; and “macro” is a wide-angle photo of all the lunchboxes lined up — you cannot see in the photo which dish each person left out, but those omissions are real.

The course's four through-lines are in the picture too: the order of the dishes is in your head (**subjective value**); you are packing on purpose (**human action**); the cafeteria's prices tell you what is scarce today and what to pack less of (**prices carry knowledge**); and what you are really packing is tomorrow's lunch — you have to guess how hungry you will be (**time and uncertainty**).
`,

  misconceptions: [
    "**“Economics is the study of money and how to make it.”** — Money is one kind of means, and one that evolved only after exchange had matured. Crusoe on his island has no money yet makes economic decisions daily (fish, or build the net?). Economics studies choice under scarcity; money is the lens, not the subject.",
    "**“Scarcity is a problem for the poor; the rich don't face it.”** — Scarcity means “means insufficient to satisfy all ends at once,” not material want. A billionaire's day is 24 hours long and his list of ambitions is longer; a startup with $1.8 million wants to do $3 million of things. Scarcity is the universal human condition; only the dropped marginal end differs from person to person.",
    "**“Economics teaches selfishness and putting money above everything.”** — Economics is value-free: it does not judge your ends, only whether the means reach them. If you want to give away all your income, economics does not object; it only reminds you that giving to A means not giving to B. Treating economics as a philosophy of life mistakes a tool for a creed.",
    "**“The economy is a machine, and the central bank and treasury are its operators.”** — Water flows through a machine's pipes; decisions flow through an economy. Water does not change its mind when you turn a valve; people do: entrepreneurs misjudge saving when rates are pushed down, and first and last recipients of new money fare very differently. Taking “looks like a machine” for “is a machine” is what Hayek called scientism.",
    "**“Macroeconomics has its own laws, separate from individual choice.”** — GDP does not spend; the unemployment rate does not job-hunt. Any macro phenomenon is either traceable to the actions of many people and their interaction, or it is description rather than explanation. Austrians do macro (Garrison's capital-based macro, Stage 10.1) — without dropping the micro chain of causation.",
  ],

  quiz: [
    {
      q: "A student has 6 hours tonight and five things she wants to do that add up to 7 hours. What does her decision to “skip the series” show, in economic terms?",
      options: [
        "She doesn't like the series",
        "Scarcity forces choice, and what gets cut is the lowest-ranked end — that cut is the true cost of the choice",
        "She miscalculated and could have done everything",
        "She should borrow money and hire someone to do the freelance job",
      ],
      answer: 1,
      explain: "**Scarcity → choice → giving up.** The means (6 hours) cannot satisfy all ends (7 hours), so she cuts from the tail of her ranking; the dropped “marginal end” is the opportunity cost of everything else she chose (Stage 1.4).",
    },
    {
      q: "What is the main difference between Robbins's 1932 definition and Mises's praxeology?",
      options: [
        "Robbins said economics studies money; Mises said it studies goods",
        "Robbins favored mathematical models; Mises opposed them",
        "Robbins still implies a class of “economic behavior,” whereas Mises holds that all purposeful action has economic structure — there is no economic/non-economic divide",
        "There is no difference; Mises merely renamed it",
      ],
      answer: 2,
      explain: "Mises grounds economics in the universal structure “humans act purposefully”: poets, monasteries and founders all use means to pursue ends. “Economic” is not a species of action but the shared structure of all action.",
    },
    {
      q: "What does it mean to say economics is “value-free”?",
      options: [
        "Economics does not judge ends; it studies whether means achieve them and what else they cause",
        "Economics considers all ends equally good",
        "Economists have no political views",
        "Economics only studies things that have prices",
      ],
      answer: 0,
      explain: "Value-freedom (Weber, Mises): economics does not say whether “affordable housing for the poor” is a good end; it works out what “cap rent at half the market rate” will cause. The criticism targets means, not ends. It is a hard ideal to live up to, but it is the yardstick.",
    },
    {
      q: "In 1949 Bill Phillips built a machine (MONIAC) that simulated national income with flowing water. What is the core Austrian objection to the “economy as machine” metaphor?",
      options: [
        "The machine is too expensive to be practical",
        "The economy has no regularities at all, so it cannot be simulated",
        "The machine can only simulate one country, not the world",
        "What flows in the pipes is not water but human decisions — people change expectations and judgments in response to policy; water does not",
      ],
      answer: 3,
      explain: "Austrians grant that aggregates are related (the steelman) but point out that the machine metaphor erases distribution, expectations and error: lowering rates makes entrepreneurs misjudge saving (Stage 5.2); printing money creates Cantillon effects (Stage 4.3). A textbook case of scientism.",
    },
    {
      q: "Why do Austrians regard the micro/macro split as artificial?",
      options: [
        "Because macro data are all fake",
        "Because only individuals act, so any macro phenomenon must trace back to the actions of many people and their interaction — otherwise it is description, not explanation",
        "Because Austrians do not study money, interest or cycles at all",
        "Because microeconomics already contains all of macro, so there is nothing left to teach",
      ],
      answer: 1,
      explain: "**Methodological individualism**: GDP does not spend, the unemployment rate does not job-hunt. Austrians do macro (Garrison's capital-based macro is macro) but never drop the micro chain of causation — aggregates hide structure, and the consequences live in the structure (Stage 10.1, Stage 10.2).",
    },
  ],

  further: [
    { label: "Mises, Human Action (1949), Ch. I “Acting Man” and Ch. XIV “The Scope and Method of Catallactics” — the praxeological starting point and the boundary of economics", url: "https://mises.org/library/book/human-action" },
    { label: "Lionel Robbins, An Essay on the Nature and Significance of Economic Science (1932) — the classic “scarce means with alternative uses” definition (full text, Mises Institute)", url: "https://mises.org/library/book/essay-nature-and-significance-economic-science" },
    { label: "Israel Kirzner, The Economic Point of View (1960) — from “wealth” to “action”: a history of how economics defined itself", url: "https://mises.org/library/book/economic-point-view" },
    { label: "Econlib Encyclopedia: Austrian School of Economics (Peter Boettke) — a one-page overview of the Austrian view of what economics is", url: "https://www.econlib.org/library/Enc/AustrianSchoolofEconomics.html" },
    { label: "Hayek, The Counter-Revolution of Science (1952) — the original critique of scientism", url: "https://mises.org/library/book/counter-revolution-science" },
  ],
};
