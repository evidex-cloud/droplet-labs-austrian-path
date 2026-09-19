export default {
  id: "read-menger",
  stage: 12,
  order: 1,
  title: "Menger's Principles of Economics: Where It All Began",
  difficulty: "mastery",
  prereqs: ["diamonds-water", "origin-of-money"],

  oneLiner:
    "In 1871 a 31-year-old Viennese financial journalist named Carl Menger published a book of under 300 pages — the *Grundsätze der Volkswirtschaftslehre*, known in English as *Principles of Economics*. It contains not a single equation, yet it re-founded value, price, commodities and money on **the wants of acting people**, and a school was born. This lesson does not re-teach its contents (Stage 1.1 and Stage 4.1 already covered its two most famous ideas). It teaches you **how to read it**: what each of the eight chapters claims, which to read first, where to skip, where readers go wrong, what the book lacks, and how it threads into the rest of this course. When you finish, you should be able to sit down with a notebook and redraw Menger's “orders of goods” diagram from memory.",

  intuition: `
Start with a fact that surprises most beginners: **Menger's *Principles* is far easier to read than its reputation.** It was written as a textbook for students. The sentences are long but the logic is crystalline, and there is not one formula or curve in the whole book. What you need is not mathematics but patience — Menger likes to start from the most general definition of a concept and add conditions layer by layer until the whole building is visible.

Second fact: **the book has exactly one storyline** — from “people have wants” all the way to “what money is.” Menger's question is: what makes a thing a “good”? His answer: **a person recognizes a causal connection between the thing and the satisfaction of one of their wants.** Note the word *recognizes*. Goods-character does not live in the thing; it lives in a person's knowledge of the thing. That sentence is the seed; the eight chapters are its branches.

- From “wants” he derives **goods** (Chapter I): things that satisfy wants directly are goods of the first order (bread); things used to make bread are goods of the second order (flour, ovens); above them are third-, fourth-order goods …
- From “wants exceed available quantity” he derives **economic goods** (Chapter II): only scarce things need to be economized, and only they have value.
- From “how much does the satisfaction of a want depend on this particular unit” he derives **value** (Chapter III): value is subjective and set by the use the marginal unit serves; the value of higher-order goods is **imputed** back from the lower-order goods they help produce.
- From “two people rank the same goods differently” he derives **exchange** (Chapter IV) and **price** (Chapter V): a price is not a measure of value but a result of exchange, and it falls within a range.
- From “some things are easier to sell than others” he derives **the saleableness of commodities** (Chapter VII) and **money** (Chapter VIII): nobody invented money; the most saleable commodity won out through countless exchanges.

Notice: **one line, no forks.** That is why Menger is easier than Mises — *Human Action* (Stage 12.2) is a city; the *Principles* is a river.

Third fact, and this is the bad news: **no Austrian book is more often misread.** Because the textbooks bundle the three “marginal revolutionaries” (Jevons, Menger, Walras) together, most readers put on Jevons's glasses without noticing and assume Menger is also talking about “maximizing a utility function.” But Menger never used the term “marginal utility” (*Grenznutzen* was coined by his student Wieser in 1884), and he explicitly declined Walras's invitation into mathematical economics. **Menger's question was never “where is the equilibrium?” but “how do prices actually form among real people, and why?”** Read him wrong and he seems “not rigorous”; read him right and he is closer to reality than the later mathematical versions.

Fourth fact: **the book has real gaps.** There is no theory of time preference, no theory of interest, no business-cycle theory, and capital theory is only embryonic; price theory stops at a range rather than a point. That is not carelessness — Menger simply had not gotten there. The next sixty years of Böhm-Bawerk, Wieser, Mises and Hayek consisted largely of filling those gaps. So read like an archaeologist: **you are looking for seeds, not fruit.**

**In this lesson we break it into five pieces:**

- **① Which book you are holding: editions, translations, and that famous introduction**
- **② The eight-chapter map: each chapter's core claim and why it matters**
- **③ Menger's method: causal realism, essentialism, and why he was not a mathematical marginalist**
- **④ What is not in the book: the gaps, the 1883 Methodenstreit, and the second edition that never was**
- **⑤ Reading with a notebook: rebuilding the orders-of-goods diagram, a four-week plan, and five common misreadings**
`,

  mechanics: `
### ① Which book you are holding: editions, translations, and that famous introduction

Get the bibliography straight first, because the edition history of the *Principles* is itself a piece of intellectual history.

- **1871, German first edition**, *Grundsätze der Volkswirtschaftslehre*, published in Vienna and dedicated to Wilhelm Roscher, the grand old man of the German Historical School — Menger sincerely saw himself as an heir of the German tradition, which would become bitterly ironic twelve years later.
- **1934, the London School of Economics reprint** (volume 1 of Menger's *Collected Works*, overseen by Lionel Robbins), for which **Hayek wrote the famous introduction** that now prefaces nearly every English edition. It covers Menger's life, the methods dispute, and the puzzle of his thirty-year public silence.
- **1950, the English translation** by James Dingwall and Bert F. Hoselitz (Free Press), introduced by the Chicago economist Frank Knight — who had serious reservations about imputation theory, so the introduction is itself a cross-school argument.
- **1976 / 1981, the New York University Press edition** kept the Dingwall–Hoselitz text but replaced Knight's introduction with Hayek's 1934 essay.
- **2007, the Mises Institute edition** (free PDF at mises.org) reprints that Hayek-introduced version. **This is the edition this course recommends.** It runs to roughly 330 pages: eight chapters plus appendices on the history of the concepts “good,” “economy,” “value,” “measure of value,” and “use value and exchange value” — skip the appendices on a first pass.
- Translations into other languages vary widely in quality. Whatever you read, check the key terms against the English — *Absatzfähigkeit* (saleableness or marketability), the word on which the entire theory of money hangs, is often rendered vaguely.

Short, single-threaded, tightly built: that is why it is the standard “first Austrian book.” Mises said that reading it is what made him an economist.

### ② The eight-chapter map: each chapter's core claim and why it matters

Here is the skeleton. For each chapter you get three things: the **core claim**, a one-line **why it matters**, and **who in this course picks it up**.

**Chapter I — The General Theory of the Good.** Core claim: a thing becomes a good only when four conditions hold — a human want exists; the thing has properties that can satisfy it; the person **knows** this causal connection; and the person can command the thing. From this come the **orders of goods** (first, second, third …) and a sentence of enormous consequence: the goods-character of higher-order goods **derives from** that of lower-order goods — if people stopped wanting tobacco, the plantations, curing equipment and specialized skills of tobacco workers would lose their goods-character in the same instant. The chapter also treats **time and error**: production takes time, and people's knowledge of causal connections can be wrong. Why it matters: this is the embryo of the whole Austrian theory of capital and of the concept of malinvestment — the “stages of production” of Stage 3.2 and Stage 5.2 are Menger's orders of goods.

**Chapter II — Economy and Economic Goods.** Core claim: compare the quantity of a good required with the quantity available; where requirements exceed availability the good is **economic** (it must be economized, it needs property, it forces choice); otherwise it is non-economic (air). Wealth is the sum of economic goods a person commands. Menger notes that a good can move from non-economic to economic (water in a city) and back. Why it matters: this is the Austrian statement of scarcity and the starting point for Stage 9.1 on why property rights exist — **no scarcity, no conflict; no conflict, no need for property.** Stage 16.1 applies exactly this logic to attention: when information stops being scarce, attention becomes the scarce thing.

**Chapter III — The Theory of Value.** The heart of the book. Core claim: value is “the importance that individual goods acquire for us because we are conscious of being dependent on command of them for the satisfaction of our needs.” Value is **entirely subjective**, not a property of things; its **magnitude** is set by the importance of the particular satisfaction that depends on the particular unit — the famous table of Stage 1.1 (ten columns of wants, each running from 10 down to 0). Then comes **imputation**: the value of higher-order goods derives from the lower-order goods to which they contribute, and the value of any one factor equals the loss of output that would follow if it were **withdrawn**. Why it matters: this chapter overthrows the labor theory of value directly and plants the reversal “cost is determined by price, not price by cost.” Note that Menger's “loss” method of imputation differs from Wieser's later “productive contribution” method — the first technical dispute inside the school.

**Chapter IV — The Theory of Exchange.** Core claim: exchange happens because two people rank the same pair of goods **in opposite order** — I value the horse above the cow, you the cow above the horse; exchange continues up to the point where that difference vanishes. Exchange is not zero-sum; both parties end up better satisfied. Why it matters: this is the original source of “both sides gain” in Stage 1.5, and the earliest refutation of the claim that merchants create nothing.

**Chapter V — The Theory of Price.** Core claim: a price is the **result** of exchange, not a measure of value, and it always lies in a **range**. Menger works through three cases: isolated exchange (one buyer, one seller; price anywhere between their valuations), monopoly trade (one seller, several buyers), and bilateral competition (many on both sides). Using a horse-market example with numbers, he shows that the more competitors, the narrower the range — but **it never collapses to a single point**. Why it matters: Böhm-Bawerk's marginal pairs in Stage 1.3 are a refinement of this chapter, and “price is a range, not a point” is exactly where Austrians and the Walrasian equilibrium tradition fork (Stage 2.4).

**Chapter VI — Use Value and Exchange Value.** Core claim: these are not two kinds of value but the same subjective value showing up in two situations; the economic value of a good to me is the **higher** of its use value and its exchange value. Why it matters: Adam Smith's use-value/exchange-value split is dissolved here — the final piece of the diamond–water puzzle falls into place.

**Chapter VII — The Theory of the Commodity.** Core claim: a “commodity” (*Ware*) is an economic good **held for sale**; the most important difference among commodities is their **saleableness** (*Absatzfähigkeit*) — two things worth 100 each may differ enormously in how quickly, and at how small a discount, they can be sold. Saleableness depends on the number and distribution of buyers, the organization of the market, divisibility, durability, transport costs and so on. Why it matters: this is the most underrated chapter in the book, because **Chapter VIII rests entirely on it.** When you reach Stage 15.1 you will notice that saleableness is itself a network effect.

**Chapter VIII — The Theory of Money.** Core claim: money is **not** a creation of law or contract; it **evolves** out of the most saleable commodity. People notice that some goods sell easily, so they accept them first and trade for what they really want afterwards; that raises those goods' saleableness further, and the positive feedback ends with one or a few commodities serving as a general medium of exchange. Metals won because they are divisible, durable, high in value per unit and easy to recognize. The chapter also discusses the limits of money as a “measure of price,” coinage and the state's role. Why it matters: the “Menger's evolution” of Stage 4.1 is this chapter; Mises's 1912 regression theorem closes the logical loop the evolutionary story leaves open; and the Stage 17.1 debate over whether Bitcoin is Mengerian money is precisely a debate about whether this chapter's conditions are satisfied.

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Menger's orders of goods and imputation: value starts at wants and flows back up the chain</text><rect x="30" y="50" width="130" height="60" rx="8" fill="var(--orange)" /><text x="95" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">Human want</text><text x="95" y="92" text-anchor="middle" font-size="10.5" fill="#fff">“I am hungry” (Ch. I–II)</text><rect x="190" y="50" width="130" height="60" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)" /><text x="255" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">First-order good</text><text x="255" y="92" text-anchor="middle" font-size="10.5" fill="var(--muted)">bread · satisfies directly</text><rect x="350" y="50" width="130" height="60" rx="8" fill="var(--surface-2)" stroke="var(--line)" /><text x="415" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Second-order</text><text x="415" y="92" text-anchor="middle" font-size="10.5" fill="var(--muted)">flour · oven · baker</text><rect x="510" y="50" width="110" height="60" rx="8" fill="var(--surface-2)" stroke="var(--line)" /><text x="565" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Third and up</text><text x="565" y="92" text-anchor="middle" font-size="10.5" fill="var(--muted)">wheat · mill · iron ore</text><path d="M 160 80 L 188 80" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#mge-a)" /><path d="M 320 80 L 348 80" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#mge-a)" /><path d="M 480 80 L 508 80" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#mge-a)" /><defs><marker id="mge-a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--ink)" /></marker><marker id="mge-b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--blue)" /></marker></defs><text x="320" y="135" text-anchor="middle" font-size="11" fill="var(--muted)">↑ Direction of production: higher-order to lower-order goods (time passes, error is possible — Ch. I “time and error”)</text><path d="M 600 170 C 500 210, 200 210, 100 170" stroke="var(--blue)" stroke-width="2.5" fill="none" stroke-dasharray="6 4" marker-end="url(#mge-b)" /><text x="350" y="228" text-anchor="middle" font-size="12" font-weight="700" fill="var(--blue)">Imputation (Ch. III): value flows back up the chain</text><text x="350" y="246" text-anchor="middle" font-size="11" fill="var(--muted)">the baker's wage, the price of flour, the price of wheat are all derived from “how much bread matters to the hungry”</text><rect x="60" y="268" width="520" height="38" rx="6" fill="var(--red-soft)" stroke="var(--red)" stroke-dasharray="4 3" /><text x="320" y="285" text-anchor="middle" font-size="11" font-weight="600" fill="var(--red)">If the want disappears (nobody eats bread): flour, ovens and the baker's specialized skill lose goods-character at once</text><text x="320" y="300" text-anchor="middle" font-size="10.5" fill="var(--red)">— the embryo of “malinvestment” (Stage 5.2)</text></svg><figcaption>While reading Chapters I and III, draw this yourself in a notebook: the horizontal arrows are the direction of production, the dashed line running back is the direction of imputation. The causal architecture of the whole book is in this one picture.</figcaption></figure>

### ③ Menger's method: causal realism, essentialism, and why he was not a mathematical marginalist

The biggest trap in reading Menger is to treat him as “Jevons without the calculus.” To avoid it you have to understand what he was trying to do **methodologically**.

**Menger was after essences and causes.** In the 1871 preface he says his aim is to reduce economic phenomena “to their simplest elements” and to discover the “**exact laws**” connecting them — not statistical correlations, but relations like the orders of goods, which cannot fail to hold once the concepts are understood. Historians of philosophy call this stance **essentialism** (with an Aristotelian flavor) or **causal realism**: economics studies real causal chains among real people and real things in the real world, not the internal properties of a mathematical model.

Three features follow:

- **Ordinal, not cardinal.** Menger's “importance” can be ranked, not added or subtracted. His 10-to-0 table uses numbers, but he says explicitly that they are illustrative and express order, not quantity. So he never speaks of “maximizing utility,” only of an acting person assigning each unit to the most important unsatisfied want.
- **Process, not equilibrium.** In the price chapter he always gives ranges, and he insists that in real markets “error, ignorance and external compulsion” push prices away from the “economic price” — the very frictions Walras assumes away are Menger's **object of study**.
- **Evolution, not design.** Money in Chapter VIII grows; in the 1883 *Investigations* he adds language, law, the state and markets to the list of institutions that are “**the unintended result of human action, not of human design**” — a phrase Hayek quoted for the rest of his life (Stage 7.4).

**He refused mathematics for a reason, not for lack of ability.** In 1884 Walras wrote inviting Menger to join the mathematical camp. Menger replied that mathematical methods can describe relations among quantities but cannot reveal “essence” and “origin”; economics must answer **why** a price is what it is, not merely **what** it is. You may disagree with that judgment — many do — but note: **it was a methodological choice, not a deficiency.** Stage 2.4 carries the argument to the present day.

The other background you need is **how Wieser and Böhm-Bawerk “translated” Menger.** Wieser coined *Grenznutzen* and reworked imputation into something closer to a “productive contribution” calculus; Böhm-Bawerk sharpened Menger's price ranges into marginal pairs and, in *Capital and Interest* (1884–89), added the time dimension Menger lacked. Mises later said he stood closer to Menger and Böhm-Bawerk than to Wieser, whose concept of “natural value” drifted toward objectivism. **So the founding trio did not speak with one voice.** When you read Menger, keep separate what he said from what his students said on his behalf.

### ④ What is not in the book: the gaps, the 1883 Methodenstreit, and the second edition that never was

Listing honestly what the *Principles* **lacks** makes what it contains much clearer.

- **No time preference and no theory of interest.** Menger notes that production takes time and that the value of higher-order goods must account for the “time interval,” but he never distills “satisfaction now versus later” into an independent law. That was Böhm-Bawerk's contribution of 1884–89 (Stage 3.1) — and Menger reportedly disliked Böhm-Bawerk's interest theory, privately calling it one of the greatest errors ever committed. Disagreement about interest inside the school began with the first generation.
- **No business-cycle theory.** Credit expansion, malinvestment, liquidation — these concepts did not exist in 1871. ABCT arrived only when Mises in 1912 combined Menger's orders of goods, Böhm-Bawerk's time and Wicksell's natural rate (Stage 5.1).
- **Capital theory only in embryo.** Menger has orders of goods but no macro picture of a “structure of production”; the Hayekian triangle (Stage 3.2) waits until 1931. Menger even rejected defining capital as “produced means of production,” insisting instead that capital is a **sum of money** — a thread Rothbard and Lachmann each later picked up in their own way.
- **Price theory stops at a range.** There is no “market-clearing price”; that is both a virtue (more realistic) and a gap — Austrians later worked hard to explain why the market process tends in a definite direction (Kirzner, Stage 6.1).
- **No systematic theory of the entrepreneur.** “Entrepreneurial activity” appears, but only as a coordinating function in production — nothing yet of Mises's judgment or Kirzner's alertness.

Then comes **1883**. Menger published *Untersuchungen über die Methode der Socialwissenschaften und der politischen Oekonomie insbesondere* (English 1963; reissued as *Investigations into the Method of the Social Sciences*, the 1985 NYU edition carrying an introduction by Lawrence White). Its target was Gustav Schmoller, leader of the German Historical School, which held that economics has no universal laws and can only induce “stages” of national economies from archives. Menger replied that science has two legitimate orientations: an “**exact**” orientation seeking universal, necessary laws (like the orders of goods), and a “**realistic-empirical**” orientation describing particular history; both are valid, but the second cannot be used to deny the first. Schmoller wrote a contemptuous review; Menger answered in 1884 with a pamphlet, *The Errors of Historicism*, in a very sharp tone. That was the **Methodenstreit**. Two consequences: German universities practically stopped hiring Austrians, and the very name “Austrian School” began as a sneer from Schmoller's side; and Menger spent most of his remaining energy on methodology. Stage 2.3's “theory versus history” is the modern form of this quarrel, and Stage 14.2 on writing will remind you that Menger won the argument in the *Investigations* but the tone cost him Germany.

Finally, **the second edition that never was**. Menger resigned his chair in 1903 and spent the rest of his life revising the *Principles*, reportedly filling rooms with manuscript that grew with every pass. After his death in 1921 his son Karl Menger (later a distinguished mathematician) assembled and published a “second edition” in 1923, nearly twice the length, with new material on the biology and psychology of wants that muddles the main line. Almost every scholar, Hayek included, regards **the 1871 edition as the real *Principles***; the second has never been fully translated into English. The lesson is oddly moving: a man's devotion to essences can keep him from finishing his own book.

### ⑤ Reading with a notebook: rebuilding the orders-of-goods diagram, a four-week plan, and five common misreadings

**Method one: the notebook reconstruction.** This book rewards not underlining but **closing it at the end of each chapter and drawing the causal chain as a diagram**. Concretely:

- After Chapter I, draw the horizontal chain “want → first → second → third order,” and mark the direction in which goods-character is transmitted.
- After Chapter II, add a column beside the chain: “quantity required vs quantity available,” and mark which goods are economic.
- After Chapter III, draw the reverse imputation arrows (the blue dashes above) and work through the “loss” method with numbers: suppose a bakery has 3 bakers and 1 oven and produces bread worth 1,000 a day; remove one baker and output falls to 800, so that baker's imputed value is about 200; remove the oven and output falls to 0, so the oven's imputed value is about 1,000 — and you will instantly notice that the sum of imputed values does not equal total output, which is precisely Wieser's later objection to Menger.
- After Chapter V, recompute the price range in Menger's own horse-market example (eight buyers, eight sellers) and compare it with the marginal pairs of Stage 1.3.
- After Chapters VII and VIII, score five goods (gold, wheat, a house, a used textbook, Bitcoin) for saleableness and see why money emerges from among them.

**Method two: the four-week plan (about 45 minutes a day).** Week 1: Hayek's introduction plus Chapters I and II. Week 2: Chapter III (read slowly — this is the heart) plus Chapter VI. Week 3: Chapters IV and V. Week 4: Chapters VII and VIII, then re-read the imputation section of Chapter III. Leave the appendices for a second pass. The eight-week version splits each week into “a week of reading, a week of writing.” The demo's “generate my reading plan” button lays out both schedules for you.

**Method three: what to read first, what to skip.** If you have one weekend, read Chapters I, III and VIII — they map onto this course's three threads of capital theory, value theory and monetary theory. Skip on a first pass: the concept-history appendices; the definitional discussion of “property” at the end of Chapter II; and the technical paragraphs on coinage and kinds of money in Chapter VIII.

**Five common misreadings:**

1. **“Menger was a mathematical marginalist who just didn't write the formulas.”** No. His value is ordinal and processual, and he explicitly refused the mathematical road; reading him as an “implicit utility function” makes you miss the fork where the Austrian School begins.
2. **“Menger's theory of value is ‘diminishing marginal utility.’”** That is Wieser's label. Menger speaks of “the importance of the satisfaction that depends on this unit,” and the stress is on **dependence** — the causal relation between a unit and a want — not on the psychological description “diminishing.” As Stage 1.1 ④ showed, Mises later grounded the law entirely in the logic of action.
3. **“Chapter VIII says money is gold.”** Menger says money evolves from the most saleable commodity, which in his day happened to be precious metal; he does not say money **must** be gold. The Bitcoin debate of Stage 17.1 turns on exactly that distinction.
4. **“Menger, Jevons and Walras said the same thing.”** They shared one insight — value is set by the marginal unit — and parted on whether utility is measurable, whether price is a point or a range, and whether the market is an equilibrium or a process. This course exists because of the half that parted.
5. **“The *Principles* is superseded; just read Mises.”** Mises returns to Menger again and again in *Human Action*; and the *Principles* contains things Mises does not — its analysis of how goods-character is transmitted and of saleableness is finer than anything later. When you reach Stage 12.2 you will find passages of *Human Action* that make sense only if you have read Menger first.

With Menger read, you hold the **seed** of the school. The next lesson (Stage 12.2) looks at what that seed became in Mises's hands, and the cheat sheet in Stage 14.6 will help you pin down this lesson's titles, dates and names for good.
`,

  demo: "menger-map",

  analogy: `
Think of the *Principles* as an **eight-storey building** that Menger built by hand, each floor resting on the load-bearing walls of the floor below.

The ground floor is **wants** — the foundation; without human wants everything above is air. The second floor is **scarcity**: only rooms where the demand exceeds the supply need locks, allocation and choice. The third floor is **value**: what each room is worth depends on how urgent the want living in it is, and the rooms upstairs (flour, ovens) are held up entirely by the rooms downstairs (bread) — the building's weight is imputed **upward**, the reverse of an ordinary house. The fourth and fifth floors are **exchange** and **price**: two households rank the same room differently, so they swap; the “price” of the swap falls somewhere in a band between their valuations, and the more residents, the narrower the band — but it never narrows to a line. The sixth floor merges “live in it” and “trade it away” into one value. The seventh floor is **saleableness**: some rooms can be let within the hour, others sit empty for months. The eighth floor is **money**: the room type easiest to pass on gradually becomes the hallway everyone walks through.

Later residents built on top: Böhm-Bawerk inserted a **time** mezzanine (interest) between the third and fourth floors; Mises added an attic called **credit expansion and the cycle** above the money floor; Hayek attached a glass corridor called **knowledge**; Rothbard repainted the whole thing. But the load-bearing walls never moved. So the right way to read Menger is to **find the load-bearing walls first** — then, when you walk into the city that is *Human Action*, you will know which parts are structure and which are décor.
`,

  misconceptions: [
    "**“The *Principles* is hard; read a secondary introduction instead.”** — The reverse is true. It is the most readable Austrian classic: no formulas, one storyline, each chapter resting on the last. The hard books are *Human Action* and *Law, Legislation and Liberty*. Secondary introductions are exactly where Menger tends to get “Jevonized,” so the original is the safer place to start.",
    "**“Menger coined ‘marginal utility.’”** — He did not. *Grenznutzen* was Wieser's word, from 1884. Menger's phrase is “the importance of the satisfaction that depends on a particular unit.” This is not pedantry: Menger stresses the **causal dependence** between a unit and a want, not a differentiable quantity of utility.",
    "**“Menger's price theory yields an equilibrium price.”** — It yields a range (Chapter V), and he explicitly says that error and ignorance in real markets push prices away from the “economic price.” Reading Menger as Walras tears out the very page where Austrian and neoclassical economics diverge.",
    "**“The Methodenstreit vindicated the Austrian School.”** — On the merits Menger won; in practice he lost. German universities shut out Austrians, the name “Austrian School” was originally his opponents' sneer, and Menger himself spent the rest of his life trapped in methodology without publishing new economics. Stage 14.2 uses the episode to make a point about the cost of tone.",
    "**“Everything Austrian is already in Menger.”** — No time preference, no interest theory, no business cycle, no theory of the entrepreneur, and only embryonic capital theory. It is seed, not fruit; read the later results back into it and you will miss what Menger actually contributed.",
  ],

  quiz: [
    {
      q: "To whom was the 1871 first edition dedicated, and why did that become ironic?",
      options: [
        "Walras — because Menger later refused mathematical economics",
        "Wilhelm Roscher of the German Historical School — because twelve years later Menger fought the Methodenstreit against that very school",
        "Böhm-Bawerk — because Menger disliked his interest theory",
        "Frank Knight — because Knight criticized imputation in his introduction to the translation",
      ],
      answer: 1,
      explain: "In 1871 Menger sincerely saw himself as an heir of the German tradition and dedicated the book to Roscher; after the 1883 *Investigations* and the quarrel with Schmoller, German academia shut him out.",
    },
    {
      q: "According to Chapter I, what happens if people stop wanting tobacco entirely?",
      options: [
        "Tobacco's price falls, but plantations and equipment remain goods",
        "Plantations, curing equipment and the specialized skills of tobacco workers lose their goods-character in the same instant",
        "Only the first-order good (tobacco) loses value; higher-order goods are unaffected",
        "Government should set a floor price on higher-order goods to protect investment",
      ],
      answer: 1,
      explain: "The goods-character of higher-order goods **derives from** lower-order goods — when the want vanishes, the whole chain loses goods-character together. This is the embryo of malinvestment (Stage 5.2).",
    },
    {
      q: "Which of the following is NOT systematically developed in the *Principles*?",
      options: [
        "Orders of goods and imputation",
        "Price as a range rather than a point",
        "Time preference and a theory of interest",
        "Money evolving from the most saleable commodity",
      ],
      answer: 2,
      explain: "Time preference and interest were Böhm-Bawerk's contribution of 1884–89; Menger noted that production takes time but did not distill it into a separate law — and he disliked Böhm-Bawerk's interest theory.",
    },
    {
      q: "When Walras invited Menger into mathematical economics in 1884, what was Menger's stated reason for declining?",
      options: [
        "He did not know calculus",
        "Mathematical methods describe relations among quantities but cannot reveal the essence and origin of economic phenomena",
        "Austrian universities prohibited mathematics",
        "He believed prices could not be expressed as numbers",
      ],
      answer: 1,
      explain: "A methodological choice, not a deficiency: Menger wanted to answer why prices form as they do, not merely what they are. Stage 2.4 carries the argument forward to today.",
    },
    {
      q: "Why does this course recommend the 1871 text (Dingwall–Hoselitz translation with Hayek's introduction) rather than the 1923 second edition?",
      options: [
        "The second edition is a forgery",
        "The second edition was assembled by Menger's son, nearly doubled in length, muddles the main line, has never been fully translated, and nearly all scholars regard 1871 as the real *Principles*",
        "The second edition dropped the theory of money",
        "The second edition is full of mathematics",
      ],
      answer: 1,
      explain: "Menger revised for thirty years without finishing; the 1923 version added long biological and psychological discussions of wants. The 1871 edition is the book that founded the school.",
    },
  ],

  further: [
    { label: "Carl Menger, Principles of Economics — Dingwall–Hoselitz translation with Hayek's introduction (free PDF, Mises Institute)", url: "https://mises.org/library/book/principles-economics" },
    { label: "Carl Menger, Investigations into the Method of the Social Sciences (1883) — the original text of the Methodenstreit", url: "https://mises.org/library/book/investigations-method-social-sciences" },
    { label: "Carl Menger, “On the Origins of Money” (Economic Journal, 1892) — Chapter VIII in condensed form", url: "https://mises.org/library/book/origins-money" },
    { label: "F. A. Hayek, “Carl Menger” (1934 introduction; also in The Collected Works of F. A. Hayek, vol. 4)", url: "https://mises.org/library/book/principles-economics" },
    { label: "Econlib biography: Carl Menger — a concise life and contribution", url: "https://www.econlib.org/library/Enc/bios/Menger.html" },
  ],
};
