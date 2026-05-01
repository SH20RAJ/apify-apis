import { Actor, log } from 'apify';
import { CheerioCrawler, RequestList } from 'crawlee';
import { isValidUrl, normalizeUrl } from '@apify-apis/shared-utils';

await Actor.main(async () => {
    const input = await Actor.getInput<{
        startUrls?: string[];
        maxRequests?: number;
    }>();

    const startUrls = input?.startUrls ?? ['https://apify.com'];
    const maxRequests = input?.maxRequests ?? 10;

    // Validate URLs
    const validUrls = startUrls.filter((url) => {
        const valid = isValidUrl(url);
        if (!valid) {
            log.warning(`Invalid URL skipped: ${url}`);
        }
        return valid;
    });

    if (validUrls.length === 0) {
        log.error('No valid start URLs provided');
        await Actor.exit({ exitCode: 1 });
        return;
    }

    log.info(`Starting scraper with URLs: ${validUrls.join(', ')}`);

    const requestList = await RequestList.open('start-urls', validUrls.map((url) => ({ url: normalizeUrl(url) })));

    const crawler = new CheerioCrawler({
        requestList,
        maxRequestsPerCrawl: maxRequests,
        async requestHandler({ request, $, enqueueLinks }) {
            const { url } = request;

            // Extract page title
            const title = $('title').text().trim();

            // Extract meta description
            const description = $('meta[name="description"]').attr('content') ?? '';

            log.info(`Scraped: ${title} (${url})`);

            // Save data to dataset
            await Actor.pushData({
                url,
                title,
                description,
                scrapedAt: new Date().toISOString(),
            });

            // Follow links on the same domain
            await enqueueLinks({
                globs: [`${new URL(url).origin}/**`],
            });
        },
        failedRequestHandler({ request }) {
            log.error(`Request failed: ${request.url}`);
        },
    });

    await crawler.run();
    log.info('Scraper finished successfully');
});
