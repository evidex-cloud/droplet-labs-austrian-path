export default {
  id: "price-controls",
  stage: 8,
  order: 2,
  title: "Price Controls: Minimum Wages, Rent Control & Price Caps",
  difficulty: "systems",
  prereqs: ["intervention-logic"],

  oneLiner:
    "Price control is the oldest, most intuitive, and most thoroughly refuted intervention there is: rents too high, freeze them; wages too low, set a minimum; water too dear after a hurricane, ban “gouging.” The intention is decent every time, and the mechanism is identical every time — **a price is not a number you can overwrite; it is a message.** Overwriting the message does not change reality; it makes people act on false information. This lesson works a simple supply-and-demand example to compute shortages and surpluses, checks it against New York, Stockholm, Berlin, Venezuela and the 1970s American gas line — and takes seriously the strongest counter-evidence, Card–Krueger and the monopsony argument.",

  intuition: `
Take the milk example from Stage 8.1 and replace milk with anything you like. The market price is a number that buyers and sellers bump into at the marginal pair (Stage 1.3): at that price, the people who want to buy exactly match the people who want to sell. Nobody “set” it. It was **discovered**.

Now the government says: that number is too high, and from today it may not exceed some maximum (a **price ceiling**). Or: that number is too low, and it may not fall below some minimum (a **price floor**). What follows fits in one sentence:

**Ceilings make shortages; floors make surpluses.**

A ceiling below the market price: more people want to buy, fewer want to sell, and a gap opens. But the gap does not vanish on its own — the good still has to be handed out somehow to the people who want it. Since the price may not rise, **non-price rationing** appears: queues (paying in time), lotteries (paying in luck), connections (paying in favours), black markets (paying in risk), quality decay (paying in something else). **Price controls never abolish payment. They convert visible payment in money into invisible payment in other things — and those other things usually do not reach the seller, so they are simply wasted.**

A floor above the market price: more people want to sell, fewer want to buy, and a surplus piles up. Surplus milk gets poured into rivers (America in the 1930s), surplus butter goes into cold storage (the European “butter mountain” of the 1980s), and surplus labour — that is unemployment, or its subtler cousins: hours cut, training cancelled, perks withdrawn, a self-checkout machine where a cashier used to stand.

The most important lesson here is not “controls have side effects” — everyone concedes side effects. It is this: **the side effects are not accidents; they are the direct product of the control, and the intervenor's good intentions have nothing to do with it.** This is the “pattern prediction” of Stage 2.3: Austrians cannot tell you by what percentage rental supply will shrink after a rent freeze, but they can tell you with certainty that it will shrink, decay, and grow a black market.

History has handed us a near-perfect set of natural experiments: rent control has been tried in New York, Stockholm, San Francisco, and Berlin, and it produced the same result every time — so reliably that the Swedish economist Assar Lindbeck called it, apart from bombing, the most efficient technique known for destroying a city. And in 2019 three Stanford economists, using San Francisco data and entirely mainstream methods, confirmed the Austrian pattern prediction.

But fairness demands more: **the minimum wage** is the most contested price control of all, because in 1994 David Card and Alan Krueger found that a minimum-wage increase in New Jersey did not reduce fast-food employment. This lesson lays out their argument and the theory of “monopsony” in full, then gives the Austrian reply — whose core is that **there are many more margins of adjustment than “how many people to hire.”**

**In this lesson we break it into five pieces:**

- **① A numerical example: ceiling, floor, gap, and deadweight loss**
- **② Who gets the good: four forms of non-price rationing**
- **③ Rent control: the same experiment from New York to Berlin**
- **④ Price caps and “anti-gouging”: the gas line and water after the hurricane**
- **⑤ The minimum wage: Card–Krueger, monopsony, and the margins of adjustment**
`,

  mechanics: `
### ① A numerical example: ceiling, floor, gap, and deadweight loss

Take the simplest linear market. Price P, quantity Q (in ten-thousands of units):

$$
Demand: Q_d = 100 − 2P
Supply: Q_s = −20 + 2P
Equilibrium: 100 − 2P = −20 + 2P → P* = 30, Q* = 40
$$

**Ceiling at 20**: demand Q_d = 60, supply Q_s = 20, a **shortage of 40**. Only 20 units actually change hands — half the uncontrolled 40.

**Floor at 40**: demand Q_d = 20, supply Q_s = 60, a **surplus of 40**. Again only 20 units trade — again half. Note the symmetry: **whichever way you push the price, the quantity traded is set by the short side**, and it is always less than the market's.

Now compute a measure mainstream economics also uses — **deadweight loss**. Under the ceiling at 20, only 20 units trade. What would a buyer pay for the 20th unit? Put Q = 20 into demand: P = 40. What does it cost the seller at the margin? Put it into supply: P = 20. For every unit from the 20th to the 40th, a buyer's willingness to pay exceeds a seller's cost, yet the trade does not happen. The area of that triangle:

$$
DWL = ½ × (40 − 20) × (40 − 20) = 200
$$

Those 200 were not transferred from buyers to sellers or from sellers to buyers — they **vanished from the world**, because mutually beneficial exchanges that could have happened were forbidden. That is the “value destroyed” of Stage 8.1.

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Ceiling at 20: shortage of 40, only 20 traded, a deadweight triangle</text><line x1="70" y1="270" x2="600" y2="270" stroke="var(--line)" stroke-width="1.5"/><line x1="70" y1="270" x2="70" y2="40" stroke="var(--line)" stroke-width="1.5"/><text x="600" y="290" text-anchor="end" font-size="11" fill="var(--muted)">quantity Q</text><text x="60" y="45" text-anchor="end" font-size="11" fill="var(--muted)">P</text><polygon points="220,110 370,190 220,190" fill="var(--red-soft)" stroke="var(--red)" stroke-width="1" stroke-dasharray="3 2"/><line x1="70" y1="50" x2="520" y2="270" stroke="var(--blue)" stroke-width="2.5"/><text x="500" y="250" font-size="11" fill="var(--blue)" font-weight="600">demand Qd = 100 − 2P</text><line x1="145" y1="270" x2="520" y2="70" stroke="var(--orange)" stroke-width="2.5"/><text x="470" y="72" font-size="11" fill="var(--orange-ink)" font-weight="600">supply Qs = −20 + 2P</text><line x1="70" y1="190" x2="600" y2="190" stroke="var(--red)" stroke-width="2"/><text x="590" y="184" text-anchor="end" font-size="11" fill="var(--red)" font-weight="700">ceiling P = 20</text><line x1="370" y1="150" x2="370" y2="270" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/><circle cx="370" cy="150" r="5" fill="var(--ink)"/><text x="380" y="145" font-size="11" fill="var(--ink)" font-weight="600">equilibrium P*=30, Q*=40</text><line x1="220" y1="190" x2="220" y2="270" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/><text x="220" y="288" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="600">Qs=20</text><text x="370" y="288" text-anchor="middle" font-size="11" fill="var(--muted)">40</text><line x1="520" y1="190" x2="520" y2="270" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/><text x="520" y="288" text-anchor="middle" font-size="11" fill="var(--blue)" font-weight="600">Qd=60</text><line x1="225" y1="205" x2="515" y2="205" stroke="var(--red)" stroke-width="1.5" marker-start="url(#pc-a)" marker-end="url(#pc-a)"/><text x="370" y="222" text-anchor="middle" font-size="11" fill="var(--red)" font-weight="700">shortage = 60 − 20 = 40</text><text x="262" y="165" font-size="10.5" fill="var(--red)" font-weight="600">DWL = 200</text><circle cx="220" cy="110" r="4" fill="var(--blue)"/><text x="130" y="105" font-size="10.5" fill="var(--blue)">buyer pays 40 for the 20th unit</text><text x="100" y="197" font-size="10.5" fill="var(--muted)">20</text><text x="100" y="155" font-size="10.5" fill="var(--muted)">30</text><text x="100" y="115" font-size="10.5" fill="var(--muted)">40</text><defs><marker id="pc-a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><circle cx="3" cy="3" r="2" fill="var(--red)"/></marker></defs></svg><figcaption>A ceiling pressed below the clearing price: supply retreats to 20, demand swells to 60, gap 40. The red triangle is mutually beneficial exchange that could have happened and was forbidden — nobody got it; it simply disappeared.</figcaption></figure>

Someone will say: “The buyers of those 20 units saved 10 each — that is welfare for the poor.” Not so fast. **Which 20 units, and to whom** — that has not been decided yet.

### ② Who gets the good: four forms of non-price rationing

Once the price is forbidden to allocate, the good must be allocated some other way. Four forms recur throughout history, each wasting a different resource:

- **Queues** — paying in time. The American gas lines of 1979, the Soviet bread line. The time the queuers lose never becomes the seller's revenue; it simply evaporates. And queuing favours **the people whose time is worth least**, who are not necessarily the people the policy meant to help.
- **Lotteries and waiting lists** — paying in luck. Stockholm's rental queue averages about nine years, and central districts can exceed twenty. Whoever wins receives a large hidden fortune (the present value of the gap between market and controlled rent); whoever does not gets nothing. It is one of the **most unequal** allocation methods there is — the inequality is merely hidden inside a list.
- **Connections and discrimination** — paying in favours. When a landlord faces ten applicants and may charge all of them the same, he picks the “least trouble”: highest income, most like himself, no children, no pets. **Price control makes discrimination free**: at the market price, turning down a tenant costs a vacancy; at the controlled price, there is always the next applicant.
- **Black markets and quality decay** — paying in risk and in other dimensions. After Venezuela's 2014 “Fair Prices” law, supermarket shelves stood empty while the street resellers (bachaqueros) charged several times the official price; New York landlords of controlled apartments “raised the rent” by ending repairs, removing doormen, and subdividing rooms — **quality is another dimension of price; hold one dimension still and the other moves.**

Here Mises's core insight comes into focus: **these are not the results of a control that “failed.” They are the results of a control that succeeded.** The price was successfully held down; therefore allocation had to find another route, and every such route is more wasteful, less fair, and more easily manipulated by the powerful than the price was.

### ③ Rent control: the same experiment from New York to Berlin

Rent control is the most thoroughly studied ceiling, because it has been re-run in different countries and decades with strikingly consistent results.

- **New York**: introduced in 1943 as a temporary wartime measure and never fully removed. Tenants in controlled apartments almost never move (moving forfeits the protection); new rental construction nearly stopped; in the 1970s whole blocks in the Bronx were abandoned by landlords and some deliberately burned.
- **Stockholm**: rents across Sweden are “negotiated” between tenant and landlord associations rather than set by the market, producing waiting lists measured in years and decades, a large sublet black market, and a rental system open mainly to insiders. Lindbeck's famous line was aimed at his own country.
- **San Francisco**: rent control has applied since 1979 to multi-family buildings built before 1980, and was extended in 1994 to small multi-family buildings. **Diamond, McQuade and Qian (American Economic Review, 2019)** used that 1994 extension as a natural experiment: affected landlords reduced rental supply by about 15% (sales, condo conversions, redevelopment), and citywide rents rose roughly 5% as a result. Sitting tenants did pay less — but the cost fell on every newcomer, and the control **worsened** the very shortage and gentrification it was meant to relieve. This is a mainstream econometric result, and it matches the Austrian pattern prediction exactly.
- **Berlin's 2020 Mietendeckel**: in force from February 2020, it froze and rolled back rents on roughly 1.5 million flats. Within a year, rental listings in Berlin fell by about half while listings in uncontrolled neighbouring cities rose; many landlords switched to selling. In April 2021 the Federal Constitutional Court struck the law down as beyond the state's competence — but the shortage had already been created.

Notice the shared structure of these cases: **the control “protects” the people already inside and punishes everyone trying to get in** — the young, immigrants, anyone changing jobs. And the insiders defend the control with votes and lobbying. That is the “concentrated benefits, dispersed costs” of Stage 8.4.

### ④ Price caps and “anti-gouging”: the gas line and water after the hurricane

**The American gas lines of the 1970s** are the textbook case. In 1971 Nixon imposed a general wage-and-price freeze, and gasoline price controls persisted in various forms until 1981. The 1973 Arab oil embargo and the 1979 Iranian revolution sent crude costs jumping, but retail prices were held — so across the country there were queues of several hours, odd-even day purchase rules, and “NO GAS” signs. The instructive comparison: European countries did not cap prices; fuel got expensive, but **there were no queues**. The same supply shock produced a high price on one side and a high price plus queues plus empty tanks on the other — because the part of the cost the price was not allowed to carry was paid in time and uncertainty. When Reagan removed the controls in 1981, the lines disappeared within weeks.

**Anti-price-gouging laws** are the modern variant: after hurricanes and earthquakes, sellers may not raise the price of water, generators, or plywood to “unconscionable” levels. Intuitively they protect victims. Austrian analysis makes us ask: **what is the post-disaster price rise doing?**

- **On the demand side**: at $40 a case, you buy the water you need instead of clearing the shelf “just in case”; hoarders are talked out of it by the price, and the water goes to those who need it most.
- **On the supply side**: a hardware-store owner in the next state sees generators selling at three times the usual price and rents a truck that night. The price is **the signal that summons supply**; forbidding it tells out-of-town suppliers “don't come.”
- **On the time dimension**: the high price is temporary and falls as new supply arrives; the empty shelves an anti-gouging law creates last until government relief shows up.

None of this says the victims' suffering is unreal. It says: **forbidding the price rise does not create more water; it only decides who gets the limited water — the early, the connected, the hoarders — instead of the neediest.** If society wants to help victims, giving them money (a binary intervention) is far more honest than freezing prices (a triangular one) — exactly the distinction drawn in Stage 8.1.

**Venezuela** shows the endgame. Price controls on staples began in 2003; the 2014 Fair Prices law capped profit margins at 30%, with prison for violators. The result was chronic shortages of milk, flour, toilet paper, and medicine, black-market prices several times the official ones, fingerprint scanners at supermarket doors to enforce purchase limits, and cross-border smuggling as an industry. The simultaneous hyperinflation (Stage 4.3) made every official price absurd within weeks, forcing the controllers to “adjust” again and again, always behind reality. **Price caps plus the printing press is the fastest version of Mises's spiral.**

### ⑤ The minimum wage: Card–Krueger, monopsony, and the margins of adjustment

A minimum wage is a price floor — the price of labour may not fall below a set number. By the logic of section ①, it should create a surplus of labour, i.e. unemployment, concentrated among people whose productivity falls below the minimum (teenagers, the low-skilled, new immigrants). That was the textbook conclusion for decades.

**State the opposing case at full strength.** In 1994 David Card and Alan Krueger (American Economic Review) compared fast-food employment in New Jersey and neighbouring Pennsylvania before and after New Jersey raised its minimum from $4.25 to $5.05 in 1992. They found no drop in New Jersey employment — if anything a slight rise. Why might that be? The theory of **monopsony** supplies a mechanism: if employers have pricing power in a local labour market (switching jobs is costly, information is imperfect, commuting is constrained), they hold wages below the competitive level and hire fewer workers; a moderate minimum wage can then **raise** employment by removing the employer's incentive to suppress wages. Later studies (for example Dube and co-authors using contiguous-county comparisons) also reported small or insignificant employment effects. Card shared the 2021 Nobel Prize partly for this style of empirical work. This is serious evidence and cannot be waved away.

**The Austrian reply has three layers.**

First layer: **the empirical dispute is live.** Neumark and Wascher (2000) redid the New Jersey comparison with payroll records rather than Card–Krueger's telephone survey and found employment fell; their 2008 book *Minimum Wages* surveys well over a hundred studies and concludes that most still find negative employment effects, especially for teenagers and the low-skilled. A 2017 University of Washington study of Seattle's $15 minimum found that low-wage workers' **hours** fell by more than their hourly wage rose, so total earnings declined. The literature is split; neither side should claim the matter is “settled.”

Second layer: **the margins of adjustment go far beyond “how many people to hire.”** This is the Austrian contribution that matters most, and it explains precisely why the “employment count” might show nothing:

- **Hours**: nobody is fired, but shifts drop from 40 hours to 32.
- **Training and promotion**: the entry-level job was an exchange of low pay for skills; the minimum wage outlaws that exchange, so the training vanishes.
- **Non-wage benefits**: free meals, flexible scheduling, uniforms, staff discounts are withdrawn.
- **Intensity**: the same pay now demands more output; the “not fast enough” are weeded out.
- **The entry margin**: current staff keep their jobs, but the **next** low-skilled applicant never gets one — Bastiat's unseen (Stage 1.4); no telephone survey counts people who were never hired.
- **Capital substitution**: ordering kiosks, self-checkout, kitchen automation — Stage 18.4 is devoted to how minimum wages accelerate this. When the price of labour is forced up, relatively cheaper capital goods become more attractive; that is not capitalist “greed,” it is the opportunity cost of Stage 1.4 speaking.
- **Product prices and exit**: costs are passed to consumers (often the same low-income people), and marginal firms close.

Third layer: **the limits of the monopsony argument.** Even granting employer power in some local markets, a minimum wage “works” only inside a narrow band — above the competitive wage but below the worker's marginal product. Where that band lies varies by region, industry and age, and it moves over time; a single statewide or national number cannot land inside the band in every market at once. **This is the knowledge problem again** (Stage 7.2): the regulator does not know the number and has no mechanism for discovering it. Moreover, if employers really do hold monopsony power, the more direct remedy is to **lower the cost of switching jobs** — fewer non-compete clauses, less occupational licensing (Stage 8.3), fewer barriers to relocation — rather than fixing a price.

**The honest conclusion**: Austrians can predict with certainty that a minimum wage above the market wage forces adjustment on **some margin**, and that the cost falls on the weakest workers; they cannot predict how large the adjustment will be or which margin it lands on, and they should concede that in some local markets with visible monopsony a moderate minimum may not reduce headcount in the short run. The difference is that Austrians look at all the margins, while “employment” is only one of them.

**Agricultural price floors** carry no such controversy. In the 1980s the European Community's Common Agricultural Policy set support prices for butter, milk, grain and wine, producing the notorious “butter mountain,” “milk lake,” and “wine lake” — governments bought the surplus with taxpayers' money, stored it in cold warehouses, and dumped it cheaply in Africa, undercutting local farmers along the way. America's Agricultural Adjustment Act of the 1930s paid farmers to destroy crops and slaughter livestock while people went hungry. A surplus is the arithmetic of a floor, not a scandal.

The lesson in one line: **a price is a message; a control is a lie; the lie does not change reality, only who pays for it.** Stage 14.1's five-step method turns “find every margin of adjustment” into a fixed step.
`,

  demo: "price-control-lab",

  analogy: `
Think of the market price as **the reading on a thermometer**. A child's fever is at 39.5°C, and the parents are frightened.

Price control amounts to taking a pen and rewriting the “39.5” on the thermometer as “37.0.” **The reading has changed; the child's temperature has not.** Worse, now nobody knows how hot the child really is — the doctor who sees 37.0 prescribes nothing, nobody frees up a bed, no ice pack arrives. Everyone who would have reacted to “39.5” is now reacting to a false number.

And after the reading is rewritten, the parents discover a new problem: the child still feels awful. So someone proposes controlling the “feeling awful” too — forbid the child to complain of the heat. That is Stage 8.1's spiral in its price-control version.

Rent freezes rewrite the “rent” reading downward, so nobody builds; minimum wages rewrite the “wage” reading upward, so nobody hires the least experienced; anti-gouging laws rewrite the “water” reading downward after the hurricane, so nobody drives water in. Each time, what is rewritten is the message, and what pays is the supply the message would have summoned. **Bringing the fever down has never once been achieved by editing the thermometer.**
`,

  misconceptions: [
    "**“Rent control helps the poor.”** — It helps **whoever is already in a controlled unit**, rich or poor (plenty of New York's controlled apartments house high earners); it punishes everyone trying to get in — the young, immigrants, job-changers — who face a shrunken stock and higher market rents. The 2019 San Francisco study found the control ultimately worsened the shortage it was meant to relieve.",
    "**“Card–Krueger proved minimum wages don't cut employment, so Austrian theory is refuted.”** — They found that one indicator, headcount, did not fall in one case; Neumark–Wascher found the opposite with payroll data, and the Seattle study found hours fell. The Austrian prediction is that adjustment must occur on *some* margin — hours, training, benefits, entry, automation — and headcount is only one of them.",
    "**“Raising prices after a disaster is profiteering and should be banned.”** — The price rise does two things: it talks hoarders out of clearing the shelves, leaving scarce water for those who need it most, and it summons suppliers from out of town overnight. Ban it and the water does not multiply; it goes to the early and the hoarders, and no outside supply comes. To help victims, give them money — more honest than freezing prices.",
    "**“Shortages come from hoarders and speculators, not from the cap.”** — Causation reversed. At the market price hoarding is pointless (the price already reflects scarcity); it is the cap that creates the gap between official and real prices, and that gap is what makes hoarding and black markets profitable. Venezuela's “speculators” are a product of the controls, not the cause of the shortage.",
    "**“Set a ‘reasonable’ ceiling — not much below market — and there are no side effects.”** — A ceiling above the market price does nothing; a ceiling below it, however slightly, pulls supply out and demand in at the margin. And the market price moves (inflation, cost shocks): a ceiling that is “reasonable” today bites deep tomorrow — which is exactly how the 1970s gasoline caps went from mild to disastrous.",
  ],

  quiz: [
    {
      q: "Demand Q_d = 100 − 2P, supply Q_s = −20 + 2P, equilibrium P* = 30, Q* = 40. The government sets a price floor at 40. What happens?",
      options: [
        "A shortage of 40",
        "A surplus of 40, with only 20 actually traded",
        "A surplus of 20, with 40 actually traded",
        "Nothing, because the floor is above equilibrium",
      ],
      answer: 1,
      explain: "At a floor of 40: demand 20, supply 60, **surplus 40**; actual trade is set by the short side (demand), so only 20 units — half, exactly as under the ceiling at 20.",
    },
    {
      q: "Under the ceiling at 20, what is the deadweight loss? (At the 20th unit a buyer would pay 40 and the seller's cost is 20; equilibrium quantity is 40.)",
      options: ["100", "400", "200", "800"],
      answer: 2,
      explain: "Triangle area = ½ × (40 − 20) × (40 − 20) = **200**. This value is transferred to nobody; it disappears because mutually beneficial exchanges were forbidden.",
    },
    {
      q: "What did Diamond, McQuade and Qian (2019) find about San Francisco's rent control?",
      options: [
        "The control lowered citywide rents and increased housing supply",
        "Affected landlords cut rental supply by about 15%, citywide rents rose, and the control worsened the shortage it aimed to relieve",
        "The control had no measurable effect",
        "The control made it easier for newcomers to find housing",
      ],
      answer: 1,
      explain: "A mainstream econometric result: sitting tenants gained, but landlords exited the rental market through sales and conversions, supply shrank about 15%, and the cost fell on all newcomers — matching the Austrian pattern prediction.",
    },
    {
      q: "What is the core Austrian reply to the Card–Krueger study?",
      options: [
        "Their data were fabricated",
        "A minimum wage always causes immediate mass unemployment",
        "Adjustment occurs on many margins — hours, training, benefits, entry, automation — headcount is only one, and a uniform minimum cannot land inside every local market's “effective band”",
        "Monopsony does not exist in reality",
      ],
      answer: 2,
      explain: "Austrians grant that monopsony may exist but note (a) Neumark–Wascher and others found the opposite, (b) the margins of adjustment go well beyond headcount, and (c) the “effective band” varies by market and cannot be known by the regulator — the knowledge problem.",
    },
    {
      q: "The United States had gas lines in the 1970s and Europe did not. The most plausible explanation?",
      options: [
        "Europe had larger oil reserves",
        "The U.S. capped gasoline prices, so the price could not rise to clear the market and the gap became queues; Europe had no cap, so prices rose but nobody queued",
        "Americans drove more",
        "Europe imposed stricter rationing",
      ],
      answer: 1,
      explain: "The same supply shock: on one side prices rose and there were no queues; on the other the price was held, and the shortage appeared as time (queues) and uncertainty (“NO GAS”). After U.S. decontrol in 1981 the lines vanished within weeks.",
    },
  ],

  further: [
    { label: "Rothbard, Man, Economy, and State with Power and Market, Ch. 12 “The Economics of Violent Intervention” — the systematic treatment of price controls and minimum wages", url: "https://mises.org/library/book/man-economy-and-state-power-and-market" },
    { label: "Diamond, McQuade & Qian, “The Effects of Rent Control Expansion on Tenants, Landlords, and Inequality: Evidence from San Francisco” (AER, 2019)", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20181289" },
    { label: "Econlib Encyclopedia: Rent Control (Walter Block)", url: "https://www.econlib.org/library/Enc/RentControl.html" },
    { label: "Econlib Encyclopedia: Minimum Wages (Linda Gorman) — including the Card–Krueger vs Neumark–Wascher dispute", url: "https://www.econlib.org/library/Enc/MinimumWages.html" },
    { label: "Mises, Human Action, Ch. 30 “Interference with the Structure of Prices”", url: "https://mises.org/library/book/human-action" },
  ],
};
