import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://demo.spikerz.com",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: 2,
    watchForFileChanges: false
  },
});
