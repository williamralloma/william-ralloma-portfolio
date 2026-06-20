/** @type {import('next').NextConfig} */
const repo = 'william-ralloma-portfolio';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
