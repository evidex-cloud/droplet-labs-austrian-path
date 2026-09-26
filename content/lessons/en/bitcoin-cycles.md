---
id: bitcoin-cycles
prereqs: abct-one-picture, fractional-reserve, bitcoin-regression
demo: btc-fractional
---

# Would There Be Business Cycles under a Bitcoin Standard?

## @hook
Bitcoin supporters often say: fix the supply, abolish the central bank, and the business cycle disappears. The Austrians' own theory says: **no.** The cycle engine of [[abct-one-picture|Stage 5.1]] is not “the monetary base is growing” but “credit expansion pushes the interest rate below time preference” — and credit expansion needs only a custodian willing to lend out depositors' coins. In 2022 Celsius, BlockFi and FTX proved it within months: on top of a money with perfectly fixed supply, fractional reserves, maturity mismatch and bank runs grew all the same. But Austrian theory says the other half too: **where there is no lender of last resort, runs come fast and liquidate cleanly, and cycles are shorter and smaller** — a testable claim. This lesson uses five tools at once — ABCT (5.1), fractional reserves (4.4), free banking (9.4), reflexivity (16.5) and state finance (8.4) — to answer the question in the title. (Nothing here is investment advice.)

## @intuition
Bring back the picture from [[abct-one-picture|Stage 5.1]]. The cycle begins like this: the banking system creates loanable funds that are nobody's saving; the market rate is pushed below the natural rate; entrepreneurs see the low rate, infer that society has become more patient, and launch longer, more roundabout projects; but real saving has not risen and consumers still want to consume now; resources are pulled in two directions, projects run out of materials and money halfway, malinvestments are exposed, and the bust liquidates them. **The engine is credit expansion, not money printing as such.** A central bank makes credit expansion easier, longer and larger, but it is not a necessary condition — [[fractional-reserve|Stage 4.4]] showed that the United States before 1913 had no central bank and had fractional reserves and cycles all the same.

Now suppose the world switched to Bitcoin as its money. Twenty-one million coins; nobody can issue one more. **Has the cycle vanished?** Ask yourself one question: where is your bitcoin kept? If in your own wallet — good, you hold base money. If on an exchange or a “yield platform” — you hold **a claim on that institution**, a note saying “pay the bearer 1 BTC.” How much actual bitcoin that institution holds, only it knows.

2022 was exactly that experiment. A platform called Celsius paid double-digit “yields” on deposited bitcoin and stablecoins — where did the money come from? It lent depositors' coins to hedge funds, put them into DeFi, pledged and re-pledged them (“rehypothecation”). Depositors thought they held coins; they held fractional-reserve notes. In June, markets fell, depositors tried to withdraw, and Celsius found it could not pay — it **suspended withdrawals**, and filed for bankruptcy a month later with a shortfall of over a billion dollars. In November FTX, the world's second-largest exchange, collapsed: it had diverted customer deposits to its affiliated hedge fund, Alameda, with a hole of about $8 billion. From Celsius to FTX took five months, with Voyager, Three Arrows Capital and BlockFi falling in between.

The Austrian reading of that experiment has two halves, and both must be said.

**First half: ABCT did not disappear.** What those platforms did is the fractional-reserve banking of [[fractional-reserve|Stage 4.4]] — take in 100 coins, keep 20, lend 80, and promise depositors “withdraw any time.” They created “paper bitcoin”: claims on bitcoin circulating in excess of the bitcoin that existed. Those claims depressed rates in the bitcoin lending market (borrowing rates were at times extraordinarily low in 2021) and fuelled leverage and malinvestment (for example, cheap borrowed money chasing the GBTC premium arbitrage, which is how Three Arrows Capital died). **A credit pyramid can be built on a base money of fixed supply.** The hard-money case ([[hard-money|Stage 17.2]]) did not tell you that.

**Second half: but the cycle was astonishingly short.** The 2008 credit cycle took six months from Bear Stearns to Lehman, followed by a decade of zero rates and trillions in bailouts; the 2022 crypto credit cycle took five months from Celsius to FTX, followed by — **no bailout.** No central bank supplied liquidity to Celsius, no deposit insurance covered FTX's customers, bad institutions went straight into bankruptcy, and the losses fell on creditors, not taxpayers. By early 2023 the deleveraging was complete and the survivors (self-custodians, fully reserved custodians) were untouched. That is precisely the core prediction of the free-banking wing in [[free-banking|Stage 9.4]]: **without a lender of last resort, runs are discipline; fractional-reserve institutions are liquidated by the market at top speed, and cycles are therefore shorter and smaller.** The 100%-reserve reading is not wrong either: those institutions should never have lent depositors' coins in the first place.

So the answer to the title question is: **there would be cycles, but different cycles** — shorter, smaller, with the cost borne by participants rather than society. It is an Austrian claim history can test, and we will say honestly how strong the evidence is and how weak.

Three more matters to handle: **paper bitcoin** (how ETFs, futures and exchange IOUs relate to the base layer); **Bitcoin's own four-year cycle** — halving-driven, credit-driven or narrative-driven? Austrians say look at the credit side; and **the state**: if a government cannot print, how does it fight wars and fill deficits ([[economics-of-state|Stage 8.4]])?

**In this lesson we break it into six pieces:**

- **① What ABCT needs: is a fixed monetary base enough?**
- **② The 2022 experiment: Celsius, BlockFi, FTX — fractional reserves on a fixed supply**
- **③ Paper bitcoin: exchange IOUs, ETFs, futures — the claims layer and the base layer**
- **④ No lender of last resort: runs as discipline, shorter and smaller cycles — a testable claim**
- **⑤ Bitcoin's own four-year cycle: halvings, credit, or narrative?**
- **⑥ What about the state: war, deficits and a Bitcoin standard**

## @mechanics
### ① What ABCT needs: is a fixed monetary base enough?

Break the mechanism of [[abct-one-picture|Stage 5.1]] into four necessary links and ask of each: “does it still exist under a Bitcoin standard?”

1. **Loanable funds that do not come from real saving.** Someone must be able to create claims on money without holding the corresponding money. Under a Bitcoin standard — as long as a custodian is willing to lend depositors' coins while promising withdrawal on demand, this link exists. **Present.**
2. **The market rate pushed below the natural rate.** Conjured loanable funds enter the loan market and the rate falls. A bitcoin loan market genuinely exists (borrowing coins to short, to arbitrage, borrowing stablecoins for leverage), and in 2021 its rates were indeed pushed very low by the flood of money from “yield platforms.” **Present.**
3. **Entrepreneurs launch more roundabout projects on that basis.** In crypto, the “roundabout projects” are mining expansions, leveraged positions, GBTC-premium arbitrage, new protocols' token launches — all viable only if cheap borrowing continues. **Present.**
4. **Real saving proves insufficient and projects are exposed midway.** Rates rose (Fed hikes in 2022 plus the crypto credit contraction), projects failed. **Present.**

All four links present. **ABCT never depended on a central bank or on base-money growth; it depends on credit expansion — money substitutes exceeding money.** Mises, in *The Theory of Money and Credit*, called such excess substitutes “fiduciary media,” and stated plainly that the cycle theory is a theory of fiduciary media. Bitcoin eliminates issuance at the base layer, not expansion at the substitutes layer.

One real difference must be noted: **the growth rate of the base determines the cycle's “fuel ceiling.”** Under fiat, the central bank can keep topping up reserves so that credit expansion runs for years (as in 2009–2021); under a Bitcoin standard, reserves cannot be topped up, and a custodian's expansion is limited by the real deposits it can attract and the market's confidence in its notes. That does not abolish the cycle, but it compresses its **scale and duration** — the subject of block ④.

<figure><svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Fixed base layer, variable claims layer: the “paper bitcoin” pyramid (illustrative)</text><polygon points="320,50 120,250 520,250" fill="var(--surface-2)" stroke="var(--line)"/><rect x="220" y="200" width="200" height="50" fill="var(--orange)" opacity=".9"/><text x="320" y="230" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Base layer: on-chain BTC (fixed ≤ 21M)</text><rect x="245" y="150" width="150" height="48" fill="var(--blue)" opacity=".75"/><text x="320" y="170" text-anchor="middle" font-size="10" font-weight="600" fill="#fff">Full-reserve custody / ETFs</text><text x="320" y="185" text-anchor="middle" font-size="9" fill="#fff">1 claim : 1 BTC</text><rect x="270" y="100" width="100" height="48" fill="var(--red)" opacity=".8"/><text x="320" y="118" text-anchor="middle" font-size="10" font-weight="600" fill="#fff">Fractional custody</text><text x="320" y="133" text-anchor="middle" font-size="9" fill="#fff">1 claim : 0.2 BTC</text><rect x="290" y="62" width="60" height="36" fill="var(--red)" opacity=".5"/><text x="320" y="84" text-anchor="middle" font-size="9" fill="var(--ink)">rehypothecation</text><g font-size="10" fill="var(--muted)"><text x="530" y="225">← cannot grow</text><text x="530" y="175">← no excess claims</text><text x="530" y="125" fill="var(--red)">← credit expansion here</text><text x="530" y="82" fill="var(--red)">← one coin promised to many</text></g><g font-size="10" fill="var(--muted)"><text x="60" y="125">Celsius · BlockFi</text><text x="60" y="140">FTX · Mt. Gox</text><text x="60" y="175">Kraken proof of reserves</text><text x="60" y="190">Spot ETF custody</text><text x="60" y="225">Self-custody</text></g><line x1="120" y1="280" x2="520" y2="280" stroke="var(--line)"/><text x="320" y="298" text-anchor="middle" font-size="10.5" fill="var(--orange-ink)" font-weight="600">The cycle lives in the red layers: in a run they shrink while the orange base does not move — losses fall on creditors, not taxpayers</text></svg><figcaption>Bitcoin fixes the base of the pyramid, not its height. Every layer of fractional claims is a fiduciary medium in the sense of Stage 4.4; the 2022 collapses were a contraction of the red layers.</figcaption></figure>

### ② The 2022 experiment: Celsius, BlockFi, FTX — fractional reserves on a fixed supply

In chronological order, stated plainly.

**May: the Terra collapse** ([[defi-code-order|Stage 17.4]]). About $40 billion evaporated, and several institutions were exposed to UST and LUNA. It was the fuse, not the cause.

**June: Three Arrows Capital and Celsius.** Three Arrows was a crypto hedge fund making leveraged bets with cheap money borrowed from a dozen platforms (including the GBTC-premium arbitrage, a position that bled continuously after the premium turned into a discount in 2021). After Terra it could not meet margin calls and was liquidated in mid-June, owing creditors about $3.5 billion. Among its creditors were Celsius, Voyager and BlockFi — **the same funds had been lent several times down a chain**, what traditional finance calls rehypothecation. On 12 June Celsius announced it was “pausing withdrawals due to extreme market conditions.” On 13 July it filed for bankruptcy; court filings showed about $4.7 billion in liabilities and a roughly $1.2 billion hole. Its business model was: pay depositors high yields, use their coins for higher-yielding (and riskier) activities, and promise withdrawal on demand — **maturity mismatch + fractional reserves + risky assets**, all three ailments of [[fractional-reserve|Stage 4.4]]. Its chief executive later pleaded guilty to fraud.

**July: Voyager** filed for bankruptcy, with about $650 million exposed to Three Arrows.

**November: FTX.** In early November a leaked balance sheet showed that Alameda, FTX's affiliated hedge fund, held much of its assets in FTT, a token FTX had issued itself — the same structure as Terra holding LUNA as reserves: **equity as reserve.** A competitor announced it would sell its FTT, and the run began. FTX suspended withdrawals on 8 November and filed for bankruptcy on 11 November. It later emerged that customer funds deposited at the exchange had been passed to Alameda to use, with a hole of about $8 billion. That was not fractional reserve — it was **misappropriation** (FTX's terms of service promised that customer assets were owned by customers and not lent). Its founder was convicted in 2023. **BlockFi**, exposed to FTX/Alameda, filed on 28 November.

**The Austrian reading, item by item:**

- These institutions were fractional-reserve banks in the sense of [[fractional-reserve|Stage 4.4]] (Celsius, BlockFi) or outright misappropriators (FTX). The “paper bitcoin” they issued was Mises's fiduciary media.
- Their expansion depressed crypto lending rates and fed roundabout positions of the Three Arrows type that “survive only on cheap borrowing” — the malinvestment of [[boom-malinvestment|Stage 5.2]].
- Rising rates (the Fed from March 2022) and a reversal of confidence exposed the malinvestments — the liquidation of [[bust-liquidation|Stage 5.3]].
- **No lender of last resort.** Nobody supplied Celsius with liquidity; nobody backstopped FTX's customers. Liquidation was complete within months.
- Afterwards the industry came under pressure to publish **proof of reserves**: several exchanges disclosed on-chain holdings for users to verify. It has limits (it proves assets, not liabilities), but it is the embryo of the “clearinghouse constraint” of the free-banking system in [[free-banking|Stage 9.4]] — the market invented its own audit without a regulator.

One complication must be stated honestly: the 2022 crypto credit contraction **coincided** with the Fed's tightening cycle. So you cannot cleanly call it “a cycle under a pure Bitcoin standard” — it was a sub-cycle parasitic on the fiat cycle. Block ⑤ returns to this.

### ③ Paper bitcoin: exchange IOUs, ETFs, futures — the claims layer and the base layer

“Paper bitcoin” is not a slur; it is just the Bitcoin version of the “money substitutes” of [[fractional-reserve|Stage 4.4]]. Three kinds, of different hardness:

**Exchange balances.** The 1 BTC you see in an exchange account is a database entry, not a coin on the chain. Whether the exchange is fully reserved or fractional depends on its honesty and its terms of service. Mt. Gox (collapsed 2014, about 850,000 coins lost) and FTX showed the extremes. Proof of reserves is a partial answer.

**Spot ETFs.** The spot ETFs approved in the US in January 2024 are required to hold real bitcoin with a custodian (mainly Coinbase) and may not lend it. **From a reserve standpoint, an ETF is a 100% warehouse** — harder than most exchanges. What it brings is not credit expansion but something else: **holders cannot withdraw coins.** You hold fund shares, convertible to dollars, not to on-chain bitcoin. That converts part of Bitcoin's demand into “dollar-denominated exposure demand,” strengthening the “monetary asset” character of [[bitcoin-regression|Stage 17.1]] and weakening the “money” character.

**Futures and perpetuals.** CME bitcoin futures (since 2017) settle in dollars and involve no bitcoin at all; crypto exchanges' perpetual contracts allow leverage of tens of times. These are not claims on bitcoin but bets on its **price.** They create no paper bitcoin, but they were the main battlefield of 2021's leverage and 2022's liquidations — the financial-market reflexivity of [[markets-bubbles|Stage 10.3]], amplified.

**A key observation:** the fixity of the base layer cannot prevent the claims layer from inflating, but it makes that inflation **visible.** How many coins exist on-chain is public; when a custodian claims to hold a certain number, anyone can demand a signed proof. Gold cannot do that (you cannot remotely verify the bars in a bank vault), and fiat cannot (reserve figures are published by the central bank). **Auditability is the most substantive constraint a Bitcoin standard places on fractional reserves** — it does not forbid them, but it makes concealment hard. That is the technical basis of block ④.

### ④ No lender of last resort: runs as discipline, shorter and smaller cycles — a testable claim

[[free-banking|Stage 9.4]] set out the free bankers' core argument: in a competitive banking system without a central bank, an over-issuing bank is presented for redemption at the **clearinghouse** by rival banks and forced to contract; a run is a punishment for imprudence, not a systemic catastrophe — Scotland in 1716–1845 and Canada in the 1930s (no central bank, not a single bank failure) are the evidence. The 100% camp replies: better still not to permit fractional reserves at all.

Carry both camps over to a Bitcoin standard and you get a **testable prediction**:

- **No lender of last resort** means a custodian knows nobody will save it, and so (free bankers) restrains its reserve ratio, or (100% camp) is pushed by the market toward full reserves — the spread of proof of reserves after 2022, and custodians such as Coinbase stressing that they do not lend client assets, are signs of that pressure.
- **Reserves cannot be topped up**, so the ceiling on credit expansion is real deposits, not a central bank's will; expansion is short-lived.
- **Runs come fast** (withdrawal is on-chain, global, 24/7), so bad institutions are exposed fast and liquidated fast; losses fall on creditors and are not shifted to society through bailouts (the reverse of the Cantillon effect of [[cantillon-inflation|Stage 4.3]]).
- **Conclusion: cycles would be shorter, smaller, and not “socialized.”**

**How strong is the evidence?** In favor: the 2022 crypto deleveraging completed in about six months without bailouts, and the industry restarted in 2023 with far greater reserve transparency; compared with the decade of zero rates and trillions in rescues after 2008, the difference in scale and duration is an order of magnitude. Against, or complicating: (a) the 2022 contraction coincided with Fed hikes, so it was not an isolated experiment; (b) the crypto credit market is small and did not transmit to the real economy, so “no bailout” may simply mean “not worth bailing out” — if a custodian under a Bitcoin standard grew large enough to affect the real economy, would political pressure not produce a de facto lender of last resort? (That, historically, is how central banks were born — [[central-banks-fiat|Stage 4.5]].) (c) The free-banking vs 100% split replays intact on Bitcoin: fully reserved custodians (Coinbase's custody business, ETFs) coexist with fractional ones (yield platforms), and the market has not chosen the former decisively — as long as someone will bear run risk for an 8% yield, fractional reserves will exist.

**Where Lightning fits.** It is often misdescribed as “Bitcoin's fractional-reserve layer.” It is not. Lightning is a **payment rail**: two parties lock coins in a multi-signature address, update balances between themselves off-chain, and settle on-chain once at the end. Every off-chain payment is **fully** backed by coins locked on-chain — a 100%-reserve payment network that creates no excess claims. It addresses the “Bitcoin payments are slow and expensive” problem of [[bitcoin-regression|Stage 17.1]], not credit. By 2024 public channels held only a few thousand coins; it remains small. **Credit expansion comes from custodians, not from Lightning.**

So the honest conclusion of this block: **Austrian theory predicts shorter and smaller cycles under a Bitcoin standard; the 2022 evidence is consistent with the prediction but insufficient to confirm it on its own. The real test comes when some custodian grows systemically important and society must resist rescuing it.**

### ⑤ Bitcoin's own four-year cycle: halvings, credit, or narrative?

Bitcoin's price has a widely discussed rhythm of roughly four years: peaks in late 2013, late 2017 and late 2021, each followed by a 75–85% decline and then a new high. Three explanations:

**Halving-driven (the hard-money version).** Each halving (2012, 2016, 2020, 2024) is followed by a peak some 12–18 months later, because new supply halves, demand is unchanged, and the price rises. Problems: the halving is fully anticipated ([[hard-money|Stage 17.2]], block ②), so a rational market should price it in advance; and with only three or four observations, any four-year rhythm can be fitted.

**Credit-driven (the Austrian version).** Look at rates and leverage: the 2013 peak came in the fifth year of US zero rates; the 2017 peak matched global liquidity easing and the ICO boom (a form of credit creation through token issuance); the 2021 peak matched zero rates since March 2020, trillions in fiscal transfers, and the fractional-reserve expansion of crypto yield platforms; the 2022 crash matched Fed hikes and the Celsius/FTX credit contraction; the 2024–25 highs matched expectations of rate cuts and the institutional money opened by ETFs. **Bitcoin's cycle is highly synchronized with the fiat credit cycle** — in 2022 its correlation with the Nasdaq was at times very high. The Austrian reading: Bitcoin today is a **risk asset**, and its price cycle is mainly a reflection of the fiat credit cycle, amplified by its own internal credit pyramid (block ②). Halvings may matter at the margin; credit is the main theme.

**Narrative-driven (the [[memes-reflexivity|Stage 16.5]] version).** “Digital gold,” “institutions are coming,” “supercycle” — every rise carries a narrative; the narrative attracts money, money lifts price, price confirms narrative, until an event (Mt. Gox, Terra, FTX) breaks it. That is reflexivity, and it does not contradict the credit story: **credit supplies the fuel; narrative supplies the direction.**

The Austrian position: of the three, **the credit side is the one you must look at first**, because it is the only explanation with a causal mechanism (rate → time structure → malinvestment → liquidation) rather than a mere correlation; the halving is a known supply parameter and the narrative an amplifier. And an honest Austrian adds: if Bitcoin really became the standard money, it would no longer have a “dollar price cycle” — its cycles would then take the form described in block ④, not the form of a candlestick chart.

### ⑥ What about the state: war, deficits and a Bitcoin standard

[[economics-of-state|Stage 8.4]] covered the state's three routes to finance: taxation, borrowing, and money creation. The third — the central bank creating money substitutes to buy government bonds — was the principal funding source of twentieth-century wars and welfare-state expansion. Rothbard, in *What Has Government Done to Our Money?*, noted that countries abandoned the gold standard precisely to finance the First World War. Ammous, in *The Bitcoin Standard*, pushes the line to its limit: hard money makes war expensive and therefore rarer.

Under a Bitcoin standard the third route closes: **with no issuer, nobody can create new base money for the government.** It is the hard-money case's strongest political argument, and it holds logically. Three qualifications:

1. **The second route (borrowing) remains.** Governments can still issue debt, but at market rates and out of real saving. Wars can still be fought, but every expenditure shows up immediately in rates and taxes — citizens can “see” the price of war. [[opportunity-cost|Stage 1.4]]'s “unseen” becomes seen.
2. **Under the gold standard, governments' historic move was “suspension.”** Britain in 1797–1821, the US during the Civil War, nearly every belligerent in 1914 suspended gold convertibility. Under a Bitcoin standard **there is no convertibility to suspend** — the protocol does not recognize a treasury. But governments can do something else: **seize custodians.** Executive Order 6102 of 1933 required Americans to surrender gold, and it worked because the gold was in banks. Under a Bitcoin standard, if most coins sit in ETFs and exchanges (block ③), the same move is technically feasible; if most are self-custodied, it is not. **Bitcoin's constraint on state finance depends on the custody structure, not only on the number 21 million.**
3. **The “socialization” of the cycle disappears, but its political consequences do not.** A government that cannot bail out faces voters amid a wave of failures. Historically that was exactly the political impetus for founding central banks ([[central-banks-fiat|Stage 4.5]]). Whether a Bitcoin standard can sustain “no lender of last resort” in the long run is a political question, not a technical one.

**The honest conclusion of the lesson:**

- A Bitcoin standard would **not** abolish the business cycle: ABCT's engine is credit expansion, and custodians can manufacture it on a fixed base — 2022 already demonstrated it.
- It **would** change the cycle's shape: no lender of last resort, no reserve top-ups, on-chain auditability — shorter, smaller, with losses borne by participants. That is the Austrian testable claim; the evidence is consistent with it but not yet sufficient.
- The 100%-reserve vs free-banking debate replays intact on Bitcoin; Lightning is a payment rail, not a credit layer.
- Bitcoin's current price cycle is mainly a reflection of the fiat credit cycle, amplified by its own credit pyramid; Austrians look at the credit side first.
- The state loses the printing route but keeps borrowing and the seizure of custodians; the strength of the constraint depends on custody structure.

[[ai-bubble-abct|Stage 18.5]] applies exactly the same method — find the credit side, find the maturity mismatch, find the malinvestment — to the AI capital-spending frenzy. This lesson and all of [[bitcoin-regression|Stage 17]] are not investment advice.

## @analogy
Imagine an island with exactly 2,100 gold coins, and everyone knows there will never be one more. The hard-money case says: this island cannot have a cycle.

But the islanders do not like burying coins in the garden. They deposit them at a few **custody houses** in exchange for a receipt saying “pay the bearer 1 coin,” and trade with the receipts. House A keeps one coin for every receipt and charges a storage fee. House B notices that only two in ten coins are ever withdrawn at once, so it lends eight of every ten to people who want to build new fishing boats, and even pays depositors interest — depositors are pleased, fishermen are pleased. The “receipts” circulating on the island come to three times the 2,100 coins. More and more boats get built, because borrowing coins is so cheap.

**That is how the cycle begins.** Not one coin more exists, but the island's “lendable coins” have tripled — the interest rate is lying, saying the islanders have become more patient and more willing to wait for boats to be finished. They have not. One day the catch disappoints, a depositor goes to B for his coins, B cannot produce them, word spreads, everyone goes — B shuts.

Up to here the story is identical to [[abct-one-picture|Stage 5.1]]. **What differs is what comes next.** The island has no “central custody house” that can print new receipts and lend them to B. B simply fails; its depositors share what coins remain pro rata; the boats it financed are sold at a discount; A's depositors lose nothing. A month later the island's receipts are back to about 2,100 and the interest rate is back to its true level. Nobody was “rescued”; nobody paid for B's depositors. Next time, depositors will ask a custody house first: “Will you count the vault in front of me?” — A can; B cannot.

And if the island had a central custody house that could print receipts? B would be saved, B's depositors would be whole, and B and every other house would learn a lesson: over-lending is fine. Next round the receipts would be ten times the coins, the cycle would run ten years, and the bill would fall on everyone who holds a receipt.

So: **fix the coins and the cycle does not vanish; fix the coins with no central custody house and the cycle is far shorter and smaller, with the cost borne by the participants themselves.** The island's government is in the same position: it can no longer print receipts to fight a war, but it can borrow coins — at real rates; or, if most coins sit in custody houses, it can send men to the custody houses. Where the islanders keep their coins decides how far the government can go.

## @misconceptions
- **“Bitcoin's supply is fixed, so there can be no business cycle under a Bitcoin standard.”** — ABCT's engine is credit expansion (money substitutes exceeding money), not base-money issuance. As long as a custodian lends depositors' coins while promising withdrawal on demand, there are fractional reserves, maturity mismatch and a depressed rate. Celsius, BlockFi and FTX in 2022 demonstrated a full cycle on a fixed supply.
- **“The 2022 collapses prove Bitcoin is just as bad as fiat.”** — Look at the other side too: with no lender of last resort, bad institutions were liquidated within months, losses fell on creditors rather than taxpayers, and proof of reserves emerged spontaneously afterwards. That matches the free bankers' prediction that runs are discipline and cycles shorter and smaller. But honestly: it coincided with Fed hikes and was too small to be worth bailing out, so the evidence is consistent, not sufficient.
- **“The Lightning Network is Bitcoin's fractional-reserve layer.”** — It is not. Every Lightning off-chain payment is fully backed by coins locked on-chain; it is a 100%-reserve payment rail creating no excess claims. Credit expansion comes from custodians (exchanges, yield platforms), not from Lightning.
- **“Bitcoin's four-year cycle is determined by the halvings.”** — The halving is a fully anticipated supply parameter that a rational market should price in advance, and there are only three or four observations. Austrians look at the credit side first: all three peaks matched fiat zero rates / liquidity easing plus internal crypto credit expansion, and the 2022 crash matched hikes and the Celsius/FTX contraction. Narrative ([[memes-reflexivity|Stage 16.5]]) is the amplifier; credit is the fuel.
- **“Under a Bitcoin standard governments could no longer fight wars.”** — What closes is the printing route; borrowing remains (at real rates, from real saving), and governments can seize custodians — the 1933 gold seizure worked because gold sat in banks. The strength of the constraint depends on custody structure (self-custody vs ETFs/exchanges), not only on the number 21 million.

## @quiz
1. According to ABCT, what is the necessary condition for a business cycle under a Bitcoin standard?
   - [ ] A change to Bitcoin's supply cap
   - [x] Custodians lending depositors' coins while promising withdrawal on demand, thereby creating claims in excess of base money (fiduciary media)
   - [ ] A government declaring Bitcoin legal tender
   - [ ] A fall in mining hashpower
   > The cycle engine is credit expansion (Mises's “fiduciary media”), not base-money issuance. A fixed base layer cannot stop the claims layer inflating — as Celsius and others showed in 2022.

2. What is the key structural difference between FTX and Celsius?
   - [ ] FTX was fully reserved, Celsius fractional
   - [x] Celsius was fractional-reserve lending (a yield platform); FTX diverted customer assets to an affiliate (misappropriation) and used its own token as “reserve”
   - [ ] Both were Lightning nodes
   - [ ] FTX had a lender of last resort, Celsius did not
   > Celsius's ailments were maturity mismatch + fractional reserves + risky assets; FTX's core was misappropriation of customer funds, with its affiliate Alameda holding FTX's own FTT as its main asset — structurally the same as Terra using LUNA as reserve.

3. What is the free bankers' testable prediction about cycles under a Bitcoin standard?
   - [ ] Cycles would be longer and larger because there is no central bank to manage them
   - [ ] Cycles would disappear entirely
   - [x] With no lender of last resort and no reserve top-ups, runs become discipline; cycles are shorter and smaller and losses are borne by participants
   - [ ] Cycles would be determined solely by halvings
   > The clearinghouse-constraint logic of [[free-banking|Stage 9.4]] carried over to Bitcoin: bad institutions are liquidated fast and not rescued. The 2022 evidence is consistent, but coincided with Fed hikes and was small, so not yet sufficient.

4. From a reserve standpoint, what is a spot Bitcoin ETF?
   - [ ] Fractional-reserve custody creating excess paper bitcoin
   - [x] A 100%-reserve warehouse (holds real bitcoin, may not lend it), but holders cannot withdraw coins, which strengthens the “monetary asset” rather than “money” character
   - [ ] A kind of Lightning channel
   - [ ] An algorithmic stablecoin
   > ETF rules require full holding and no lending, so it is not credit expansion; its effect is to convert demand into dollar-denominated exposure demand — the “held, not used” of [[bitcoin-regression|Stage 17.1]].

5. Why do Austrians insist on explaining Bitcoin's four-year cycle from the “credit side” first?
   - [ ] Because halvings do not exist
   - [x] Because the credit side (rate → time structure → malinvestment → liquidation) is the only explanation with a causal mechanism rather than a mere correlation; the halving is a known parameter and narrative an amplifier
   - [ ] Because Austrians oppose Bitcoin
   - [ ] Because narratives do not matter
   > All three peaks matched fiat easing plus internal crypto credit expansion, and the 2022 crash matched hikes and the Celsius/FTX contraction; the halving is anticipated and should be priced in; reflexive narrative ([[memes-reflexivity|Stage 16.5]]) gives direction, credit gives fuel.

## @further
- [Mises, The Theory of Money and Credit — the original statement of “fiduciary media” and the cycle theory](https://mises.org/library/book/theory-money-and-credit)
- [Rothbard, What Has Government Done to Our Money? (1963) — the gold standard, war finance and suspension](https://mises.org/library/book/what-has-government-done-our-money)
- [Selgin, The Theory of Free Banking (1988) — the clearing constraint and banking without a lender of last resort](https://www.cato.org/books/theory-free-banking)
- [Huerta de Soto, Money, Bank Credit, and Economic Cycles (1998) — the 100%-reserve camp's full argument on cycles](https://mises.org/library/book/money-bank-credit-and-economic-cycles)
- [Poon & Dryja, “The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments” (2016) — the Lightning white paper](https://lightning.network/lightning-network-paper.pdf)
