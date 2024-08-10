const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {
  
      await navigate(page);
      
    });

    test('Verify Address Field Acceptance of Valid Input', async ({ page }) => {
    const locators = await fieldsLocators(page);
      
        // Fill the address field with valid input
        await locators.addressField.fill(user.address_[0])
        

        // Assert that the input value matches the expected valid address
        await expect(locators.addressField).toHaveValue(user.address_[0]);

    });
    });