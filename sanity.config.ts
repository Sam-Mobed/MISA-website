import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "eqw6b56r",
    dataset: "production",
    title: "MISA",
    apiVersion: "2023-05-14",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});
//basePath is where people other than me can edit content

export default config;