## Arcline Refactor & Improvement Plan

This plan turns the findings in `improvements-report.md` into an actionable roadmap. It is organized by phases; each phase can be tackled independently, but they build on each other.

---

## Phase 1 – Short‑Term Cleanups (Low Risk, High Clarity)

- **1.1 Extract typography utility classes**
  - [x] Add classes in `globals.css` for common font usages:
    - [x] `.font-mono-ui` → `font-family: var(--font-geist-mono)`
    - [x] `.font-sans-ui` → `font-family: var(--font-geist-sans)`
    - [x] `.font-matrix` → `font-family: var(--font-matrix)`
  - [x] Replace inline `style={{ fontFamily: ... }}` in:
    - [x] `navbar.tsx` (logo text, byline, FEEDBACK buttons)
    - [x] `footer.tsx` (legal links and copyright)
    - [x] Any other sections using inline font-family for Geist or Matrix (none remaining)

- **1.2 Normalize button styling system**
  - [x] Document intended usage of button styles in `globals.css`:
    - [x] `.btn-cta` — primary CTAs (hero, CTA section, pricing “Book a Meeting”)
    - [x] `.btn-nav` — navbar text buttons (FEEDBACK)
    - [x] `.btn-icon` — navbar icon buttons (theme toggle)
  - [x] Ensure these classes are applied consistently:
    - [x] Hero “Get Started” button
    - [x] CTA “Contact Me” button
    - [x] Pricing “Book a Meeting” button
    - [x] Navbar FEEDBACK (desktop + mobile)
    - [x] Theme toggle (desktop + mobile)
  - [ ] Optionally, consider adding matching variants in `buttonVariants` (e.g. `cta`, `nav`, `navIcon`) for future use.

- **1.3 Clean up remaining class / CSS inconsistencies**
  - [x] Search for any remaining custom CSS-variable-based shadow utilities and convert them to the standardized `shadow-(--shadow-…)` token form.
  - [ ] Scan for leftover `background` vs `background-color` mismatches in custom button/nav styles and normalize where possible.
  - [ ] Introduce utility classes (instead of inline styles) for:
    - [x] Testimonials marquee fades (`--fade-gradient-left/right` → `.marquee-fade-left`, `.marquee-fade-right`)
    - [ ] Any repeated inline box-shadow / hover shadow definitions that can become tokens.

---

## Phase 2 – Content Extraction & Reuse

- **2.1 Extract structured content into `lib/content`**
  - [x] Create `lib/content/pricing.ts`:
    - [x] Move `pricingTiers` and `addOns` out of `pricing-section.tsx`.
    - [x] Export strongly-typed structures (e.g. `PricingTier`, `PRICING_TIERS`, `PRICING_ADDONS`).
  - [x] Create `lib/content/testimonials.ts`:
    - [x] Move `testimonials` data out of `client-testimonials-section.tsx`.
    - [x] Keep avatar initials and role/company fields structured.
  - [x] Create `lib/content/faq.ts`:
    - [x] Move `faqs` array out of `faq-section.tsx`.
    - [ ] Represent answers as strings or simple rich text structures instead of inline JSX where possible.
  - [x] Create `lib/content/custom-stack.ts`:
    - [x] Move `featureBands` (and related IDs + image URLs) out of `custom-stack-insights-section.tsx`.

- **2.2 Wire components to new content modules**
  - [x] Update `PricingSection` to import from `lib/content/pricing`.
  - [x] Update `ClientTestimonialsSection` to import from `lib/content/testimonials`.
  - [x] Update `FAQSection` to import from `lib/content/faq`.
  - [x] Update `CustomStackInsightsSection` to import from `lib/content/custom-stack`.

- **2.3 Tie JSON‑LD FAQ schema to shared content**
  - [ ] Refactor FAQ JSON‑LD in `app/layout.tsx` to consume `lib/content/faq`.
  - [ ] Guarantee that FAQ copy and structure stays in sync between:
    - [ ] JSON‑LD markup
    - [ ] On-page `FAQSection` rendering

---

## Phase 3 – Layout & Section Primitives

- **3.1 Introduce a `SectionShell` layout component**
  - [x] Create `components/layout/SectionShell.tsx` (or similar) that:
    - [x] Wraps sections with `py-12 md:py-16`.
    - [x] Constrains width with `mx-auto w-full max-w-[1296px]`.
    - [x] Accepts props like `id?`, `className?`, `children`.
  - [ ] Replace ad-hoc section wrappers in:
    - [x] `pricing-section.tsx`
    - [x] `client-testimonials-section.tsx`
    - [x] `faq-section.tsx`
    - [ ] `projects-in-motion-section.tsx`
    - [ ] `custom-stack-insights-section.tsx`
    - [ ] `cta-section.tsx`
    - [ ] Any new sections following the same pattern.

- **3.2 Introduce `SectionHeader` primitive**
  - [x] Create a `SectionHeader` component to render:
    - [x] Title (`section-head`)
    - [x] Subtitle (`section-subhead`)
    - [x] Optional alignment override (`text-center` vs `text-left`).
  - [ ] Replace section header blocks in:
    - [x] `pricing-section.tsx`
    - [x] `client-testimonials-section.tsx`
    - [x] `faq-section.tsx`
    - [ ] `projects-in-motion-section.tsx`
    - [ ] `custom-stack-insights-section.tsx`

- **3.3 Extract hero and navbar shells**
  - [x] Create `components/hero-section.tsx`:
    - [x] Move hero JSX (GridBackground, heading, subhead, CTA, services marquee) out of `app/page.tsx`.
    - [x] Keep props minimal (most content is static for now).
  - [x] Create `components/navbar-shell.tsx`:
    - [x] Wrap existing `Navbar` behavior including scroll tracking & theme toggle.
    - [x] Simplify `app/page.tsx` to render `<NavbarShell />` instead of inlining the fixed-position container.

- **3.4 Reusable CTA primitive**
  - [x] Create a `PrimaryCTA` component:
    - [x] Props: `href`, `label`, optional `variant` (e.g. hero vs secondary).
    - [x] Renders a `<Button asChild className="btn-cta">`.
  - [x] Use `PrimaryCTA` in:
    - [x] Hero “Get Started”
    - [x] CTA “Contact Me”
    - [x] Pricing “Book a Meeting`

---

## Phase 4 – Animation & Client/Server Split (Next.js 16 / React 19 Best Practices)

- **4.1 Create animation wrappers (“client islands”)**
  - [x] Create `components/animation/AnimatedSection.tsx`:
    - [x] Client component wrapping `AnimatedContent`.
    - [x] Props: `children`, plus a subset of `AnimatedContent` props (distance, direction, duration, ease, delay, etc.).
  - [ ] Optionally create `AnimatedListItem` for repeated list animations (e.g. pricing cards, feature bands).

- **4.2 Convert sections to server components**
  - [ ] Remove `"use client"` from:
    - [x] `pricing-section.tsx`
    - [x] `client-testimonials-section.tsx`
    - [x] `faq-section.tsx`
    - [x] `projects-in-motion-section.tsx`
    - [ ] `cta-section.tsx` (still a client component due to grid + CTA behavior)
    - [ ] `custom-stack-insights-section.tsx` (uses motion + viewport logic directly)
    - [ ] `footer.tsx` (tooltips and interactive icons keep it client-side for now)
  - [x] Wrap them with `AnimatedSection` from `app/page.tsx` (or their parent sections) instead of each section importing `AnimatedContent` directly.
  - [ ] Keep only the truly interactive components as client-only:
    - [ ] `NavbarShell` / `Navbar` (scroll, theme).
    - [ ] Theme toggler, drawers, tooltips (shadcn UI pieces requiring client).
    - [ ] Carousels and marquees.

- **4.3 Make `app/page.tsx` a server component again**
  - [x] Remove `"use client"` from `app/page.tsx`.
  - [x] Ensure all imported components are either:
    - [x] Server components, or
    - [x] Client components wrapped via explicit client boundaries (`NavbarShell`, `HeroSection`, `AnimatedSection`).

---

## Phase 5 – Hydration, Theme, and Motion Polishing

- **5.1 Reduce reliance on `suppressHydrationWarning`**
  - [ ] Audit where `suppressHydrationWarning` is used:
    - [x] `AnimatedContent` motion wrapper (removed; now deterministic).
    - [x] `FeatureMedia` zoom-focus motion wrapper in `custom-stack-insights-section.tsx` (removed; now deterministic).
    - [ ] `<html>` in `app/layout.tsx` (theme-class differences may still warrant it).
    - [x] Theme toggler buttons (kept for safety around theme class hydration).
    - [ ] Any other older usages.
  - [ ] For each usage:
    - [x] Verify whether initial server and client render are now deterministic for `AnimatedContent` and `FeatureMedia`.
    - [ ] Verify for remaining usages and remove where safe.
    - [x] Keep it where hydration differences are expected/acceptable (e.g. theme toggler, schema scripts, `<html>` theme class).

- **5.2 Validate theme behaviors**
  - [x] Confirm `--grid-color` behaves correctly in:
    - [x] Hero `GridBackground`.
    - [x] CTA `GridBackground`.
  - [x] Verify navbar, hero, CTA, pricing CTA buttons all have:
    - [x] Sufficient contrast in light and dark modes (foreground/background token pairing).
    - [x] No border disappearance on hover (borders are stable across hover states).

- **5.3 Motion tuning**
  - [x] Review nested `AnimatedContent` usage:
    - [x] Centralized section-level animation via `AnimatedSection` and removed unnecessary nested `AnimatedContent` (e.g. CTA, sections now mostly use one wrapper).
  - [x] Confirm `useReducedMotion` behavior:
    - [x] Verified that hero, custom stack, and other animated sections fall back to non-animated, fully readable layouts when reduced motion is preferred.

---

## Phase 6 – Performance & Routing Clarity

- **6.1 Explicit static / dynamic configuration**
  - [x] For static legal pages (`/privacy`, `/terms`, `/cookies`):
    - [x] Add `export const dynamic = "force-static";` or `export const revalidate = X;` to signal intent.
  - [ ] Ensure sitemap, manifest, and OpenGraph image endpoints are configured appropriately for static generation.

- **6.2 Bundle & runtime checks (optional but recommended)**
  - [ ] Run `next build` and inspect bundle analyzer (if enabled) to ensure:
    - [ ] Client bundles shrink after moving sections back to server components.
    - [ ] Heavy libraries (e.g. motion, Cloudinary logic) are only in client bundles where necessary.

---

## Phase 7 – Design System Documentation

- **7.1 Internal design tokens doc**
  - [ ] Extend or complement `vercel-design-language.md` with:
    - [ ] Button taxonomy (`btn-cta`, `btn-nav`, `btn-icon`, core `buttonVariants`).
    - [ ] Typography primitives (`hero-heading`, `section-head`, `section-subhead`, new font utility classes).
    - [ ] Layout primitives (`SectionShell`, `SectionHeader`, max width grid).
    - [ ] Background primitives (`GridBackground`, marquee fades).

- **7.2 Usage guidelines**
  - [ ] Add a short “how to add a new section” guideline:
    - [ ] Use `SectionShell` + `SectionHeader`.
    - [ ] Use `AnimatedSection` for scroll-in animation where needed.
    - [ ] Use content from `lib/content` instead of embedding raw arrays in components.

---

## Notes

- The phases are ordered to minimize risk:
  - Start with **pure refactors** (typography classes, content extraction, layout primitives).
  - Then move to **architectural changes** (server/client split, animation wrappers).
  - Finally, apply **polish and documentation** once the structure is stable.
- You can adjust the order depending on priorities (e.g. tackle server component migration earlier if bundle size is a primary concern).
