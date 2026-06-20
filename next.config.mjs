/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';
const repo = 'william-ralloma-portfolio';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;
