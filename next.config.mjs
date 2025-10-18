/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,       

      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default withNextIntl(nextConfig);