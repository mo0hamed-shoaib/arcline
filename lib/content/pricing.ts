export type PricingTier = {
  name: string;
  headline: string;
  price: string;
  currency: string;
  subheading: string;
  features: readonly string[];
};

export const PRICING_TIERS: ReadonlyArray<PricingTier> = [
  {
    name: "Website Launch",
    headline:
      "A polished marketing site with thoughtful copy, performance, and multilingual support.",
    price: "18,000",
    currency: "EGP",
    subheading: "Ideal for hospitality, local businesses, creatives, and early-stage brands.",
    features: [
      "Strategy workshop and page flow tailored to your offer",
      "SEO groundwork: semantic HTML, sitemaps, metadata, and schema",
      "Responsive layouts tuned for mobile-first browsing",
      "Image delivery handled through Cloudinary (or your CDN)",
      "Resend-powered contact form with confirmation and spam guard",
      "Multi-language publishing setup for up to three locales",
    ],
  },
  {
    name: "Platform Build",
    headline: "Everything from Website Launch plus admin tools, logins, and deeper integrations.",
    price: "32,000",
    currency: "EGP",
    subheading: "For products that need dashboards, approvals, or protected areas.",
    features: [
      "All Website Launch deliverables and structured content modelling",
      "Secure authentication via Supabase or your identity provider",
      "Role-based admin space to manage pages, users, and submissions",
      "Engagement reporting across forms, SEO, and page activity",
      "File storage and image handling with access policies applied",
      "Automated backups, monitoring, and security checks",
    ],
  },
] as const;

export const PRICING_ADDONS: ReadonlyArray<string> = [
  "Extra language translations beyond the core package",
  "New landing pages or campaign-specific sections",
  "Newsletter or CRM integrations wired to your stack",
  "Monthly tune-ups covering fixes, tweaks, and advice",
];


