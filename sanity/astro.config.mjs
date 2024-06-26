import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity()]
});