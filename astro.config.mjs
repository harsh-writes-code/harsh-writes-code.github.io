import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  site: "https://harsh-writes-code.github.io"
})