import { defineConfig } from 'astro/config';

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "fw4fh611",
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-06-26",
    studioBasePath: "/studio"
  }), react()]
});