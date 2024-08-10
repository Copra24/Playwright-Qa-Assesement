const playwright = require('@playwright/test');
const { expect } = playwright;

const base = playwright.test;

const test = base.extend({
  page: async ({ page }, use) => {

    // Navigate to the registration page URL
    await page.goto('https://qa-assessment.pages.dev/');
    await use(page);
  },
});

module.exports = { test, expect };
