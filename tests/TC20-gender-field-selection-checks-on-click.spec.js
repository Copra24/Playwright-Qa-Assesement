const { test, expect } = require('@playwright/test');
const {fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    
    test.beforeEach(async ({ page }) => {

      await page.goto('/');  
    });


    test('Verify Gender Field Options Selection Checks On Click Correctly', async ({ page }) => {
    const locators = await fieldsLocators(page);

    //Gender selection Female
    await locators.genderFemale.check()
    await expect(locators.genderFemale).toBeChecked();

    });
    });
    