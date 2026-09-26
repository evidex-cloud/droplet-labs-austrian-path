---
id: diamonds-water
prereqs: what-economics-studies
demo: marginal-utility-table
---

# Diamonds & Water: How the Marginal Revolution Cracked a 2,000-Year Paradox

## @hook
Water keeps you alive; a diamond merely sparkles — yet one diamond buys tens of thousands of buckets of water. From Aristotle to Adam Smith, nobody could make that add up. In 1871 Carl Menger in Vienna gave the answer: **nobody ever chooses between “water” and “diamonds” — people only ever choose between “one more bucket of water” and “one more diamond.”** Value attaches to the **marginal unit**, not to the usefulness of a whole category. That one sentence is where the entire Austrian School begins.

## @intuition
Try a small experiment. You are stranded in a desert with 5 buckets of water. How would you use them?

Bucket 1: drink it and live. Bucket 2: cook. Bucket 3: water your dog. Bucket 4: wash your face. Bucket 5: water a cactus you planted on a whim.

Now someone asks: “Sell me one bucket — how much?” How do you work it out? You do not think “water sustains life, therefore it is priceless.” You think: **if I have one bucket less, which use do I give up?** Obviously the least important one — the cactus. So the price you name is what “watering a cactus” is worth to you, not what “staying alive” is worth.

That is the whole secret. When a person values a thing, they look **not at what the whole class of things can do**, but at **what this particular unit can do** — and a purposeful person always assigns each additional unit to the most urgent use not yet satisfied. So each extra unit serves a less important purpose than the one before, and is worth less. That is **diminishing marginal utility**.

Back to diamonds and water. The world has enormous amounts of water; the bucket in your hand ranks far down your list, so “one more bucket” is worth little. The world has very few diamonds; the one you might own serves its most important use, so “one more diamond” is worth a lot. **There is no paradox at all** — the paradox only appears when you mistake “the total usefulness of a class” for “the value of a unit.”

The step looks small; its consequences were seismic. Before it, economists (Smith, Ricardo, Marx included) believed value came from what went into production — chiefly labor. Menger flipped the arrow of causation: **things are not valuable because labor was spent on them; the labor is valuable because consumers value what it makes.** The whole Austrian School — subjective value, price formation, capital theory, monetary theory, the business cycle — is derived downstream from that single reversal. [[subjective-value|Stage 1.2]] unpacks “subjective,” [[price-formation|Stage 1.3]] shows how it becomes a market price, [[time-preference|Stage 3.1]] shows how it explains interest. By [[zero-marginal-cost|Stage 15.3]] you will see it explains why software with zero marginal cost can sell for $200.

**In this lesson we break it into five pieces:**

- **① A 2,000-year knot: from Aristotle to Adam Smith**
- **② 1871: three people, one idea, at the same time**
- **③ Menger's utility table: drawing the “margin”**
- **④ Why “diminishing”: derived from the logic of action, not psychology**
- **⑤ Causation reversed: cost doesn't set price — price sets cost**

## @mechanics
### ① A 2,000-year knot: from Aristotle to Adam Smith

Aristotle already noticed in the *Politics* that a thing has a “value in use” (what it can do) and a “value in exchange” (what it can fetch), and that the two often fail to line up. Two millennia later Adam Smith put it in its classic form in Book I, Chapter IV of *The Wealth of Nations* (1776): **“Nothing is more useful than water: but it will purchase scarce any thing … A diamond, on the contrary, has scarce any value in use; but a very great quantity of other goods may frequently be had in exchange for it.”**

Smith did not solve it. His move was to split the two: value in use went to philosophy, value in exchange stayed in economics — and exchange value was set by **cost of production**, above all labor. Ricardo drove the line to its limit: relative prices of goods are set by the relative quantities of labor needed to produce them. Marx kept walking: if value comes from labor, and capitalists only pay wages and keep the residual, then profit is exploitation.

Notice the foundation under that whole chain of reasoning: **value is “injected” into goods from the production side.** As long as that foundation stands, diamonds and water can never be explained — because you would have to show that the life-sustaining good “embodies less labor” than the ornament, which is plainly false (think of digging a well in a desert). The classical economists resorted to patches: scarcity, monopoly, demand that “influences” but does not “determine” price … the more patches, the uglier the theory.

### ② 1871: three people, one idea, at the same time

Around 1871 three men who had never met gave almost the same answer almost simultaneously: William Stanley Jevons in England (*The Theory of Political Economy*, 1871), Carl Menger in Austria (*Principles of Economics*, 1871), and Léon Walras in France/Switzerland (*Elements of Pure Economics*, 1874). This is the **marginal revolution**.

What they shared: **value is set by the utility of the marginal unit.** But the split was planted on day one, and it drew the map of schools for the next 150 years:

- **Jevons and Walras** treated utility as a measurable, differentiable mathematical quantity and used calculus to find “utility maximization.” That road grew into the neoclassical mainstream: utility functions, indifference curves, general equilibrium.
- **Menger** refused the mathematics. He insisted utility is **ordinal** (it can be ranked but not measured), **subjective** (it lives in a person's mind), and **the result of action** (a person assigning limited units to wants ranked by importance). His question was not “where is the optimum?” but “how does a price **form** among interacting people?”

That is why the “Austrian School” is a school of its own rather than a branch of neoclassicism: **one revolution, two readings.** [[vs-math-models|Stage 2.4]] takes up how that split later became the long argument about math and equilibrium.

### ③ Menger's utility table: drawing the “margin”

In Chapter III of the *Principles*, Menger drew a famous table. Rows are different kinds of wants (food, shelter, clothing …) ranked left to right by importance; columns are successive units of each want, each additional unit falling in importance. Let us reduce it to one good, using the desert example:

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The marginal-utility staircase for one good (water)</text><g><rect x="60" y="60" width="80" height="180" rx="6" fill="var(--orange)"/><text x="100" y="52" text-anchor="middle" font-size="11" fill="var(--muted)">Bucket 1</text><text x="100" y="255" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">Survive</text><text x="100" y="270" text-anchor="middle" font-size="10" fill="var(--muted)">importance 10</text></g><g><rect x="165" y="96" width="80" height="144" rx="6" fill="var(--orange)" opacity=".85"/><text x="205" y="88" text-anchor="middle" font-size="11" fill="var(--muted)">Bucket 2</text><text x="205" y="255" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">Cook</text><text x="205" y="270" text-anchor="middle" font-size="10" fill="var(--muted)">importance 8</text></g><g><rect x="270" y="132" width="80" height="108" rx="6" fill="var(--orange)" opacity=".7"/><text x="310" y="124" text-anchor="middle" font-size="11" fill="var(--muted)">Bucket 3</text><text x="310" y="255" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">The dog</text><text x="310" y="270" text-anchor="middle" font-size="10" fill="var(--muted)">importance 6</text></g><g><rect x="375" y="168" width="80" height="72" rx="6" fill="var(--orange)" opacity=".55"/><text x="415" y="160" text-anchor="middle" font-size="11" fill="var(--muted)">Bucket 4</text><text x="415" y="255" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">Wash</text><text x="415" y="270" text-anchor="middle" font-size="10" fill="var(--muted)">importance 4</text></g><g><rect x="480" y="204" width="80" height="36" rx="6" fill="var(--orange)" opacity=".4" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/><text x="520" y="196" text-anchor="middle" font-size="11" fill="var(--muted)">Bucket 5</text><text x="520" y="255" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">The cactus</text><text x="520" y="270" text-anchor="middle" font-size="10" fill="var(--red)">marginal unit · importance 2</text></g><line x1="40" y1="240" x2="600" y2="240" stroke="var(--line)" stroke-width="1.5"/><text x="320" y="292" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">Lose any bucket and you give up “the cactus” — so every bucket is worth exactly the marginal one</text></svg><figcaption>With 5 buckets, any bucket is worth the least important use (the cactus). Drop to 2 buckets and the marginal use becomes “cooking” — the value of every bucket jumps.</figcaption></figure>

The diagram has one point that is easy to miss: **the 5 buckets are homogeneous and interchangeable.** You would never say “bucket 1 is the survival water and bucket 5 is the cactus water” — they are identical. So if you lose any one of them, you adjust the same way: drop the least important use. **Therefore every bucket is worth what the marginal bucket is worth**, not each its own use. That is why the word “marginal” is the key to the whole theory.

In numbers: with 5 buckets, each is worth “importance 2” (the cactus). Suppose 3 are stolen and you have 2 left — now the marginal use is “cooking,” and each bucket is worth “importance 8.” **Supply falls, marginal utility rises, price rises.** That is the real origin of the textbook “downward-sloping demand curve” — not an assumed line, but the logical result of a person assigning units to ranked uses.

### ④ Why “diminishing”: derived from the logic of action, not psychology

Many people take diminishing marginal utility to be a law of psychology — “the third burger isn't as good as the first.” That is not the Austrian argument, and that version is fragile (some people enjoy the third drink more than the first).

The derivation Mises gives in Chapter VII of *Human Action* does not depend on feelings at all: **an acting person always devotes each available unit to the most important not-yet-satisfied end.** That is a direct implication of what action means (pursuing ends). Hence the (n+1)th unit must go to an end **less important** than those served by the first n units — not because of satiety, but because the more important ends are already taken. **Diminishing marginal utility is a necessity of the logic of action, independent of whether “satisfaction” diminishes.**

That distinction looks like hair-splitting; in fact it decides between two entirely different roads:

- If it is a psychological law, it can be measured, refuted by experiment, and written as a utility function — the Jevons–neoclassical road, and later the road on which behavioral economics “discovers” that people are irrational ([[vs-marx-behavioral|Stage 11.5]]).
- If it is the logic of action, it is **a priori** true and applies to any purposeful actor whatever their psychology — the Menger–Mises road. [[action-axiom|Stage 2.1]] takes that “a priori” apart properly.

One more thing that trips people up: **the “unit” is defined by the actor, not by physics.** A person who drinks a glass at a time has “glass” as the unit; a farmer buying by the ton has “ton.” Same substance, different unit, different utility table. This will matter in [[network-effects|Stage 15.1]] on network effects — the marginal value of “one more user” to a platform depends on what the platform counts as a unit.

### ⑤ Causation reversed: cost doesn't set price — price sets cost

Now return to the classical foundation — “value is injected from the production side.” The marginal revolution turned it upside down.

Menger sorted goods into **orders**: goods that directly satisfy wants are **first-order goods** (bread); the goods used to make them are **second-order goods** (flour, the oven, the baker's labor); the goods used to make those are third-order (wheat, iron ore, the baker's training) … The value of every higher-order good **derives from** the value of the lower-order good it helps produce — all the way down to the consumer's valuation of the final product. This is **imputation**.

So the chain of causation runs:

$$
\begin{aligned}
&\text{consumer's valuation of bread} \;\rightarrow\; \text{price of bread} \\
&\quad \;\rightarrow\; \text{prices of flour, oven, labor} \;\rightarrow\; \text{prices of wheat, iron ore}
\end{aligned}
$$

and not the other way. Labor is valuable because what it makes is wanted; if you spend a thousand hours carving a wooden figure nobody wants, those thousand hours are worth zero — **cost is what you give up to produce something** (the opportunity cost of [[opportunity-cost|Stage 1.4]]), and what you give up is itself worth whatever consumers say it is.

The consequences of the reversal are enormous:

- **Marx's exploitation theory** loses its foundation: profit is not a surplus “deducted” from labor but the return for correctly anticipating consumers' valuations ([[profit-loss|Stage 6.3]]).
- **Cost-plus pricing** (“it costs me 80, I sell at 100”) is seen through: you can sell at 100 only because someone will pay 100; if nobody will, a cost of 80 still sells for 50 — sunk costs play no role in pricing.
- **Zero-marginal-cost digital goods** become perfectly intelligible: copying software costs nothing, but its price is set by the marginal user's valuation, unrelated to the cost of copying ([[zero-marginal-cost|Stage 15.3]]).

The whole lesson in one sentence: **value lives in human minds, starts from consumers' valuations, and is imputed up the chain of production order by order; each unit is worth the importance of its marginal use.** In the next lesson ([[subjective-value|Stage 1.2]]) we take the phrase “lives in human minds” seriously — it is far more radical than it sounds.

## @analogy
Think of each unit of a good you own as an **employee in a queue**, and each of your wants as a **job slot ranked by importance**.

With 1 employee, you put her in the most important slot (survival). Hire a 2nd, she takes the second slot (cooking). Hire a 5th, and only the least important slot is left (the cactus). Now ask: “If we lay off one person, what does the company lose?” You would never fire the person in the survival slot — you fire whoever is on cactus duty, and **everyone else stays put.** So whoever is nominally let go, what the company actually loses is always “the cactus slot's” output. **Every employee is worth exactly the last slot.**

The diamond company has 1 employee, sitting in the most important slot — losing him is a catastrophe. The water company has ten thousand employees, the last one sitting on cactus duty — losing one barely registers. **The employees are not different in ability; the queues are different in length.**

The picture also unlocks later lessons: the “marginal pairs” of [[price-formation|Stage 1.3]] are two companies poaching each other's staff, with the price pinned between the last pair willing to deal; the “demand for money” of [[money-demand|Stage 4.2]] is the question of which slot the last dollar in your ten thousand got assigned to; and the “network effects” of [[network-effects|Stage 15.1]] describe a strange company where every new hire makes **every** slot more important.

## @misconceptions
- **“Water is more useful than diamonds, so water ‘should’ be worth more — the market is mispricing.”** — This confuses the total usefulness of a class with the usefulness of one more unit. The market is right: one more bucket of water does almost nothing for you; one more diamond does a great deal. Blaming the market for a 2,000-year confusion is using the wrong ruler.
- **“Marginal utility diminishes because people get bored.”** — That is the psychological version, fragile and unnecessary. The Austrian derivation: an actor always assigns each unit to the most important unsatisfied end, so the next unit must serve a less important one. That is logic of action, independent of feelings, and it is not refuted by a third drink being more fun.
- **“Marginal utility can be measured, so it can be summed, compared across people, and used for social-welfare arithmetic.”** — Menger's utility is ordinal: you can say “survival ranks above cooking,” not “1.7 times as important.” The Jevons–Walras road assumed cardinal utility; Austrians regard that step as unfounded, and it is exactly where the schools part ways ([[vs-math-models|Stage 2.4]]).
- **“Prices are set by costs; firms do cost-plus pricing.”** — Causation reversed. You can add a markup only because consumers will pay it; when they won't, a high cost just means a price cut or a loss. Price starts from consumer valuation and is imputed up to inputs — cost is itself an imputed price.
- **“Diamonds are expensive because of a cartel (De Beers), so the example proves nothing.”** — A cartel changes the quantity supplied and therefore where the marginal unit sits; it does not change the law that value is set by the marginal unit. Under perfectly free competition, as long as diamonds remain far scarcer than water, the marginal diamond still vastly outvalues the marginal bucket.

## @quiz
1. You have 5 buckets of water, ranked by use: survival, cooking, the dog, washing, the cactus. Someone wants to buy one bucket. Under marginal-utility theory, which use do you reference when naming a price?
   - [ ] Survival — because water sustains life
   - [ ] The average of all five uses
   - [x] The cactus — losing one bucket means giving up the least important use
   - [ ] Cooking — because it is the middle value
   > **The value of the marginal unit**: 5 interchangeable buckets; lose any one and you cut the least important use, so every bucket is worth “the cactus.”

2. Which three thinkers independently proposed marginal-utility theory around 1871?
   - [ ] Adam Smith, David Ricardo, Karl Marx
   - [x] Jevons, Menger, Walras
   - [ ] Mises, Hayek, Rothbard
   - [ ] Keynes, Friedman, Samuelson
   > Jevons (England), Menger (Austria) and Walras (France/Switzerland) all arrived at “value is set by marginal utility”; Menger's refusal of mathematics and insistence on ordinal, subjective value is what made the Austrian School distinct.

3. What is the Austrian basis for the law of diminishing marginal utility?
   - [ ] Psychological experiments showing people habituate to repeated stimuli
   - [x] An actor always uses each unit for the most important unsatisfied end, so the next unit must serve a less important one
   - [ ] Statistics showing prices fall as consumption rises
   - [ ] Production costs fall as output rises
   > It is a logical necessity derived from the **action axiom**, not an empirical regularity — so it holds for any purposeful actor regardless of psychology.

4. Under Menger's theory of imputation, where does the price of flour come from?
   - [ ] From the labor spent growing wheat and milling it
   - [ ] From the mill's cost plus a fair profit
   - [x] From consumers' valuation of bread, imputed upward through the price of bread to flour
   - [ ] From a government reference price
   > A higher-order good (flour) gets its value from the lower-order good (bread) it helps make, and ultimately from consumers — **price determines cost**, not the reverse.

5. A piece of software costs nothing to copy yet sells for $200. How does marginal-utility theory explain that?
   - [ ] It is a market failure; the price should approach zero
   - [x] The price is set by the marginal user's valuation, unrelated to the cost of copying
   - [ ] Development costs are spread across every copy
   - [ ] All software companies are monopolists
   > Value lives in the consumer's mind, not in cost. Zero copy cost only means supply can be unlimited; what the marginal user will pay depends on their valuation — [[zero-marginal-cost|Stage 15.3]] develops this.

## @further
- [Carl Menger, Principles of Economics (1871) — full English text (Mises Institute)](https://mises.org/library/book/principles-economics)
- [Mises, Human Action, Ch. VII “Action Within the World” — the praxeological derivation of marginal utility](https://mises.org/library/book/human-action)
- [Adam Smith, Wealth of Nations, Book I Ch. IV — the classic statement of the paradox (Econlib)](https://www.econlib.org/library/Smith/smWN.html)
- [Econlib Encyclopedia: Marginalism — a short history](https://www.econlib.org/library/Enc/Marginalism.html)
- [Rothbard, Man, Economy, and State, Ch. 1 — the modern Austrian statement of utility and the margin](https://mises.org/library/book/man-economy-and-state-power-and-market)
