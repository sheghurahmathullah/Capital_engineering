import { createClient } from "@sanity/client";

export const sanityClient2 = createClient({
  projectId: "hcpoh9t7", // Using environment variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-20", // Using current date is a good practice
  useCdn: true,
}); 