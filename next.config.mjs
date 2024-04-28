/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.arrowheadgamestudios.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;