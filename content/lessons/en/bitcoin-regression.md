---
id: bitcoin-regression
prereqs: origin-of-money, network-effects
demo: regression-chain
---

# Is Bitcoin Mengerian Money? The Regression-Theorem Debate

## @hook
In January 2009 a string of numbers that nobody guaranteed, that you could not eat or wear, and that would not fetch a single cent, began to move between a handful of computers. A decade and a half later its total market value has at times exceeded a trillion dollars, a sovereign state wrote it into law, and Wall Street wrapped it in ETFs. Austrians have argued about it for ten years, because Mises's **regression theorem** (1912) says every money's purchasing power must trace back to a value it had *before* it was money — so where is Bitcoin's “before”? This lesson restates the theorem precisely, lays out the strongest version of each side, and ends with an honest verdict: **the regression theorem is a claim about origins, not a price forecast; Bitcoin neither refutes it nor is endorsed by it.** (Nothing here is investment advice.)

## @intuition
Start by recalling the two bricks from [[origin-of-money|Stage 4.1]]. The first is Menger's: money was not invented; it **grew** out of barter. Some good, because it was the easiest to sell, got used by more and more people as a stepping-stone, and the snowball rolled until one commodity was accepted by everyone. The second is Mises's: that story has a circle in it — people accept money because it has purchasing power, and it has purchasing power because people accept it. Mises's **regression theorem** straightens the circle into a line: today's demand for money refers back to yesterday's purchasing power, yesterday's to the day before, all the way back to the day the thing was an ordinary commodity with only “use value.” Gold was jewellery before it was money; silver was tableware. **The far end of the chain has to be anchored in a non-monetary value.**

Now put Bitcoin into that frame. On 31 October 2008 an anonymous author calling himself Satoshi Nakamoto posted a nine-page paper to a cryptography mailing list. On 3 January 2009 the first block was mined, with a headline from that day's *Times* embedded in it: “Chancellor on brink of second bailout for banks.” The price of a bitcoin that day was **zero** — not “very low,” but literally unquoted: no market, no bid. It was not jewellery, not tableware; there was nothing “non-monetary” you could do with it.

So here is the problem, and it is the Austrians' own problem: **if the regression theorem is a priori true ([[apriori-empirical|Stage 2.2]]), then either Bitcoin violates it and the theorem is wrong; or Bitcoin is not money but something else; or Bitcoin does, somewhere we have not looked carefully, have a “before.”** Three roads, and Austrian economists went down all three.

The debate deserves a whole lesson not because Bitcoin matters so much in itself, but because it is a **stress test** of the theory from [[origin-of-money|Stage 4.1]] — the way [[bigdata-planning|Stage 7.5]] stress-tests the calculation debate with big data and [[ai-central-planning|Stage 18.1]] does it again with AI. The result of the test tells you what the regression theorem actually claims: that money must first have been a commodity (in which case Bitcoin fails), or that money must first have a price history (in which case Bitcoin passed in 2010), or that monetary demand for a thing must logically rest on some *prior* valuation of it (in which case the question becomes: why did a few dozen geeks spend electricity mining it in 2009?).

We also have to untangle a question that gets muddled constantly: **“Bitcoin satisfies the regression theorem” and “Bitcoin is money” are two entirely different propositions.** The first is about origins, the second about the present. [[money-demand|Stage 4.2]] covered Mises's taxonomy: **money** is the generally accepted medium of exchange; beyond it sit “secondary media of exchange” — highly liquid assets people hold as reserves but do not spend at the grocer's. Today's Bitcoin looks far more like the latter. An honest Austrian can say in the same breath: “its origin is compatible with the theorem” and “it is not (yet) money.”

Finally we will bring in the network effects of [[network-effects|Stage 15.1]] and the spontaneous order of [[spontaneous-order|Stage 7.4]]. Bitcoin is a protocol with no CEO, no customer service, and nobody who can switch it off; its adoption curve, like any network good's, has the property that **other people's valuations determine yours**. Its rules (the 21-million cap, the halving every four years) were designed; its **price and its uses** grew — exactly Hayek's distinction between designed rules and grown order.

**In this lesson we break it into five pieces:**

- **① Satoshi's design: a nine-page paper and a clock that never stops**
- **② The regression theorem restated precisely: what it claims and what it does not**
- **③ Three rounds of debate: Šurda, Graf, Davidson & Block — where is Bitcoin's “before”?**
- **④ The skeptics at full strength: medium of exchange, store of value, or “monetary asset”?**
- **⑤ Network good and spontaneous order: El Salvador, ETFs, and “the theorem is not a price forecast”**

## @mechanics
### ① Satoshi's design: a nine-page paper and a clock that never stops

First, pin down the object, because much of the argument comes from people talking about different things.

**A ledger, not a coin.** Bitcoin is first of all a public ledger: who transferred how many “units” to whom and when, with a complete copy held on tens of thousands of computers worldwide. “A bitcoin” is not a file; it is a balance entry on that ledger.

**Proof of work: buying the right to write with electricity.** Who gets to add the next page (“block”) to the ledger? Satoshi's answer: everyone who wants to competes to solve a puzzle that can only be brute-forced; the first solver wins the right to write the page and a reward in new coins. That is proof of work. Its economic meaning is that **rewriting history costs as much as redoing the whole network's electricity bill.** It replaces “trust a third party” with “trust a cost structure.”

**Difficulty adjustment: a self-calibrating clock.** However many miners compete, every 2,016 blocks (about two weeks) the protocol retunes the puzzle so that blocks keep arriving roughly every ten minutes. That means **ten times the hashpower does not mean ten times the coins** — more miners just split the same reward more ways. This matters enormously in [[hard-money|Stage 17.2]]'s discussion of “hard money”: when gold's price rises, mining expands and supply responds; when Bitcoin's price rises, hashpower expands but **the supply curve is vertical.**

**The 21-million cap and the halvings.** The reward began at 50 coins per block and halves every 210,000 blocks (about four years): to 25 in November 2012, 12.5 in July 2016, 6.25 in May 2020, 3.125 in April 2024. The geometric series sums to roughly 21 million, with the last coin expected around 2140. By 2025 about 19.9 million had been mined and annual new supply was around 0.8% — already below gold's roughly 1.5–2%.

**Nobody can change the rules — unless almost everyone agrees.** This is the deepest difference from any fiat currency, any company's shares, any stablecoin: there is no issuer. In 2017 a faction wanted bigger blocks; the result was a fork into a separate chain (Bitcoin Cash) while the original stayed put. [[spontaneous-order|Stage 7.4]] would call this “designed rules, grown order” — we return to it in ⑤.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Bitcoin's value history vs the regression theorem's backward chain (illustrative, not to scale)</text><line x1="50" y1="230" x2="600" y2="230" stroke="var(--line)" stroke-width="1.5"/><g font-size="10" fill="var(--muted)" text-anchor="middle"><text x="70" y="248">Jan 2009</text><text x="160" y="248">Oct 2009</text><text x="250" y="248">May 2010</text><text x="340" y="248">Jul 2010</text><text x="430" y="248">2013–14</text><text x="520" y="248">2021</text><text x="590" y="248">2024</text></g><circle cx="70" cy="230" r="6" fill="var(--red)"/><text x="70" y="212" text-anchor="middle" font-size="10" fill="var(--red)" font-weight="600">Genesis · price = 0</text><circle cx="160" cy="205" r="6" fill="var(--orange)"/><text x="160" y="190" text-anchor="middle" font-size="10" fill="var(--ink)">First quote</text><text x="160" y="178" text-anchor="middle" font-size="9" fill="var(--muted)">from electricity cost</text><circle cx="250" cy="180" r="6" fill="var(--orange)"/><text x="250" y="165" text-anchor="middle" font-size="10" fill="var(--ink)">Pizza day</text><text x="250" y="153" text-anchor="middle" font-size="9" fill="var(--muted)">first real good</text><circle cx="340" cy="150" r="6" fill="var(--orange)"/><text x="340" y="135" text-anchor="middle" font-size="10" fill="var(--ink)">Mt. Gox opens</text><text x="340" y="123" text-anchor="middle" font-size="9" fill="var(--muted)">continuous quotes</text><circle cx="430" cy="110" r="6" fill="var(--orange)"/><text x="430" y="95" text-anchor="middle" font-size="10" fill="var(--ink)">First $1,000 · Gox collapses</text><circle cx="520" cy="70" r="6" fill="var(--blue)"/><text x="520" y="55" text-anchor="middle" font-size="10" fill="var(--ink)">El Salvador legal tender</text><circle cx="590" cy="45" r="6" fill="var(--blue)"/><text x="580" y="30" text-anchor="middle" font-size="10" fill="var(--ink)">Spot ETFs</text><polyline points="70,230 160,205 250,180 340,150 430,110 520,70 590,45" fill="none" stroke="var(--orange)" stroke-width="2" stroke-dasharray="5 4"/><path d="M590,60 Q400,120 165,225" fill="none" stroke="var(--blue)" stroke-width="2" marker-end="url(#arr17a)"/><defs><marker id="arr17a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--blue)"/></marker></defs><text x="380" y="200" text-anchor="middle" font-size="10" fill="var(--blue)" font-weight="600">The theorem's question: today's demand refers to yesterday's price …</text><text x="380" y="214" text-anchor="middle" font-size="10" fill="var(--blue)" font-weight="600">trace it back — where does the chain end?</text><rect x="52" y="262" width="536" height="30" rx="6" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="320" y="281" text-anchor="middle" font-size="10.5" fill="var(--orange-ink)" font-weight="600">The whole dispute lives in Jan → Oct 2009: what valuation carried the first step from 0 to non-zero?</text></svg><figcaption>The regression theorem never asks “what is Bitcoin worth now?” It asks only “when someone first paid a cost for it, what were they valuing?” The entire debate is compressed into the leftmost sliver of the timeline.</figcaption></figure>

### ② The regression theorem restated precisely: what it claims and what it does not

The theorem Mises set out in Part II of *The Theory of Money and Credit* (1912) and again in Chapter XVII of *Human Action* (1949) can be reduced to four sentences:

- **First (the problem).** Money's marginal utility comes from its purchasing power; purchasing power is set by the supply of and demand for money; and the demand for money depends on the purchasing power people expect. Unless that circle is broken, marginal-utility theory cannot explain the value of money — this was the “Austrian circle” objection raised by Helfferich and others around 1900.
- **Second (the solution).** **Today's** demand for money rests on acting people's memory of **yesterday's** purchasing power. Yesterday's rested on the day before. That is not circular; it is a causal chain with an arrow of time.
- **Third (the endpoint).** The chain cannot regress forever. It must stop at a point at which the thing was not yet a medium of exchange and people valued it entirely for its **non-monetary uses** — “industrial or consumption uses,” in Mises's phrasing, its “use value as a commodity.”
- **Fourth (its character).** This is an **a priori**, praxeological theorem ([[apriori-empirical|Stage 2.2]]): not induced from history but deduced from the fact that people can only choose on the basis of valuations they already have. So it must hold for every money, **including future ones.**

Now note three things the theorem does **not** claim, because the whole debate is fought on exactly these boundaries:

1. **It does not claim money must keep a commodity use forever.** Mises says plainly that once monetary demand exists the commodity use may vanish (fiat money is precisely an unbroken chain: the dollar's purchasing power traces to the pre-1971 gold promise, and from there to gold's use as ornament — [[central-banks-fiat|Stage 4.5]]).
2. **It does not claim the “non-monetary use” must be physical.** Mises speaks of “use value” — a person's valuation of the thing's capacity to serve some end. Ends are subjective ([[subjective-value|Stage 1.2]]). A postage stamp's use value is posting letters; a game item's use value is playing the game.
3. **It does not forecast any money's future purchasing power.** The theorem explains where value **comes from**, not where it is **going**.

State the theorem at that resolution and the dispute becomes clear: **it is not about whether Bitcoin had a “commodity” use — obviously it did not. It is about whether the third sentence's “non-monetary use” can include non-physical subjective ends, and about what exactly those people in 2009 were valuing.**

### ③ Three rounds of debate: Šurda, Graf, Davidson & Block — where is Bitcoin's “before”?

The Austrian literature clustered in 2012–2015 around three landmarks.

**Peter Šurda (2012)**, in a master's thesis at the Vienna University of Economics titled *Economics of Bitcoin*, gave the first systematic treatment. His claim: the regression theorem requires **prior non-monetary demand**, not a prior “commodity.” Did 2009 Bitcoin have such demand? Yes — it was a **working payment network**, and to use the network at all (to experiment, to send messages, to prove that the cryptography worked, to express distaste for central banks) you had to hold its unit of account. That use does not depend on what the unit fetches in dollars, and is therefore “non-monetary.” Šurda also pointed out that Bitcoin's saleableness (Menger's core concept from [[origin-of-money|Stage 4.1]]) for cross-border and censorship-resistant transfer far exceeds cash — precisely the mechanism by which Menger says the most saleable good gets selected.

**Konrad Graf (2013)**, in *On the Origins of Bitcoin: Stages of Monetary Evolution*, organized Šurda's intuition into a Mengerian timeline. Stage one (2009): Bitcoin was a **collectible and geek toy** — mining it, sending it, seeing whether it worked, was an end in itself, the way a stamp collector values a rare stamp. Stage two (October 2009): the New Liberty Standard site posted the first quote, based on mining electricity costs: about 1,309 bitcoins per dollar. That was the first **price**, though not yet a market price. Stage three (22 May 2010): a Florida programmer, Laszlo Hanyecz, paid 10,000 bitcoins for two pizzas — roughly $25–41 at the time — the **first exchange for a real good**, “Pizza Day.” Stage four (from July 2010): Mt. Gox offered continuous quotes, and Bitcoin acquired a price history that could be “remembered.” Graf's conclusion: every link the regression theorem requires is present; the first link just is not “jewellery” but “the utility of playing with a novel cryptographic artefact.”

**Laura Davidson and Walter Block (2015)**, “Bitcoin, the Regression Theorem, and the Emergence of a New Medium of Exchange,” in the *Quarterly Journal of Austrian Economics*, made the “hardest” argument: since the theorem is a priori, it **must** hold for Bitcoin, and the only task is to identify the non-monetary use. They listed technical value to programmers, ideological “statement” value to libertarians, and the entertainment value of joining something new. They also made a point that often gets missed: **the theorem describes the valuation logic of acting people; it is not a licensing checklist economists must approve.** If in 2009 people demonstrably spent electricity and time on it with no exchange value in sight, the theorem's condition was satisfied by the action itself.

The three papers converge: **Bitcoin is not a counterexample to the regression theorem but an unusually clean case of it — because the whole process is timestamped.** Each also has a weak spot, and the skeptics went straight for them.

### ④ The skeptics at full strength: medium of exchange, store of value, or “monetary asset”?

The Austrian skeptics are not outsiders, and their arguments should be stated at full strength.

**First objection: “non-monetary use” has been diluted into a tautology.** Frank Shostak (“The Bitcoin Money Myth,” 2013) and Nikolay Gertchev (“The Money-ness of Bitcoins,” 2013) press this point: if “wanting to hold it” counts as a non-monetary use, the theorem explains everything and therefore nothing. Gold's ornamental use exists **independently** of its exchange value — if the whole world stopped using gold as money it would still make a ring. But the utility of “playing with a payment network” already contains the expectation that it will one day pay for things; that is **speculation on future money-ness**, not present non-monetary valuation. On this reading, the 2009 miners were not “consuming” bitcoin; they were **betting** it would become money. This is a genuinely sharp objection. The proponents' reply: even as a bet, it was a valuation of **a specific end** — censorship-resistant transfer — and that end does not depend on Bitcoin becoming a *general* medium of exchange, just as a rare stamp's collectible value does not depend on stamps becoming money. At this point the two sides are really arguing about how “the object of valuation” should be delimited — a fine question inside subjective-value theory ([[subjective-value|Stage 1.2]]), not a matter of one side being simply wrong.

**Second objection: even if the origin is fine, it is not money now.** This is the weightiest point, and **most proponents concede it.** Mises defines money as the *generally accepted* medium of exchange. Does 2025 Bitcoin qualify? Look at the facts: the share of everyday transactions settled in bitcoin is tiny; the overwhelming majority of holders buy and hold; merchants who accept it usually convert to fiat at once; even El Salvador, three years after making it legal tender, saw little actual use (see ⑤). In the taxonomy of [[money-demand|Stage 4.2]] it is at most what Mises called a **secondary medium of exchange** — a highly liquid asset held as a reserve but not spent — or in current jargon a “monetary asset.” Joseph Salerno's formulation is fair: “it is a medium of exchange, but not yet money.”

**Third objection: volatility.** Something that halves and doubles within a year cannot serve as a unit of account — you cannot write a one-year contract in it. Proponents answer that early adoption is necessarily volatile, and that gold too fluctuated before it became money; skeptics retort: then call it money once it stops fluctuating. **The two sides do not actually disagree here except about tense**: the skeptic says “it is not,” the proponent says “it is not yet.”

**Fourth objection, in the Hoppe–Hülsmann line:** money-ness comes from saleableness, and one source of saleableness is **physical certainty** — you can hold gold in your hand, whereas Bitcoin's continued existence depends on miners staying switched on, the protocol not being broken, and the internet persisting. This does not say it cannot be money; it says its money-ness has a layer of dependencies gold lacks. The point returns in [[bitcoin-cycles|Stage 17.5]] when we discuss custody and “paper bitcoin.”

Put the four objections side by side and something interesting appears: **almost none of them attacks the regression theorem itself.** They attack the proposition “Bitcoin is money now.” That is where the sentence in this lesson's opening comes from: the theorem is neither refuted by Bitcoin nor an endorsement of it.

### ⑤ Network good and spontaneous order: El Salvador, ETFs, and “the theorem is not a price forecast”

Three tools to close the lesson.

**Tool one: the network effects of [[network-effects|Stage 15.1]].** Money is the prototype of a network good — you accept it because you expect others to. Menger's snowball ([[origin-of-money|Stage 4.1]]) and the Metcalfe-style “more users, more useful” are the same structure. It explains why Bitcoin was “worth zero” in 2009, “worth a pizza” in 2010, and “worth a thousand dollars” in 2013: **every valuation depends on expectations about others' valuations**, and the reflexivity of [[memes-reflexivity|Stage 16.5]] tells you such expectations reinforce themselves on the way up and unravel on the way down. That is not a disease peculiar to Bitcoin; it is the structure of all money — fiat too depends on “others will take it.” The difference is that fiat has the anchor of tax enforcement ([[central-banks-fiat|Stage 4.5]]) and Bitcoin does not.

**Tool two: the spontaneous order of [[spontaneous-order|Stage 7.4]].** Hayek distinguished an “organization” (taxis, designed for a purpose) from an “order” (cosmos, grown from rules). Bitcoin is a precise hybrid: **the protocol rules were designed** (21 million, halvings, ten minutes), and **everything that grew around them is spontaneous** — exchanges, mining pools, wallets, Lightning, over-the-counter desks, a beach town in El Salvador, ETFs. Nobody planned a “Bitcoin economy.” This also explains its appeal to Austrians: it is a monetary experiment with no central bank, no lender of last resort ([[bitcoin-cycles|Stage 17.5]]), and rules that cannot be politically amended — **whatever its eventual fate, it is the first genuinely issuer-less currency competition since Hayek's *Denationalisation of Money* (1976)** ([[free-banking|Stage 9.4]]).

**Tool three: two adoption facts, stated straight.**

- **El Salvador, September 2021**: the first country to make Bitcoin legal tender, with a government wallet, a $30 sign-up bonus, and ATMs. The results were mixed. A 2022 survey-based study found that most people who downloaded the official wallet stopped using it after collecting the bonus; merchant acceptance was low; the treasury's bitcoin holdings swung with the price; and in January 2025, to secure an IMF loan agreement, the legislature amended the law to remove merchants' obligation to accept it — Bitcoin effectively reverted to “optional.” The Austrian reading: **legal-tender status cannot manufacture money-ness** — exactly the position [[origin-of-money|Stage 4.1]] took against the state theory of money (Knapp, MMT), except that this time the failed decree concerned an asset Austrians happen to like. An honest Austrian writes that down.
- **US spot ETFs, January 2024**: after SEC approval, tens of billions of dollars flowed in within a year. That is a fact of “institutional acceptance,” but read what it means: **an ETF makes it easier to hold dollar exposure to Bitcoin, not easier to pay with Bitcoin.** It strengthens the “store of value / monetary asset” side, not the “medium of exchange” side — in a sense, the ETF is evidence for the skeptics.

**Conclusion.** The regression theorem is a theorem about **origins**. For Bitcoin, most of the Austrian literature holds that its conditions were met (with a non-physical subjective use as the first link); a minority holds that this reading dilutes the theorem. Neither side derives from the theorem that Bitcoin “will become money” or “is worth X.” **Today it is a highly liquid monetary asset, a secondary medium of exchange, and not money in Mises's sense; whether it crosses that line depends on the future actions of millions of people, which economics cannot predict.** [[hard-money|Stage 17.2]] takes the proponents' strongest argument — “hard money” — and examines it on its own; [[stablecoins-cbdc|Stage 17.3]] looks at what the market has actually chosen so far (hint: not this); [[bitcoin-cycles|Stage 17.5]] asks whether it could abolish the business cycle. This lesson, and all of Stage 17, is not investment advice.

## @analogy
Picture a brand-new **club** anyone may join, with a rule sheet on the door that can never be changed: exactly 21 million membership cards will ever be issued, the rate of issue halves every four years, there is no president, and nobody can revoke the rules.

In year one the people who turn up are a dozen who think “these rules are fascinating.” They spend time and electricity keeping the club's books and receive some cards in return. The cards are **worth nothing outside** — but they did not come to sell cards; they came to **play the rules**. That is the “before” the regression theorem is looking for: before a thing becomes a medium of exchange, someone must have paid a cost for it for its own sake. The skeptic says: “They weren't playing, they were betting the cards would be worth something.” The proponent says: “A bet is a valuation too — what they valued was ‘a club that can't be shut down.’” What the two sides are arguing about is what was in those dozen heads.

In year two someone swaps ten thousand cards for two pizzas. **The cards have a price for the first time.** From that moment the theorem's chain is connected: tomorrow's people refer to today's pizza price, the day after refers to tomorrow's … and the chain never breaks again.

Ten years on, the price of a card has risen by millions of times, yet only a scattering of shops will take cards directly — most people keep theirs locked in a drawer and convert to dollars when needed. A country announces “every shop must accept cards,” and quietly withdraws the order three years later. Wall Street creates a “card passbook” so you can hold the price of a card without touching one.

The question to ask at that point is not “are the cards a scam?” nor “how high can they go?” but the one [[money-demand|Stage 4.2]] taught: **what are they being used for right now?** The answer: they are being **held**, not **spent**. So they are a very saleable asset, and not yet money. Whether that changes depends on the people outside the club — not on the rule sheet.

## @misconceptions
- **“Bitcoin has no intrinsic value, so it violates the regression theorem, so it's a scam.”** — Three errors in a row. Austrians never accept “intrinsic value” ([[subjective-value|Stage 1.2]]: value lives in minds, not things); the theorem requires a *prior non-monetary valuation*, which most Austrian writers find in the 2009 collectible/experimental/ideological uses; and whether the theorem is satisfied has nothing to do with whether something is a scam.
- **“Bitcoin satisfies the regression theorem, therefore it is money and will succeed.”** — The theorem is about origins, not the present or the future. By Mises's definition Bitcoin is not yet a generally accepted medium of exchange; it is a secondary medium of exchange or monetary asset. And the theorem cannot forecast any money's purchasing power.
- **“The regression theorem says money must first be a physical commodity.”** — Mises says “non-monetary use value”: a person's valuation of the thing's capacity to serve some end. Ends are subjective, not necessarily physical. The real dispute is whether “wanting to join a payment network” counts as an end independent of monetary expectations — a fine question, not a textual rule.
- **“El Salvador made it legal tender, which proves it's money.”** — The opposite. The decree produced little everyday use and the obligation was repealed three years later. This matches the Austrian rejection of the state theory of money: money-ness comes from the voluntary acceptance of millions, not from a statute.
- **“All Austrian economists are Bitcoin supporters.”** — The school is deeply split: Šurda, Graf, Davidson/Block and Ammous lean supportive; Shostak, Gertchev, Hülsmann and Hoppe lean skeptical or cautious; Salerno and others sit in the middle (“a medium of exchange, not yet money”). The only consensus is that its origin is a Mengerian process worth studying and its future cannot be deduced from theory.

## @quiz
1. What problem does Mises's regression theorem solve?
   - [ ] Who should issue money
   - [x] The circularity that money demand depends on purchasing power while purchasing power depends on money demand
   - [ ] Why gold suited money better than silver
   - [ ] Why inflation redistributes wealth
   > The theorem straightens the “Austrian circle” into a causal chain with an arrow of time: today's demand refers to yesterday's purchasing power, back to the day the good had only non-monetary uses.

2. What “first link” did Graf (2013) propose for Bitcoin's compliance with the regression theorem?
   - [ ] Bitcoin could buy pizza
   - [ ] El Salvador made it legal tender
   - [x] Its 2009 non-monetary utility as a collectible, geek toy and cryptographic experiment
   - [ ] Its supply cap of 21 million
   > Graf divides Bitcoin's evolution into collectible → first quote → first real-goods exchange (Pizza Day) → continuous market price; the first link is a subjective valuation of playing with a novel artefact, not a physical commodity use.

3. Which is the strongest skeptical objection to “Bitcoin is money” — and the one most proponents also concede?
   - [ ] It lacks gold's ornamental use
   - [x] It is still not a generally accepted medium of exchange; most holders hold it rather than pay with it
   - [ ] Its code might have bugs
   - [ ] Its price is too high for ordinary people
   > By Mises's definition money is the generally accepted medium of exchange; Bitcoin today is closer to a “secondary medium of exchange” or “monetary asset.” This is a description of the present, not an attack on the regression theorem, and most proponents say “not yet.”

4. In the language of [[spontaneous-order|Stage 7.4]], what is the most accurate description of Bitcoin?
   - [ ] A pure spontaneous order in which even the rules grew
   - [ ] A pure organization (taxis) directed by Satoshi
   - [x] Designed rules (cap, halvings) around which a spontaneous ecosystem (exchanges, prices, uses) has grown
   - [ ] An international monetary system designed jointly by governments
   > Hayek distinguished designed rules from grown order; the Bitcoin protocol is the former, while its price, uses and whole ecosystem are the latter — nobody planned a “Bitcoin economy.”

5. From the “money vs monetary asset” angle, what did the 2024 US approval of spot Bitcoin ETFs signify?
   - [ ] Bitcoin thereby became money in Mises's sense
   - [x] It strengthened Bitcoin's store-of-value/monetary-asset side rather than its medium-of-exchange side
   - [ ] It proved the regression theorem wrong
   - [ ] It disabled the supply cap
   > An ETF makes it easier to hold dollar exposure to Bitcoin, not to pay with it — in a sense evidence for the skeptics' point that it is held rather than used.

## @further
- [Mises, The Theory of Money and Credit (1912), Part II — the original statement of the regression theorem (Mises Institute full text)](https://mises.org/library/book/theory-money-and-credit)
- [Davidson & Block, “Bitcoin, the Regression Theorem, and the Emergence of a New Medium of Exchange,” QJAE 18(3), 2015](https://mises.org/quarterly-journal-austrian-economics/bitcoin-regression-theorem-and-emergence-new-medium-exchange)
- [Konrad S. Graf, “On the Origins of Bitcoin: Stages of Monetary Evolution” (2013)](https://konradsgraf.com/)
- [Frank Shostak, “The Bitcoin Money Myth” (Mises Daily, 2013) — a representative skeptic](https://mises.org/mises-daily/bitcoin-money-myth)
- [Satoshi Nakamoto, “Bitcoin: A Peer-to-Peer Electronic Cash System” (2008), the original white paper](https://bitcoin.org/bitcoin.pdf)
