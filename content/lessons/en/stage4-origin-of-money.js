export default {
  id: "origin-of-money",
  stage: 4,
  order: 1,
  title: "The Origin of Money: Menger's Evolution & Mises's Regression Theorem",
  difficulty: "core",
  prereqs: ["exchange-division", "subjective-value"],

  oneLiner:
    "Nobody invented money, just as nobody invented language. In 1892 Carl Menger showed that in a barter world every trader has a reason to accept goods they do not want to use — because those goods will be **easier to sell next time** — and that the most saleable good snowballs into the thing everyone accepts: a medium of exchange. In 1912 Ludwig von Mises added the last brick: money's purchasing power today rests on its purchasing power yesterday, all the way back to the day it was still an ordinary commodity — the **regression theorem**. This lesson explains where money comes from, and hands you the ruler you will need for fiat money, free banking, and Bitcoin.",

  intuition: `
Picture a village without money. You are a cobbler and tonight you want fish. You carry a pair of shoes to the fisherman — who says, “I don't need shoes; I need an axe.” So you go to the blacksmith, who says, “No shoes, thanks; I want flour.” You go to the miller … and by evening you may not have a single fish.

This predicament has a name: the **double coincidence of wants**. For barter to work, two things must be true at once — I have what you want, *and* you have what I want. Both coinciding is rare, and it gets rarer, not commoner, as the division of labor deepens and the number of goods multiplies. Stage 1.5 showed that specialization makes everyone richer; but the deeper the specialization, the more hopeless direct exchange becomes. **The division of labor creates a problem it cannot solve by itself.**

What does a shrewd cobbler do? He notices that **some goods are accepted by almost everyone**. Salt, say — every household needs it, it keeps, it can be split into small portions. So he swaps his shoes for salt even though he has plenty of salt at home, and then swaps the salt for fish. He accepts salt not to use it but because **it will be easier to sell next time**. This is **indirect exchange** — the seed of money.

The decisive step comes next. Once some people use salt as a way-station, salt becomes more saleable (more people will take it); as it becomes more saleable, more people adopt it as a way-station; as more people adopt it, it becomes more saleable still … a positive-feedback snowball. At the end of the process one good is accepted by **everyone** — not because anyone ordered it, but because each person, looking after their own interest, found that “taking this one is the least trouble.” That good is money. This is the story Menger tells in Chapter VIII of the *Principles of Economics* (1871) and in “On the Origin of Money” (1892); he calls it the **organic origin** of money. Money grows; it is not made.

The story left one hole, which Mises closed in *The Theory of Money and Credit* (1912). The hole is this. We say people value a good by its marginal utility (Stage 1.1). But the “utility” of money is what it buys — its **purchasing power**; purchasing power is set by the demand for money; and the demand for money depends on what money buys … which is its purchasing power. A circle. Mises's way out: **today's demand for money is based on yesterday's purchasing power.** People know that a silver coin bought ten loaves yesterday, and that is why they will work a certain number of hours for one today. Yesterday's purchasing power rested on the day before's, and so on back to the day silver was just a commodity with industrial and ornamental uses. The circle is pulled out into a line, and the far end of the line is anchored in the **use-value of a commodity**. That is the **regression theorem**.

Why spend a whole lesson on this? Because it decides how you read every later argument: Is fiat money (Stage 4.5) “created from nothing”? Can a state create money by decree — the core claim of MMT (Stage 11.4)? Is Hayek's competition among private currencies possible (Stage 9.4)? Is Bitcoin money (Stage 17.1)? Why do platforms and social networks have the same “more useful the more people use it” structure as money (Stage 15.1)? Every one of those answers starts from the two bricks laid here.

**In this lesson we break it into five pieces:**

- **① The barter deadlock: the double coincidence of wants**
- **② Menger 1892: saleableness and the snowball**
- **③ Historical monies: cattle, salt, cowries, silver, gold — and why gold won**
- **④ Mises 1912: the regression theorem straightens the circle**
- **⑤ The challenge from the state theory: Knapp and MMT, steelmanned then answered**
`,

  mechanics: `
### ① The barter deadlock: the double coincidence of wants

Start by putting numbers on the problem. Suppose the village has 10 goods; each person produces one and wants a different one, with wants spread evenly. Meet a random person: the chance that they produce the good you want is 1/9; the chance that they also want the good you produce is again 1/9. Both at once: **1/81**, about 1.2%. On average you would have to meet 81 people to close one trade. With 100 goods the odds fall to 1/9,801 — about 0.01%.

And that is only the first layer. Barter carries two further deadlocks:

- **Indivisibility.** You would like to trade one cow for three pairs of shoes, a sack of salt and half a day of carpentry. The cow cannot be cut into three trades.
- **No common unit of account.** Among 10 goods there are 45 exchange ratios (10 × 9 ÷ 2); among 100 goods, 4,950. Nobody can hold them in their head, and nobody can compare whether “opening a shoe shop” or “starting a fishery” is the better use of resources. In Stage 7.1 this becomes the heart of Mises's case against socialism: **without money prices there is no economic calculation.**

So the problem is not that barter is “inefficient.” It is that **the division of labor cannot deepen under barter at all.** The gains from comparative advantage described in Stage 1.5 can only be realized if there is one thing everybody accepts.

### ② Menger 1892: saleableness and the snowball

Menger's key concept is **saleableness** (in German, *Absatzfähigkeit*; sometimes translated marketability). It is not “how valuable is this?” but: **when you want to dispose of it, can you do so quickly, at close to the going price, without a large loss?** Menger lists the dimensions that determine it:

- **Breadth of demand.** How many people, in how many situations, want the good? Nearly everyone wants salt; almost nobody wants a pipe organ.
- **Bid–ask spread.** How far apart are the price you can buy at and the price you can sell at? The narrower the spread, the more saleable. A silver coin's spread might be 1%; a second-hand wardrobe's, 50%.
- **Divisibility.** Can it be sold in small lots without losing value?
- **Transportability over time and space.** How long does it keep (does it rot?) and how far can it be carried (how much value per unit of weight)?
- **Organization of the market.** Is there an established place to trade it and a steady quoted price?

Menger's argument is a chain of purely **individual calculation**. The cobbler wants fish and faces two offers: (a) shoes for a chair; (b) shoes for a sack of salt. He needs neither. But he reasons: “If I carry the chair to the fisherman, nine times in ten he will refuse; if I carry the salt, he will probably take it — and if he doesn't, the farmer next door will.” So he picks the salt. **He is not designing money for society; he is choosing a way-station that is easier to sell on.**

Now multiply that decision by a thousand villagers. Everyone leans toward accepting the few most saleable goods as way-stations; each additional person who does so widens those goods' demand, narrows their spread, and raises their saleableness; so the next person has an even better reason to accept them. **Small differences in saleableness are amplified by positive feedback.** At first salt is only marginally easier to sell than chairs; a few generations later salt is accepted by everyone and chairs are still chairs. Three features of the process are worth memorizing:

- **No collective decision.** Each step is an individual choice made for private reasons; the result is a society-wide institution. Money is the earliest and most elegant example of the spontaneous order discussed in Stage 7.4.
- **A winner-take-all tendency.** Because “I should accept what others accept,” differences in saleableness converge on one good or a very few. This is precisely the network effect of Stage 15.1 — **money is history's first network good.**
- **It is a testable logic, not a historical guess.** Menger's argument does not depend on any archaeological find. Wherever people act purposefully and goods differ in saleableness, indirect exchange will appear and converge.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Menger's snowball: small differences in saleableness, amplified by feedback</text><g><rect x="30" y="50" width="150" height="60" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="105" y="74" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">One good is slightly easier to sell</text><text x="105" y="92" text-anchor="middle" font-size="10.5" fill="var(--muted)">broad demand, narrow spread, durable</text></g><g><rect x="245" y="50" width="150" height="60" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="320" y="74" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--orange-ink)">More people use it as a way-station</text><text x="320" y="92" text-anchor="middle" font-size="10.5" fill="var(--muted)">“easier to sell next time”</text></g><g><rect x="460" y="50" width="150" height="60" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="535" y="74" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--orange-ink)">It becomes more saleable</text><text x="535" y="92" text-anchor="middle" font-size="10.5" fill="var(--muted)">more takers, narrower spread</text></g><path d="M180 80 L240 80" stroke="var(--orange)" stroke-width="2" marker-end="url(#om-arr)"/><path d="M395 80 L455 80" stroke="var(--orange)" stroke-width="2" marker-end="url(#om-arr)"/><path d="M535 110 L535 150 L320 150 L320 115" fill="none" stroke="var(--orange)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#om-arr)"/><text x="428" y="145" text-anchor="middle" font-size="10.5" fill="var(--orange-ink)" font-weight="600">positive feedback</text><defs><marker id="om-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="var(--orange)"/></marker></defs><g><text x="60" y="190" font-size="11" fill="var(--muted)">Generation 0</text><rect x="60" y="196" width="60" height="14" fill="var(--orange)" opacity=".35"/><rect x="120" y="196" width="55" height="14" fill="var(--blue)" opacity=".35"/><rect x="175" y="196" width="50" height="14" fill="var(--green)" opacity=".35"/><rect x="225" y="196" width="45" height="14" fill="var(--red)" opacity=".35"/><text x="60" y="230" font-size="11" fill="var(--muted)">Generation 5</text><rect x="60" y="236" width="130" height="14" fill="var(--orange)" opacity=".7"/><rect x="190" y="236" width="40" height="14" fill="var(--blue)" opacity=".35"/><rect x="230" y="236" width="25" height="14" fill="var(--green)" opacity=".35"/><rect x="255" y="236" width="15" height="14" fill="var(--red)" opacity=".35"/><text x="60" y="270" font-size="11" fill="var(--muted)">Generation 20</text><rect x="60" y="276" width="200" height="14" fill="var(--orange)"/><rect x="260" y="276" width="10" height="14" fill="var(--blue)" opacity=".35"/><text x="300" y="207" font-size="10.5" fill="var(--muted)">share of each good used as a way-station</text><text x="300" y="247" font-size="10.5" fill="var(--muted)">the most saleable one starts eating the rest</text><text x="300" y="287" font-size="10.5" fill="var(--orange-ink)" font-weight="600">convergence: it has become “money”</text></g></svg><figcaption>Top: Menger's loop — slightly more saleable → more people use it as a way-station → more saleable. Bottom: the result across generations — shares converge on one good. The demo below lets you run this process yourself.</figcaption></figure>

### ③ Historical monies: cattle, salt, cowries, silver, gold — and why gold won

Menger's theory predicts that **different times and places converge on different goods, depending on what is most saleable locally — but as markets widen and technology improves, the target of convergence moves in one direction.** History roughly agrees:

- **Cattle.** The early money of many pastoral and farming societies. The Latin *pecunia* (money) comes from *pecus* (livestock). Broadly demanded and self-transporting; but indivisible, hungry, and mortal.
- **Salt.** Used in Rome, across Africa, and in inland China. Divisible, durable, universally wanted — but low value per unit, so a cartload of salt for a cow is impractical.
- **Cowrie shells.** Used across Africa, South Asia, and Shang- and Zhou-era China. Light, durable, hard to counterfeit — until Europeans shipped them from the Maldives to West Africa by the ton; supply exploded and cowrie money collapsed. An important lesson: **saleableness must include “hard to produce more of.”**
- **Cigarettes in a prison camp.** The economist R. A. Radford described in 1945 how cigarettes spontaneously became money in a WWII POW camp — divisible (by the stick), durable, universally wanted, supply fixed by Red Cross parcels. Menger's process replayed live within weeks.
- **Silver and gold.** As markets spanned continents the winners were metals, and finally gold. The reasons map onto the dimensions of saleableness one by one: **durable** (it does not rust or rot; coins struck millennia ago survive), **divisible** (it can be cast to any weight, and dividing it loses nothing), **portable** (enormous value per unit of weight), **scarce and hard to expand** (the world stock grows only about 1–2% a year), **verifiable** (its density, color, and malleability are distinctive; the touchstone is ancient), and **homogeneous** (one gram is like any other). Silver scores a little lower on each (heavier, more exposed to new mine discoveries), which is why most of history ran on “gold first, silver second.”

Note that gold won **not an election but a multi-millennial elimination tournament.** No king decreed “from now on, gold.” What kings did was take the gold already circulating, strike it into coins bearing their own likeness, and then — as Stage 4.5 will show — quietly reduce the gold content. **The state enters monetary history as a latecomer and a tamperer, not as an inventor.**

### ④ Mises 1912: the regression theorem straightens the circle

Now back to the circle. Late-nineteenth-century economists, including some of Menger's own students, generally held that **marginal-utility theory could not explain the value of money**, on the grounds that the argument is circular:

- the marginal utility of money = what it buys = its purchasing power;
- purchasing power = set by the supply of and demand for money;
- the demand for money = set by people's estimate of its marginal utility → back to step one.

Many gave up and reached for aggregate relationships such as the quantity theory (Stage 4.2 takes that up). Mises's solution, in Part Two of *The Theory of Money and Credit* (1912), is the **regression theorem**, and its core move is to introduce **time**:

$$
demand for money today ← based on remembered purchasing power yesterday
purchasing power yesterday ← based on the day before
…
purchasing power on the first day as a medium of exchange ← based on the previous day's use-value as an ordinary commodity
$$

No link is circular. People today do not decide how much money to hold on the basis of today's purchasing power; they decide on the basis of **the purchasing power they remember from yesterday.** That decision meets today's money supply and produces today's purchasing power, which becomes the basis for tomorrow's decisions. Trace it back far enough and you reach the day gold was used only for jewelry and dentistry — on that day its value was set entirely by the marginal utility of its **non-monetary uses**, and the circle touches ground.

Two implications of the theorem are misread more often than the theorem itself, so let us be precise.

**What it rules out.** A thing cannot become money from zero, by decree alone. If a king announces “from today, this piece of paper nobody has ever seen is money,” nobody knows what purchasing power to assign it, because there is no “yesterday” to refer to — it has no price memory. **Money cannot be invented out of nothing.**

**What it allows.** This part is usually forgotten. The regression theorem does **not** say “only commodity money is money.” The dollar's convertibility into gold was cut domestically in 1933 and internationally in 1971 (Stage 4.5) — but the dollar did not thereby become a piece of paper without a yesterday: **the dollar of 16 August 1971 inherited the price memory of the dollar of 15 August 1971**, which was still tied to gold. Fiat money is the continuation of an unbroken chain of price memory whose first link is a commodity. So the regression theorem is **entirely compatible** with fiat money. What it tells you is that fiat money's value is not created by the state from nothing but **inherited** from commodity money — and can be **debased** thereafter.

The same logic will be used in Stage 17.1 to put Bitcoin on trial: Bitcoin in 2009 had no non-monetary use whatsoever, so how did it acquire a first price? (Hint: what the theorem requires is “a prior valuation to refer to,” not necessarily “an industrial use” — but the debate is genuinely unsettled, and we will show both sides honestly.)

### ⑤ The challenge from the state theory: Knapp and MMT, steelmanned then answered

There is a rival grand theory of money's origin: the **state theory of money**, or Chartalism (from the Latin *charta*, a token or ticket). Its modern founder is the German economist G. F. Knapp, *The State Theory of Money* (1905); its most forceful heirs today are the proponents of Modern Monetary Theory.

First, its strongest form:

- **The historical record.** The earliest written records — Mesopotamian clay tablets — show early “money” functioning mainly as a **unit of account**: temples and palaces reckoned debts and taxes in barley or silver, not with coins changing hands in a marketplace. The anthropologist David Graeber, in *Debt: The First 5,000 Years* (2011), argued that anthropologists have essentially never observed a pure barter society; credit and debt came first, coinage later.
- **Tax-driven demand.** If the state decrees that taxes must be paid in a particular thing, it manufactures a demand for that thing which nobody can escape. As long as the state has coercive power, whatever token it picks will be widely accepted — no saleableness snowball required.
- **The present.** Every major currency today is state-issued fiat, backed by no commodity, and it works. This looks like a victory for the state theory.

There is real substance here and Austrians should not dodge it. The reply has three layers.

**First, unit of account and medium of exchange are two functions; do not merge them.** That temples kept accounts in barley does not show that barley had failed to become a saleable market good first — quite the opposite. Temples reckoned in barley and silver precisely because those were already the goods everyone accepted and could easily measure. A state can **choose** a unit of account, but it chooses from the top of the saleableness ranking; it does not pick a random stone. Graeber's “barter societies never existed” does not contradict Menger, who never claimed history contained a “pure barter stage.” His claim is **logical**: wherever exchange and differences in saleableness exist, indirect exchange will emerge. A credit network among neighbors is itself one way to reduce the double-coincidence problem — and the moment trade crosses the circle of people who know each other, saleable commodities step onto the stage.

**Second, tax-driven demand can sustain demand but cannot set purchasing power from nothing.** A decree that “taxes are payable in this” does create demand for the token. But how much demand, and what one unit is worth, still needs a starting point — and every successful fiat currency in history started from **an existing commodity money**: the pound sterling began as a pound of silver; the dollar began as a defined weight of silver (Coinage Act of 1792) and later gold. The regression theorem and the state theory are not mutually exclusive: a state can ride an existing chain of price memory, and even reinforce it with taxes; it cannot build one from zero. **Fiat currencies that tried to start from scratch — no precedent, no convertibility, no existing price — have almost all ended in hyperinflation.** Stage 4.5 and Stage 14.4 return to this, and we will also admit that Austrians have repeatedly and wrongly predicted the imminent collapse of fiat money — a different kind of error.

**Third, “it works” is relative to what?** Since 1913 the dollar has lost about 96–97% of its purchasing power (Stage 4.5). Fiat money “works,” but the way it works — who gets new money first (Stage 4.3), the business cycle set off by artificially lowered interest rates (Stage 5.1) — is the cost that the next several stages of this course are about.

The lesson in one sentence: **money grows out of the market from the most saleable commodity; its purchasing power is a chain of memory inherited from that commodity's use-value; the state can ride the chain and tamper with it, but did not create it.** In the next lesson (Stage 4.2) we ask: if money is itself a good, how is its “price” — its purchasing power — set by supply and demand?
`,

  demo: "money-emergence",

  analogy: `
Think of the origin of money as **messaging apps in a city**.

At first everyone uses a different app: some are on A, some on B, some on C … To arrange dinner you first have to ask “which one are you on?”, and you can only connect if you both happen to have the same app installed — the double coincidence of wants. Exhausting.

Clever people start installing one extra app — the one “everyone is likely to have” — even if they dislike its interface, simply because **it maximizes the odds of reaching someone.** That is saleableness: accepting something “because it will be easier to use next time,” exactly Menger's cobbler with his salt. Every additional person who does this makes the app more worth installing; more worth installing means more people install it. A few years later the entire city is on one app, and no city official ever issued a “standard messaging app” ordinance. **It grew.**

The regression theorem asks: why did you install it today? Because you knew yesterday your friends were on it. Why were they on it yesterday? Because an earlier group was on it the day before. Trace it back to the very first users — they installed it not because “everyone is on it” but because **it did something useful on its own** (say, it was the first to offer free calls). That is the “non-monetary use”: a network-effect snowball needs a first snow-core.

The state theory says: city hall announces that all municipal notices will be posted only on app X, so everyone installs X. That really can prop up X's user count — but city hall picked X because X already had the largest installed base; had it picked an app nobody had heard of, “municipal notices” alone would not carry it. Stage 15.1 formalizes this picture: **money was history's first network-effect good**, and every platform war you watch today is a replay of Menger's snowball.
`,

  misconceptions: [
    "**“Money was invented by a clever person or a state to make trade convenient.”** — Menger's point is that nobody needed to invent it. As long as each person prefers to accept what is “easier to sell next time,” the most saleable good converges into money through positive feedback. The state entered monetary history by striking already-circulating gold into coins, stamping its likeness on them, and then reducing the fineness — a latecomer and a tamperer, not an inventor.",
    "**“The regression theorem says fiat money cannot be real money.”** — The opposite. The theorem rules out only “a token with no precedent becoming money by decree from zero.” The post-1971 dollar inherited the price memory of the gold-linked dollar; the chain was never broken. The theorem explains where fiat money's value **was inherited from**; it does not deny that fiat money exists.",
    "**“Gold became money because it has ‘intrinsic value.’”** — Gold's non-monetary uses (jewelry, dentistry) are only the starting link of the regression chain, not why it won the monetary tournament. It won on every dimension of saleableness: durable, divisible, portable, scarce and hard to expand, verifiable, homogeneous. Anything stronger on those dimensions could in principle displace it — which is exactly the question of Stage 17.1.",
    "**“Anthropologists have shown barter societies never existed, so Menger was wrong.”** — Menger's argument is logical, not archaeological: wherever exchange and differences in saleableness exist, indirect exchange emerges. Credit and debt among neighbors is another way to cope with the double coincidence, but as soon as trade crosses the circle of acquaintances, saleable commodities must appear. That temples kept accounts in barley and silver shows those were already the most saleable goods.",
    "**“Taxes alone can create money's value out of nothing.”** — Taxes can create sustained demand for a token, but what one unit is worth still needs a starting point. Every successful fiat currency rode an existing commodity money's price memory (the pound = a pound of silver; the dollar = a defined weight of silver or gold); fiat currencies that tried to start from zero have almost all ended in hyperinflation.",
  ],

  quiz: [
    {
      q: "A village has 10 goods; each person produces one and wants a different one, with wants evenly spread. You meet a random person. Roughly what is the chance a barter trade can be closed immediately?",
      options: ["1/10, about 10%", "1/2, about 50%", "1/9, about 11%", "1/81, about 1.2%"],
      answer: 3,
      explain: "**Double coincidence:** they produce what you want (1/9) **and** they want what you produce (1/9). Both at once: 1/81. The more goods there are, the lower the odds — the division of labor creates a problem it cannot solve alone.",
    },
    {
      q: "What does Menger's “saleableness” most precisely mean?",
      options: [
        "How high the good's price is",
        "How much labor went into producing the good",
        "Whether it can be sold quickly, at close to the going price, without a large loss, when you want to dispose of it",
        "Whether the government accepts it in payment of taxes",
      ],
      answer: 2,
      explain: "Saleableness is about breadth of demand, bid–ask spread, divisibility, transportability over time and space, and market organization — not about being “valuable.” A diamond is valuable but has a wide spread and cannot be divided, so its saleableness is low.",
    },
    {
      q: "How does the regression theorem break the circle “value of money ↔ demand for money”?",
      options: [
        "By introducing time: today's demand rests on yesterday's purchasing power, back to the commodity's non-monetary use",
        "By abandoning marginal-utility theory in favor of the quantity theory",
        "By assuming the state fixes the value of money",
        "By assuming money's value is set entirely by its cost of production",
      ],
      answer: 0,
      explain: "Mises's 1912 solution stretches the circle into a timeline: each day's demand for money refers to **yesterday's** purchasing power, back to the day it was an ordinary commodity valued for its non-monetary uses.",
    },
    {
      q: "Which of the following is **not** an implication of the regression theorem?",
      options: [
        "A brand-new token with no precedent cannot become money by decree alone",
        "The post-1971 dollar inherited the price memory of the gold-standard dollar",
        "Only commodity money is real money; fiat money is not money",
        "Money's purchasing power is a chain inherited from a commodity's use-value",
      ],
      answer: 2,
      explain: "The regression theorem **allows** fiat money: as long as the chain of price memory is unbroken, fiat money is a continuation of commodity money. It rules out “from nothing,” not “without commodity backing.”",
    },
    {
      q: "The state theory of money (Knapp, MMT) says “taxes create the demand for money.” What is the core Austrian reply?",
      options: [
        "Taxes have no effect on the demand for money at all",
        "Taxes can sustain demand, but what a unit is worth still needs an existing price starting point; the state rode the commodity-money chain rather than creating it",
        "The state theory is entirely correct and Menger has been refuted",
        "A state cannot force anyone to use any money",
      ],
      answer: 1,
      explain: "Austrians grant that taxes reinforce demand but point out that the pound began as a pound of silver and the dollar as a legal weight of silver or gold — the state chose from the most saleable goods and rode them. Fiat money started from scratch has almost always failed in hyperinflation.",
    },
  ],

  further: [
    { label: "Carl Menger, “On the Origin of Money”, Economic Journal (1892) — the original paper on money's organic origin", url: "https://mises.org/library/book/origins-money" },
    { label: "Mises, The Theory of Money and Credit (1912), Part Two, Chapter 8 — home of the regression theorem", url: "https://mises.org/library/book/theory-money-and-credit" },
    { label: "Rothbard, What Has Government Done to Our Money? (1963) — the accessible account of money's origin and state tampering", url: "https://mises.org/library/book/what-has-government-done-our-money" },
    { label: "R. A. Radford, “The Economic Organisation of a P.O.W. Camp”, Economica (1945) — the classic observation of cigarette money", url: "https://www.jstor.org/stable/2550133" },
    { label: "Econlib Encyclopedia: Money — a concise overview of money's functions and history", url: "https://www.econlib.org/library/Enc/Money.html" },
  ],
};
