const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });


    test('Verify Date Of Birth  Field Label Displays Correctly As Expected', async ({ page }) => {
    const locators = await fieldsLocators(page);
          //Asserts the text content of lable is correctly displayed
          expect(locators.dobLabel).toHaveValue('Date of Birth (optional):')
    

    });
    });
    