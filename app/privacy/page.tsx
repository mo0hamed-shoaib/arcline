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

export default function PrivacyPage() {
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
            <h1 className="section-head mb-4">
              Privacy Policy
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="mono-body text-xs md:text-sm">
                Last Updated: January 2025
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <LegalCard>
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <Shield className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <div>
                  <LegalHeading className="mb-2 text-xl">Our Commitment</LegalHeading>
                  <LegalParagraph>
                    We protect your privacy. This policy explains how we handle your information when you use our
                    frontend development services. Your project data is yours and kept confidential.
                  </LegalParagraph>
                </div>
              </div>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <Database className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Information We Collect</LegalHeading>
              </div>
              <div className="space-y-4">
                <div>
                  <LegalSubheading className="mb-2">Contact Information</LegalSubheading>
                  <LegalParagraph>
                    We collect your email and name when you contact us about a project, used only for communication and
                    project delivery.
                  </LegalParagraph>
                </div>
                <div>
                  <LegalSubheading className="mb-2">Project Data</LegalSubheading>
                  <LegalParagraph>
                    Your project files and requirements are kept confidential. We only access what is needed to build
                    your website and never share your project with others.
                  </LegalParagraph>
                </div>
                <div>
                  <LegalSubheading className="mb-2">Website Analytics</LegalSubheading>
                  <LegalParagraph>
                    We use anonymized analytics to improve our website. No personal information is collected through
                    these tools.
                  </LegalParagraph>
                </div>
              </div>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/20">
                  <FileText className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <LegalHeading>How We Use Your Information</LegalHeading>
              </div>
              <LegalList className="list-disc">
                <li>Communicate with you about your project</li>
                <li>Build and deliver your website</li>
                <li>Provide ongoing support and updates</li>
                <li>Improve our development services</li>
              </LegalList>
              <LegalParagraph className="border-border/50 bg-card/30 text-foreground/90 mt-4 rounded-lg border p-4 md:text-[15px]">
                <strong className="text-foreground">Important:</strong> We never sell your data, use
                it for advertising, or share your project information. Your data is yours.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <Lock className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Data Security</LegalHeading>
              </div>
              <LegalParagraph>
                We use encryption (TLS) for data in transit and secure hosting. We only keep data necessary for your
                project and delete it when no longer needed. While we take security seriously, no online system is 100%
                secure.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <Server className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Third-Party Services</LegalHeading>
              </div>
              <LegalParagraph>
                We use trusted services like Vercel (hosting), Stripe (payments), and Supabase (backend) to deliver your
                website. These providers have their own privacy policies and we only share minimal data needed for
                service delivery.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/20">
                  <Users className="h-5 w-5 text-pink-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Your Rights</LegalHeading>
              </div>
              <LegalParagraph className="mb-4">
                You have the right to access, correct, or delete your personal data. You can also request a copy of your
                data or object to certain processing activities.
              </LegalParagraph>
              <LegalParagraph>
                To exercise these rights, contact us at privacy@arcline.dev. We'll respond within 30 days.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-600/20">
                  <Shield className="h-5 w-5 text-cyan-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Children&apos;s Privacy</LegalHeading>
              </div>
              <LegalParagraph>
                Our services are not intended for users under 13. We don't knowingly collect information from children.
              </LegalParagraph>
            </LegalCard>

            <LegalCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/20">
                  <FileText className="h-5 w-5 text-orange-400 transition-colors duration-300" />
                </div>
                <LegalHeading>Changes to This Policy</LegalHeading>
              </div>
              <LegalParagraph>
                We may update this policy occasionally. Material changes will be posted here with an updated date.
                Continued use of our services after changes constitutes acceptance.
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
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </LegalParagraph>
              <div className="border-border/50 bg-card/30 text-foreground/90 rounded-lg border p-4">
                <LegalParagraph className="mono-body text-foreground/90">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href="mailto:privacy@arcline.dev"
                    className="hover:text-foreground/80 text-foreground underline"
                  >
                    privacy@arcline.dev
                  </a>
                </LegalParagraph>
                <LegalParagraph className="mono-body mt-2 text-foreground/90">
                  <strong className="text-foreground">Website:</strong>{" "}
                  <a
                    href="https://arcline.dev"
                    className="hover:text-foreground/80 text-foreground underline"
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
