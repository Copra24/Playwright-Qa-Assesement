const { test, expect } = require('@playwright/test');
const {fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

    test('Verify Phone Number Field Correctly Validates With Numeric Characters', async ({ page }) => {
    const locators = await fieldsLocators(page);
      
        // Fill the phone number field with a valid numeric input
        await locators.phoneNumber.fill(user.phone_number[0]);

        // Assert that the input value matches the expected valid numeric phone number
        await expect(locators.phoneNumber).toHaveValue(user.phone_number[0]);
    });
});