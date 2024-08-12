
const { test, expect } = require('@playwright/test');
const {fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

    test('Verify Phone Number Field Correctly  Rejects  Alphabetic Characters', async ({ page }) => {
    const locators = await fieldsLocators(page);

    // Attempt to fill the phone number field with alphabetic characters
    await locators.phoneNumber.fill(user.phone_number[1])
    await locators.phoneNumber.fill(user.phone_number[1]);

    // Assert that the input value does not contain alphabetic characters
    const phoneNumberValue = await locators.phoneNumber.inputValue();

    // Removes any alphabetic characters
    const expectedValue = phoneNumberValue.replace(/[a-zA-Z]/g, ''); 

    // Check that the phone number field does not contain any alphabetic characters
     expect(phoneNumberValue).toBe(expectedValue);

    });
});