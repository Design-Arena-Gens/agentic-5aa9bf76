/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    esmExternals: "loose"
  }
};

export default nextConfig;
