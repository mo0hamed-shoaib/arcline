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

import { LegalCard } from "@/components/legal-card";
import {
  LegalHeading,
  LegalList,
  LegalMuted,
  LegalParagraph,
  LegalSubheading,
} from "@/components/legal-typography";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const dynamic = "force-static";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isBannerVisible={false} />

      <main className="pb-20 pt-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <Link
            href="/"
            className="mono-body mb-8 mt-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Go back to home page"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <div className="mb-12">
            <h1 className="section-head mb-4">Cookie Policy</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="mono-body text-xs md:text-sm">Last Updated: January 2025</span>
            </div>
          </div>

          <div className="space-y-6">
            <LegalCard>
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <Info className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <div>
                  <LegalHeading className="mb-2 text-xl transition-colors duration-300">
                    About This Policy
                  </LegalHeading>
                  <LegalParagraph>
                    This policy explains how we use cookies on our website. Read alongside our
                    Privacy Policy.
                  </LegalParagraph>
                </div>
              </div>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <Cookie className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>What Are Cookies?</LegalHeading>
              </div>
              <LegalParagraph>
                Cookies are small text files stored on your device when you visit websites. They
                help websites work properly and remember your preferences. Cookies can be
                "persistent" (stay until deleted) or "session" (deleted when you close your
                browser).
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/20">
                  <BarChart3 className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Types of Cookies We Use</LegalHeading>
              </div>
              <div className="space-y-6">
                <div>
                  <LegalSubheading className="mb-2">Essential Cookies</LegalSubheading>
                  <LegalParagraph className="mb-2">
                    Required for the website to function. Enable navigation, security, and
                    preference storage. Cannot be disabled.
                  </LegalParagraph>
                  <LegalMuted>Examples: authentication, session management, security</LegalMuted>
                </div>
                <div>
                  <LegalSubheading className="mb-2">Performance Cookies</LegalSubheading>
                  <LegalParagraph className="mb-2">
                    Help us understand site performance and visitor behavior. All data is aggregated
                    and anonymous.
                  </LegalParagraph>
                  <LegalMuted>Examples: Vercel Analytics, error tracking</LegalMuted>
                </div>
                <div>
                  <LegalSubheading className="mb-2">Functional Cookies</LegalSubheading>
                  <LegalParagraph className="mb-2">
                    Enable enhanced features like theme preferences and UI customization. Some
                    features may not work if disabled.
                  </LegalParagraph>
                  <LegalMuted>Examples: theme selection, UI preferences</LegalMuted>
                </div>
              </div>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <ExternalLink className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Third-Party Cookies</LegalHeading>
              </div>
              <LegalParagraph className="mb-4">
                We use trusted third-party services that may set cookies:
              </LegalParagraph>
              <LegalList className="list-inside list-disc space-y-2">
                <li>
                  <strong className="text-foreground">Analytics:</strong> Vercel Analytics for
                  understanding website usage
                </li>
                <li>
                  <strong className="text-foreground">Hosting:</strong> Vercel (our hosting
                  provider) may set cookies for performance
                </li>
              </LegalList>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <Database className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Local Storage and Similar Technologies</LegalHeading>
              </div>
              <LegalParagraph>
                We also use browser storage (localStorage, sessionStorage) to save preferences like
                theme settings. You can clear this through your browser settings, though some
                features may not work.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/20">
                  <Settings className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Managing Your Cookies</LegalHeading>
              </div>
              <LegalParagraph className="mb-4">
                You can manage cookies through your browser settings:
              </LegalParagraph>
              <LegalList className="mb-4 list-inside list-disc space-y-2">
                <li>Block or delete cookies in browser privacy settings</li>
                <li>Clear browsing data to remove stored cookies</li>
                <li>Use private/incognito mode to prevent cookie storage</li>
              </LegalList>
              <LegalParagraph className="mb-4">
                Note: Disabling cookies may break some website features like theme preferences.
              </LegalParagraph>
              <div className="border-border/50 bg-card/30 rounded-lg border p-4">
                <LegalParagraph className="mb-3 font-semibold text-foreground">
                  Browser-Specific Instructions:
                </LegalParagraph>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-body text-xs text-foreground underline transition-colors hover:text-foreground/80 md:text-sm inline-flex items-center gap-1"
                    >
                      Google Chrome <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-body text-xs text-foreground underline transition-colors hover:text-foreground/80 md:text-sm inline-flex items-center gap-1"
                    >
                      Mozilla Firefox <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-body text-xs text-foreground underline transition-colors hover:text-foreground/80 md:text-sm inline-flex items-center gap-1"
                    >
                      Safari <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-body text-xs text-foreground underline transition-colors hover:text-foreground/80 md:text-sm inline-flex items-center gap-1"
                    >
                      Microsoft Edge <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <Shield className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Do Not Track Signals</LegalHeading>
              </div>
              <LegalParagraph>
                If your browser sends a "Do Not Track" signal, we respect it and limit tracking
                where possible. However, there's no universal standard for DNT, so some analytics
                may still function.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <FileText className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Updates to This Policy</LegalHeading>
              </div>
              <LegalParagraph>
                We may update this policy to reflect changes in how we use cookies. Material changes
                will be posted here with an updated date.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/20">
                  <Mail className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Contact Us</LegalHeading>
              </div>
              <LegalParagraph className="mb-4">
                For more information about our use of cookies and your options, please contact us
                at:
              </LegalParagraph>
              <div className="border-border/50 bg-card/30 text-foreground/90 rounded-lg border p-4">
                <LegalParagraph className="mono-body text-foreground/90">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href="mailto:privacy@arcline.dev"
                    className="mono-body text-xs text-foreground underline transition-colors hover:text-foreground/80 md:text-sm"
                  >
                    privacy@arcline.dev
                  </a>
                </LegalParagraph>
                <LegalParagraph className="mono-body mt-2 text-foreground/90">
                  <strong className="text-foreground">Website:</strong>{" "}
                  <a
                    href="https://arcline.dev"
                    className="mono-body text-xs text-foreground underline transition-colors hover:text-foreground/80 md:text-sm"
                  >
                    arcline.dev
                  </a>
                </LegalParagraph>
              </div>
            </LegalCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
