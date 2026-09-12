/** @type {import('next').NextConfig} */
// NEXT_PUBLIC_BASE_PATH is set only for the GitHub Pages preview (e.g. "/dr-tshayingwe-site").
// Production on the practice's own domain leaves it unset.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};
export default nextConfig;
