import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: 'assets/images/**',
        search: '',
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
