import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/company/sign-in',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
