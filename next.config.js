/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['echarts', 'zrender']);

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = withTM(nextConfig);