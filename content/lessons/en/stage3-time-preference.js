export default {
  id: "time-preference",
  stage: 3,
  order: 1,
  title: "Time Preference: Where Interest Comes From",
  difficulty: "core",
  prereqs: ["subjective-value", "action-axiom"],

  oneLiner:
    "Why does borrowing $100 mean paying back $105 a year later? The everyday intuition says “because money makes money” or “because capital is productive.” The Austrian answer goes deeper: **interest is not the price of money and not the output of capital — it is the exchange ratio between “now” and “later.”** Anyone who acts at all necessarily prefers earlier satisfaction to later; that is **time preference**. Trade $100 of present goods for $105 of goods a year out and the 5% is interest. It exists before money, before capital, before banks — even on Robinson Crusoe's island. Grasp this and Stage 3.5's “natural rate” and Stage 5.1's “why a suppressed rate lies” fall into place.",

  intuition: `
Start with a question. I can give you $100 right now, or $100 a year from now. Which do you take?

Almost everyone takes it now. Next question: $100 now, or $103 in a year? $110 in a year? $150? Somewhere along that ladder you start to hesitate, and above some number you switch to “I'll wait.” **The number that leaves you exactly indifferent, minus 100, is your interest rate.** If you are indifferent at $108, your annual rate is 8%.

Notice what did not appear in that story: no bank, no machine, no “money making money.” Just you, two dates, and a choice. Interest is hiding inside that choice.

Austrians call the phenomenon **time preference**: other things equal, a person values a satisfaction obtained sooner above the same satisfaction obtained later. That is not a claim that everyone is impatient — some people are patient, some are not; time preference is high for some and low for others. It is a claim about **direction**: as long as you are acting, you are ranking “reach the goal sooner” above “reach the goal later.”

Why can the direction never flip? In Chapter XVIII of *Human Action* (1949) Mises gives a beautiful argument. Suppose someone were genuinely indifferent between present and future satisfaction — or even preferred the future. Then he would consume nothing today, because anything at all is at least as good tomorrow; when tomorrow arrives, the same logic pushes consumption to the day after … He would never act. **So the mere fact that a person acts already displays time preference.** Time preference is not a finding of psychology; it is part of the concept of action itself — exactly the kind of a priori derivation Stage 2.1 described: from the action axiom, not from a questionnaire.

The consequences are large, because it means:

- **Interest is not an invention of capitalism.** Crusoe spending three days making a net instead of catching fish by hand is “lending” three days of fish to his future self and demanding a return — that is interest.
- **Interest is not a monetary phenomenon.** Money merely gives the ratio a uniform expression (“5% per year”). Abolish money and interest does not vanish; it becomes “three fish now for five fish next year.”
- **Interest cannot be abolished by policy.** A central bank can lower the number on a loan contract; it cannot lower the weight that “now” carries in human minds. When the number and the underlying preference come apart, the lying begins — which is the whole subject of Stage 3.5 and Stage 5.1.

Mainstream textbooks usually say “interest is the return on capital” or “interest is capital's marginal productivity.” It sounds natural. In the mechanics section we will state that view in its strongest form and then show that it explains the **rent of capital goods**, not the **discount** itself. Telling those two apart is the line between reciting the interest formula and understanding interest.

The idea keeps growing later in the course: Stage 3.2 uses it to explain how long a production chain a society can afford; Stage 17.2 examines a popular claim — “Bitcoin lowers time preference” — which is a modern variant of Hoppe's thesis that civilization is the process of falling time preference. We will see whether it holds.

**In this lesson we break it into six pieces:**

- **① Böhm-Bawerk's three reasons: the first systematic answer to the interest problem**
- **② Mises: time preference is a category of action, not a psychological trait**
- **③ Interest is a ratio: $100 now vs $105 a year from now**
- **④ The productivity theory: its strongest version, then the reply**
- **⑤ From individuals to society: how a market rate emerges from countless value scales**
- **⑥ Saving, the subsistence fund and civilization: what low time preference means**
`,

  mechanics: `
### ① Böhm-Bawerk's three reasons: the first systematic answer to the interest problem

After Menger, the leader of the second Austrian generation, Eugen von Böhm-Bawerk, confronted “where does interest come from” head-on in the three volumes of *Capital and Interest* (1884–1889). Volume I, *History and Critique of Interest Theories*, dismantled every existing answer one by one — productivity theories, use theories, abstinence theories, exploitation theories. Volume II, *Positive Theory of Capital* (1889), gave his own.

His central proposition: **present goods are systematically valued above future goods of the same kind and quantity.** He offered three reasons:

- **First reason: differences in provision.** Most people expect to be better provided for in the future than now (the young expect rising incomes; people in a famine expect it to end). Since a future unit will rank lower on the list of uses (Stage 1.1's diminishing marginal utility), it is worth less today. People who expect to be poorer later — say, someone about to retire — would value future goods more; but even they, Böhm-Bawerk argued, are subject to reasons two and three.
- **Second reason: systematic underestimation of future wants.** Imagination is limited, will is limited, life is limited. Our sense of a future want is always fainter than our sense of a present one — not because we miscalculate, but because “imagined hunger” is never as vivid as “being hungry”; and nobody is sure of living to see the day.
- **Third reason: the technical superiority of present goods.** This is the controversial one. With present goods in hand (raw materials, food), you can launch more roundabout methods of production — first build tools, then produce with them — and roundabout production yields more (Stage 3.2 develops this). So a unit of goods today can become more than a unit of goods tomorrow: it is “technically superior.”

The first two reasons belong to **value theory** (how people evaluate); the third belongs to **production theory** (how stuff multiplies). Böhm-Bawerk held that the three were independent and mutually reinforcing. That word “independent” is precisely where a century of argument began.

### ② Mises: time preference is a category of action, not a psychological trait

The American economist Frank A. Fetter (*Principles of Economics*, 1904; the 1914 essay “Interest Theories, Old and New”) was the first to argue that the third reason cannot stand on its own. Why? Because the fact that present goods can be multiplied by roundabout production explains **why future goods will be more numerous**, but not **why the larger quantity of future goods is still worth only this much today.** A hundred pounds of seed will grow into 150 pounds of wheat — true; but why is the price of 100 pounds of seed today not 150 pounds of wheat but something less? That is a question of valuation again: because people discount the future 150. The discount itself comes from time preference, not from productivity. Fetter thus proposed the **pure time-preference theory**: interest is explained entirely by time preference; productivity explains the prices of capital goods, not the discount.

Mises took over from Fetter and pushed the idea to its most radical form. In Chapter XVIII of *Human Action*, “Action in the Passing of Time,” he argued that **time preference is a category of action.** The derivation runs:

- Action means employing means to reach a more satisfactory state (Stage 2.1).
- Every action takes time, and its end is attained at some future moment.
- If the actor did not care *when* the end is reached — if, for the same satisfaction, sooner and later were all one to him — he would have no reason to act now rather than postpone indefinitely.
- But he does act. Therefore he must prefer the earlier satisfaction. **Positive time preference is implied by the very concept of action.**

This differs subtly but importantly from Böhm-Bawerk's first two reasons. Böhm-Bawerk was explaining *why* people happen to weight the present more (expected wealth, limited imagination) — circumstances that vary and admit exceptions. Mises is saying that *anyone who acts necessarily* weights the present more — a logical necessity. The two do not conflict: Mises's theorem fixes the sign, Böhm-Bawerk's reasons explain why the magnitude differs across people and situations.

A familiar objection: “I don't eat my ice in summer; I keep it for winter — isn't that preferring the future?” Mises's reply: summer ice and winter ice are **not the same good**, just as desert water and riverside water are not the same good (Stage 1.2). The time-preference theorem concerns satisfactions of the same kind, quantity and circumstance; the earlier one wins.

Honesty requires noting that Austrians themselves dispute the a priori argument. Some hold that Mises's derivation only proves that people prefer reaching goals at *some finite time*, not that sooner is always better; Rothbard patched the argument more carefully in Chapter 6 of *Man, Economy, and State* (1962). This is a live question, and there is no need to pretend it is closed.

### ③ Interest is a ratio: $100 now vs $105 a year from now

Now turn the idea into something you can compute with.

Call goods available today **present goods** and goods of the same kind available a year from now **future goods**. Time preference means that on your value scale a unit of present goods ranks above a unit of future goods. So how many future goods exchange for one unit of present goods? That **exchange ratio** is interest.

- If $100 today feels like $105 next year to you, your annual rate is 5%.
- If $100 today feels like $120 next year, your rate is 20% (high time preference — “impatient”).
- If $100 today feels like $101 next year, your rate is 1% (low time preference — “steady”).

Read the other way, that is discounting: $105 a year out is worth $100 today at 5%. The formula is simple:

$$
present value = future value ÷ (1 + rate)
100 = 105 ÷ 1.05
two years: 100 = 110.25 ÷ 1.05²
$$

Mises called this ratio **originary interest** — “originary” because it exists prior to any particular loan contract in the market. The loan rates and bond yields you observe are built on top of originary interest plus other things (risk, inflation expectations — Stage 3.5 takes them apart).

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Interest = the exchange ratio between present and future goods</text><line x1="60" y1="170" x2="600" y2="170" stroke="var(--line)" stroke-width="2"/><g><circle cx="120" cy="170" r="6" fill="var(--orange)"/><text x="120" y="200" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">today</text><rect x="70" y="60" width="100" height="70" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="120" y="88" text-anchor="middle" font-size="18" font-weight="700" fill="var(--orange-ink)">$100</text><text x="120" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">present good</text></g><g><circle cx="360" cy="170" r="6" fill="var(--blue)"/><text x="360" y="200" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">in one year</text><rect x="310" y="60" width="100" height="70" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="360" y="88" text-anchor="middle" font-size="18" font-weight="700" fill="var(--blue)">$105</text><text x="360" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">future good</text></g><g><circle cx="560" cy="170" r="6" fill="var(--blue)"/><text x="560" y="200" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">in two years</text><rect x="510" y="60" width="100" height="70" rx="8" fill="var(--blue-soft)" stroke="var(--blue)" opacity=".7"/><text x="560" y="88" text-anchor="middle" font-size="18" font-weight="700" fill="var(--blue)">$110.25</text><text x="560" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">future good</text></g><path d="M175 95 Q 240 40 305 95" fill="none" stroke="var(--orange)" stroke-width="2" marker-end="url(#tp-arrow-en)"/><text x="240" y="52" text-anchor="middle" font-size="11" font-weight="600" fill="var(--orange-ink)">×1.05 = 5%</text><path d="M415 95 Q 480 40 505 95" fill="none" stroke="var(--orange)" stroke-width="2"/><text x="462" y="52" text-anchor="middle" font-size="11" font-weight="600" fill="var(--orange-ink)">×1.05</text><defs><marker id="tp-arrow-en" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--orange)"/></marker></defs><text x="320" y="240" text-anchor="middle" font-size="11.5" fill="var(--ink)">On your value scale: $100 today ≈ $105 next year → you discount the future by 1/1.05</text><text x="320" y="262" text-anchor="middle" font-size="11" fill="var(--muted)">No bank, no machine — only an exchange of “sooner” for “later.” That is originary interest.</text><text x="320" y="286" text-anchor="middle" font-size="11" fill="var(--red)">High time preference: 100 ≈ 120 (20%). Low time preference: 100 ≈ 101 (1%).</text></svg><figcaption>Interest is the ratio at which present goods trade for future goods. It is a price — the price of time — not the output of capital.</figcaption></figure>

Take the word “ratio” seriously. Interest is **not the price of a good**, not “the rent of money.” Money can be lent for interest and a machine can be rented for a fee, but interest itself is a **difference in valuation** that spans any two dates and applies to every good. Mises's formulation, roughly: originary interest is not the price of capital, nor the price of any particular factor of production, but the ratio of the value of present goods to that of future goods.

### ④ The productivity theory: its strongest version, then the reply

Now face the most popular rival. The **productivity theory of capital** says interest exists because capital is productive: producing with machines yields more than producing by hand, and the extra is interest. Its modern form is the neoclassical “marginal product of capital”: in the Solow model the interest rate r equals MPK. This is practically the default answer in textbooks, and it does capture a real fact — **roundabout methods that use capital goods are indeed more productive.**

Let us make it as strong as possible. Suppose a machine is worth $1,000 and adds $50 of net output every year, forever. Then “the machine yields 5%” is an observable fact. Competition will drive entrepreneurs to keep buying such machines until their return equals the cost of borrowing. Hence the interest rate is the (marginal) productivity of capital — coherent, computable, and it plugs straight into growth theory.

The Austrian reply has three steps.

**Step one: productivity explains the rent, not the discount.** The machine yields $50 a year. Why is its price today $1,000 and not infinite? If it yields $50 forever, the sum of its future output is unbounded. It is worth only $1,000 because people discount each future $50 year by year — at 5%, a perpetual $50 has a present value of exactly 50 ÷ 0.05 = 1,000. **So it is not “the machine yields 50, therefore the rate is 5%”; it is “the rate is 5%, therefore a machine yielding 50 is worth 1,000.”** Productivity determines the $50-a-year **rent** (Stage 1.1's imputation: a capital good's value derives from the consumer goods it helps produce); the discount rate comes from time preference.

**Step two: without time preference, productivity would erase itself.** Imagine people did not discount the future at all. Then every capital good with a positive yield would be bid up without limit, its price rising to equal the full sum of its future output, and the rate of return would fall to zero — the machine's “productivity” would remain, but “interest” would be gone. This is exactly Böhm-Bawerk's fatal objection to the “naive productivity theories” in the *History and Critique*: **physical productivity (more wheat) is not value productivity (more money)**, because competition bids up input prices until all that remains is the margin time preference allows.

**Step three: separating product from time.** Picture an orchard that needs no inputs and simply grows — no “capital investment” whatsoever — yet next year's fruit still sells at a discount today. Where does that discount come from? Only from time preference. Now the reverse case: a bottle of wine left alone doubles in value over ten years, as if “time itself were producing.” The Austrian reading: the wine gains value because people rate “ten-year-old wine” — a **different good** — more highly, while they still discount “money ten years out.”

Here, candor: Austrians are not monolithic. Some contemporary Austrians (Garrison among them) are willing to treat productivity as a **factor influencing the level** of the rate (through its effect on saving and investment demand) rather than as the reason the rate **exists**; the pure time-preference camp (Rothbard, Hoppe) insists productivity plays no explanatory role at all. Both camps agree on the floor: **the discount itself comes from time preference.** That is this lesson's bottom line.

### ⑤ From individuals to society: how a market rate emerges from countless value scales

Every person has a personal rate of time preference. So whose rate is “the market rate”? The answer is exactly the one Stage 1.3 gave for prices: **the market rate is set by the marginal lenders and borrowers.**

Take a society of five people. Their annual rates of time preference — the number that leaves each indifferent — are:

- A: 2% (very patient; will lend at anything above 2%)
- B: 4%
- C: 6%
- D: 8%
- E: 10% (very impatient; will pay anything below 10% to borrow)

If the market rate is 5%: A and B think “5% is more than I require” and lend; C, D and E think “5% is less than the discount in my head” and borrow. Lenders are **suppliers of present goods**; borrowers are **demanders of present goods**. The rate moves to where supply equals demand — like any price. If E suddenly becomes more patient (time preference falls to 3%), demand shrinks and the rate falls; if society as a whole grows more impatient, the rate rises.

That is the logic of **loanable funds**, but note how the Austrian version differs from the textbook one. Textbooks often treat the supply and demand curves for loanable funds as two independent objects; for Austrians **both curves are two faces of the same thing — everyone's time preference.** Supply comes from those whose time preference lies below the market rate, demand from those whose time preference lies above it. The rate is not “the price of funds” but the **marginal** expression of society's time preference.

The demo lets you do this by hand: first back out your own implied rate from a series of “now vs a year from now” choices, then stack several different people into a supply line and a demand line and watch where the market rate clears.

### ⑥ Saving, the subsistence fund and civilization: what low time preference means

Time preference also decides **how far a society can extend its roundabout production.** Böhm-Bawerk's concept here is the **subsistence fund**: in a roundabout process (build the boat first, fish afterwards), the workers building the boat must eat during those months, and what they eat must have been **saved beforehand**. The more a society saves, the larger the subsistence fund, the longer the production chain it can support — Stage 3.2 draws this as the Hayekian triangle.

**Saving is the behavioral expression of low time preference.** Someone who earns 100 this year, consumes 80 and saves 20 is trading 20 units of present goods for future goods. He is willing to do so because the market rate exceeds his own time preference. Hence the chain: lower time preference → more saving → lower interest rate → longer production chains become viable → higher output per head. This chain is the spine of Austrian capital theory, and it is also why the central bank's “counterfeit saving” in Stage 5.1 goes wrong: **behind a genuine low rate there is genuine saving; behind an artificial low rate there is none.**

Hoppe, in *Democracy: The God That Failed* (2001), pushed the logic into sociology: **the process of civilization is the process of continually falling time preference.** The more secure property is, the further into the future people dare to invest; conversely theft, confiscation, inflation and unpredictable law push time preference up — if tomorrow's goods may be taken, better to consume them today. He went on to argue that certain political arrangements systematically raise time preference (his most contested claim, which we assess in Stage 8.4).

The thesis has a popular sequel today: “fiat money encourages consumption, Bitcoin encourages saving, so Bitcoin lowers time preference” (Saifedean Ammous, *The Bitcoin Standard*, 2018). The claim has Austrian ancestry, but the direction of causation is far from obvious — does hard money lower time preference, or do people with low time preference choose hard money? Stage 17.2 examines it directly.

The whole lesson in one sentence: **interest is the price of time, arising from the acting person's differential valuation of sooner and later; the productivity of capital determines the rent of capital goods, time preference determines the discount; the market rate is the marginal expression of society's time preference, and saving is its behavioral form.** In the next lesson (Stage 3.2) we see how this “price of time” decides how long a production chain a society dares to build.
`,

  demo: "time-preference-lab",

  analogy: `
Think of interest as **the price of skipping the queue.**

Imagine a restaurant everyone wants to eat at. You can walk in now (a present good), or take a reservation slip for next year (a future good). The owner notices that people will pay more for “right now” — if a seat tonight is $100, a slip for next year fetches only $95. That $5 gap is not the restaurant's “productivity,” not the chef's wages, not the owner's monopoly. It is **the extra people assign to “now.”**

Now watch a few characters. A student, short of cash and impatient, will pay $120 for a seat tonight (high time preference). A retiree in no hurry sells her seat-tonight to the student and takes a slip for next year, netting an extra slip in the process — she is the **lender**, the student the **borrower**, and the gap between them is the marginal expression of each one's time preference. The going price of a reservation slip at the door is the market rate.

Then comes the temptation of the productivity theory: someone says “slips are cheap because the restaurant will expand next year and there will be more seats.” But the expansion only explains **why there will be more seats next year**, not **why more seats next year are still worth only this much today** — if people did not care about sooner and later, more seats next year should be worth more, not less. The discount is always the price of waiting itself.

Finally the government decrees: all reservation slips shall sell at $99. The people in line conclude “waiting has become cheap; everyone must be patient,” so they switch to slips and the restaurant confidently expands — but nobody's actual impatience has changed. Next year the restaurant discovers there were never that many patient diners; the new seats stand empty. That is the story of Stage 5.1: **the interest rate is a number that can be rewritten; time preference is a fact about human minds that cannot.**
`,

  misconceptions: [
    "**“Interest is the productivity of capital: however much a machine adds, that is the rate.”** — Productivity determines a capital good's annual **rent** (say $50), not how heavily those future rents are discounted today. A machine yielding $50 forever is worth $1,000 rather than infinity only because people discount the future according to time preference. Without time preference, every productive capital good would be bid up until its return vanished — interest gone, “productivity” still there.",
    "**“Interest is the price of money, a monetary phenomenon; no money or no banks, no interest.”** — Interest is the exchange ratio between present and future goods and can be expressed in fish or wheat. Crusoe spending three days on a net charges his future self “three days of fish.” Money merely gives the ratio a common unit, and banks merely match lenders and borrowers; neither is why interest exists.",
    "**“Time preference is a psychological trait; some people (compulsive savers, say) simply don't have it.”** — Time preference varies in degree but its sign is necessarily positive, because it follows from the concept of action: someone indifferent between sooner and later would never act at any moment. The compulsive saver merely has very low time preference (a tiny return is enough to make him wait), not zero; and “keeping ice for winter” compares two different goods.",
    "**“When the central bank cuts rates, society becomes more patient.”** — The central bank can rewrite the number on a loan contract; it cannot rewrite how much more “now” weighs than “later” in people's minds. The market rate expresses the margin of society's time preference; when the policy rate departs from it, entrepreneurs mistakenly believe saving has increased and stretch production longer than real saving can support. That divergence is where the business cycle of Stage 5.1 begins.",
    "**“Interest is exploitation: the borrower creates the value, the lender gets something for nothing.”** — The lender gives up “now” itself, and “now” is scarce on everyone's value scale. $100 today for $105 next year is a voluntary exchange that benefits both sides: the borrower values today's 100 above next year's 105, the lender the reverse. Like trade across space, trade across time makes both parties better off.",
  ],

  quiz: [
    {
      q: "Between “$100 now” and “$X in one year,” you are exactly indifferent at X = 108. What is your implied annual rate of time preference?",
      options: [
        "0.8%",
        "8%",
        "108%",
        "Cannot be determined without knowing the inflation rate",
      ],
      answer: 1,
      explain: "**Interest is the exchange ratio between present and future goods**: 100 ≈ 108 means 108 ÷ 100 = 1.08, a discount rate of 8%. It is your price for waiting a year — no bank or inflation data needed.",
    },
    {
      q: "Which of Böhm-Bawerk's three reasons did Fetter and Mises argue cannot independently explain interest, and why?",
      options: [
        "The first (expecting to be richer), because many people expect to be poorer",
        "The second (underestimating future wants), because it is irrational",
        "The third (technical superiority of present goods), because productivity explains only that future goods will be more numerous, not why the larger quantity is still discounted",
        "All three stand independently; Fetter and Mises merely rephrased them",
      ],
      answer: 2,
      explain: "That 100 pounds of seed grow into 150 pounds of wheat is a fact, but **why is 100 pounds of seed today not priced at 150 pounds of wheat?** That is still a valuation question; the discount comes from time preference. Hence Fetter's pure time-preference theory, which Mises elevated to a category of action.",
    },
    {
      q: "A machine yields a net $50 a year forever and the market rate is 5%. Roughly what is its price, and what does the example show?",
      options: [
        "Infinite, because it produces forever",
        "$50, one year's output",
        "$1,000; it shows the rate determines the price of capital goods, not the other way around",
        "$1,000; it shows the machine's productivity is 5%, which is why the rate is 5%",
      ],
      answer: 2,
      explain: "A perpetual $50 discounted at 5%: 50 ÷ 0.05 = 1,000. **The discount rate from time preference comes first and determines the capital good's price.** Saying “it yields 50, so the rate is 5%” cannot explain why the machine is not worth infinity.",
    },
    {
      q: "Five people have annual time-preference rates of 2%, 4%, 6%, 8% and 10%; the market rate is 5%. Who lends and who borrows?",
      options: [
        "The 2% and 4% people lend; the 6%, 8% and 10% people borrow",
        "Everyone lends, since 5% is profitable",
        "The 6%, 8% and 10% people lend, since they demand higher returns",
        "Only the 2% person lends; everyone else borrows",
      ],
      answer: 0,
      explain: "Those whose time preference is below the market rate think “5% is more than I require” and exchange present goods for future goods — they lend; those above it think “5% is less than my discount on the future” and pay to borrow. **The market rate is set by the marginal lenders and borrowers.**",
    },
    {
      q: "According to Mises, why must time preference be positive?",
      options: [
        "Because psychological experiments show people are generally impatient",
        "Because inflation makes money lose value over time",
        "Because capital is productive, so waiting always yields more",
        "Because someone wholly indifferent between sooner and later would never act at any moment; since people act, they already display a preference for earlier satisfaction",
      ],
      answer: 3,
      explain: "It is an a priori derivation from the **action axiom** (Stage 2.1): an actor without time preference would postpone every consumption indefinitely and never act. Mises therefore calls time preference a “category of action,” not an optional psychological fact.",
    },
  ],

  further: [
    { label: "Böhm-Bawerk, Capital and Interest (1884–89), three volumes — the history and critique of interest theories and the positive theory", url: "https://mises.org/library/book/capital-and-interest-three-volumes" },
    { label: "Mises, Human Action, Ch. XVIII “Action in the Passing of Time” — time preference as a category of action", url: "https://mises.org/library/book/human-action" },
    { label: "Frank A. Fetter, “Interest Theories, Old and New” (1914) — the founding essay of pure time-preference theory (in Capital, Interest, and Rent)", url: "https://mises.org/library/book/capital-interest-and-rent" },
    { label: "Rothbard, Man, Economy, and State, Ch. 6 “Production: The Rate of Interest and Its Determination”", url: "https://mises.org/library/book/man-economy-and-state-power-and-market" },
    { label: "Hoppe, Democracy: The God That Failed (2001), Ch. 1 — time preference, property and civilization", url: "https://mises.org/library/book/democracy-god-failed" },
  ],
};
