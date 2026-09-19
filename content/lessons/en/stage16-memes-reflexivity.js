export default {
  id: "memes-reflexivity",
  stage: 16,
  order: 5,
  title: "Memes, Narratives & Reflexivity: GameStop & Crowd Behavior",
  difficulty: "newera",
  prereqs: ["markets-bubbles", "individualism-history"],

  oneLiner:
    "In January 2021 the shares of a fading video-game retailer rose roughly twentyfold in two weeks, pinned several hedge funds to the wall, and then gave most of it back within days — driven not by earnings but by a forum. This lesson maps Soros's **reflexivity** (beliefs move prices, prices move beliefs) onto Austrian subjectivism and Lachmann's theory of expectations (Stages 2.3, 6.1); uses Stage 2.1's action axiom and Stage 11.5 to reject the lazy explanation “the crowd went irrational”; uses Stages 5.4 and 10.3 to point at the credit precondition behind every meme mania (zero rates, margin, stimulus checks); and steelmans Shiller's narrative economics. The conclusion is candid: Austrians explain the **money and interest** layer very well and have almost no theory of the **social contagion** layer — and social media accelerates both price discovery and error. Frameworks and history only; this is not investment advice.",

  intuition: `
First lay the facts out in order (figures approximate; details remain disputed across the various reports).

In 2020 the stock of an American video-game retail chain was widely shorted: physical retail in decline, a pandemic, games going digital. By year-end **short positions exceeded the float** — more shares had been borrowed and sold short than were actually available to buy, about 140% of the float. That is an extreme structure: if the price rises, shorts must buy shares back to close, and there are not enough shares to buy.

In early January 2021 the price was about $17. On a forum known for self-mockery and high-risk bets, one user had spent more than a year repeatedly posting his long position and analysis, gradually gathering followers. In mid-January several catalysts stacked up: a well-known e-commerce founder joined the board; a short-selling firm publicly attacked the stock and drew a collective counterattack from the forum. **Buying itself became an identity**: users urged each other to “hold,” cast the hedge funds as the adversary, and framed buying as revenge for 2008. The stock closed at about $347 on January 27 and touched about $483 intraday on January 28. One prominent hedge fund lost roughly half its capital that month and needed outside money.

On January 28 several zero-commission brokers **restricted buying** (sell only). The official explanation was that clearinghouse margin requirements had jumped overnight to billions of dollars the brokers could not post. The forum read it as “they changed the rules.” Congress held a hearing in February. The price fell to about $90 within days, about $40 by mid-February, then inexplicably rallied again at the end of the month. The SEC's October report concluded that the rise was driven mainly by **genuine buying pressure**, not by the “gamma squeeze” or “short covering” the media emphasized — short covering was only a small part.

The same year, a cryptocurrency with a dog for a logo, created as a joke, rose tens of times in a few months and peaked on the weekend a well-known entrepreneur appeared on a television comedy show; a piece of digital art sold at an auction house for about $69 million, setting off the “non-fungible token” craze, whose trading volume collapsed by more than ninety percent a year later.

What do these have in common? None of them was about “fundamentals” — nobody seriously argued the retailer was worth $483 a share. They were about **what other people would do**: if enough people buy, the price rises; if the price rises, more people buy. George Soros called this **reflexivity**: participants' beliefs affect prices, prices affect beliefs, and there is no independent “fundamental” to anchor the two.

What do Austrians say? Three things, each from an earlier lesson:

First, **this is not “irrational.”** Stage 2.1's action axiom says people act purposefully; Stage 11.5 said “irrational” usually only means “I don't understand his purpose.” A 25-year-old buying a stock with a $600 stimulus check may be aiming to make money, to take revenge, to join a group, or just to have fun — Stage 1.2 says value is subjective, **“fun” is a value**, and consumer sovereignty covers it. You may say his judgment was wrong (Stage 6.1: judgments can be wrong); you may not say he had none.

Second, **credit is the precondition.** Stages 5.4 and 10.3 taught that every bubble needs fuel. The fuel of 2020–21 was zero rates, an unprecedented central-bank balance sheet, stimulus checks paid straight into personal accounts, zero-commission brokers and one-tap margin. Without those, the forum could have had all the same enthusiasm and could not have moved a 140% short interest. This is the layer where Austrian explanation is strongest — and the layer most often left out of the mainstream story.

Third, **Austrians are missing a piece.** Credit explains why there was fuel; reflexivity explains why the fire fed itself; but **how the fire spread from person to person** — why this stock and not that one, why this forum, why this weekend — Austrians have almost no theory. That is a question of **social contagion**, which Shiller's Narrative Economics (2019) addresses head-on, and which Austrians should read seriously rather than file under “behavioral economics” and dismiss.

One more thing appeared in all these events for the first time: **social media compressed one turn of the reflexive loop from months to hours.** It is an accelerator of price discovery (a retail investor's analysis can be tested by hundreds of thousands of people in a day) and an accelerator of error (the same mechanism spreads mistakes just as fast). Stage 17.2 looks at that double edge again in the context of Bitcoin.

**In this lesson we break it into six pieces:**

- **① The events: a timeline of GameStop, Dogecoin and NFTs**
- **② Reflexivity: Soros, Lachmann and Austrian subjectivism**
- **③ “The crowd” does not exist: the action axiom rejects “irrational”**
- **④ Fuel: zero rates, margin and stimulus checks**
- **⑤ Narrative economics: Shiller at full strength, and the piece Austrians lack**
- **⑥ Social media: a double accelerator of price discovery and error**
`,

  mechanics: `
### ① The events: a timeline of GameStop, Dogecoin and NFTs

Three timelines side by side (dates and figures approximate; reports still differ on details):

- **The game retailer, January 2021**: short interest about 140% of float (end of 2020); about $17 in early January; a new director joined January 11; a short seller went public January 19; forum buying visibly amplified from January 22; close about $347 on January 27; intraday about $483 on January 28, the day several zero-commission brokers restricted buying; about $90 in early February, about $40 by mid-month; congressional hearing February 18; another rally at month-end. One prominent hedge fund lost about 53% in January. The SEC's October report concluded that the rise came mainly from buying pressure itself, with short covering secondary, and that the brokers' buying restrictions were caused directly by an overnight surge in clearinghouse margin requirements.
- **Dogecoin, 2021**: a cryptocurrency created as a joke in 2013; about $0.005 at the start of the year; a peak of about $0.73 around May 8 — precisely the weekend a well-known entrepreneur who had repeatedly mentioned it on social media appeared on a television comedy show; then decline.
- **NFTs, 2021**: in March a digital artwork sold at a traditional auction house for about $69 million; over the following year the floor prices of certain profile-picture collections reached hundreds of thousands of dollars; in 2022 trading volume shrank by more than ninety percent.

The common structure: **a clear, tellable story** (“retail vs Wall Street,” “the joke coin to the moon,” “the future of digital ownership”); **a coordination point on social media** (a forum, one person's account, a community); **an extremely low barrier to participation** (zero commissions, one-tap buying); **abundant liquidity** (zero rates, stimulus checks); **a self-reinforcing rise**, and then **an exogenous interruption** (buying restrictions, a TV show, a turn in interest rates). Pieces ② through ⑥ handle each layer of that structure.

### ② Reflexivity: Soros, Lachmann and Austrian subjectivism

George Soros introduced **reflexivity** in The Alchemy of Finance (1987): in a system with thinking participants, the participants' understanding affects the object of their understanding, and the object in turn affects the understanding. In financial markets: **investors' beliefs about prices affect prices; prices in turn affect investors' beliefs.** The two form a loop, with no “true value” outside the loop to anchor it. Soros used it to explain boom–bust sequences: a trend that had some initial basis is amplified by belief, the rising price “confirms” the belief, belief pushes the price higher, until at some point the loop reverses.

This sounds like something Austrians would reject (it seems to deny fundamentals). In fact it is **highly compatible** with Austrian subjectivism — Austrians just rarely say so. Three points of contact:

- **Lachmann's theory of expectations** (Stage 2.3 covered methodological individualism; Stage 6.1 entrepreneurial judgment). In a 1943 paper Lachmann already argued that “expectations” in economics are not a passive reading of external data but an acting person's subjective judgment about **how other acting persons will act.** In Capital and Its Structure (1956) he described asset prices as the outcome of heterogeneous, mutually inconsistent expectations colliding in the market, and held that **there is no reason to expect those expectations to converge.** Soros's reflexivity is very nearly Lachmann's theory of expectations plus a feedback arrow.
- **Mises's subjectivism** (Stage 1.2): prices are set by acting persons' valuations, and valuations can rest on anything — including valuations of other people's valuations. Keynes's “beauty contest” (General Theory, Chapter 12: pick not the face you find prettiest but the one you think others will) is entirely legitimate within the Austrian framework — it is simply a special case of subjective value: **my valuation of this stock depends on my valuation of others' valuation of it.** No Austrian principle requires valuations to be “based on fundamentals.”
- **The anchor that isn't there**: Austrians already reject the picture in which “the equilibrium price is the true value and the market price oscillates around it” (Stages 2.4, 11.3). A market price is a momentary snapshot of a process, not an estimate of a hidden true number. So when someone asks “what is GameStop's true value?”, the Austrian answer is: **there is no such number.** There are only valuations by different people at different moments, and the transaction prices they collide into.

Where, then, do Austrians and Soros part? On **whether reflexivity reverses automatically.** Soros believes the loop eventually collapses from its “gap with reality”; Austrians ask: which reality? If a group of people really is willing to pay $300 for “fun” forever, the price can stay at $300. A reversal needs a concrete cause — usually the withdrawal of piece ④'s fuel. That was plain on January 28, 2021: the immediate trigger of the reversal was the clearinghouse's margin requirement, that is, **a contraction of credit**, not some natural law of “reversion to fundamentals.”

<figure><svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The reflexive loop — and where Austrians explain well vs lack a theory</text><ellipse cx="200" cy="120" rx="95" ry="38" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="200" y="116" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">Participants' beliefs</text><text x="200" y="132" text-anchor="middle" font-size="10" fill="var(--ink)">“others will buy” · subjective expectations (Lachmann)</text><ellipse cx="440" cy="120" rx="95" ry="38" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="440" y="116" text-anchor="middle" font-size="12" font-weight="700" fill="var(--blue)">Price</text><text x="440" y="132" text-anchor="middle" font-size="10" fill="var(--ink)">valuations colliding into trades (1.3)</text><path d="M290,102 C330,70 370,70 350,100" fill="none" stroke="var(--ink)" stroke-width="1.8" marker-end="url(#mr-a)"/><text x="320" y="66" text-anchor="middle" font-size="10.5" fill="var(--ink)">belief → buying → price rises</text><path d="M350,140 C330,170 290,170 300,140" fill="none" stroke="var(--ink)" stroke-width="1.8" marker-end="url(#mr-a)"/><text x="320" y="186" text-anchor="middle" font-size="10.5" fill="var(--ink)">price rises → “confirms” belief → more believers</text><defs><marker id="mr-a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--ink)"/></marker></defs><rect x="40" y="215" width="270" height="52" rx="7" fill="var(--green-soft)" stroke="var(--green)"/><text x="175" y="235" text-anchor="middle" font-size="11" font-weight="700" fill="var(--green)">Fuel layer: Austrians explain well</text><text x="175" y="252" text-anchor="middle" font-size="10" fill="var(--ink)">zero rates · margin · stimulus checks (Stages 5.4, 10.3)</text><rect x="330" y="215" width="270" height="52" rx="7" fill="var(--red-soft)" stroke="var(--red)"/><text x="465" y="235" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Contagion layer: Austrians lack a theory</text><text x="465" y="252" text-anchor="middle" font-size="10" fill="var(--ink)">why this stock, this forum, this weekend (Shiller)</text><line x1="175" y1="215" x2="200" y2="160" stroke="var(--green)" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="465" y1="215" x2="300" y2="115" stroke="var(--red)" stroke-width="1.2" stroke-dasharray="3 3"/><text x="320" y="300" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">The loop reverses not by a law of “reversion to fundamentals” but when fuel is withdrawn: the margin call of Jan 28, 2021</text><text x="320" y="318" text-anchor="middle" font-size="10" fill="var(--muted)">Social media compresses one turn of the loop from months to hours (⑥)</text></svg><figcaption>Beliefs and prices push each other with no independent anchor. Austrians explain the “fuel” layer well (no credit, no fire) and have almost no theory of the “contagion” layer (how the fire spreads through a crowd).</figcaption></figure>

### ③ “The crowd” does not exist: the action axiom rejects “irrational”

The most popular explanation of these events is “crowd madness”: Mackay's Extraordinary Popular Delusions and the Madness of Crowds (1841), Le Bon's The Crowd (1895), today's “retail frenzy” and “FOMO.” The trouble with this explanation is that **it explains nothing** — it merely names “many people did at once what I would not do.”

Stage 2.3's methodological individualism is not a dogma here; it is a tool: **“the crowd” does not act; only individuals act.** Three million forum users are not one organism with one will but three million persons, each with different purposes, information and money, each making a decision. To explain the event you must explain **why these individuals each chose to buy** — and once you ask it that way, the answer “irrational” evaporates, because every one of them can give a purpose:

- **To make money**: someone bought at $20 and sold at $200, a tenfold gain. His judgment was right.
- **Revenge**: someone whose family lost a house in 2008 was willing to spend $600 to make trouble for a hedge fund. That is consumption — he bought a satisfaction, priced at $600. Stage 1.2 says value is subjective, and **the satisfaction of revenge is a value.**
- **Belonging**: someone bought to be part of a group, as one buys a team scarf. Consumer sovereignty (Stage 6.3) covers “fun” and “belonging” as it covers bread.
- **A bet on structure**: someone genuinely understood what 140% short interest meant and judged that if enough people bought, the shorts would have to cover — an **entrepreneurial judgment** (Stage 6.1) about market structure, and for a while a correct one.

Stage 11.5 gave the Austrian reply to behavioral economics' “irrationality”: **“irrational” usually only means the observer does not know the actor's purpose.** Mises held that rational and irrational are not about ends (ends are given) but only about means — whether the means a person chooses can achieve his end. By that standard: buying at $400 in order to make money was a mistaken means (a wrong judgment); buying at $400 for revenge, knowing it would lose, was a correct means (he got what he paid for). Neither is “irrational.”

This is not a defense of anyone. Wrong judgments are real; Stage 6.3 says loss is the market's feedback on wrong judgment, and many people received that feedback in February 2021. What Austrians reject is only the lazy word — because once you use it, you stop asking the genuinely interesting question: **why did these purposes, at this moment, in this way, converge on the same stock?** That is piece ⑤.

### ④ Fuel: zero rates, margin and stimulus checks

Now the part Austrians do best. Stage 5.4 read four cycles with ABCT and Stage 10.3 gave the Austrian reading of financial markets; the core is one sentence: **without credit expansion there is no bubble that lasts months** — enthusiasm can make a price jump, but keeping it off the ground for weeks requires **a continuous inflow of purchasing power**, and purchasing power comes from somewhere. In 2020–21 the sources were plain:

- **Zero rates**: in March 2020 the Fed cut its policy rate to zero and began unlimited asset purchases; its balance sheet grew from about $4 trillion to about $8 trillion in a little over a year. Zero rates mean the opportunity cost of holding cash is zero and **margin borrowing is nearly free** — Stage 3.5 explained that a suppressed rate is a lie about time preference; it tells everyone “buy now, it costs little.”
- **Stimulus checks**: about $1,200 in April 2020, about $600 in December 2020, about $1,400 in March 2021, paid directly into personal accounts. Broker data showed small-account openings and small purchases jumping in the days checks arrived. This is a rare variant of Stage 4.3's Cantillon effect: **this time the new money reached retail investors first**, not banks and large firms — and the first place it went was a zero-commission broker's app.
- **Margin and options**: zero-commission brokerage went mainstream in late 2019; margin accounts opened with one tap; options trading was opened to retail and “gamified.” In February 2021 US margin debt hit a record of about $800 billion. Options mattered especially: buying call options forces market makers to buy the underlying shares to hedge — the “gamma squeeze” the media emphasized. The SEC's report found it was not the main cause, but it was an amplifier.
- **No alternatives**: at zero rates bonds paid nothing and savings accounts paid nothing — Stage 10.3 described how “there is no alternative” (TINA) pushes money into risk assets.

Remove those four and what happens in January 2021? The forum is still there, the story is still there, the enthusiasm is still there — but **it cannot move the price.** In a world with no margin, no checks and 5% rates, the same enthusiasm might push the stock to $40, not $483. That is the Austrian's first sentence about meme stocks: **first ask where the money came from.** It also explains why the manias receded together in 2022: that year the Fed began raising rates, the fuel was withdrawn, and the game retailer, the joke coin and the profile-picture NFTs fell together — their “narratives” differed; their funding source was the same.

The Austrian limit on this layer should also be stated honestly: ABCT is about malinvestment in the **capital structure** (Stage 5.2: production stages stretched too long), and meme stocks are not a production-structure problem; they are a pure asset-price phenomenon. Austrians need to extend the “credit expansion → malinvestment” framework into a “credit expansion → asset-price reflexivity” version — Stage 10.3 did part of that, but it is not Mises's or Hayek's original model.

### ⑤ Narrative economics: Shiller at full strength, and the piece Austrians lack

Robert Shiller's Narrative Economics (2019) argues that the spread of economic events follows the laws of **epidemiology**: a “narrative” (a story that can be retold) spreads through a population like a virus, with an infection rate, a recovery rate, mutations and super-spreaders; it changes people's behavior, and behavior changes the economy. Shiller reads the 1920s stock market, the 1930s panic over “technological unemployment,” Bitcoin and housing booms as narrative contagions. His strongest version: **without a narrative there is no coordination** — three million people cannot buy the same stock at once without a shared story; and a narrative's spreading power is unrelated to its truth and related to whether it is easy to tell, easy to remember, has a villain and confers identity. “Retail vs Wall Street” is a perfect narrative: a villain (hedge funds), a justice (the 2008 account), an identity (“us”), a ritual (“hold”), humor (the forum's self-mocking culture).

How should Austrians treat it? First, admit: **this is the piece Austrians lack.** Austrians can explain the fuel (piece ④), each person's purpose (piece ③), and the loop between belief and price (piece ②), but cannot explain **why this stock, this forum, this weekend** — the **path** of contagion. Hayek has a theory of how the mind classifies (The Sensory Order) and a theory of how rules spread (the cultural-evolution writings), but neither was developed into a theory of **how market narratives spread.** That is a genuine gap, not something to wave away as “psychology, not economics” — because the spread of narratives directly determines prices, and prices are economics' central object.

Second, point out what Austrians can add to Shiller. His epidemiological model treats people as **hosts** that a narrative “catches.” Austrians would say: a narrative is not a virus and people are not hosts; **a person chooses to believe a narrative because it serves one of his purposes** (piece ③'s four purposes). A narrative spreads not because it has a high “infection rate” but because many people each find it useful — for making money, for revenge, for belonging. That turns Shiller's passive model into a praxeological one: a narrative is a **means**, chosen, modified and discarded by acting persons. This view explains one thing Shiller's model cannot: why the same narrative spreads when fuel is abundant and vanishes when it is withdrawn — because its “usefulness” (can it make money?) changed.

Third, a genuine Austrian contribution, from Koppl's Big Players and the Economic Theory of Expectations (2002): when a market contains a **Big Player** — a participant unconstrained by market discipline who can significantly move prices (typically a central bank, but also an entrepreneur with tens of millions of followers) — other participants' expectations shift from “analyze fundamentals” to “guess the Big Player,” and **herding increases.** That explains Dogecoin's timeline: when the price depends on one person's posts, the most rational strategy is to watch his account rather than study the token. Big Player theory is the closest Austrians have come to an answer on social contagion — it says contagion intensifies when Big Players are present — but it is still not a theory of contagion itself.

### ⑥ Social media: a double accelerator of price discovery and error

Finally, social media itself. What did it do in these events? It compressed **one turn of piece ②'s loop** — belief moving price, price shaping belief — **from months to hours.** In the South Sea Bubble of 1720 beliefs spread through coffee houses and letters; in 1929 through newspapers and telephones; in 2000 through television and mailing lists; in 2021 through a forum refreshed thousands of times a minute. The mechanism of reflexivity did not change; **the clock sped up.**

That brings two consequences in opposite directions, and Austrians should admit both:

- **Accelerated price discovery** (Stages 6.2, 7.2). A 140% short interest discovered by a retail investor in 2020 might, in 1990, never have reached enough people; in 2021 it was tested, debated and bet on by hundreds of thousands within days. Dispersed knowledge was pooled into the price faster — the Hayekian market process running at higher speed. For the first time, short sellers' and hedge funds' positions faced an organized counter-party test from “below.” Austrians have no reason not to welcome that.
- **Accelerated error.** The same mechanism spreads wrong beliefs as fast as right ones. “Hold and you cannot lose” was a judgment being tested on January 27 and a falsified narrative still spreading on February 5. Stage 6.3 says loss is the market's feedback on error, but feedback takes time — and social media lets **error reach more people before the feedback arrives.** Most of those who entered after February 2021 were holding someone else's chips. This lesson's demo shows you who is left holding them.

One more thing must be named: **the brokers' buying restrictions on January 28.** The forum read them as “the rules were changed,” which is partly correct. The Austrian analysis has two layers: the brokers are private firms whose user agreements allow them to restrict trading — Stage 16.4's property logic; but the reason they restricted was the clearinghouse's margin requirement, and the clearinghouse is compulsory infrastructure operating inside a regulatory framework — Stage 9.4's question of how “market” market infrastructure really is. Both layers are needed to avoid reducing the event to either “brokers betrayed retail” or “retail didn't understand the rules.”

The whole lesson in three sentences: **meme manias are reflexivity running at social-media speed; Austrians explain the fuel layer (credit) best, reject “irrational” at the purpose layer (methodological individualism), and at the contagion layer (how narratives spread) need to learn from Shiller and rewrite him praxeologically; social media accelerates both price discovery and error, while the arrival of feedback has not sped up to match.** This lesson is not investment advice — it only hands you a pair of glasses. Stage 17.2 puts the same glasses on Bitcoin, where the “hard money” narrative, Big Players' posts and the credit cycle mix in different proportions.
`,

  demo: "meme-market",

  analogy: `
Picture a **bonfire party.**

The firewood is credit: zero rates, margin, stimulus checks — without wood, you can have a thousand people who want to light a fire, and the fire will be the size of a match. In 2020 someone dumped a truckload of wood in the middle of the field.

The spark is the narrative: “retail vs Wall Street.” It has to be easy to tell, easy to remember, with a villain and an “us.” A good spark on wet wood does not catch; a bad spark on a truckload of dry wood does.

The people around the fire are three million individuals, not “a mob.” Some came to get warm (make money); some to settle an account from 2008 (revenge); some just to watch the fire with friends (belonging); some worked out that the blaze would reach the tents on the other side (a bet on structure). Each has a purpose. The bigger the fire, the more people gather; the more people, the more wood gets thrown on — that is reflexivity: the fire draws people, the people feed the fire.

Social media is the wind. It used to blow once every few months; now every few minutes. Wind makes the fire burn faster and die faster; it carries the news “the fire is huge” to people far away, and also “the fire is going out” — but the second always arrives a step late, so the last to run over usually arrive when the fire is already dying, clutching damp wood that never burned.

Standing to one side, the Austrian's most confident sentence is: **first ask who brought the wood.** The thing he is least sure about is: why this spark, this field, this night — where the wind carries the spark, he has no map. Shiller has one, drawn as a virus's path; Austrians should borrow it and then replace “virus” with “people each chose this spark because it was useful to them.”
`,

  misconceptions: [
    "**“GameStop was crowd madness / retail irrationality.”** — Methodological individualism: “the crowd” does not act; three million individuals each decided, each with a purpose — money, revenge, belonging, a bet on the short structure. Mises: rationality concerns means only, not ends; buying at $400 for revenge, knowing it would lose, was a correct means. “Irrational” usually just means the observer does not know the actor's purpose, and once you use the word you stop asking the real question: why did these purposes converge on one stock at this moment?",
    "**“Reflexivity denies fundamentals, so Austrians should oppose Soros.”** — The opposite: reflexivity is highly compatible with Austrian subjectivism. Lachmann said in 1943 that expectations are subjective judgments about how others will act, with no reason to converge; Keynes's beauty contest is a special case of subjective value; Austrians already reject “the equilibrium price is the true value.” The only disagreement is whether the loop reverses automatically: Austrians say a reversal needs a concrete cause — usually fuel withdrawn (the margin call of January 28, 2021), not a natural law of reversion.",
    "**“Social media caused the bubble.”** — Social media is the wind, not the wood. Without zero rates, margin and stimulus checks, the same enthusiasm could not have moved a 140% short interest. After the 2022 rate hikes, meme stocks, the joke coin and NFTs — with entirely different narratives — receded together; their funding source was the same. The Austrian's first sentence is always: where did the money come from? What social media did was compress one turn of the reflexive loop from months to hours — accelerating price discovery and error alike.",
    "**“Austrians have fully explained meme manias.”** — They have not. The fuel layer (credit) is explained well, and the purpose layer (individualism) is explained well, but the contagion layer — why this stock, this forum, this weekend — has almost no Austrian theory. Shiller's narrative economics addresses it directly; Austrians should read it seriously and rewrite it praxeologically: a narrative is not a virus and people are not hosts; people choose a narrative because it serves their purposes. Koppl's Big Player theory is the closest Austrian contribution, but it is still not a theory of contagion itself.",
    "**“The brokers' buying restrictions prove the market is rigged, so the government should take over trading infrastructure.”** — Look at two layers. Brokers are private firms whose user agreements allow trading restrictions — property logic (Stage 16.4); but the reason was the clearinghouse's margin requirement, and the clearinghouse is compulsory infrastructure inside a regulatory framework (Stage 9.4). Reducing the event to “brokers betrayed retail” or “retail didn't understand the rules” is wrong either way; and “therefore the government should take over” is Stage 8.1's intervention spiral. This lesson is not investment advice.",
  ],

  quiz: [
    {
      q: "What does Soros's “reflexivity” mean, and with which part of Austrian economics is it most compatible?",
      options: [
        "Prices always revert to fundamentals; compatible with ABCT",
        "Markets are perfectly efficient; compatible with the Chicago school",
        "Crowds are irrational; compatible with behavioral economics",
        "Participants' beliefs affect prices, prices affect beliefs, and there is no independent anchor; compatible with Lachmann's theory of expectations and Mises's subjectivism",
      ],
      answer: 3,
      explain: "Lachmann 1943: expectations are subjective judgments about how other acting persons will act, with no reason to converge. Keynes's beauty contest is a special case of subjective value inside the Austrian framework. The only disagreement is whether the loop reverses automatically.",
    },
    {
      q: "Why does this lesson refuse to explain GameStop as “crowd irrationality”?",
      options: [
        "Because every buyer made money",
        "Because “the crowd” does not act, only individuals do, and each can give a purpose (money, revenge, belonging, a bet on structure); Mises: rationality concerns means, not ends",
        "Because there are no crowd effects on social media",
        "Because the hedge funds were the irrational party",
      ],
      answer: 1,
      explain: "Methodological individualism (Stage 2.3) and the action axiom (Stage 2.1): “irrational” usually only means the observer does not know the actor's purpose. Wrong judgments are real, but that is “wrong means,” not “no judgment.”",
    },
    {
      q: "On which layer is the Austrian explanation of meme manias strongest?",
      options: [
        "The path of narrative contagion",
        "Retail investors' psychological biases",
        "The fuel layer: zero rates, margin, stimulus checks — no credit expansion, no bubble that lasts months; after the 2022 rate hikes, assets with different narratives receded together",
        "The forum's community culture",
      ],
      answer: 2,
      explain: "Stages 5.4 and 10.3: enthusiasm can make a price jump, but keeping it in the air for weeks needs a continuous inflow of purchasing power. The 2020–21 sources were plain: zero rates, record margin debt of about $800 billion, three rounds of stimulus checks — this time the new money reached retail first.",
    },
    {
      q: "What is the “missing piece” this lesson says Austrians lack, and how should it be filled?",
      options: [
        "A theory of social contagion (why this stock, this forum, this weekend); read Shiller's narrative economics seriously and rewrite it praxeologically — a narrative is a means chosen by acting persons, not a virus infecting hosts",
        "A theory of money; adopt MMT",
        "Mathematical models; adopt DSGE",
        "Nothing is missing",
      ],
      answer: 0,
      explain: "Shiller's epidemiological model treats people as hosts; Austrians can add that a person chooses a narrative because it serves a purpose, which explains why the same narrative spreads when fuel is abundant and vanishes when it is withdrawn. Koppl's Big Player theory is the closest Austrian contribution.",
    },
    {
      q: "What is this lesson's conclusion about the role of social media in these events?",
      options: [
        "It caused the bubble",
        "It compressed one turn of the reflexive loop from months to hours — accelerating both price discovery (dispersed knowledge pooled into prices faster) and error (wrong beliefs reaching more people before feedback arrives)",
        "It played no role",
        "It only accelerated price discovery, with no side effects",
      ],
      answer: 1,
      explain: "The mechanism of reflexivity did not change; the clock sped up. A 140% short interest that would not have reached enough people in 1990 was tested by hundreds of thousands within days in 2021; but “hold and you cannot lose” kept spreading after it was falsified, and most who entered after February held someone else's chips.",
    },
  ],

  further: [
    { label: "SEC Staff Report on Equity and Options Market Structure Conditions in Early 2021 (October 2021) — the official analysis of the GameStop episode", url: "https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf" },
    { label: "Lachmann, Capital and Its Structure (1956) — expectations and asset prices (Mises Institute full text)", url: "https://mises.org/library/book/capital-and-its-structure" },
    { label: "Lachmann, “The Role of Expectations in Economics as a Social Science,” Economica 1943", url: "https://www.jstor.org/stable/2549653" },
    { label: "Koppl & Yeager, “Big Players and Herding in Asset Markets,” Explorations in Economic History 1996 — how Big Players intensify herding (book-length version: Koppl 2002)", url: "https://doi.org/10.1006/exeh.1996.0021" },
    { label: "Mises, Human Action, Chapter I “Acting Man” — rationality and irrationality concern means only", url: "https://mises.org/library/book/human-action" },
  ],
};
