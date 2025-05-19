import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/ManikantPortfolio/',
  plugins: [react()],
  server: {
    host: true,         // Enables network access (0.0.0.0)
    port: 5173,         // Optional: default is 5173
    open: true,         // Optional: auto-opens browser
  },
});
