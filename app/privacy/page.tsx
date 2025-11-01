import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Database,
  FileText,
  Lock,
  Mail,
  Server,
  Shield,
  Users,
} from "lucide-react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy - Arcline",
  description: "Privacy policy for Arcline frontend development services",
};

export default function PrivacyPage() {
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
              Privacy Policy
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
                    <Shield className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h2
                      className="mb-2 text-xl font-semibold text-foreground"
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                      }}
                    >
                      Our Commitment
                    </h2>
                    <p
                      className="text-foreground/80"
                      style={{ fontFamily: "var(--font-geist-mono)", fontSize: "15px" }}
                    >
                      We protect your privacy. This policy explains how we handle your information
                      when you use our frontend development services. Your project data is yours and
                      kept confidential.
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
                    <Database className="h-5 w-5 text-orange-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3
                      className="mb-2 font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px" }}
                    >
                      Contact Information
                    </h3>
                    <p
                      className="text-foreground/80"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      We collect your email and name when you contact us about a project, used only
                      for communication and project delivery.
                    </p>
                  </div>
                  <div>
                    <h3
                      className="mb-2 font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px" }}
                    >
                      Project Data
                    </h3>
                    <p
                      className="text-foreground/80"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      Your project files and requirements are kept confidential. We only access what
                      is needed to build your website and never share your project with others.
                    </p>
                  </div>
                  <div>
                    <h3
                      className="mb-2 font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px" }}
                    >
                      Website Analytics
                    </h3>
                    <p
                      className="text-foreground/80"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      We use anonymized analytics to improve our website. No personal information is
                      collected through these tools.
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20">
                    <FileText className="h-5 w-5 text-pink-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    How We Use Your Information
                  </h2>
                </div>
                <ul
                  className="text-foreground/80 list-inside list-disc space-y-2"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>Communicate with you about your project</li>
                  <li>Build and deliver your website</li>
                  <li>Provide ongoing support and updates</li>
                  <li>Improve our development services</li>
                </ul>
                <p
                  className="border-border/50 bg-card/30 text-foreground/90 mt-4 rounded-lg border p-4"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  <strong className="text-foreground">Important:</strong> We never sell your data,
                  use it for advertising, or share your project information. Your data is yours.
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                    <Lock className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Data Security
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
                  We use encryption (TLS) for data in transit and secure hosting. We only keep data
                  necessary for your project and delete it when no longer needed. While we take
                  security seriously, no online system is 100% secure.
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
                    <Server className="h-5 w-5 text-orange-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Third-Party Services
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
                  We use trusted services like Vercel (hosting), Stripe (payments), and Supabase
                  (backend) to deliver your website. These providers have their own privacy policies
                  and we only share minimal data needed for service delivery.
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
                    <Users className="h-5 w-5 text-pink-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Your Rights
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
                  You have the right to access, correct, or delete your personal data. You can also
                  request a copy of your data or object to certain processing activities.
                </p>
                <p
                  className="text-foreground/80"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  To exercise these rights, contact us at privacy@arcline.dev. We'll respond within
                  30 days.
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                    <Shield className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h2
                    className="text-2xl font-semibold text-foreground"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Children's Privacy
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
                  Our services are not intended for users under 13. We don't knowingly collect
                  information from children.
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
                    Changes to This Policy
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
                  We may update this policy occasionally. Material changes will be posted here with
                  an updated date. Continued use of our services after changes constitutes
                  acceptance.
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
                  If you have questions about this Privacy Policy or our privacy practices, please
                  contact us at:
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
