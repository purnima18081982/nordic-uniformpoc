import { NextConfig } from 'next';
import { withUniformConfig } from '@uniformdev/canvas-next-rsc/config';

/** @type {NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '*' }],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
  },
};

const nextConfig: NextConfig = {
  env: {
    UNIFORM_API_KEY: process.env.UNIFORM_API_KEY,
    UNIFORM_PROJECT_ID: process.env.UNIFORM_PROJECT_ID,
    UNIFORM_ENVIRONMENT: process.env.UNIFORM_ENVIRONMENT,
  },
  // Enable React Strict Mode
  reactStrictMode: false,
};

module.exports = () => {
  return withUniformConfig(nextConfig);
};
