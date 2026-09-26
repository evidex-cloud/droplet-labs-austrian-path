---
id: defi-code-order
prereqs: spontaneous-law, price-formation
demo: amm-discovery
---

# DeFi & Smart Contracts: Spontaneous Order in Code

## @hook
In 2018 an unemployed mechanical engineer wrote an “exchange” in a few hundred lines of code: no matching engine, no order book, no market makers, just one formula, x·y = k. Today such “automated market makers” handle billions of dollars a day. It is a touchstone for Austrian theory: **can a hard-coded rule form a price?** The answer is no — but it can make life easier for the people who do form prices (arbitrageurs). This lesson reads smart contracts with the “rules vs order” of [[spontaneous-order|Stage 7.4]], AMMs with the marginal pairs of [[price-formation|Stage 1.3]], oracles with the calculation problem of [[mises-1920|Stage 7.1]], the bankruptcy of “code is law” (The DAO, 2016) with the lex mercatoria of [[spontaneous-law|Stage 9.3]], and DeFi lending and the Terra collapse (2022) with the reserve framework of [[fractional-reserve|Stage 4.4]]. Austrian theory is strong here, but it has two pieces of homework left: governance tokens and MEV. (Nothing here is investment advice.)

## @intuition
Recall the core distinction of [[spontaneous-order|Stage 7.4]]. Hayek said there are two kinds of order in the world: an **organization** (taxis), designed for a purpose, with a director — a firm, an army; and a **spontaneous order** (cosmos), designed by nobody, growing out of the actions of people who follow some abstract rules — language, the market, the common law. Rules may be designed (traffic law), but the order that grows on top of them (traffic) is not. [[spontaneous-law|Stage 9.3]] showed that law itself can “grow”: the medieval lex mercatoria was not decreed by kings; it settled out of merchants' arbitration and custom in cross-border trade.

Now look at something new: the **smart contract**. It is a program deployed on a blockchain; once deployed it cannot be modified, anyone can call it, and it executes its hard-coded logic automatically — transfers, collateral, liquidations, payouts. It is a **rule in extreme form**: no discretion, no exceptions, no court needed. And on top of such rules, after 2020, an entire ecosystem nobody designed grew up, called “decentralized finance” (DeFi): exchanges, lending markets, stablecoins, derivatives, insurance, calling one another and snapping together like Lego. **Designed rules, grown order** — the most literal realization of Hayek's phrase there has ever been.

This lesson picks the four places that test Austrian theory hardest.

**First, automated market makers (AMMs).** In an ordinary market, price is pinned by the **marginal pairs** of [[price-formation|Stage 1.3]]: the last buyer and seller willing to deal set the range. An AMM has no bids and asks, only a pool and a formula: the quantity of coin A in the pool times the quantity of coin B equals a constant k. Take A out and you must put in enough B to keep the product unchanged; the more you take, the higher the price per unit. **The price is not “discovered”; it is “computed”** — so is it still a price? The Austrian answer is interesting: the AMM discovers nothing; it is a passive quoting rule. What pulls its price to the “right” place is the **arbitrageur** outside — the embodiment of Kirznerian alertness from [[entrepreneur-alertness|Stage 6.1]]. Without arbitrageurs, an AMM's price is a stopped clock.

**Second, DeFi lending.** Aave, Compound and MakerDAO all require **over-collateralization**: to borrow $100 of stablecoin you first lock $150 of ether. That is the exact reverse of the fractional-reserve bank of [[fractional-reserve|Stage 4.4]] — the bank makes $100 of loans on $10 of reserves; DeFi makes a $100 loan against $150 of collateral. It means DeFi lending **does not create money** (except for minted stablecoins like DAI, which we treat separately), and so it does not trigger the cycle mechanism of [[abct-one-picture|Stage 5.1]] — its interest rate reflects real loanable funds. It is the structure the 100%-reserve camp of [[free-banking|Stage 9.4]] would like.

**Third, oracles.** A smart contract cannot know on its own “what ether is worth in dollars right now” — it is a sealed program. Someone must feed the price in from outside; that feeder is an oracle. This is a code-level proof of Mises's 1920 argument in [[mises-1920|Stage 7.1]]: **calculation needs prices, prices can only come from markets, and code cannot produce them.** In 2022 an exchange lost about $100 million to oracle manipulation — reference a thin market's price and you have imported its fragility.

**Fourth, “code is law.”** Early DeFi's slogan was: whatever the contract says, that is the outcome; no courts, no appeals. In June 2016 a crowdfunding contract called The DAO was drained of about a third of its funds through a bug — **in strict accordance with the code's literal logic.** The Ethereum community then voted to “hard fork” and reverse the transaction, in effect declaring “code is not law; our consensus is.” That is the lesson of [[spontaneous-law|Stage 9.3]]: **rules always need interpretation and enforcement, even when written in code**; a buggy contract is an ambiguous contract. The lex mercatoria did not disappear; it moved from a Venetian arbitration hall to a Discord vote.

We will also look at Terra's collapse in May 2022: an algorithmic stablecoin with no reserves, holding its $1 peg by a “mint-and-burn” mechanism, which evaporated about $40 billion in a week. Not a hack, not a fraud — the mechanism **working as designed.** It is the bank-run theory of [[fractional-reserve|Stage 4.4]] tested on a kind of bank that had never existed.

Finally, an honest account of Austrian strengths and weaknesses here. Strengths: price discovery, rules vs commands, reserve analysis, the calculation problem — each seems tailor-made for DeFi. Weaknesses: **governance tokens** (voting rights can be bought and sold, so a protocol's “constitution” becomes an asset a whale can acquire) and **MEV** (miners/validators can reorder transactions to extract rent) — both challenge the premise that “rules apply equally to all,” and Austrians have no ready theory. [[agent-economies|Stage 18.6]], on algorithmic pricing and AI-agent economies, picks up that thread.

**In this lesson we break it into six pieces:**

- **① Smart contracts: rules in extreme form, and the order that grows on them**
- **② The AMM's x·y = k: a quoting rule, not a discovery process — where did Böhm-Bawerk's marginal pairs go?**
- **③ DeFi lending: over-collateralization, no money creation, and the link to credit expansion**
- **④ Oracles: code cannot price, it can only reference prices — Mises 1920 in code**
- **⑤ The bankruptcy of “code is law”: The DAO, forks, and the return of the lex mercatoria**
- **⑥ Terra 2022 and the Austrian scorecard: algorithmic pegs, governance tokens, MEV**

## @mechanics
### ① Smart contracts: rules in extreme form, and the order that grows on them

Start with an Austrian definition of a smart contract: **a contract that needs no enforcer.** An ordinary contract has three stages — drafting, interpretation, enforcement — and the third relies on courts and police; a smart contract writes enforcement into code, and once deployed the whole network carries it out automatically. Two economic consequences follow.

**Consequence one: enforcement cost tends to zero, and so does counterparty risk.** Put 1 ether into a Uniswap pool and nobody can misappropriate it, because there is no “body,” only code. [[why-property|Stage 9.1]] showed that property rights are rules for resolving conflict over scarce things; a smart contract automates the **enforcement** of the rule. This is why DeFi could attract tens of billions of dollars without any regulator or licence — not because people trusted the developers, but because they did not need to.

**Consequence two: rules can be composed.** One contract can call another. A stablecoin contract is called by a lending contract, which is called by an exchange contract, which is called by a yield aggregator … nobody planned that stack; it is the result of thousands of independent developers each pursuing their own ends. That is the cosmos of [[spontaneous-order|Stage 7.4]]: **each block of rules is taxis (someone designed it); the whole is cosmos (nobody did).**

In *Law, Legislation and Liberty* Hayek wrote that the rules of a spontaneous order must be **abstract, negative, and equally applicable to all** — they tell you what you may not do, not what you must do. Smart contracts fit that description exactly: an AMM does not care who you are or why you trade; it just executes the formula. That is its contrast with a CBDC ([[stablecoins-cbdc|Stage 17.3]]): both are code, but one is a rule and the other a command.

There is, however, a problem early DeFi ignored and later paid for: **the “abstractness” of a rule is not the “completeness” of a rule.** Every piece of code has cases its author did not think of — in law these are called “gaps,” in programming “bugs.” When such a case arises, who interprets? That is the question of block ⑤.

### ② The AMM's x·y = k: a quoting rule, not a discovery process — where did Böhm-Bawerk's marginal pairs go?

**The mechanism first.** A Uniswap pool (launched November 2018) holds two assets, say 100 ETH and 200,000 USDC. There is one rule: the product of the two quantities, k = 100 × 200,000 = 20 million, must be unchanged after any trade.

You want to buy 1 ETH. The pool goes to 99 ETH, so USDC must become 20,000,000 ÷ 99 ≈ 202,020, and you pay 2,020 USDC — 1% above the “spot” of 2,000. That 1% is **slippage**. You want 10 ETH: the pool goes to 90 ETH, USDC to 222,222, you pay 22,222, an average of 2,222 each — 11% slippage. The more you buy, the higher the price, **along a hyperbola.** Liquidity providers (LPs) deposit assets into the pool and earn a 0.3% fee on each trade.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The constant-product curve x·y = k and the outside price: arbitrageurs pull the pool back</text><line x1="70" y1="250" x2="600" y2="250" stroke="var(--line)" stroke-width="1.5"/><line x1="70" y1="40" x2="70" y2="250" stroke="var(--line)" stroke-width="1.5"/><text x="600" y="268" text-anchor="end" font-size="10" fill="var(--muted)">ETH in pool, x</text><text x="60" y="48" text-anchor="end" font-size="10" fill="var(--muted)">USDC, y</text><path d="M95,245 C110,120 150,80 230,66 C330,52 480,48 590,46" fill="none" stroke="var(--orange)" stroke-width="2.5"/><text x="470" y="40" text-anchor="middle" font-size="10" fill="var(--orange-ink)" font-weight="600">x·y = k (the pool can only sit on this curve)</text><circle cx="230" cy="66" r="6" fill="var(--blue)"/><text x="230" y="90" text-anchor="middle" font-size="10" fill="var(--blue)" font-weight="600">pool's current point</text><text x="230" y="103" text-anchor="middle" font-size="9" fill="var(--muted)">implied price = y/x = 2,000</text><line x1="150" y1="30" x2="330" y2="110" stroke="var(--blue)" stroke-width="1.2" stroke-dasharray="4 3"/><text x="345" y="112" font-size="9" fill="var(--blue)">tangent slope = pool price</text><circle cx="160" cy="76" r="6" fill="var(--red)"/><text x="130" y="60" text-anchor="middle" font-size="10" fill="var(--red)" font-weight="600">outside market falls to 1,800</text><path d="M225,72 Q190,95 166,82" fill="none" stroke="var(--red)" stroke-width="2" marker-end="url(#a174)"/><defs><marker id="a174" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--red)"/></marker></defs><text x="200" y="125" text-anchor="middle" font-size="9" fill="var(--red)">arbitrageur buys ETH outside at 1,800, sells into the pool until pool price = 1,800</text><rect x="360" y="150" width="230" height="86" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="475" y="170" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Who “discovers” the price?</text><text x="475" y="188" text-anchor="middle" font-size="9.5" fill="var(--muted)">The pool: quotes only, knows nothing</text><text x="475" y="203" text-anchor="middle" font-size="9.5" fill="var(--muted)">The outside market: marginal pairs deal here</text><text x="475" y="218" text-anchor="middle" font-size="9.5" fill="var(--muted)">The arbitrageur: carries outside knowledge in</text><text x="475" y="232" text-anchor="middle" font-size="9.5" fill="var(--orange-ink)" font-weight="600">→ Stage 6.1 alertness, not a formula</text></svg><figcaption>The pool can only move along the curve; its “price” is the slope at the current point. When the outside market changes the pool does not move by itself — an arbitrageur has to push it to the new point with real money.</figcaption></figure>

**Now apply the tool from [[price-formation|Stage 1.3]].** Böhm-Bawerk, in *The Positive Theory of Capital* (1889), used a horse market to show that price falls between the “marginal pairs” — the last buyer and seller who deal, and the first who do not; four numbers bracket the range. That is a **discovery process**: nobody knows in advance what anyone will pay; it is revealed in the haggling.

An AMM has no marginal pairs. **LPs are not sellers** — they post no ask; they put assets on a curve and will deal at any price. **Traders are not trading with another person**; they trade with a formula. So what is the “pool price = y/x”? It is a **quote**, not a **discovery.** The pool knows nothing about the world: the Ethereum Foundation announces an upgrade, an exchange is hacked, the Fed raises rates — the pool's price does not move until someone trades.

Who makes it move? **Arbitrageurs.** Suppose the outside market (Binance) drops ETH to 1,800 while the pool still says 2,000. An arbitrageur buys on Binance at 1,800 and sells into the pool until the pool price is also 1,800, pocketing the difference at every step. His action **carries** outside knowledge into the pool. That is exactly Kirzner's entrepreneur from [[entrepreneur-alertness|Stage 6.1]]: alert to a price gap between two markets, he acts, earns pure profit, and eliminates the gap. **The AMM evicts Böhm-Bawerk's marginal pairs from the pool into the outside market, then relies on arbitrageurs to bring the result back.** An AMM with no outside market and no arbitrageurs has a price with no information content — it is merely the residue of the last trade.

Two corollaries. First, **the AMM is not a substitute for the market process but a parasite on it**: it needs a market with real marginal pairs to exist somewhere. Second, the “impermanent loss” LPs suffer (whenever the price moves, the LP's portfolio is worse than holding) is, at bottom, **the information fee paid to arbitrageurs** — the LP leaves assets on a curve that never updates itself, and the arbitrageur takes the difference in exchange for information. It is an elegant, quantifiable “price of knowledge” ([[hayek-knowledge|Stage 7.2]]).

### ③ DeFi lending: over-collateralization, no money creation, and the link to credit expansion

[[fractional-reserve|Stage 4.4]] showed how banks create deposits “out of nothing”: $1,000 of reserves supports $10,000 of deposits, and the extra $9,000 is nobody's saving. [[abct-one-picture|Stage 5.1]] showed how those conjured loanable funds depress the interest rate and start the cycle. How does DeFi lending relate to that mechanism? Three cases.

**Case one: pooled lending of the Aave/Compound type.** Depositors put USDC into a pool; borrowers lock over-collateral (say 150% in ether) and take USDC out. **No USDC is created**: what is lent is what was deposited. The rate is set automatically by the pool's “utilization” — the more is borrowed, the higher the rate, rising steeply as utilization nears 100% (the “kink”). This is a **genuine loanable-funds market**: the rate reflects real saving and real borrowing demand — the natural rate of [[natural-rate|Stage 3.5]] in a small market. It does not trigger ABCT, because there is no credit expansion. One thing must be said honestly: depositors can withdraw at any time while loans have no maturity, so there **is** a maturity mismatch; but the mismatch is handled not by default or suspension but by the rate spiking until borrowers repay and depositors stay — **rationing by price, not by suspension of payment.** That is far more honest than fractional-reserve banking.

**Case two: minting of the MakerDAO type.** DAI is not deposited; it is **minted**: lock $150 of ether and the contract issues you 100 new DAI. Here new “dollar notes” are indeed created. Are they fiduciary media in the sense of [[fractional-reserve|Stage 4.4]]? Partly: DAI is a circulating claim, but **not** a claim on the issuer redeemable at par on demand (you cannot hand DAI to MakerDAO for dollars); it is a synthetic backed by excess collateral. It resembles the nineteenth-century “real bill” — a banknote issued against full commercial collateral — more than unbacked credit expansion. The 100%-reserve camp says “still a note conjured from nothing”; the free bankers say “fully collateralized, automatically liquidated, harder than any banknote in history.” The Austrian split replays intact ([[free-banking|Stage 9.4]]).

**Case three: reserveless minting of the Terra type.** See block ⑥ — that is genuine credit creation, more radical than fractional reserve.

Taken together: **the bulk of DeFi (over-collateralized lending) creates no money and is not a cycle engine; its edge (minted stablecoins) creates money substitutes whose hardness depends on the collateral rule; its failures (algorithmic stablecoins) are reserveless issue.** [[bitcoin-cycles|Stage 17.5]] carries this three-way division over to custodians under a Bitcoin standard.

### ④ Oracles: code cannot price, it can only reference prices — Mises 1920 in code

MakerDAO must liquidate automatically when ether falls below the collateral line. But how does the contract know ether's “current price”? **It does not.** A blockchain is a closed system that cannot see outside. Someone — an oracle — must sign an outside price and write it on-chain before the contract can read it.

It looks like a technical detail; it is a clean experimental confirmation of Mises's argument in [[mises-1920|Stage 7.1]]. Mises said in 1920: no market, no prices; no prices, no economic calculation — a planner may have all the technical knowledge in the world and still not know whether a ton of steel should become a bridge or a ship, because he has no prices to compare. DeFi turned that into a coding constraint: **no matter how sophisticated a contract, it cannot generate a price; it can only reference a price formed by a market (by marginal pairs!).** When [[bigdata-planning|Stages 7.5]] and 18.1 ask whether big data or AI can plan, this example bears repeating: a system executing thousands of trades a second still has to reach out to human markets for prices.

Referencing prices also means referencing their fragility. Three cases:

- **“Black Thursday,” 12 March 2020**: ether fell about 40% in a day, the network congested, MakerDAO's oracle updates lagged, liquidation auctions cleared at “zero bids,” and the system was left with a collateral shortfall of about $8 million. Lesson: **the time dimension of a price** — a stale price is not a price.
- **Mango Markets, October 2022**: an attacker used his own funds to push a token's price up in a thin market, the oracle reported it faithfully, and the attacker borrowed about $110 million against the inflated collateral. Lesson: **a thin market's price is not knowledge**; it is the residue of the last trade — the same problem as the AMM in block ②.
- **Flash-loan attacks (many since 2020)**: within one transaction, borrow a huge sum, manipulate an AMM's price, use it to fool another contract that references that AMM, and repay the loan. Lesson: treating an AMM as an oracle mistakes a “quote” for a “discovery.”

The Austrian summary is not “oracles are bad” but: **prices are the result of acting people exchanging under scarcity; any system — code, AI, a planning board — can only consume them, never manufacture them.** That is all of [[mises-1920|Stage 7.1]], except that this time the objector is not Lange but a contract.

### ⑤ The bankruptcy of “code is law”: The DAO, forks, and the return of the lex mercatoria

In April 2016 a contract called The DAO crowdfunded about 11.5 million ether (about $150 million at the time), the largest crowdfunding in history to that date. On 17 June someone exploited a “re-entrancy” bug in the contract to drain about 3.6 million ether — **entirely within what the code permitted.** By the creed of “code is law,” this was not theft: if the code allows it, it is legitimate.

The Ethereum community argued for a month. On 20 July the majority of hashpower executed a **hard fork**, rolling the ledger back to before the attack — declaring the transaction void. A minority refused and kept running the original chain, known today as Ethereum Classic.

The framework of [[spontaneous-law|Stage 9.3]] applies almost line by line:

- **Rules need interpretation.** Leoni, in *Freedom and the Law* (1961), argued that law is not the words a legislator writes but people's shared expectations about what is just; the words are an imperfect record of those expectations. The DAO's code was the words; the community's expectation was “crowdfunded money is for investment, not for one person to take.” When words and expectation collide, **expectation wins** — in the common law that is called equity, on Ethereum it is called a fork.
- **Enforcement needs a community.** The lex mercatoria worked not because a king's army stood behind it but because a merchant who defied a ruling was shunned by the whole merchant community. The Ethereum fork worked the same way: nobody could force miners to switch, but most chose to, judging that “a chain that permits this has no future.” That is **reputational enforcement**, not violent enforcement.
- **“Code is law” confuses contract with law.** A contract can be drafted very tightly; but what decides “what this contract means in this situation” lies outside the contract — custom, expectation, the community's judgment. A smart contract is an extremely strict **contract**; it was never **law.** When Lessig coined “code is law” in 1999 he did not mean what DeFi later took it to mean — he meant that code *constrains* behavior the way law does, not that code can *replace* law.

The lesson kept repeating: after several protocol hacks in 2022, communities “negotiated” with hackers for the return of funds; some protocols added “pause switches” and multisig governance — an admission that above the code there must be an interpreter. **A spontaneous order is not “an order without interpreters of rules”; it is “an order whose interpreters are not the state.”** DeFi spent six years rediscovering the lex mercatoria.

### ⑥ Terra 2022 and the Austrian scorecard: algorithmic pegs, governance tokens, MEV

**How Terra worked.** UST was a “stablecoin” holding no dollar reserves at all. Its peg mechanism: the protocol would always let you swap 1 UST for “$1 worth of LUNA” (the protocol's other token) and vice versa. If UST fell to $0.98, arbitrageurs bought UST, swapped it for $1 of LUNA, earned 2%, and the reduced UST supply pushed the price back up. It sounds like the arbitrage of block ② — except that the other side of the arbitrage was not an outside market but **another token the protocol printed itself.** Meanwhile a lending protocol called Anchor paid about 20% a year on UST deposits, attracting enormous inflows — much of UST's demand was not payment demand but pursuit of that 20%.

**Why it collapsed.** From 7 May 2022 UST met heavy selling and broke its peg. The arbitrage mechanism kicked in: people swapped UST for LUNA and sold it, LUNA's supply ballooned and its price fell; the lower LUNA fell, the more LUNA had to be minted for each UST redeemed, the faster supply grew — **a positive feedback loop.** Once LUNA's total market value fell below UST's outstanding supply, the promise “1 UST for $1 of LUNA” became mathematically impossible to honour for everyone. Within a week UST traded at a few cents, LUNA fell from about $80 to nearly nothing, about $40 billion evaporated, and the chain of failures [[bitcoin-cycles|Stage 17.5]] describes — Celsius, Three Arrows Capital — began.

**The Austrian reading.** This is the extreme case of the bank-run theory of [[fractional-reserve|Stage 4.4]]: a “bank” whose reserve is its own equity. Mises's definition of a money substitute requires “redeemable at par on demand”; Terra offered “redeemable on demand into something whose price is set by the act of redemption itself” — that is not a reserve, it is **reflexivity** ([[memes-reflexivity|Stage 16.5]]). When the main reason to hold UST was a 20% yield rather than its use, demand was speculative, and speculative demand in a panic has only one direction. **It worked as designed; the design was a run waiting to happen.**

**Austrian strengths, named one by one:**

- [[price-formation|Stages 1.3]] / 6.1: AMMs do not discover prices; arbitrageurs do — the Austrian market-process theory explains what an AMM does better than any equilibrium model.
- [[spontaneous-order|Stages 7.4]] / 9.3: rules vs commands, rules needing interpretation — The DAO and the CBDC contrast have no ready framework in other schools.
- [[fractional-reserve|Stages 4.4]] / 9.4: the three-way division of over-collateralized, fractional and reserveless directly determines which DeFi structures generate cycles.
- [[mises-1920|Stage 7.1]]: oracles are an experimental proof of the calculation problem.

**Where Austrian theory needs development, also named:**

- **Governance tokens.** The power to change the rules of Uniswap, MakerDAO and others rests with token votes, and tokens can be bought and sold. That makes the “constitution” of a spontaneous order an asset that a whale can acquire or borrow to vote with (flash-loan governance attacks have happened). Hayek's theory of spontaneous order assumes rules that evolved over long periods and that nobody can buy; Austrians have no theory yet of “tradable rule-making power.”
- **MEV (maximal extractable value).** Validators decide the order of transactions within a block, so they can insert their own buy before your large buy and their sell after it (a “sandwich attack”), extracting rent from your slippage. That challenges “rules apply equally to all”: in DeFi the bookkeeper and the trader are not equal. Austrian market-process theory assumes a neutral trading venue; when the venue is itself a rent-extracting participant, the theory needs extending. A 2019 paper titled “Flash Boys 2.0” first described it systematically. When [[agent-economies|Stage 18.6]] turns to algorithmic pricing and AI agents trading with one another, MEV is one of the questions that must be answered.

The lesson in one sentence: **code can automate the enforcement of rules; it cannot automate the discovery of prices, the interpretation of rules, or the honesty of reserves — those three still depend on acting people.** [[bitcoin-cycles|Stage 17.5]] asks next: if the base money were Bitcoin, could custodians still manufacture cycles? This lesson is not investment advice.

## @analogy
Picture a **vending machine** that sells apples, but prices them strangely: inside are 100 apples and $200, and the rule is “apples × dollars always equals 20,000.” Buy 1 apple, 99 remain, the dollars must become 202 — you pay $2.02. Buy 50 at once, 50 remain, the dollars must become 400 — you paid $200 in all, $4 each on average. The more you buy the dearer it gets, and the machine never sells out.

The machine has an odd property: **it has no idea what apples are worth.** The market next door drops to $1 an apple and the machine still quotes $2 — until a hawker notices, buys at $1 in the market and sells into the machine at $2, and keeps going until the machine's price is $1 too. The hawker pockets the difference; the machine's price is now “right.” **The hawker discovered the price, not the machine.** The machine is just a rule; the hawker is the entrepreneur of [[entrepreneur-alertness|Stage 6.1]]. And the people who stocked the machine with apples (the LPs) lose a little on every one of the hawker's trades — that is the information fee they pay for not having to watch the market themselves.

Now suppose the machine must judge “are the apples rotten?” before deciding whether to discount. It has no eyes. It can only trust someone standing beside it who reports “the apples are fine” — that person is the oracle. If he lies, or looked at a bad sample, the machine runs on the wrong price. **However clever the machine, it must ask a human for information.**

Suppose next that the machine's code has a bug: a certain button sequence dispenses apples without payment. Someone does it and takes a third of the stock. “The code allowed it, so it's legitimate”? The neighbours hold a meeting, reset the machine to its state before the theft, and refuse to recognize the transaction. The dissenters carry off a copy of the machine and keep running the old rules. **The rule was written in code, but what the rule means was decided by people.**

Finally, a machine that announces: “I don't sell apples, I sell apple vouchers; you may at any time swap a voucher for one apple's worth of shares in this machine.” As long as the shares hold value, the vouchers hold. One day vouchers are dumped, people swap them for shares and sell, the shares crash, each voucher now needs more shares, the shares crash faster … a week later both are worthless. Nothing broke; it **worked as designed** — and the design was a bank run.

## @misconceptions
- **“AMMs replaced price discovery with a formula, proving prices can be computed.”** — The reverse. An AMM is a passive quoting rule that knows nothing about the world; its price is pulled into place by the marginal pairs of the outside market ([[price-formation|Stage 1.3]]) and the arbitrageurs who carry that knowledge in ([[entrepreneur-alertness|Stage 6.1]]). An AMM with no outside market has a price with no information content. It is a parasite on the market process, not a replacement.
- **“DeFi lending creates money and cycles just like banks.”** — The bulk of it does not. Aave/Compound-style pools lend only what was deposited, create no money, set a rate reflecting real loanable funds, and do not trigger ABCT; maturity mismatch is rationed by rate spikes, not suspension. Money substitutes are created by minted stablecoins (DAI, fully collateralized) and by reserveless algorithmic stablecoins (Terra) — three cases to keep apart.
- **“Code is law: whatever the contract says is the outcome; no interpretation needed.”** — The DAO (2016) refuted that with a hard fork. Code is a strict contract, not law; buggy code is an ambiguous contract, and ambiguity must be interpreted and enforced by a community (the lex mercatoria of [[spontaneous-law|Stage 9.3]]). A spontaneous order is not “no interpreters,” but “interpreters who are not the state.”
- **“Terra collapsed because of a hack or fraud.”** — It collapsed because the mechanism worked as designed: a “reserve” made of the protocol's own token, whose price is driven down by the very act of redemption, creating positive feedback; plus speculative demand drawn by a 20% yield, which in a panic runs one way. It is the bank-run theory of [[fractional-reserve|Stage 4.4]] tested on reserveless issue, and a textbook case of the reflexivity of [[memes-reflexivity|Stage 16.5]].
- **“Austrian theory has fully explained DeFi.”** — Not yet. Governance tokens turn rule-making power into a tradable asset, and MEV lets bookkeepers extract rent from traders' slippage — both challenge the premise that rules apply equally to all. Austrians are strong on price discovery, rules vs commands, reserve analysis and the calculation problem, but have no ready theory for these two.

## @quiz
1. A Uniswap pool holds 100 ETH and 200,000 USDC. The outside market drops ETH to $1,800 but nobody trades. What happens to the pool price?
   - [ ] It automatically follows the outside market to 1,800
   - [x] It stays at 2,000 until an arbitrageur sells ETH into the pool and pushes it to 1,800
   - [ ] It rises to 2,200 because k is constant
   - [ ] It becomes 1,900, the average of the two
   > An AMM is a passive quoting rule that knows nothing of the outside world. The price is carried in by arbitrageurs' actions ([[entrepreneur-alertness|Stage 6.1]]) — a market process, not a formula.

2. Why does Aave/Compound-style over-collateralized lending not trigger the Austrian business cycle?
   - [ ] Because it is regulated
   - [ ] Because the interest rate is fixed
   - [x] Because what is lent is what was deposited, no new money is created, and the rate reflects real loanable funds
   - [ ] Because blockchains cannot have cycles
   > [[abct-one-picture|Stage 5.1]]'s cycle starts when credit expansion (loanable funds conjured from nothing) depresses the rate; over-collateralized pool lending creates no money, and maturity mismatch is rationed by rate, not suspension.

3. What does the existence of oracles mean for Mises's 1920 argument in [[mises-1920|Stage 7.1]]?
   - [ ] It refutes it: code can compute prices on its own
   - [x] It confirms it: however sophisticated, a contract cannot generate a price; it can only reference a market-formed price and inherits its fragility
   - [ ] It is unrelated
   - [ ] It proves big data can replace markets
   > A blockchain is a closed system; prices must be fed in from outside markets. Mango Markets, Black Thursday and flash-loan attacks all show that referencing a price means referencing its fragility.

4. In the framework of [[spontaneous-law|Stage 9.3]], what did the Ethereum community's 2016 hard fork over The DAO signify?
   - [ ] Code is law, so the fork was illegitimate
   - [ ] The state intervened in the blockchain
   - [x] When a rule's text conflicts with the community's expectation, the community interprets and enforces by reputation rather than force — the return of the lex mercatoria
   - [ ] Ethereum came under central control by its foundation
   > Leoni: law is shared expectation, the text merely a record. The fork was a community's ruling in “equity,” and dissenters formed Ethereum Classic — a spontaneous order is not one without interpreters, but one whose interpreters are not the state.

5. What was the core mechanism of the Terra/UST collapse in 2022?
   - [ ] Its dollar reserves were stolen
   - [x] Its “reserve” was the protocol's own LUNA; redeeming UST minted more LUNA and depressed its price in a positive feedback loop; once LUNA's market value fell below UST's supply the promise was mathematically unpayable
   - [ ] Regulators shut it down
   - [ ] The oracle reported a wrong price
   > A run on reserveless issue: the reserve was its own equity, and the act of redemption destroyed the reserve's value ([[fractional-reserve|Stage 4.4]] + 16.5). Anchor's 20% yield made demand highly speculative and accelerated the one-way stampede.

## @further
- [Mises, “Economic Calculation in the Socialist Commonwealth” (1920) — the theoretical root of the oracle problem](https://mises.org/library/book/economic-calculation-socialist-commonwealth)
- [Hayek, Law, Legislation and Liberty, Vol. 1: Rules and Order (1973) — rules and order, taxis and cosmos](https://press.uchicago.edu/ucp/books/book/chicago/L/bo3629429.html)
- [Bruno Leoni, Freedom and the Law (1961) — law as shared expectation (Liberty Fund full text)](https://oll.libertyfund.org/titles/leoni-freedom-and-the-law-lf-ed)
- [Böhm-Bawerk, The Positive Theory of Capital (1889), Book IV — marginal pairs and the horse market](https://mises.org/library/book/positive-theory-capital)
- [Daian et al., “Flash Boys 2.0: Frontrunning, Transaction Reordering, and Consensus Instability in Decentralized Exchanges” (2019) — the first systematic description of MEV](https://arxiv.org/abs/1904.05234)
