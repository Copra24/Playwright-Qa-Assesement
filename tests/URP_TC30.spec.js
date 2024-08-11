const { test, expect } = require('@playwright/test');
const {navigate, fillAllFields, verifyRegistrationSuccess } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

test('Verify Form Correctly Validates Profile Creation With All Fields Filled With Valid Data', async ({ page }) => {
    //fills out all fields with valid data
    await fillAllFields(page, user);

    await verifyRegistrationSuccess(page);//verification point by asserting first name field is empty after successfull form submission
  });

});