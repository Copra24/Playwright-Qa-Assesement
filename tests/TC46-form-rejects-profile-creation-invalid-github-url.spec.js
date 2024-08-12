const { test, expect } = require('@playwright/test');
const { fieldsLocators, verifyRegistrationSuccess, fillMandatoryFields } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

test('Verify Form Correctly Rejects User Profile Creation with Invalid GitHub URL Filled', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.githubField.fill(user.github_url[1]);

  await fillMandatoryFields(page, user);//Fills mandatory Fields

  await verifyRegistrationSuccess(page);



  });

  });