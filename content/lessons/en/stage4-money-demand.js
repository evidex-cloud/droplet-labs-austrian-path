export default {
  id: "money-demand",
  stage: 4,
  order: 2,
  title: "Money Demand & Purchasing Power: Why Money Is Never Neutral",
  difficulty: "core",
  prereqs: ["origin-of-money"],

  oneLiner:
    "If money is itself a good, its “price” — its purchasing power — is set the way every price is set: by supply and demand. Supply is how much money exists. Demand is not “how much money people want” (everyone wants infinitely much) but **how large a cash balance people choose to hold** in wallets and accounts. This lesson lays out Mises's cash-balance approach, gives Fisher's MV=PT its fairest hearing, and then shows what the aggregate formula hides: **new money always enters the economy at particular points, early receivers gain, and relative prices are permanently rewritten.** Money is never an even rain. Along the way we dismantle two popular myths — “hoarding is a leakage” and “deflation is a catastrophe.”",

  intuition: `
Start with a question that sounds silly: **why do you hold money at all?**

Not “why do you want to earn money” — that is wanting the things money buys. Rather: why is there $300 of cash in your wallet and $20,000 in your checking account right now, instead of every cent being spent immediately or converted into stocks, a house, or gold? The answer is simple: you do not know what next week holds. The car may break; a friend may get married; you may see something you want. Holding cash is how you **cope with uncertainty** — it keeps you free to act at any moment.

Mises, in *The Theory of Money and Credit* (1912), called this the **demand for cash balances**. Everyone carries a number in their head: “I want to hold roughly X in money.” X depends on the rhythm of your income, how uncertain the future feels, the opportunity cost of holding cash (Stage 1.4: money in an account earns no return and does not appreciate), and what you expect prices to do. Add up everyone's X and you have society's demand for money.

Now apply the supply-and-demand logic of Stage 1.3. The supply of money is the quantity of money in the economy; the demand for money is the sum of the cash balances people want to hold; where they meet, a “price” is set — **how much a unit of money buys**, its purchasing power. Purchasing power is not one number but a whole list: how many eggs a dollar buys, how many minutes of a haircut, how many square inches of a house.

More supply with unchanged demand lowers money's purchasing power (a dollar buys less) — people experience it as “prices went up.” More demand (people want larger balances) with unchanged supply raises purchasing power — people experience it as “prices went down.” That is the whole framework, and it is no different in kind from pricing apples or shoes.

Here, though, the road forks. Mainstream textbooks proceed to **aggregates**: the quantity of money × its velocity of circulation = the price level × the volume of transactions, MV=PT. The logic of the formula is “10% more money, prices roughly 10% higher, nothing else changes” — money as an even rain that rescales all prices without changing the ratios between them. That is **the neutrality of money**.

Austrians take the other road. New money is not rain; it is **water from a single tap**. It reaches certain people first; they spend it on certain goods, whose prices rise first; the sellers of those goods spend it on other goods … By the time the new money has spread through the economy, some prices are up 20%, some 3%, some have even fallen. **Relative prices have been permanently rewritten** — and relative prices are exactly the signals through which, as Stage 7.2 shows, the market transmits knowledge. This is the **non-neutrality of money**. It is not a footnote; it is the foundation of Austrian macroeconomics — the Cantillon effects of Stage 4.3 and the business cycle of Stage 5.1.

Finally the lesson dismantles two popular myths. First: “when people hoard money it leaks out of the economy and demand collapses.” No — holding money *is* a demand: the demand for cash balances. Second: “deflation is a catastrophe that spirals.” We will state the strongest version of that argument, then distinguish three entirely different kinds of “deflation,” and you will find that one of them — falling prices caused by rising productivity — has been the normal condition of every era of prosperity.

**In this lesson we break it into five pieces:**

- **① The demand for money = the demand to hold cash balances (Mises)**
- **② Purchasing power is a price: the supply-and-demand diagram for money**
- **③ MV=PT: Fisher at his strongest, then what the formula hides**
- **④ Non-neutrality: new money enters at a point — a 10% worked example**
- **⑤ Two myths: “hoarding is a leakage” and the “deflationary spiral” (Salerno's three deflations)**
`,

  mechanics: `
### ① The demand for money = the demand to hold cash balances (Mises)

Getting “the demand for money” exactly right matters, because everyday language sabotages it. In everyday speech “I need money” means “I want more purchasing power” — a demand that is unlimited and useless for analysis. The economic demand for money is: **at a given purchasing power, the balance people choose to hold in the form of money.**

Mises replaced the classical “velocity of circulation” view with the **cash-balance approach**. The difference is the **direction of causation**:

- Velocity view: how many times a dollar “changes hands” in a year — an average computed from data (V = PT ÷ M), which nobody is deciding.
- Cash-balance view: each person is **deciding** how much cash to hold. Too much, and they spend or invest it (pushing it to someone else); too little, and they spend less and sell more (pulling it from someone else). **Every dollar is in somebody's hands at every moment**; no money hangs suspended “in circulation.” A “high velocity” is just another way of saying “people want to hold small balances.”

Why does the distinction matter? Because it puts monetary theory back on the feet of the **acting person** (Stage 2.1). What changes purchasing power is not an abstract “velocity” but millions of concrete decisions about “how much cash do I want to hold.” When people feel more uncertain about the future, they hold more; when they expect prices to rise, they hold less. Summed, those decisions are shifts in the demand for money. The regression theorem of Stage 4.1 guarantees that the decisions have a reference point: yesterday's purchasing power.

A numerical example. A small economy has 100 people and a money stock of $10,000. Each wants to hold on average $100 in cash — exactly the supply. Now an epidemic makes everyone more cautious, and each wants to hold 20% more: demand becomes $12,000, supply is still $10,000. What happens? Everyone spends less and sells more, trying to push their balance from $100 to $120. But **there are only $10,000; not everyone can reach $120.** Their competition to buy less and sell more drives prices down — until $10,000 has the purchasing power that $12,000 used to have. Everyone still nominally holds $100, but their **real balance** (measured in purchasing power) is 120% of what it was. The demand was satisfied — not by printing money but by falling prices.

### ② Purchasing power is a price: the supply-and-demand diagram for money

Draw the logic above as the supply-and-demand diagram of Stage 1.3. The horizontal axis is the quantity of money; the vertical axis is **the purchasing power of money** (PPM) — note, not the “price level” but its inverse: how much a dollar buys.

- **The supply curve.** At any moment the stock of money is given, so it is a vertical line. Under gold money the supply is set by mining costs and grows about 1–2% a year; under fiat money it is set by the central bank and the banking system (Stages 4.4 and 4.5).
- **The demand curve** slopes downward. The higher money's purchasing power (the more a dollar is worth), the larger the real balance a single dollar represents, and the **fewer dollars** people need; the lower the purchasing power, the more dollars are needed to hold the same real balance.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Money's purchasing power is set by supply and demand like any price</text><line x1="70" y1="260" x2="600" y2="260" stroke="var(--line)" stroke-width="1.5"/><line x1="70" y1="40" x2="70" y2="260" stroke="var(--line)" stroke-width="1.5"/><text x="335" y="285" text-anchor="middle" font-size="11" fill="var(--muted)">quantity of money M</text><text x="26" y="150" text-anchor="middle" font-size="11" fill="var(--muted)" transform="rotate(-90 26 150)">purchasing power PPM (1/P)</text><path d="M110 60 C 220 90, 330 170, 580 240" fill="none" stroke="var(--blue)" stroke-width="2.5"/><text x="560" y="228" font-size="11" fill="var(--blue)" font-weight="600">demand D</text><path d="M140 62 C 260 100, 380 185, 600 250" fill="none" stroke="var(--blue)" stroke-width="2" stroke-dasharray="6 4"/><text x="150" y="52" font-size="10.5" fill="var(--blue)">D′ (people want larger balances)</text><line x1="300" y1="45" x2="300" y2="260" stroke="var(--orange)" stroke-width="2.5"/><text x="300" y="38" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">supply M₀</text><line x1="420" y1="45" x2="420" y2="260" stroke="var(--orange)" stroke-width="2.5" stroke-dasharray="6 4"/><text x="420" y="38" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">M₁ = M₀ × 1.1</text><circle cx="300" cy="147" r="5" fill="var(--ink)"/><text x="288" y="140" text-anchor="end" font-size="10.5" fill="var(--ink)" font-weight="600">PPM₀</text><line x1="70" y1="147" x2="300" y2="147" stroke="var(--line)" stroke-dasharray="3 3"/><circle cx="420" cy="196" r="5" fill="var(--red)"/><line x1="70" y1="196" x2="420" y2="196" stroke="var(--line)" stroke-dasharray="3 3"/><text x="76" y="192" font-size="10.5" fill="var(--red)" font-weight="600">supply +10% → PPM falls</text><circle cx="300" cy="125" r="5" fill="var(--green)"/><line x1="70" y1="125" x2="300" y2="125" stroke="var(--line)" stroke-dasharray="3 3"/><text x="76" y="121" font-size="10.5" fill="var(--green)" font-weight="600">demand up → PPM rises</text></svg><figcaption>The vertical line is the money supply (a given stock); the downward-sloping curve is the demand for cash balances. Shifting supply right (M₁) lowers purchasing power; shifting demand right (D′) raises it. The “price level” is just the inverse of this diagram's vertical axis.</figcaption></figure>

The one difference between this diagram and the apple market is that **money's “price” is not a number but the entire set of exchange ratios.** So “purchasing power fell 10%” is only an average way of speaking; what actually happens is that thousands of prices each move differently — and that becomes the main character in ④.

### ③ MV=PT: Fisher at his strongest, then what the formula hides

Irving Fisher, in *The Purchasing Power of Money* (1911), wrote the quantity theory as an identity:

$$
M × V = P × T
money stock × velocity = price level × volume of transactions
$$

State it at its strongest first. As an **identity** it is necessarily true: the total value of a year's transactions equals both “number of dollars × times each changed hands” and “price per transaction × number of transactions.” As a **theory**, add two assumptions — V is set by payment habits and stable in the short run; T is set by real productive capacity and independent of money — and it follows that **M up 10% means P up 10%.** That prediction performs quite well for **large, sustained** monetary expansions: 1920s Germany, 1980s Latin America, 2010s Venezuela — double the money and prices roughly double. Friedman's line that “inflation is always and everywhere a monetary phenomenon” (Stage 11.2) is its modern form. On this point Austrians and monetarists are **allies**: both hold that the root of inflation is the money supply.

Now what it hides. The Austrian critique (Mises, *Human Action*, Chapter XVII; Rothbard, *Man, Economy, and State*, Chapter 11) concentrates on three points.

**First, V is not a cause but a residual.** V has no independent measurement in the real world; it is computed as PT ÷ M. To say “V is stable” is to say “P moves in proportion to M,” which assumes the conclusion. The real cause is the **demand for cash balances** of ①: a “high V” means only that people want to hold small balances. Writing it as a “velocity” suggests money has a motion of its own, rather than being moved by human decisions.

**Second, P and T are aggregates, and aggregates hide relative prices.** The “price level” is a weighted average of thousands of prices. An unchanged average can conceal house prices up 30%, food up 5%, and electronics down 15%. But economic calculation (Stage 7.1) and entrepreneurial judgment (Stage 6.1) run on **relative** prices, not averages. MV=PT is structurally blind to money's effect on relative prices — it defines non-neutrality away. Stage 10.2 examines the limits of GDP, CPI and other aggregates in detail.

**Third, it has no dimension for “where the money enters.”** The M in the formula is a single number; it never asks who received the new money first. In reality new money **always** reaches some hands first — which is the entire subject of the next lesson on Cantillon effects.

To be fair: Fisher and the later monetarists knew short-run non-neutrality exists (Friedman spoke of “long and variable lags”). The disagreement is that they regard these as temporary frictions washed out in the long run, whereas Austrians hold that **the relative prices rewritten by new money direct real resource allocation** — the wrong buildings get built, the wrong workers get hired — and those errors are not washed out automatically by “the long run.” They must be corrected through the liquidation described in Stage 5.3.

### ④ Non-neutrality: new money enters at a point — a 10% worked example

Let us compute. A small economy has three sectors: **capital goods** (machines, buildings), **consumer goods** (food, clothing), and **services** (haircuts, tutoring). The money stock is $10,000; each sector transacts one third of it per year; every sector's price index starts at 100.

Now the central bank raises the money stock 10%, to $11,000. By MV=PT every sector should go to 110. The Austrian says: watch **where the money enters.**

**Case A: the new money enters through bank loans to firms.** Firms receive the new $1,000 and buy machines and building materials. Round one: demand in the capital-goods sector surges and its price rises to 118; consumer goods and services feel nothing yet and remain at 100. Round two: factory owners and construction workers who sold the machines spend on consumer goods, which rise to 106; capital-goods demand eases back to 113. Round three: consumer-goods merchants spend on haircuts and tutoring; services rise to 104. Round four onward the money keeps diffusing … Once all of it has circulated, the end state is roughly: capital goods 114, consumer goods 109, services 106. **Average about 110** — the MV=PT prediction is fine on average. But relative prices have changed: capital goods are now about 7.5% dearer relative to services (114/106).

That 7.5% is not harmless. Entrepreneurs who see capital-goods prices rising fastest read it as “the market wants more capital goods” and expand capacity — build plants, buy machinery. This is exactly where the malinvestment of Stage 5.2 begins. And the signal is an artifact of the new money, not a change in consumers' time preference (Stages 3.1 and 3.5).

**Case B: the same $1,000, sent directly to households.** Households buy consumer goods first: consumer goods rise to 116 in round one, services follow to 108, capital goods come last and least, about 105. The average is still about 110, but the structure is reversed: **consumer goods are now dearer relative to capital goods**, and entrepreneurs receive the signal “invest less, produce more for immediate consumption.”

The same “10% more money,” two entry routes, two opposite signals to the economy. That is the precise meaning of non-neutrality: **money's effects depend on the path by which it enters, and the aggregate formula is structurally blind to that path.** The demo for this lesson lets you switch the injection point and watch sector prices diverge.

There is one further layer of non-neutrality: **creditors versus debtors.** When prices rise 10%, the real burden on a debtor paying a fixed interest rate falls, and the real income of a retiree on a fixed pension falls with it; when prices fall, debtors suffer and savers gain. Every change in the quantity of money **redistributes** wealth between people — Stage 4.3 follows that all the way down.

### ⑤ Two myths: “hoarding is a leakage” and the “deflationary spiral” (Salerno's three deflations)

**Myth one: “hoarding is a leakage.”** In the Keynesian framework (Stage 11.1) income is either consumed or saved; saving that is not turned into investment “leaks” out of the circular flow and leaves aggregate demand short. Holding cash is treated as the worst kind of leakage.

Through the lens of ①, this reverses cause and effect. A person who holds an extra $100 of cash has bought $100 less this month — true. But the $100 has not vanished; it is **still in their hands**, and their reduced buying lowers prices slightly and raises the purchasing power of everyone else's money slightly. “Hoarding” is merely the pejorative for **a rise in the demand for cash balances**; it is as legitimate a preference as wanting more shoes, and often well founded (uncertainty has risen). The market's answer is a price adjustment, not a government topping up the money supply. Of course price adjustment is not instantaneous — prices, wages especially, are sticky. Austrians grant that this is a real friction; the conclusion they draw is to make prices more flexible, not to print money to chase the stickiness.

**Myth two: the “deflationary spiral.”** Steelman it first: prices fall → people expect further falls → they postpone purchases → demand weakens → prices fall again → firms' revenues drop while their debts are fixed in nominal terms → bankruptcies, unemployment → demand weakens further … Between 1930 and 1933 U.S. prices fell by roughly a quarter while output collapsed; that is the strongest evidence, and Fisher's 1933 “debt-deflation” theory was born from it.

The Austrian reply is not to deny the history but to **take the word “deflation” apart.** Joseph Salerno, in “An Austrian Taxonomy of Deflation” (2003), distinguishes falling prices by their causes:

- **Growth deflation.** Productivity rises, the same money chases more goods, prices fall. This is **good**. From 1873 to 1896 U.S. prices fell about 1–2% a year while real output grew strongly; today electronics get cheaper every year and nobody “postpones” buying a phone to wait for it — they buy more. “Expected price falls cause postponement” fails empirically: people have time preference (Stage 3.1), and a phone now is worth more than a 5%-cheaper phone next year.
- **Cash-building deflation.** People want to hold more cash (the example in ①), and prices fall to satisfy that demand. This is the market **adjusting itself**, not a disease. It may involve real pain (unemployment while prices are sticky), but it is the correction of some prior imbalance.
- **Bank-credit deflation.** A prior credit expansion (Stage 4.4) created large quantities of deposit money “from nothing”; when the bubble bursts and banks fail, that deposit money disappears and the money supply contracts. The U.S. money supply fell by about a third between 1930 and 1933, mostly this kind. The Austrian answer: **this is the necessary consequence of the earlier credit inflation.** The pain is real, but the cure is not to inflate in step one, not to inflate again in step two. (Stages 5.3 and 13.2 take up the Rothbard–Friedman disagreement here — Friedman held the Fed should have replaced the lost money; Rothbard held the bubble should never have been blown.)
- **Confiscatory deflation.** A government directly reduces the money stock (as in some 1990s currency reforms) — pure intervention, a separate case.

Treating “deflation” as one word lumps the first kind (the normal condition of every prosperous era) with the third (the bursting of a credit bubble), and then uses the horror of the third to argue for printing money to prevent the first. Austrians regard this as **the deepest conceptual error behind modern central banks' “2% inflation target”**: the price declines that productivity growth should deliver are cancelled with new money — and that new money, as ④ showed, enters at a point and rewrites relative prices. Stage 17.2, on fixed-supply money such as Bitcoin and its “perpetual growth deflation,” returns to this taxonomy.

The lesson in one sentence: **money's purchasing power is set by “how much cash people want to hold” against “how much cash exists”; the aggregate formula is often right on average, but it cannot see where new money enters or which relative prices it rewrites — and relative prices are the language in which the market transmits knowledge.** In the next lesson (Stage 4.3) we follow a single injection of new money: who gets it first, and who gets it last.
`,

  demo: "cash-balance",

  analogy: `
Think of the economy as a **pond**, each person a lily pad, and money the water.

The MV=PT worldview: add 10% more water and the surface rises evenly by 10%; every lily pad is lifted by exactly the same amount. The **relative heights** of the pads never change, so no pad is ever “fooled” into thinking its position has moved. That is monetary neutrality — if it held, money would be nothing but a scale.

The Austrian worldview: the water does not fall evenly from the sky; it is pumped in through **a single pipe** at the edge. The pads near the pipe are lifted first; the far pads are still where they were. The near pads conclude “my patch of water rose and the others didn't,” and act on that signal (grow faster, send roots this way). By the time the water has spread the surface really is 10% higher on average — but those pads have already changed shape in response to a **temporary and local** signal. And the water never finishes spreading, because before it does the pipe opens again.

“Hoarding” is some pads keeping a little space beneath them clear of water — they have not stolen the water, it is still in the pond; they simply want a different amount under their own feet, and the whole surface dips slightly to accommodate them.

And “deflation”? The pond grows larger (productivity rises) and the same water spreads thinner — growth deflation, a good thing. The pads want more space beneath them — cash-building deflation, an adjustment. Or a pipe that had been secretly pumping water in is pulled out and the level drops sharply — bank-credit deflation, painful, but the problem was the secret pipe, not the moment it was removed.
`,

  misconceptions: [
    "**“The demand for money means wanting more money.”** — That is the desire for purchasing power, unlimited and unanalyzable. The economic demand for money is the balance people choose to **hold** in money at a given purchasing power. It depends on income rhythm, uncertainty, the opportunity cost of cash, and price expectations; it can rise or fall, and it can be satisfied.",
    "**“Increase money 10% and all prices rise 10%.”** — That is MV=PT's prediction on average. The real process is money entering at a point and diffusing round by round; the first sectors may rise 18%, the last only 3–6%, the average about 10%, and relative prices are permanently changed — and relative prices are the signals entrepreneurs act on.",
    "**“Velocity V is a property of money itself.”** — V has no independent measurement; it is the residual PT ÷ M. “V rose” only means “people want to hold smaller cash balances.” Writing it as a velocity makes one forget the millions of holding decisions behind it.",
    "**“When people hoard money it leaks out of the economy.”** — The money has not vanished; it sits with its holder. Their reduced spending lowers prices a little and raises the purchasing power of everyone else's balances a little. “Hoarding” is just the pejorative for a higher demand for cash balances; the market answers with a price adjustment and needs no government top-up.",
    "**“Deflation is always a catastrophe, so central banks must maintain 2% inflation.”** — Salerno distinguishes growth deflation (productivity, good), cash-building deflation (market self-adjustment), and bank-credit deflation (the collapse of a prior credit expansion). Using the horror of the third to justify printing money to prevent the first is a category error — and the printed money then enters at a point and rewrites relative prices.",
  ],

  quiz: [
    {
      q: "An economy of 100 people holds $10,000 of money. An epidemic makes everyone want to raise their cash balance from $100 to $120; the money supply is unchanged. What happens in the end?",
      options: [
        "Everyone succeeds in holding $120 and the money stock becomes $12,000",
        "Prices fall until $10,000 has the purchasing power $12,000 used to have; each person still holds $100 nominally but a real balance 20% larger",
        "Prices rise, because people's demand has increased",
        "The economy stagnates permanently because all the money is hoarded",
      ],
      answer: 1,
      explain: "The total cannot change; everyone buying less and selling more only pushes prices down, and **real balances** are satisfied through higher purchasing power. This is the heart of Mises's cash-balance approach: the demand for money is met by changes in purchasing power, not by printing.",
    },
    {
      q: "What is the core Austrian criticism of V (velocity) in MV=PT?",
      options: [
        "V has never been stable in history",
        "V should be replaced by the interest rate",
        "V is too hard to measure, so the formula is useless",
        "V is the residual PT ÷ M, not a cause; it is just another way of saying “how large a balance people want to hold”",
      ],
      answer: 3,
      explain: "Saying “V is stable” assumes P moves in proportion to M — the conclusion smuggled into the premise. The real causal starting point is each person's decision about cash balances.",
    },
    {
      q: "The money stock rises 10% and the new money enters as bank loans to firms. According to the lesson's example, the most likely final price structure is:",
      options: [
        "Capital goods rise most (about 14%), services least (about 6%), the average about 10%",
        "Consumer goods rise most, capital goods least",
        "Only capital goods rise; everything else is unchanged",
        "Capital goods, consumer goods and services all rise exactly 10%",
      ],
      answer: 0,
      explain: "The new money reaches firms first, who buy capital goods — those rise first and most; it then diffuses to consumer goods and services. The average is near 10%, but **relative prices** have shifted, sending entrepreneurs a false “build more capital goods” signal.",
    },
    {
      q: "From 1873 to 1896 U.S. prices fell about 1–2% a year while real output grew strongly. In Salerno's taxonomy this is:",
      options: ["Bank-credit deflation", "Cash-building deflation", "Growth deflation", "Confiscatory deflation"],
      answer: 2,
      explain: "Productivity rose and the same money chased more goods — growth deflation, the normal condition of prosperity rather than a catastrophe. Electronics getting cheaper every year while sales grow is the same phenomenon.",
    },
    {
      q: "“When people hold cash, money leaks out of the circular flow.” Why do Austrians disagree?",
      options: [
        "Because the central bank immediately replaces any leaked money",
        "Because hoarding is illegal",
        "Because people never actually hold cash",
        "Because holding cash is itself the demand for cash balances; the money remains with its holder and the market responds through price adjustment",
      ],
      answer: 3,
      explain: "Holding an extra $100 = buying $100 less, but the $100 has not vanished; it lowers prices slightly and raises the purchasing power of others' balances. “Hoarding” is merely a pejorative for a higher demand for cash balances.",
    },
  ],

  further: [
    { label: "Mises, The Theory of Money and Credit (1912), Part Two — the cash-balance approach and the determination of purchasing power", url: "https://mises.org/library/book/theory-money-and-credit" },
    { label: "Mises, Human Action, Chapter XVII “Indirect Exchange” — money demand, non-neutrality, and the critique of the quantity theory", url: "https://mises.org/library/book/human-action" },
    { label: "Joseph T. Salerno, “An Austrian Taxonomy of Deflation”, QJAE (2003) — the classification of deflations", url: "https://mises.org/library/austrian-taxonomy-deflation-particular-reference-us" },
    { label: "Irving Fisher, The Purchasing Power of Money (1911) — the original statement of MV=PT (full text at Econlib)", url: "https://www.econlib.org/library/YPDBooks/Fisher/fshPPM.html" },
    { label: "Rothbard, Man, Economy, and State, Chapter 11 “Money and Its Purchasing Power”", url: "https://mises.org/library/book/man-economy-and-state-power-and-market" },
  ],
};
