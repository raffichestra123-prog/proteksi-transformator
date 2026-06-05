import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Proteksi Transformator",
        short_name: "Proteksi Trafo",
        theme_color: "#00e5ff",
        background_color: "#020F2B",
        display: "standalone",
        icons: [
          {
            src: "/favicon.svg",
            sizes: "192x192",
            type: "image/svg+xml"
          }
        ]
      }
    })
  ]
});