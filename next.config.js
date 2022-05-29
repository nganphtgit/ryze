/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/nganphtgit/ryze/main/' : '',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
