const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {
    
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

    test('Verify The Address  Field Label Displays Correctly As Expected', async ({ page }) => {
    const locators = await fieldsLocators(page);//Create object of the fieldsLocators

          //Asserts the text content of lable is correctly displayed
          expect(locators.addressLabel).toHaveValue('Address (optional):')
    

    });
    });