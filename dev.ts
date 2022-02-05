import { cli } from "https://deno.land/x/edcb@v1.0.0-alpha.8/mod.ts";

if (import.meta.main) {
  await cli({
    config: "deno.json",
    importMap: "import_map.json",
    unstable: true,
    webRoot: "docs",
    ignore: "index.js,.old",
    bundles: [{
      source: "index.tsx",
      target: "index.js",
    }],
  });
}
