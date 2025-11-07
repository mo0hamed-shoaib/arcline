/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["geist"],
  // Turbopack config (empty - using default behavior)
  turbopack: {},
  // Disable Next.js devtools in production
  ...(process.env.NODE_ENV === "production" && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Exclude Next.js devtools from production bundle
        config.resolve.alias = {
          ...config.resolve.alias,
          "@next/devtools": false,
        };
      }
      return config;
    },
  }),
  // Security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net https://hebbkx1anhila5yf.public.blob.vercel-storage.com",
              "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "media-src 'self' https://hebbkx1anhila5yf.public.blob.vercel-storage.com blob:",
              "connect-src 'self' https://hebbkx1anhila5yf.public.blob.vercel-storage.com",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
