import type React from "react";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import "./styles/tw-animate.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcline.dev"),
  title: "Arcline | Professional Frontend Development Services",
  description:
    "Modern websites built with AI-powered development. Tourism sites, e-commerce platforms, personal portfolios and more. Next.js, TypeScript, Tailwind CSS and shadcn/ui.",
  keywords:
    "frontend development, web development, Next.js, TypeScript, tourism websites, e-commerce, personal portfolios, professional websites, Tailwind CSS, shadcn/ui, Supabase, Cursor AI, custom web design",
  authors: [{ name: "Arcline Team" }],
  creator: "Arcline",
  publisher: "Arcline",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arcline.dev",
    siteName: "Arcline - Frontend Development",
    title: "Arcline - Professional Frontend Development Services",
    description:
      "Modern websites built with AI-powered development. Tourism sites, e-commerce, portfolios and more. Fast, responsive and production-ready.",
    images: [
      {
        url: "https://arcline.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Arcline - Professional Frontend Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcline - Professional Frontend Development Services",
    description:
      "Modern websites built with AI-powered development. Tourism sites, e-commerce, portfolios and more. Let's build something great together.",
    images: ["https://arcline.dev/opengraph-image"],
    creator: "@jackjack_eth",
    site: "@arcline_dev",
  },
  alternates: {
    canonical: "https://arcline.dev",
  },
  category: "Services",
  classification: "Web Development",
  icons: {
    icon: [{ url: "/arcline-icon.png", type: "image/png" }],
    apple: [{ url: "/arcline-icon.png", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  generator: "Next.js",
  applicationName: "Arcline - Frontend Development",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          href="/fonts/MatrixtypeBold-yYyB5.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        {/* Software Application JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Arcline - Frontend Development",
              description:
                "Professional frontend development services. Modern websites built with AI-powered development. Tourism sites, e-commerce, portfolios and more.",
              url: "https://arcline.dev",
              publisher: {
                "@type": "Organization",
                name: "Arcline",
                url: "https://arcline.dev",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://arcline.dev",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What kinds of websites do you build?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "I specialize in tourism websites, e-commerce platforms, personal portfolios, business sites and more. Every project is tailored to your specific needs. From simple landing pages to complex admin dashboards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What technologies do you use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Next.js for the framework, TypeScript for type safety, Tailwind CSS for styling. I use shadcn/ui for components, Supabase for backend services, and build custom design systems as needed.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the development process work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "I start with AI-powered development using Cursor to build the initial structure fast. Then I manually refine every detail, optimize for performance, and ensure everything is production-ready.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you help with design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. I create custom design systems based on your brand and vision. Using shadcn/ui as the foundation, I build exactly what your project needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What about SEO and performance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Every site is built with SEO best practices from day one. Performance optimization, accessibility, and responsive design are baked into every project.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do we stay in touch during development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Regular updates and clear communication throughout the process. I keep you informed at every step and incorporate your feedback as we build.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="arcline-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
