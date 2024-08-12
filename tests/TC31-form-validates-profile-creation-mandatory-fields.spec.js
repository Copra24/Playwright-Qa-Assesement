const { test, expect } = require('@playwright/test');
const { fillRegistrationForm, verifyRegistrationSuccess, fillMandatoryFields } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

test('Verify Form Correctly Validates Profile Creation With  Only Mandatory Fields Filled', async ({ page }) => {
    //fills out all mandatory fields with valid data
    await fillMandatoryFields(page, user);

    await verifyRegistrationSuccess(page);//verification point by asserting first name field is empty after successfull form submission
  });

});