export default {
  id: "profit-loss",
  stage: 6,
  order: 3,
  title: "Profit & Loss: The Market's Feedback System & Consumer Sovereignty",
  difficulty: "core",
  prereqs: ["entrepreneur-alertness"],

  oneLiner:
    "Most people understand profit as “the extra the owner takes out of the customer's pocket,” and loss as “bad luck.” Mises's 1951 essay “Profit and Loss” turns both words inside out: **profit is a report card consumers hand to the entrepreneur** — it says “you turned resources worth $900 into something we were willing to pay $1,200 for”; **loss is the other side of the same card** — “you wasted resources worth $900 on something worth only $800; hand the resources back.” Without loss, the market is a machine with no brakes. This lesson explains where profit comes from, why it is doomed to disappear, why every dollar is a ballot, and why the phrase “greedy corporations” does not survive logical inspection.",

  intuition: `
A bakery closes. The neighbors say: the owner had bad luck, the rent was too high, the supermarket was ruthless. All of that may be true, but it misses **the most important thing**: the flour, labor, electricity, premises and money this bakery consumed **could have produced something the neighbors wanted more, had they been used elsewhere.** Its loss is the market speaking on the neighbors' behalf: “the resources you were occupying — we would rather they did something else.”

Now the opposite. A bakery makes a fortune. The neighbors say: the owner is gouging us. But consider where the money came from. He first paid for flour, hired workers, rented premises, borrowed capital — **and those prices were set by his bidding against everyone else who wanted flour, workers and premises** (Stage 1.3). He paid $900, made bread, and the neighbors willingly handed over $1,200. The extra $300 is the neighbors saying: “you put these resources to a better use than anyone else thought of.”

That is the core of Mises's famous 1951 essay: **profit and loss are not moral concepts; they are information.** They are the grades consumers assign, after the fact, to every entrepreneurial judgment (Stage 6.1). High scorers receive more resources to keep judging with; low scorers have resources taken away. The entire market relies on this one feedback system to push millions of resources continually toward the uses consumers want most — with nobody planning from the center, and no need for anyone to. Stage 7.1 shows that once this feedback system is removed (no private property, no market prices), a planner with the best intentions in the world cannot tell whether he is creating value or destroying it.

Mises had an even more radical way of putting it: the market is a **plebiscite held every day**, in which every dollar is a ballot. Buying bread from this bakery rather than that one is a vote; giving up a phone to buy a bicycle is a vote against the phone maker and a vote for the bicycle maker. The entrepreneur looks like the market's master; in fact he is **a public servant the voters can dismiss at any moment** — every decision he makes is a guess about whom the voters will choose next time. This is **consumer sovereignty**.

Once you see this, a number of popular claims fall apart on their own. “Greedy corporations” — profit can only be earned by first serving consumers; greed as such produces not a cent unless it first gets someone to pay voluntarily. “Advertising manipulates consumers” — if advertising could conjure demand out of nothing, why do so many products with enormous ad budgets die every year? “Profit is exploitation” — then what is loss, reverse exploitation?

This lesson also has to be candid: there is a kind of profit that **does not** come from serving consumers — money earned by using tariffs, licenses, subsidies or regulation to keep competitors out (the state barriers of Stage 6.2, the logic of intervention of Stage 8.1). Austrians do not defend all profit, only **profit won under free entry by consumers' votes.** Telling the two apart is a tool the second half of this course (Stages 8 and 15) uses again and again.

**In this lesson we break it into five pieces:**

- **① Where profit comes from: anticipating consumers' valuations and buying factors for less than the product sells**
- **② Loss is the essential corrective: why a “market without losses” is scarier than a “market without profits”**
- **③ Why profit tends to zero: the evenly rotating economy and the chase of competition**
- **④ Consumer sovereignty: the daily plebiscite and the category error of “greedy corporations”**
- **⑤ Advertising and brands: steelman Galbraith first, then reply**
`,

  mechanics: `
### ① Where profit comes from: anticipating consumers' valuations and buying factors for less than the product sells

Mises opens “Profit and Loss” (written in 1951 for a Mont Pèlerin Society meeting, later collected in *Planning for Freedom*) with a definition: **profit is the excess of the price received for a product over the prices paid for the factors used to make it.** That sounds like a tautology; the real question is: **why should such an excess ever exist?**

In Stage 1.1 we learned about imputation: factor prices are derived, order by order, from consumers' valuations of the final product. If every entrepreneur foresaw consumers' valuations perfectly, flour, labor and premises would be bid up to exactly their contribution to the price of bread — **cost would equal price and profit would be zero.** So profit appears in only one situation: **some entrepreneur sees a use for the factors that others have not seen, and the others' bids for those factors do not yet reflect that use.** He buys the factors at their “old-use” price, makes a “new-use” product, and the difference is his profit.

A complete numerical example. A baker plans 1,000 loaves:

$$
Flour 300 + labor 400 + rent and energy 100 + interest on 2,000 of capital at 5% = 100
Total cost = 900 (interest included)
$$

Note that **interest is already in the cost** — it is the return to the capitalist's hat (Stage 3.1), not profit. Now watch how consumers vote:

- **Case A:** consumers buy all 1,000 loaves at $1.20; revenue $1,200. **Profit = $300.** Meaning: the baker turned a bundle of resources the market valued at $900 into something consumers value at $1,200. He **created** $300 of value — taken from nobody.
- **Case B:** consumers will pay only $0.80; revenue $800. **Loss = $100.** Meaning: these $900 of resources could have produced at least $900 of value elsewhere (that is where their market price came from), and produced only $800 here. He **destroyed** $100 of value.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">One P&amp;L statement: factor costs are consumers' valuation “elsewhere,” revenue is their valuation “here”</text><g><rect x="70" y="70" width="90" height="150" fill="var(--blue-soft)" stroke="var(--blue)"/><rect x="70" y="70" width="90" height="50" fill="var(--blue)" opacity=".85"/><rect x="70" y="120" width="90" height="67" fill="var(--blue)" opacity=".65"/><rect x="70" y="187" width="90" height="16" fill="var(--blue)" opacity=".45"/><rect x="70" y="203" width="90" height="17" fill="var(--blue)" opacity=".3"/><text x="115" y="100" text-anchor="middle" font-size="10" fill="#fff">flour 300</text><text x="115" y="158" text-anchor="middle" font-size="10" fill="#fff">labor 400</text><text x="115" y="199" text-anchor="middle" font-size="9" fill="var(--ink)">rent 100</text><text x="115" y="216" text-anchor="middle" font-size="9" fill="var(--ink)">interest 100</text><text x="115" y="240" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">cost 900</text><text x="115" y="256" text-anchor="middle" font-size="10" fill="var(--muted)">(incl. the capitalist's interest)</text></g><g><rect x="250" y="20" width="90" height="200" fill="var(--green-soft)" stroke="var(--green)"/><rect x="250" y="20" width="90" height="50" fill="var(--green)" opacity=".9"/><text x="295" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">profit +300</text><text x="295" y="130" text-anchor="middle" font-size="10" fill="var(--ink)">consumers pay 1,200</text><text x="295" y="240" text-anchor="middle" font-size="11" font-weight="700" fill="var(--green)">Case A</text><text x="295" y="256" text-anchor="middle" font-size="10" fill="var(--muted)">$1.20 a loaf</text></g><g><rect x="430" y="87" width="90" height="133" fill="var(--red-soft)" stroke="var(--red)"/><rect x="430" y="70" width="90" height="17" fill="none" stroke="var(--red)" stroke-dasharray="3 2"/><text x="475" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="var(--red)">loss −100</text><text x="475" y="160" text-anchor="middle" font-size="10" fill="var(--ink)">consumers pay 800</text><text x="475" y="240" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Case B</text><text x="475" y="256" text-anchor="middle" font-size="10" fill="var(--muted)">$0.80 a loaf</text></g><line x1="50" y1="70" x2="590" y2="70" stroke="var(--muted)" stroke-dasharray="4 3"/><text x="590" y="64" text-anchor="end" font-size="10" fill="var(--muted)">cost line 900</text><line x1="50" y1="220" x2="590" y2="220" stroke="var(--line)"/><text x="320" y="288" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">Profit = resources moved to a higher use; loss = resources pulled away from a higher use — the market demands them back</text></svg><figcaption>The same $900 of factors (priced by bids for their uses elsewhere) are re-valued by consumers once baked: $1,200 is a reward, $800 a penalty. Interest sits inside cost; profit is the reward for judgment after interest is paid.</figcaption></figure>

Hence Mises's point: **profit is not “a layer added on top of cost”; it is consumers' after-the-fact grade on the entrepreneur's judgment.** It is a pure residual with no such thing as a “fair rate”; it can be positive, zero or negative, depending on how well you guessed.

### ② Loss is the essential corrective: why a “market without losses” is scarier than a “market without profits”

Austrians are often described as “defenders of profit.” More accurately, they are **defenders of loss** — because loss is the part of the market that does the most work.

Consider what happens after Case B. The baker has lost $100 and has three options: change the product, cut costs, or close. Whichever he chooses, he **releases** resources: buys less flour, hires fewer people, gives up the lease — and those resources return to the market to be bought by higher bidders, that is, by people whose products consumers want more. **Loss is the mechanism by which the market takes resources back from those who misjudged**, and it is automatic, requiring no one's order: once the money is gone, you cannot afford the factors.

What if there were no losses? Imagine a world where a wrong judgment never has to be paid for — government subsidies, banks that roll loans over forever, losses “socialized.” Then wrong judgments **keep hold of resources**: $900 of inputs are turned into $800 of output round after round, destroying value every time, with no signal to make it stop. That is the zombie firm of Stage 10.4, and the micro-level version of Stage 5.3's “liquidation is the cure, not the disease”: **to prevent losses is to prevent correction.**

One sentence of Mises's is worth memorizing: **in the market economy, profit and loss are two sides of one coin; their only function is to shift control over production from those who are bad at serving consumers to those who are good at it.** A market with profits but no losses does not exist — that is simply a system of privilege.

### ③ Why profit tends to zero: the evenly rotating economy and the chase of competition

Return to the ERE of Stage 6.1. In a world with no change at all, every entrepreneur has already guessed everything right and every factor price is fully imputed; **profit is identically zero** — only wages, rent and interest remain. This does not mean “entrepreneurs earn nothing”; it means every dollar they earn can be attributed to labor, land or time, with no residual left over.

The real world is not an ERE, but **it is being pulled toward the ERE every moment.** When the baker earns $300 in Case A, three things follow (the discovery procedure of Stage 6.2):

- **Imitators enter**: other bakers notice and make the same bread — supply rises and the price drifts down from $1.20.
- **Factor prices are bid up**: everyone who wants to make this bread buys the same flour and hires the same kind of worker — flour rises from 300 to 380, labor from 400 to 480.
- **Profit is squeezed from both ends**: price down, cost up; the $300 becomes $30 after a few rounds and zero after a few more.

$$
Round 1: 1,200 − 900 = +300
Round 3: 1,080 − 1,010 = +70
Round 6: 1,000 − 1,000 = 0 (the new ERE position)
$$

This is why **profit is essentially temporary.** It is the reward for “seeing it before others did,” and the advantage of “before” is necessarily erased by time. To keep earning, the entrepreneur must keep making new correct judgments — discovering the next residual. Any high profit that persists for a long time is either the product of continuous innovation, or the sign that something is keeping imitators out (the question of Stage 6.4).

Incidentally, this is also why a “profit margin” is such a hard statistic to interpret: it lumps three completely different incomes — interest (the return to time), the manager's implicit wage, and true entrepreneurial profit — into one number. A company with a 10% accounting profit may have zero or even negative entrepreneurial profit (if its capital could earn 12% elsewhere).

### ④ Consumer sovereignty: the daily plebiscite and the category error of “greedy corporations”

The term “consumer sovereignty” was coined by W. H. Hutt in 1936; Mises turned it into a central image of *Human Action*: **the market economy is a plebiscite held every day, one dollar one vote.** Consumers need no meetings and no ballot boxes — by buying or not buying they already decide who keeps using resources, who must give them up, what gets produced and what gets discontinued.

Three details of this picture are easily missed:

- **The entrepreneur is not the master but a servant who can be dismissed at any time.** However large a company, if consumers stop buying tomorrow it starts bleeding just like the baker in Case B. A big company's “power” is delegated, not owned — that is the story of Blockbuster, Nokia and Kodak in Stage 15.5.
- **The vote is unequal: those with more money have more ballots.** Austrians do not dodge this. Mises's answer is that (on a free market) the money of the rich was itself won in past plebiscites — each of their dollars is a vote consumers cast for them earlier; and every dollar the rich spend can, in the end, go only to **things consumers are willing to buy** — in other words, it flows back into the plebiscite. Whether the starting positions were fair is a different question (the origin of property, Stage 9.1), not a question about the profit mechanism itself.
- **Profit requires service first, reward second.** This leads directly to the logical problem with the phrase “greedy corporations.” Greed is a motive; it can drive people to do anything — but on a market with free entry, **the only way greed can cash out is by getting someone else to pay voluntarily**, and people pay only for what they want more. So “they made money because they were greedy” is missing a link: in between must come “they served consumers.” Attributing profit to greed is like attributing a high exam score to “wanting a high score” — plenty of students want that; the grade depends on what you got right.

**The boundary of the category error.** This argument holds only under **free entry.** If a company's profit comes from a tariff that shuts out foreign rivals, a license that shuts out new entrants, a subsidy paid by taxpayers, or regulation that small competitors cannot survive — then it really can “make money from greed” without serving anyone. In Austrian vocabulary that income is not profit but **rent-seeking** (Stages 8.3, 8.4). So the Austrian position is not “corporations are always innocent” but: **look at the source of the profit first, then decide which word to use.**

### ⑤ Advertising and brands: steelman Galbraith first, then reply

If profit comes from serving consumers, a sharp objection follows: **are consumers' “wants” themselves manufactured?** The strongest version of this objection is the “dependence effect” in John Kenneth Galbraith's *The Affluent Society* (1958). It deserves a careful statement:

- In a poor society, wants precede production: people are hungry, so someone bakes bread.
- In an affluent society, production precedes wants: firms build products first, then use advertising to **manufacture** the desire for them.
- So “consumer sovereignty” is an illusion — the votes consumers cast were written for them in advance by firms. Satisfying a want created by advertising adds nothing to welfare, just as “making people sick and then selling them medicine” is not health care.

This is a serious argument, and it captures something real: advertising does change what people want. The Austrian reply comes in three layers.

**First layer (Hayek, 1961, “The Non Sequitur of the ‘Dependence Effect’”):** the inference “a want is not innate, therefore it does not count” fails. Apart from food and sleep, almost every human desire is “manufactured” by culture, education and the example of others — the taste for music, literature and science included. If wants shaped by the environment do not count, almost no wants count. Galbraith quietly assumes a list of “genuine wants” — and only he can write it.

**Second layer (Kirzner):** advertising is **part of the discovery procedure.** In a world of imperfect information, consumers do not know what is available; half the entrepreneur's job is to discover what consumers want, the other half is to **let consumers know the thing exists.** Advertising is alertness transmitted: it delivers the message “here is an opportunity you may not have noticed” to the consumer. A world without advertising is not a world of more “authentic” wants but a world of more ignorant consumers.

**Third layer (Rothbard and the evidence):** if advertising could manufacture demand, the most heavily advertised products would all survive — yet New Coke (1985), Microsoft's Zune, Google Glass and countless heavily promoted films and drinks died. **Advertising can bring people to the door; whether they pay is still up to them.** Brands work the same way: a brand is the entrepreneur's reputation posted as **collateral** — a firm that has built a brand can destroy years of accumulation with a single deception, so the brand protects consumers rather than chaining them.

Austrians should also concede what Galbraith got right: advertising does exploit cognitive biases (the behavioral economics of Stage 11.5), and attention really is a scarce resource that can be “harvested” — Stage 16.1 deals seriously with where advertising ends and manipulation begins in the attention economy. But the conclusion stands: **advertising is the information infrastructure of consumer sovereignty, not a substitute for it.** The voters in the plebiscite can be lobbied, but the ballots remain in their hands.

The lesson in one sentence: **profit is the bonus consumers pay for correct judgment, loss is the fine they impose for wrong judgment, and together they form the market's only automatic, permission-free correction system.** Stage 18.3 will ask: when AI takes part in judgment, who receives the report card? The answer is still: whoever staked the resources.
`,

  demo: "plebiscite",

  analogy: `
Think of the market as a **school with no headmaster**: millions of students (entrepreneurs) sitting exams (judgments), graded not by teachers but by **hundreds of millions of consumers' wallets.**

Every time a consumer pays for what you made, your paper gains a point; every time she walks past your shop to someone else's, it loses one. **Profit is a positive total at term's end**: you got more right than wrong, and the school hands you more paper and pens (resources) to keep sitting exams. **Loss is a negative total**: you got too much wrong, and the school takes your pens and gives them to the higher scorers.

The school has a few rules; understand them and you understand the whole market:

- **There is no answer key.** The examiners (consumers) do not themselves know what they will want next year; they only say “I like this one” when they see the paper. So students cannot memorize — they can only guess. That is the judgment of Stage 6.1.
- **Last term's full marks do not carry over.** Get one question right and tomorrow everyone copies your answer (the imitation of Stage 6.2), so that question stops scoring. To keep scoring you must keep answering new questions — profit tends to zero.
- **Scores can be “stolen,” but only one way: get the governors (the state) to rule that certain questions may be answered by you alone.** Then your score comes not from the examiners but from forbidding others to hand in papers — that is rent-seeking. It looks like profit, but the examiner's pen never touched your paper.
- **“The examiners were fooled by advertising” is half right.** Advertising carries your paper to the examiners' desk — without it they would not know the paper existed; but once it is there, whether it gets a mark is still up to their pen.

Keep this picture: Stage 8.1 shows what happens when the governors start interfering with the grading; Stage 15.3 shows how scores work when “paper and pens” become code with zero marginal cost; Stage 16.1 shows who harvests the examiners' attention when attention itself becomes the scarcest thing.
`,

  misconceptions: [
    "**“Profit is money the owner takes from customers, so higher profit means worse exploitation.”** — Profit is the price consumers voluntarily pay minus factor costs, and factor costs are what those resources could have created elsewhere. Positive profit means the entrepreneur moved resources to a higher use — **creation**, not transfer. Income that really is a transfer (tariffs, licenses, subsidies) is called rent-seeking in Austrian vocabulary, not profit.",
    "**“Loss is misfortune; good policy should prevent firms from losing money.”** — Loss is the only automatic mechanism by which the market takes resources back from those who misjudged. Shielding firms from losses lets $900 of resources be turned into $800 of output indefinitely with no signal to stop — which is exactly how zombie firms and malinvestment persist (Stages 5.3, 10.4).",
    "**“A company with a stable 10% margin for years is obviously well run.”** — Accounting profit mixes interest, the manager's implicit wage and true entrepreneurial profit; and entrepreneurial profit is inherently temporary, squeezed by imitators from one side and rising factor prices from the other. A persistently high profit comes either from continuous new judgments or from something keeping imitators out — you have to ask which (Stage 6.4).",
    "**“Advertising creates wants, so consumer sovereignty is a sham.”** — This is Galbraith's dependence effect. Hayek's reply: almost all human wants are shaped by the environment, and “shaped” does not imply “does not count.” Kirzner's reply: advertising tells people who did not know that the thing exists — it is part of the discovery procedure. The empirical reply: the most heavily advertised products fail all the time — the ballots are still in consumers' hands.",
    "**“Consumer sovereignty means the customer is always right and entrepreneurs merely execute orders.”** — Consumers do not know in advance what they want (nobody in 2006 “demanded” a touchscreen phone); the entrepreneur's job is to guess, try, and be graded. Sovereignty means consumers hold the **final verdict**, not that they wrote the answers ahead of time.",
  ],

  quiz: [
    {
      q: "A baker spends $300 on flour, $400 on labor, $100 on rent and $100 on interest to make 1,000 loaves, and sells them all at $1.20. On Mises's definition, what is his entrepreneurial profit?",
      options: [
        "$1,200",
        "$400 (revenue minus factor costs; interest is not a cost)",
        "$300 (revenue minus all costs including interest)",
        "$0 (profit is always zero in the long run)",
      ],
      answer: 2,
      explain: "Interest is the return to the capitalist's hat and belongs in cost. 1,200 − (300+400+100+100) = **$300** — consumers' after-the-fact grade on the baker's judgment: he turned resources the market valued at $900 into something consumers value at $1,200.",
    },
    {
      q: "Same bakery, but consumers will pay only $0.80 a loaf, for a loss of $100. What does that $100 loss “say”?",
      options: [
        "The baker had bad luck",
        "These $900 of resources could have produced at least $900 of value elsewhere and produced only $800 here — the market demands them back",
        "Consumers are irrational",
        "The government should subsidize the bakery",
      ],
      answer: 1,
      explain: "Factor prices come from their uses elsewhere. A loss means **$100 of value was destroyed**, and the loss automatically leaves the baker unable to afford factors — the market's only correction mechanism that needs nobody's approval.",
    },
    {
      q: "Why does Mises say entrepreneurial profit is “essentially temporary”?",
      options: [
        "Because governments tax it away",
        "Because imitators push the selling price down while bidding for the same factors pushes costs up, squeezing profit toward zero from both ends",
        "Because consumer preferences change randomly every day",
        "Because entrepreneurs spend all their profits",
      ],
      answer: 1,
      explain: "Profit rewards “seeing it before others,” and “before” is erased by time: bread drifts down from $1.20 while flour and labor rise from 700 to 860, and after a few rounds the residual is gone. This is the market being pulled toward the evenly rotating economy.",
    },
    {
      q: "“Greedy corporations made a fortune out of greed.” Why do Austrians call this a category error on a market with free entry?",
      options: [
        "Because corporations cannot be greedy",
        "Because the only way greed can cash out is by getting others to pay voluntarily, and people pay only for what they want more — “served consumers” must come in between",
        "Because profit is always zero",
        "Because consumers never make mistakes",
      ],
      answer: 1,
      explain: "Motives do not generate income; service does. But note the boundary: when tariffs, licenses or subsidies keep competitors out, profit can bypass serving consumers — that is **rent-seeking**, which Austrians do not defend.",
    },
    {
      q: "What was the core of Hayek's 1961 reply to Galbraith's “dependence effect”?",
      options: [
        "Advertising is a tiny share of GDP and can be ignored",
        "Almost all human wants (including the taste for music and science) are shaped by the environment; “shaped” does not imply “does not count”",
        "Galbraith's data were wrong",
        "Consumers should be banned from watching advertisements",
      ],
      answer: 1,
      explain: "That is the “non sequitur” in Hayek's title: from “the want is not innate” you cannot infer “satisfying it adds no welfare.” Otherwise Galbraith needs a list of “genuine wants” — and only he can write it.",
    },
  ],

  further: [
    { label: "Mises, “Profit and Loss” (1951) — full text (Mises Institute)", url: "https://mises.org/library/book/profit-and-loss" },
    { label: "Mises, Human Action, Chapter XV, “The Market” — consumer sovereignty and the entrepreneurial function", url: "https://mises.org/library/book/human-action" },
    { label: "Hayek, “The Non Sequitur of the ‘Dependence Effect’,” Southern Economic Journal (1961) — the reply to Galbraith", url: "https://www.jstor.org/stable/1055533" },
    { label: "Kirzner, “Advertising,” The Freeman (1972) — advertising as part of the discovery procedure (FEE)", url: "https://fee.org/articles/advertising/" },
    { label: "Econlib Concise Encyclopedia: Profits", url: "https://www.econlib.org/library/Enc/Profits.html" },
  ],
};
