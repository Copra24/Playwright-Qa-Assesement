const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;

  
    test.beforeEach(async ({ page }) => {
  
      await page.goto('/');
      
    });

    test('Verify First Name field Correclty  Rejects Alphanumeric Characters and Arithmetic Symbols', async ({ page }) => {
    const locators = await fieldsLocators(page);
    //Enters Invalid first name
     await locators.firstName.fill(user.first_name[2]);

     
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {

      expect(dialog.message()).toBe('First name must contain alphabetical characters only');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

     
     await locators.submitButton.click()

    });



});