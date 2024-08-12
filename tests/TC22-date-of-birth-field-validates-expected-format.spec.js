const { test, expect } = require('@playwright/test');
const {fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

    test('Verify Date of Birth Field Correctly Validate For Expected Date Format', async ({ page }) => {
    const locators = await fieldsLocators(page);
    //Fills in date of birth with valid input
    await locators.dob.fill(user.date_Of_birth[0]);

     // Assert that the input value matches the expected format YYYY-MM-DD
     const dateValue = await locators.dob.inputValue();
     const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;


    expect(dateFormatRegex.test(dateValue)).toBe(true);

    });
});