const { test, expect } = require('@playwright/test');
const {navigate, fillAllFields, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

test('Verify Form Correctly Rejects User Profile Creation with First Name Field Left Unfilled', async ({ page }) => {
    const locators = await fieldsLocators(page);
    

    // Clear the first name field
    await locators.firstName.fill(user.first_name[0] = '');

     
  
     // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      expect(dialog.message()).toBe('First name must be filled out');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

  // Fill the registration form
  await fillAllFields(page, user);

  });

  });

