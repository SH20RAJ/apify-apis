# 02 - Social Media & Content Actor Ideas

Inspired by: [SIÁN Agency](https://apify.com/sian.agency) (TikTok/Instagram/YouTube scrapers), [Video Thumbnail Extractor](https://apify.com/happitap/video-thumbnail-extractor)

---

## 8. YouTube Transcript + Chapter Extractor

**What it does:** Extract transcripts, auto-generated chapters, video metadata, and top comments for any YouTube video or channel.

**Target users:** Content creators, researchers, SEO agencies

**Monetization:** PPE - per video processed

**Differentiation:** Auto-timestamp summary, keyword density analysis, sentiment of comments.

**Input:**
- `videoUrls` or `channelUrls`
- `includeComments`: boolean
- `languageFilter`: string

---

## 9. TikTok Trend Analyzer

**What it does:** Scrape trending videos by hashtag, sound, or region. Extract views, likes, shares, and creator info.

**Target users:** Marketers, influencers, trend researchers

**Monetization:** PPE - per hashtag or per region analyzed

**Differentiation:** Trend velocity (growth rate), predict upcoming viral sounds/hashtags.

---

## 10. Instagram Reels Downloader & Analyzer

**What it does:** Download reels metadata (caption, hashtags, music, engagement stats) by username, hashtag, or location.

**Target users:** Social media managers, influencer marketers

**Monetization:** PPE - per reel or per profile

**Differentiation:** Best posting time analysis, engagement rate benchmarks, hashtag effectiveness.

---

## 11. Reddit Post & Comment Scraper

**What it does:** Scrape posts, comments, and user stats from any subreddit with filters for time, score, and keywords.

**Target users:** Market researchers, product teams, community managers

**Monetization:** Pay per result (dataset item)

**Differentiation:** Sentiment analysis, topic clustering, identify influential users.

**Input:**
- `subreddits`: string[]
- `keywords`: string[]
- `timeFilter`: "day" | "week" | "month" | "year" | "all"
- `minScore`: number

---

## 12. Podcast Episode Transcriber

**What it does:** Scrape podcast RSS feeds, download audio, transcribe with Whisper API, and extract key topics.

**Target users:** Content marketers, journalists, researchers

**Monetization:** PPE - per episode transcribed ($0.50-2/episode)

**Differentiation:** Speaker diarization, ad break detection, sponsorship identification.

---

## 13. LinkedIn Post & Engagement Scraper (Public)

**What it does:** Scrape public LinkedIn posts by company page or personal profile URL. Extract text, reactions, comments count, and share counts.

**Target users:** Social media analysts, recruiters, B2B marketers

**Monetization:** PPE - per profile or per post batch

**Differentiation:** Engagement rate over time, content topic analysis.

**Input:**
- `profileUrls`: string[]
- `maxPosts`: number
- `dateRange`: { from: string, to: string }

---

## 14. Pinterest Pin & Board Analyzer

**What it does:** Scrape pins from boards or by keyword. Extract image URLs, descriptions, outbound links, saves count, and creator info.

**Target users:** E-commerce sellers, content creators, interior designers

**Monetization:** PPE - per board or per keyword search

**Differentiation:** Trending visual themes detection, outbound link domain analysis for affiliate opportunities.
