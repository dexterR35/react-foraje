import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "./", // Important for relative paths in the build
    plugins: [react()]
  });
