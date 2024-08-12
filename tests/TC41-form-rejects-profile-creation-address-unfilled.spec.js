const { test, expect } = require('@playwright/test');
const { fillAllFields, fieldsLocators, verifyRegistrationSuccess } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

test('Verify Form Correctly Rejects User Profile Creation with Address Field Left Unfilled', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.addressField.fill(user.address_[2]='');

  await fillAllFields(page, user);

  await verifyRegistrationSuccess(page);



  });

  });