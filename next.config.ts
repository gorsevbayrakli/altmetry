import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async rewrites() {
    return { beforeFiles: [{ source: "/", destination: "/index.html" }], afterFiles: [], fallback: [] };
  },
  async redirects() {
    return [
      { source: "/services/:path*", destination: "/#services", permanent: false },
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/work/:path*", destination: "/#work", permanent: false },
      { source: "/work", destination: "/#work", permanent: false },
      { source: "/journal/:path*", destination: "/#notes", permanent: false },
      { source: "/journal", destination: "/#notes", permanent: false },
      { source: "/studio", destination: "/", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
