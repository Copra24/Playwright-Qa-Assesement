const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

    test('Verify Email Field Correctly Rejects User Profile Creation Wth Missing "@" Symbol', async ({ page }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters invalid Email
    await locators.email.fill(user.email_[1]);

    
     await locators.submitButton.click()

     // Assert email field still contains invalid email after submitting form
     expect(locators.email).toHaveValue(user.email_[1]);

    });



});