/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@chz-on-me/ui"],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
