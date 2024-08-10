const { test, expect } = require('@playwright/test');
const {navigate, filOptionalFields } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;
  
    test.beforeEach(async ({ page }) => {
      await navigate(page);
      
    });

test('Verify Form Rejects Submission When Only Optional Fields Are Filled', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
//fills out all optional fields with valid data
await filOptionalFields(page, user);

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
  
await locators.submitButton.click()

  });

});