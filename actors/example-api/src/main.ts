import { Actor, log } from 'apify';
import { createServer } from 'http';
import { normalizeUrl } from '@apify-apis/shared-utils';

// This example demonstrates a Standby API actor that can be monetized
// using Pay Per Event (PPE). In standby mode, the actor runs a lightweight
// HTTP server and responds to requests via API.

await Actor.init();

const server = createServer(async (req, res) => {
    try {
        const url = new URL(req.url ?? '/', `http://${req.headers.host}`);

        // Health check endpoint
        if (url.pathname === '/health') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', actor: Actor.getEnv().actorId }));
            return;
        }

        // Main endpoint: /normalize
        if (url.pathname === '/normalize') {
            const targetUrl = url.searchParams.get('url');

            if (!targetUrl) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Missing "url" query parameter' }));
                return;
            }

            // Example: charge per event if using Pay Per Event monetization
            // Uncomment after setting up pricingEvents in actor.json:
            // await Actor.charge({ eventName: 'normalize-url' });

            const result = normalizeUrl(targetUrl);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                original: targetUrl,
                normalized: result,
                timestamp: new Date().toISOString(),
            }));
            return;
        }

        // 404 fallback
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        log.error(`Request failed: ${message}`);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: message }));
    }
});

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4321;

server.listen(port, () => {
    log.info(`Standby API server listening on port ${port}`);
});

// Keep the actor alive (standby mode)
// In production, Apify manages the lifecycle; locally it runs until terminated.
