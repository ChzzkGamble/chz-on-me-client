/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@chz-on-me/ui"],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};

export default nextConfig;
