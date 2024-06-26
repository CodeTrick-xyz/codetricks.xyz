import { defineConfig } from "sanity";
import {structureTool} from "sanity/structure"

export default defineConfig({
  name: "codetricks-xyz", // Can be whatever
  title: "codetricks-xyz", // Can be whatever
  projectId: 'fw4fh611',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [],
  },
});