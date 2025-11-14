I'll scan the main app, components, and lib directories for patterns, then summarize inconsistencies, refactors, and framework-best-practice suggestions in a structured report.

[3 tools called]

I’ll now scan a few representative files more deeply (page.tsx, layout.tsx, navbar, theme-provider, and a couple of UI primitives) to spot inconsistencies and best-practice opportunities, then I’ll synthesize a full report with concrete suggestions.

[11 tools called]

## High-level overview

From the files I inspected (`app/layout.tsx`, `app/page.tsx`, all major sections, `navbar.tsx`, `theme-provider.tsx`, `AnimatedContent.tsx`, `GridBackground.tsx`, UI primitives, and `globals.css`), the codebase is already in good shape: consistent design tokens, strong typography system, and a clear layout grid.

Below are concrete observations and recommendations, grouped by theme.

---

## Architecture & Next.js 16 / React 19 alignment

### 1. Server vs client components

- **Current state**:
  - `app/page.tsx` is a full **client** component (`"use client"`).
  - Almost all sections (`cta-section`, `pricing-section`, `client-testimonials-section`, `faq-section`, `custom-stack-insights-section`, `projects-in-motion-section`, `footer`, `navbar`) are also client components because they import `AnimatedContent`, `motion/react`, or theme hooks.

- **Why this matters**:
  - Next 16 / React 19 best practice is: **server components by default**, with **small, focused client “islands”** for interactivity and animation.
  - Fully-client pages reduce SSR benefits (TTFB, streaming, SEO friendliness for dynamic content) and increase JS payload.

- **Recommended refactor** (medium effort, big architectural win):
  - **Keep `app/page.tsx` as a server component** and push client boundaries down:
    - Extract a `HeroShell` client component that wraps just the animated hero (uses `AnimatedContent`, `GridBackground`, `Button`).
    - Extract `NavbarShell` client component (scroll handling + theme toggler).
    - For sections like `PricingSection`, `ClientTestimonialsSection`, `FAQSection`, `CustomStackInsightsSection`:
      - Make them **server components** and move animation into small client wrappers:
        - Example: create `AnimatedSection` client wrapper that accepts `children` and animation props.
        - Use it in `page.tsx` like:
          - ` <AnimatedSection><PricingSection /></AnimatedSection>`
      - This lets the **content** be server-rendered while **animation** stays in client leaf components.
  - **Keep `ThemeProvider` and `MotionConfig` in `layout.tsx` as they are** — this is aligned with best practice.

### 2. Hydration & theme consistency

You’ve already fixed the big hydration issues; current patterns are mostly correct:

- `AnimatedContent`:
  - Uses `useReducedMotion` safely with a `mounted` guard and consistent initial values.
  - Exposes `animateOnMount` for the hero services marquee — good, and still SSR-safe.
- `GridBackground`:
  - Now relies on `--grid-color` CSS variable instead of JS theme detection.
  - No more flash / brightness jump on initial load.

**Recommendations**:

- **Minimize `suppressHydrationWarning` usage over time**:
  - You currently use it in:
    - `RootLayout` `<html>` (to tolerate theme toggling).
    - `AnimatedContent` motion wrapper.
    - Possibly other legacy spots.
  - Now that `GridBackground` and `AnimatedContent` are deterministic on first render, you can gradually test removing individual `suppressHydrationWarning` usages. Keep them only where you still truly need them (e.g. JSON-LD script tags are fine).

---

## Component-level observations

### 3. `app/layout.tsx`

- **Strengths**:
  - Excellent `metadata` configuration (OpenGraph, Twitter, robots, canonical URL).
  - JSON-LD for WebSite and FAQ is properly embedded, using `dangerouslySetInnerHTML` with `JSON.stringify` — correct pattern.
  - Fonts preloaded correctly; `MotionConfig` with `reducedMotion="user"` is ideal for accessibility.

- **Improvements**:
  - **JSON-LD maintenance**:
    - FAQ JSON-LD duplicates the content that also lives in `FAQSection`.
    - Consider extracting FAQ content into a small `faqContent` array in a shared module (e.g. `lib/content/faq.ts`) and use it in both the React section and JSON-LD to avoid “content drift”.
  - **Typings**:
    - `RootLayout` uses inline `{ children: React.ReactNode }`; you could adopt the Next pattern:
      - `interface RootLayoutProps { children: React.ReactNode }`
      - `export default function RootLayout({ children }: RootLayoutProps) { ... }`
    - Not critical, but improves readability.

### 4. `app/page.tsx` (Hero + main flow)

- **Strengths**:
  - Hero structure is clear and visually strong: heading, subhead, primary CTA, services marquee at hero bottom.
  - Width & padding consistent with `max-w-[1296px]` across sections.
  - Grid background now theme-aware via CSS vars — very good.

- **Potential refactors**:
  - **Extract `HeroSection` component**:
    - Move the hero JSX (with `GridBackground`, heading, CTA, services marquee) into `components/hero-section.tsx`.
    - This improves page readability; `Home` becomes a neat list:
      - `<NavbarShell />`
      - `<HeroSection />`
      - `<CustomStackInsightsSection />`, etc.
  - **Content constants**:
    - Services array `["Tourism", "E-commerce", "Portfolios", "AI & Automation"]` is currently inline.
    - You could define `const SERVICES = [...]` in a small `content/home.ts` so any reuse (SEO copy, schema, etc.) stays in sync.

### 5. `Navbar`

- **Strengths**:
  - Scroll-aware styling is implemented with throttled `handleScroll` and passive listener — good.
  - Theme-aware logo swap guarded by `mounted`, preventing hydration errors.
  - Minimal button style for nav actions (`btn-nav`, `btn-icon`) is consistent.

- **Improvements**:
  - **Inline styles for typography**:
    - You repeatedly specify typography via inline `style` using `typography.brand.logo` / `typography.brand.byline` and `fontFamily`.
    - Consider turning those into reusable classes in `globals.css` (e.g. `.logo-text`, `.logo-byline`) that refer back to `--font-geist-sans`, `--font-matrix`, etc. You already use `.logo-text` but still override `style` — this can be reduced.
  - **Button text styles**:
    - The `FEEDBACK` buttons (desktop + mobile) use the same inline `style` object (font-family, size, weight, tracking). This should be a reusable class:
      - e.g. `.btn-label-nav` defined in CSS and reused in both places.
  - **`mounted` state**:
    - You set `mounted` just for the logo. That’s fine, but in React 19 patterns, you could also consider:
      - Passing `resolvedTheme` down from a central theme context, or
      - Using a tiny skeleton logo (which you do with `<div className="mr-3 h-7 w-7" />`) — that’s already good UX.

### 6. Sections (`CTASection`, `PricingSection`, `ClientTestimonialsSection`, `FAQSection`, `CustomStackInsightsSection`, `ProjectsInMotionSection`)

Common patterns:

- All:
  - `max-w-[1296px]`, no inner horizontal padding on section wrapper (except where needed for readability, like FAQ inner container).
  - Use `AnimatedContent` for scroll-in animation.
  - Buttons now consistently use `.btn-cta`.

- **Refactor opportunities**:
  - **Shared section shell**:
    - Many sections share this pattern:
      - `py-12 md:py-16`
      - Wrapper: `mx-auto w-full max-w-[1296px]`
      - Header: `section-head`, `section-subhead`
    - You could introduce a small `SectionShell` component:
      - Props: `id?`, `title`, `subtitle`, `children`, `animate?` (forwarded to `AnimatedContent`).
      - This reduces repetition and makes it easier to adjust global spacing later.

  - **Animation configuration**:
    - `AnimatedContent` calls are similar across sections (`direction="vertical"`, `distance ~ 40–50`, `ease="power3.out"`, etc.).
    - Consider defining a few **named presets**:
      - `const SECTION_ANIM = { direction: "vertical", distance: 50, duration: 0.8, ease: "power3.out" }`.
      - Then use `<AnimatedContent {...SECTION_ANIM}>` so any global tuning is centralized.

  - **Pure content vs component logic**:
    - `pricingTiers`, `addOns`, `testimonials`, `faqs` are all defined inside their respective components.
    - For future reuse (emails, documentation, or CMS integration), consider:
      - Move these to `/lib/content/*.ts` modules:
        - `lib/content/pricing.ts`, `lib/content/testimonials.ts`, `lib/content/faq.ts`.
      - Components then become pure renderers of these data structures.

  - **Client vs server**:
    - As mentioned above, these sections are currently `"use client"` solely because they import `AnimatedContent`.
    - Long-term: if you want maximum alignment with Next 16, extract animation into client wrappers and convert sections to server components.

---

## Styling, CSS & Tailwind

### 7. Global styles (`globals.css`)

- **Strengths**:
  - Theme tokens (`--background`, `--foreground`, `--grid-color`, gauge colors, accent variants, etc.) are well-structured.
  - Utility classes like `.hover-lift`, `.hero-heading`, `.section-head`, `.section-subhead`, `.btn-cta`, `.btn-nav`, `.btn-icon` centralize styling well.

- **Improvements / cleanups**:
  - **Dead or inconsistent properties**:
    - You had earlier linter warnings about using raw CSS variable-based shadow utilities; now you’re using the `shadow-(--shadow-*)` token pattern, which is good.
    - Scan for any remaining ad-hoc shadow utilities based on CSS variables and convert them to the standardized `shadow-(--token)` form for consistency (linter already hints this in one spot in `page.tsx`).

  - **Button ecosystem**:
    - You now have:
      - `buttonVariants` (`default`, `secondary`, `ghost`, etc.) in `components/ui/button.tsx`.
      - Custom classes: `.btn-cta`, `.btn-nav`, `.btn-icon`.
    - This is fine, but for long-term cleanliness:
      - Consider expressing `.btn-cta`, `.btn-nav`, `.btn-icon` as extensions of `buttonVariants` (e.g. add `variant="cta"` / `variant="nav"` / `variant="iconNav"`), or
      - Keep them as CSS classes but document their intended usage (CTA, navbar text, navbar icon) in a short comment block near their definitions.

  - **Inline typography styles**:
    - Many `style={{ fontFamily: "var(--font-geist-mono)" }}` or `"var(--font-geist-sans)"` occur (footer, navbar, pricing button text).
    - These should ideally be classes:
      - e.g. `.font-mono-ui`, `.font-sans-ui`, `.font-matrix`.
      - Then you can use them consistently and avoid inline styles.

### 8. Grid background & fades

- **GridBackground**:
  - Now purely declarative, uses `var(--grid-color)` and respects `gridSize` and `fadeIntensity`.
  - No JS theme detection, no flicker — ideal.

- **Fade overlays in testimonials**:
  - Fades use `style={{ background: "var(--fade-gradient-left)" }}` and right variant.
  - It might be nicer to define these as utility classes:
    - `.marquee-fade-left`, `.marquee-fade-right` in `globals.css`.
  - This avoids inline `style` and keeps all color/gradient logic in CSS.

---

## Accessibility & UX

- **Positives**:
  - `aria-label` on buttons (theme toggler, menu button).
  - Tooltip triggers use `asChild` and have `aria-label` on icons.
  - `sr-only` text for icons (e.g. “Included” in pricing features).
  - `MotionConfig` with `reducedMotion="user"`, plus `useReducedMotion` in animated components.

- **Potential improvements**:
  - **Keyboard focus in marquee areas**:
    - The services marquee and testimonial marquees are mostly `pointer-events: none` surfaces, which is good for pointer noise.
    - Ensure interactive children (if you ever add them) remain focusable. Currently they are just text, so this is fine.
  - **Hero CTA semantics**:
    - The primary CTA is an `<a>` inside a `Button` with `asChild`. That’s correct.
    - Double-check that color contrast in light theme meets WCAG (the new `.btn-cta` uses foreground/background; your tokens likely already ensure this).

---

## Performance

- **Already good**:
  - Removal of `Grain` in favor of `GridBackground` (CSS-only, very cheap).
  - Viewport-based animation (`whileInView`) in most sections, so offscreen content isn’t animated.
  - Global MotionConfig and use of `reducedMotion` ensure you’re not over-animating.

- **Further performance opportunities**:
  - **Code splitting / RSC** (ties back to architecture):
    - Moving content-heavy sections to server components and keeping animation as leaf client wrappers will:
      - Reduce client JS bundle size.
      - Enable better streaming for long sections like `FAQSection` and `CustomStackInsightsSection`.

  - **Avoid over-nesting `AnimatedContent`**:
    - Some sections (CTA, hero) nest `AnimatedContent` several times.
    - That’s fine visually, but you may consider:
      - Using one parent `AnimatedContent` for the section and subtle, cheaper CSS transitions for inner elements when possible.

  - **Revalidate / caching**:
    - Static content pages (`/privacy`, `/terms`, `/cookies`) likely can use `export const dynamic = "force-static"` or `revalidate` configs if not already set, to make intent explicit.
    - Not strictly necessary, but nice clarity for Next 16.

---

## Modularity & “clean code” opportunities

### 9. Content extraction

- **Move structured data out of components**:
  - `pricingTiers`, `addOns`, `testimonials`, `faqs`, `featureBands` in `CustomStackInsightsSection` are all excellent candidates for `lib/content/*`.
  - Benefits:
    - Easier to test.
    - Easier to feed into JSON-LD or an eventual CMS.
    - Cleaner component code: components become purely presentational.

### 10. Reusable layout primitives

- **Create tiny primitives**:
  - `SectionShell` (padding, max-width, optional animated header).
  - `SectionHeader` (title + subtitle).
  - `PrimaryCTA` (Get Started / Contact Me / Book a Meeting) with props for label and href.
  - `SocialIconLink` for the footer social icons (GitHub, LinkedIn, X, portfolio) — same pattern repeated four times.

These small primitives keep the code DRY and make future changes (typography, spacing, colors) much safer.

---

## Summary of suggested roadmap

If you want a practical sequence of improvements:

1. **Short-term (low risk, quick wins)**
   - Extract repeated inline font styles into utility classes.
   - Create `SectionShell` / `SectionHeader` to DRY up sections.
   - Extract `pricingTiers`, `testimonials`, `faqs` into `lib/content`.

2. **Medium-term (architectural alignment)**
   - Introduce small client wrappers for animations (`AnimatedSection`, `AnimatedListItem`).
   - Convert `PricingSection`, `FAQSection`, `ClientTestimonialsSection`, and possibly `CustomStackInsightsSection` into **server components**.
   - Consider extracting `HeroSection` and `NavbarShell` to keep `app/page.tsx` clean.

3. **Long-term / polish**
   - Gradually remove `suppressHydrationWarning` where no longer needed.
   - Add explicit `dynamic` / `revalidate` settings where appropriate for content pages.
   - Document your design system primitives (`btn-*`, typography classes, grid/fade utilities) in a short internal “design tokens” note so future changes stay consistent.

If you’d like, I can start by implementing one of these (for example: extracting `SectionShell` and moving `pricingTiers`/`faqs` into `lib/content`) so you can see how it looks in practice.
