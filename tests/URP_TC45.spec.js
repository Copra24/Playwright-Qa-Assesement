const { test, expect } = require('@playwright/test');
const {navigate, fillAllFields, fieldsLocators, verifyRegistrationSuccess, fillMandatoryFields } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {
      await navigate(page);
      
    });

test('Verify user profile is vreated with Invalid GitHub URL input in Githurb optional  field while mandatory fields are filled in with valid data', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.githubField.fill(user.github_url[0]='');

  await fillMandatoryFields(page, user);//Fills mandatory Fields

  await verifyRegistrationSuccess(page);



  });

  });