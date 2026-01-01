import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    host: "localhost",
    port: 3000,
    strictPort: true,
  },
});
