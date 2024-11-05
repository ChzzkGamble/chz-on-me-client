/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@chzzk-gamble/ui"],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
