import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/tom-and-jerry-react-gallery/",
  plugins: [react()],
});