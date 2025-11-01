import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
          <h1
            className="mb-8 text-4xl font-bold md:text-5xl"
            style={{
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            Privacy Policy
          </h1>

          <div className="text-foreground/80 space-y-8">
            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Last Updated: January 2025
              </h2>
              <p>
                At Arcline, we are committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use
                our frontend development services. Your data and project information is yours and is
                handled with complete confidentiality.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Account Information</h3>
                  <p>
                    When you create an account, we collect basic information like your email address
                    and username. This is used solely for account management and service delivery.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Usage Data</h3>
                  <p>
                    We collect anonymized analytics to understand how our service is used and where
                    we can improve. This includes aggregate statistics on features used, performance
                    metrics, and crash reports.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Project Information</h3>
                  <p>
                    All project files and information are kept strictly confidential. We only access
                    what is necessary to provide development services and never share or use your
                    projects for any other purpose.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                How We Use Your Information
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>Provide, maintain, and improve Arcline services</li>
                <li>Process transactions and manage your account</li>
                <li>Send important service updates and notifications</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Analyze aggregate usage patterns to improve our services</li>
              </ul>
              <p className="mt-4">
                We do not use your information to train AI models, sell to third parties, or display
                targeted advertising. Your project data stays yours.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Data Security
              </h2>
              <p>We implement industry-standard security measures to protect your information:</p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>End-to-end encryption for all data in transit (TLS 1.2+)</li>
                <li>Encryption at rest for cloud-stored data</li>
                <li>Zero-knowledge architecture where technically possible</li>
                <li>Regular security audits and penetration testing</li>
                <li>Minimal data retention and we only keep what's necessary</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet is completely secure. We
                encourage you to use strong, unique passwords and keep your credentials
                confidential.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Third-Party Services
              </h2>
              <p>
                Arcline may integrate with third-party services for analytics, error tracking, and
                payment processing. These services have their own privacy policies:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>We use Vercel Analytics for aggregate usage statistics</li>
                <li>Payment processing via Stripe (PCI DSS compliant)</li>
                <li>Supabase for backend services and database</li>
                <li>Secure hosting and deployment platforms</li>
              </ul>
              <p className="mt-4">
                We only share minimal, anonymized data necessary for these services to function.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Your Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal
                data:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>
                  <strong>Access:</strong> Request copies of your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal data
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain processing activities
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@arcline.dev. We will respond
                to your request within 30 days.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Children's Privacy
              </h2>
              <p>
                Arcline is not intended for users under the age of 13. We do not knowingly collect
                personal information from children. If you believe we have collected information
                from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                material changes by posting the new policy on this page and updating the "Last
                Updated" date. Your continued use of Arcline after changes are posted constitutes
                acceptance of the new policy.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please
                contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@arcline.dev
                <br />
                <strong>Mailing Address:</strong> Arcline Privacy Team
                <br />
                <strong>Website:</strong>{" "}
                <a
                  href="https://arcline.dev"
                  className="hover:text-foreground/80 text-foreground underline"
                >
                  arcline.dev
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
