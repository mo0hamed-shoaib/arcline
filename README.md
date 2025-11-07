# Arcline

**Portfolio Website** · Frontend Development Services

A modern, responsive portfolio website showcasing frontend development services. Built with Next.js, TypeScript, shadcn/ui, and Tailwind CSS.

---

## 🌐 Live Site

**https://arcline.dev**

---

## ✨ Features

### Modern Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **Framer Motion** - Smooth animations
- **Geist** - Sans & Mono typography

### Sections

- **Hero Section** - Professional frontend development services showcase
- **Service Types** - Tourism, e-commerce, portfolios and more
- **Tech Stack** - Modern tools and technologies scrolling display
- **Features** - Design, Develop, Deploy workflow demonstrations
- **Modern Tools** - Next.js, TypeScript, Tailwind CSS showcase
- **Cross-Platform** - Responsive design capabilities
- **Why Choose** - Service differentiators and benefits
- **Social Proof** - Client testimonials
- **FAQ** - Common questions answered
- **Legal Pages** - Privacy, Terms, Cookie policies

### Design Highlights

- Dark theme with gradient accents
- Fully responsive design
- Smooth animations and transitions
- Optimized images and videos
- SEO-optimized with metadata
- Accessibility-focused (ARIA labels, keyboard navigation)
- Tooltip interactions
- Contact modal with project discussion options

---

## 🛠️ Technologies Used

### Core

- Next.js 15
- React 18
- TypeScript

### Styling & UI

- Tailwind CSS
- shadcn/ui components
- CSS-in-JS for animations
- Custom gradient system

### Backend & Database

- Supabase
- API integrations
- Authentication ready

### Fonts

- Geist Sans (headings)
- Geist Mono (body content)

### Icons

- Lucide React
- Custom SVG icons

### Development Tools

- Cursor AI
- ESLint
- PostCSS
- TypeScript compiler

---

## 📁 Project Structure

```
arcline/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   └── cookies/           # Cookie policy
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer with social links
│   ├── hero-image.tsx    # Hero section image
│   ├── announcement-banner.tsx
│   ├── save-review-restore-section.tsx
│   ├── agentic-ai-search-section.tsx
│   ├── why-not-git-section.tsx
│   ├── vibe-coding-tweets-section.tsx
│   ├── testimonials-section.tsx
│   ├── faq-section.tsx
│   └── install-modal.tsx # Installation guide modal
├── public/               # Static assets
│   ├── images/          # Images and thumbnails
│   ├── fonts/           # Web fonts
│   └── *.xml            # SEO sitemaps
├── lib/                 # Utilities
└── styles/              # Additional stylesheets
```

---

## 🎨 Design System

### Colors

- **Primary Background**: Black (#000000)
- **Text**: White (#FFFFFF) with opacity variants
- **Gradients**:
  - Hero: Cyan → Orange → Pink
  - Features: Yellow → Red
  - Tools: Blue → Red
  - Testimonials: Cyan → Orange → Pink

### Typography

- **Headings**: Geist Sans (700 H1, 600 H2, 500 H3)
- **Body**: Geist Mono (400)

### Spacing

- Consistent section padding: `py-12 md:py-16`
- Container max-width: 6xl (1152px)
- Responsive gaps and margins

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Environment Variables

Create a `.env.local` file based on the template below to enable third-party integrations like Cloudinary image delivery:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

The Cloudinary helper in `lib/cloudinary.ts` uses this value to build optimized URLs for remote assets.

### Installation

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Run development server**

   ```bash
   pnpm dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🖼️ Asset Delivery with Cloudinary

- `lib/cloudinary.ts` exposes a `buildCloudinaryUrl` helper for generating transformation URLs.
- `components/ui/cloudinary-image.tsx` wraps `next/image` so you can render assets by `publicId`.
- `next.config.mjs` allows optimized remote images from `https://res.cloudinary.com`.

Example usage:

```tsx
import { CloudinaryImage } from "@/components/ui/cloudinary-image";

<CloudinaryImage
  publicId="portfolio/project-hero"
  alt="Project hero screenshot"
  width={1280}
  height={720}
  priority
  transformations={{ quality: "auto", format: "auto", crop: "fill", gravity: "auto" }}
/>;
```

Upload screenshots to Cloudinary manually or via API, then reference their public IDs in the codebase.

---

## ☁️ Server-Side Cloudinary Usage

Install the Cloudinary SDK (already included via `pnpm add cloudinary`).

Configure credentials in `.env.local`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

The helper `lib/cloudinary-server.ts` exports the SDK instance plus convenience functions for uploads:

```ts
import { uploadToCloudinary, uploadLargeToCloudinary } from "@/lib/cloudinary-server";

await uploadToCloudinary("/path/to/image.jpg", {
  upload_preset: "portfolio_shots",
  folder: "arcline/projects",
});

await uploadLargeToCloudinary("/path/to/video.mp4", { chunk_size: 7_000_000 });
```

You can also generate transformed URLs on the fly:

```ts
import { buildCloudinaryUrl } from "@/lib/cloudinary";

const optimizedSrc = buildCloudinaryUrl("portfolio/sample.jpg", {
  width: 100,
  height: 150,
  crop: "fill",
  quality: "auto",
  format: "auto",
});
```

Refer to the [Cloudinary documentation](https://cloudinary.com/documentation) for advanced presets and transformations.

---

## 🏗️ Development

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Component Guidelines

- Use TypeScript for all components
- Follow shadcn/ui patterns for UI components
- Implement responsive design (mobile-first)
- Add proper ARIA labels for accessibility
- Use Tailwind classes for styling

---

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: 768px+
- Large Desktop: 1024px+

---

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Proper heading hierarchy
- Alt text for images

---

## 🔍 SEO Optimization

- Semantic HTML structure
- Comprehensive metadata
- Open Graph tags
- Twitter Card support
- XML sitemaps
- Robots.txt configuration
- LLMs.txt for AI understanding

---

## 🎯 Performance

- Image optimization with Next.js Image
- Video lazy loading
- Code splitting
- Font optimization
- CSS purging
- Minimal runtime JavaScript

---

## 📄 License

All rights reserved © 2025 Arcline

---

## 👤 Contact

**Mohamed Gamal**  
Frontend Developer

- **Website**: https://arcline.dev
- **Email**: privacy@arcline.dev
- **Twitter**: @jackjack_eth

---

Built with ❤️ using Next.js and modern web technologies.
