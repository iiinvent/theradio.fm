/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only treat .tsx/.ts files as pages - ignores old .html files in pages/
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  // The old static pages/ directory contains legacy HTML files that are not
  // Next.js pages. We keep them as static assets in public/ if needed.
  // Exclude the old pages directory from the build by using rewrites.
};

export default nextConfig;
