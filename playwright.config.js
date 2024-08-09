
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({


  testDir: './tests', // Updates with test directory
  timeout: 60000,
  retries: 1,
  reporter: [
    ['list'], 
    ['html', { outputFolder: 'test-results/html-report', open: 'always' }]
  ],

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'off',
   
  
    
  
  },
});


