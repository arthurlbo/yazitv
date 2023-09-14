import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
        specPattern: ["**/*.spec.{js,jsx,ts,tsx}"],
        video: false,
    },
    e2e: {
        baseUrl: "http://localhost:3000",
        specPattern: ["**/*.spec.{js,jsx,ts,tsx}"],
        viewportHeight: 1080,
        viewportWidth: 1920,
    },
    screenshotOnRunFailure: false,
    video: false,
});
