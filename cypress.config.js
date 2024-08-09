const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require('fs');
module.exports = defineConfig({
    viewportWidth: 1200,
    viewportHeight: 720,
    video: true,
    "chromeWebSecurity": false,
    "reporter": "cypress-multi-reporters",
    screenshotsFolder: "cypress/screenshots",
    downloadsFolder: "cypress/downloads",
    trashAssetsBeforeRuns: true,
    e2e: {
        experimentalModifyObstructiveThirdPartyCode: true,
        specPattern: "**/*.feature",
        defaultCommandTimeout: 10000,
        setupNodeEvents(on, config) {
            on("file:preprocessor", cucumber());
            on('task', {
                readFileMaybe(filename) {
                  if (fs.existsSync(filename)) {
                    return fs.readFileSync(filename, 'base64')
                  }
                  return null
                },
            })
        },
    },
})