---
id: fractional-reserve
prereqs: money-demand
demo: bank-t-accounts
---

# Fractional-Reserve Banking & Credit Expansion

## @hook
You deposit $1,000; the bank keeps $100 and lends $900 to someone else — yet your account still says $1,000. **The same money can now be spent by two people at once.** That is fractional-reserve banking, and it is how the great majority of “money” in a modern economy is created. This lesson works through the process with T-accounts, lays out Huerta de Soto's legal argument (a deposit is not a loan), Rothbard's case for 100% reserves, and the free-banking rebuttal of Selgin and White — and then draws the consequence that matters most: **credit created from nothing pushes the loan rate below the natural rate of interest.** That is the bridge to the business cycle of [[abct-one-picture|Stage 5.1]].

## @intuition
Start with the goldsmith's story — simplified, but it captures the essentials.

In late-medieval London people stored gold coins in goldsmiths' vaults and received a receipt: “redeemable for 10 ounces of gold.” Soon people found it easier to pay with the receipt than to haul the gold, and receipts began to circulate like money. The goldsmith noticed something: **at any given time, only about a tenth of the gold on deposit was ever withdrawn.** The other nine tenths sat in the vault doing nothing.

So the goldsmith had an idea. He wrote extra receipts — receipts with no gold behind them — and lent them to people who needed money, at interest. As long as not everyone came for their gold at once, nobody would notice. The receipts circulated and looked identical to the “real” ones. The goldsmith had created purchasing power out of nothing and earned interest on it. **If one day everyone came to redeem at once, he was finished** — a bank run.

Today's bank is that goldsmith, on a far larger scale and with far more legal protection. You deposit $1,000; the bank keeps a fraction as reserves (say 10%, or $100) and lends the remaining $900 to someone buying a car. The car buyer pays the $900 to a dealer, who deposits it in his own bank; that bank keeps $90 and lends $810 … Round after round, your original $1,000 deposit becomes **up to $10,000 of deposits** across the banking system. $1,000 of that is what you actually deposited; the other $9,000 was **created by the banking system from nothing.** Your account says $1,000, the car buyer has $900, the dealer's account shows $900 … each of them believes they can withdraw at any time, and the vault holds $1,000.

This is “deposit money,” or in Mises's term a “money substitute” — the “second station” of the Cantillon chain in [[cantillon-inflation|Stage 4.3]], and the source of that station's power: give the banking system one dollar of reserves and it can conjure several dollars of deposits.

Why is this a major economic problem, rather than merely a clever way for banks to earn money? Three layers.

**The legal layer.** When you deposit money, are you asking the bank to *keep* it or to *borrow* it? Huerta de Soto shows these were two entirely different contracts as far back as Roman law, and that confusing them is the original sin of fractional reserves.

**The stability layer.** A bank with 10% reserves is, by definition, **unable to pay everyone at any moment.** It survives on the statistical assumption that “not everyone will come at once.” A run is not an accident; it is a possibility built into the structure.

**The layer that matters most — the business cycle.** The $9,000 the banks created is not the result of anyone's saving. It enters the loan market and pushes the interest rate below where it would be if only genuine savings were available to lend. [[natural-rate|Stage 3.5]] showed that the natural rate reflects people's time preference; a market rate pushed down by credit expansion **lies**: it tells entrepreneurs “society has saved more; longer projects are now affordable,” when nobody has saved an extra cent. That lie is where the business cycle begins — [[abct-one-picture|Stage 5.1]] draws it as a single picture.

The lesson ends with a modern note. In March 2020 the Federal Reserve cut the required reserve ratio to **zero**. Does that mean banks can create money without limit? No — what constrains banks today is capital adequacy, liquidity rules and loan demand, not reserve ratios. The textbook “10× multiplier” needs updating, but the core mechanism — banks creating deposits from nothing — is unchanged, and if anything more direct.

**In this lesson we break it into five pieces:**

- **① T-accounts: how $1,000 becomes $10,000**
- **② Deposit or loan? Huerta de Soto's legal argument**
- **③ 100% reserves vs free banking: Rothbard against Selgin and White**
- **④ Bank runs: why they are discipline, and the difference between “no cash” and “no assets”**
- **⑤ Credit expansion lowers interest rates: the bridge to the business cycle (with a post-2020 note)**

## @mechanics
### ① T-accounts: how $1,000 becomes $10,000

A T-account is the accountant's basic tool: assets on the left, liabilities on the right. For a bank, **your deposit is its liability** (it owes you), while the loans it makes and the reserves it keeps are its assets.

Step one: you deposit $1,000 in cash. Bank A's books:

$$
\begin{gathered}
\textbf{Bank A} \\[2pt]
\begin{array}{l|l}
\text{Assets} & \text{Liabilities} \\ \hline
\text{reserves } 1{,}000 & \text{deposit (you) } 1{,}000
\end{array}
\end{gathered}
$$

With a 10% reserve ratio, Bank A needs to keep only $100 and lends $900 to car buyer B. Note how the loan is made: not by handing B $900 in cash, but by **crediting B's account with $900** — the loan creates a deposit:

$$
\begin{gathered}
\textbf{Bank A} \\[2pt]
\begin{array}{l|l}
\text{Assets} & \text{Liabilities} \\ \hline
\text{reserves } 1{,}000 & \text{deposit (you) } 1{,}000 \\
\text{loan } 900 & \text{deposit (B) } 900
\end{array}
\end{gathered}
$$

At this moment Bank A's deposits total $1,900 while its reserves are $1,000. **The money supply has already grown by $900** — you can still withdraw $1,000 at any time, and B can withdraw $900.

B pays the $900 to car dealer C, who deposits it in Bank B. Bank A's reserves fall by $900 (transferred to Bank B) and its deposits fall by $900 (B's account is emptied) — leaving Bank A with reserves 100, loan 900, deposits 1,000, exactly the 10% ratio. Bank B now holds reserves 900 against deposits 900; it keeps 90 and lends 810 …

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Loans create deposits: how $1,000 of reserves carries $10,000 of deposits (10% reserve ratio)</text><g><rect x="20" y="40" width="190" height="90" rx="8" fill="var(--surface)" stroke="var(--line)"/><text x="115" y="58" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Bank A</text><line x1="115" y1="64" x2="115" y2="124" stroke="var(--line)"/><line x1="30" y1="64" x2="200" y2="64" stroke="var(--line)"/><text x="70" y="80" text-anchor="middle" font-size="10.5" fill="var(--muted)">Assets</text><text x="160" y="80" text-anchor="middle" font-size="10.5" fill="var(--muted)">Liabilities</text><text x="70" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink)">reserves 100</text><text x="70" y="114" text-anchor="middle" font-size="10.5" fill="var(--orange-ink)" font-weight="600">loan 900</text><text x="160" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink)">deposits 1,000</text></g><g><rect x="225" y="40" width="190" height="90" rx="8" fill="var(--surface)" stroke="var(--line)"/><text x="320" y="58" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Bank B</text><line x1="320" y1="64" x2="320" y2="124" stroke="var(--line)"/><line x1="235" y1="64" x2="405" y2="64" stroke="var(--line)"/><text x="275" y="80" text-anchor="middle" font-size="10.5" fill="var(--muted)">Assets</text><text x="365" y="80" text-anchor="middle" font-size="10.5" fill="var(--muted)">Liabilities</text><text x="275" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink)">reserves 90</text><text x="275" y="114" text-anchor="middle" font-size="10.5" fill="var(--orange-ink)" font-weight="600">loan 810</text><text x="365" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink)">deposits 900</text></g><g><rect x="430" y="40" width="190" height="90" rx="8" fill="var(--surface)" stroke="var(--line)"/><text x="525" y="58" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Bank C</text><line x1="525" y1="64" x2="525" y2="124" stroke="var(--line)"/><line x1="440" y1="64" x2="610" y2="64" stroke="var(--line)"/><text x="480" y="80" text-anchor="middle" font-size="10.5" fill="var(--muted)">Assets</text><text x="570" y="80" text-anchor="middle" font-size="10.5" fill="var(--muted)">Liabilities</text><text x="480" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink)">reserves 81</text><text x="480" y="114" text-anchor="middle" font-size="10.5" fill="var(--orange-ink)" font-weight="600">loan 729</text><text x="570" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink)">deposits 810</text></g><path d="M210 85 L222 85" stroke="var(--orange)" stroke-width="2"/><path d="M415 85 L427 85" stroke="var(--orange)" stroke-width="2"/><text x="320" y="150" text-anchor="middle" font-size="10.5" fill="var(--muted)">… on to the n-th bank, each holding 90% of the previous bank's deposits</text><g><text x="30" y="185" font-size="11" fill="var(--muted)">The whole banking system (consolidated)</text><rect x="30" y="195" width="580" height="22" fill="var(--surface-2)" stroke="var(--line)" rx="4"/><rect x="30" y="195" width="58" height="22" fill="var(--blue)" rx="4"/><text x="59" y="210" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">1,000</text><rect x="88" y="195" width="522" height="22" fill="var(--orange)" opacity=".8"/><text x="349" y="210" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="700">deposits created from nothing: 9,000</text><text x="30" y="238" font-size="10.5" fill="var(--blue)" font-weight="600">■ reserves actually deposited: 1,000</text><text x="230" y="238" font-size="10.5" fill="var(--orange-ink)" font-weight="600">■ deposits created by loans: 9,000 = 1,000 × (1/0.10 − 1)</text><text x="30" y="262" font-size="10.5" fill="var(--ink)">total deposits 10,000 · total loans 9,000 · reserves 1,000 · multiplier = 1 / reserve ratio = 10</text><text x="30" y="290" font-size="10.5" fill="var(--red)" font-weight="600">Every depositor believes they can withdraw at any time; the vault holds one tenth. Not an accident — the structure.</text></g></svg><figcaption>Each bank “lends only 90% of its deposits” and looks prudent; consolidated, the system carries $10,000 of deposits on $1,000 of reserves — $9,000 created by loans. In the demo you can change the reserve ratio and watch the multiplier change.</figcaption></figure>

Sum it up: deposits = 1,000 + 900 + 810 + 729 + … = 1,000 × (1 + 0.9 + 0.81 + …) = 1,000 ÷ 0.1 = **$10,000**. That is the **money multiplier** = 1 ÷ reserve ratio. At 20% the multiplier is 5; at 5% it is 20; at 100% it is 1 — the banks can create no money at all.

Two clarifications. First, each individual bank really does lend out “only part of the deposits it received” — every banker can sincerely say “we just lend our depositors' money.” But the **system** creates money, because loans become new deposits and new deposits are lent again. Second, the multiplier is an **upper bound**: if people hold some money as cash, or banks keep excess reserves, the actual multiplier is smaller than 10. The real-world multiplier is far messier than the textbook — ⑤ explains what actually constrains banks today.

### ② Deposit or loan? Huerta de Soto's legal argument

In the first three chapters of *Money, Bank Credit, and Economic Cycles* (1998), Jesús Huerta de Soto does something most economists skip: **he goes back to the law.** He distinguishes two ancient contracts:

- **The loan (mutuum).** I lend you $1,000; ownership passes to you; you may use it as you wish and repay $1,000 plus interest at maturity. During that time **I have no use of the money** — a right I gave up voluntarily, in exchange for interest.
- **The irregular deposit.** I hand you $1,000 for safekeeping (“irregular” because the good is fungible — you need not return the same banknotes, but must always be able to return the same amount). Ownership **does not pass**; your obligation is to **keep the full amount available at all times.** You may charge a custody fee, but you may not use the money.

Huerta de Soto's claim is that a demand deposit is legally a **deposit**, not a **loan**: the depositor's intention is “my money is available whenever I want it,” not “I am lending the bank my money for a period.” Fractional-reserve banking treats a deposit as a loan, so that **two people claim ownership of the same money at the same time.** He traces Roman law (the *Digest*), medieval canon law and early banking history to show that this practice was long treated as misappropriation, and was only later legalized by state charter.

The strength of the argument is that it does not depend on economic consequences: even if fractional reserves caused no macroeconomic harm, they would still be a confusion of contracts. Its weakness should also be stated. The contracts modern depositors sign **explicitly say** the bank may use the funds, and depositors know it (or are legally deemed to). The free bankers of ③ conclude that this is a voluntary contract with known risks and nothing is legally amiss. Huerta de Soto's reply: even with both parties consenting, third parties (the whole economy) bear the consequences of the credit expansion; and “available on demand” and “already lent out” cannot both be true at once — the contract promises something impossible.

### ③ 100% reserves vs free banking: Rothbard against Selgin and White

Here Austrians have a genuine, still-unsettled dispute.

**Rothbard's case for 100% reserves** (*The Mystery of Banking*, 1983; “The Case for a 100 Percent Gold Dollar,” 1962): demand deposits must be fully backed by reserves; banks may lend only time deposits (money whose owner has explicitly given up its use for a period). Three reasons: legally (as in ②) fractional reserves are fraud; economically they are the source of credit expansion and the business cycle; morally they are a privilege to “create purchasing power from nothing,” economically indistinguishable from counterfeiting except for being legal. Rothbard held that in a free market without a central bank as backstop, fractional-reserve banks would be quickly eliminated by runs; 100% reserves are the market's natural equilibrium, and the only reason it has not appeared is that the state has always protected fractional-reserve banks.

**The free-banking rebuttal** (George Selgin, *The Theory of Free Banking*, 1988; Lawrence H. White, *Free Banking in Britain*, 1984). Its strongest form first:

- **Historical evidence.** Free-banking systems in Scotland (1716–1845), nineteenth-century Canada, Sweden and elsewhere — no central bank, fractional reserves, competing note issuers — ran remarkably stably, with bank failure rates below those of England under the Bank of England.
- **Market discipline.** In a competitive system with no central bank and no deposit insurance, a bank that over-issues finds its notes flowing back to rivals through the **clearinghouse**, and the rivals demand reserves — an over-expanding bank rapidly loses reserves. That is an automatic brake, with no need for 100% reserves.
- **Elastic supply.** When the public's demand for money rises (the demand for cash balances of [[money-demand|Stage 4.2]]), free banks can meet it by issuing more, avoiding needless deflation; a 100% system cannot.
- **Freedom of contract.** As long as depositors knowingly consent, fractional reserves are a legitimate voluntary contract.

The Rothbardian reply: Scottish “free banking” had the Bank of England as an implicit backstop; clearinghouse discipline prevents a **single** bank from over-expanding but not **all banks expanding together** (then nobody's notes flow to a rival on net); and “meeting the demand for money” conflates two ways of meeting it — falling prices meet it too ([[money-demand|Stage 4.2]]). The debate is developed fully in [[free-banking|Stage 9.4]], including Hayek's position in *The Denationalisation of Money* (1976). For now, remember: **both camps oppose central banking**; they disagree about whether, without a central bank, fractional reserves would be eliminated by the market on their own. Austrians are not a monolith, a point [[internal-debates|Stage 14.3]] returns to.

### ④ Bank runs: why they are discipline, and the difference between “no cash” and “no assets”

A run is an inherent possibility of fractional reserves, not an external accident. But Austrians view runs the opposite way from the mainstream: **a run is the market's discipline on an over-extended bank**, just as losses are the discipline on mistaken entrepreneurs ([[profit-loss|Stage 6.3]]).

To understand runs you must separate two concepts:

- **Illiquid.** The bank's total assets ≥ its liabilities, but the assets are long-term loans that cannot be turned into cash immediately; when depositors want cash, the vault runs short. This bank **is not bankrupt**; it merely “cannot pay right now.” Given time (or the ability to sell loans at a discount), it can pay everyone.
- **Insolvent.** The bank's assets (loans valued at what can actually be recovered) < its liabilities. Given unlimited time it still cannot pay everyone. This bank **is already bankrupt**; the books just have not admitted it.

In numbers: a bank has deposits 10,000, reserves 1,000, loans 9,000. Depositors come for $1,500 — the vault holds 1,000: **illiquid**. If the loans are good (fully recoverable), it can borrow 500 or sell some loans and survive. But if 15% of the loans are bad (1,350 unrecoverable), true assets = 1,000 + 7,650 = 8,650 < 10,000 of deposits — it is **insolvent**, and any “liquidity support” merely pushes the loss into the future.

Mainstream theory (the Diamond–Dybvig model of 1983) treats runs as “self-fulfilling panics”: even a healthy bank will be run if depositors believe others will run — hence deposit insurance and a lender of last resort. The argument has merit, but Austrians point to its cost: **deposit insurance and central-bank backstops remove depositors' incentive to monitor banks**, so banks expand more boldly (moral hazard) — the banking system of 2008 was exactly that. And in practice, “healthy banks run innocently” are far rarer than “unhealthy banks run correctly”: a run is usually depositors' accurate nose for bad loans. This lesson's demo lets you press a “run” button and see illiquidity and insolvency separated in numbers.

### ⑤ Credit expansion lowers interest rates: the bridge to the business cycle (with a post-2020 note)

Now the part that matters most. Where did the $9,000 of deposits created in ① go? Into the market **as loans.** And the loan market is like any other: more supply, lower price. The price of loans is **the interest rate.**

[[natural-rate|Stage 3.5]] distinguished two rates: the **natural rate** — the rate that would prevail if only genuine savings were available to lend, set by society's time preference; and the **market rate** — the rate actually struck in the loan market. Under 100% reserves the two coincide: loanable funds = real savings. Under fractional reserves, loanable funds = real savings + bank-created credit, and the market rate is pushed below the natural rate.

In numbers: an economy's real savings are $1,000 and the natural rate is 5%. The banking system creates $9,000 of credit; loanable funds become $10,000 and the market rate is pushed to 2%. Entrepreneurs see 2%, run the numbers, and find that many long-term projects that did not pay before — new factories, mines, office towers — now do, and they break ground. **But society has not saved an extra $9,000** — consumers' time preference is unchanged; they still want to consume now. Resources are pulled in two directions at once: entrepreneurs building long projects, consumers buying present goods. The tug-of-war cannot last. That is the whole story of [[abct-one-picture|Stage 5.1]]: **the interest rate lowered by credit expansion is a lie; the boom is the period in which the lie is believed, and the bust the period in which it is exposed.**

**A modern note (accuracy matters).** On 26 March 2020 the Federal Reserve cut required reserve ratios for all depository institutions to 0%. Does that make the multiplier infinite, letting banks create unlimited deposits? No. What constrains bank lending in practice has never been primarily the reserve ratio:

- **Capital adequacy** (the Basel accords): a bank's own capital must reach a set fraction of its risk-weighted assets (roughly 8–10% or more); expanding assets through lending requires matching capital.
- **Liquidity rules** (the Liquidity Coverage Ratio and others): banks must hold enough high-quality liquid assets.
- **Loan demand and credit risk**: a bank must find borrowers willing to borrow at the going rate and expected to repay.
- **The central bank's interest-rate policy**: since 2008 the Fed has set a floor under rates by paying interest on reserves; the banking system holds enormous excess reserves, so “scarce reserves” no longer bind.

So the textbook's mechanical story — “central bank injects reserves → the multiplier expands them” — is out of date. The more accurate description today is **“banks lend first, creating deposits, then look for reserves; the central bank steers lending through interest rates and regulation rather than the quantity of reserves”** — as the Bank of England openly acknowledged in a well-known 2014 article. What does this do to the Austrian argument? **The core is untouched — if anything, it is more direct.** Bank loans still create deposits from nothing; those deposits are still not genuine savings; they still push the market rate away from the natural rate. All that has changed is who presses the accelerator: the central bank's rate target and regulatory capital rather than the quantity of reserves. [[central-banks-fiat|Stage 4.5]] covers the central bank; [[free-banking|Stage 9.4]] asks whether free banks would restrain themselves without one; and [[bitcoin-cycles|Stage 17.5]] poses a new question: under a Bitcoin standard, where reserves cannot be conjured by a central bank, would fractional-reserve banking and the business cycle still exist?

The lesson in one sentence: **fractional-reserve banks manufacture money substitutes from nothing through “loans create deposits”; this credit, which is not saving, lowers the market interest rate and makes it lie about time preference — legally it confuses custody with lending, structurally it builds in bank runs, economically it is the source of the business cycle; and Austrians still disagree about whether a free market would eliminate it on its own.** The next lesson ([[central-banks-fiat|Stage 4.5]]): why this system needs a central bank as backstop, and what happened once it got one.

## @analogy
Think of a bank as a **coat check.**

You hand over your coat and receive a numbered ticket. The attendant notices that over an entire evening only about one guest in ten comes to collect at any given moment. So he quietly **rents nine tenths of the coats to shivering passers-by outside**, for a fee. Every guest holds a ticket and believes their coat is available on demand; every passer-by is wearing one. **One coat, two simultaneous “owners.”** As long as everyone does not come at once, all is well, and the attendant pockets the rent.

Huerta de Soto's legal argument: you handed him the coat for *safekeeping*, not *to rent out* — he had no right, even if he always manages to return it.

The free bankers reply: if the ticket says “this establishment may rent out your coat; in return, no custody fee,” and you sign, that is a voluntary contract. And if ten coat checks compete on the same street, the one that rents too aggressively will keep failing to produce coats and lose customers — the market restrains it. The Rothbardians answer: that only works because there is no “Central Coat Check” standing behind them promising “whoever cannot produce a coat, I will cover” — once that exists, every coat check rents more aggressively.

The run: one night the temperature suddenly drops and 30% of guests come for their coats at once. The rack holds 10%. If the passers-by outside can all return their coats within the hour, this is merely “cannot pay right now” (illiquidity); if half of them have walked off wearing them, it is “can never pay” (insolvency).

And the layer that matters most — the interest rate — works like this: because nine times as many coats have suddenly appeared for rent on the street, **the rental fee collapses.** Seeing cheap rentals, passers-by decide to hold all-night outdoor parties and open open-air restaurants (long-term projects). They think “the city has more coats now.” It does not have a single extra coat — the same coats were counted twice. When the cold night comes, the parties and the restaurants close. That is the business cycle of [[abct-one-picture|Stage 5.1]].

## @misconceptions
- **“Banks just lend out depositors' money — they are intermediaries, they don't create money.”** — A single bank looks that way; but loans are made by crediting the borrower's account, which creates a new deposit, which is lent again. Consolidate the system and $1,000 of reserves carries $10,000 of deposits at a 10% ratio — $9,000 of money substitutes created by loans.
- **“With reserve requirements at zero, banks can create unlimited money.”** — U.S. required reserves have indeed been zero since 2020, but what constrains banks has always been mainly capital adequacy, liquidity rules, loan demand and central-bank rate policy, not the reserve ratio. The mechanical textbook multiplier needs updating; the core mechanism — loans create deposits — does not.
- **“Bank runs are irrational panics, which is why we need deposit insurance.”** — Runs are the market's discipline on over-extended banks, and usually depositors' accurate nose for bad loans. Deposit insurance and central-bank backstops remove depositors' incentive to monitor, making banks expand more boldly — moral hazard. Healthy banks run innocently are far rarer than unhealthy banks run correctly.
- **“Illiquid means bankrupt.”** — Two different things. Illiquid: assets ≥ liabilities but cannot be turned into cash right now; given time, everyone is paid. Insolvent: assets at true recoverable value < liabilities; with unlimited time, everyone still cannot be paid. Confusing them lets “liquidity support” conceal real bankruptcy and shift the loss to the future and to others.
- **“All Austrians support 100% reserves.”** — No. Rothbard and Huerta de Soto do; the free-banking school of Selgin and White holds that in a competitive system without a central bank, clearinghouse discipline suffices to restrain fractional-reserve banks. Both camps oppose central banking; they disagree about whether the free market would eliminate fractional reserves on its own. A genuine, unresolved internal debate.

## @quiz
1. With a 10% reserve ratio you deposit $1,000 in cash. To what maximum can the banking system expand total deposits, and how much of that is created by loans?
   - [ ] $1,000; none
   - [ ] $1,900; $900
   - [x] $10,000; $9,000
   - [ ] $100,000; $99,000
   > Multiplier = 1 ÷ reserve ratio = 10; deposits = 1,000 + 900 + 810 + … = 10,000. Only $1,000 was actually deposited; the other $9,000 are money substitutes manufactured by “loans create deposits.”

2. What is the core difference between a loan (mutuum) and an irregular deposit in Huerta de Soto's analysis?
   - [ ] A loan pays interest; a deposit does not
   - [x] A loan transfers ownership and use; a deposit transfers no ownership, and the custodian must keep the full amount available at all times
   - [ ] A loan is long-term; a deposit is short-term
   - [ ] There is no real difference, only a difference of name
   > A demand deposit's intention is “available whenever I want it,” which is custody; fractional reserves treat the deposit as a loan so that two people claim the same money — a confusion of contracts for Huerta de Soto, a legitimate consented contract for the free bankers.

3. A bank has deposits 10,000, reserves 1,000, loans 9,000; depositors ask for $1,500. If every loan is fully recoverable, the bank's condition is:
   - [ ] Perfectly normal, no problem at all
   - [ ] In need of immediate nationalization
   - [ ] Insolvent — already bankrupt
   - [x] Illiquid but solvent — given time it can pay everyone
   > Assets (1,000 + 9,000) ≥ liabilities 10,000, but it cannot produce $1,500 of cash right now — **illiquid**. If 15% of loans were bad, assets would be 8,650 < 10,000 — **insolvent**. Only by separating the two can you tell when “liquidity support” helps and when it conceals.

4. What is the free bankers' (Selgin/White) strongest argument against 100% reserves?
   - [x] In a competitive system without a central bank, an over-issuing bank rapidly loses reserves through the clearinghouse — market discipline restrains fractional reserves, and elastic supply can meet money demand
   - [ ] Reserve ratios should be set by government
   - [ ] There has never been a 100%-reserve bank in history
   - [ ] Banks need profits and 100% reserves would bankrupt them
   > Historical cases such as Scotland 1716–1845 and the clearinghouse mechanism are the free bankers' core evidence; Rothbardians reply that it cannot stop all banks expanding together, and that Scotland had the Bank of England as implicit backstop. [[free-banking|Stage 9.4]] develops this.

5. Real savings are $1,000 and the natural rate is 5%; after banks create $9,000 of credit the market rate falls to 2%. Which consequence do Austrians regard as most important?
   - [ ] Savers receive more interest
   - [x] The market rate lies about time preference: entrepreneurs launch long projects, but nobody has saved an extra cent — the starting point of the business cycle
   - [ ] Prices immediately rise 900%
   - [ ] None, because long-term rates automatically revert
   > The credit-lowered rate tells entrepreneurs “society has saved more” while consumers' time preference is unchanged. Resources are pulled toward long projects and present consumption at once; the tug-of-war cannot last — [[abct-one-picture|Stage 5.1]]'s ABCT begins exactly here.

## @further
- [Jesús Huerta de Soto, Money, Bank Credit, and Economic Cycles (1998/2006), full text — the legal argument and credit expansion](https://mises.org/library/book/money-bank-credit-and-economic-cycles)
- [Rothbard, The Mystery of Banking (1983) — the accessible full treatment of fractional reserves and the 100% case](https://mises.org/library/book/mystery-banking)
- [George Selgin, The Theory of Free Banking (1988) — the systematic free-banking statement (full text, Mises Institute)](https://mises.org/library/book/theory-free-banking-money-supply-under-competitive-note-issue)
- [Lawrence H. White, “Competing Money Supplies”, Econlib Encyclopedia — a concise overview of free banking and currency competition](https://www.econlib.org/library/Enc/CompetingMoneySupplies.html)
- [Bank of England, “Money creation in the modern economy” (2014) — a central bank admitting that loans create deposits](https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy)
