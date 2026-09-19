export default {
  id: "five-step-analysis",
  stage: 14,
  order: 1,
  title: "The Five-Step Method: Analyze Any Policy with Austrian Logic",
  difficulty: "mastery",
  prereqs: ["intervention-logic", "opportunity-cost"],

  oneLiner:
    "Thirteen stages have handed you a crate of parts: subjective value, opportunity cost, methodological individualism, price signals, economic calculation, the dynamics of intervention. This lesson bolts them into **one machine you can run on anything** — rent control, a steel tariff, student-loan forgiveness, a national AI subsidy — always in the same five steps: **state it precisely → who acts → seen and unseen → prices, knowledge, calculation → dynamics and the next intervention**. What comes out is not the two words “Austrians object” but a structured analysis that someone else can check and, if you are wrong, refute. This is the step from knowing Austrian economics to using it.",

  intuition: `
People who have learned some Austrian economics develop a tic. Mention any policy and within two seconds they say, “That will have unintended consequences.” The sentence is almost always true and almost always useless, because it does not say **which** consequence, landing on **whom**, through **what mechanism**, **how fast**. An Austrian who can only say “unintended consequences” and an interventionist who can only say “market failure” are two faces of the same coin: both have swapped a conclusion for an analysis.

This lesson is the cure. The method is unglamorous: line up the tools you already own in a fixed order, and walk through every step every time, no skipping.

**Step one: state precisely what the policy is.** Not “the government is regulating rents again,” but “for rental units built before 2015, annual increases are capped at 3%; new construction is exempt for 15 years.” The details of a policy determine its effects; a vague description yields a vague conclusion. Write down, next to it, the **stated goal** (“keep housing affordable for low-income families”) and the **implicit theory** the policy needs in order to work (“rents are high because landlords are greedy, and holding rents down will not reduce the number of homes”). Once the implicit theory is written out, it often collapses on its own.

**Step two: who acts?** Stage 2.3 gave you methodological individualism: “the market” does not respond, “the industry” does not adjust; only particular people do. Landlords, tenants, developers, people who want to move in, city officials, lawyers — list every actor the policy touches and ask two things: has his **incentive** changed, and what **margins of adjustment** does he have? (If he cannot raise the rent, can he cut maintenance? If he cannot evict, can he switch to short-term lets, or to office use?) A policy blocks one road; people take every other road.

**Step three: seen and unseen.** Bastiat from Stage 1.4. The seen is “current tenants saved money.” The unseen is “the building that was never built,” “the person who never moved here,” “the apartment that became an office.” This step is about **tracing resources**: where the money comes from, where it goes, where it would otherwise have gone.

**Step four: prices, knowledge, calculation.** Hayek from Stage 7.2 and Mises from Stage 7.1. Three questions: which price signal is distorted? Which dispersed knowledge no longer enters the system? Who can no longer perform economic calculation (the developer cannot compute “build or don't build,” because he no longer knows what rents will be allowed in twenty years)?

**Step five: dynamics and the next intervention.** Mises's core claim in Stage 8.1: an intervention creates a new problem, and the new problem summons the next intervention. Rent control causes a shortage → the city bans “refusal to rent” → landlords stop renovating → the city imposes minimum-maintenance standards → more landlords leave … Add the political-economy question from Stage 8.4: who lobbies? Whose benefit is concentrated and whose cost is dispersed?

After five steps you will find that the hardest part is not “what Austrians think,” but a question that lies beyond step five: **under what conditions would this policy make sense?** Some policies are redistribution by nature, not attempts to fix a market — Austrian economics can tell you the cost, but cannot decide for you whether the redistribution is worth that cost. Some policies are second-best within a given legal order — when a worse intervention already exists, removing its patch is not necessarily an improvement. The mark of mastery is being able to say “it depends” **and to say precisely what it depends on**. That is not weakness; it is the difference between an economist and a partisan.

The rest of this stage pushes the machine to its limits: Stage 14.2 teaches you to write the analysis so that others can read it, Stage 14.4 catalogues the ways the machine breaks down, Stage 18.5 runs it on today's AI capital-spending boom, and Stage ∞.3 asks you to run it by hand on a topic of your own as the capstone.

**In this lesson we break it into six pieces:**

- **① Why you need a “machine”: from intuition to method**
- **② The five steps, one by one: which tool, which question**
- **③ Full walk-through I: rent control and a steel tariff**
- **④ Full walk-through II: student-loan forgiveness and a national AI subsidy**
- **⑤ When the Austrian answer is “it depends”**
- **⑥ A rigor checklist: what a competent analysis looks like**
`,

  mechanics: `
### ① Why you need a “machine”: from intuition to method

What separates an economist from a fan is not the conclusion but **the ability to take the conclusion apart into steps**. Henry Hazlitt compressed the whole discipline into one sentence in Economics in One Lesson (1946): good economics looks not only at the **immediate** effects of a policy on **one group**, but at its **longer** effects on **all groups**. That sentence is a two-dimensional machine: “who” on one axis, “when” on the other. The five-step method extends it to five dimensions: **what · who · the unseen · prices and knowledge · dynamics**.

Why insist on a fixed order? Because minds are lazy in predictable ways. Faced with “a tariff to protect steelworkers,” your brain jumps straight to step five (“there will be retaliation”) and skips step two (“who **buys** steel, and how many people do they employ compared with the mills?”). The value of a fixed order is that **it forces you through the step you would rather skip**. A pilot runs the pre-flight checklist not because he cannot fly but because he can — experts are precisely the people who omit items.

There is a second reason. The five steps make your analysis **refutable**. “Austrians oppose subsidies” cannot be refuted. “This subsidy is $20 billion a year, flows mostly to the five largest firms, three of which were already expanding, so the marginal new investment is far smaller than $20 billion” can be — someone can show it is one firm, not three. Refutable is what distinguishes analysis from tribal signaling. Stage 13.1 argued that Austrian empirical work explains rather than tests; the five-step method is the skeleton of such an explanation.

### ② The five steps, one by one: which tool, which question

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The five steps: the tool each uses and the lesson it comes from</text><g><rect x="20" y="44" width="112" height="72" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="76" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">① What is it</text><text x="76" y="82" text-anchor="middle" font-size="10" fill="var(--muted)">details · goal</text><text x="76" y="96" text-anchor="middle" font-size="10" fill="var(--muted)">implicit theory</text><text x="76" y="110" text-anchor="middle" font-size="9" fill="var(--orange-ink)">Stage 8.1</text></g><g><rect x="147" y="44" width="112" height="72" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="203" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">② Who acts</text><text x="203" y="82" text-anchor="middle" font-size="10" fill="var(--muted)">incentives · margins</text><text x="203" y="96" text-anchor="middle" font-size="10" fill="var(--muted)">individualism</text><text x="203" y="110" text-anchor="middle" font-size="9" fill="var(--orange-ink)">Stage 2.3</text></g><g><rect x="274" y="44" width="112" height="72" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="330" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">③ The unseen</text><text x="330" y="82" text-anchor="middle" font-size="10" fill="var(--muted)">trace resources</text><text x="330" y="96" text-anchor="middle" font-size="10" fill="var(--muted)">opportunity cost</text><text x="330" y="110" text-anchor="middle" font-size="9" fill="var(--orange-ink)">Stage 1.4</text></g><g><rect x="401" y="44" width="112" height="72" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="457" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">④ Prices · knowledge</text><text x="457" y="82" text-anchor="middle" font-size="10" fill="var(--muted)">distorted signal</text><text x="457" y="96" text-anchor="middle" font-size="10" fill="var(--muted)">lost calculation</text><text x="457" y="110" text-anchor="middle" font-size="9" fill="var(--orange-ink)">Stage 7.1 · 7.2</text></g><g><rect x="528" y="44" width="100" height="72" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="578" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">⑤ Dynamics</text><text x="578" y="82" text-anchor="middle" font-size="10" fill="var(--muted)">next intervention</text><text x="578" y="96" text-anchor="middle" font-size="10" fill="var(--muted)">who lobbies</text><text x="578" y="110" text-anchor="middle" font-size="9" fill="var(--orange-ink)">Stage 8.1 · 8.4</text></g><path d="M132 80 L147 80 M259 80 L274 80 M386 80 L401 80 M513 80 L528 80" stroke="var(--orange)" stroke-width="2"/><rect x="60" y="150" width="520" height="54" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="320" y="172" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Output: a structured analysis that can be refuted</text><text x="320" y="192" text-anchor="middle" font-size="10.5" fill="var(--muted)">at every step, write “what I expect to see, and what would change my mind”</text><rect x="60" y="222" width="250" height="56" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="185" y="244" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">Too fast = jump to the verdict</text><text x="185" y="262" text-anchor="middle" font-size="10" fill="var(--muted)">“unintended consequences” — empty</text><rect x="330" y="222" width="250" height="56" rx="8" fill="var(--green-soft)" stroke="var(--green)"/><text x="455" y="244" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">All five = name names</text><text x="455" y="262" text-anchor="middle" font-size="10" fill="var(--muted)">which effect · on whom · mechanism · how fast</text></svg><figcaption>The five-step method is a fixed-order checklist. Each step draws on a tool from an earlier lesson; the end product is an analysis others can check, not the phrase “unintended consequences.”</figcaption></figure>

**Step one: state what it is, and what it thinks it is doing.** Write three lines: (a) the mechanics of the policy (to whom, how much, for how long, who is exempt); (b) the stated goal; (c) the implicit theory — what the world would have to be like for the policy to work. Take a minimum wage: (a) the hourly floor rises from $12 to $17 in steps over two years; (b) the goal is higher incomes for low earners; (c) the implicit theory is that employers' demand for low-skilled labor is insensitive to its price, or that employers hold monopsony power. Once (c) is on paper you know what to check: if the typical small restaurant runs a 4% margin, “insensitive” looks doubtful.

**Step two: who acts, and whose incentives and margins change.** Make the list of actors and ask of each, “how can he route around this?” The key concept is the **margin of adjustment**: a policy pins one variable, and people adjust on every other. A minimum wage pins the wage; the employer's remaining margins are hours, training, benefits, self-service kiosks, a higher bar for hiring, or simply not opening the second location. Rent control pins the rent; the landlord's remaining margins are maintenance, deposits, tenant selection, conversion to offices, or demolition and rebuilding (if new construction is exempt). **The real effects of a policy almost always appear on the margins it did not pin.**

**Step three: seen and unseen.** Bastiat's 1850 method: the good economist sees “that which does not exist.” The operational version is to **trace resources** — for every dollar, hour of labor and acre of land, ask three questions: where did it come from, where did it go, where would it otherwise have gone? Forgive $400 billion of student loans: from where (future taxpayers or the central bank's balance sheet), to whom (people who already borrowed, whose incomes are on average above the median), and where otherwise (the alternative uses of $400 billion — plus the expectation, now changed, that “tuition can rise, since loans get forgiven”).

**Step four: prices, knowledge, calculation.** This is the most distinctively Austrian step, and the one mainstream analysis most often lacks. Ask: (a) which price is distorted, and what information was it carrying? A tariff holds domestic steel above the world price, distorting the signal “how scarce is steel here, really.” (b) Which knowledge no longer enters the system? After a rent freeze, the information “downtown two-bedrooms are 30% more sought-after than suburban ones this year” simply vanishes; developers cannot learn where to build. (c) Who can no longer calculate? A national AI subsidy cuts one firm's compute cost from 100 to 60; its income statement no longer tells it “is this project worth doing at true cost?” — the profit-and-loss feedback loop of Stage 6.3 has been cut.

**Step five: dynamics and the next intervention.** Mises's argument in A Critique of Interventionism (1929) and Human Action: the problems an intervention creates are usually blamed on the market, which summons the next intervention. Your job is to predict **specifically** what the next one will be — that is a testable claim. Then add the public-choice question from Stage 8.4: are the policy's benefits concentrated and its costs dispersed? Who has a motive to lobby for it, and who lacks a motive to oppose it? The answer usually explains why policies known to fail survive for decades.

### ③ Full walk-through I: rent control and a steel tariff

**Rent control.**

- ① What: a city caps annual rent increases on existing rental stock at 3%; new construction exempt for 15 years. Goal: keep current tenants housed affordably. Implicit theory: rents are set by landlord will, and holding them down does not reduce supply.
- ② Who acts: current tenants (incentive: never move, even when the unit no longer fits); landlords (margins: cut maintenance, sell, convert to commercial, screen tenants harder); developers (margin: build only high-end units during the exemption window and sell before it closes); people who want to move in (locked out — and they cannot vote here).
- ③ Unseen: the buildings never built; the mismatched tenants who never moved (one person in a three-bedroom); the young worker who never arrived; every dollar of maintenance skipped. The seen is only “Mrs. Chen's rent did not go up.”
- ④ Prices and knowledge: rents used to tell everyone “where housing is tightest”; frozen, the signal disappears and the market allocates by queues, connections and under-the-table deposits — all worse carriers of knowledge. A landlord cannot calculate whether a renovation pays, because the renovated unit cannot charge more.
- ⑤ Dynamics: shortage → “no refusal without cause” → landlords exit → “no conversions” → stock ages → “the city will build.” Who lobbies: current tenants (concentrated, they vote). Who is silent: future tenants (dispersed, no vote).
- Evidence I expect to see: maintenance quality falling in the controlled stock, higher rents in the uncontrolled segment, lower tenant turnover. Stockholm's multi-year queues for regulated apartments are the best-known illustration. **What would change my mind**: if new construction and maintenance spending in controlled cities did not fall relative to comparable uncontrolled ones, then the margins in step two were not triggered and my analysis needs revising.

**A tariff on steel.**

- ① What: a 25% tariff on imported steel. Goal: protect steelworkers and national security. Implicit theory: imports are zero-sum and the cost of dearer steel is negligible.
- ② Who acts: steel mills (raise prices, expand, lobby for extension); **steel-using firms** — cars, construction, machinery, appliances (margins: raise prices, cut jobs, move whole plants outside the tariff wall); foreign exporters (retaliate, trans-ship); consumers (the unseen crowd). The key ratio: in the United States, steel-using industries employ many times more people than steelmaking — the order of magnitude is consistent across studies.
- ③ Unseen: the workers steel users did not hire; the farm exports lost to retaliation; the few hundred dollars more per car that would have been spent elsewhere.
- ④ Prices and knowledge: domestic steel above the world price distorts the information “where should steel be made”; steel users are forced to calculate at a false price, steering resources into projects that pay only under the tariff — a replay of the malinvestment of Stage 5.2.
- ⑤ Dynamics: steel users hurt → demand tariffs on downstream products too → layered escalation; the exemption process spawns a lobbying industry; retaliation → farm subsidies. Who lobbies: the mills (few, concentrated). Who is silent: the users (dispersed, each with a small individual loss). **What would change my mind**: a credible defense bottleneck with no alternative supply makes this “paying for security” — a redistribution question, not an efficiency one; see section ⑤.

### ④ Full walk-through II: student-loan forgiveness and a national AI subsidy

**Student-loan forgiveness.**

- ① What: a one-time cancellation of up to $10,000 of federal student debt per borrower, several hundred billion in total. Goal: relieve young people's burden. Implicit theory: the debt is an exogenous burden, and forgiving it changes neither future borrowing nor tuition.
- ② Who acts: existing borrowers (concentrated gain); future borrowers (expect “it will be forgiven again” → borrow more); universities (expect students to be less price-sensitive → raise tuition, expand administration); taxpayers who never attended college (bear the cost, and earn less on average — a **regressive** transfer); legislators (the next election is the horizon).
- ③ Unseen: the alternative uses of the money; the plumber paying for the graduate's degree; the next cohort borrowing and spending more on the strength of expected forgiveness; the further rise in tuition.
- ④ Prices and knowledge: tuition and loan rates used to tell students “is this degree worth it?” Forgiveness blurs the signal — a degree with a $20,000 return looks like $40,000 if the loan may be cancelled. Universities can no longer read from enrollment data which programs the market actually values.
- ⑤ Dynamics: one-time relief → tuition rises → debt loads grow → “forgive again” → de facto free college, with the price mechanism already destroyed. Who lobbies: universities, borrower associations. Who is silent: people who never went. **What would change my mind**: if new-student borrowing and tuition growth did not rise relative to trend after forgiveness, the moral-hazard link is weaker than I expect.

**A national AI subsidy / industrial policy.** This is the prelude to Stage 18.5.

- ① What: a $50 billion national fund subsidizes compute centers and model training; selected firms get discounted electricity and cheap loans. Goal: “win the AI race.” Implicit theory: the government can identify which firms and technical routes will win, and private capital is insufficient.
- ② Who acts: the selected large firms (already expanding → the **marginal** effect of the subsidy is far smaller than its headline size); unselected startups (harder to fund against subsidized giants); utilities and local governments (lobby for the campus); the reviewing officials (incentive: avoid blame, not pick winners).
- ③ Unseen: the alternative uses of $50 billion; the technical route that would have emerged but is crowded out; the other electricity users whose prices rise to fund the discount.
- ④ Prices and knowledge: the true price of compute used to tell every firm “is this model worth training?” Subsidized, a set of projects that pay only when compute is 40% off gets launched — the very definition of malinvestment. **AI is a capital good** (Stage 18.2): subsidize one capital good and you distort its proportion to every other stage of the structure of production. The government cannot perform this calculation — not because officials are dim, but for the reason given in Stage 7.1: without profit and loss at true prices, there is nothing to calculate with.
- ⑤ Dynamics: projects show losses when the subsidy sunsets → “extend the subsidy to protect the investment” → it becomes permanent → the industry's pricing is set by the budget rather than by users. Who lobbies: selected firms and host regions. Who is silent: future taxpayers and the unselected founders. **What would change my mind**: if the share of private capital in the sector rose rather than fell after the subsidy, and selected firms remained profitable after it ended, that is crowding in, not out, and my step four needs revising.

Put the four examples side by side and **the same skeleton appears every time**: a policy pins a variable; people adjust on the other margins; a price signal blurs; malinvestment accumulates; the new problem summons the next intervention; the concentrated beneficiaries lobby to keep it. That is not coincidence. It is the logic of intervention from Stage 8.1.

### ⑤ When the Austrian answer is “it depends”

An honest Austrian analysis must concede that the five steps yield **costs, mechanisms and dynamics** — and that in three kinds of case they cannot deliver the final verdict on their own.

**First: policies that are redistribution by nature.** Old-age pensions, disability support, disaster relief — their purpose is not to “fix a market” but to move resources from one group to another. The five steps can compute the cost (distorted incentives, administrative loss, dynamic growth) and can point to cheaper designs (cash rather than in-kind, universal rather than targeted). But **whether the goal is worth that cost is a value judgment.** Mises was a utilitarian; Rothbard a natural-rights theorist (Stage 14.3); they need not reach the same verdict on the same transfer. Economics ends here and ethics begins. Blurring the two is the “moralizing instead of analyzing” error of Stage 14.4.

**Second: second-best within a given legal order.** Suppose a country already has deposit insurance and a lender of last resort. Abolishing bank capital requirements does not return you to free banking (Stage 9.4); it gives you the worst combination — insured and unconstrained. The Austrian ideal is to remove the first layer of intervention. But if only the second layer is on the table, removing the patch is not necessarily better. That is the common-sense version of “second-best theory”: **when you cannot fix the root, do not pretend that pruning the branch is the same thing.** An honest analysis says: “Under the existing legal order I recommend X; if the order itself could change, I recommend Y.”

**Third: genuine public goods and defense.** Austrians disagree deeply among themselves about what the state should do (Stage 14.3). The “national security” case for a steel tariff is, economically, “paying an insurance premium”; whether the premium is worth it depends on a judgment about threats, which economics cannot make alone. The Austrian contribution is **to compute the premium honestly and refuse to let it be dressed up as “job creation”** — not to declare security unimportant.

So “it depends” is not evasion; it is precision about **what it depends on**: is the goal efficiency or redistribution? are we touching the root or the branch? has the cost been counted? Someone who can say those three sentences is more of an economist than someone who can recite “intervention always fails.”

### ⑥ A rigor checklist: what a competent analysis looks like

Hold the output of your five steps against this list — each item foreshadows the writing lesson in Stage 14.2:

- **The unseen is named**: not “there will be hidden costs,” but “the X buildings not built,” “the Y workers not hired.”
- **Margins of adjustment are identified**: at least two ways actors route around the policy.
- **The distorted price and the information it carried are stated.**
- **The next intervention is predicted** — specifically enough to be checked later.
- **Who lobbies and who stays silent is said.**
- **“What would change my mind” is written** — one observable piece of evidence.
- **Efficiency arguments are separated from value judgments**, and the latter are acknowledged as beyond economics alone.
- **No dates**: say “direction and fragility,” never “it crashes next year.”

An analysis that satisfies the first seven and avoids the eighth is what this course wants you to be able to write. The Policy Analyzer in the demo below scores your work against exactly this list — it rewards not your side, but whether you named the unseen and the next intervention.
`,

  demo: "policy-analyzer",

  analogy: `
Think of a policy as a **dam** built across a river.

A layman looks at the dam: it stands, the water behind it rises, the village's fields get irrigated — “the policy worked.” The five-step method is a hydraulic engineer looking at the same dam.

**Step one**, she measures it: how high, how wide, on which stretch, where the spillway is — not merely “a dam was built.” **Step two**, she asks where the water will go: water does not vanish; it flows around, seeps under, spills over the crest, or floods another village upstream — every exit for the water is a margin of adjustment for an acting person. **Step three**, she walks downstream: the fish are gone, the banks are dry, the river town that depended on barges is dying — unseen, because the people at the dam never go downstream. **Step four**, she thinks about the water level as a signal: the difference in level between upstream and downstream used to tell everyone where water was plentiful and where scarce; now the level reflects the height of the dam, not real scarcity — the downstream farmer can no longer calculate whether to plant rice or dry crops. **Step five**, she predicts the next thing: when the downstream runs dry, people will demand a diversion channel; when the channel is dug, the upstream floods again and demands a levee … every structure is built to fix the problem left by the last one. And she knows who will show up at the council meeting demanding the dam (the village behind it — concentrated gain) and who will not (the town downstream — dispersed and far away).

She also knows when to say “it depends”: if the point of the dam was always to move water from downstream to upstream, that is a redistribution — she can price it, but the decision belongs to the citizens; and if a badly built old dam already sits upstream, simply tearing down the new one may make things worse.

What this lesson teaches is not “oppose dams.” It is **how to be the engineer who sees the whole river.**
`,

  misconceptions: [
    "**“The five-step method is just ‘find the unintended consequences.’”** — That is half of step three. The method requires you to name names: which consequence, on which group, through which margin of adjustment, distorting which price, summoning which next intervention. Saying “there will be unintended consequences” without saying what they are is saying nothing.",
    "**“After five steps the verdict is always ‘oppose the policy.’”** — Not necessarily. The output is costs, mechanisms and dynamics. For policies that are redistribution by nature, second-best choices within a given legal order, or genuine defense questions, economics can only count the cost; the final trade-off is a value judgment. Saying “it depends” and stating exactly what it depends on is mastery, not weakness.",
    "**“Step two is done once I have listed winners and losers.”** — The point is not the list but each actor's **margins of adjustment**: once the policy pins one variable, on which other variables can he move? A minimum wage pins the wage; employers adjust on hours, training, automation and hiring standards — the real effects almost always appear on the margins that were not pinned.",
    "**“Step four (prices and knowledge) is the same as the mainstream deadweight-loss triangle.”** — It is not. The deadweight triangle assumes knowledge is given and only counts lost quantity. The Austrian step asks which knowledge **never enters the system at all** and who **can no longer calculate**. After a rent freeze, the information “how much tighter is downtown than the suburbs” vanishes; the developer is not miscalculating — he has nothing to calculate with.",
    "**“Step five means predicting ‘which law passes next year.’”** — Step five predicts **direction and type** (shortage will be followed by rationing, rationing by quality mandates), never dates. Austrian theory yields pattern predictions; turning them into dated prophecy is the permabear error of Stage 14.4.",
  ],

  quiz: [
    {
      q: "A city caps rent increases on existing housing. Under step two, which statement best describes the landlord's “margins of adjustment”?",
      options: [
        "Landlords will go bankrupt because they cannot raise rents",
        "Landlords can adjust on maintenance, deposits, tenant screening, conversion to commercial use, and demolition-and-rebuild — the variables the policy did not pin",
        "Landlords will lobby collectively, so the policy will not last",
        "Landlords will sell their buildings to the city",
      ],
      answer: 1,
      explain: "**Margins of adjustment** are the heart of step two: the policy pins one variable (the rent) and actors move on every other; the real effects almost always appear on the unpinned margins.",
    },
    {
      q: "A 25% tariff is imposed on imported steel. Which of the following belongs to step three, “the unseen”?",
      options: [
        "The workers the steel mills hire",
        "The rise in the mills' profits",
        "The workers steel-using firms did not hire because their costs rose, and what consumers would have bought with the extra money they paid",
        "The tariff revenue",
      ],
      answer: 2,
      explain: "The seen is the mills' new hires and profits; the unseen is what did not happen — the jobs not created downstream, the spending that never went elsewhere. Bastiat's method is to trace exactly “that which does not exist.”",
    },
    {
      q: "A national subsidy cuts a firm's compute cost from 100 to 60. Under step four, what is the central problem?",
      options: [
        "The firm will become lazy",
        "The subsidy exceeds the budget",
        "The firm's income statement no longer tells it whether the project is worth doing at true cost — economic calculation has been cut",
        "Foreign governments will complain about unfair competition",
      ],
      answer: 2,
      explain: "Step four is about prices, knowledge and calculation: after the subsidy, projects that pay only with compute at 40% off get launched, and the profit-and-loss feedback loop is falsified — the definition of malinvestment, and the theme of Stage 18.5.",
    },
    {
      q: "In which case should an honest Austrian analysis say “it depends” rather than simply oppose?",
      options: [
        "When the policy claims to correct a market failure",
        "When the policy is redistribution by nature (e.g. disaster relief), so that economics can count the cost but the trade-off is a value judgment",
        "When the policy is supported by a majority of voters",
        "When the policy was designed by economists",
      ],
      answer: 1,
      explain: "The five steps yield costs, mechanisms and dynamics; for redistributive policies, whether the goal is worth the cost is an ethical question. Blurring economic analysis with value judgment is the “moralizing instead of analyzing” error.",
    },
    {
      q: "An analysis says: “Loan forgiveness will have hidden costs, and tuition will surely jump 30% next fall.” Against the rigor checklist, which two errors does it make?",
      options: [
        "It fails to name the unseen, and it makes a dated, precisely sized prediction",
        "It does not cite Mises, and it does not condemn the policy as immoral",
        "It is too short, and it has no mathematical model",
        "It does not list beneficiaries, and it offers no policy recommendation",
      ],
      answer: 0,
      explain: "“Hidden costs” must be named (taxpayers who never attended college; higher future borrowing), and theory gives direction and fragility, not dates and magnitudes — a dated, precise forecast is the permabear error of Stage 14.4.",
    },
  ],

  further: [
    { label: "Henry Hazlitt, Economics in One Lesson (1946) — the original “one group now vs all groups later” machine (FEE, full text)", url: "https://fee.org/resources/economics-in-one-lesson/" },
    { label: "Frédéric Bastiat, “That Which Is Seen, and That Which Is Not Seen” (1850) (Econlib)", url: "https://www.econlib.org/library/Bastiat/basEss1.html" },
    { label: "Mises, A Critique of Interventionism (1929) — the original argument that each intervention summons the next (Mises Institute)", url: "https://mises.org/library/book/critique-interventionism" },
    { label: "Mises, Human Action, Part Six “The Hampered Market Economy”", url: "https://mises.org/library/book/human-action" },
    { label: "Econlib Encyclopedia: Rent Control (Walter Block) — the classic analysis", url: "https://www.econlib.org/library/Enc/RentControl.html" },
  ],
};
