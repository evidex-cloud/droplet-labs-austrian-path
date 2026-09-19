export default {
  id: "central-banks-fiat",
  stage: 4,
  order: 5,
  title: "Central Banks & Fiat Money: From the Gold Standard to After 1971",
  difficulty: "core",
  prereqs: ["fractional-reserve"],

  oneLiner:
    "The last lesson showed that fractional-reserve banking has bank runs built in. So who backstops it? The central bank — and the price of a backstop is that it must be able to create reserves from nothing, which means it must, step by step, escape from gold. This lesson first states the case for central banks at its strongest (Bagehot's lender of last resort, payment-system stability, “elastic currency” in a crisis), then Rothbard's reply (the central bank as a cartelization of banking and a financing machine for the state), and then walks the timeline: **1694 Bank of England → 1913 Federal Reserve → 1914 suspension → 1922 gold-exchange standard → 1933 gold confiscation → 1944 Bretton Woods → 1971 Nixon closes the gold window.** One number summarizes the result: since 1913 the dollar has lost about 96–97% of its purchasing power. And the world after 1971 — every major currency an unanchored fiat money at the same time — is an experiment with no precedent in human history.",

  intuition: `
Return to the coat check of the last lesson. Ten coat checks are all secretly renting out their guests' coats, and every one of them dreads the night the temperature drops. What do they want most? A **central coat check** that will lend coats to any of them that cannot produce one. With that in place, each of them dares to rent more aggressively — somebody has their back. And for the central coat check to do this, it needs a power nobody else has: **it must be able to conjure coats out of nothing.**

That is the two faces of a central bank. The bright face: it is the **lender of last resort**. When a healthy but illiquid bank faces a run, the central bank lends it reserves so that one panic does not drag down the whole system. Walter Bagehot's classic prescription in *Lombard Street* (1873) was to “**lend freely, at a penalty rate, on good collateral.**” The reason is real: in the Panic of 1907, J. P. Morgan personally played lender of last resort, and many concluded that the nation needed a formal institution to do the job. The Federal Reserve was founded in 1913, with “furnishing an elastic currency” and preventing panics as its stated purpose.

The dark face: an institution that can create reserves is an institution that lets every bank **expand together.** The last lesson showed that clearinghouse discipline restrains a single bank's over-expansion but not a simultaneous expansion by all — and the central bank solves exactly that “problem” for the bankers. Rothbard's argument in *The Case Against the Fed* (1994) is that the Fed was not built to protect the public but by bankers (drafted in secret at Jekyll Island in 1910) to escape market discipline — **a state-chartered banking cartel.** An older thread runs alongside: the Bank of England was founded in 1694 for the direct purpose of lending £1.2 million to William III to fight a war. **From birth, the central bank has been the state's financing machine.**

But as long as a central bank is chained to gold, what it can do is limited: every note it creates can in principle be presented for gold. So the history of central banking is the history of **unlocking the gold chain link by link.** Each unlocking had an emergency justification — a war, a depression, a crisis — and each was “temporary,” and none was ever reversed. In 1914 the European belligerents suspended gold convertibility to fight the war; in the 1920s the “gold-exchange standard” let central banks hold pounds and dollars as reserves, diluting gold by one layer; in 1933 Roosevelt ordered Americans to surrender their gold and in 1934 devalued the dollar by 41%; in 1944 Bretton Woods tied every currency to the dollar and only the dollar to gold, redeemable only by foreign governments; on 15 August 1971 Nixon “temporarily” closed the gold window — and it has never reopened.

Since that day, humanity has for the first time lived in a world where **no major currency is anchored to anything.** It has run for over fifty years without collapsing — which must be admitted honestly, since more than a few Austrians have wrongly predicted its end (Stage 14.4). But it has produced another set of numbers: the dollar has lost about 96–97% of its purchasing power since 1913; U.S. M2 grew from about $300 billion in 1959 to about $21 trillion in 2024. The regression theorem (Stage 4.1) explains why fiat money can work: it inherited the gold dollar's price memory. The Cantillon effect (Stage 4.3) explains where the wealth flowed in those fifty years. This lesson completes the timeline and leaves the questions to later stages: how ABCT reads 1929 and 2008 (Stage 5.4), how to read the Fed's statements (Stage 13.5), whether Bitcoin is a response to this experiment (Stage 17.1), and whether central bank digital currencies are its next step (Stage 17.3).

**In this lesson we break it into five pieces:**

- **① Why central banks exist: Bagehot and the strongest case for a lender of last resort**
- **② Rothbard's reply: cartelization and financing the state**
- **③ The timeline: 1694 to 1971, how the gold chain came undone link by link**
- **④ The numbers: M2, purchasing power, and “about 96–97%”**
- **⑤ An experiment without precedent: the world after 1971, and where it leads**
`,

  mechanics: `
### ① Why central banks exist: Bagehot and the strongest case for a lender of last resort

State the case for central banks at full strength first. These are not straw men, and some Austrians accept parts of them.

**Reason one: lender of last resort.** Walter Bagehot (*Lombard Street*, 1873) observed that runs under fractional reserves are contagious: one bank fails, depositors suspect all banks, and healthy banks are dragged down too. The remedy is a central institution holding large reserves that in a panic “lends freely, at a penalty rate, on good collateral” — so that only illiquid banks come to borrow (insolvent banks have no good collateral, and the penalty rate keeps healthy banks from abusing the facility). The prescription is logically elegant: it tries to **rescue only the illiquid, never the insolvent** (the distinction from ④ of the last lesson).

**Reason two: elastic currency.** In an agricultural economy the demand for cash surges at harvest; a fixed money stock produces seasonal “money famines” and interest-rate spikes, and the Panic of 1907 broke out in exactly such a seasonal squeeze. A money supply that can expand on demand and contract afterward smooths those swings. The 1913 Federal Reserve Act's title includes “to furnish an elastic currency.”

**Reason three: the payment system and a uniform currency.** Nineteenth-century America had thousands of banks each issuing its own notes; out-of-town notes were accepted at a discount and clearing was chaotic. A central clearing institution and a uniform monetary unit cut transaction costs dramatically.

**Reason four (added later): macroeconomic stability.** After Keynes, central banks were charged with smoothing the cycle and maintaining employment; after Friedman, with maintaining price stability — Volcker's high rates of 1979–82 breaking inflation are routinely cited as an independent central bank's success.

The common structure of these reasons: **a fractional-reserve banking system is fragile and needs a backstop.** Austrians do not deny the premise; they interrogate the conclusion. Does the backstop remove the fragility, or amplify and relocate it?

### ② Rothbard's reply: cartelization and financing the state

Rothbard's response (*The Case Against the Fed*, 1994; *A History of Money and Banking in the United States*) has three layers.

**Layer one: a lender of last resort cannot rescue only the illiquid.** Bagehot's prescription requires the central bank to tell, in the middle of a panic, who merely lacks cash and who is already insolvent — precisely the hardest thing to judge in a panic (loans' true value is known only at liquidation). In practice central banks almost always **rescue both**: Bear Stearns and AIG in 2008, Silicon Valley Bank in 2023 (with the deposit-insurance cap waived after the fact). Once banks know they will be rescued either way, they take bigger risks — moral hazard. And the “penalty rate” vanished long ago: what modern central banks do in a crisis is cut rates to zero. **Bagehot's prescription has never actually been followed.**

**Layer two: the central bank is a banking cartel.** The last lesson showed that under free competition the clearinghouse restrains any single bank, but if all banks want to expand together nothing stops them. The bankers' “problem” was: how can we all expand without being run? The answer is a common reserve pool and an institution that can top it up from nothing. Rothbard documented the Jekyll Island meeting of 1910 — bankers from the Morgan, Rockefeller and Kuhn-Loeb groups, with Senator Aldrich, secretly drafting the Fed's blueprint — and argued that the 1913 Act allowed the banking system to **expand in unison**: the credit inflation of the 1920s (the 1929 case of Stage 5.4) was the first full cycle after the Fed's founding. The argument requires no conspiracy theory: bankers seeking to escape market discipline is perfectly rational self-interest; the problem is that the state granted them the privilege.

**Layer three: the central bank is the state's financing machine.** This is the oldest thread. The Bank of England (1694) existed to lend William III money to fight France; the Fed's first major task was financing World War I (U.S. money supply expanded sharply in 1917–19); during World War II the Fed pegged Treasury yields below 2.5% to pay for the war, an arrangement that ended only with the Treasury–Fed Accord of 1951. The logic is simple: a state has three ways to finance itself — taxes (unpopular), borrowing (limited), and printing (hidden). **The central bank makes the third possible and packages it as technical “monetary policy.”** Inflation becomes a tax that needs no legislation; on the Cantillon chain of Stage 4.3, the government and its contractors always sit in the front row.

A fair addendum: Rothbard's historical narrative sometimes reads motives too single-mindedly, and mainstream monetary historians (Friedman and Schwartz, for instance) read 1913 more charitably. Friedman himself — a critic of the Fed but not an abolitionist — held that the problem was not the Fed's existence but its discretion, and proposed a fixed money-growth rule instead (Stage 11.2). The Austrian answer: as long as the institution has the **ability** to create reserves, the rule will be abandoned in the next crisis — and the history after 1971 has confirmed that again and again.

### ③ The timeline: 1694 to 1971, how the gold chain came undone link by link

<figure><svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Seven unlockings of the gold chain: each “temporary,” none ever reversed</text><line x1="40" y1="70" x2="600" y2="70" stroke="var(--line)" stroke-width="3"/><g><circle cx="60" cy="70" r="7" fill="var(--green)"/><text x="60" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1694</text><text x="60" y="95" text-anchor="middle" font-size="10" fill="var(--muted)">Bank of England</text><text x="60" y="108" text-anchor="middle" font-size="10" fill="var(--muted)">finances the king's war</text></g><g><circle cx="150" cy="70" r="7" fill="var(--green)"/><text x="150" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1913</text><text x="150" y="95" text-anchor="middle" font-size="10" fill="var(--muted)">Federal Reserve</text><text x="150" y="108" text-anchor="middle" font-size="10" fill="var(--muted)">still on gold</text></g><g><circle cx="230" cy="70" r="7" fill="var(--orange)"/><text x="230" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1914</text><text x="230" y="95" text-anchor="middle" font-size="10" fill="var(--muted)">WWI: Europe suspends</text><text x="230" y="108" text-anchor="middle" font-size="10" fill="var(--muted)">“wartime measure”</text></g><g><circle cx="310" cy="70" r="7" fill="var(--orange)"/><text x="310" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1922</text><text x="310" y="95" text-anchor="middle" font-size="10" fill="var(--muted)">gold-exchange standard</text><text x="310" y="108" text-anchor="middle" font-size="10" fill="var(--muted)">pounds/dollars as reserves</text></g><g><circle cx="390" cy="70" r="7" fill="var(--red)"/><text x="390" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1933–34</text><text x="390" y="95" text-anchor="middle" font-size="10" fill="var(--muted)">EO 6102 confiscation</text><text x="390" y="108" text-anchor="middle" font-size="10" fill="var(--muted)">$20.67 → $35 per oz</text></g><g><circle cx="470" cy="70" r="7" fill="var(--orange)"/><text x="470" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1944</text><text x="470" y="95" text-anchor="middle" font-size="10" fill="var(--muted)">Bretton Woods</text><text x="470" y="108" text-anchor="middle" font-size="10" fill="var(--muted)">only the dollar on gold</text></g><g><circle cx="560" cy="70" r="9" fill="var(--red)" stroke="var(--ink)" stroke-width="2"/><text x="560" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">1971</text><text x="560" y="95" text-anchor="middle" font-size="10" fill="var(--muted)">Nixon closes gold window</text><text x="560" y="108" text-anchor="middle" font-size="10" fill="var(--red)" font-weight="600">pure fiat era</text></g><g><text x="40" y="150" font-size="11" fill="var(--muted)">Who can still redeem dollars for gold?</text><rect x="40" y="160" width="110" height="26" rx="5" fill="var(--green-soft)" stroke="var(--green)"/><text x="95" y="177" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="600">1913: anyone</text><rect x="160" y="160" width="130" height="26" rx="5" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="225" y="177" text-anchor="middle" font-size="10" fill="var(--orange-ink)" font-weight="600">1934: foreign governments</text><rect x="300" y="160" width="130" height="26" rx="5" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="365" y="177" text-anchor="middle" font-size="10" fill="var(--orange-ink)" font-weight="600">1944: foreign central banks</text><rect x="440" y="160" width="160" height="26" rx="5" fill="var(--red-soft)" stroke="var(--red)"/><text x="520" y="177" text-anchor="middle" font-size="10" fill="var(--red)" font-weight="600">1971 onward: nobody</text></g><g><text x="40" y="220" font-size="11" fill="var(--muted)">Purchasing power of the dollar (1913 = 100, approximate by CPI)</text><line x1="40" y1="300" x2="600" y2="300" stroke="var(--line)"/><polyline fill="none" stroke="var(--orange)" stroke-width="2.5" points="60,232 100,262 140,258 180,250 230,268 290,275 350,282 410,293 470,296 530,298 590,299"/><text x="60" y="228" font-size="9.5" fill="var(--muted)">100</text><text x="290" y="270" font-size="9.5" fill="var(--muted)">1950 ≈ 41</text><text x="410" y="288" font-size="9.5" fill="var(--muted)">1980 ≈ 12</text><text x="540" y="292" font-size="9.5" fill="var(--red)" font-weight="600">2024 ≈ 3</text><text x="320" y="322" text-anchor="middle" font-size="10.5" fill="var(--red)" font-weight="600">About 96–97% of purchasing power gone in a century — most of it after 1971</text></g></svg><figcaption>Top: seven nodes, colored from green (still on gold) to red (unanchored). Middle: who can still exchange dollars for gold — the circle shrinks step by step to nobody. Bottom: an approximate curve of the dollar's purchasing power (illustrative, not precise statistics). The demo lets you open each era.</figcaption></figure>

Node by node (get the dates and events right):

- **1694, Bank of England.** A group of London merchants lent William III £1.2 million for the war against France in exchange for a note-issuing charter. The world's first modern central bank, from day one a **trade of state financing for banking privilege.**
- **1913, Federal Reserve.** After the Panic of 1907, drafted in secret at Jekyll Island in 1910; the Federal Reserve Act was signed on 23 December 1913. Still on gold: a dollar was 1/20.67 of an ounce, redeemable by anyone.
- **1914, WWI suspension.** After war broke out in August, the European belligerents immediately suspended gold convertibility and printed to fight. A “wartime measure” — and no country ever fully returned to the prewar classical gold standard. The U.S. stayed on gold, but the Fed financed the Allies and later America's own entry.
- **1922, Genoa Conference → gold-exchange standard.** Central banks could hold pounds and dollars, rather than gold itself, as reserves — letting the same ounce of gold support several layers of money. **The gold standard's first dilution.** Britain returned at the prewar parity in 1925 and abandoned it in 1931.
- **1933–34, the United States.** On 5 April 1933 Roosevelt signed Executive Order 6102 requiring citizens to surrender gold coin and bullion (small exemptions), on penalty of a $10,000 fine or prison; in January 1934 the Gold Reserve Act reduced the dollar from 1/20.67 to 1/35 of an ounce — **a devaluation of about 41% overnight**, after the gold was already in the government's hands. From then on only foreign governments could redeem dollars for gold.
- **1944, Bretton Woods.** Forty-four nations agreed to peg their currencies to the dollar, with the dollar pegged to gold at $35 an ounce — redeemable only by foreign central banks. The dollar became the “as good as gold” world reserve currency, which meant the United States could exercise the Cantillon privilege over the whole world (a French finance minister called it the “exorbitant privilege”).
- **15 August 1971.** U.S. gold reserves had fallen from about 20,000 tonnes in the 1950s to about 8,000; France and others kept redeeming. Nixon announced on television that dollar convertibility was “temporarily” suspended. Major currencies began floating in 1973. **The pure fiat era** began, and the “temporary” has not yet ended.

Look at the structure of this line: **every unlocking happened under emergency (war, depression, reserve drain), every one was declared temporary, none was ever reversed.** That is not coincidence; it is incentive. An institution that can create reserves finds, in every crisis, that “creating a little more” is easier than “enduring the liquidation” — which is precisely Rothbard's answer to the rules-versus-discretion debate.

### ④ The numbers: M2, purchasing power, and “about 96–97%”

Pin the result down with a few rough but reliable figures (all “about”; different data series differ):

- **Purchasing power.** By U.S. CPI, one 1913 dollar corresponds to about $31–32 in 2024; put the other way, a 2024 dollar has **about 3 cents** of 1913 purchasing power — a loss of about 96–97%. In the century *before* 1913 (the Civil War excepted) the dollar's purchasing power was roughly **flat or slightly rising**: under the classical gold standard, productivity growth delivered the growth deflation of Stage 4.2.
- **By period.** 1913–1971 (58 years, gold gradually diluted): purchasing power fell about 75%. 1971–2024 (53 years, pure fiat): a further loss of about 87%. The **annual rate of depreciation** in the second period is clearly higher than in the first.
- **M2.** From about $300 billion in 1959 (the start of continuous data) to about $21 trillion in 2024, roughly 70-fold; real GDP over the same period grew roughly 5–6-fold. Where did the difference go? Partly into prices (the 96–97% above), partly into asset prices (station one of Stage 4.3).
- **Gold.** $35 an ounce in 1971, about $2,400–2,600 in 2024 — roughly 70-fold, strikingly close to the M2 multiple. That is not coincidence, and it is not investment advice (Stage 10.5 discusses how to use such historical comparisons properly): it simply shows that the price of gold as the “old money” has roughly tracked the issuance of the new.

Set these numbers beside the reasons in ①. The central bank's official justification was “stability.” By what measure is the post-1913 dollar more stable than the pre-1913 dollar? Not by prices. By cycles? After 1913 came 1920–21, 1929–33, 1937, 1973–75, 1980–82, 2000–01, 2007–09, 2020 — Stage 5.4 reads each with ABCT. Austrians do not claim the gold-standard era had no cycles (the nineteenth century had panics too, mostly tied to fractional-reserve banking); they point out that **the central bank did not eliminate the cycle. It made it larger, more synchronized, and more political.**

### ⑤ An experiment without precedent: the world after 1971, and where it leads

Before 1971, every fiat experiment in history was **local and temporary**: John Law's paper money in France (1720), the American Continental (1770s), the French Revolutionary assignats (1790s), the Weimar mark (1923) — each ended in hyperinflation and a return to metallic money. What is different after 1971 is that **all major currencies came unanchored at once**; there is no “metallic money” to return to, and currencies can only peg to one another. It is an n-body problem with no precedent.

The Austrian assessment of it should be **honest in both directions.**

**It has not collapsed, though some Austrians predicted it would.** More than fifty years on, the dollar is still the world's reserve currency; the double-digit inflation of the 1970s was broken by Volcker; the enormous expansions of 2008 and 2020 did not produce the hyperinflation many Austrians forecast. Why? The regression theorem gives part of the answer: fiat money rides an unbroken chain of price memory, and as long as central-bank expansion does not drive people to **abandon** holding it (the collapse of the demand for cash balances of Stage 4.2 — what Mises called the crack-up boom), it keeps working. The other part: the United States holds a unique position — the whole world needs dollars for trade and reserves, and that props up the demand. Austrians should admit that treating “fiat must collapse” as a short-term prediction has been a recurring error (Stage 14.4).

**Nor has it delivered the promised “stability,” and its costs are structural.** Four points. First, the purchasing-power numbers of ④. Second, the continuous redistribution of the Cantillon chain (Stage 4.3) — the rise in wealth concentration after 1971 runs in parallel. Third, the cycle has not gone away (Stage 5.4). Fourth, and deepest: fiat money turned “how much money there is” from a **result discovered by the market** into a **political decision.** Stage 7.1 says that without prices there is no economic calculation — and the interest rate is one of the most important prices of all, yet in a fiat system it is set by a committee vote. Stage 13.5 teaches you to read that committee's statements.

**Where does it lead?** Later stages offer different possible answers; here we only list the questions. Hayek's *Denationalisation of Money* (1976) proposed letting private currencies compete so that the market rediscovers money (Stage 9.4). Bitcoin's appearance in 2009 is seen by some as a direct reply to 1971 — a money of fixed supply, whose reserves nobody can create from nothing; is it Mengerian money (Stage 17.1), and could it eliminate the cycle (Stage 17.5)? Central bank digital currencies may be the fiat experiment's next step — a central bank able to program every transaction (Stage 17.3). The fork between these three roads lies on the very timeline you just walked, from 1694 to 1971.

The lesson in one sentence: **the central bank was born to backstop fractional-reserve banking; backstopping requires the power to create reserves from nothing, so the gold chain was unlocked in one “temporary” emergency after another until it came fully undone in 1971; it did not deliver stability, it turned money from a market discovery into a political decision, and it did not collapse as some Austrians predicted — it is an experiment still running, without precedent.** In the next stage (Stage 5.1) we gather all of this into one picture: how an artificially lowered interest rate manufactures boom and bust.
`,

  demo: "monetary-timeline",

  analogy: `
Think of the gold standard as a **mooring line tying a ship to a dock.** The ship is the money; the dock is gold. A moored ship still rises and falls with the waves (the gold era had panics and cycles too), but it cannot drift far: anyone can take a banknote to the dock and redeem it for gold, and that right is the line.

The birth of the central bank gave the captain a new tool: a machine that manufactures “temporary mooring lines” out of nothing (creating reserves). At first the machine was used only during storms and switched off when they passed. But in every storm the captain found that a little more slack felt more comfortable —

- 1914: war; untie the line, “we'll tie it back after.”
- 1922: use “someone else's line” as your line (pounds and dollars as reserves) — one line moors several ships.
- 1933: the captain confiscates the passengers' lines, then announces the line is “41% shorter.”
- 1944: every ship in the world is tied to the American ship; only the American ship is tied to the dock — and only foreign captains may inspect that line.
- 1971: the French captain actually tugs the line and finds the dock nearly empty. The American captain unties the last one and calls it “temporary.”

Since then all the ships have been tied to one another and none to the dock. In calm seas nobody notices the difference, and the fleet has sailed longer than expected — that must be conceded. But in every storm all the captains run their line-making machines at once and the fleet drifts together in the same direction: fifty years on, the dollar ship has drifted 97% of the way from the 1913 dock. And the word “stability” has never referred to where the ship is — only to how the wheel feels in the captains' hands.
`,

  misconceptions: [
    "**“Central banks were founded to protect the public and prevent panics — a cure for market failure.”** — That is the official narrative, and it has a real side (Bagehot's lender-of-last-resort logic). But the historical motives are equally clear: the Bank of England in 1694 financed the king's war; the Fed was drafted in secret by bankers at Jekyll Island in 1910 to solve the problem of “how to expand together without being run.” The central bank is backstop, cartel and state financier at once — the three cannot be separated.",
    "**“The gold standard was proven a failure — the Great Depression is the evidence.”** — The world of 1929–33 was not on the classical gold standard but on the diluted post-1922 gold-exchange standard, with central banks already expanding in unison (the U.S. credit inflation of the 1920s). The Austrian reading (Stages 5.4, 13.2) is that the depression was the liquidation of the prior expansion, prolonged by intervention. The debate is unsettled, but “gold caused the Depression” is at least not the only reading.",
    "**“Fiat money didn't collapse after 1971, so the Austrians were wrong.”** — Some Austrians did repeatedly and wrongly predict collapse, a failure that should be owned (Stage 14.4). But the regression theorem itself explains why fiat money works (it inherited the gold dollar's price memory); the core Austrian claim is not “fiat must collapse” but that its costs are structural: about 96–97% purchasing-power loss, Cantillon redistribution, larger and more synchronized cycles, and interest rates turned from market discovery into political decision.",
    "**“The dollar lost 97% of its purchasing power, so everyone is 97% poorer.”** — No. What a dollar buys fell 97%, while nominal incomes rose over the same period. The real issue is distribution: whose income rose first (the front of the Cantillon chain) and whose savings were eroded (the back). The purchasing-power loss measures money's failure as a store of value, not the impoverishment of society as a whole.",
    "**“Friedman opposed the Fed just as Austrians do.”** — Friedman criticized the Fed's discretion (above all the 1929–33 contraction) but proposed a fixed money-growth rule to constrain it, not abolition. The Austrian reply: as long as the institution can create reserves, the rule will be abandoned in the next crisis — as every crisis since 1971 has confirmed. This is the core disagreement of Stage 11.2.",
  ],

  quiz: [
    {
      q: "What was Bagehot's (1873) prescription for a lender of last resort, and what do Austrians say went wrong with it in practice?",
      options: [
        "Unlimited lending at zero rates; the problem is that it was not generous enough",
        "Lend freely, at a penalty rate, on good collateral; the problem is that a central bank cannot distinguish illiquid from insolvent in a panic, rescues both in practice, and the penalty rate vanished long ago",
        "Refuse all lending; the problem is that it was too strict",
        "Rescue only big banks; the problem is discrimination against small ones",
      ],
      answer: 1,
      explain: "Bagehot's prescription is elegant and aimed at rescuing only the illiquid. But loans' true value is known only at liquidation; in 2008 and 2023 both were rescued and rates were cut to zero — **the prescription was never actually followed**, and moral hazard is the result.",
    },
    {
      q: "What did Executive Order 6102 (1933) and the Gold Reserve Act (1934) do?",
      options: [
        "Abolished the gold standard entirely and floated the dollar",
        "Pegged the dollar to silver",
        "Extended dollar-gold convertibility to all citizens",
        "Required Americans to surrender their gold, then devalued the dollar from 1/20.67 to 1/35 of an ounce (about 41%); thereafter only foreign governments could redeem dollars for gold",
      ],
      answer: 3,
      explain: "Confiscation first (April 1933), devaluation second (January 1934) — the 41% devaluation came after the gold was already in the government's hands, so citizens could not benefit. Domestic redemption ended; only foreign governments retained it.",
    },
    {
      q: "What did Bretton Woods (1944) and 15 August 1971 each mean?",
      options: [
        "1944: currencies pegged to the dollar, the dollar to gold at $35/oz (redeemable only by foreign central banks); 1971: Nixon “temporarily” closed the gold window, beginning the pure fiat era, never reversed",
        "1944: restoration of the classical gold standard; 1971: Americans allowed to own gold again",
        "1944: the dollar began floating; 1971: the euro was created",
        "Neither had anything to do with gold",
      ],
      answer: 0,
      explain: "Bretton Woods made the dollar the “as good as gold” reserve currency, letting the U.S. exercise the Cantillon privilege over the world; after U.S. gold reserves fell from about 20,000 to about 8,000 tonnes, Nixon closed the window. The “temporary” has lasted over fifty years.",
    },
    {
      q: "Which statement about the dollar since 1913 is most accurate?",
      options: [
        "Purchasing power rose because the economy grew",
        "Purchasing power has been essentially stable, proving the central bank achieved price stability",
        "Purchasing power fell about 96–97%, with a higher annual depreciation rate in the pure-fiat period after 1971 than in the earlier gold-dilution period; in the century before 1913 it was roughly flat",
        "Purchasing power fell about 50%",
      ],
      answer: 2,
      explain: "By CPI, one 1913 dollar ≈ $31–32 in 2024. 1913–1971 lost about 75%; 1971–2024 lost a further 87%. Under the classical gold standard, productivity produced mild growth deflation.",
    },
    {
      q: "Which Austrian response to the fact that “fiat money has not collapsed since 1971” matches this course's position?",
      options: [
        "It will collapse soon; it is only a matter of time",
        "Admit that some Austrian collapse predictions were wrong; the regression theorem itself explains why fiat works (it inherited the gold dollar's price memory), and the core argument concerns its structural costs, not inevitable collapse",
        "Fiat money has no problems and Austrians should drop their critique of central banks",
        "The collapse has already happened; nobody noticed",
      ],
      answer: 1,
      explain: "Honest in both directions: fiat money has run for over fifty years (the dollar's reserve status props up demand); but it did not deliver stability and turned the interest rate from market discovery into political decision. “It must collapse” is the error Stage 14.4 reflects on.",
    },
  ],

  further: [
    { label: "Rothbard, The Case Against the Fed (1994) — the full argument for the central bank as cartel and financing machine", url: "https://mises.org/library/book/case-against-fed" },
    { label: "Rothbard, A History of Money and Banking in the United States — monetary history from the colonial era to WWII", url: "https://mises.org/library/book/history-money-and-banking-united-states-colonial-era-world-war-ii" },
    { label: "Walter Bagehot, Lombard Street (1873) — the original statement of the lender of last resort (full text at Econlib)", url: "https://www.econlib.org/library/Bagehot/bagLom.html" },
    { label: "Hayek, Denationalisation of Money (1976) — letting money become a market discovery again", url: "https://mises.org/library/book/denationalisation-money-argument-refined" },
    { label: "Federal Reserve History: Nixon Ends Convertibility of U.S. Dollars to Gold (1971) — official history page, useful for checking dates", url: "https://www.federalreservehistory.org/essays/gold-convertibility-ends" },
  ],
};
