import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arcline - Frontend Development",
    short_name: "Arcline",
    description:
      "Professional frontend development services. Modern websites built with AI-powered development.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/arcline-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/arcline-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
