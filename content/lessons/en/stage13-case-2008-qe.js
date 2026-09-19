export default {
  id: "case-2008-qe",
  stage: 13,
  order: 4,
  title: "Case: 2008, Quantitative Easing & the 2021–23 Inflation",
  difficulty: "mastery",
  prereqs: ["abct-history", "cantillon-inflation"],

  oneLiner:
    "After 2008 the Fed's balance sheet swelled from about $0.9 trillion to about $4.5 trillion by 2014, and rates sat at zero for seven years — a good many Austrians predicted hyperinflation, and CPI averaged under 2% for a decade. In 2020 the Fed added about $3 trillion more within months, while trillions of fiscal support functionally amounted to wiring money straight into household accounts (institutionally it still ran through the Treasury market — see the note in Stage 5.4) — and this time CPI hit about 9% by mid-2022. **Same “money printing,” so why inflation once and not the other time?** The answer lies in the Cantillon effect of Stage 4.3 and the demand for money of Stage 4.2: **where the new money enters, who gets it first, and whether they want to spend it** decide whether it shows up in asset prices or on supermarket shelves. This lesson walks 2001–2023 end to end: where ABCT was right (the 2003–06 housing boom, the 2022 duration wipe-out), where it was wrong (the inflation calls of the 2010s), and the strongest readings MMT and monetarism can offer.",

  intuition: `
Start with two facts that happened almost together and are rarely looked at together.

Fact one: between August 2008 and the end of 2014 the Federal Reserve created about $3.5 trillion of new base money to buy Treasuries and mortgage-backed securities — an expansion without precedent in American history, proportionally larger than the Second World War's. **Consumer prices barely reacted**: CPI rose about 1.6% a year on average over 2009–2019, below the Fed's 2% target in many years.

Fact two: between March 2020 and the end of 2021 the Fed created roughly $4 trillion more, while Congress passed three fiscal packages totalling about $5 trillion, a large part of it checks mailed to households, unemployment top-ups and forgivable payroll loans to small businesses. M2 grew about 40% in two years. **This time CPI accelerated from early 2021 and reached about 9.1% year-on-year in June 2022, the highest in four decades.**

If your theory is “printing money = inflation,” you cannot explain fact one. If your theory is “printing money doesn't cause inflation” (the conclusion many drew in the 2010s), you cannot explain fact two. **Put the two facts side by side and they force a more precise question: where did the money go?**

The Cantillon effect of Stage 4.3 says new money does not rain evenly; it enters at a specific point, the first recipients spend it at old prices, and prices change stop by stop along the path the money travels. Stage 4.2 adds that the effect on prices also depends on whether the recipients want to *hold* the money — if everyone is hoarding cash (rising money demand), the new money is absorbed. Apply both to the two facts:

- **In 2008 the injection point was the banks.** The Fed bought securities from banks and primary dealers; the new money became bank reserves at the Fed. From October 2008 the Fed paid interest on those reserves, banks' own capital was impaired so they did not want to lend, and firms and households were deleveraging and did not want to borrow — **the money stopped at the first station.** It pushed up what it could reach: Treasuries, stocks, corporate bonds, real estate (Stage 10.3). The supermarket was too far away.
- **In 2020 the injection point was households.** The Treasury borrowed (the Fed bought the paper) and wired checks into tens of millions of accounts; people could not spend during lockdown, and spent the moment things reopened in 2021 — **the money reached the consumer end directly.** At the same time supply chains had broken: supply shrank, demand jumped, prices had only one way to go.

That is the skeleton of the lesson. But an honest Austrian case study has three more jobs. **First**, explain the boom before 2008 properly: the 1% fed funds rate of 2003–04, the housing mandates of the government-sponsored enterprises, the securitization machine that sliced subprime loans into AAA — the most textbook application of ABCT in the twenty-first century (Ravier and Lewin 2012). **Second**, own the Austrian embarrassment of the 2010s: many Austrian economists and commentators publicly predicted dollar collapse or hyperinflation in 2009–2012; they were wrong, and wrong because they forgot the two items in their own theory — money demand and the injection point (Stage 14.4 lists this as the school's most common mistake). **Third**, state the rivals at full strength: MMT says the 2010s proved deficits do not inflate until real resource constraints bind, and in 2021 they bound; monetarism says M2 +40% produced inflation with a lag of one to two years, exactly Friedman's “long and variable lags.” What does each reading capture?

Finally, the tightening of 2022–23 brings back the other half of ABCT: rates went from zero to above 5%, and the longest-duration assets failed first — Silicon Valley Bank collapsed in March 2023 not because of bad loans but because it had bought piles of long Treasuries and MBS while rates were zero; when rates rose, paper losses appeared and depositors ran. **That is Stage 3.5's “a suppressed interest rate lies” written directly onto a balance sheet.**

**In this lesson we break it into five pieces:**

- **① 2001–06: the 1% rate, the GSEs and securitization — anatomy of the housing boom**
- **② 2007–09: bust and response — TARP, QE, ZIRP; learning from Friedman and from Japan at once**
- **③ 2010–19: where the money went — reserves, asset prices, the missing inflation, and the Austrian embarrassment**
- **④ 2020–23: a different injection point — trillions to households, 9% CPI, tightening, and Silicon Valley Bank**
- **⑤ The tally: what ABCT got right and wrong; the strongest MMT and monetarist readings**
`,

  mechanics: `
### ① 2001–06: the 1% rate, the GSEs and securitization — anatomy of the housing boom

> **A note on measurement.** Wherever this lesson says “rates were pushed down,” “easing” or “credit expansion,” it is using the **proxies** from the four-box checklist of Stage 5.4 — the policy rate against its prior level, money and credit growth, the real rate against trend growth — not a measured natural rate. As Stage 3.5 showed, r* is not directly observable. These are relative judgments, not readings.


The dot-com bubble burst in 2000 (Stage 5.4), and after 9/11 the economy was soft. The Fed cut the fed funds rate from 6.5% in 2000 to **1%** in June 2003 and held it there for a year, until June 2004 — the lowest in half a century at the time. Then came seventeen quarter-point hikes at a “measured pace,” to 5.25% by June 2006.

The Austrian analysis starts here, but carefully: **the 1% rate is not the argument; the argument is where the rate sat relative to the natural rate and where the credit went** (Stages 3.5 and 13.1). The evidence at the time: the real fed funds rate was negative in 2002–05; John Taylor himself (author of the Taylor rule) estimated in 2007 that the Fed had held rates two to three points below his rule in 2002–05; 30-year mortgage rates fell to about 5.5% in 2003, and adjustable-rate mortgages (ARMs) started lower still — **mortgages are among the longest-duration, most rate-sensitive credit in the economy**, so the new credit naturally flowed there.

Yet a low rate alone does not explain why this boom took the shape it did. Each of the following factors is disputed, and the honest Austrian procedure is to list them and flag the disputes:

- **The government-sponsored enterprises: Fannie Mae and Freddie Mac.** With an implicit federal guarantee they borrowed at near-Treasury rates and bought or guaranteed mortgages. HUD's “affordable housing goals” for them rose through the 2000s to more than half of their purchases, pushing them into low-down-payment, low-credit-score loans. **Disputed**: the GSEs did buy large volumes of subprime and Alt-A related securities in 2004–07, but private-label securitizers had the larger share at the subprime peak; blaming the crisis entirely on the GSEs (Peter Wallison's position) and exonerating them entirely (the mainstream majority view) are both overreach.
- **The Community Reinvestment Act (CRA).** Some argue it forced banks to lend in low-income neighborhoods. **Disputed**: Federal Reserve research found CRA-covered loans were a small share of subprime and did not default unusually; the evidence does not support it as a main cause. Austrians should acknowledge this rather than repeat an unsupported claim.
- **Securitization and ratings.** The core of the machine: originators sold mortgages to investment banks at once; the banks pooled thousands of them into mortgage-backed securities (MBS), sliced the MBS into tranches by seniority, and the rating agencies rated the senior tranches AAA; lower tranches were repackaged into CDOs, whose senior tranches were *again* AAA. By 2006 subprime was about a fifth of new originations, and about four-fifths of the securities built from them carried AAA — **“everything was AAA.”** The agencies were paid by the issuers, and their models assumed house prices would not fall nationwide simultaneously (they never had).
- **Nobody in the chain bore the risk.** Brokers were paid on volume, originators sold within weeks, investment banks earned packaging fees, agencies earned rating fees, and investors (banks worldwide, pension funds, German Landesbanken) looked only at the rating. In the sense of Stage 6.3 the **profit-and-loss feedback was severed**: no one's own money rode on their own judgment.

The Austrian synthesis (Ravier and Lewin 2012; Thomas Woods's *Meltdown*, 2009): **credit expansion was the fuel, the GSEs and regulation the conduit, securitization the amplifier.** The result was the ABCT pattern of Stage 5.2: national house prices roughly doubled over 2000–06 (Case-Shiller), construction's employment share hit a multi-decade high, household debt rose to about 130% of income, and home-equity extraction (the house as ATM) propped up consumption. This was not merely an asset bubble; **the structure of production was pulled toward building and housing finance** — lumber, cement, mortgage brokers and rating analysts all upstream, all swelling.

### ② 2007–09: bust and response — TARP, QE, ZIRP; learning from Friedman and from Japan at once

Rates rose from 2004, ARMs began resetting higher, and house prices peaked in 2006. Subprime defaults soared from 2007; AAA CDO tranches began to be downgraded — the machine ran in reverse. In August 2007 BNP Paribas froze three funds and the interbank market seized; in March 2008 Bear Stearns was sold to JPMorgan with Fed backing; on 7 September Fannie and Freddie went into conservatorship; on 15 September Lehman Brothers failed; the next day the Fed lent AIG $85 billion; a money-market fund “broke the buck”; in October Congress passed the $700 billion Troubled Asset Relief Program (TARP). By March 2009 the S&P 500 had fallen about 57% from its 2007 high, and unemployment reached 10% in October 2009.

The Fed's response had three layers:

- **Rates**: the fed funds target went from 5.25% in September 2007 to 0–0.25% in December 2008, and stayed there **seven years**, until December 2015.
- **The balance sheet**: QE1 (from November 2008, buying MBS and Treasuries), QE2 (November 2010, $600 billion of Treasuries), “Operation Twist” (2011), QE3 (from September 2012, $85 billion a month, open-ended). The balance sheet grew from about $0.9 trillion in August 2008 to about $4.5 trillion by end-2014.
- **A rarely noticed technicality**: from October 2008 the Fed began **paying interest on bank reserves** (IOER). Parking money at the Fed now earned a risk-free return, raising the opportunity cost of lending — the key to ③.

Seen through the three lenses of Stage 13.2: Bernanke explicitly took Friedman and Schwartz as his program — “do not let the money stock collapse.” That was achieved: M2 did not contract in 2008–09, and the deflationary spiral of 1930–33 was not repeated. Austrians should concede that **this layer of judgment was right**: letting the banking system fail in a chain within weeks and the money stock fall by a third is not liquidation but secondary deflation (Hayek's late concession). But **the other two layers replayed Hoover and Japan**: TARP capital injections into banks, the rescue of GM and Chrysler, mortgage-modification programs, “stress tests” and forbearance — institutions that should have been restructured or closed were kept alive, asset prices that should have found their floor were propped up, capacity that should have exited stayed.

A criterion that separates the two: **holding up the money stock (preventing secondary deflation)** and **holding up particular institutions and asset prices (preventing liquidation)** are different things. The first can be done by lending to solvent banks under Bagehot's old rule — freely, against good collateral, at a penalty rate; the second is picking winners. In 2008 America did both, and treated the second as if it were the first.

### ③ 2010–19: where the money went — reserves, asset prices, the missing inflation, and the Austrian embarrassment

Now the question Austrians must answer head-on: **$3.5 trillion of new base money — why no inflation?**

The data first. The monetary base rose from about $0.85 trillion in 2008 to about $4 trillion in 2014; but M2 rose only from about $7.8 trillion to about $11.7 trillion, roughly 6% a year, about the same as in the 2000s; banks' excess reserves went from near zero to about $2.7 trillion in 2014 — **three-quarters of the new base money sat in accounts at the Fed.** Velocity (nominal GDP / M2) fell from about 1.9 in 2008 to about 1.4 in 2019. Bank lending actually contracted in 2009–11 and recovered slowly thereafter.

With the tools of Stages 4.2 and 4.3:

- **The injection point was the banking system, at its very top.** The Fed bought securities; the sellers (banks, dealers, funds) received reserve deposits. Reserves circulate only among banks; to become money in the public's hands they must pass through bank lending (the money multiplier of Stage 4.4).
- **That step broke, for three reasons.** Bank capital was impaired and regulation tightened (Basel III, Dodd–Frank), so willingness to lend was low; households were deleveraging (mortgage defaults, repayment) and firms were cash-rich and uninterested in borrowing; and the Fed's interest on reserves made “leave it at the Fed” a sensible choice. This is exactly Japan after 2001 in Stage 13.3: **base money is not credit.**
- **Money demand surged.** After the crisis everyone wanted more cash and safe assets — the textbook case of Stage 4.2: a rise in money demand offsets a rise in money supply in its effect on prices.
- **The money did raise the prices it could reach.** The S&P 500 went from about 676 in March 2009 to about 3,200 by end-2019; US house prices rose again after 2012; corporate credit spreads compressed to historic lows; private equity, venture capital and “unicorn” valuations ballooned; the 10-year Treasury yield sat below 2% for years. **The inflation did not vanish; it appeared in assets** — precisely what the Cantillon effect predicts: the things owned by the first recipients (financial institutions, asset holders) rise first. Reading “no inflation” off the CPI is the aggregate illusion of Stage 10.2.
- **Real factors pushing the other way.** Shale pushed oil from over $100 in 2014 to under $50; globalization and Chinese manufacturing held goods prices down; technology cut electronics prices. All of that weighed on the CPI.

<figure><svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Two injection points, two Cantillon paths: 2008 vs 2020 (illustrative)</text><text x="165" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="var(--blue)">2008–14: injected into banks</text><rect x="60" y="60" width="210" height="34" rx="6" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="165" y="81" text-anchor="middle" font-size="11" fill="var(--ink)">Fed buys securities → bank reserves +$3.5T</text><path d="M165 94 L165 112" stroke="var(--blue)" stroke-width="2"/><rect x="60" y="112" width="210" height="34" rx="6" fill="var(--surface-2)" stroke="var(--line)"/><text x="165" y="133" text-anchor="middle" font-size="11" fill="var(--ink)">IOER · banks don't lend · households deleverage</text><path d="M165 146 L165 164" stroke="var(--blue)" stroke-width="2" stroke-dasharray="4 3"/><rect x="60" y="164" width="210" height="34" rx="6" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="165" y="185" text-anchor="middle" font-size="11" fill="var(--ink)">Asset prices: stocks, bonds, housing ↑↑</text><path d="M165 198 L165 216" stroke="var(--line)" stroke-width="2" stroke-dasharray="2 3"/><rect x="60" y="216" width="210" height="34" rx="6" fill="var(--surface-2)" stroke="var(--line)"/><text x="165" y="237" text-anchor="middle" font-size="11" fill="var(--muted)">Consumer prices: CPI about 1.6%/yr</text><text x="165" y="270" text-anchor="middle" font-size="10.5" fill="var(--blue)">Money stops at stations 1–2; M2 about +6%/yr; velocity ↓</text><line x1="320" y1="40" x2="320" y2="290" stroke="var(--line)" stroke-dasharray="4 4"/><text x="475" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)">2020–21: injected into households</text><rect x="370" y="60" width="210" height="34" rx="6" fill="var(--red-soft)" stroke="var(--red)"/><text x="475" y="81" text-anchor="middle" font-size="11" fill="var(--ink)">Treasury borrows (Fed buys) → checks, UI, PPP</text><path d="M475 94 L475 112" stroke="var(--red)" stroke-width="2"/><rect x="370" y="112" width="210" height="34" rx="6" fill="var(--surface-2)" stroke="var(--line)"/><text x="475" y="133" text-anchor="middle" font-size="11" fill="var(--ink)">Household deposits ↑ · hoarded in lockdown · spent in 2021</text><path d="M475 146 L475 164" stroke="var(--red)" stroke-width="2"/><rect x="370" y="164" width="210" height="34" rx="6" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="475" y="185" text-anchor="middle" font-size="11" fill="var(--ink)">Durables, used cars, rents, services ↑↑</text><path d="M475 198 L475 216" stroke="var(--red)" stroke-width="2"/><rect x="370" y="216" width="210" height="34" rx="6" fill="var(--red-soft)" stroke="var(--red)"/><text x="475" y="237" text-anchor="middle" font-size="11" fill="var(--ink)">CPI: about 9.1% y/y in June 2022</text><text x="475" y="270" text-anchor="middle" font-size="10.5" fill="var(--red)">Money reaches consumers directly; M2 about +40% in 2 yrs; plus supply shocks</text><text x="320" y="312" text-anchor="middle" font-size="10.5" fill="var(--muted)">One theory (Cantillon effect + money demand), two injection points, two outcomes. Approximate; sources: Fed H.4.1/H.6, BLS</text></svg><figcaption>In 2008 the money entered through banks and stopped in reserves and asset prices; in 2020 it entered through households and reached consumer goods. The phrase “printing money” hides the variable that matters most: the injection point.</figcaption></figure>

**The Austrian embarrassment.** In 2009–2012 a good many Austrian economists and commentators publicly predicted a sharp fall in the dollar, hyperinflation, even dollar collapse; in November 2010 an open letter signed by well-known economists and investors warned Bernanke that QE2 risked “currency debasement and inflation”; gold ran to about $1,900 in 2011 and then fell for four years. **They were wrong, and wrong in public.** Where was the error? Not in the theory — the Cantillon effect and money demand are Austrian tools — but in the application: they skipped the application layer of Stage 13.1 and jumped from “the base has quadrupled” to “prices will fly,” without asking where the injection point was, how money demand had changed, or whether the multiplier had broken. Salerno, Jeffrey Hummel and others pointed to the role of IOER at the time, but their voices were drowned by the “end of the dollar” narrative. Stage 14.4 lists this among the school's most common mistakes: **treating theory as history, “possible” as “inevitable,” direction as timing.** A school that wants standing to analyze 2020 must first admit what it got wrong in 2010.

### ④ 2020–23: a different injection point — trillions to households, 9% CPI, tightening, and Silicon Valley Bank

March 2020: pandemic lockdowns. The Fed reacted ten times faster than in 2008: rates back to zero within two weeks, **unlimited** QE announced, a dozen credit facilities opened (corporate bonds, municipal bonds, commercial paper, money-market funds). The balance sheet went from about $4.2 trillion in February 2020 to about $7 trillion by June — **about $3 trillion in four months** — and kept growing to about $9 trillion by spring 2022.

**But what was really different was the fiscal side.** The CARES Act of March 2020, about $2.2 trillion; a December package of about $0.9 trillion; the American Rescue Plan of March 2021, about $1.9 trillion — roughly $5 trillion in all, including three rounds of Economic Impact Payments to individuals totalling over $800 billion, unemployment top-ups of $600 a week (later $300), the Paycheck Protection Program's roughly $800 billion of largely forgivable small-business loans, plus child tax credits and rental assistance. **The Treasury's borrowing was in large part absorbed by Fed purchases of Treasuries — functionally, newly printed money wired into household accounts.**

The data: M2 rose from about $15.4 trillion in February 2020 to about $21.7 trillion in early 2022, **about +40% in two years** — not base money but deposits in the public's hands. The household saving rate touched about 33% in April 2020 (nothing to spend on in lockdown); “excess savings” were estimated above $2 trillion. When the economy reopened in 2021 the money was spent: first on durables (furniture, electronics, used cars — used-car prices rose about 40% in a year), then on rents and services. CPI year-on-year: 1.4% in January 2021, 7.0% in December, **9.1% in June 2022** (a forty-year high). Core PCE also passed 5% in early 2022.

**The contrast with 2008 is the lesson's central argument** (see the figure): the same Fed, the same “printing,” but in 2008 injected into banks, parked in reserves, lifting assets; in 2020 injected via the Treasury into households, reaching consumers directly, lifting the CPI. **Change the injection point and the Cantillon path changes, and so does the outcome.** Fairness requires adding that the 2021–22 inflation had genuine supply components — broken supply chains, chip shortages, energy and food prices after the invasion of Ukraine. Decompositions by the San Francisco Fed and others attribute roughly half of the inflation to demand (money) and half to supply, with wide variation across methods. Austrians can insist that “without monetary expansion a supply shock changes relative prices but cannot raise all prices together” (Mises's old point), while conceding that supply factors amplified the magnitude and shaped the timing.

**The tightening of 2022–23.** The Fed first called the inflation “transitory” (2021), began hiking in March 2022, and raised the fed funds rate at the fastest pace in forty years, from zero to 5.25–5.5% by July 2023; balance-sheet runoff (QT) began in June 2022. The other half of ABCT started to play out (Stage 5.3): the longest-duration assets failed first — long Treasuries lost about 30% in 2022 (one of the worst years on record), unprofitable tech fell by more than half, crypto assets crashed, commercial real estate began to default.

**Silicon Valley Bank (10 March 2023)** is the cleanest teaching case of the period. Its deposits had multiplied in 2020–21 on the tech-funding wave, and it put them into long Treasuries and agency MBS — bought when yields were 1–2%, with very long duration. When rates reached 4–5% those securities lost market value, and the unrealized loss approached the bank's entire equity. Its depositors were mostly tech firms, mostly above the $250,000 insurance cap, all on the same social networks; one tweet could start a run, and about $42 billion left in a single day. **It had no bad loans; it had merely believed, while rates were zero, that rates would stay zero.** That is the banking version of Stage 3.5's “a suppressed rate lies”: the rate signal said long assets were cheap, and when the signal was withdrawn the balance sheet tore open. Signature Bank and First Republic followed; the Fed opened a new lending facility and the Treasury guaranteed all deposits — **liquidation prevented once more**, though on a far smaller scale than 2008.

### ⑤ The tally: what ABCT got right and wrong; the strongest MMT and monetarist readings

**What ABCT got right:**

- **The 2003–06 housing boom was rate-driven malinvestment**, concentrated in the longest-duration credit (mortgages) and the most rate-sensitive sectors (construction, housing finance) — pattern, sequence and fragility all present. Not hindsight: a number of Austrians (and non-Austrians such as Taylor) said so in 2004–06.
- **Blocking liquidation after 2008 prolonged the adjustment**: the 2010s saw one of the slowest postwar US recoveries, a rising zombie-firm share by BIS estimates, and slowing productivity growth — the “secular stagnation” of Stage 10.4; Japanification.
- **QE lifted asset prices and widened wealth gaps**: first recipients gain — the Cantillon effect, and the wealth-distribution data of the 2010s bear it out.
- **When rates rose in 2022 the longest-duration assets fell first**: long bonds, growth stocks, crypto, SVB — in that order.

**What ABCT (as used) got wrong:**

- **The 2010s inflation / dollar-collapse predictions.** For the reasons in ③: the injection point and money demand were skipped.
- **Timing.** From 2009 onward some Austrian was always predicting “the crash next year”; the S&P rose for a decade. Theory gives no dates; treating it as a calendar is the user's error (Stages 13.1, 14.4).
- **Underrating supply factors.** The 2021–22 inflation was not all money; attributing everything to the Fed is as much cherry-picking as attributing everything to supply chains.
- **Insufficient credit for “preventing secondary deflation.”** Holding the money stock up in October 2008 was right, and Austrians should not deny it merely because they dislike bailouts.

**MMT at full strength** (Stage 11.4): the 2010s proved that deficits and QE do not by themselves cause inflation while the economy has slack; the 2021 inflation came from hitting real resource constraints (supply chains, labor), not from “printing” as such; the right policy variable is real resource utilization, not the money supply or the deficit. **The Austrian reply**: MMT correctly saw that money did not reach the CPI in the 2010s, but attributed it to “slack” rather than to “injection point and money demand,” and therefore cannot explain why 2020 — with **at least as much slack** (unemployment about 15% in April 2020) — produced inflation. The answer is that the injection point changed and the money went straight to consumers. Nor can MMT explain the asset inflation of the 2010s: a slack theory has no line for asset prices.

**Monetarism at full strength** (Stage 11.2): in the 2010s the base exploded but M2 grew modestly and velocity fell, so by MV = PY no inflation was to be expected; in 2020–21 M2 rose 40%, and with the “long and variable lag” of 12–24 months the 2021–22 inflation is exactly what the quantity theory predicts — Steve Hanke, John Greenwood and others forecast it on that basis in early 2021, more accurately than the Fed. **The Austrian reply**: monetarism's aggregate judgment was right in both episodes and should be acknowledged; but it cannot explain **which** prices moved first — stocks and houses in the 2010s, used cars and furniture then rents in 2021 — and that requires the injection point, the Cantillon effect. Moreover the monetarist prescription (stable M2 growth) ran after 2008 into something absent from its own theory: a central bank able to decouple base money from M2 (IOER).

The whole lesson in one sentence: **one Fed, two rounds of “printing,” two injection points, two outcomes — ABCT and the Cantillon effect explain the pattern, monetarism the aggregate, MMT the reminder about real constraints, and the Austrians' own error in the 2010s was forgetting to use their own tools.** The next lesson (Stage 13.5) turns those tools into a daily habit: how to read an FOMC statement. Stage 18.5 asks a question of the present: is the AI capex frenzy of the 2020s another round of rate-driven malinvestment?
`,

  demo: "qe-tracer",

  analogy: `
Think of the monetary system as **a city's water supply**, with the Fed as the waterworks.

In 2008 the waterworks quadrupled its output. But it pumped the water into **the reservoirs of the banking district** — and paid anyone who left water in the reservoir (interest on reserves). The people of the banking district feared a drought themselves and did not want to release water downstream; downstream, residents were paying off debts and did not want more water. Result: the reservoir level rose fourfold, everything sitting at the reservoir's edge (stocks, bonds, houses) floated up in price, yet the supermarket at the other end of town (the CPI) stayed dry. Some people ran into the street shouting “Flood coming!” — for ten years. No flood came, and their credibility drained away.

In 2020 the waterworks opened the gates again, wider than in 2008. But this time the city government (the Treasury) laid a pipe **straight to every household's tap** (checks, unemployment benefits, PPP). For a few months people stored the water in bathtubs (excess savings under lockdown); when the doors opened in 2021, tens of millions of households turned on the tap and went shopping at once. The supermarket's shelves (supply chains) had not been restocked; prices had nowhere to go but up. This time the flood really came — but at **the supermarket end**, while the reservoir's edge (asset prices) actually drained in 2022.

In 2022 the waterworks began closing the gates and pumping water back out. Who suffered first? Those who assumed the level would stay that high forever and built at the lowest point of the reservoir — Silicon Valley Bank bought a pile of thirty-year assets at the high-water mark, and when the water receded its foundations were exposed.

Austrian hydraulics was not wrong: where the water enters, where it flows first, and whether the people at each station want to keep it — those three things decide where the flooding happens. The ones who were wrong looked only at the waterworks' output and never at the plumbing diagram.
`,

  misconceptions: [
    "**“QE printed trillions with no inflation, so Austrian monetary theory is wrong.”** — Austrian theory contains exactly the two items that explain it: the Cantillon effect (injection at the top of the banking system, money parked in reserves) and money demand (surging after the crisis). What was wrong was the Austrian users who skipped those items in the 2010s and predicted hyperinflation, not the theory. And the inflation did not vanish — it appeared in asset prices.",
    "**“The 2021–23 inflation was entirely supply chains, nothing to do with money.”** — A supply shock changes relative prices; it cannot make all prices rise together persistently. M2 +40% in two years and fiscal money wired directly to households were the necessary condition for a rise in the general price level. San Francisco Fed decompositions put it at roughly half and half. Blaming only supply chains is as much cherry-picking as blaming only the Fed.",
    "**“The Fed should have done nothing in 2008 and let every bank fail.”** — Holding up the money stock (preventing a 1930–33 secondary deflation) and holding up particular institutions and asset prices (preventing liquidation) are two different things. The first can be done by lending to solvent banks under Bagehot's rule, and Austrians should concede Bernanke was right at that layer; the error was treating the second as if it were the first.",
    "**“The subprime crisis was caused by the CRA and the GSEs, not the Fed.”** — Fed research finds CRA loans a small share of subprime; the GSEs did add fuel but private securitization had the larger share at the peak. The honest Austrian synthesis: credit expansion the fuel, GSEs and regulation the conduit, securitization the amplifier — all three needed, and the first two contested.",
    "**“Silicon Valley Bank failed because of bad loans.”** — It had almost none. It put surging deposits into long Treasuries and MBS while rates were zero; at 5% its unrealized losses approached its entire equity, and uninsured depositors pulled about $42 billion in a day. That is the balance-sheet version of “a suppressed rate lies,” not a credit-quality problem.",
  ],

  quiz: [
    {
      q: "The Fed created about $3.5 trillion of base money in 2008–14, yet CPI averaged about 1.6% a year. By this lesson's analysis, the main reason is:",
      options: [
        "The statistics agency under-reported inflation",
        "QE did not actually create money",
        "The injection point was the top of the banking system; interest on reserves and deleveraging broke the multiplier, money demand surged, and the new money lifted asset prices instead",
        "Globalization fully offset the expansion",
      ],
      answer: 2,
      explain: "About three-quarters of the new base money sat in excess reserves, M2 grew only about 6% a year, velocity fell; the inflation appeared in stocks, bonds and housing — the Cantillon effect plus money demand.",
    },
    {
      q: "What was the decisive difference between 2020–21 and 2008?",
      options: [
        "The Fed expanded its balance sheet less",
        "The Treasury injected trillions directly into households (checks, unemployment top-ups, PPP) with the Fed buying the bonds — the injection point moved from banks to consumers",
        "The Fed did not cut rates",
        "There were no supply shocks",
      ],
      answer: 1,
      explain: "M2 rose about 40% in two years (public deposits, not reserves), was released into consumption after reopening, and collided with broken supply chains; CPI reached about 9.1% in June 2022.",
    },
    {
      q: "What was the direct mechanism of Silicon Valley Bank's failure in March 2023?",
      options: [
        "Buying large amounts of long Treasuries and MBS at zero rates; at 5% the unrealized losses approached its entire equity, and uninsured depositors ran",
        "Subprime loan defaults",
        "Cryptocurrency exposure",
        "Foreign-exchange losses",
      ],
      answer: 0,
      explain: "A duration mismatch: the rate signal said long assets were cheap, and when the signal was withdrawn the balance sheet tore. Stage 3.5's “a suppressed rate lies,” written on a bank balance sheet.",
    },
    {
      q: "Where does this lesson locate the Austrian error in predicting hyperinflation in the 2010s?",
      options: [
        "In the Cantillon-effect theory itself",
        "At the application layer: skipping the injection point, money demand and whether the multiplier had broken, and jumping from “the base quadrupled” to “prices will fly”",
        "In unreliable data",
        "In Fed manipulation of the gold price",
      ],
      answer: 1,
      explain: "The tools (Cantillon effect, money demand) are the Austrians' own; the error was treating theory as history and direction as timing — the central lesson of Stages 13.1 and 14.4.",
    },
    {
      q: "The monetarist reading of the 2020–21 inflation (M2 +40% → inflation after a 12–24-month lag): what did it get right, and what did it miss?",
      options: [
        "It got everything wrong",
        "Right on the price sequence; missed the aggregate",
        "Right on supply shocks; missed money",
        "Right on the aggregate and the lag; missed which prices moved first (used cars, furniture, rents) — which requires the injection point, i.e. the Cantillon effect",
      ],
      answer: 3,
      explain: "Hanke and others forecast the inflation from the quantity theory in early 2021, better than the Fed, and Austrians should say so; but the order of relative-price moves and the asset inflation of the 2010s are explained only by injection-point analysis.",
    },
  ],

  further: [
    { label: "Ravier & Lewin, “The Subprime Crisis” (QJAE, 2012) — the Austrian study that displays the 2001–08 ABCT pattern with structural data", url: "https://mises.org/library/subprime-crisis" },
    { label: "Thomas Woods, Meltdown (2009) — the popular Austrian account of the 2008 crisis", url: "https://mises.org/library/book/meltdown" },
    { label: "Federal Reserve: balance-sheet data (H.4.1) and money stock (H.6) — the official source for checking this lesson's figures", url: "https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm" },
    { label: "Federal Reserve Bank of San Francisco, “How Much Do Supply and Demand Drive Inflation?” (2022) — the supply/demand decomposition of the 2021–22 inflation", url: "https://www.frbsf.org/research-and-insights/publications/economic-letter/2022/06/how-much-do-supply-and-demand-drive-inflation/" },
    { label: "Salerno, “A Reformulation of Austrian Business Cycle Theory in Light of the Financial Crisis” (QJAE, 2012) — the post-crisis Austrian restatement of ABCT", url: "https://mises.org/library/reformulation-austrian-business-cycle-theory-light-financial-crisis" },
  ],
};
