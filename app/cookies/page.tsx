import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
          <h1
            className="mb-8 text-4xl font-bold md:text-5xl"
            style={{
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Cookie Policy
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
                This Cookie Policy explains how Arcline uses cookies and similar tracking
                technologies on our website and in our services. It should be read alongside our
                Privacy Policy.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                What Are Cookies?
              </h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when
                you visit a website. They are widely used to make websites work more efficiently and
                to provide information to the website owners. Cookies allow websites to recognize
                your device and remember information about your visit, such as your preferred
                language and other settings.
              </p>
              <p className="mt-3">
                Cookies can be "persistent" (remain on your device until they expire or are deleted)
                or "session" cookies (deleted when you close your browser).
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Essential Cookies</h3>
                  <p>
                    These cookies are strictly necessary for the website to function properly. They
                    enable basic features like page navigation, access to secure areas, and remember
                    your preferences (like language settings). These cookies cannot be switched off
                    in our systems as they are required for core functionality.
                  </p>
                  <p className="mt-2 text-sm">
                    Examples: authentication cookies, session cookies, security cookies
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Performance Cookies</h3>
                  <p>
                    These cookies allow us to count visits and traffic sources so we can measure and
                    improve the performance of our site. They help us understand how visitors
                    interact with our website by providing information about areas visited, time
                    spent, and any issues encountered. All information these cookies collect is
                    aggregated and anonymous.
                  </p>
                  <p className="mt-2 text-sm">
                    Examples: Google Analytics, Vercel Analytics, error tracking
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Functional Cookies</h3>
                  <p>
                    These cookies enable enhanced functionality and personalization. They may be set
                    by us or by third-party providers whose services we have added to our pages.
                    Without these cookies, some features may become unavailable.
                  </p>
                  <p className="mt-2 text-sm">
                    Examples: theme preferences, UI customization, feature toggles
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
                Third-Party Cookies
              </h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to
                report usage statistics, deliver advertisements, and track user behavior. These are
                set by domains other than arcline.dev.
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>
                  <strong>Analytics Services:</strong> We use Google Analytics and Vercel Analytics
                  to understand website usage
                </li>
                <li>
                  <strong>Error Tracking:</strong> Services like Sentry help us identify and fix
                  technical issues
                </li>
                <li>
                  <strong>Content Delivery:</strong> CDNs may set cookies to optimize content
                  delivery
                </li>
              </ul>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Local Storage and Similar Technologies
              </h2>
              <p>
                In addition to cookies, we may use other storage technologies like local storage,
                session storage, and IndexedDB to store preferences and improve performance. These
                technologies work similarly to cookies but allow for storage of larger amounts of
                data.
              </p>
              <p className="mt-3">
                Like cookies, you can control these technologies through your browser settings,
                though disabling them may impact functionality.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Managing Your Cookies
              </h2>
              <p>You have several options for managing cookies:</p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to control cookies
                  through their settings preferences
                </li>
                <li>
                  <strong>Delete Cookies:</strong> You can delete all cookies that are already on
                  your device
                </li>
                <li>
                  <strong>Block Cookies:</strong> Most browsers will let you block cookies entirely,
                  though this may impact functionality
                </li>
                <li>
                  <strong>Opt-Out Tools:</strong> Some third-party services offer opt-out tools
                  (like Google Analytics)
                </li>
              </ul>
              <p className="mt-4">
                Note: If you disable or delete cookies, you may need to manually adjust some
                preferences every time you visit, and some features may not work as intended.
              </p>
              <div className="bg-card/50 mt-4 rounded-lg border border-border p-4">
                <p className="font-semibold text-foreground">Browser-Specific Instructions:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground/80 text-foreground underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground/80 text-foreground underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground/80 text-foreground underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground/80 text-foreground underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Do Not Track Signals
              </h2>
              <p>
                Some browsers have a "Do Not Track" feature that lets you tell websites you do not
                want to have your online activities tracked. Currently, there is no universal
                standard for interpreting DNT signals, but we respect your preferences and limit
                tracking where technically feasible.
              </p>
            </section>

            <section>
              <h2
                className="mb-4 text-2xl font-semibold text-foreground"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Updates to This Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology,
                cookies used, or legal requirements. We will notify you of any material changes by
                posting the updated policy on this page and updating the "Last Updated" date.
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
                For more information about our use of cookies and your options, please contact us
                at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@arcline.dev
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
