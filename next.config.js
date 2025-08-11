/** @type {import('next').NextConfig} */
const repo = 'stkv2';                   // <— your repo name
const isProd = process.env.GITHUB_ACTIONS === 'true';

module.exports = {
  output: 'export',                     // make a static build
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};
