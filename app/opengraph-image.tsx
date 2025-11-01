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
        }}
      >
        <img
          src="/images/design-mode/og.jpg.jpeg"
          alt="Professional Frontend Development"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
