import { defineConfig } from "astro/config";
import github from "@astrojs/github";

export default defineConfig({
  site: "https://<username>.github.io/<repo>",
  base: "/<repo>/",
  adapter: github(),
  output: "static"
});
