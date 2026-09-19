export default {
  id: "vs-keynes",
  stage: 11,
  order: 1,
  title: "vs Keynes: Aggregate Demand, Multipliers & 'Animal Spirits'",
  difficulty: "systems",
  prereqs: ["abct-one-picture", "saving-stages"],

  oneLiner:
    "The General Theory (1936) changed the question of economics from “how do we produce?” to “how do we spend?”: if aggregate demand falls short, saving is a leak, thrift is a vice, and government must fill the gap. The story is coherent, elegant, and politically unbeatable. The Austrian reply is not the lazy “Keynes was wrong.” It is something more specific: **Keynes's aggregates flattened the structure of production, so he could not see where saving goes, what the interest rate is saying, or why a boom turns into a bust on its own.** This lesson states Keynes in the form his best students would accept, then answers point by point — and you will find the two schools stand surprisingly close on uncertainty, and part ways over what an interest rate is.",

  intuition: `
Let us first state Keynes so well that a Keynesian would nod.

Picture a small town where everyone's income is someone else's spending: the baker's income is what you spend on bread; the barber's income is what the baker spends on haircuts. Now suppose the townspeople all turn thrifty at once — each spends 100 less. The baker's income drops by 100, so he spends less; the barber's income drops … Money leaks out of the loop like water, and each circuit is smaller than the last. If everyone spends 80% of what they receive, the original 100 gap swells into a 500 loss of total income (100 ÷ (1 − 0.8)). That is the **multiplier**, and read backwards it is the **paradox of thrift**: everyone tries to save more, everyone's income falls, and total saving ends up no higher.

Keynes's next question: doesn't the leaked money go to the bank and become investment? His answer: not necessarily. Investment depends on entrepreneurs' confidence about the future — something that cannot be computed as a probability, which he called **animal spirits**. When confidence collapses, no one borrows to build a factory at any interest rate. And the interest rate itself, Keynes argued, is not the price that balances saving and investment; it is **the reward for parting with liquidity** — “liquidity preference.” Push panic far enough and people hoard cash at any rate, however low: the **liquidity trap**, where monetary policy loses traction. Add **sticky wages** (workers refuse nominal cuts) and the economy can settle into an “unemployment equilibrium” from which it will not climb out on its own. Conclusion: **government spending must fill the gap in effective demand.**

That argument won over a generation of young economists in 1936, not because they were fools, but because it answered a question that was glaring at the time: factories idle, workers idle — why doesn't the market put them together?

The Austrian reply begins with a counter-question: **where did the “100 not spent” go?** In Keynes's circular flow it is a hole. In the world of Menger, Böhm-Bawerk and Mises it is **demand for future goods**. You skip bread today to buy a house next year or fund retirement later — you have not stopped wanting things; you want *later* things. That demand is transmitted to the structure of production through a falling interest rate: at 3% instead of 5%, stages far from consumption (mines, machine tools, R&D) become profitable, and resources flow from the bakery toward them. **Output has not vanished; it has moved along the time axis** — exactly the re-shaping of stages you met in Stage 3.3. Keynes cannot see that step because his model has one aggregate called “investment” and no notion of *which stage* it lands in.

There is a deeper disagreement underneath: **the interest rate is not a “monetary phenomenon” but the price of time** (Stages 3.1 and 3.5). Changes in the money supply can push the market rate around for a while, but to say the *essence* of interest is “compensation for giving up liquidity” is like saying the price of apples is compensation for giving up apples — it does not explain why the rate is 3% and not 30%. Once you grant that interest is the price of time preference, “the central bank lowers rates to rescue the economy” acquires a cost: it lies, telling society it is more patient than it really is. The whole business-cycle theory of Stage 5.1 grows from that seed.

Curiously, the two camps are not opposed on everything. Replying to critics in the *Quarterly Journal of Economics* in 1937, Keynes boiled the *General Theory* down to one thing: **we are fundamentally ignorant about the future** — “we simply do not know.” Mises, Lachmann and Shackle would all sign that sentence. The difference is where you go from it. Keynes: therefore the market is unreliable and the state must stabilize it. Austrians: therefore nobody can stabilize it from above; only prices and entrepreneurs, testing and erring from below, can cope.

As for why Keynes won — the end of this lesson gives Buchanan and Wagner's answer: **his theory handed politicians a reason to spend and quietly removed the moral constraint of the balanced budget.** Theories are not always judged in classrooms.

**In this lesson we break it into six pieces:**

- **① Keynes at full strength: effective demand, the multiplier, liquidity preference**
- **② The 1931–32 exchange: Hayek, Keynes, and the review that never came**
- **③ Where saving goes: Say's law stated properly, and “demand for future goods”**
- **④ The multiplier illusion: the structure of production behind the aggregates**
- **⑤ Interest is the price of time, not a “monetary phenomenon”**
- **⑥ Meeting and parting: a handshake on uncertainty, a rout in politics**
`,

  mechanics: `
### ① Keynes at full strength: effective demand, the multiplier, liquidity preference

John Maynard Keynes, *The General Theory of Employment, Interest and Money* (1936). To be fair to him you must first separate Keynes from textbook “Keynesianism” — the 45-degree line and IS–LM are Hicks's and Hansen's translation; Keynes never drew an IS–LM diagram.

The *General Theory* stands on five legs:

- **The principle of effective demand.** Output and employment are set by total spending (consumption plus investment), not by productive capacity. The economy can “equilibrate” far below full employment, with no internal force pushing it back.
- **The consumption function and the multiplier.** Consumption moves with income but less than one-for-one (marginal propensity to consume, MPC < 1). So each 1 of autonomous spending changes income by 1 ÷ (1 − MPC). With MPC = 0.8, the multiplier is 5.
- **The instability of investment.** Investment depends on the “marginal efficiency of capital” compared with the interest rate, and the marginal efficiency of capital depends on expectations of a future that cannot be calculated. Chapter 12: investment decisions “can only be taken as a result of animal spirits — of a spontaneous urge to action rather than inaction, and not as the outcome of a weighted average of quantitative benefits multiplied by quantitative probabilities.”
- **Liquidity preference.** The interest rate is not the price balancing saving and investment; it is the reward for parting with liquidity. People hold money for transactions, precaution and speculation; the rate is set by money supply against liquidity preference. When rates are so low that everyone expects them to rise (and bond prices to fall), new money is simply hoarded — the **liquidity trap**.
- **Sticky wages and unemployment equilibrium.** Even if wage cuts could in principle clear the labor market, workers resist nominal cuts; and (Chapter 19) Keynes argued that a general wage fall would depress expectations and demand, so it might not help anyway. Unemployment can therefore persist.

The policy that follows: **when private investment collapses, government borrows and spends to fill the gap**, and the multiplier amplifies it. In the context of the 1930s this was a frontal rebuttal of “liquidationism” (“let it rot”). **Keynes was no fool; he was answering a real question: why are idle resources not automatically used?** Any reply must answer the same question.

### ② The 1931–32 exchange: Hayek, Keynes, and the review that never came

The head-on collision between Austrians and Keynes came *before* the *General Theory*. Keynes published the *Treatise on Money* in 1930. In 1931 Hayek, newly arrived at the London School of Economics, reviewed it at length in *Economica* in two installments (August 1931 and February 1932). His central charge: Keynes had no theory of capital, so he could not say through what mechanism saving and investment are coordinated, nor see that a change in the interest rate changes the *shape* of the production structure. Keynes fired back in November 1931 (“The Pure Theory of Money: A Reply to Dr. Hayek”), and in passing called Hayek's *Prices and Production* (1931) one of the most muddled things he had ever read. Sraffa then attacked the natural-rate concept in *Prices and Production* in the *Economic Journal* (1932). Nobody won that exchange, but it fixed the pattern for the next fifty years: **Keynes aimed at the complexity of capital theory; Austrians aimed at the crudeness of aggregates.**

Then came the famous thing that did *not* happen: **Hayek never reviewed the *General Theory*.** He explained why later (in *Hayek on Hayek* and elsewhere). Shortly after his review of the *Treatise*, Keynes told him he no longer believed what was in that book — Hayek felt his effort had been wasted. He judged the *General Theory* would be another passing position, not worth chasing. And he was absorbed in writing *The Pure Theory of Capital* (1941), wanting to lay the foundations of capital theory properly before returning to the fight. The result: the foundations were laid and nobody read them; the *General Theory* became the new orthodoxy. Hayek admitted in old age that this was among the greatest mistakes of his life. **The lesson for Austrians is real: silence at the moment your opponent is strongest costs decades.** Stage 14.4, on Austrian self-criticism, returns to this.

The most systematic Austrian reply to the *General Theory* had to wait for Henry Hazlitt's *The Failure of the “New Economics”* (1959) — a chapter-by-chapter dissection, 23 years late.

### ③ Where saving goes: Say's law stated properly, and “demand for future goods”

In Chapters 2 and 3 of the *General Theory*, Keynes summarized Say's law as “supply creates its own demand” and declared that the whole of classical economics rested on that error. The first Austrian reply: **that is a misstatement of Say.**

Jean-Baptiste Say (*Treatise on Political Economy*, 1803) argued that **production is the source of demand.** To buy, you must first have something to offer — your purchasing power *is* your output. So “general insufficiency of demand” is self-contradictory at the level of goods: if all products were unsaleable, people would want nothing, which is absurd. What can happen is **structural mismatch**: too much A and too little B, where A fails to sell not for lack of “demand” but because the wrong things were produced. Mises and Rothbard both stressed that Say's law never ruled out gluts in particular markets; it rules out the notion of *all* markets in glut at once.

What about money? Here Keynes had a genuine point: in a monetary economy one can “sell without buying” — hold the cash. Austrians grant this entirely (Stage 4.2 on money demand is about exactly that). But watch where the reasoning forks:

- Keynes: money demand rises → spending leaks → output falls → stuck.
- Austrians: money demand rises → **prices and wages adjust downward** → the same quantity of money supports the same real transactions → adjustment complete. “Stuck” happens only when **prices are not allowed to adjust.**

The question then becomes “why don't prices adjust?” — and for the United States of 1930–33 the answer is concrete: the Hoover administration lobbied firms to hold wages up, the tariff and later the National Industrial Recovery Act pinned prices in place (Stages 5.4 and 13.2). **Stickiness is not a natural property of markets; much of it is manufactured by policy.** Austrians of course concede that contracts, habit and information make wages move slowly — but “slowly” and “stuck forever” are different claims.

Back to saving itself. Keynes defined saving as “income not consumed” — a residual, a leak. The Austrian definition: **saving is demand for future goods.** You buy one loaf less in order to buy a machine (or a house, or a retirement) in two years. That demand has not vanished; it has changed its time coordinate. The price the market uses to transmit a change in the *timing* of demand is the interest rate.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="160" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--blue)">Keynes: the circular flow</text><circle cx="160" cy="150" r="82" fill="none" stroke="var(--blue)" stroke-width="3"/><path d="M160 68 A82 82 0 0 1 242 150" fill="none" stroke="var(--blue)" stroke-width="3"/><polygon points="242,142 250,154 234,154" fill="var(--blue)"/><text x="160" y="146" text-anchor="middle" font-size="11" fill="var(--ink)">spending = income</text><text x="160" y="162" text-anchor="middle" font-size="11" fill="var(--ink)">income = spending</text><path d="M232 200 L 290 250" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="5 4"/><polygon points="290,250 278,246 286,238" fill="var(--red)"/><text x="292" y="270" text-anchor="middle" font-size="11" fill="var(--red)">saving = leak</text><text x="160" y="255" text-anchor="middle" font-size="10.5" fill="var(--muted)">each loop smaller: the multiplier</text><text x="480" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--orange-ink)">Austrians: the structure of production</text><polygon points="360,240 600,240 600,110" fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="2"/><polygon points="360,240 620,240 620,138" fill="none" stroke="var(--orange-ink)" stroke-width="2" stroke-dasharray="5 4"/><text x="370" y="232" font-size="10.5" fill="var(--muted)">early stages</text><text x="548" y="232" font-size="10.5" fill="var(--muted)">consumption</text><text x="480" y="262" text-anchor="middle" font-size="11" fill="var(--ink)">production time →</text><line x1="612" y1="110" x2="612" y2="138" stroke="var(--green)" stroke-width="2"/><text x="600" y="100" text-anchor="end" font-size="10.5" fill="var(--green)">consume less today ↓</text><line x1="600" y1="246" x2="620" y2="246" stroke="var(--green)" stroke-width="2"/><text x="640" y="250" text-anchor="end" font-size="10.5" fill="var(--green)">longer →</text><text x="480" y="290" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">saving = demand for future goods: the triangle stretches, the rate falls 5% → 3%</text></svg><figcaption>The same “100 not spent”: on the left, a hole in a loop; on the right, a force that stretches the triangle. Keynes's model has no horizontal axis (time), so all it can see is the hole.</figcaption></figure>

### ④ The multiplier illusion: the structure of production behind the aggregates

The multiplier is the easiest thing in the *General Theory* to teach and the easiest to misread. Mathematically it is unassailable: if consumption is always a fixed fraction c of income, a change ΔA in autonomous spending changes income by ΔA ÷ (1 − c). Austrians do not dispute the arithmetic. They dispute **treating an identity as a causal mechanism**, and **treating different kinds of spending as the same thing.**

Put numbers on it. Town income 1,000; MPC = 0.8. The townspeople decide to save 50 more.

- **Keynes's ledger:** autonomous consumption −50 → income −250 (50 × 5). Investment unchanged, because investment is driven by animal spirits and is unrelated to saving. The town is poorer.
- **The Austrian ledger:** the extra 50 of saving enters the loan market and the interest rate falls from 5% to, say, 3.5%. Projects that did not pay before — a machine that takes five years to earn back its cost — now pay. Investment +50. **Total spending is unchanged, but its composition has changed:** the bakery loses 50 of orders and the machine-tool shop gains 50. In the short run the baker must retrain and the machine shop must hire; that friction is a real cost. But five years later the town's capacity is higher, because it owns one more machine.

The heart of the disagreement is the assumption that “investment is unrelated to saving.” Keynes could pin investment on animal spirits only because his theory of interest (liquidity preference) had cut the price link between saving and investment — see the next section. Reconnect that link and the multiplier is demoted from “the engine of the economy” to “a description of a special episode”: it describes the chain reaction of falling spending **when prices — above all interest rates and wages — are jammed**, not the normal working of a market economy.

There is a deeper layer. The multiplier counts “government spends 1” and “an entrepreneur invests 1” as the same 1. But seen through the structure of production, the former is spending **that never passes the test of profit and loss** — it does not know which stage or which capital good to go into (the economic calculation problem of Stage 7.1). How much “income” a unit of spending generates is one question; whether it produced anything people wanted is another. Building a road nobody drives on raises the income statistics without raising wealth — Bastiat's broken window from Stage 1.4, wearing a multiplier costume.

Roger Garrison's *Time and Money* (2001) draws this in three diagrams (Stage 10.1): on the production-possibilities frontier, an increase in saving is a **move along the frontier from consumption toward investment**, not a **fall inside it**. Keynes's model has one dimension (total spending), so “moving along” and “falling in” look identical to it.

### ⑤ Interest is the price of time, not a “monetary phenomenon”

This is the hinge of the whole debate.

Keynes: interest is “the reward for parting with liquidity,” set by the quantity of money against liquidity preference. Saving decides *how much* you accumulate; liquidity preference decides *in what form* (cash or bonds) — and only the latter touches the interest rate.

Austrians (Böhm-Bawerk, *Capital and Interest*, 1884–89; Mises, *Human Action*, 1949, Chapter XIX): interest is **the exchange ratio between present goods and future goods**, rooted in time preference — the fact that, other things equal, people prefer satisfaction now. A rate of 5% says: this society will trade 100 units of today for 105 units of next year. It is an **intertemporal price** — a price like the price of apples, except that the good it prices is time.

Both sides agree money affects the market rate. The difference: **Austrians treat that effect as a temporary disturbance; Keynes treats it as the essence of interest.** That sounds philosophical, but it decides the policy consequences:

- If interest is only a monetary phenomenon, pushing it to zero has no “real” cost; it merely makes parting with liquidity cheaper.
- If interest is the price of time, pushing it from 5% to 2% broadcasts a false message to every entrepreneur: “society is saving more; ten-year projects are now affordable.” Entrepreneurs act on it, building capacity backed by no real saving; when the message is exposed, those projects fail together. That is the ABCT of Stage 5.1, and the “liquidation is the cure” of Stage 5.3.

Keynes did not overlook time preference. He devoted Chapter 14 and its appendix to attacking the “classical theory of interest,” arguing that saving and investment are equalized by adjustments in **income**, not in **the interest rate**. The Austrian answer: as long as the rate is free to move, it moves first; adjustment through income is the second-best route once the rate is jammed. And one reason rates were “jammed” in the 1930s is that the credit expansion of the 1920s had produced a mass of bad debt whose liquidation policy then obstructed — a case Stage 13.2 reconstructs in full.

On the liquidity trap, Austrians offer a simpler reading: people hoard cash in a panic because **they are unsure whether current prices yet reflect reality.** The more prices are propped and liquidation delayed, the longer that uncertainty lasts and the more rational hoarding becomes. **The liquidity trap is not a disease of the market; it is a symptom of obstructed liquidation.**

### ⑥ Meeting and parting: a handshake on uncertainty, a rout in politics

The handshake first. In February 1937 Keynes published “The General Theory of Employment” in the *Quarterly Journal of Economics*, answering his critics. That article states his real starting point more clearly than the book: **about the future, “we simply do not know”** — not ignorance in the probabilistic sense, but the absence of any calculable basis. His examples: the prospect of a European war, the price of copper twenty years hence, whether a new invention will become obsolete. This is nearly identical to Knight's 1921 “uncertainty” and Mises's “case probability.”

A real bridge grew from here: **the overlap between Post-Keynesians and Austrians.** Ludwig Lachmann (*Capital and Its Structure*, 1956; *The Market as an Economic Process*, 1986) openly acknowledged Shackle's influence; George Shackle's “imagined futures” (*Epistemics and Economics*, 1972) and Kirzner's entrepreneurial alertness can almost be translated into each other. Both camps reject rational expectations; both hold that expectations are heterogeneous and self-undermining (you will use this again in Stage 16.5, on reflexivity). If you are looking for the largest common ground between Austrians and anyone else, it is here.

The parting is over **where uncertainty leads.** Keynes: since investors panic collectively, a steady hand — the state — is needed to smooth the waves. Austrians: **the state is in the same uncertain sea.** It foresees the future no better than entrepreneurs, and it bears no losses (the public choice of Stage 8.4). The title of Hayek's 1974 Nobel lecture was “The Pretence of Knowledge”: believing you can stabilize a complex system from above is itself the largest source of instability.

Finally, politics. Keynes did not win the 1940s–70s because the Austrian arguments were refuted — Hayek wrote no review, Hazlitt's book went unread, and Samuelson's 1948 textbook put the 45-degree line in every classroom. James Buchanan and Richard Wagner, in *Democracy in Deficit: The Political Legacy of Lord Keynes* (1977), supplied the public-choice explanation: **Keynesianism gave politicians an economics that justified spending, while dismantling the Victorian moral rail of the balanced budget.** Surpluses in good years, deficits in bad — but in democratic competition surpluses are never popular, so only the deficits survive. Whether Keynes himself would have welcomed that result is beside the point; what matters is that **his theory happened to fit politicians' incentives.**

That thread runs to the present. Stage 11.4's MMT is Keynesian logic with the last rail removed; Stage 13.2 sets the two explanations of 1929–33 side by side against the data; and in Stage 18.5 you will apply the same “is the interest rate lying?” test to the AI capital-spending frenzy.

One sentence to close: **Keynes saw uncertainty, but read the interest rate as a monetary phenomenon and saving as a leak — so in his world the only cure for a slump is more spending. Austrians saw the same uncertainty but kept the time axis — saving is demand for the future, interest is the price of time — so in their world a boom can be genuine or a lie, and the difference lies in whether the rate has been artificially lowered.**
`,

  demo: "thrift-paradox",

  analogy: `
Think of the economy as a restaurant, and of “saving” as **a customer ordering one dish fewer tonight.**

**The Keynesian owner** watches only tonight's takings: one dish fewer = 30 less revenue = a smaller wage for the cook = the cook buys less on the way home = the whole town's income shrinks. His remedy: invite the government in to order the missing dish and restore the takings.

**The Austrian owner** first asks the customer: “Why the smaller order?” The customer says: “I'm saving for a wedding banquet next year.” The owner understands at once: **the demand has not disappeared; it has been booked for next year.** The right response is not to panic about tonight's till but to pass the information to the kitchen — stock a little less for tonight, start training a team that can run a banquet, order a set of big round tables. Tonight there will be some friction (surplus ingredients to deal with, cooks learning new dishes), but next year's turnover will be larger than before.

The trouble with the dish the government orders on the customer's behalf is that **nobody knows whether the customer will want it next year.** It fills tonight's till but makes the kitchen miss the “prepare for a banquet” signal — and when the banquet order really arrives, the restaurant still only knows how to stir-fry.

The interest rate is the restaurant's **reservation book**: it records how much of society's demand has been booked for the future. Keynes says the book is only a book, edit it freely. Austrians say: **tamper with the reservation book and the kitchen prepares the wrong food** — and that is how the next slump begins.
`,

  misconceptions: [
    "**“Austrians deny that a shortfall in demand can cause a recession.”** — No. Austrians accept that a sudden rise in money demand (people hoarding cash) can cause a real fall in output; Stage 4.2 says so plainly. The disagreement is over mechanism and remedy: Austrians hold that falling prices and interest rates can absorb the shock, that “getting stuck” usually means prices were pinned by policy — and that the original cause is typically prior credit expansion, not thrift.",
    "**“Keynes said saving is bad.”** — An oversimplification. Keynes said that under specific conditions (investment insensitive to the interest rate, the rate stuck at a floor) an increase in individual saving lowers total income. His analysis is conditional. The Austrian reply targets those conditions — above all the assumption that no price connects saving to investment — not a straw man.",
    "**“Hayek and Keynes agreed on nothing.”** — On the incalculability of the future they were almost identical (Keynes's 1937 article versus Mises's case probability and the Lachmann–Shackle overlap). Where they parted was whether uncertainty implies “the state must stabilize” or “nobody can stabilize; only prices and trial-and-error can cope.”",
    "**“The multiplier is mathematically proven, so rejecting it is rejecting arithmetic.”** — The arithmetic is fine; it follows from an identity. Austrians object to treating it as a causal engine: it assumes investment is unrelated to saving (the interest rate does nothing) and that all spending is homogeneous (government outlays that never face profit and loss count the same as entrepreneurial investment). Drop those two assumptions and the multiplier shrinks from an engine to a description of a special episode.",
    "**“Keynes won because the Depression proved him right.”** — The Depression can be explained in Keynesian terms and in Austrian terms (credit expansion plus obstructed liquidation); Stage 13.2 compares them side by side. Buchanan and Wagner's point is that Keynes's victory was largely political: his theory gave politicians a reason to spend and removed the balanced-budget constraint. Whether a theory suits politicians and whether it is true are separate questions.",
  ],

  quiz: [
    {
      q: "In Keynes's theory of liquidity preference, what is the interest rate?",
      options: [
        "The exchange ratio between present and future goods",
        "The reward demanded for parting with liquidity (holding cash)",
        "The physical productivity of capital",
        "The profit rate of banks",
      ],
      answer: 1,
      explain: "Keynes defined interest as the reward for parting with liquidity, set by money supply against liquidity preference. Austrians hold that interest is **the price of time**, rooted in time preference, and that money can only disturb it temporarily.",
    },
    {
      q: "Town income is 1,000, MPC is 0.8, and the townspeople decide to save 50 more. On the Austrian analysis, what is most likely to happen?",
      options: [
        "Income falls by 250 and investment is unchanged",
        "The interest rate falls, investment rises by about 50, total spending is unchanged but shifts from consumption toward early stages",
        "Income rises by 250 because saving is investment",
        "Nothing changes because saving is only a bookkeeping entry",
      ],
      answer: 1,
      explain: "Saving is demand for future goods: the extra 50 enters the loan market and lowers the rate, making long projects that did not pay before profitable — **output moves along the time axis** rather than vanishing. Option A is Keynes's ledger.",
    },
    {
      q: "Why did Hayek never review the General Theory?",
      options: [
        "He agreed with it entirely",
        "He was forbidden to publish",
        "Keynes had told him he no longer believed the Treatise on Money; Hayek assumed the General Theory was another passing position and was busy writing The Pure Theory of Capital",
        "He never read it",
      ],
      answer: 2,
      explain: "Hayek later called it a major mistake: he misjudged the book's staying power and poured his effort into The Pure Theory of Capital (1941), which nobody read, leaving Keynesianism to become orthodoxy unopposed.",
    },
    {
      q: "Properly stated, what does Say's law rule out?",
      options: [
        "A glut in any particular good",
        "A rise in the demand for money",
        "A simultaneous glut in all markets (a general glut)",
        "Any form of unemployment",
      ],
      answer: 2,
      explain: "Say argued that production is the source of demand; the law allows structural mismatch (too much A, too little B) and rules out the self-contradictory notion that everything is unsaleable at once. “Supply creates its own demand” is Keynes's oversimplified paraphrase.",
    },
    {
      q: "What do Keynes's 1937 QJE article and the Austrians have in common?",
      options: [
        "Both hold that the government spending multiplier exceeds 1",
        "Both hold that the future is fundamentally incalculable (radical uncertainty)",
        "Both hold that interest is a monetary phenomenon",
        "Both advocate the gold standard",
      ],
      answer: 1,
      explain: "“We simply do not know” — Keynes's 1937 position is nearly identical to Mises's case probability and to Lachmann and Shackle. The split is over whether uncertainty implies stabilization by the state or the impossibility of stabilization from above.",
    },
  ],

  further: [
    { label: "Keynes, The General Theory of Employment, Interest and Money (1936) — full text", url: "https://www.marxists.org/reference/subject/economics/keynes/general-theory/" },
    { label: "Hayek, Contra Keynes and Cambridge — the 1931–32 Economica reviews and Keynes's reply (Mises Institute)", url: "https://mises.org/library/book/contra-keynes-and-cambridge" },
    { label: "Hazlitt, The Failure of the “New Economics” (1959) — a chapter-by-chapter dissection of the General Theory", url: "https://mises.org/library/book/failure-new-economics" },
    { label: "Garrison, Time and Money (2001), Chs. 3–4 — Keynes and the Austrians compared in three diagrams", url: "https://mises.org/library/book/time-and-money-macroeconomics-capital-structure" },
    { label: "Buchanan & Wagner, Democracy in Deficit (1977) — why Keynes won politically (Econlib full text)", url: "https://www.econlib.org/library/Buchanan/buchCv8.html" },
  ],
};
