/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
    // ✅ ADD THIS
  output: 'export',
  trailingSlash: true,
  images: {
     unoptimized: true, // important for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
