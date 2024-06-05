import { defineConfig } from "vite";
import path from "path";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: "./src",
  publicDir: "../public",
  build: {
    outDir: "../static",
    assetsDir: "",
    // rollupOptions: {
    //   input: {
    //     main: path.resolve(__dirname, "src/index.html"),
    //   },
    // },
  },
});
