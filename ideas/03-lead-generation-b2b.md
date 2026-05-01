# 03 - Lead Generation & B2B Intelligence Actor Ideas

Inspired by: [Website Tech Stack Scanner](https://apify.com/misterkhan/website-tech-stack-scanner), [SIÁN Agency](https://apify.com/sian.agency), [AI Lead Extractor](https://apify.com/dz_omar/ai-lead-extractor)

---

## 8. Website Tech Stack Scanner (Competitor Edition)

**What it does:** Detect technologies, CMS, analytics, ad pixels, frameworks, and hosting on any website. Bulk scan a list of domains.

**Target users:** Sales teams, marketers, competitive analysts

**Monetization:** PPE - per domain scanned ($0.01-0.07/domain)

**Differentiation:** Focus on "buying intent" signals - detect which tools are trial vs paid, flag technology changes over time, integrate with CRM enrichment.

**Input:**
- `domains`: string[]
- `detectOnly`: string[] (e.g., ["shopify", "klaviyo"])

---

## 9. Google Maps Business Scraper + AI Enrichment

**What it does:** Scrape Google Maps businesses by keyword + location. Use AI to extract additional insights from reviews and website content.

**Target users:** Sales teams, local SEO agencies, franchise researchers

**Monetization:** PPE - per business listing ($0.01-0.05/listing)

**Differentiation:** AI-generated business summary, review sentiment themes, competitor density map, identify businesses with no website (high-intent leads).

**Input:**
- `searchQueries`: string[]
- `locations`: string[]
- `includeReviews`: boolean
- `maxResults`: number

---

## 10. Job Posting Aggregator

**What it does:** Scrape job postings from LinkedIn, Indeed, WeWorkRemotely, and company career pages by role, location, and skills.

**Target users:** Recruiters, job seekers, HR tech companies, market analysts

**Monetization:** PPE - per job posting or per search

**Differentiation:** Salary trend analysis, skill demand tracking, company hiring velocity, remote-only filter with timezone analysis.

---

## 11. Event & Exhibitor List Scraper

**What it does:** Scrape exhibitor lists, speaker lineups, and attendee info from event websites (like Messe Stuttgart, trade shows, conferences).

**Target users:** B2B sales teams, event marketers, partnership managers

**Monetization:** PPE - per event scraped

**Differentiation:** Auto-enrich with LinkedIn profiles, company size, and domain tech stack. Generate outreach list ranked by relevance.

**Input:**
- `eventUrls`: string[]
- `enrichWithLinkedIn`: boolean
- `outputFormat`: "csv" | "json" | "hubspot"

---

## 12. Chrome Web Store Extension Scraper

**What it does:** Scrape Chrome extensions by category, rating, review text, developer email, and install counts.

**Target users:** Chrome extension developers, indie hackers, product researchers

**Monetization:** PPE - per extension or per category ($0.004/extension)

**Differentiation:** Identify extension niches with high ratings but low competition. Extract developer emails for outreach.

---

## 13. Crunchbase / AngelList Startup Scraper

**What it does:** Scrape startup profiles - funding rounds, investors, founders, employees, tech stack, and job openings.

**Target users:** VCs, sales teams targeting startups, job seekers

**Monetization:** PPE - per company profile

**Differentiation:** Funding runway estimate, hiring velocity signal, tech stack + job openings = buying intent prediction.
