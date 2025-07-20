import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/Gogames/",
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
          @use "/src/shared/styles/helpers/index.scss" as *;
          @use "/src/shared/styles/base/variables.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    },
  },
});