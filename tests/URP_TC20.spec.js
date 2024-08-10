const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;
    
    test.beforeEach(async ({ page }) => {
      await navigate(page);   
    });


    test('Verify Gender Option Selection', async ({ page }) => {
    const locators = await fieldsLocators(page);

    //Gender selection Female
    await locators.genderFemale.check()
    await expect(locators.genderFemale).toBeChecked();

    });
    });
    