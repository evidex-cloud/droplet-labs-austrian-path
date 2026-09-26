---
id: stablecoins-cbdc
prereqs: free-banking, central-banks-fiat
demo: currency-competition
---

# Stablecoins, CBDCs & Hayek's Currency Competition Come True

## @hook
When Hayek wrote *Denationalisation of Money* in 1976 he imagined a few private banks each issuing a branded currency and competing for users by keeping its purchasing power stable. What he did not imagine: fifty years later currency competition really began, and the winner was not any “new money” but **privately issued dollar notes** — stablecoins like USDT and USDC, roughly $250–300 billion of them, used more on the streets of Buenos Aires and Istanbul than in Silicon Valley. Meanwhile central banks are preparing something else: **programmable, traceable, expiring central bank digital currency.** This lesson reads stablecoins with the free-banking theory of [[free-banking|Stage 9.4]], reads the March 2023 USDC depeg with the bank-run theory of [[fractional-reserve|Stage 4.4]], reads CBDCs with the economics of the state from [[economics-of-state|Stage 8.4]], and then faces a finding Austrians may not enjoy: **so far, the market's choice in the currency competition has been the dollar — not gold, and not Bitcoin.**

## @intuition
Take out the map from [[free-banking|Stage 9.4]]. Hayek's argument: money is the one good we still allow government to monopolize, and the consequences of the monopoly are inflation and cycles; allow private issue and free choice, and issuers, to keep their customers, will work harder than any central bank to preserve their currency's value. Inside the Austrian School there are two camps on “private issue”: the **free bankers** (White, Selgin) hold that a competitive fractional-reserve system disciplines itself; the **100%-reserve camp** (Rothbard, Huerta de Soto, Hülsmann) holds that any issue beyond reserves is fraud or the seed of a cycle. Both agree on one thing: a central-bank monopoly is worse than either private system.

Now look at what happened after 2014. A company called Tether issued a token on a Bitcoin sidechain, promising 1 token = 1 dollar, redeemable at any time; in 2018 Circle and Coinbase launched USDC; in 2017 MakerDAO minted DAI against over-collateralized crypto assets. By 2025 such “stablecoins” totalled roughly $250–300 billion, with daily transfer volumes that often exceed Visa's. **They are exactly the private money Hayek described — except that none of them invented a new unit of account; every one of them pegs to the dollar.**

There are three layers here worth taking apart with Austrian tools.

**Layer one: what are they?** A USDC is a liability of Circle — a private note saying “pay the bearer one dollar,” structurally identical to the banknotes Scottish banks issued before 1845 ([[free-banking|Stage 9.4]]). The differences: the note circulates on a blockchain, and the reserve is Treasury bills and bank deposits rather than gold. So asking “is it fractional-reserve?” is a perfectly legitimate Austrian question — and the answer depends on how you count the reserves. In March 2023 a small part of USDC's reserves sat at Silicon Valley Bank; the weekend the bank failed, USDC traded at $0.87. **It was a textbook bank run, except the run was on “the depositors of the bank's depositor.”** All of [[fractional-reserve|Stage 4.4]] applies.

**Layer two: who regulates?** In July 2025 the United States signed the GENIUS Act, bringing stablecoins under federal law for the first time: reserves must be 100% cash and short-term Treasuries, disclosed monthly, and **no interest may be paid to holders.** An Austrian reading the law sees two things: Rothbard's 100%-reserve demand has been enacted as federal law — for stablecoins; and “no interest” is a classic rent-seeking clause ([[taxes-regulation|Stage 8.3]]), the product of bank lobbying, designed to keep stablecoins from competing with bank deposits.

**Layer three: the state's answer — CBDC.** A central bank digital currency is a digital liability the central bank issues directly to the public. It can do things paper cannot: be **programmed** (this money buys only food), **traced** (every transaction visible in real time), given **negative rates** (holding it costs a fee), given an **expiry date** (spend it or lose it). China's e-CNY has been piloted for years; the ECB's digital euro is in preparation; the US in 2025 barred federal agencies from pursuing a CBDC by executive order. The Austrian objection is not technical but the one from [[economics-of-state|Stage 8.4]]: **a money that can be programmed turns money from a “rule” into a “command”** — precisely what Hayek meant in *The Road to Serfdom* when he said control of the means is control of the ends.

Finally, the uncomfortable finding. Hayek predicted in 1976 that once competition was allowed, private currencies of stable purchasing power would win. He was half right: competition did arrive, and the winners are indeed “stable” — but they achieve stability by **pegging to the dollar.** The market did not choose gold tokens (they exist, and are tiny), nor Bitcoin as a unit of account. Why? The network effects of [[network-effects|Stage 15.1]]: the unit of account is the strongest network good of all, and once the world's contracts, wages and prices are denominated in dollars, the switching cost of any new unit is prohibitive. **Hardness did not win; familiarity did.** For Austrians this is a fact that must be recorded — it confirms Menger (money-ness comes from saleableness, and saleableness from wide acceptance) but not the claim that “the hardest money must win.”

**In this lesson we break it into six pieces:**

- **① What Hayek imagined vs what happened: what USDT, USDC and DAI are**
- **② Are they fractional? Reserve composition, attestations, and the March 2023 USDC depeg**
- **③ The GENIUS Act: private money written into law, and the rent-seeking in “no interest”**
- **④ CBDCs: the Austrian objection to programmable money — digital euro, e-CNY, and the US ban**
- **⑤ Currency competition in practice: stablecoin dollarization in Argentina, Turkey and Nigeria**
- **⑥ What the market chose: the free-banking and 100%-reserve readings of stablecoins**

## @mechanics
### ① What Hayek imagined vs what happened: what USDT, USDC and DAI are

Hayek's 1976 scheme ([[free-banking|Stage 9.4]], block ①) had three elements: private issue, free choice, and issuers competing on **stable purchasing power.** He imagined the issuers would be banks, each with its own “ducat” or “Swiss note,” with dozens of units of account circulating at once.

What actually happened kept the first two elements and rewrote the third. The three main stablecoins:

- **USDT (Tether, 2014)**: the earliest and largest, with more than $100 billion outstanding by 2025. The issuer is a privately held offshore company promising 1:1 redemption in dollars; reserves are mostly short-term US Treasuries, with smaller holdings of bitcoin, gold and secured loans. Its history is not clean: in 2021 the US Commodity Futures Trading Commission found that for long stretches of 2016–18 it was not fully backed, and fined it about $41 million.
- **USDC (Circle, 2018)**: the second largest, with reserves held in a government money-market fund managed by BlackRock plus deposits at several large banks, and monthly reports from a Big Four accounting firm. Its positioning is “the compliant dollar note.”
- **DAI (MakerDAO, 2017)**: unlike the other two, not a corporate liability but an over-collateralized loan managed by **smart contracts** — lock up $150 of ether, borrow 100 DAI; if the collateral falls below a threshold it is automatically liquidated. It attempts to be “a dollar note without an issuing company” ([[defi-code-order|Stage 17.4]] goes deeper). To hold its peg it later took large amounts of USDC into its collateral, and so came to depend indirectly on Circle after all.

What the three share: **none created a new unit of account.** They are shadows of the dollar, not rivals to it. Hayek did not foresee this, but another Austrian wing did: the free bankers (White, Selgin) always argued that in practice private issue takes the form of **redeemable claims on the base money**, not new units — the Scottish banks issued pound notes, not “Scottish dollars.” Stablecoins are the 1845 Scottish system on a blockchain.

In Mises's taxonomy ([[money-demand|Stages 4.2]] and 4.4), a stablecoin is a **money substitute**: a claim on a money (the dollar) that people regard as redeemable at par on demand. Whether it keeps that status depends on the credibility of the redemption promise — which brings us to block ②.

### ② Are they fractional? Reserve composition, attestations, and the March 2023 USDC depeg

[[fractional-reserve|Stage 4.4]] sorted banks into two kinds: **warehouses** (100% reserves, fees for safekeeping) and **fractional-reserve banks** (lend out deposits, earn a spread, bear run risk). Which are stablecoins? The answer: **it depends on how you count “reserves,” and it differs from coin to coin.**

**USDC's books.** It claims 100% reserves in two parts: about 80–90% in a money-market fund that buys only short-term Treasuries and repos; about 10–20% in deposits at a handful of banks. On 10 March 2023 Silicon Valley Bank (SVB) was taken over by regulators; that evening Circle disclosed that $3.3 billion of its roughly $40 billion of reserves sat at SVB. Proportionally, the exposure was about 8%; under FDIC rules at the time, deposits above $250,000 were uninsured.

The next 48 hours were a pure bank run, checkable line by line against [[fractional-reserve|Stage 4.4]]:

1. Holders judged “Circle may not get the $3.3 billion back” and began selling USDC for USDT or dollars.
2. But Circle's redemption window was closed for the weekend (banks shut) — **primary redemption at par was unavailable, and the secondary market priced freely** — the digital version of banks “suspending payment” in the panic of 1907.
3. On 11 March USDC traded on exchanges at about $0.87–0.88. Note: **8% exposure, 12% price drop.** What is the extra 4%? The expectation of “will others run before me” — the reflexivity of [[memes-reflexivity|Stage 16.5]], or simply the definition of a run: **even when assets suffice, if redemption cannot be immediate, people price being at the back of the queue.**
4. On the evening of 12 March the Treasury, the Fed and the FDIC announced that all SVB deposits would be protected (the “systemic risk exception”). On 13 March USDC returned to $1.
5. Contagion: DAI, holding large amounts of USDC as collateral, depegged in step to about $0.90.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">March 2023: a run that passed through three layers of claims</text><g><rect x="30" y="60" width="150" height="70" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="105" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">USDC holders</text><text x="105" y="103" text-anchor="middle" font-size="10" fill="var(--muted)">claim on Circle</text><text x="105" y="118" text-anchor="middle" font-size="10" fill="var(--muted)">“1 USDC = $1”</text></g><g><rect x="245" y="60" width="150" height="70" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="320" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Circle (issuer)</text><text x="320" y="103" text-anchor="middle" font-size="10" fill="var(--muted)">≈80–90% T-bill fund</text><text x="320" y="118" text-anchor="middle" font-size="10" fill="var(--muted)">≈10–20% bank deposits</text></g><g><rect x="460" y="60" width="150" height="70" rx="8" fill="var(--red-soft)" stroke="var(--red)"/><text x="535" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Silicon Valley Bank</text><text x="535" y="103" text-anchor="middle" font-size="10" fill="var(--muted)">$3.3bn deposit (≈8%)</text><text x="535" y="118" text-anchor="middle" font-size="10" fill="var(--red)">fractional · seized 10 Mar</text></g><path d="M180,95 L245,95" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#a173)"/><path d="M395,95 L460,95" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#a173)"/><defs><marker id="a173" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--muted)"/></marker></defs><text x="212" y="88" text-anchor="middle" font-size="9" fill="var(--muted)">claim</text><text x="427" y="88" text-anchor="middle" font-size="9" fill="var(--muted)">claim</text><line x1="40" y1="250" x2="600" y2="250" stroke="var(--line)"/><g font-size="10" fill="var(--muted)" text-anchor="middle"><text x="80" y="266">Fri 10 Mar</text><text x="240" y="266">Sat 11 Mar</text><text x="400" y="266">Sun 12 Mar</text><text x="560" y="266">Mon 13 Mar</text></g><polyline points="80,180 160,182 240,238 320,236 400,232 480,200 560,180" fill="none" stroke="var(--red)" stroke-width="2.5"/><text x="240" y="225" text-anchor="middle" font-size="10" fill="var(--red)" font-weight="600">≈ $0.87</text><text x="80" y="172" text-anchor="middle" font-size="10" fill="var(--ink)">$1.00</text><text x="560" y="172" text-anchor="middle" font-size="10" fill="var(--ink)">$1.00</text><text x="400" y="222" text-anchor="middle" font-size="9" fill="var(--blue)">Treasury/Fed/FDIC backstop SVB deposits</text><text x="320" y="292" text-anchor="middle" font-size="10.5" fill="var(--orange-ink)" font-weight="600">8% exposure, 12% drop: the extra 4% is the price of being at the back of the queue — that is a run</text></svg><figcaption>A USDC holder's claim passes through Circle to SVB; at the bottom sits a fractional-reserve bank. A stablecoin's “100% reserve” is 100% only if the reserve itself is not a fractional-reserve claim.</figcaption></figure>

**Conclusion one: the USDC episode was not a failure of stablecoins but of the banking system beneath them** — part of its 100% reserve was a claim on a fractional-reserve bank, and so inherited that bank's run risk. The 100% camp says: this proves reserves must be final assets (Treasuries or central-bank reserves), not another layer of claims. The free bankers say: this proves **the clearing constraint works** — the market graded Circle's reserve composition within 48 hours, and Circle afterwards cut its bank-deposit share and moved to systemically important banks. Both readings are right.

**Conclusion two: USDT sits closer to the grey zone of “fractional”** — not because reserves are short (its 2025 attestations show assets above liabilities) but because the reserves include bitcoin, gold and secured loans, **assets whose prices move and which sell at a discount in a hurry.** [[fractional-reserve|Stage 4.4]] distinguished “illiquid” from “insolvent”: Tether's question is whether, if 20% of holders redeemed in a day, it could sell those assets without a haircut. That is precisely the “on demand” in Mises's definition of a money substitute — “redeemable at par on demand.”

**Conclusion three: algorithmic stablecoins are a different animal.** Terra's UST in May 2022 had no reserves; it held its peg by promising that 1 UST could always be swapped for $1 worth of LUNA. Once LUNA's market value fell below UST's outstanding supply the mechanism ran in reverse and reinforced itself, and about $40 billion went to zero in a week. That is [[defi-code-order|Stage 17.4]]'s case study; it belongs to “notes without reserves,” which is not fractional-reserve banking at all.

### ③ The GENIUS Act: private money written into law, and the rent-seeking in “no interest”

In July 2025 the United States signed the Guiding and Establishing National Innovation for U.S. Stablecoins Act (GENIUS Act), the first federal stablecoin law. Core provisions:

- issuers must be licensed institutions (bank subsidiaries or approved non-bank issuers);
- **100% reserves**, restricted to cash, insured deposits, Treasuries maturing within 93 days, Treasury-backed repos, and government money-market funds;
- monthly public disclosure of reserve composition, examined by registered accountants;
- holders have **priority** in the issuer's bankruptcy;
- **no interest or yield may be paid to holders**;
- anti-money-laundering and sanctions compliance, including the technical ability to freeze specified addresses.

Read the law through Austrian glasses and three things stand out.

**First, Rothbard won a round, in an unexpected place.** [[fractional-reserve|Stages 4.4]] and 9.4 covered the 100%-reserve position: a deposit is a bailment and may not be lent out. The GENIUS Act's stablecoin rule is almost word for word that position — reserves may not be lent, no maturity mismatch. The irony is that the same law makes no such demand of **bank deposits.** The US now has a strange two-track system: stablecoins are 100% warehouses, bank deposits are fractional loans.

**Second, “reserves = Treasuries” makes stablecoins a wholesale buyer of government debt.** If most of $300 billion in reserves sits in Treasury bills, stablecoins become a significant source of demand in the short-term Treasury market. That has a consequence in the sense of [[economics-of-state|Stage 8.4]]: **the expansion of private money has become a new channel for financing government deficits.** Hayek's private money was meant to **constrain** the state; the real thing **lends to it.** The 100% camp says this proves reserves should be gold or a final asset, not another debtor's paper.

**Third, “no interest” is rent-seeking, not prudential regulation.** Why forbid paying holders? The stated reason is that “stablecoins are payment instruments, not investments”; the real reason is **bank lobbying**: a stablecoin that is both fully reserved and passes Treasury interest to holders would drain banks' demand deposits. It is a textbook case for [[taxes-regulation|Stage 8.3]]: a clause framed as “protection” that in fact **protects incumbents from competition.** Free bankers (Selgin has commented directly) point out that interest competition is exactly what forces issuers to share reserve income with users — banning it lets issuers keep the Treasury yield while holders keep bearing inflation.

### ④ CBDCs: the Austrian objection to programmable money — digital euro, e-CNY, and the US ban

A central bank digital currency (CBDC) is a digital liability the central bank issues directly to the public (retail) or to financial institutions (wholesale). It differs fundamentally from the numbers in your bank account: a bank deposit is a claim on a **commercial bank**; a CBDC is a claim on the **central bank** — free of credit risk like a banknote, but programmable like an account.

**Steelman the supporters first.** The reasons given by the BIS and by central banks are not frivolous: (a) payment efficiency — instant, cheap, cross-border; (b) financial inclusion — the unbanked can hold central-bank money; (c) **monetary sovereignty** — without a CBDC, payments will be captured by private stablecoins or big tech and the central bank loses control of the system; (d) policy space — at the zero lower bound negative rates cannot be imposed on cash but can on a CBDC (Rogoff's *Curse of Cash* argument); (e) fighting money laundering and tax evasion. Of the five, (a) and (b) are genuine technical gains; (c), (d) and (e) are the heart of the Austrian objection — because they are precisely reasons to turn money into a policy instrument.

**The Austrian objection, along the lines of [[economics-of-state|Stages 8.4]] and 4.5:**

1. **Programmable = from rule to command.** [[spontaneous-order|Stage 7.4]] covered Hayek's distinction between “rules” (abstract constraints applying equally to all) and “commands” (directives aimed at specific people and purposes). Banknotes and gold are rule-like money: they do not know who you are or what you buy. A money that can be set so that “this subsidy buys only food and expires in three months” is command-like money. China's early e-CNY pilots did distribute “digital red envelopes” with expiry dates. Technically, a CBDC lets every price control and rationing scheme of [[price-controls|Stage 8.2]] be enforced directly at the payment layer, at zero enforcement cost.
2. **Traceable = centralization of knowledge.** In *The Road to Serfdom* (1944) Hayek argued that whoever controls the economic means ends up controlling the ends. A central bank that sees every transaction in real time holds the knowledge [[hayek-knowledge|Stage 7.2]] says is dispersed across millions of heads — that will not make planning feasible ([[bigdata-planning|Stages 7.5]] and 18.1 explain why), but it will make **control** feasible.
3. **Negative rates and expiry = a tax on holding money.** [[money-demand|Stage 4.2]] showed that holding money is an action serving uncertainty, a meaningful economic choice. Charging for holding (negative rates) or voiding it (expiry) is the digital version of Gesell's “stamped money” — which Keynes praised and Mises and Hayek regarded as a direct assault on the demand for money, tantamount to telling people “you may not be prudent.”
4. **A run accelerator.** A technical consequence rarely discussed: if a CBDC is a risk-free central-bank liability, then at every moment of bank unease depositors will switch instantly from deposits to CBDC — the run goes from “queueing” to “clicking.” The central bank must then either cap holdings (the ECB's plans have discussed a limit around €3,000) or be forced to backstop the whole banking system.

**The facts.** China's e-CNY has been piloted in many cities since 2019–20, with officially reported cumulative transactions in the trillions of yuan, though its share of everyday payments remains far below Alipay and WeChat Pay; the ECB's digital euro entered a preparation phase in November 2023, and in autumn 2025 the ECB decided to move to the next phase, planning a pilot around 2027 and possible issuance from 2029 at the earliest, still contingent on EU legislation; the US in January 2025 barred federal agencies by executive order from establishing or promoting a CBDC, with related legislation moving in Congress — but these are political decisions that can change at any time, so check the current state.

The Austrian verdict on CBDCs is not “digital money is bad” but: **the problem was never “digital”; it is “who can program it.”** Bitcoin is digital too, and nobody can give it an expiry date.

### ⑤ Currency competition in practice: stablecoin dollarization in Argentina, Turkey and Nigeria

Hayek's currency competition has barely happened in rich countries — users of dollars, euros and yen have little reason to switch. The real competition happens where the fiat currencies of [[central-banks-fiat|Stage 4.5]] fail.

- **Argentina**: inflation above 100% in 2023, an official exchange rate long divorced from the market rate, tight limits on buying dollars. Blockchain analytics firms estimate Argentina is among the highest stablecoin buyers in Latin America, with stablecoins making up roughly 60% or more of its crypto volume. What people do is simple: on payday, convert pesos to USDT; convert back when needed — **Menger's process from [[origin-of-money|Stage 4.1]] running in real time**: people choose the more saleable, better-preserving good as their stepping-stone.
- **Turkey**: the lira fell sharply in 2021–23. As a share of GDP, Turkey's stablecoin purchases ranked near the top of the world in 2023–24 (around 4% of GDP, with estimates varying).
- **Nigeria**: the naira was devalued repeatedly in 2023–24; the central bank at one point barred banks from serving crypto exchanges, and the result was growth in peer-to-peer stablecoin trading; stablecoins make up the majority of its crypto flows. Nigeria was also one of the first large countries to launch a retail CBDC (eNaira, 2021), whose adoption was minimal — **in the same country, private dollar notes were adopted spontaneously and the official digital currency was ignored.** It is this lesson's cleanest controlled experiment.

The Austrian reading has two layers. The first is a victory: **currency competition really does discipline bad money** — the central banks of Argentina and Nigeria have effectively lost their monopoly over their citizens' demand for money, and Mises's “flight into real values” (the prelude to the crack-up boom of [[cantillon-inflation|Stage 4.3]]) now has a more convenient exit: flight into digital dollars. The second is a warning: **people fled to the dollar, not to gold or Bitcoin.** They wanted a familiar unit of account with predictable near-term purchasing power. That does not refute Austrian theory — Menger's saleableness theory predicts exactly this — but it does refute the “hard money must win” narrative of [[hard-money|Stage 17.2]].

### ⑥ What the market chose: the free-banking and 100%-reserve readings of stablecoins

Bring back the two camps of [[free-banking|Stage 9.4]] and let each read the decade's evidence.

**The free-banking reading (White, Selgin):** stablecoins confirm their predictions exactly — private issue takes the form of redeemable claims on existing base money; issuers' reserve composition is graded instantly by the market (USDC's 48 hours); bad issuers are eliminated (Terra); competitive pressure forces transparency (from Tether's refusal to be audited to monthly reports). Their policy stance: allow interest, allow varied reserve structures, let clearing and redemption provide discipline; the GENIUS Act's “no interest” clause castrates competition. They would add: a CBDC is the opposite of free banking — a monopolist trying to push private notes out of the market.

**The 100%-reserve reading (Rothbard, Huerta de Soto):** the stablecoin decade proves two of their theses. First, wherever reserves included fractional-reserve claims (USDC's SVB deposit) or illiquid assets (Tether's secured loans), trouble followed under stress; only “100% final assets” is safe. Second, algorithmic stablecoins (Terra) prove that “notes without reserves” must collapse, whatever the packaging. Their policy stance: the GENIUS Act's 100% rule is right, but reserves should be assets that depend on no debtor — and Treasuries are the government's debt, so reserving in them merely swaps bank risk for Treasury risk. They too oppose CBDCs, as the final form of state monopoly money.

**Facts both camps must face:**

1. The market chose the dollar unit. This confirms Menger, not “the hardest wins.”
2. Private money's expansion is currently **financing the government** (reserves = Treasuries), not constraining it.
3. Real currency competition happens in poor countries, and the winner is a rich country's fiat.
4. Issuer-less money (Bitcoin) has not won the payments competition, though it holds a place in the store-of-value competition ([[bitcoin-regression|Stage 17.1]]).
5. A CBDC is the one technology that makes every intervention of [[economics-of-state|Stage 8.4]] enforceable at zero cost. Austrian opposition here is more unanimous than any of its disagreements about stablecoins.

[[defi-code-order|Stage 17.4]] places DAI-style “notes without an issuing company” and Terra's failure inside the smart-contract framework; [[bitcoin-cycles|Stage 17.5]] asks whether custodians could still generate cycles if the base money were Bitcoin rather than the dollar. This lesson is not investment advice.

## @analogy
Picture a small town that has always had one **official granary** issuing grain tickets, which lose value every year because the granary prints as many as it likes.

Then three new tickets appear. **Ticket A**: issued by a private warehouse, each ticket redeemable for one sack of rice, with the stock published monthly. **Ticket B**: from another warehouse, also promising a sack, but the warehouse holds, besides rice, some furniture and IOUs that “can be sold for rice later.” **Ticket C**: no warehouse at all; an automatic device promises “at any time, 1 ticket C for one sack's worth of shares in Company C” — as long as Company C's shares hold value, the ticket holds.

One weekend a partner bank where Warehouse A keeps 8% of its rice fails. Without waiting for the warehouse to open, townspeople start selling ticket A to each other, and the price drops to 0.87 sacks — **not because Warehouse A is short 13% of its rice, but because nobody wants to be at the back of the queue.** On Monday the government backstops the bank and ticket A returns to one sack. That was USDC in 2023. Ticket C's ending is simpler: the moment Company C's shares dip, everyone redeems, redemption pushes the shares lower, and in a week it is worth nothing — that was Terra in 2022.

The town government, seeing the private tickets' popularity, does two things. First it legislates: private tickets must be backed 100% by rice (or by the government's own IOUs), **but may not pay dividends to holders** — because the official granary's deposit business would lose customers. Then it prepares an **official electronic grain ticket**: each one records what you bought, can be restricted to certain vegetables, can be set to expire if unspent in three months, and can deduct a little automatically if you “hold too much.”

An Austrian watching this town says three things: private tickets beat the official ones, because they live on reputation and the granary does not; tickets backed by rice beat tickets backed by furniture, while tickets backed by government IOUs merely relocate the risk; and as for the expiring electronic ticket — **the problem is not “electronic,” it is “who can program it.”**

One more thing: all three private tickets were denominated in “sacks of rice.” Nobody invented a new unit. The townspeople wanted familiarity, not hardness.

## @misconceptions
- **“Stablecoins are 100% reserved, so they cannot suffer a run.”** — USDC refuted this in 48 hours in March 2023. If reserves include deposits at a fractional-reserve bank, they inherit that bank's run risk; and as long as redemption is not instantaneous, the secondary market prices being at the back of the queue — 8% exposure, 12% drop. A “100%” reserve is 100% only when the reserve itself is a final asset.
- **“Stablecoins prove Hayek right: private money has beaten state money.”** — Half right. Private issue did appear and was adopted; but every stablecoin pegs to the dollar, none created a new unit of account, and reserves are largely US Treasuries — private money is financing the state, not constraining it. The market confirmed Menger's saleableness theory and the free bankers' “redeemable claims” prediction, not Hayek's “competition of new units.”
- **“A CBDC is just digital cash; Austrians who oppose it are opposing technology.”** — The objection is not to “digital” but to “programmable”: usage restrictions, expiry dates, negative rates, real-time tracing, turning money from a rule applying equally to all into a command aimed at particular people ([[spontaneous-order|Stage 7.4]]). Bitcoin is digital too, and nobody can program it.
- **“The GENIUS Act's 100%-reserve rule proves the Austrians won.”** — The 100% clause does match Rothbard, but the same law exempts bank deposits, creating a two-track system; the “no interest” clause is a rent-seeking product of bank lobbying ([[taxes-regulation|Stage 8.3]]) that guts the competitive mechanism by which issuers would pass reserve income to users; and “reserves = Treasuries” makes stablecoins a deficit-financing channel.
- **“Currency competition will end with hard money (gold or Bitcoin) winning.”** — The evidence so far points the other way: where currency competition really happens — Argentina, Turkey, Nigeria — people flee to digital dollars. The unit of account is the strongest network good ([[network-effects|Stage 15.1]]); familiarity and predictable near-term purchasing power beat hardness. That does not refute Austrian theory, but it does refute the “hardest must win” narrative.

## @quiz
1. In March 2023 USDC fell to about $0.87 while its exposure to Silicon Valley Bank was only about 8%. What best explains the extra drop?
   - [ ] Circle concealed larger losses
   - [x] When redemption cannot be immediate, holders price being at the back of the queue — the definition of a run
   - [ ] US Treasuries defaulted
   - [ ] Stablecoins never had reserves
   > This is the run logic of [[fractional-reserve|Stage 4.4]]: even with sufficient assets, if redemption at par is not instantaneous, people pay to avoid being last. Once the government backstopped SVB on Monday, the price snapped back to $1.

2. From an Austrian standpoint, the most accurate characterization of the GENIUS Act's “no interest to holders” clause is?
   - [ ] Prudential regulation preventing stablecoins from becoming investments
   - [ ] Protection of holders from interest-rate risk
   - [x] A rent-seeking clause won by bank lobbying, designed to keep stablecoins from competing with bank deposits
   - [ ] A concession to CBDCs
   > A fully reserved stablecoin that shared Treasury interest would drain banks' demand deposits; banning interest in the name of “payment instruments” protects incumbents — a textbook case for [[taxes-regulation|Stage 8.3]].

3. What is the core Austrian objection to CBDCs?
   - [ ] Digital money is less secure than paper
   - [x] A CBDC is programmable (usage limits, expiry, negative rates) and traceable, turning money from a rule applying equally to all into a command aimed at specific people
   - [ ] CBDCs cause deflation
   - [ ] CBDCs would devalue Bitcoin
   > Rules vs commands ([[spontaneous-order|Stage 7.4]]), the economics of the state ([[economics-of-state|Stage 8.4]]), the demand for money ([[money-demand|Stage 4.2]]): the problem is not “digital” but “who can program it.”

4. As of 2025, what has real-world currency competition (Argentina, Turkey, Nigeria) revealed as “the market's choice”?
   - [ ] Gold tokens
   - [ ] Bitcoin as unit of account
   - [ ] The domestic central bank's CBDC
   - [x] Privately issued dollar-pegged stablecoins
   > People fled to digital dollars; Nigeria's eNaira saw minimal adoption. The unit-of-account network effect let familiarity beat hardness — an honest finding Austrians must record.

5. What do the free-banking and 100%-reserve camps each emphasize in reading the stablecoin decade?
   - [ ] Both think stablecoins should be banned
   - [x] Free bankers stress that market clearing discipline works (rising transparency, bad issuers eliminated) and oppose the interest ban; the 100% camp stresses that only final-asset reserves are safe and that Treasury reserves merely swap debtors
   - [ ] Free bankers support CBDCs, the 100% camp opposes them
   - [ ] Both regard Terra's algorithmic stablecoin as the right direction
   > Both readings are right, and both camps face the same facts: the market chose the dollar unit, private money is financing the government, and CBDCs are what both unanimously oppose.

## @further
- [Hayek, Denationalisation of Money (1976) — the original currency-competition proposal (IEA full text)](https://iea.org.uk/publications/research/denationalisation-of-money)
- [Lawrence H. White, “Should We Fear Stablecoins?” (Cato Institute) — a free-banking analysis of stablecoins](https://www.cato.org/blog/should-we-fear-stablecoins)
- [George Selgin, “Central Bank Digital Currency as a Potential Source of Financial Instability” (Cato Journal, 2021)](https://www.cato.org/cato-journal/spring/summer-2021/central-bank-digital-currency-potential-source-financial-instability)
- [Mises, The Theory of Money and Credit — the original taxonomy of money substitutes and fiduciary media](https://mises.org/library/book/theory-money-and-credit)
- [Selgin & White, “How Would the Invisible Hand Handle Money?” Journal of Economic Literature (1994) — the free-banking survey](https://www.jstor.org/stable/2728792)
