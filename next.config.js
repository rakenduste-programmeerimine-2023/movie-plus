/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.themoviedb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
