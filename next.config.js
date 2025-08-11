/** @type {import('next').NextConfig} */
const repo = 'stkv2';
const isProd = process.env.GITHUB_ACTIONS === 'true';

module.exports = {
  output: 'export',
  images: { unoptimized: true },       // required for next/image on static export
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,                 // avoids 404s for folder-style pages on Pages
};