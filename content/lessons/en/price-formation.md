---
id: price-formation
prereqs: subjective-value
demo: horse-market
---

# How Prices Form: From Marginal Pairs to the Market Price

## @hook
[[subjective-value|Stage 1.2]] said value is a ranking inside each person's head, with no numbers attached. So where does the number everybody can see — the price — come from? In 1889 Eugen von Böhm-Bawerk answered with a horse market: **10 buyers and 8 sellers, each carrying a private “most I'll pay” or “least I'll take”; put them together and the price is pinned by four people — two “marginal pairs” — inside a narrow band.** No auctioneer, no formula, no “just price” — only a crowd of rankings colliding. The two smooth supply-and-demand curves in the textbook are a sketch of that collision, nothing more.

## @intuition
Picture a country fair that sells one thing: horses. Every horse is identical.

Ten would-be buyers arrive. Each carries a number in his head — **the most he is willing to pay** — above which he would rather walk away. Where does the number come from? From the ranking of [[subjective-value|Stage 1.2]]: for buyer A1, a horse ranks above the best other use of $30 but below the best use of $31, so his “maximum” is 30. A2's is 28, A3's is 26 … down to A10, who will pay only 15.

Eight would-be sellers arrive. Each also carries a number — **the least he will accept** — below which he would rather lead the horse home. B1 needs cash badly and will sell for 10; B2 for 11; B3 for 15 … B8 is attached to his horse and wants 26.

Now: **what will the price be, and how many horses will change hands?**

You might think “it depends who haggles best.” Haggling matters, but far less than you expect. Try a price of 18. How many are willing to buy? Everyone whose maximum is at least 18: A1 through A8 — eight people. How many are willing to sell? Everyone whose minimum is at most 18: B1 through B4 — four. Eight buyers chasing four horses; the ones left out bid higher. The price gets pushed up.

Try 24. Willing buyers: A1 through A4 — four. Willing sellers: B1 through B7 — seven. Seven horses waiting on four buyers; the ones unsold cut their ask. The price gets pushed down.

Squeezed from both ends, where does it stop? Where **the number willing to buy equals the number willing to sell.** Count it yourself: at any price between 21 and 21.5, the willing buyers are A1–A5 (five) and the willing sellers are B1–B5 (five). Five matches, five horses sold. **The price lands between 21 and 21.5.** Go any higher and A5 drops out, leaving a horse unsold; go any lower and A6 steps in, leaving a buyer empty-handed.

Notice three things about this result.

**First, the price is a band, not a point.** Any number between 21 and 21.5 clears the market. Exactly where it settles depends on bargaining — but the bargaining room is half a dollar, not twenty. The more people, the narrower the band.

**Second, the price is set by four people.** Not the average of eighteen, not “society's valuation,” but the **four people at the margin**: the last buyer who gets a horse, A5 (22); the last seller who parts with one, B5 (20); the first buyer left out, A6 (21); and the first seller left holding his horse, B6 (21.5). Böhm-Bawerk called them the **marginal pairs**. A1 could bid 30 or 300 and the price would not move — he gets a horse either way.

**Third, nobody sets the price.** No auctioneer calls out numbers, no ministry publishes a guide price, nobody knows all eighteen numbers. Each person knows one number — his own — and does one thing: “above this I won't buy / below this I won't sell.” The price **grows** out of those local decisions. This is the first appearance of Hayek's “knowledge problem” from [[hayek-knowledge|Stage 7.2]]: the market has compressed eighteen privately held pieces of information into one figure.

It also answers a question two thousand years old: **is there a “just price”?** The scholastic philosophers argued about it for centuries. The horse market's answer: every price between 21 and 21.5 is a price at which five pairs of people trade voluntarily; none is more “just” than another. And a number that “looks fair” — 18, or 24 — is precisely one at which someone cannot buy or cannot sell.

**In this lesson we break it into five pieces:**

- **① Isolated exchange: one buyer, one seller, and a wide band**
- **② One-sided competition: many buyers chase one horse, and the band narrows**
- **③ Two-sided competition and the marginal pairs: Böhm-Bawerk's horse market**
- **④ The band moves: a new buyer, a changed reservation price, and the disappearance of the “just price”**
- **⑤ Supply and demand curves are shorthand for rankings — and from the horse market to automated market makers**

## @mechanics
### ① Isolated exchange: one buyer, one seller, and a wide band

In Book IV of the *Positive Theory of Capital* — the second volume of *Capital and Interest* (1889) — Böhm-Bawerk builds up from the simplest case: **one buyer, A1 (maximum 30), and one seller, B1 (minimum 10).**

Will they trade? Yes — at any price between 10 and 30 both are better off than not trading: A1 ranks the horse above, say, $20, and B1 ranks $20 above the horse. That is the “reversed ranking” of [[subjective-value|Stage 1.2]]. **But what will the price be? Theory can say only: somewhere between 10 and 30.** Whether it lands at 12 or 28 depends on who is in more of a hurry, who negotiates better, who can better pretend not to care — and economics has nothing further to say about that. This is the zone of price indeterminacy under **bilateral monopoly**, twenty dollars wide.

That tells us something important: **subjective value fixes only the upper and lower limits of a price, not a point.** A price is not computed directly from “value” (that was the labor theory's idea: value = cost, price = value). To narrow the band you need more people — you need **competition**.

### ② One-sided competition: many buyers chase one horse, and the band narrows

Now B1 has one horse, but ten buyers show up: A1 (30), A2 (28), A3 (26) … A10 (15).

Who gets it? The highest bidder, A1. **At what price?** Not 30 — A1 does not need to go to his own limit; he only needs to **outbid the runner-up by a hair.** A2 will pay at most 28, so A1 wins at a shade over 28. The price lands **between 28 and 30**: the floor is set by the buyer squeezed out (A2), the ceiling by the winner's own valuation (A1). **The band has shrunk from 20 to 2.**

Reverse it: one buyer, A1, and eight sellers, B1 (10), B2 (11) … B8 (26). Who sells? The lowest asker, B1. At what price? B1 only needs to **undercut the second-cheapest seller slightly**: the price lands **between 10 and 11.**

The common law of both cases: **the more competitors, and the more tightly they are packed, the narrower the band — and the price is set by the two people at the margin: the one who wins and the one who is squeezed out.** The loser's valuation is not irrelevant; it is precisely what draws the line. This is why the difference between a “monopoly price” and a “competitive price” is not the number of sellers as such but **whether there is a second person at the margin drawing a line under the price** — a thought [[monopoly-question|Stage 6.4]] uses to re-examine the monopoly question.

### ③ Two-sided competition and the marginal pairs: Böhm-Bawerk's horse market

Open both sides — ten buyers, eight sellers — and you have Böhm-Bawerk's famous table:

| Buyer | Max price | Seller | Min price |
|---|---|---|---|
| A1 | 30 | B1 | 10 |
| A2 | 28 | B2 | 11 |
| A3 | 26 | B3 | 15 |
| A4 | 24 | B4 | 17 |
| A5 | 22 | B5 | 20 |
| A6 | 21 | B6 | 21.5 |
| A7 | 20 | B7 | 25 |
| A8 | 18 | B8 | 26 |
| A9 | 17 | | |
| A10 | 15 | | |

There is only one rule: **at the trading price p, the number willing to buy must equal the number willing to sell** (otherwise someone still wants to bid up or cut down, and the price does not stop).

Rank buyers from highest to lowest, sellers from lowest to highest, and match them pair by pair: A1 with B1 (30 vs 10 — they can trade), A2 with B2 (28 vs 11), A3 with B3 (26 vs 15), A4 with B4 (24 vs 17), A5 with B5 (22 vs 20) — **five pairs can all trade.** The sixth pair: A6 with B6 (21 vs 21.5) — the buyer cannot reach the seller's ask; **no match.** So five horses change hands.

Where is the price pinned? It must keep the first five pairs willing and the sixth pair unwilling:

- **Ceiling**: it cannot exceed A5's 22 (or A5 drops out, leaving four buyers), and it cannot exceed B6's 21.5 (or B6 enters, making six sellers). Take the smaller: **21.5**.
- **Floor**: it cannot fall below B5's 20 (or B5 drops out), and it cannot fall below A6's 21 (or A6 enters). Take the larger: **21**.

**The price band: 21 to 21.5.** The four people who draw those lines — **A5 and B5 (the last pair that trades) together with A6 and B6 (the first pair that does not) — are the marginal pairs.** The other fourteen valuations can change however they like without touching the price, so long as they do not cross the margin: change A1's 30 to 300 and the band is still 21 to 21.5.

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Böhm-Bawerk's horse market: step demand and supply, marginal pairs bracket the price</text><line x1="60" y1="270" x2="600" y2="270" stroke="var(--line)" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="270" stroke="var(--line)" stroke-width="1.5"/><text x="330" y="300" text-anchor="middle" font-size="11" fill="var(--muted)">horses traded (n-th pair)</text><text x="24" y="150" text-anchor="middle" font-size="11" fill="var(--muted)" transform="rotate(-90 24 150)">price</text><g fill="var(--muted)" font-size="10"><text x="60" y="284" text-anchor="middle">0</text><text x="114" y="284" text-anchor="middle">1</text><text x="168" y="284" text-anchor="middle">2</text><text x="222" y="284" text-anchor="middle">3</text><text x="276" y="284" text-anchor="middle">4</text><text x="330" y="284" text-anchor="middle">5</text><text x="384" y="284" text-anchor="middle">6</text><text x="438" y="284" text-anchor="middle">7</text><text x="492" y="284" text-anchor="middle">8</text><text x="546" y="284" text-anchor="middle">9</text><text x="600" y="284" text-anchor="middle">10</text></g><g fill="var(--muted)" font-size="10"><text x="52" y="274" text-anchor="end">10</text><text x="52" y="199" text-anchor="end">20</text><text x="52" y="124" text-anchor="end">30</text></g><path d="M60 120 H114 V135 H168 V150 H222 V165 H276 V180 H330 V187.5 H384 V195 H438 V210 H492 V217.5 H546 V232.5 H600" fill="none" stroke="var(--blue)" stroke-width="2.5"/><path d="M60 270 H114 V262.5 H168 V232.5 H222 V217.5 H276 V195 H330 V183.75 H384 V157.5 H438 V150 H492" fill="none" stroke="var(--orange)" stroke-width="2.5"/><rect x="330" y="183.75" width="54" height="3.75" fill="var(--red)" opacity=".9"/><line x1="330" y1="40" x2="330" y2="270" stroke="var(--red)" stroke-width="1" stroke-dasharray="4 3"/><circle cx="303" cy="180" r="4" fill="var(--blue)"/><text x="296" y="174" text-anchor="end" font-size="10" fill="var(--blue)">A5 = 22</text><circle cx="303" cy="195" r="4" fill="var(--orange)"/><text x="296" y="207" text-anchor="end" font-size="10" fill="var(--orange-ink)">B5 = 20</text><circle cx="357" cy="187.5" r="4" fill="var(--blue)"/><text x="364" y="201" font-size="10" fill="var(--blue)">A6 = 21</text><circle cx="357" cy="183.75" r="4" fill="var(--orange)"/><text x="364" y="177" font-size="10" fill="var(--orange-ink)">B6 = 21.5</text><text x="345" y="56" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">price band 21 – 21.5 · 5 horses traded</text><text x="560" y="128" text-anchor="end" font-size="11" fill="var(--blue)" font-weight="600">demand steps (buyers' maxima, high to low)</text><text x="470" y="255" font-size="11" fill="var(--orange-ink)" font-weight="600">supply steps (sellers' minima, low to high)</text></svg><figcaption>The blue staircase is the ten buyers' maxima ranked high to low; the gold staircase is the eight sellers' minima ranked low to high. The fifth pair matches, the sixth does not; the four marginal valuations (22, 20, 21, 21.5) pin the price between 21 and 21.5.</figcaption></figure>

Nothing in this picture is a “curve” that exists physically — it is just eighteen numbers from eighteen heads laid out in order. **Every step of the staircase is a person.** That point becomes important in ⑤.

A common follow-up: **what if two marginal valuations happen to coincide?** Suppose A6's maximum were 21.5 instead of 21 — exactly B6's minimum. Then the floor rises to 21.5 while the ceiling stays at 21.5, and the band collapses to a point. So the textbook's “unique equilibrium price” is not a different mechanism; it is the special case in which the band's width happens to be zero. The more participants and the more densely packed their valuations, the closer the band gets to a point — but the mechanism never changes: **people at the margin are drawing the lines.**

### ④ The band moves: a new buyer, a changed reservation price, and the disappearance of the “just price”

The most useful thing about the marginal-pairs framework is that it tells you **what moves the price and what does not.**

**A new buyer A0 arrives with a maximum of 23.** Re-rank the buyers: 30, 28, 26, 24, 23, 22, 21, 20, 18, 17, 15. Match: the fifth pair is now A0 (23) with B5 (20) — trades; the sixth is A5 (22) with B6 (21.5) — also trades; the seventh is A6 (21) with B7 (25) — no. **Six horses trade, and the band becomes 21.5 to 22.** One person bidding 23 walks in, one more horse changes hands, the band shifts up by half a dollar — and A0 himself pays far less than his 23.

**B5 raises his ask from 20 to 23.** Sellers become 10, 11, 15, 17, 21.5, 23, 25, 26. Fifth pair: A5 (22) with B6 (21.5) — trades; sixth: A6 (21) with B5 (23) — no. **Still five horses, but the band becomes 21.5 to 22.** A marginal seller raising his price: quantity unchanged, price up.

**A1 raises his bid from 30 to 100.** Nothing changes. He was always going to get a horse; his valuation is not at the margin.

The three experiments say: **the price is exquisitely sensitive to changes at the margin and completely numb to changes away from it.** That is why “what most people think” does not set the price; “what the few people at the margin think” does — and the people at the margin rotate: today you are A1, tomorrow you may be A6.

Now return to the scholastics' **“just price”** (justum pretium). Thomas Aquinas and, especially, the sixteenth-century Spanish scholastics of the School of Salamanca (Luis de Molina among them) came close to the right answer — they argued the just price was simply the price prevailing in the market in the absence of fraud or coercion, a view often counted as a forerunner of Austrian subjectivism. The horse market makes the insight exact: **every price between 21 and 21.5 is one at which five pairs of people trade voluntarily.** None is more “just” than another; and any “fair price” pinned outside the band by outside force — say, “a horse should cost 18” — leaves eight people wanting to buy, four willing to sell, and four buyers going home empty-handed (you will see this picture again in [[price-controls|Stage 8.2]] on price controls).

One hidden character needs to be named: **there is no auctioneer.** To make the mathematics of general equilibrium work, Walras imagined an “auctioneer” who calls out a price, collects everyone's quantities, and re-calls if they do not match (tâtonnement — groping). The horse market has no such person. **Each participant knows one number, reacts only to the offers in front of him, and the price grows anyway.** This is the concrete shape of the “equilibrium versus process” dispute of [[vs-math-models|Stage 2.4]], and the seed of [[competition-process|Stage 6.2]]'s “competition as a discovery procedure”: the market does not “know” that the price is 21; eighteen people, probing one another, **discover** an answer none of them knew.

### ⑤ Supply and demand curves are shorthand for rankings — and from the horse market to automated market makers

The two smooth curves in the textbook are the staircase of ③ with more people on it. Ten buyers make ten steps; ten thousand make steps too fine for the eye, and you see a curve. So keep three things in mind:

- **Every point on the curve is a person (or one unit of a person's demand).** “Demand slopes downward” is not an experimental law; it is the inevitable result of ranking valuations from high to low — [[diamonds-water|Stage 1.1]] derived it from the logic of action.
- **The curve is a snapshot of a moment.** It consists of eighteen people's rankings right now; anyone changing their mind changes the curve. A “shift in demand” is not a mysterious macro event; it is people revising their numbers.
- **Curves do not set prices; people do.** The curve is a sketch we draw afterward to help ourselves think. When A5 haggles with B6, there is no curve in either head.

This way of seeing runs all the way through the course. In [[exchange-division|Stage 1.5]] on exchange and the division of labor you will see that every trade is a pair of reversed rankings, and that more trades mean deeper specialization. In [[free-banking|Stage 9.4]] on free banking and [[platforms-winner|Stage 15.2]] on platform competition, “is there a second person at the margin drawing a line under the price?” becomes the real test of “monopoly.” And in [[defi-code-order|Stage 17.4]] you will meet an instructive contrast: the **automated market makers** (AMMs) of decentralized exchanges quote prices by formula (for instance, “the product of the two token inventories stays constant”) — a price-formation rule written into code. But note how it differs from the horse market: the AMM **knows nobody's valuation**; it quotes mechanically from inventory. What actually brings the outside world's rankings into it are the traders who see its quote drift from other markets and step in to arbitrage — they are the machine's A5 and B6. **Without people at the margin, any pricing formula is a calculator that does not know what it is computing.** [[agent-economies|Stage 18.6]] on algorithmic pricing returns to that principle.

The lesson in one sentence: **prices are not computed; they are pinned by the people at the margin. The curve is the sketch drawn afterward; the marginal pairs are the mechanism.**

## @analogy
Think of the horse market as **a theater with only two rows of seats, facing each other.**

The left row seats the buyers, ordered front to back by “the most I'll pay”: front seat 30, then 28, 26 … back seat 15. The right row seats the sellers, ordered by “the least I'll take”: front seat 10, then 11, 15 … back seat 26.

Now look down the rows one pair of seats at a time. Left seat 1 will pay more than right seat 1 asks — that pair can shake hands. Pairs 2, 3, 4 and 5 can shake hands too. Pair 6: the left seat will pay only 21, the right seat wants 21.5 — hands reach out and stop half a dollar apart. **From that pair backward, everyone goes home.**

So what is the price? It must let the first five pairs shake and stop the sixth. So it is pinned by **the two people in row 5** and **the two in row 6**: no higher than the row-5 buyer's 22 or the row-6 seller's 21.5; no lower than the row-5 seller's 20 or the row-6 buyer's 21. **Between 21 and 21.5.** The front rows can be as rich as they like and the back rows as poor as they like — nothing moves the number. Only when the people sitting in rows 5 and 6 change does the price change.

This theater has no host. Nobody announces “the price is now 21.” Each person looks only at the seats around him and makes one motion — shake or don't — and the price appears. **Every time you see a market price from here on — a house price, a wage, Bitcoin in dollars — ask yourself: who is sitting in rows 5 and 6 right now?**

## @misconceptions
- **“The market price is the average of everyone's valuation.”** — No. The price is pinned by four people at the margin: the last pair that trades and the first that does not. Change A1's bid from 30 to 300 and the price does not move. “What most people think” does not set the price; “what the people at the margin think” does.
- **“Supply and demand curves are real objects in the market, and the price is set where they cross.”** — The curves are sketches drawn by laying every person's valuation out in order; every point is a person. People set the price; the curve describes it afterward. When A5 haggles with B6 there is no curve in either head.
- **“The price is an exact point computed from supply and demand.”** — With a finite number of people the price is a band (21 to 21.5 in the horse market), and where it lands inside the band depends on bargaining; more participants narrow the band. Economics can determine the band, not the point.
- **“There is a ‘just price,’ and a market price that departs from it is unjust.”** — Every price inside the band is one at which five pairs trade voluntarily; none is more just than another. A “fair price” pinned outside the band by force is exactly what leaves someone unable to buy or sell. The School of Salamanca already saw that the just price is the market price absent fraud and coercion.
- **“Without a central price-setter (an auctioneer, an exchange, an algorithm) prices cannot form.”** — Nobody in the horse market calls out prices and nobody knows all eighteen numbers, yet the price forms. Walras's auctioneer is a mathematical fiction. Pricing formulas like AMMs are calculators; the people who bring real valuations into them are still the arbitrageurs at the margin.

## @quiz
1. In Böhm-Bawerk's horse market (10 buyers, 8 sellers, numbers as in the lesson), which four people are the “marginal pairs” that draw the lines around the price?
   - [ ] A1, A10, B1, B8 — the extreme values
   - [x] A5 and B5 (the last pair that trades) with A6 and B6 (the first pair that does not)
   - [ ] The four people whose valuations are closest to the average
   - [ ] All the buyers and sellers who trade
   > Ceiling = min(A5's 22, B6's 21.5) = 21.5; floor = max(B5's 20, A6's 21) = 21. The price is pinned between 21 and 21.5 by those four marginal traders; everyone else's valuation is irrelevant as long as it does not cross the margin.

2. A1 raises his maximum bid from 30 to 100. What happens to the market price?
   - [ ] It rises a lot, because the highest bid rose
   - [ ] It rises a little, because the average bid rose
   - [x] Nothing — A1 was always going to get a horse; he is not at the margin
   - [ ] It falls, because other buyers are scared off
   > The price is sensitive only to changes at the margin. A1 is in the first pair, far above the margin; whatever he bids, the fifth and sixth pairs match exactly as before.

3. A new buyer A0 with a maximum of 23 enters the horse market. What happens to quantity and to the price band?
   - [ ] Quantity unchanged, band unchanged
   - [x] Six horses trade, and the band moves up to 21.5–22
   - [ ] Four horses trade, and the price falls
   - [ ] Six horses trade, and the price is fixed at 23
   > After re-ranking, the sixth pair is A5 (22) with B6 (21.5), which trades; the seventh, A6 (21) with B7 (25), does not. Ceiling = min(22, 25) = 22, floor = max(21, 21.5) = 21.5. A0 himself pays about 22, well under his 23.

4. Why do Austrians stress that the horse market has “no auctioneer”?
   - [ ] Because auctioneers charge fees
   - [x] Because each person knows only his own valuation and reacts only to the offers he sees, yet the price forms anyway — the market is a discovery process needing no central coordinator
   - [ ] Because Böhm-Bawerk opposed auctions
   - [ ] Because auctioneers cause monopoly
   > Walras's auctioneer is a fiction adopted to make general-equilibrium mathematics work. In a real market the price grows out of dispersed local decisions — the seed of [[hayek-knowledge|Stage 7.2]]'s knowledge problem and [[competition-process|Stage 6.2]]'s discovery procedure.

5. An automated market maker (AMM) on a decentralized exchange quotes prices by formula. In this lesson's framework, what is its crucial difference from the horse market?
   - [ ] The AMM is more precise and therefore needs no marginal traders
   - [x] The AMM knows nobody's valuation and quotes mechanically from inventory; the arbitrageurs who step in bring the real rankings — they are its marginal pairs
   - [ ] The AMM's price is the just price
   - [ ] The AMM proves prices can exist without subjective value
   > A pricing formula is a rule written in code, not a source of valuations. Without people at the margin, any formula is a calculator that does not know what it is computing — [[defi-code-order|Stage 17.4]] develops this.

## @further
- [Böhm-Bawerk, Capital and Interest, Vol. II: Positive Theory of Capital (1889), Book IV “Price” — the horse market and the marginal pairs in the original (Mises Institute)](https://mises.org/library/book/capital-and-interest-three-volumes)
- [Rothbard, Man, Economy, and State, Ch. 2 “Direct Exchange” — the modern Austrian derivation of market price from marginal pairs](https://mises.org/library/book/man-economy-and-state-power-and-market)
- [Mises, Human Action, Ch. XVI “Prices” — the price-formation process and the “final price” as a thought tool](https://mises.org/library/book/human-action)
- [Econlib Encyclopedia: Supply — the mainstream presentation of supply and demand curves, for comparison with the staircase](https://www.econlib.org/library/Enc/Supply.html)
- [Econlib Encyclopedia: Austrian School of Economics — a concise overview of price formation and the market process](https://www.econlib.org/library/Enc/AustrianSchoolofEconomics.html)
