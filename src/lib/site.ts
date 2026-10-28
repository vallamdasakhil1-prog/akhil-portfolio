/**
 * Final public domain, only when it is actually known (set NEXT_PUBLIC_SITE_URL).
 * Used for the canonical URL, sitemap, and absolute social-sharing URLs.
 * On Vercel, Next.js resolves relative Open Graph URLs from Vercel's own
 * environment variables when this is not set, so nothing is hardcoded here.
 */
const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
export const siteUrl: string | undefined = raw ? raw : undefined;
