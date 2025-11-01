import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Calendar,
  Cookie,
  Database,
  ExternalLink,
  FileText,
  Info,
  Mail,
  Settings,
  Shield,
} from "lucide-react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Cookie Policy - Arcline",
  description: "Cookie policy for Arcline frontend development services",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isBannerVisible={false} />

      <main className="pb-20 pt-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <Link
            href="/"
            className="mb-8 mt-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Go back to home page"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              Back to Home
            </span>
          </Link>
          <div className="mb-12">
            <h1
              className="mb-4 text-4xl font-bold md:text-5xl"
              style={{
                backgroundImage: "var(--text-gradient)",
                color: "transparent",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: 600,
                letterSpacing: "clamp(-1.5px, -0.04em, -2.08px)",
                lineHeight: "1.15",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Cookie Policy
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "14px",
                }}
              >
                Last Updated: January 2025
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <Card
              className="bg-card/50 border-border backdrop-blur-sm"
              style={{
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                    <Info className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h2
                      className="mb-2 text-xl font-semibold text-foreground"
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                      }}
                    >
                      About This Policy
                    </h2>
                    <p
                      className="text-foreground/80"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      This policy explains how we use cookies on our website. Read alongside our
                      Privacy Policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-card/50 border-border backdrop-blur-sm"
              style={{
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20">
                    <Cookie className="h-5 w-5 text-orange-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    What Are Cookies?
                  </h2>
                </div>
                <p
                  className="text-foreground/80"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  Cookies are small text files stored on your device when you visit websites. They
                  help websites work properly and remember your preferences. Cookies can be
                  "persistent" (stay until deleted) or "session" (deleted when you close your
                  browser).
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-card/50 border-border backdrop-blur-sm"
              style={{
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20">
                    <BarChart3 className="h-5 w-5 text-pink-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Types of Cookies We Use
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3
                      className="mb-2 font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px" }}
                    >
                      Essential Cookies
                    </h3>
                    <p
                      className="text-foreground/80 mb-2"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      Required for the website to function. Enable navigation, security, and
                      preference storage. Cannot be disabled.
                    </p>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: "var(--font-geist-mono)", fontSize: "14px" }}
                    >
                      Examples: authentication, session management, security
                    </p>
                  </div>
                  <div>
                    <h3
                      className="mb-2 font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px" }}
                    >
                      Performance Cookies
                    </h3>
                    <p
                      className="text-foreground/80 mb-2"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      Help us understand site performance and visitor behavior. All data is
                      aggregated and anonymous.
                    </p>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: "var(--font-geist-mono)", fontSize: "14px" }}
                    >
                      Examples: Vercel Analytics, error tracking
                    </p>
                  </div>
                  <div>
                    <h3
                      className="mb-2 font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px" }}
                    >
                      Functional Cookies
                    </h3>
                    <p
                      className="text-foreground/80 mb-2"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      Enable enhanced features like theme preferences and UI customization. Some
                      features may not work if disabled.
                    </p>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: "var(--font-geist-mono)", fontSize: "14px" }}
                    >
                      Examples: theme selection, UI preferences
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-card/50 border-border backdrop-blur-sm"
              style={{
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                    <ExternalLink className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Third-Party Cookies
                  </h2>
                </div>
                <p
                  className="text-foreground/80 mb-4"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  We use trusted third-party services that may set cookies:
                </p>
                <ul
                  className="text-foreground/80 list-inside list-disc space-y-2"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>
                    <strong className="text-foreground">Analytics:</strong> Vercel Analytics for
                    understanding website usage
                  </li>
                  <li>
                    <strong className="text-foreground">Hosting:</strong> Vercel (our hosting
                    provider) may set cookies for performance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="bg-card/50 border-border backdrop-blur-sm"
              style={{
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20">
                    <Database className="h-5 w-5 text-orange-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Local Storage and Similar Technologies
                  </h2>
                </div>
                <p
                  className="text-foreground/80"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  We also use browser storage (localStorage, sessionStorage) to save preferences
                  like theme settings. You can clear this through your browser settings, though some
                  features may not work.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-card/50 border-border backdrop-blur-sm"
              style={{
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20">
                    <Settings className="h-5 w-5 text-pink-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Managing Your Cookies
                  </h2>
                </div>
                <p
                  className="text-foreground/80 mb-4"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  You can manage cookies through your browser settings:
                </p>
                <ul
                  className="text-foreground/80 mb-4 list-inside list-disc space-y-2"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>Block or delete cookies in browser privacy settings</li>
                  <li>Clear browsing data to remove stored cookies</li>
                  <li>Use private/incognito mode to prevent cookie storage</li>
                </ul>
                <p
                  className="text-foreground/80 mb-4"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  Note: Disabling cookies may break some website features like theme preferences.
                </p>
                <div className="border-border/50 bg-card/30 rounded-lg border p-4">
                  <p
                    className="mb-3 font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-geist-sans)", fontSize: "16px" }}
                  >
                    Browser-Specific Instructions:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground/80 inline-flex items-center gap-1 text-foreground underline"
                        style={{ fontFamily: "var(--font-geist-mono)", fontSize: "14px" }}
                      >
                        Google Chrome <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground/80 inline-flex items-center gap-1 text-foreground underline"
                        style={{ fontFamily: "var(--font-geist-mono)", fontSize: "14px" }}
                      >
                        Mozilla Firefox <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground/80 inline-flex items-center gap-1 text-foreground underline"
                        style={{ fontFamily: "var(--font-geist-mono)", fontSize: "14px" }}
                      >
                        Safari <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground/80 inline-flex items-center gap-1 text-foreground underline"
                        style={{ fontFamily: "var(--font-geist-mono)", fontSize: "14px" }}
                      >
                        Microsoft Edge <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-card/50 border-border backdrop-blur-sm"
              style={{
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                    <Shield className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Do Not Track Signals
                  </h2>
                </div>
                <p
                  className="text-foreground/80"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  If your browser sends a "Do Not Track" signal, we respect it and limit tracking
                  where possible. However, there's no universal standard for DNT, so some analytics
                  may still function.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-card/50 border-border backdrop-blur-sm"
              style={{
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20">
                    <FileText className="h-5 w-5 text-orange-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Updates to This Policy
                  </h2>
                </div>
                <p
                  className="text-foreground/80"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  We may update this policy to reflect changes in how we use cookies. Material
                  changes will be posted here with an updated date.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-card/50 border-border backdrop-blur-sm"
              style={{
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20">
                    <Mail className="h-5 w-5 text-pink-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Contact Us
                  </h2>
                </div>
                <p
                  className="text-foreground/80 mb-4"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  For more information about our use of cookies and your options, please contact us
                  at:
                </p>
                <div
                  className="border-border/50 bg-card/30 text-foreground/90 rounded-lg border p-4"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.8",
                  }}
                >
                  <p>
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a
                      href="mailto:privacy@arcline.dev"
                      className="hover:text-foreground/80 text-foreground underline"
                    >
                      privacy@arcline.dev
                    </a>
                  </p>
                  <p className="mt-2">
                    <strong className="text-foreground">Website:</strong>{" "}
                    <a
                      href="https://arcline.dev"
                      className="hover:text-foreground/80 text-foreground underline"
                    >
                      arcline.dev
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
