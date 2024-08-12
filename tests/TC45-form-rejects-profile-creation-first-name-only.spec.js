
const { test, expect } = require('@playwright/test');
const { fieldsLocators, verifyRegistrationSuccess, fillMandatoryFields } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

test('Verify Form Correctly Rejects User Profile Creation With Only First Name Field Filled Out', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.firstName.fill(user.first_name[0]);

     
  
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      expect(dialog.message()).toBe('Last name must be filled out is displayed');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }

    await locators.submitButton.click()

  });

  });

  });