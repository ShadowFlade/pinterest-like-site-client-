import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://localhost:80/",
    viewportWidth:1920,
    viewportHeight:1080
  },
  "reporter":"mochawesome",
  "reporterOptions":{
    "overwrite":false,
    "html":false,
    "json":true
  }
});
