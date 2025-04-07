import fs from "node:fs/promises";
import path from "node:path";

import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    copyFile({ src: "index.html", dest: "404.html" }),
  ],
});

type CopyFileOptions = {
  src: string;
  dest: string;
};

function copyFile({ src, dest }: CopyFileOptions): Plugin {
  let dist = "";

  return {
    name: "outputFile",
    configResolved(config) {
      dist = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      await fs.copyFile(path.join(dist, src), path.join(dist, dest));
    },
  };
}
