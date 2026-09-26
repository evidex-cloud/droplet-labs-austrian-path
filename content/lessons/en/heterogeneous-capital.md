---
id: heterogeneous-capital
prereqs: roundabout-production
demo: capital-jigsaw
---

# Heterogeneous Capital: Lachmann's Jigsaw & Entrepreneurial Recombination

## @hook
The textbook production function reads Y = F(K, L): a single number K stands for “capital.” But nothing called “capital” exists in the world — only ovens, vans, chip fabs, datasets, molds, a leased storefront. And they are **not interchangeable**: an oven cannot serve as a van; a lithography machine cannot be turned into a tractor. Ludwig Lachmann, in *Capital and Its Structure* (1956), put it this way: **capital is not a homogeneous fund but a structure of complementary, specific capital goods**, each piece meaningful only inside some entrepreneur's **plan**. When the plan fails, the pieces must be re-fitted — some find new places, some are stranded forever. That is exactly what makes the malinvestment of [[boom-malinvestment|Stage 5.2]] a **real loss**, not a bookkeeping “reallocation.”

## @intuition
Suppose you open a bakery. You buy a professional oven ($50k), a delivery van ($30k), put a deposit on a storefront ($20k), commission a set of custom cake molds ($10k), and train two pastry chefs. **Taken separately** none of these is worth much — an oven with no shop around it, nobody to run it and no van to deliver is a lump of steel. Their value comes from being **combined** to carry out a **plan**: “sell custom cakes on this street.”

Now suppose the plan fails: the young people move away, nobody buys custom cakes. What becomes of the pile?

- The van: sold to a courier at a 15% discount — it is **general-purpose**.
- The storefront: sublet to a café, a little of the deposit lost — also fairly general.
- The oven: only bakers want it; the one buyer nearby is a pizzeria offering $30k — it is **specific**.
- The cake molds: useful only to someone making that cake, which nobody wants; scrapped for $1k — **highly specific**.

You spent $110k; after regrouping you recover about $74k; the **real loss is about $36k**. That is not an accounting entry: real steel, real hours, real savings were put in the wrong place and will never come back.

The little story contains the whole lesson. **Capital goods are heterogeneous**: each is different and has its own limited set of uses. **Capital goods are complementary**: an oven's value depends on there being a shop, a chef and customers — not on how much value it “contains.” **Capital goods mean something only inside plans**: dismantle the plan and the same objects change value drastically. **When plans fail, regrouping is costly**: the general pieces find new homes, the specific ones are stranded.

When mainstream economists build growth models they sum that whole pile into a single number K, drop it into Y = F(K, L), and assume K can be remolded like putty into any shape at any time. That is not stupid — for studying a country's growth over decades the simplification yields useful approximations, and in the mechanics we state its case at full strength. But it erases one thing: **time and error.** In a putty world, investing in the wrong direction costs nothing — just reshape. In a jigsaw world, investing in the wrong direction means a batch of pieces that will never fit anywhere again.

Lachmann's capital theory is the hidden thread of the whole Austrian business-cycle story. If capital were putty, the “malinvestment” caused by an artificially low rate ([[boom-malinvestment|Stage 5.2]]) would be a minor misallocation, quickly corrected; precisely because capital is a jigsaw, what was built wrong in the boom becomes a real, painful loss in the bust. It is also the root of [[aggregates-limits|Stage 10.2]]'s question — can a “capital stock” be measured at all? — and the core tool for [[data-new-oil|Stages 15.4]] and 18.2 on data and AI: a trained model, a GPU data center, a proprietary dataset are all **highly specific, highly complementary** capital goods.

**In this lesson we break it into six pieces:**

- **① Lachmann 1956: capital is a structure, not a fund**
- **② Complementarity and substitutability: a bakery's capital combination**
- **③ When plans fail: stranding, regrouping and the arithmetic of loss**
- **④ The rivals at full strength: Clark/Knight's “permanent fund” and Solow's K**
- **⑤ Side note: the Cambridge capital controversy — even the mainstream conceded K cannot be measured**
- **⑥ Why this makes malinvestment a real loss; data and AI are jigsaw pieces too**

## @mechanics
### ① Lachmann 1956: capital is a structure, not a fund

Ludwig Lachmann (1906–1990), German-born, studied under Hayek at the LSE and spent most of his career in Johannesburg. His *Capital and Its Structure* (1956) is the third cornerstone of Austrian capital theory after Böhm-Bawerk and Hayek.

His starting point is a deceptively simple observation: **capital goods are heterogeneous.** Menger had already said that the value of higher-order goods comes from the lower-order goods they help make (imputation, [[diamonds-water|Stage 1.1]]); Böhm-Bawerk described roundaboutness; Hayek drew the triangle. But in their pictures capital goods still look somewhat like things that can be lined up by “stage” and summed by “value.” Lachmann pressed the question: when you say “society's capital grew 10%,” what are you saying? 10% more ovens? 10% more vans? Those cannot be added — **unless you first assume how they will be used.**

So he proposed: **capital is not a quantity; it is a structure.** The structure has three levels:

- **Capital goods**: concrete things — machines, buildings, tools, inventories, software, datasets.
- **Capital combinations**: a set of complementary capital goods organized by an entrepreneur to carry out a **production plan**. The bakery's oven + storefront + van + molds + chefs is one combination.
- **The capital structure**: the web of relations among all the combinations in society — the bakery's flour comes from a mill, the mill's wheat from a farm, the van from a car plant, the plant's steel from a mill … every combination is nested in others.

In this framework the word “capital” has meaning only in the context of a **plan**. Lachmann's line, roughly: **“the use of a capital good is determined not by its physical properties but by the plan in which it is employed.”** The same oven is worth $50k in the bakery's plan, $30k in the pizzeria's, and scrap value in a warehouse with no plan at all. Value is not in the object but in the plan — the rigorous application to capital of [[subjective-value|Stage 1.2]]'s subjective theory of value.

### ② Complementarity and substitutability: a bakery's capital combination

Lachmann described the relations among capital goods with two concepts.

**Complementarity**: **within a plan**, capital goods make each other valuable. The oven needs the shop, the chefs, the van; remove one and the rest lose most of their value. This is the “normal” relation among capital goods — inside a running business almost everything is complementary.

**Substitutability**: **across plans**, a capital good may be replaced by another, or may itself replace something in someone else's plan. The van can replace another firm's van; the storefront can become a café. Lachmann stressed that complementarity is the relation that holds **while a plan runs**; substitutability surfaces **when plans change**.

Add one more dimension — **specificity**. Lachmann called it “multiple specificity”: every capital good has a limited set of uses — not one (perfectly specific) and not infinitely many (perfectly general), but “a few.”

- **Cake molds**: use set ≈ {make this cake}. Extremely specific.
- **Oven**: {bread, cakes, pizza, roasting}. Moderately specific.
- **Van**: {deliver cakes, courier work, moving, commuting}. Fairly general.
- **Storefront**: {bakery, café, convenience store, barber …}. Very general.
- **The chefs' skills**: {baking, some catering}. Moderately specific — **human capital is heterogeneous too.**

The more specific a capital good, the lower its value outside the original plan; the more general, the smaller the loss on regrouping. **A society's capital structure is a network of millions of such combinations meshing with one another** — which is why [[hayek-knowledge|Stage 7.2]]'s knowledge problem bites hardest in the domain of capital: no central agency knows which oven sits in which plan or what alternative uses it might have.

### ③ When plans fail: stranding, regrouping and the arithmetic of loss

The dynamic part of Lachmann's theory is **plan revision**. Entrepreneurs combine capital goods on the basis of expectations about the future (the judgment of [[entrepreneur-alertness|Stage 6.1]]); when the future arrives, expectations are always off somewhere — tastes changed, a rival appeared, the rate moved, the technology shifted. Plans must be revised and capital combinations **regrouped**.

Regrouping has three kinds of outcome:

- **Costless transfer**: general capital goods enter a new plan at nearly full value.
- **Discounted regrouping**: moderately specific goods enter a new plan but keep only part of their value.
- **Stranding**: highly specific goods find no new plan at all; their value collapses to scrap.

Complete the bakery's arithmetic:

<figure><svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Regrouping after a failed plan: general goods transfer, specific goods strand</text><g font-size="11" fill="var(--muted)" text-anchor="end"><text x="118" y="64">Delivery van</text><text x="118" y="108">Storefront deposit</text><text x="118" y="152">Professional oven</text><text x="118" y="196">Custom molds</text><text x="118" y="240">Chef training</text></g><g><rect x="126" y="50" width="150" height="18" rx="4" fill="var(--blue)" opacity=".3"/><rect x="126" y="50" width="127" height="18" rx="4" fill="var(--green)"/><text x="284" y="64" font-size="10.5" fill="var(--ink)">$30k → $25.5k (−15%) general</text></g><g><rect x="126" y="94" width="100" height="18" rx="4" fill="var(--blue)" opacity=".3"/><rect x="126" y="94" width="90" height="18" rx="4" fill="var(--green)"/><text x="234" y="108" font-size="10.5" fill="var(--ink)">$20k → $18k (−10%) general</text></g><g><rect x="126" y="138" width="250" height="18" rx="4" fill="var(--blue)" opacity=".3"/><rect x="126" y="138" width="150" height="18" rx="4" fill="var(--orange)"/><text x="384" y="152" font-size="10.5" fill="var(--ink)">$50k → $30k (−40%) moderately specific</text></g><g><rect x="126" y="182" width="50" height="18" rx="4" fill="var(--blue)" opacity=".3"/><rect x="126" y="182" width="5" height="18" rx="2" fill="var(--red)"/><text x="184" y="196" font-size="10.5" fill="var(--red)" font-weight="600">$10k → $1k (−90%) stranded</text></g><g><rect x="126" y="226" width="50" height="18" rx="4" fill="var(--blue)" opacity=".3"/><rect x="126" y="226" width="30" height="18" rx="4" fill="var(--orange)"/><text x="184" y="240" font-size="10.5" fill="var(--ink)">$10k → $6k (−40%) human capital is specific too</text></g><line x1="126" y1="262" x2="600" y2="262" stroke="var(--line)"/><text x="126" y="284" font-size="11.5" fill="var(--ink)">Value in the original plan <tspan font-weight="700">$120k</tspan> → recovered after regrouping <tspan font-weight="700">$80.5k</tspan> → real loss <tspan font-weight="700" fill="var(--red)">$39.5k</tspan> (about 33%)</text><text x="126" y="306" font-size="11" fill="var(--orange-ink)" font-weight="600">In a “putty capital” world this line reads 0 — capital reshapes costlessly into any form</text><g font-size="10" fill="var(--muted)"><rect x="420" y="40" width="12" height="10" fill="var(--blue)" opacity=".3"/><text x="436" y="49">value in original plan</text><rect x="540" y="40" width="12" height="10" fill="var(--green)"/><text x="556" y="49">after regrouping</text></g></svg><figcaption>A bakery's capital combination regrouped after its plan fails. The more specific the good, the less value survives into a new plan; the molds are stranded outright. About a third of the total is lost — a real, irreversible waste of resources.</figcaption></figure>

Note the **source** of the loss: nothing broke. The goods were **built for a plan that no longer exists.** The oven is the same oven, physically untouched, yet its value fell from $50k to $30k because it can now only enter a second-best plan. That is [[opportunity-cost|Stage 1.4]]'s opportunity cost applied to capital: a capital good's value = its contribution in the **best available plan**; when the original plan vanishes, the best available plan is downgraded and the value falls with it.

One level deeper: the bakery's failure **propagates through the capital structure.** The mill that supplied it lost a customer; the metal shop that made the molds lost an order; the neighboring shops lost foot traffic. Lachmann stressed that the capital structure is a web: a failed plan at one node forces revisions at adjacent nodes. When **many** plans fail at once — because they all rested on the same false interest-rate signal — that propagation becomes the bust of [[bust-liquidation|Stage 5.3]].

### ④ The rivals at full strength: Clark/Knight's “permanent fund” and Solow's K

Now the opponents at their strongest.

**Clark and Knight: capital as a permanent fund.** John Bates Clark (*The Distribution of Wealth*, 1899) and Frank Knight (in a long 1930s exchange with Hayek) argued that we should distinguish “capital goods” (concrete, wearing-out things) from “capital” (an abstract, self-maintaining fund of value). Like a river: the water droplets keep changing, the river persists. Firms constantly scrap old machines and buy new ones, but “capital” as a value total persists and yields a return. On this view, asking “which machine is at which stage” is counting droplets — no help in understanding the river. Knight went further: in a steadily growing economy the notion of a production “period” is meaningless, because capital is perpetual.

**Solow's K.** Robert Solow's 1956 growth model writes capital as a summable stock K entering Y = F(K, L), and assumes K can move freely among uses (later dubbed “putty capital”). Its defense is solid: **(1)** to study a nation's growth over decades you need a quantity that sits alongside labor and technology; **(2)** micro-level heterogeneity “averages out” at the macro level; **(3)** Samuelson's 1962 “surrogate production function” argued that under certain conditions an aggregate K yields the same conclusions as full heterogeneous treatment; **(4)** it is measurable, testable, and enables growth accounting (decomposing growth into contributions of capital, labor and total factor productivity). This toolkit remains the mainstream of growth research and has produced a great deal of genuinely useful empirical work.

The Austrian replies:

**To Clark/Knight**: the river metaphor holds in an **evenly rotating economy** (the ERE of [[vs-math-models|Stage 2.4]]) — everything replaced on schedule, no surprises. But the crux of the real world is precisely that **plans go wrong.** When they do, the “fund” does not maintain itself: the bakery's $120k of “capital” does not flow like river water into the next firm; $39.5k of it is gone for good. Hayek's 1936 reply to Knight, “The Mythology of Capital,” says exactly this: only on the assumption that nothing ever goes wrong is capital a permanent fund.

**To Solow**: Austrians do not deny that aggregation is useful for some questions — Garrison himself uses aggregate diagrams. The dispute is over **which questions aggregation erases.** If the question is “what are the consequences of a false interest-rate signal,” the putty assumption defines the answer away: with putty capital, malinvestment costs nothing and a business cycle is logically impossible. **Using a model that assumes no cycle to study cycles, and concluding there is none, is not surprising.** [[aggregates-limits|Stage 10.2]] examines in more detail when GDP and “capital stock” are good approximations and when they mislead.

And an honest admission: the Austrian triangle of [[roundabout-production|Stage 3.2]] is itself a simplification that lines capital goods up by “stage” and erases some heterogeneity too. Lachmann's theory also stirred debate inside the school — his emphasis on “kaleidic” (borrowed from Shackle), ever-shifting expectations struck some as going so far that any theory of market coordination becomes hard to sustain (the internal debates of [[internal-debates|Stage 14.3]]).

### ⑤ Side note: the Cambridge capital controversy — even the mainstream conceded K cannot be measured

Through the 1950s and 60s Joan Robinson, Piero Sraffa and Luigi Pasinetti at Cambridge, England, fought a decade-long battle with Paul Samuelson and Robert Solow at Cambridge, Massachusetts (MIT) — the **Cambridge capital controversy**. The English side's central charge: **to sum different capital goods into one K you need their prices; those prices depend on the interest rate; and in neoclassical theory the rate is in turn determined by the marginal product of K** — a circle. They then used **reswitching** examples to show that the same technique may be chosen at a low rate, dropped at a middling rate, and chosen again at a high rate, which means the neoclassical monotonic relation “lower rate, more capital-intensive” fails, and K as a quantity independent of the rate simply does not exist.

In 1966 Samuelson published “A Summing Up” in the *Quarterly Journal of Economics* and **conceded that reswitching is real** and that the aggregate production function has no general foundation. The episode is barely mentioned in mainstream textbooks, yet it is one of the rare debates in the history of economics in which one side publicly conceded.

The Austrian position is subtle: **partial agreement on the conclusion, complete disagreement on the reasons.** Cambridge, England, wanted to revive a Ricardo–Sraffa objective value theory and make the rate an exogenous distributional variable settled by class conflict; Austrians hold the opposite — capital cannot be summed because capital goods derive their value from **subjective, heterogeneous entrepreneurial plans**, and the rate comes from **time preference** ([[time-preference|Stage 3.1]]). Austrians must also admit that reswitching wounds Böhm-Bawerk's “average period of production” — the part of their own theory they had already abandoned (footnote in [[roundabout-production|Stage 3.2]]). The lesson cuts both ways: **capital is not a quantity.**

### ⑥ Why this makes malinvestment a real loss; data and AI are jigsaw pieces too

Now reconnect to the main line.

[[abct-one-picture|Stage 5.1]] will say: the central bank lowers the rate; entrepreneurs mistake this for a rise in saving and lengthen the chain, investing heavily in early stages. Those investments are **malinvestment** — not “too much investment” but “investment in the wrong place”: projects built without the saving to sustain them.

The question is how costly the error is. The answer depends entirely on whether capital is putty or a jigsaw.

- **Putty capital** (Solow): when the rate rises and the error surfaces, just reshape K from early stages back to late stages; cost zero; unemployment a temporary “friction.” In that world the business cycle is at most a small wobble in aggregate demand, to be smoothed by demand policy — exactly how Keynesians and monetarists see cycles ([[vs-keynes|Stages 11.1]], 11.2).
- **Jigsaw capital** (Lachmann): the chip fabs, mines, office towers and solar capacity built for a future demand that does not exist are highly specific. When the plan fails they are regrouped at a discount or stranded outright. **The loss is real**: saving was turned into objects nobody wants. Unemployment in the bust is not “insufficient demand”; it is that, while the capital structure regroups, the workers who complemented stranded capital goods have lost their complementary positions and must find new ones in new plans — which takes time.

So Lachmann is the foundation of the whole Austrian cycle theory: **without heterogeneous capital there is no concept of malinvestment, and hence no genuine theory of the cycle.** [[boom-malinvestment|Stages 5.2]] and 5.3 unfold that logic.

Finally, two contemporary applications, developed in [[data-new-oil|Stages 15.4]] and 18.2, planted here as seeds:

**Data is a capital good, and a highly specific one.** An e-commerce firm's user-behavior data is enormously valuable to its own recommendation plan and worth almost nothing to a steel mill. Data's value comes from the plan it is embedded in — which is why the analogy “data is the new oil” fails: oil is fairly general-purpose, data extremely specific ([[data-new-oil|Stage 15.4]]).

**AI is a capital good with extreme complementarity.** A GPU data center has value only **fitted together with** electricity, cooling, training data, algorithmic talent and some concrete business plan. Once a class of models' commercial plan is shown not to hold, the hardware customized for it strands like the bakery's molds — the central question when [[ai-bubble-abct|Stage 18.5]] reads the AI capex frenzy through ABCT: **how specific are these pieces, and whose plan is holding them up?** The demo lets you assemble a production plan by hand, take a demand shock, count how many pieces can be re-used — then flip the “putty” switch to see how the mainstream model defines those losses away.

## @analogy
Think of a society's capital as **a box of jigsaw pieces**, not a bucket of sand.

Sand (putty capital, Solow's K) pours into any mold: build a castle today, flatten it and build a pyramid tomorrow, and not a grain is lost. Textbook capital is like that: the rate changes, K “flows” from this industry to that one, painlessly.

A jigsaw is different. Each piece is cut to interlock with **a few specific others**: the oven piece must lock with the storefront, the chef and the van to form the picture called “bakery.” A piece **on its own means nothing** — its value lies entirely in “who it can lock with.”

Now someone (the central bank) tells all the players: “There are going to be more pieces; everyone can build a bigger picture.” So the players go and cut new pieces for a “bigger picture” — the chip-fab piece, the mine piece, the twenty-story-office piece. When it turns out there are no more pieces after all (saving did not rise), everyone is holding **pieces cut for a picture that does not exist.**

Then comes the regrouping. Some pieces have fairly general shapes (vans, storefronts, general skills) and can be slotted into other pictures; some are cut so peculiarly (molds for one cake, hardware for one model, a skill for one process) that no picture will take them, and they are thrown away. **The discarded ones are the real cost of malinvestment** — not a bookkeeping adjustment but real wood, real hours, real savings cut into shapes nobody wants.

Lachmann's whole insight in a sentence: **the economy is not shoveling sand; it is assembling a jigsaw, and every piece is an entrepreneur's guess about the future.** Guess right and the pieces lock together and value appears; guess wrong and the pieces strand and value disappears. [[boom-malinvestment|Stage 5.2]] is about the case where many people guess wrong at once — because the rate they were looking at was lying.

## @misconceptions
- **“Capital is an aggregate K that flows freely between industries.”** — Capital is a structure of complementary, specific capital goods. An oven cannot become a van; a lithography machine cannot become a tractor. Capital “flows” only through discounted regrouping or outright stranding, and the losses are real. The putty assumption defines those losses away — and with them the business cycle.
- **“A machine's value depends on its productive capacity (its physical properties).”** — Its value depends on the plan it sits in. The same oven is worth $50k in the bakery's plan, $30k in the pizzeria's, and scrap in a warehouse with no plan. This is [[subjective-value|Stage 1.2]]'s subjective theory of value applied rigorously to capital: value is in the plan, not in the object.
- **“The Austrians won the Cambridge capital controversy.”** — The combatants were Cambridge, England (Robinson, Sraffa) and Cambridge, Massachusetts (Samuelson, Solow); Austrians were not a party. Austrians agree with the conclusion that K cannot be aggregated independently of the rate, but for entirely different reasons: the English side wanted to revive objective value theory, whereas Austrians locate the cause in the subjective plans from which capital goods draw their value. And reswitching wounds Böhm-Bawerk's “average period of production” just as badly.
- **“If capital can be sold at a discount it isn't a loss, just a price adjustment.”** — The discount is the loss: $120k of saving was turned into objects worth $80k, and the difference is resources really consumed, never to return. With putty capital the difference is zero; because capital is a jigsaw, malinvestment is the substance of the bust rather than a bookkeeping entry.
- **“The Hayekian triangle already describes the capital structure completely.”** — The triangle lines capital goods up by stage and itself erases some heterogeneity (loops, durable goods, multiple specificity). Lachmann's theory both supplements and criticizes the triangle; some Austrians think his “kaleidic” expectations go too far. Treating any single diagram as a complete description mistakes the tool for the world.

## @quiz
1. After the bakery's plan fails, the van sells at a 15% discount while the custom molds go for scrap. In Lachmann's framework, what explains the difference?
   - [ ] The van is of better physical quality
   - [ ] The molds depreciate faster
   - [x] The van's set of uses is large (general); the molds' set has essentially one member (highly specific), so once the original plan is gone the molds find no new plan
   - [ ] There is a used-van market but no used-mold market — a market failure
   > **Multiple specificity**: every capital good has a limited set of uses. The larger the set, the more value survives regrouping; the smaller, the likelier it strands. The molds' value came from a plan that no longer exists.

2. Lachmann says complementarity is the relation that holds while a plan runs, and substitutability surfaces when plans change. What does that mean?
   - [ ] Capital goods are either complements or substitutes, never both
   - [x] Inside a running plan, capital goods make each other valuable; only when the plan fails and regrouping is needed does the question “what can this replace in some other plan?” arise
   - [ ] Complementarity exists only in manufacturing, substitutability only in services
   - [ ] Complementarity is defined by government, substitutability by the market
   > The oven, storefront and chefs are complements inside the bakery plan; only after the bakery closes does the question “which other plan can the oven enter?” arise — and substitutability enters the stage. They are two relations of the same good at different moments.

3. Clark and Knight likened capital to a river: droplets change, the river persists. What is the core Austrian reply?
   - [ ] The river metaphor is entirely wrong; capital is never replaced
   - [ ] Capital really is a permanent fund, but the rate is not determined by it
   - [ ] The metaphor is right but applies only to agriculture
   - [x] The metaphor holds only in an evenly rotating economy where everything goes to plan; once plans fail, the “fund” does not maintain itself and part of the value is gone for good
   > Hayek's argument in “The Mythology of Capital” (1936): **only on the assumption that nothing ever goes wrong is capital a permanent fund.** The crux of the real world is that plans go wrong, and regrouping afterwards carries real losses.

4. Why does “putty or jigsaw” decide whether a theory of the business cycle can exist at all?
   - [x] With putty, malinvestment can be reshaped costlessly and a cycle is logically impossible; with a jigsaw, malinvested goods are discounted or stranded, the loss is real, and the bust has substance
   - [ ] Because jigsaws are more expensive
   - [ ] Because putty capital needs no saving
   - [ ] There is no difference; cycles are set by the quantity of money
   > **Without heterogeneous capital there is no concept of malinvestment.** A model that assumes costless reallocation and concludes that cycles are mere demand wobbles has defined the answer away.

5. What did Samuelson concede in 1966 in the Cambridge capital controversy?
   - [ ] That the Austrian business-cycle theory is correct
   - [ ] That the rate is set by the central bank
   - [x] That reswitching is real and the aggregate production function has no general foundation — K cannot be measured independently of the rate
   - [ ] That capital is perfectly homogeneous
   > “A Summing Up” conceded reswitching. Austrians partly agree with the conclusion (capital is not a quantity) but for different reasons: capital goods draw value from subjective, heterogeneous entrepreneurial plans, and the rate comes from time preference.

## @further
- [Lachmann, Capital and Its Structure (1956) — full text (Mises Institute)](https://mises.org/library/book/capital-and-its-structure)
- [Hayek, “The Mythology of Capital” (1936) — the reply to Knight's “permanent fund”](https://mises.org/library/book/mythology-capital)
- [Kirzner, An Essay on Capital (1966) — Austrian capital theory restated in terms of plans and purposes](https://mises.org/library/book/essay-capital)
- [Peter Lewin, Capital in Disequilibrium (1999) — the contemporary systematic restatement of Lachmann's theory](https://mises.org/library/book/capital-disequilibrium-role-capital-changing-world)
- [Samuelson, “A Summing Up,” Quarterly Journal of Economics (1966) — the concession in the Cambridge controversy (JSTOR)](https://www.jstor.org/stable/1882916)
