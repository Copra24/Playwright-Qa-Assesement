const { test, expect } = require('@playwright/test');
const {fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;
    
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

    test('Verify Email Field Correctly Validates valid email format', async ({ page }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);

    

     // Handle the dialog that appears when the Email field is filled with valid email format
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      expect(dialog.message()).toBe('Confirm password must be filled out');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

     await locators.submitButton.click()

    });



});