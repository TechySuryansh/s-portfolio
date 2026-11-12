// Set the real public origin at deployment; never fabricate a portfolio domain.
const configured = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = configured ? new URL(configured).origin : undefined;
