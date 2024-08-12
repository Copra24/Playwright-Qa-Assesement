const { test, expect } = require('@playwright/test');
const {fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;
    
    test.beforeEach(async ({ page }) => {
  
      await page.goto('/');
      
    });

    test('Verify Last Name Field Correctly Rejects Special Characters', async ({ page }) => {
    const locators = await fieldsLocators(page);
    //Enter valid First name
    await locators.firstName.fill(user.first_name[0])
    //Enters invalid Last name
     await locators.lastName.fill(user.last_name[4]);

     // Handle the dialog that appears when the Last name field is filled with Special characters
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      expect(dialog.message()).toBe('Last name must contain alphabetical characters only');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

     await locators.submitButton.click()

    });



});