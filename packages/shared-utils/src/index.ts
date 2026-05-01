/**
 * Shared utilities for Apify Actors
 */

/**
 * Validates that a URL string is well-formed
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Normalizes a URL by removing trailing slashes and fragments
 */
export function normalizeUrl(url: string): string {
    const parsed = new URL(url);
    parsed.hash = '';
    let normalized = parsed.toString();
    if (normalized.endsWith('/')) {
        normalized = normalized.slice(0, -1);
    }
    return normalized;
}

/**
 * Sleep for a given number of milliseconds
 */
export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Format a date as ISO string with fallback
 */
export function formatDate(date?: Date): string {
    return (date ?? new Date()).toISOString();
}

/**
 * Sanitize a string for use as a filename
 */
export function sanitizeFilename(name: string): string {
    return name
        .replace(/[^a-zA-Z0-9.-]/g, '_')
        .replace(/_{2,}/g, '_')
        .slice(0, 100);
}
