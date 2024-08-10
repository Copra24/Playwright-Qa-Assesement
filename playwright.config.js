
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({


  testDir: './tests', 
  timeout: 60000,
  retries: 1,
  reporter: [
    ['list'], 
    ['html', { outputFolder: 'test-results/html-report', open: 'always' }]
  ],

  use: {
    browserName: 'chromium',
    baseURL: 'https://qa-assessment.pages.dev/',
    headless: false,
    screenshot: 'on',
    video: 'off',
    
  
  }


});


