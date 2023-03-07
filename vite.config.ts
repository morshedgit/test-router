/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test-router/",
  test: {
    globals: true,
    environment: "jsdom",
    // setupFiles: "./src/setupTests.ts",
    coverage: {
      provider: "c8",
      reporter: ["text", "html"],
      exclude: ["node_modules/", "src/setupTests.ts"],
    },
  },
});
