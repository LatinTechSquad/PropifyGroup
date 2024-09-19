// next.config.mjs
import i18nConfig from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  i18n: i18nConfig.i18n,
};

export default nextConfig;