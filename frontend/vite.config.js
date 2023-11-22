import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         context: path.resolve(__dirname, "./src/context"),
         images: path.resolve(__dirname, "./src/images"),
         layouts: path.resolve(__dirname, "./src/layouts"),
         pages: path.resolve(__dirname, "./src/pages"),
         utilities: path.resolve(__dirname, "./src/utilities"),
      },
   },
   css: {
      postcss: {
         plugins: [tailwind, autoprefixer],
      },
   },
});
