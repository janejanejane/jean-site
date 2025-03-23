const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:1234',
    supportFile: false
  },
})
