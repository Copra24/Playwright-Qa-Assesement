const { test, expect } = require('@playwright/test');
const {navigate, fillAllFields, fieldsLocators, verifyRegistrationSuccess } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {
      await navigate(page);
      
    });

test('Verify User Profile Is Not Created with Address Field Left Unfilled', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.addressField.fill(user.address_[2]='');

  await fillAllFields(page, user);

  await verifyRegistrationSuccess(page);



  });

  });