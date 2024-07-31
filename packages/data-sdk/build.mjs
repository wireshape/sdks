import { build } from "esbuild";

build({
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ["es2015"],
  outfile: "dist/index.min.js",
  format: "esm",
}).catch(() => process.exit(1));
