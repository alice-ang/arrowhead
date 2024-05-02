/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.arrowheadgamestudios.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "image.api.playstation.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.sortiraparis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
