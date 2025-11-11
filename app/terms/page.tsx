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

export default function TermsPage() {
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
            <h1 className="section-head mb-4">Terms of Service</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="mono-body text-xs md:text-sm">Last Updated: January 2025</span>
            </div>
          </div>

          <div className="space-y-6">
            <LegalCard>
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <FileText className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <div>
                  <LegalHeading className="mb-2 text-xl transition-colors duration-300">
                    Welcome to Arcline
                  </LegalHeading>
                  <LegalParagraph>
                    By using our frontend development services, you agree to these terms. Please
                    read them carefully.
                  </LegalParagraph>
                </div>
              </div>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/20">
                  <CheckCircle className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Acceptance of Terms</LegalHeading>
              </div>
              <LegalParagraph>
                By engaging our services, you agree to these terms and our Privacy Policy. This is a
                legally binding agreement between you and Arcline.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <Code className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Description of Service</LegalHeading>
              </div>
              <LegalParagraph>
                Arcline provides professional frontend development services, building modern
                websites using Next.js, TypeScript, Tailwind CSS, and shadcn/ui. We create custom
                websites including tourism sites, e-commerce platforms, portfolios, and business
                websites.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <User className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <LegalHeading>User Accounts and Eligibility</LegalHeading>
              </div>
              <LegalParagraph className="mb-4">When working with us, you agree to:</LegalParagraph>
              <LegalList className="list-inside list-disc space-y-2">
                <li>Provide accurate project requirements and information</li>
                <li>Respond to project inquiries in a timely manner</li>
                <li>Respect intellectual property rights</li>
                <li>Be at least 13 years old (or the age of majority in your jurisdiction)</li>
              </LegalList>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/20">
                  <Lock className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <LegalHeading>License and Restrictions</LegalHeading>
              </div>
              <LegalParagraph className="mb-4">You may not:</LegalParagraph>
              <LegalList className="list-inside list-disc space-y-2">
                <li>Use our services for illegal purposes</li>
                <li>Resell or redistribute work we create without permission</li>
                <li>Remove copyright or attribution notices from delivered work</li>
                <li>Request work that infringes on others' intellectual property</li>
              </LegalList>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <Shield className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Intellectual Property and Your Code</LegalHeading>
              </div>
              <LegalParagraph className="mb-4">
                Arcline retains rights to our development tools, processes, and methodologies.
              </LegalParagraph>
              <LegalParagraph className="border-border/50 bg-card/30 text-foreground/90 mt-4 rounded-lg border p-4">
                <strong className="text-foreground">Your Website:</strong> Upon final payment, you
                own the website we build for you, including all code, design, and content created
                specifically for your project.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <CreditCard className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Payment and Subscriptions</LegalHeading>
              </div>
              <LegalParagraph className="mb-4">Payment terms:</LegalParagraph>
              <LegalList className="list-inside list-disc space-y-2">
                <li>Project pricing is agreed upon before work begins</li>
                <li>Payment is typically split (deposit + milestone/final payments)</li>
                <li>Prices may change for future projects with advance notice</li>
                <li>Refunds are handled on a case-by-case basis</li>
              </LegalList>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/20">
                  <AlertTriangle className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Disclaimer of Warranties</LegalHeading>
              </div>
              <LegalParagraph>
                Our services are provided "as is." While we strive for quality, we can't guarantee
                perfection or uninterrupted service. We're not liable for third-party hosting or
                external dependencies.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <Scale className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Limitation of Liability</LegalHeading>
              </div>
              <LegalParagraph>
                Our liability is limited to the amount you paid for the specific project. We're not
                liable for indirect, consequential, or incidental damages arising from the use of
                delivered websites.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <Shield className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Indemnification</LegalHeading>
              </div>
              <LegalParagraph>
                You agree to hold Arcline harmless from any claims arising from your use of
                delivered websites or violation of these terms.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/20">
                  <Ban className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Termination</LegalHeading>
              </div>
              <LegalParagraph>
                Either party may terminate a project agreement with notice. We may terminate
                immediately for non-payment, illegal activity, or breach of terms. Upon termination,
                completed work is delivered as agreed. You can stop working with us at any time.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <FileText className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Changes to Terms</LegalHeading>
              </div>
              <LegalParagraph>
                We may update these terms occasionally. Material changes will be communicated. Your
                continued engagement with our services after changes constitutes acceptance.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <Gavel className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Governing Law and Disputes</LegalHeading>
              </div>
              <LegalParagraph>
                These terms are governed by the laws of our jurisdiction. Disputes will be resolved
                through good faith negotiation, and if needed, binding arbitration where permitted
                by law.
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
                If you have any questions about these Terms of Service, please contact us at:
              </LegalParagraph>
              <div className="border-border/50 bg-card/30 text-foreground/90 rounded-lg border p-4">
                <LegalParagraph className="mono-body text-foreground/90">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href="mailto:legal@arcline.dev"
                    className="mono-body text-xs text-foreground underline transition-colors hover:text-foreground/80 md:text-sm"
                  >
                    legal@arcline.dev
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
