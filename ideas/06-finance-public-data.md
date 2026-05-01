# 06 - Finance & Public Data Actor Ideas

Inspired by: [FEC Campaign Finance Scraper](https://apify.com/parseforge/fec-campaign-finance-contributions-scraper), [Google Flights API](https://apify.com/johnvc/Google-Flights-Data-Scraper-Flight-and-Price-Search)

---

## 32. Public Government Contract Scraper

**What it does:** Scrape government procurement portals (SAM.gov, EU TED, etc.) for open contracts, awarded contracts, and contractor history.

**Target users:** B2G sales teams, contractors, market analysts

**Monetization:** PPE - per contract or per agency monitored

**Differentiation:** Alert on new contracts matching keywords, contractor win-history analysis, deadline countdown.

**Input:**
- `keywords`: string[]
- `agencies`: string[]
- `contractValueMin`: number
- `alertNew`: boolean

---

## 33. Flight Price Tracker API

**What it does:** A Standby API that searches flight prices across routes, dates, and airlines. Supports one-way, round-trip, and multi-city.

**Target users:** Travel apps, travel bloggers, corporate travel managers

**Monetization:** PPE - per search or per route monitored

**Differentiation:** Price drop alerts, cheapest day recommendation, flexible date grid, multi-airline comparison.

**Endpoints:**
- `GET /search?from&to&date&type`
- `GET /price-alert?route&targetPrice`
- `GET /trends?route`

---

## 34. Real Estate Listing Scraper + Price Analyzer

**What it does:** Scrape property listings from Zillow, Idealista, or local real estate sites. Extract price history, feature data, and neighborhood comps.

**Target users:** Real estate investors, agents, buyers

**Monetization:** PPE - per listing or per neighborhood report

**Differentiation:** Price-per-sqft analysis, days-on-market trend, rent-vs-buy calculator, foreclosure opportunity flag.

**Input:**
- `locations`: string[]
- `propertyTypes`: string[]
- `priceRange`: { min: number, max: number }
- `includeHistory`: boolean

---

## 35. Patent & Trademark Monitor

**What it does:** Scrape patent filings and trademark applications from USPTO, EUIPO, and other patent offices by company, keyword, or inventor.

**Target users:** IP lawyers, R&D teams, competitive intelligence

**Monetization:** PPE - per patent monitored or per search

**Differentiation:** Prior art suggestion, competitor patent portfolio maps, technology trend graphs.

---

## 36. Cryptocurrency Exchange Data Aggregator

**What it does:** Scrape real-time prices, volumes, and order book data from multiple crypto exchanges. Detect arbitrage opportunities.

**Target users:** Traders, quantitative analysts, fintech apps

**Monetization:** PPE - per data snapshot or per arbitrage alert

**Differentiation:** Arbitrage margin calculation, withdrawal fee consideration, API latency comparison between exchanges.
