# 05 - SEO & Marketing Tools Actor Ideas

Inspired by: [Ad Pixel ID Extractor](https://apify.com/trovevault/ad-pixel-id-extractor), [Website Tech Stack Scanner](https://apify.com/misterkhan/website-tech-stack-scanner)

---

## 27. Ad Pixel & Tracker Auditor

**What it does:** Scan any website and extract all advertising pixel IDs (Facebook Pixel, TikTok Pixel, Google Ads, GTM, LinkedIn, Pinterest, etc.) plus their configuration.

**Target users:** Media buyers, marketing agencies, compliance teams

**Monetization:** PPE - per domain audited ($0.005-0.02/domain)

**Differentiation:** Detect misconfigured pixels, duplicate firing, missing consent wrappers. Export as CSV for client audits.

**Input:**
- `urls`: string[]
- `pixelTypes`: string[]
- `checkConsent`: boolean

---

## 28. SERP Competitor Analyzer

**What it does:** Scrape Google search results for keywords and analyze top-ranking pages - word count, backlinks estimate, page speed, schema markup, and content structure.

**Target users:** SEO agencies, content marketers

**Monetization:** PPE - per keyword analyzed or per SERP page

**Differentiation:** Content gap analysis vs your URL, featured snippet opportunity score, People Also Ask extraction.

**Input:**
- `keywords`: string[]
- `location`: string
- `language`: string
- `compareUrl`: string

---

## 29. Backlink Opportunity Finder

**What it does:** Scrape resource pages, broken links, and competitor backlinks from target websites. Identify outreach opportunities.

**Target users:** Link builders, SEO specialists

**Monetization:** PPE - per opportunity found

**Differentiation:** Auto-detect broken links on high-DA sites, suggest replacement content from your domain.

---

## 30. Meta Tag & Social Preview Analyzer

**What it does:** Scan URLs for OG tags, Twitter cards, schema markup, and show how they'll render on social platforms.

**Target users:** Social media managers, developers

**Monetization:** Pay per usage (free with platform costs)

**Differentiation:** Batch check entire sitemaps, auto-generate missing tags, preview on Facebook, Twitter, LinkedIn side-by-side.

---

## 31. Email Deliverability Checker

**What it does:** Scan a domain's DNS records for SPF, DKIM, DMARC, MX, and common email configuration issues.

**Target users:** Email marketers, IT teams, SaaS companies

**Monetization:** PPE - per domain checked ($0.01-0.05/domain)

**Differentiation:** Security score, blacklist check, actionable fix suggestions.

**Input:**
- `domains`: string[]
- `checkBlacklists`: boolean
- `suggestFixes`: boolean
