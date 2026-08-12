import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Catch old Shopify policy URLs still indexed by Google
      {
        source: "/policies/:slug",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
