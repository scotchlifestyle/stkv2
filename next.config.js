/** @type {import('next').NextConfig} */
const repo = 'stkv2'; // repo name
const isCI = process.env.GITHUB_ACTIONS === 'true';

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isCI ? `/${repo}` : '',
  assetPrefix: isCI ? `/${repo}/` : '',
  trailingSlash: true,
};
