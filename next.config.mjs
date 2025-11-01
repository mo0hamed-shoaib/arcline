/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["geist"],
};

export default nextConfig;
