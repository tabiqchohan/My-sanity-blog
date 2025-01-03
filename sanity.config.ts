import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./src/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "My Sanity Project",
  projectId: "aaokd3kl", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
