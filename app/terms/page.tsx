"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Ban,
  Calendar,
  CheckCircle,
  Code,
  CreditCard,
  FileText,
  Gavel,
  Lock,
  Mail,
  Scale,
  Shield,
  User,
} from "lucide-react";

import Footer from "@/components/footer";
import { LegalCard } from "@/components/legal-card";
import Navbar from "@/components/navbar";

export default function TermsPage() {
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
              Terms of Service
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
            <LegalCard>
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                  <FileText className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <div>
                  <h2
                    className="mb-2 text-xl font-semibold text-foreground transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    Welcome to Arcline
                  </h2>
                  <p
                    className="text-foreground/80"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "15px",
                      lineHeight: "1.6",
                    }}
                  >
                    By using our frontend development services, you agree to these terms. Please
                    read them carefully.
                  </p>
                </div>
              </div>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20">
                  <CheckCircle className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Acceptance of Terms
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
                By engaging our services, you agree to these terms and our Privacy Policy. This is a
                legally binding agreement between you and Arcline.
              </p>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20">
                  <Code className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Description of Service
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
                Arcline provides professional frontend development services, building modern
                websites using Next.js, TypeScript, Tailwind CSS, and shadcn/ui. We create custom
                websites including tourism sites, e-commerce platforms, portfolios, and business
                websites.
              </p>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                  <User className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  User Accounts and Eligibility
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
                When working with us, you agree to:
              </p>
              <ul
                className="text-foreground/80 list-inside list-disc space-y-2"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "15px",
                  lineHeight: "1.8",
                }}
              >
                <li>Provide accurate project requirements and information</li>
                <li>Respond to project inquiries in a timely manner</li>
                <li>Respect intellectual property rights</li>
                <li>Be at least 13 years old (or the age of majority in your jurisdiction)</li>
              </ul>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20">
                  <Lock className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  License and Restrictions
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
                You may not:
              </p>
              <ul
                className="text-foreground/80 list-inside list-disc space-y-2"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "15px",
                  lineHeight: "1.8",
                }}
              >
                <li>Use our services for illegal purposes</li>
                <li>Resell or redistribute work we create without permission</li>
                <li>Remove copyright or attribution notices from delivered work</li>
                <li>Request work that infringes on others' intellectual property</li>
              </ul>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20">
                  <Shield className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Intellectual Property and Your Code
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
                Arcline retains rights to our development tools, processes, and methodologies.
              </p>
              <p
                className="border-border/50 bg-card/30 text-foreground/90 mt-4 rounded-lg border p-4"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                <strong className="text-foreground">Your Website:</strong> Upon final payment, you
                own the website we build for you, including all code, design, and content created
                specifically for your project.
              </p>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                  <CreditCard className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Payment and Subscriptions
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
                Payment terms:
              </p>
              <ul
                className="text-foreground/80 list-inside list-disc space-y-2"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "15px",
                  lineHeight: "1.8",
                }}
              >
                <li>Project pricing is agreed upon before work begins</li>
                <li>Payment is typically split (deposit + milestone/final payments)</li>
                <li>Prices may change for future projects with advance notice</li>
                <li>Refunds are handled on a case-by-case basis</li>
              </ul>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20">
                  <AlertTriangle className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Disclaimer of Warranties
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
                Our services are provided "as is." While we strive for quality, we can't guarantee
                perfection or uninterrupted service. We're not liable for third-party hosting or
                external dependencies.
              </p>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20">
                  <Scale className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Limitation of Liability
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
                Our liability is limited to the amount you paid for the specific project. We're not
                liable for indirect, consequential, or incidental damages arising from the use of
                delivered websites.
              </p>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                  <Shield className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Indemnification
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
                You agree to hold Arcline harmless from any claims arising from your use of
                delivered websites or violation of these terms.
              </p>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20">
                  <Ban className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Termination
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
                Either party may terminate a project agreement with notice. We may terminate
                immediately for non-payment, illegal activity, or breach of terms. Upon termination,
                completed work is delivered as agreed. You can stop working with us at any time.
              </p>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20">
                  <FileText className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Changes to Terms
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
                We may update these terms occasionally. Material changes will be communicated. Your
                continued engagement with our services after changes constitutes acceptance.
              </p>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                  <Gavel className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Governing Law and Disputes
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
                These terms are governed by the laws of our jurisdiction. Disputes will be resolved
                through good faith negotiation, and if needed, binding arbitration where permitted
                by law.
              </p>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20">
                  <Mail className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <h2
                  className="text-2xl font-semibold text-foreground transition-colors duration-300"
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
                If you have any questions about these Terms of Service, please contact us at:
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
                    href="mailto:legal@arcline.dev"
                    className="hover:text-foreground/80 text-foreground underline"
                  >
                    legal@arcline.dev
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
            </LegalCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
