import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["picsum.photos"], // 👈 ovde dodaš dozvoljeni domen
  },
};

export default nextConfig;
