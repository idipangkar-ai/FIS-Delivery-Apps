import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      manifest: {
        name: "FIS-Ltd.",
        short_name: "HelloWorld",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#2563eb",
        icons: [
          { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],

  server: {
    host: true,
    port: 5173,
    allowedHosts: [".ngrok-free.app"],
    headers: {
      "ngrok-skip-browser-warning": "true", // 👈 this line skips the warning
    },
  },
});
