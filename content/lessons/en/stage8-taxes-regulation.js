export default {
  id: "taxes-regulation",
  stage: 8,
  order: 3,
  title: "Taxes, Subsidies & Regulation: The Hidden Costs",
  difficulty: "systems",
  prereqs: ["intervention-logic"],

  oneLiner:
    "Taxes, subsidies and regulation do not overwrite a price the way a cap does, so they look far “gentler” — they merely take a little, add a little, require a little. But each one changes the relative prices that acting people face, and each carries a large **unseen** cost: the exchanges a tax crowds out, the investment a subsidy bends in the wrong direction, the small firm a regulatory fixed cost crushes. This lesson works a numerical example of tax incidence and deadweight loss, explains why Rothbard says there is no such thing as a neutral tax, and then turns to the part most easily missed: **why regulation is so often demanded by incumbents rather than by consumers** — Stigler's capture theory and “Bootleggers and Baptists.”",

  intuition: `
You get a haircut. The barber charges 30. Now the government puts a 10 tax on every haircut. You think the barber pays it; the barber thinks you pay it — **who really pays the 10?**

The answer has nothing to do with who hands the money to the tax office. It depends on who **can least do without the exchange**. If you must have the haircut and the barber can easily switch trades, the tax lands on you; if you can cut your own hair and the barber knows only this one craft, it lands on him. In almost every real case it is split — and the split is the same regardless of whom the law names as the “payer.” That is **tax incidence**.

More important than “who pays,” though, is a **third consequence**. Some customers were willing to pay 32 for a haircut, and the barber was willing to take the job for 28 — in a world without the tax, that exchange happens and both gain. Now wedge in a 10 tax: 32 minus 10 is 22, below 28, and **the exchange does not happen**. The government collects nothing (there was no transaction), you go uncut, the barber earns nothing. That is **deadweight loss** — not transferred to anyone, simply gone. Bastiat (Stage 1.4) would call it the unseen.

A subsidy is a tax in reverse: the government **pays money into** a particular exchange. Pay it into corn ethanol, and corn flows from the dinner table to the fuel tank; pay it into electric cars, and some people buy cars they otherwise would not, while some factories that would have been built are not. A subsidy looks like “encouragement”; in fact it **pulls resources out of unsubsidised uses into subsidised ones** — and the unsubsidised uses are precisely the ones consumers wanted more (otherwise no subsidy would be needed).

Regulation is the subtlest of the three. It takes no money and pays no money; it merely “requires”: a license, a compliance officer, a report, a minimum capital. Each requirement is a **fixed cost** — spread over a billion in revenue it rounds to zero; spread over five million it is life or death. That is why **regulation is so often lobbied for by big firms themselves**: it is a moat, wider than any patent. Stigler said it plainly in 1971: regulatory agencies end up serving the industries they regulate. Yandle gave it a better picture: Prohibition was supported by “Baptists” (who sincerely believed drink was harmful) and “bootleggers” (whose business existed only because of Prohibition) — **behind every regulation stands one moral reason and one money reason.**

This lesson does not say taxes, subsidies and regulation should all be zero — that is a political judgment, not economics. What it gives you is a pair of glasses: whenever you see a tax, a subsidy, or a rule, **you automatically look for its unseen half.**

**In this lesson we break it into five pieces:**

- **① Tax incidence and deadweight loss: the arithmetic of a 10 tax**
- **② Rothbard: no neutral tax, and no tax that “just collects money”**
- **③ Subsidies: ethanol, EVs and farms — wherever the money goes, resources bend**
- **④ Regulation's hidden costs: capture, “Bootleggers and Baptists,” and the licensing moat**
- **⑤ The strongest case for safety regulation — the market's alternatives, and how an Austrian evaluates a rule**
`,

  mechanics: `
### ① Tax incidence and deadweight loss: the arithmetic of a 10 tax

Keep the market from Stage 8.2: demand Q_d = 100 − 2P, supply Q_s = −20 + 2P, equilibrium P* = 30, Q* = 40. Now levy a tax of 10 per unit, to be remitted by sellers.

The price buyers pay, P_b, and the price sellers keep, P_s, are separated by 10: P_b = P_s + 10. The market clears when what buyers want at P_b equals what sellers want to sell at P_s:

$$
100 − 2(P_s + 10) = −20 + 2P_s
80 − 2P_s = −20 + 2P_s → P_s = 25, P_b = 35, Q = 30
Tax revenue = 10 × 30 = 300
Deadweight loss = ½ × 10 × (40 − 30) = 50
$$

Three conclusions:

- **Incidence has nothing to do with the law.** Buyers go from paying 30 to paying 35 (5 more); sellers go from keeping 30 to keeping 25 (5 less). Rewrite the law so buyers remit the tax and the resulting P_b, P_s and Q are identical. Who “remits” is bookkeeping; who **bears** the tax is set by the two sides' elasticities. Here the slopes are equal, so the split is even; if demand were more inelastic (must-have goods), buyers would bear more.
- **Quantity falls from 40 to 30.** For each of those 10 units a buyer's willingness to pay exceeded a seller's cost (by less than 10), and now none of them trade. That is the deadweight loss of 50: the government receives 300, and buyers plus sellers lose 350 between them.
- **Deadweight loss grows faster than the tax rate.** Raise the tax from 10 to 20: Q falls to 20, revenue is 400, and deadweight loss is ½ × 20 × 20 = 200. Double the tax, quadruple the loss — both sides of the triangle are stretching. That is the arithmetic behind the Laffer curve, and why “just a little more” is never free.

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">A tax wedge of 10: buyers pay 35, sellers keep 25, quantity falls from 40 to 30</text><line x1="70" y1="270" x2="600" y2="270" stroke="var(--line)" stroke-width="1.5"/><line x1="70" y1="270" x2="70" y2="40" stroke="var(--line)" stroke-width="1.5"/><text x="600" y="290" text-anchor="end" font-size="11" fill="var(--muted)">quantity Q</text><line x1="70" y1="50" x2="520" y2="270" stroke="var(--blue)" stroke-width="2.5"/><text x="500" y="250" font-size="11" fill="var(--blue)" font-weight="600">demand</text><line x1="145" y1="270" x2="520" y2="70" stroke="var(--orange)" stroke-width="2.5"/><text x="480" y="72" font-size="11" fill="var(--orange-ink)" font-weight="600">supply</text><rect x="70" y="130" width="225" height="80" fill="var(--orange-soft)" opacity=".7"/><text x="180" y="175" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--orange-ink)">revenue = 10 × 30 = 300</text><polygon points="295,130 370,150 295,210" fill="var(--red-soft)" stroke="var(--red)" stroke-width="1" stroke-dasharray="3 2"/><text x="335" y="200" text-anchor="middle" font-size="11" fill="var(--red)" font-weight="700">DWL = 50</text><line x1="70" y1="130" x2="295" y2="130" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/><line x1="70" y1="210" x2="295" y2="210" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/><line x1="295" y1="130" x2="295" y2="270" stroke="var(--ink)" stroke-width="1.5"/><text x="295" y="288" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="700">Q = 30</text><circle cx="370" cy="150" r="5" fill="var(--ink)"/><line x1="370" y1="150" x2="370" y2="270" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/><text x="370" y="288" text-anchor="middle" font-size="11" fill="var(--muted)">Q* = 40</text><circle cx="295" cy="130" r="4" fill="var(--blue)"/><circle cx="295" cy="210" r="4" fill="var(--orange)"/><text x="62" y="134" text-anchor="end" font-size="11" fill="var(--blue)" font-weight="700">35</text><text x="62" y="154" text-anchor="end" font-size="11" fill="var(--muted)">30</text><text x="62" y="214" text-anchor="end" font-size="11" fill="var(--orange-ink)" font-weight="700">25</text><line x1="70" y1="150" x2="370" y2="150" stroke="var(--muted)" stroke-width="1" stroke-dasharray="2 4"/><text x="150" y="122" font-size="10.5" fill="var(--blue)">buyers pay 5 more</text><text x="150" y="226" font-size="10.5" fill="var(--orange-ink)">sellers keep 5 less</text><text x="320" y="308" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">Who “remits” the tax does not change this picture; whoever can least do without the trade bears more</text></svg><figcaption>The wedge pushes the buyer's and seller's prices 10 apart. The gold rectangle is the 300 transferred to the government; the red triangle is the 50 that vanished — ten mutually beneficial trades that nobody got.</figcaption></figure>

### ② Rothbard: no neutral tax, and no tax that “just collects money”

Mainstream public finance has spent great effort searching for a “neutral tax” — one that leaves relative prices untouched and merely moves money from the private sector to the government. Rothbard, in Chapter 4 of *Power and Market* (1970), argues **no such tax exists**.

The reason goes back to the typology of Stage 8.1: a tax is a **binary intervention** — a coerced exchange between the government and the taxpayer. And it has two motions, not one:

- **Taking.** Every tax must fall on some action — earning, spending, owning, trading — and so makes the taxed action dearer relative to untaxed ones. An income tax makes leisure cheaper relative to work; a capital-gains tax makes holding cheaper relative to trading; a sales tax makes saving cheaper relative to consuming. Even a “head tax” (a fixed sum per person) is not neutral: it changes the minimum income needed to survive and therefore the decisions to work and to migrate.
- **Spending.** Revenue does not vanish into a vacuum. The government uses it to buy goods, hire people and pay transfers — and that spending alters relative prices in turn, pulling resources from the uses taxpayers would have chosen toward the uses the government chooses. **To look at the distortion of the tax and not the distortion of the spending is to see half the picture.**

Rothbard borrows Franz Oppenheimer's distinction (*The State*, 1908): wealth is acquired by two means — the **economic means** (production and voluntary exchange) and the **political means** (coerced transfer). Taxation is the institutionalised form of the second. This is not to say government spending produces nothing — roads and courts do get built — but that **the mechanism for judging whether those outputs are worth their cost (profit and loss, Stage 6.3) does not exist here.** The taxpayer cannot decline to buy, so the government has no way to learn whether what it provides is worth what it charges. Stage 8.4 returns to this with Mises's *Bureaucracy*.

There is also a cost that appears in almost no statistic: **compliance**. American taxpayers spend billions of hours a year on returns; the tax lawyers, accountants and software that businesses employ exist to cope with the tax code itself, not to produce anything. These are not the least able people — quite the reverse; they are some of the most able, drawn out of productive uses by the code. It is the largest single block of the “unseen.”

### ③ Subsidies: ethanol, EVs and farms — wherever the money goes, resources bend

A subsidy is a negative tax. Same market: the government **pays** sellers 10 per unit.

$$
P_b = P_s − 10 → 100 − 2P_b = −20 + 2(P_b + 10) → P_b = 25, P_s = 35, Q = 50
Fiscal cost = 10 × 50 = 500
Deadweight loss = ½ × 10 × (50 − 40) = 50
$$

See what happened: quantity rose from 40 to 50, but for each of the extra 10 units **a buyer's willingness to pay is below the seller's cost** (otherwise it would have traded without the subsidy). Society spent 500 in taxes to buy ten “trades not worth making” — that is the 50 of deadweight loss. And the 500 would otherwise have stayed with taxpayers, buying what they actually wanted.

Three real cases, each showing a characteristic distortion:

- **Corn ethanol** (the U.S. Energy Policy Act of 2005 and the 2007 Renewable Fuel Standard). Blending mandates plus tax credits sent roughly four-tenths of the American corn crop into fuel tanks instead of dinner tables and feed troughs. Consequences: corn prices rose, feed costs rose, Mexico saw tortilla-price protests in 2007; marginal land was ploughed for corn, and the environmental benefit — the original rationale — came out near zero or negative in several studies. Most telling: **once a subsidy exists, an industry grows up that lives on it, and the political cost of removing it far exceeds the cost of creating it.**
- **EV and solar tax credits.** The direct beneficiaries are people who can afford electric cars (disproportionately high earners) and homeowners installing rooftop panels; the credits pull capital from unsubsidised technical paths toward subsidised ones — that is, **they decide on consumers' behalf which technology “should win,”** exactly what the discovery procedure of Stage 6.2 was supposed to do. They also manufacture Stage 5.2-style malinvestment: Solyndra (bankrupt in 2011 after about half a billion dollars in federal loan guarantees) is merely the best known.
- **Farm subsidies.** The bulk of American farm support goes to the largest operations, not the “family farm”; subtler still is **capitalisation**: payments tied to acreage are capitalised into land prices, so whoever owned the land when the subsidy was announced captured the present value of every future payment; farmers who buy or rent land afterwards pay the higher price and gain nothing. **The moment a subsidy is announced its beneficiaries are locked in; thereafter it is an annuity from taxpayers to landowners.**

Subsidies also have a spiral symmetric to the price cap's: the ethanol subsidy raises corn prices → ranchers demand feed support → higher food prices demand larger food stamps → every subsidy manufactures the case for the next.

### ④ Regulation's hidden costs: capture, “Bootleggers and Baptists,” and the licensing moat

The stated purpose of regulation is always to protect consumers, workers or the environment. The Austrian and public-choice question is: **whom does it actually protect?**

**Stigler's capture theory** (George Stigler, “The Theory of Economic Regulation,” 1971) answers bluntly: **regulation is typically acquired by the regulated industry and operated primarily for its benefit.** The mechanism: the industry has a concentrated, continuous interest in the agency, while consumers have only a dispersed, intermittent one (Stage 8.4 develops this); agency staff come from the industry and will return to it; and the “regulatory expertise” exists only inside the industry. The result is **regulatory capture**: entry barriers, price protection, “safety” reviews of newcomers. Stigler's classic case is the Civil Aeronautics Board, which from the 1930s to the 1970s approved not one new trunk airline; after deregulation in 1978, fares fell sharply.

**Yandle's “Bootleggers and Baptists”** (Bruce Yandle, 1983) adds the political link: for a regulation to pass it needs two constituencies — **“Baptists”** who supply the moral case (drink is harmful, Sunday sales should be banned) and **“bootleggers”** who supply money and lobbying (the ban is what makes their business thrive). The two need not collude, and may despise each other, but neither suffices alone. Whenever you see a regulation, look for the bootlegger: taxi-medallion owners opposing ride-hailing, large food conglomerates supporting complex labelling rules, the largest AI companies calling for “responsible AI regulation” (Stages 15.2 and 16.4).

**Occupational licensing** is capture in its most everyday form. In the 1950s about 5% of American workers needed a license; today it is about a quarter. The list is not just doctors and pilots — it includes interior designers (in some states), hair braiders, florists (Louisiana once required florists to pass an exam), funeral directors, massage therapists. Every license is issued by a board composed of current practitioners, who have a direct incentive to limit new entrants. The results: higher prices, harder interstate mobility, the low-income and immigrants kept out — while most studies find the measurable effect on service quality close to zero.

**Fixed costs are a moat.** This is the single most important numerical intuition for understanding modern regulation. Suppose a new rule (data compliance, reporting, capital adequacy) costs every firm an extra 1 million a year regardless of size:

- An incumbent with 500 million in revenue: 0.2% of revenue.
- A startup with 5 million in revenue: 20% of revenue — quite possibly its entire profit.

The incumbent does not need to “oppose” the rule; it only needs to “responsibly support” it. That is why big banks did not fight many provisions of Dodd–Frank, why big tech companies call for privacy and AI regulation, why big tobacco supported advertising bans (a ban freezes market shares). After the EU's GDPR took effect in 2018, several studies found smaller ad-tech firms lost market share while the largest platforms gained — **the rule was meant to constrain the giants; its effect was to entrench them.** In Stage 15.2's discussion of “winner-take-all,” this will be one of the most important rebuttals: many supposed natural monopolies have moats that were dug by regulators.

### ⑤ The strongest case for safety regulation — the market's alternatives, and how an Austrian evaluates a rule

Now state the other side at full strength. **The argument:** consumers cannot themselves test whether a drug is safe, a bridge sound, a food free of toxins — and when things go wrong the harm is irreversible (death). The market's after-the-fact punishments (lost custom, lawsuits) mean nothing to the dead. Asymmetric information plus irreversible harm makes a solid case for *ex ante* regulation. This is not capture; it is a real response to real risk — the FDA's existence is why thalidomide was never widely sold in the United States.

The Austrian reply does not deny the risk. It proceeds in three steps.

**Step one: see the alternatives the market has already grown.** In nearly every field said to “need regulation,” voluntary certification and warranty mechanisms already exist, and often predate and exceed the state's standards:

- **Third-party certification**: Underwriters Laboratories (founded 1894) certified electrical safety decades before most government standards; kosher certification is one of the world's largest private food-inspection systems; Michelin, Consumer Reports, and industry standards bodies (IEEE, ISO) are all private.
- **Insurers as private regulators**: insurance companies require sprinklers in the factories they cover, health inspections in the restaurants they cover, telematics in the cars they cover — because they bear the risk with their own money, their standard is “is it worth it?” rather than “can we avoid blame?”
- **Tort law and liability**: the seller of poisoned food pays damages — an *ex post* mechanism that makes *ex ante* care profitable.
- **Brands and reputation**: a brand built over twenty years is capital that a single incident can destroy; that is why large firms run quality control where no rule requires it. Stage 16.2 shows how platform rating systems extend this mechanism to millions of small sellers.

**Step two: admit candidly that private mechanisms also fail.** In 2008 the credit-rating agencies stamped AAA on subprime bonds — a failure of private certification. But look at the detail: the agencies' status was **conferred by regulation** (the SEC's “NRSRO” list, created in 1975, with rules requiring institutional investors to buy only bonds they had rated), so their revenue did not depend on rating accurately. This is not “market failure versus regulatory fix”; it is a half-market mechanism whose incentives regulation had already bent. Likewise, the FDA really did keep thalidomide off the market; how many effective drugs its approval delays kept off the market for a decade, and how many people died meanwhile, is the unseen — and several studies estimate that number far exceeds the harm from bad drugs it stopped. **The claim is not that regulation has no benefits; it is that its costs never get booked.**

**Step three: apply a procedure.** This previews the five-step method of Stage 14.1. Faced with any regulation, ask in order:

- **Which exchange does it forbid or compel?** Identify the voluntary trades eliminated (the source of deadweight loss).
- **Who bears the fixed cost?** Run the numbers by firm size — is it a moat?
- **Which margins will adjust?** Price, quality, hours, entry, automation, relocation (the homework of Stage 8.2).
- **Who is the bootlegger?** Find the industry insiders who profit from the rule.
- **What alternative did the market already have?** Will the rule crowd out a private mechanism that was working?
- **How big is the ratchet risk?** Is there a sunset clause? Who has an incentive to make it permanent?

Run any rule through these six questions and you will find that most “consumer protection” regulation comes apart at question four. You will also find a few that pass all six — and then you can support them with more confidence.

The lesson in one sentence: **taxes, subsidies and regulation are all interventions; their costs divide into a visible ledger and an invisible triangle, and the Austrian's job is to draw the triangle.**
`,

  demo: "regulation-cost",

  analogy: `
Picture the economy as a **river**. The water is resources; the direction of flow is set by the lie of the land (consumers' valuations).

**A tax** is a board wedged into the river: the water level rises upstream of it (buyers pay more) and falls downstream (sellers keep less), and the flow shrinks (fewer trades). The board makes no water of its own — it merely diverts some into the government's channel — and in the gap between the two levels a small eddy of water spins forever, going nowhere. That eddy is deadweight loss.

**A subsidy** is a pump pushing water from the government's channel into one particular tributary: that tributary looks vibrant (ethanol plants, solar factories), but the pumped water was drawn from other tributaries, and those were flowing where the land said they should. Stop the pump and the tributary dries up — which is why the people on it fight so hard to keep the pump running.

**Regulation** is a lock gate across the channel, with a “compliance toll” to pass through — big ships can pay, small boats cannot. Strangely, the loudest calls to build the gate often come from the big ships: they say it is for safety (the Baptists), but the real effect is that the small boats never get through again (the bootleggers).

The Austrian economist's job is not to oppose every board, pump and gate. It is to stand on the bank and point out **the water diverted, the tributaries drained, the small boats turned back** — see them first, then decide whether to build.
`,

  misconceptions: [
    "**“Whoever remits the tax bears it.”** — The legal payer is bookkeeping. Incidence is set by elasticity: the side that can least do without the trade bears more. In this lesson's example, whether buyers or sellers remit, buyers pay 5 more and sellers keep 5 less. “Taxing corporations” routinely lands on employees and customers.",
    "**“A tax just moves money from private hands to the government; the total is unchanged.”** — Two things are missing: deadweight loss (the mutually beneficial trades that never happen and that nobody receives) and compliance cost (billions of hours and some of the ablest people diverted to coping with the code). The government gets 300; buyers and sellers lose 350; the difference is what vanished.",
    "**“The subsidy created a new industry, so it created value.”** — The subsidy created trades that were not worth making: for every extra unit, the buyer's willingness to pay is below the seller's cost. The industry is real, but it lives on resources taken from taxpayers and dries up when the subsidy ends — ethanol is the example. The seen factory; the unseen is what taxpayers would have bought.",
    "**“Regulation is won by consumers to restrain big business.”** — Stigler (1971): regulation is usually acquired by the industry itself. A fixed compliance cost is fatal to a small firm and a rounding error to a giant, so the giant “responsibly supports” the rule. After GDPR, small ad-tech firms lost share and the largest platforms gained — the latest example. When you see a regulation, find the bootlegger first.",
    "**“Without the FDA or licensing there would be no safety assurance at all.”** — Private certification (UL since 1894), insurers' underwriting standards, tort liability, brand reputation and platform ratings existed and functioned before most regulation. Private mechanisms fail too (the rating agencies in 2008) — but in that case their status had been conferred by regulation. The question was never “is there assurance?” but “which assurance has its costs on the books?”",
  ],

  quiz: [
    {
      q: "Demand Q_d = 100 − 2P, supply Q_s = −20 + 2P; a tax of 10 per unit is levied on sellers. What price do buyers pay, and what price do sellers keep?",
      options: ["40 and 30", "35 and 25", "30 and 20", "35 and 35"],
      answer: 1,
      explain: "P_b = P_s + 10; substituting into the clearing condition gives P_s = 25, P_b = 35, Q = 30. Buyers pay 5 more, sellers keep 5 less — equal elasticities, so an even split; make buyers the remitter and the numbers are identical.",
    },
    {
      q: "Same market: the tax rises from 10 to 20. Deadweight loss goes from 50 to what?",
      options: ["100", "150", "200", "400"],
      answer: 2,
      explain: "At a tax of 20, Q falls to 20, and DWL = ½ × 20 × (40 − 20) = **200**. Double the tax, quadruple the loss — both sides of the triangle stretch.",
    },
    {
      q: "What does Yandle's “Bootleggers and Baptists” describe?",
      options: [
        "Regulation is always driven by moral motives",
        "A regulation typically needs both a group supplying the moral case and a group that profits from it; they need not collude, but neither suffices alone",
        "Bootleggers always oppose regulation",
        "Religious groups are behind all regulation",
      ],
      answer: 1,
      explain: "Prohibition's supporters: Baptists (sincerely believing drink harmful) and bootleggers (whose business the ban created). When analysing any regulation, first ask who is making money.",
    },
    {
      q: "A new rule costs every firm a fixed 1 million a year. For an incumbent with 500 million in revenue and a startup with 5 million, what share of revenue does it consume?",
      options: ["2% for both", "0.2% and 20%", "2% and 0.2%", "0.2% and 2%"],
      answer: 1,
      explain: "1 million / 500 million = **0.2%**; 1 million / 5 million = **20%**. A fixed compliance cost is life-or-death for the small firm and a rounding error for the giant — which is why regulation is so often a moat the incumbent asked for.",
    },
    {
      q: "Which of the following is **not** part of the Austrian reply to “drugs need ex ante regulation because the harm is irreversible”?",
      options: [
        "Private certification, insurance standards, tort liability and brand reputation existed before most regulation",
        "Private mechanisms can fail too, but the 2008 rating agencies' status had been conferred by regulation",
        "Deaths from effective drugs delayed by the approval process are the unseen and never get booked",
        "Drug safety does not matter; the market automatically weeds out bad drugs",
      ],
      answer: 3,
      explain: "Austrians never deny that the risk is real; their reply points to market alternatives, admits the detail of private failures, and draws the regulation's unseen cost (delay). “It does not matter” is a straw man.",
    },
  ],

  further: [
    { label: "Rothbard, Power and Market, Ch. 4 “Binary Intervention: Taxation” — the case that no tax is neutral", url: "https://mises.org/library/book/man-economy-and-state-power-and-market" },
    { label: "George Stigler, “The Theory of Economic Regulation” (Bell Journal of Economics, 1971) — the original capture-theory paper", url: "https://www.jstor.org/stable/3003160" },
    { label: "Bruce Yandle, “Bootleggers and Baptists: The Education of a Regulatory Economist” (Regulation, 1983)", url: "https://www.cato.org/sites/cato.org/files/serials/files/regulation/1983/5/v7n3-3.pdf" },
    { label: "Mises, Human Action, Ch. 28 “Interference by Taxation” and Ch. 29 “Restriction of Production”", url: "https://mises.org/library/book/human-action" },
    { label: "Econlib Encyclopedia: Occupational Licensing (S. David Young)", url: "https://www.econlib.org/library/Enc/OccupationalLicensing.html" },
  ],
};
