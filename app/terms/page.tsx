import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Terms of Service - Arcline",
  description: "Terms of service for Arcline frontend development services",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isBannerVisible={false} />

      <main className="pb-20 pt-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <Link
            href="/"
            className="mb-8 mt-8 inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
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
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Terms of Service
          </h1>

          <div className="space-y-8 text-white/80">
            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Last Updated: January 2025
              </h2>
              <p>
                Welcome to Arcline. By accessing and using our service, you accept and agree to be
                bound by the terms and provisions of this agreement. Please read these terms
                carefully. If you do not agree to abide by these terms, please do not use this
                service.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Acceptance of Terms
              </h2>
              <p>
                By creating an account, downloading, installing, or using Arcline's AI Version
                Control software, you acknowledge that you have read, understood, and agree to be
                bound by these Terms of Service and our Privacy Policy. These terms constitute a
                legally binding agreement between you and Arcline.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Description of Service
              </h2>
              <p>
                Arcline provides AI Version Control software that allows users to save, preview, and
                restore code versions. The service includes local storage of code snapshots,
                optional cloud backup, and AI-powered search across version history. Arcline works
                as an extension or integration with various IDEs including but not limited to
                Cursor, Windsurf, VS Code, Claude Code, and OpenAI Codex.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                User Accounts and Eligibility
              </h2>
              <div className="space-y-3">
                <p>To use certain features of Arcline, you must create an account. You agree to:</p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be at least 13 years old (or the age of majority in your jurisdiction)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                License and Restrictions
              </h2>
              <p>
                Subject to your compliance with these terms, Arcline grants you a limited,
                non-exclusive, non-transferable, revocable license to use our software. You may not:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>Modify, copy, or create derivative works of the software</li>
                <li>Reverse engineer, decompile, or disassemble the software</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Rent, lease, sublicense, or sell the software</li>
                <li>Use the service for illegal activities or in violation of any laws</li>
                <li>Interfere with or disrupt the integrity or performance of the service</li>
                <li>Attempt to gain unauthorized access to the service or related systems</li>
              </ul>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Intellectual Property and Your Code
              </h2>
              <p>
                All intellectual property rights in Arcline's software and service remain the
                exclusive property of Arcline. This includes, but is not limited to, copyrights,
                trademarks, trade secrets, patents, and other intellectual property rights.
              </p>
              <p className="mt-3">
                <strong>Your Code:</strong> You retain all ownership rights to your code. Arcline
                does not claim any ownership rights in your code content. Your code snapshots are
                stored according to your preferences and settings.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Payment and Subscriptions
              </h2>
              <p>Arcline offers free and paid subscription plans. For paid plans:</p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>Subscription fees are billed in advance on a recurring basis</li>
                <li>Prices are subject to change with 30 days' notice</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>You may cancel your subscription at any time</li>
                <li>Service will continue until the end of the billing period</li>
              </ul>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Disclaimer of Warranties
              </h2>
              <p>
                Arcline is provided on an "as is" and "as available" basis. To the maximum extent
                permitted by law, Arcline disclaims all warranties, express or implied, including
                but not limited to:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties of non-infringement or quiet enjoyment</li>
                <li>Warranties that the service will be uninterrupted, secure, or error-free</li>
                <li>Warranties regarding the accuracy or reliability of AI-generated content</li>
              </ul>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Arcline shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including but not
                limited to:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Cost of substitute goods or services</li>
                <li>Damage to reputation or goodwill</li>
                <li>Business interruption</li>
              </ul>
              <p className="mt-3">
                In no event shall Arcline's total liability exceed the amount you paid for the
                service in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Arcline from any claims, damages,
                losses, liabilities, and expenses (including legal fees) arising out of or related
                to your use of the service, violation of these terms, or infringement of any rights
                of another party.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Termination
              </h2>
              <p>
                We may terminate or suspend your account and access to the service immediately,
                without prior notice, for any reason including:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>Breach of these Terms of Service</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees (for paid plans)</li>
                <li>Extended periods of inactivity</li>
              </ul>
              <p className="mt-3">
                You may terminate your account at any time by contacting support or using the
                account deletion feature. Upon termination, we may delete your data in accordance
                with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify
                users of material changes via email or through the service. Your continued use of
                Arcline after changes become effective constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Governing Law and Disputes
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                jurisdiction in which Arcline operates, without regard to conflict of law
                provisions. Any disputes arising out of or relating to these terms or the service
                shall be resolved through binding arbitration, except where prohibited by law.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-white"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Contact Us
              </h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <p className="mt-2">
                <strong>Email:</strong> legal@arcline.dev
                <br />
                <strong>Website:</strong>{" "}
                <a href="https://arcline.dev" className="text-white underline hover:text-white/80">
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
