const { test, expect } = require('@playwright/test');
const {navigate, fillAllFields, fieldsLocators, verifyRegistrationSuccess } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

test('Verify Form Correctly Validates User Profile Creation with Invalid Linkedln URL Filled', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.linkedinUrl.fill(user.linkedin_url[1]);

  await fillAllFields(page, user);

  await verifyRegistrationSuccess(page);

  

  });

  });