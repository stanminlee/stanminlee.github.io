/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
    output: isProduction ? "export" : "standalone",
    trailingSlash: true,
    basePath: "/website",
    assetPrefix: "/website",
};

export default nextConfig;