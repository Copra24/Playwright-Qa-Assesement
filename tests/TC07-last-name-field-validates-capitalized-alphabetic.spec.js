const { test, expect } = require('@playwright/test');
const {fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;

  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

    test('Verify Last Name Field Correctly Validates Capitalized Alphabetic Characters', async ({ page }) => {
    const locators = await fieldsLocators(page);
    //Enter valid First name
    await locators.firstName.fill(user.first_name[0])
    //Enters valid Last name
     await locators.lastName.fill(user.last_name[1]);

     // Handle the dialog that appears when the Last name field is filled with Capitalized alphabetic characters
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      expect(dialog.message()).toBe('Email must be filled out');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

     await locators.submitButton.click()

    });



});