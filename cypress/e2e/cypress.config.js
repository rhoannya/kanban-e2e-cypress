const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kanban-dusky-five.vercel.app',
    video: true,          // habilita vídeos
    screenshotOnRunFailure: true
  }
});
