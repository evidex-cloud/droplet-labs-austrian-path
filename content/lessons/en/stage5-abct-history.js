export default {
  id: "abct-history",
  stage: 5,
  order: 4,
  title: "Reading History with ABCT: 1929 · 2000 · 2008 · 2020–22",
  difficulty: "core",
  prereqs: ["bust-liquidation"],

  oneLiner:
    "The theory is in hand; now put it on like a pair of glasses and look at four real episodes. For each we ask only four questions: the **injection** (where the credit came from, how far the rate was pushed), the **boom sector** (which long-payback industry the new money flowed into), the **trigger** (why the rate or the credit reversed), and the **snap** (how the liquidation unfolded and what governments did). Stock margin in the 1920s, the Nasdaq in the 1990s, subprime in 2002–06, the 2020–22 “everything bubble” and Silicon Valley Bank's duration mismatch in 2023 — four pictures, one skeleton. And an honest boundary line: COVID was an exogenous shock, not every recession is an ABCT recession, and the theory explains credit-driven turning points, not everything.",

  intuition: `
The most dangerous thing about learning a theory is using it to explain everything. So this lesson begins by setting rules.

ABCT is a theory of the **credit-driven upper turning point** (Stage 5.1). It says: if credit expansion pushes the loan rate below the natural rate, a cohort of long-payback projects will break ground on a false signal and will sooner or later be exposed when the rate or the credit reverses. It does **not** say every recession happens this way; it does **not** say a boom contains no genuine technical progress; and it certainly does **not** say it can tell you which day the crash comes.

So when we read history we use a fixed **four-box checklist**:

- **Injection**: was there credit expansion? Was the rate pushed down? For how long, and by how much? (Reminder from Stage 3.5: the natural rate is **not directly observable**. This box always relies on **proxies and relative judgments** — the policy rate against its own prior level, credit and money growth, the real rate against trend growth, the term premium — never on a measured r*. Every time a history lesson says “the rate was pushed down,” read it with that footnote attached.)
- **Boom sector**: did the new money concentrate in a long-payback industry far from the consumer? If the boom was uniform, ABCT's explanatory power is weak.
- **Trigger**: was the reversal caused by rising rates or tightening credit? If it was war, plague or oil, that is a different kind of recession.
- **Snap**: was the liquidation concentrated in the boom sector? Did the government let it run, or prop it up?

Four episodes, one at a time. The conclusion first: **the “injection → boom sector → trigger” structure is strikingly consistent across all four**, while what governments did after the snap differs completely — and that decides whether the bust is V-shaped or L-shaped (Stage 5.3).

The boundaries first, too. 1920–21 (Stage 5.3) was the liquidation of wartime inflation and fits the theory; but in the 1973–75 recession the oil embargo was the lead actor, and ABCT explains only part of it; the two-month recession of March–April 2020 was caused by lockdowns and had nothing to do with rates — **it was not an ABCT recession.** The real ABCT story is what came after the lockdowns: to offset them, the central bank and the Treasury together made the largest injection in history, and the reversal of 2022–23 exposed it.

One more confession: mainstream economists read each of these episodes differently — Friedman blamed 1929–33 on the Fed letting the money stock collapse (Stage 13.2), Bernanke blamed 2008 on a “global saving glut” and regulatory gaps, the mainstream blamed 2022 inflation on supply chains. Each section below flags the mainstream alternative so you can judge for yourself how sharp the ABCT lens is. Stage 13.4 makes 2008 and QE a full case study, Stage 16.5 looks at GameStop in 2021 through reflexivity, and Stage 18.5 takes this checklist to today's AI capital spending.

**In this lesson we break it into six pieces:**

- **① The four-box checklist: injection, boom sector, trigger, snap**
- **② The 1920s and 1929: the Fed, margin loans, and Rothbard's ledger**
- **③ The 1990s and 2000: Greenspan, the 1998 cuts, and the Nasdaq**
- **④ 2002–06 and 2008: the 1% fed funds rate, the GSEs, and subprime**
- **⑤ 2020–22 and 2023: about $5 trillion, the everything bubble, and SVB's duration**
- **⑥ Boundaries: what ABCT explains and what it does not**
`,

  mechanics: `
### ① The four-box checklist: injection, boom sector, trigger, snap

Compress Stage 5.1's picture into a table and you get the checklist we will use over and over:

<figure><svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Four cycles, one skeleton</text><g font-size="10.5" font-weight="700" fill="var(--muted)"><text x="150" y="44" text-anchor="middle">Injection</text><text x="290" y="44" text-anchor="middle">Boom sector</text><text x="430" y="44" text-anchor="middle">Trigger</text><text x="570" y="44" text-anchor="middle">Snap</text></g><line x1="90" y1="50" x2="630" y2="50" stroke="var(--line)"/><g font-size="9.5" fill="var(--ink)"><text x="12" y="80" font-weight="700" fill="var(--orange-ink)">1921–29</text><rect x="95" y="62" width="110" height="34" rx="5" fill="var(--orange-soft)"/><text x="150" y="76" text-anchor="middle">Fed eases 1924 / 1927</text><text x="150" y="89" text-anchor="middle">money +~60% in 8 yrs</text><rect x="235" y="62" width="110" height="34" rx="5" fill="var(--orange-soft)"/><text x="290" y="76" text-anchor="middle">stock margin loans</text><text x="290" y="89" text-anchor="middle">FL land (burst by '26)</text><rect x="375" y="62" width="110" height="34" rx="5" fill="var(--blue-soft)"/><text x="430" y="76" text-anchor="middle">hikes 1928–29</text><text x="430" y="89" text-anchor="middle">discount rate to 6%</text><rect x="515" y="62" width="110" height="34" rx="5" fill="var(--red-soft)"/><text x="570" y="76" text-anchor="middle">Oct 1929 crash</text><text x="570" y="89" text-anchor="middle">Hoover+New Deal → L</text></g><g font-size="9.5" fill="var(--ink)"><text x="12" y="146" font-weight="700" fill="var(--orange-ink)">1995–2000</text><rect x="95" y="128" width="110" height="34" rx="5" fill="var(--orange-soft)"/><text x="150" y="142" text-anchor="middle">three cuts in 1998</text><text x="150" y="155" text-anchor="middle">Y2K liquidity</text><rect x="235" y="128" width="110" height="34" rx="5" fill="var(--orange-soft)"/><text x="290" y="142" text-anchor="middle">internet / telecom</text><text x="290" y="155" text-anchor="middle">Nasdaq 5,048</text><rect x="375" y="128" width="110" height="34" rx="5" fill="var(--blue-soft)"/><text x="430" y="142" text-anchor="middle">hikes 1999–2000</text><text x="430" y="155" text-anchor="middle">to 6.5%</text><rect x="515" y="128" width="110" height="34" rx="5" fill="var(--red-soft)"/><text x="570" y="142" text-anchor="middle">Nasdaq −78%</text><text x="570" y="155" text-anchor="middle">cut to 1% → next round</text></g><g font-size="9.5" fill="var(--ink)"><text x="12" y="212" font-weight="700" fill="var(--orange-ink)">2002–08</text><rect x="95" y="194" width="110" height="34" rx="5" fill="var(--orange-soft)"/><text x="150" y="208" text-anchor="middle">fed funds at 1%</text><text x="150" y="221" text-anchor="middle">Jun 2003 – Jun 2004</text><rect x="235" y="194" width="110" height="34" rx="5" fill="var(--orange-soft)"/><text x="290" y="208" text-anchor="middle">housing / subprime / GSEs</text><text x="290" y="221" text-anchor="middle">prices ~+80%</text><rect x="375" y="194" width="110" height="34" rx="5" fill="var(--blue-soft)"/><text x="430" y="208" text-anchor="middle">17 hikes to 5.25%</text><text x="430" y="221" text-anchor="middle">ARM resets</text><rect x="515" y="194" width="110" height="34" rx="5" fill="var(--red-soft)"/><text x="570" y="208" text-anchor="middle">Lehman, Sep 2008</text><text x="570" y="221" text-anchor="middle">bailouts + QE → slow</text></g><g font-size="9.5" fill="var(--ink)"><text x="12" y="278" font-weight="700" fill="var(--orange-ink)">2020–23</text><rect x="95" y="260" width="110" height="34" rx="5" fill="var(--orange-soft)"/><text x="150" y="274" text-anchor="middle">Fed ~+$5T</text><text x="150" y="287" text-anchor="middle">fiscal ~$5T</text><rect x="235" y="260" width="110" height="34" rx="5" fill="var(--orange-soft)"/><text x="290" y="274" text-anchor="middle">everything: tech / crypto</text><text x="290" y="287" text-anchor="middle">housing / SPACs / long bonds</text><rect x="375" y="260" width="110" height="34" rx="5" fill="var(--blue-soft)"/><text x="430" y="274" text-anchor="middle">CPI 9.1%</text><text x="430" y="287" text-anchor="middle">hikes 2022–23 to 5.5%</text><rect x="515" y="260" width="110" height="34" rx="5" fill="var(--red-soft)"/><text x="570" y="274" text-anchor="middle">Nasdaq −33% in 2022</text><text x="570" y="287" text-anchor="middle">SVB, Mar 2023</text></g><text x="320" y="320" text-anchor="middle" font-size="10" fill="var(--muted)">gold = credit injection &amp; boom sector · blue = rate reversal · red = liquidation. Figures approximate.</text></svg><figcaption>Four cycles forced into the same four-box checklist. Look at the “trigger” column: all four are rate reversals — not war, not oil, not “confidence.” That is the common skeleton the ABCT lens reveals.</figcaption></figure>

### ② The 1920s and 1929: the Fed, margin loans, and Rothbard's ledger

**Injection.** The Fed was founded in 1913, and the 1920s were its first attempt to “manage” the economy. By Rothbard's calculation in *America's Great Depression*, the broad US money supply grew from about $45 billion in mid-1921 to about $73 billion in mid-1929 — **roughly 60% in 8 years** — while the gold stock grew far less; the difference was the banking system's credit expansion. Two key easings: in 1924, to help Britain return to gold, and in 1927 (after the Strong–Norman meeting), when the discount rate was cut to 3.5% and the Fed bought in the open market. Prices were roughly stable — and that was exactly the danger: **in a decade of rapid productivity growth, stable prices concealed prices that should have been falling; the credit expansion hid behind “no inflation”** (Hayek pointed this out as early as 1928).

**Boom sector.** The new credit flowed into two long-payback places: stocks (via brokers' loans — buying shares on 10% margin; brokers' loans reached about $8.5 billion in October 1929) and real estate (the Florida land boom around 1925). The Dow rose from about 64 in 1921 to 381 on September 3, 1929. Capital-goods industries and construction expanded far faster than consumer goods — the triangle's base was stretching.

**Trigger.** From 1928 the Fed worried about speculation and tightened step by step; in August 1929 it raised the discount rate to 6%. Call-loan rates hit double digits. The long projects stopped penciling out.

**Snap.** The crash of October 24–29, 1929. Up to this point ABCT and the record fit closely. Then came the policy response: Hoover convened business leaders to pledge no wage cuts (propping wages), the Smoot–Hawley tariff of 1930 (propping prices), the large tax increase of 1932 (attacking saving), and the Reconstruction Finance Corporation bailing out firms (blocking liquidation) — every item on Rothbard's list (Stage 5.3). The depression dragged on for more than a decade.

**The mainstream alternative.** Friedman and Schwartz (1963) argued the depression was “Great” because the Fed let the money stock contract by about a third in 1930–33. The Austrian reply: that explains why the bust was **deep** (secondary deflation), not why it **came** — the pre-1929 expansion was the cause — and propped-up wages were the main reason unemployment stayed so high. Stage 13.2 lays out the Rothbard vs Friedman argument in full.

### ③ The 1990s and 2000: Greenspan, the 1998 cuts, and the Nasdaq

**Injection.** The mid-1990s United States did have a genuine technological revolution — the internet, the PC, mobile telephony. Productivity rose; that part was **real**. But Greenspan's Fed layered credit on top of it: after Russia's default and the LTCM crisis in 1998, the Fed cut three times between September and November to 4.75%; in late 1999 it flooded the banking system with liquidity as a precaution against Y2K. Greenspan had said “irrational exuberance” in December 1996 but did not tighten afterward — he believed the “productivity miracle” made faster money growth safe.

**Boom sector.** The new money concentrated in the longest-payback assets: internet companies with no profits, valued on “market share ten years out,” and telecom firms laying fiber for “traffic doubling every 100 days” (most of that fiber sat dark for years — textbook malinvestment). The Nasdaq rose from about 1,000 in 1995 to 5,048 on March 10, 2000.

**Trigger.** The Fed raised rates from June 1999 to May 2000, to 6.5%. The discount rate rose, and “profits ten years out” were suddenly worth much less.

**Snap.** The Nasdaq fell about 78% to its October 2002 low; a recession ran March–November 2001; telecom bankruptcies (WorldCom, Global Crossing) followed. But the recession was surprisingly **shallow** — because from January 2001 the Fed cut the fed funds rate from 6.5% all the way to 1% by June 2003. The Austrian reading: **the liquidation was not allowed to finish; a larger injection took over** — which is the “injection” of the next episode.

**The mainstream alternative.** This was a tech bubble, a story of investor psychology (Shiller's *Irrational Exuberance*, 2000), with little to do with money. The Austrian reply: psychology needs fuel, and the liquidity of 1998–99 was the fuel; moreover the bubble concentrated in the longest-duration assets, exactly the location ABCT predicts. The two accounts are arguably complementary here — Stage 10.3 discusses why Austrians need a financial-market extension.

### ④ 2002–06 and 2008: the 1% fed funds rate, the GSEs, and subprime

**Injection.** From June 2003 to June 2004 the fed funds rate was held at **1%** — the lowest since 1958 at the time — and for about a year it sat below the inflation rate (a negative real rate). Meanwhile the government, through Fannie Mae and Freddie Mac (the GSEs), set “affordable housing” goals that lowered mortgage standards; and regulatory rules (Basel's low risk weights for AAA-rated mortgage securities) gave banks a strong incentive to package loans into securities. Three forces pointed the same way: **borrowing to buy a house had never been so cheap or so easy.**

**Boom sector.** Housing — the longest-payback consumer asset, and also collateral. The Case-Shiller national index rose about 80% from 2000 to mid-2006 (doubling in some cities). Adjustable-rate mortgages (ARMs), zero-down loans and “NINJA” loans (no income, no job, no assets) appeared; subprime's share of new mortgages rose from single digits in 2001 to roughly 20% in 2005–06. Construction employment ballooned, and so did Wall Street's structured-products desks (the labor misallocation of Stage 5.2).

**Trigger.** From June 2004 to June 2006 the Fed raised rates 17 times to 5.25%. ARM rates reset en masse in 2006–07 and monthly payments jumped; house prices peaked in mid-2006. Subprime borrowers defaulted → mortgage securities fell → New Century failed in April 2007 → BNP Paribas froze funds in August → Bear Stearns in March 2008 → Lehman on September 15, 2008.

**Snap.** Unemployment reached 10% in October 2009. The policy response was a modern version of Rothbard's list: the $700 billion TARP bailout (blocking liquidation), zero rates from December 2008 and quantitative easing from November (reflation), the auto bailouts, mortgage-relief programs (propping house prices). What followed was one of the slowest recoveries on record and more than a decade of near-zero rates — which, Austrians argue, froze the malinvestments of 2008 into zombies (Stage 10.4) and sowed the seeds of the next round.

**The mainstream alternative.** Bernanke's “global saving glut” (Asian saving pushed down global long rates, not the Fed); regulatory failure (rating agencies, shadow banking, leverage). The Austrian reply: the saving-glut story cannot explain why the Fed itself pushed the short rate to 1%; regulatory failure is real, but it explains **how much leverage amplified the error**, not **why everyone misjudged house prices together** — the common signal was still the rate. Stage 13.4 does the full case.

### ⑤ 2020–22 and 2023: about $5 trillion, the everything bubble, and SVB's duration

**The boundary first.** The March–April 2020 recession was an exogenous lockdown shock, **not** an ABCT recession. The ABCT story begins with the policy that offset the lockdowns.

**Injection.** The Fed's balance sheet expanded from about $4.2 trillion in February 2020 to about $9 trillion in 2022 — **an expansion of roughly $5 trillion** — with the fed funds rate cut to 0–0.25% and an explicit promise to hold it there “for an extended period.” On the fiscal side, the CARES Act of March 2020 (about $2.2 trillion), the December 2020 supplement (about $900 billion) and the American Rescue Plan of March 2021 (about $1.9 trillion) added up to roughly $5 trillion of fiscal support (direct checks, unemployment top-ups, forgivable PPP loans, aid to states) — comparable in size to the Treasuries the Fed bought over the same period, so **functionally** it amounted to wiring new money into household and business accounts. Institutionally it still ran through the Treasury market and primary dealers; the Treasury did not “turn on a printing press.” Treat this as a functional analogy, not a description of the plumbing. Broad money M2 grew about 40% in two years, a pace never seen in peacetime.

**Boom sector.** This time not one industry but an “**everything bubble**” — every long-duration asset inflated at once: profitless tech (“growth stocks”), crypto (Bitcoin around $69,000 in November 2021), SPACs (about 600 listings in 2021), meme stocks (GameStop in January 2021, Stage 16.5), housing (national prices up about 40% over 2020–22), and the least glamorous yet most lethal item of all: **long-term Treasuries and mortgage securities** — banks turned the flood of deposits into 10- and 30-year bonds yielding 1–2%.

**Trigger.** CPI inflation hit 9.1% in June 2022. The Fed began hiking in March 2022 and took the fed funds rate to 5.25–5.5% by July 2023, while shrinking its balance sheet — the steepest hiking cycle in 40 years.

**Snap.** The Nasdaq fell about 33% in 2022, and profitless tech fell 70–90%; in crypto, Terra/Luna collapsed in May 2022 and FTX went bankrupt in November; SPACs delisted en masse; tech layoffs swept the industry. Then, on March 10, 2023, **Silicon Valley Bank**: it had poured deposits into long-term Treasuries and mortgage securities — “risk-free” when rates were 1%, but carrying enormous unrealized losses once rates hit 5% (duration arithmetic: a 10-year bond loses roughly 30% of its price when its yield rises by 4 percentage points). Depositors pulled about $42 billion in a single day. Signature Bank and First Republic followed. **This is a textbook ABCT location: funds locked into the longest duration on a false low rate, exposed when the rate returns.**

**The honest part.** As of the writing of this lesson, the United States has not had a broad recession — the liquidation was concentrated in specific sectors (tech, crypto, regional banks, commercial real estate) while overall employment stayed resilient. This is a fact ABCT must face squarely: either the liquidation is not finished (malinvestment frozen again?), or this round's “boom sector” really was more contained, or the theory must admit that an injection dominated by fiscal transfers travels a different path from one dominated by bank credit. Stage 5.5 and Stage 14.4 confront the problem of Austrians “predicting too many busts.” And the next candidate boom sector — AI capital spending since 2023 — is left to Stage 18.5.

### ⑥ Boundaries: what ABCT explains and what it does not

Put the four episodes side by side and an honest summary of the lens's sharpness emerges:

**What it explains well:**

- **Why booms always concentrate in long-duration assets** — all four times: stock margin, internet/telecom, housing, “everything plus long bonds.” This is the strongest evidence, because it is the theory's **distinctive prediction**: neither the demand-shortfall story nor animal spirits gives any reason to expect this particular location.
- **Why the turn is always triggered by a rate reversal** — all four times, at the end of a hiking cycle.
- **Why the policy response decides the shape of the bust** — the props after 1929 (L) vs no props in 1920–21 (V); the reflation after 2001 flowed straight into the injection of 2002–06.

**What it cannot explain, or explains only in part:**

- **Recessions from exogenous shocks**: the 2020 lockdowns, the 1973 oil embargo, war. ABCT has nothing to say about these — not a defect, but a scope limit.
- **The genuine component of a boom**: the internet in the 1990s, AI in the 2020s — real technical progress. ABCT says credit **amplifies** real progress into malinvestment, not that the progress is fake. Telling the two apart takes entrepreneurial judgment, which the theory cannot supply (Stage 6.1).
- **Timing**: the theory says “unsustainable,” not “when.” Credit expansion can run far longer than anyone expects — the dozen years from 2009 to 2021 are the example.
- **The depth of the bust**: secondary deflation, leverage in the financial system, international contagion — these amplifiers need the financial-market extension (Stage 10.3).

In one sentence: **ABCT is a theory of credit-driven turning points; it tells you where to look for malinvestment, why it must be exposed, and how policy stretches the liquidation — it does not give you a date, and it does not explain every recession.** In the next lesson (Stage 5.5) the critics take the stand.
`,

  demo: "cycle-explorer",

  analogy: `
Think of ABCT as a **doctor who only reads bone X-rays.**

Four patients walk in: a stockbroker from 1929, an internet founder from 2000, a mortgage broker from 2008, a regional-bank CEO from 2023. Their symptoms are all different — different skin (industry), different age (decade), different complaints (stocks, fiber, houses, long Treasuries).

The X-ray shows the same fracture in every one of them: **the same bone — the longest one — was loaded beyond what it could bear under real saving.** The bone was overloaded because someone lowered the number on the “safe load” label (the interest rate); it broke when the number was changed back.

The doctor also has firm limits. One patient was hit by a car (the 2020 lockdowns); the X-ray shows no chronic stress fracture — the doctor says: not my disease, go to the emergency room. Another patient's bone really did grow longer (the genuine technical progress of the 1990s) — the doctor says: a longer bone is good; the problem is that you loaded the new bone beyond its strength. And when a patient asks “when will it break?”, the doctor says: I can only tell you it is overloaded; the moment of fracture depends on the day you jump — and that “jump” is the rate hike.

That is why Austrians reading history always look for the same things: not which industry or which company, but **where the injection was, which bone was the longest, and on what day the load number was changed back.**
`,

  misconceptions: [
    "**“Every recession is an ABCT recession; Austrians can explain everything with it.”** — The March–April 2020 recession was a lockdown shock; the 1973 recession was led by the oil embargo; war recessions are not credit cycles. ABCT is a theory of credit-driven upper turning points; stretching it over everything is exactly the dogmatism Stage 14.4 criticizes.",
    "**“The internet in the 1990s and AI in the 2020s were genuine technical progress, so those booms weren't ABCT booms.”** — The theory never says a boom contains nothing real. It says credit amplifies real progress into malinvestment: fiber is a good thing, but the portion laid for “traffic doubling every 100 days” sat dark for a decade. Separating the real from the amplified takes entrepreneurial judgment; the theory only tells you where to look.",
    "**“The Great Depression was so deep because of the pre-1929 credit expansion.”** — Only half right. The expansion explains why the snap came and where it landed (stocks and capital goods); why the depression lasted a decade depends on what happened after: propped wages, tariffs, tax hikes, bailouts (Rothbard's list) and the 1930–33 monetary contraction (Friedman's charge, which Austrians call secondary deflation). “Why it came” and “why it was deep” are two different questions.",
    "**“Austrians predicted 2008, so ABCT is confirmed.”** — Several Austrians (and plenty of non-Austrians) did flag the housing bubble in 2004–06, but Austrian methodology itself (Stage 2.2) does not allow one “hit” to confirm the theory — just as it does not allow one “miss” to refute it. The real test is: was the boom sector the longest-duration asset the theory predicts? Was the trigger a rate reversal? Both held all four times.",
    "**“There was no broad recession after the 2020–22 injection, so ABCT is wrong.”** — This is a genuine fact the theory must face, and this lesson does not dodge it. But “no broad recession” is not “no liquidation”: the 2022–23 liquidation hit profitless tech, crypto, SPACs, regional banks (SVB's duration mismatch) and commercial real estate — precisely the predicted locations. Why it did not spread into a general recession is an open question (Stage 5.5, Stage 14.4).",
  ],

  quiz: [
    {
      q: "What is the “four-box checklist” for reading history with ABCT?",
      options: [
        "GDP, CPI, unemployment, the stock index",
        "Injection (where the credit came from), boom sector (which long-payback industry the new money reached), trigger (why the rate or credit reversed), snap (how the liquidation unfolded and how government responded)",
        "President, central-bank chair, Treasury secretary, Congress",
        "Supply, demand, price, quantity",
      ],
      answer: 1,
      explain: "The four boxes map onto Stage 5.1's picture: the depressed rate, the stretched triangle, the rebounding rate, the snapped far end. Across the four episodes “injection → sector → trigger” is strikingly consistent while the post-snap response differs.",
    },
    {
      q: "Prices were roughly stable in the 1920s. Why do Austrians think that actually concealed the problem?",
      options: [
        "Because stable prices mean there was no credit expansion",
        "Because in a decade of rapid productivity growth prices should have fallen; ‘stable’ means credit expansion exactly offset the fall that should have happened, hiding behind ‘no inflation’",
        "Because price indexes did not exist then",
        "Because stable prices caused deflation",
      ],
      answer: 1,
      explain: "Hayek made this point in 1928: **a “stable price level” target is itself expansionary when productivity is rising.** It is also one root of the Austrian quarrel with inflation targeting.",
    },
    {
      q: "What do the four cycles' “trigger” boxes have in common?",
      options: [
        "All were wars or oil shocks",
        "All were sudden collapses of consumer confidence",
        "All were rate reversals — the end of a hiking cycle made long-payback projects stop penciling out",
        "All were changes of government",
      ],
      answer: 2,
      explain: "Hikes to 6% in 1928–29, to 6.5% in 1999–2000, to 5.25% in 2004–06, to 5.5% in 2022–23. This is the common skeleton the ABCT lens reveals, and what distinguishes it from exogenous-shock theories.",
    },
    {
      q: "Why is Silicon Valley Bank's failure in March 2023 called a “textbook ABCT location”?",
      options: [
        "Because it lent to tech companies",
        "Because on a false low rate it locked a flood of deposits into the longest-duration assets (long Treasuries and mortgage securities), and when the rate returned the unrealized losses were exposed — exactly the theory's ‘the far end snaps first’",
        "Because its management was corrupt",
        "Because it had no deposit insurance",
      ],
      answer: 1,
      explain: "Duration arithmetic: a 10-year bond loses about 30% when its yield rises 4 points. An asset that was “risk-free” at 1% became a half-dug mine at 5%. Structurally the same thing as stock margin, dark fiber and subprime.",
    },
    {
      q: "Which of these does the lesson explicitly say ABCT cannot explain, or can explain only partly?",
      options: [
        "Why booms concentrate in long-duration assets",
        "Why the turn is triggered by rate reversals",
        "Recessions from lockdowns or oil embargoes; the line between a boom's genuine technical component and its credit amplification; the exact timing of the turn; the depth of the bust",
        "Why government props turn a V into an L",
      ],
      answer: 2,
      explain: "These are the theory's **scope limits**, not flaws: exogenous shocks are outside it; separating real progress from amplification takes entrepreneurial judgment; timing is not derivable; depth needs the financial-market extension (Stage 10.3).",
    },
  ],

  further: [
    { label: "Rothbard, America's Great Depression (1963) — the monetary ledger of 1921–29 and Hoover's response", url: "https://mises.org/library/book/americas-great-depression" },
    { label: "Federal Reserve History: The Great Recession (the Fed's own account of 2007–09, for the mainstream reading)", url: "https://www.federalreservehistory.org/essays/great-recession-of-200709" },
    { label: "Federal Reserve History: Stock Market Crash of 1929", url: "https://www.federalreservehistory.org/essays/stock-market-crash-of-1929" },
    { label: "Thornton, The Skyscraper Curse (2018) — a contemporary Austrian casebook reading bubbles through ABCT", url: "https://mises.org/library/book/skyscraper-curse" },
    { label: "FRED: Effective Federal Funds Rate (check the rate path of all four cycles yourself)", url: "https://fred.stlouisfed.org/series/FEDFUNDS" },
  ],
};
