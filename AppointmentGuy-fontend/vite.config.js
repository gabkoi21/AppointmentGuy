// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { fileURLToPath, URL } from "node:url";

// export default defineConfig({
//   base: "/", // ✅ Add this line
//   plugins: [react()],
//   build: {
//     outDir: "dist", // ✅ make sure this is 'dist', not '_dist'
//   },
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    // Add this to ensure _redirects gets copied
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // This ensures files in public/ get copied to dist/
  publicDir: "public",
});
