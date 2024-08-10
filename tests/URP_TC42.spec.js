const { test, expect } = require('@playwright/test');
const {navigate, fillAllFields, fieldsLocators, verifyRegistrationSuccess } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {
      await navigate(page);
      
    });

test('Verify User Profile Is Created with LinkedIn Field Left Unfilled', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.linkedinUrl.fill(user.linkedin_url[0]='');

  await fillAllFields(page, user);

  await verifyRegistrationSuccess(page);



  });

  });