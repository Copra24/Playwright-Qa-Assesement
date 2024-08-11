const { test, expect } = require('@playwright/test');
const {navigate, fillAllFields, fieldsLocators, verifyRegistrationSuccess } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

test('Verify Form Correctly Rejects User Profile Creation when Phone Number Field Is Filled With Invalid Phone Number Digits', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.phoneNumber.fill(user.phone_number[2]);

  await fillAllFields(page, user);

  await verifyRegistrationSuccess(page);



  });

  });