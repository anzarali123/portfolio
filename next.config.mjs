/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        pathname: "/aerchain-assets/**",
      },
      {
        protocol: "https",
        hostname: "xtranetindia.com",
        pathname: "/assets/img/**",
      },
    ],
  },
};

export default nextConfig;
