import { createClient } from "@sanity/client";
export const sanityClient = createClient({
    projectId: "fw4fh611",
    dataset: "production",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
// token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});