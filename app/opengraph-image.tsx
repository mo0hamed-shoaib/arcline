import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Professional Frontend Development Services. Modern websites built with AI-powered development.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// This route generates the Open Graph image
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f172a, #1f2937)",
          color: "#f8fafc",
          fontFamily: "Geist Sans, system-ui, sans-serif",
          textAlign: "center",
          padding: "96px",
          gap: "24px",
          flexDirection: "column",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 12px 40px rgba(15, 23, 42, 0.35))",
          }}
        >
          <rect
            x="6"
            y="6"
            width="108"
            height="108"
            rx="24"
            fill="url(#gradient)"
            stroke="rgba(248, 250, 252, 0.35)"
            strokeWidth="2"
          />
          <path d="M40 82V38H50.5L69.5 70.5V38H80V82H69.5L50 49.5V82H40Z" fill="#0f172a" />
          <defs>
            <linearGradient
              id="gradient"
              x1="6"
              y1="6"
              x2="114"
              y2="114"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
        </svg>

        <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            Arcline · Professional Frontend Development Services
          </h1>
          <p
            style={{
              fontSize: "28px",
              lineHeight: 1.4,
              opacity: 0.85,
              margin: 0,
            }}
          >
            Modern websites built with AI-guided workflows. Tourism experiences, ecommerce,
            dashboards, and custom systems crafted with Next.js, TypeScript, Tailwind CSS, and
            shadcn/ui.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
