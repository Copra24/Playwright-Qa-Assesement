
const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();// Creates object of UserData
  
    test.beforeEach(async ({ page }) => {
  
      // Navigates to the registration page Url from the Pom
      await navigate(page);
      
    });

    test('Verify Phone Number Field Acceptance of Numerical Characters', async ({ page }) => {
    const locators = await fieldsLocators(page);//Create object of the fieldsLocators
    // Attempt to fill the phone number field with alphabetic characters
    await locators.phoneNumber.fill(user.phone_number[1])
    await locators.phoneNumber.fill(user.phone_number[1]);

    // Assert that the input value does not contain alphabetic characters
    const phoneNumberValue = await locators.phoneNumber.inputValue();
    // Remove any alphabetic characters
    const expectedValue = phoneNumberValue.replace(/[a-zA-Z]/g, ''); 

    // Check that the phone number field does not contain any alphabetic characters
     expect(phoneNumberValue).toBe(expectedValue);

    });



});