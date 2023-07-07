/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.annihil.us",
        port: "",
        pathname: "/u/prod/marvel/i/mg/**",
      },
    ],
  },
};

module.exports = nextConfig;
