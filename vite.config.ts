import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3000,
    open: true,
    hmr: true,
    host: "0.0.0.0",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/src/styles/helpers/index.scss" as *;
          @use "/src/styles/base/variables.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": "./src",
      "@/assets": "./src/assets",
    },
  },
});
