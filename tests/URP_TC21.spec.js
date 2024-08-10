const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
    test.beforeEach(async ({ page }) => {
      await navigate(page);
      
    });


    test('Verify the date of birth  field label is correctly displayed', async ({ page }) => {
    const locators = await fieldsLocators(page);
          //Asserts the text content of lable is correctly displayed
          expect(locators.dobLabel).toHaveValue('Date of Birth (optional):')
    

    });
    });
    