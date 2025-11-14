export type Testimonial = {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string; // Initials for avatar generation
};

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "TravelScape",
    testimonial:
      "Arcline transformed our tourism website into a modern, responsive platform. The AI-powered development process was incredibly fast, and the final result exceeded our expectations.",
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "EcoStore",
    testimonial:
      "Working with Arcline was seamless. They built our e-commerce platform with Next.js and TypeScript, and it performs beautifully across all devices. Highly recommend!",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    company: "Portfolio Studio",
    testimonial:
      "The personal portfolio Arcline created for me is stunning. Clean design, fast performance, and the development process was so smooth. Exactly what I needed.",
    avatar: "EW",
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    company: "TechStart Inc",
    testimonial:
      "Our business website needed a complete overhaul. Arcline delivered a modern, SEO-optimized site that's already driving more leads. Professional and efficient.",
    avatar: "DK",
  },
  {
    name: "Jessica Martinez",
    role: "Product Manager",
    company: "SaaS Platform",
    testimonial:
      "The admin dashboard Arcline built is perfect. Clean UI, excellent UX, and it integrates seamlessly with our backend. The team's attention to detail is impressive.",
    avatar: "JM",
  },
  {
    name: "Alex Thompson",
    role: "Entrepreneur",
    company: "Startup Co",
    testimonial:
      "From concept to launch, Arcline made the entire process easy. The AI-powered development saved us time and money while delivering a production-ready product.",
    avatar: "AT",
  },
  {
    name: "Rachel Green",
    role: "Content Creator",
    company: "Blog Network",
    testimonial:
      "My blog platform built by Arcline is beautiful and fast. The modern design perfectly matches my brand, and the user experience is exceptional. Couldn't be happier!",
    avatar: "RG",
  },
  {
    name: "James Wilson",
    role: "Restaurant Owner",
    company: "Fine Dining Group",
    testimonial:
      "The restaurant website Arcline created showcases our menu beautifully. The booking system works flawlessly, and customers love the modern interface. Great work!",
    avatar: "JW",
  },
];


