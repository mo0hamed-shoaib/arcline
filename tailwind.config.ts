import type { Config } from "tailwindcss";

const config: Config = {
  // Tailwind CSS v4 uses CSS-first configuration
  // Most configuration is now done in CSS using @theme directive
  // This file is kept for compatibility with tools that expect a config file
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  // Note: Theme configuration has moved to CSS (@theme in globals.css)
  // Plugins and other config can still be defined here
  plugins: [require("tailwindcss-animate")],
};

export default config;
