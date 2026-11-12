// Explicit custom origin wins; Vercel supplies the stable production hostname.
const configured = process.env.NEXT_PUBLIC_SITE_URL;
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteUrl = configured
  ? new URL(configured).origin
  : productionHost ? new URL(`https://${productionHost}`).origin : undefined;
