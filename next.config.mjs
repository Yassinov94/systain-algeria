/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "systain-algeria.com",
      },
    ],
  },
};

export default nextConfig;
