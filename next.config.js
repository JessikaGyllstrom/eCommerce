/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [
      'www.datocms-assets.com'
    ],
  }
}
module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};