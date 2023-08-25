import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
        specPattern: ["**/*.cy.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}", "**/*.test.{js,jsx,ts,tsx}"],
        screenshotOnRunFailure: false,
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    video: false,
});
