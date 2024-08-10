const { test, expect } = require('@playwright/test');
const {navigate, fillAllFields, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {
      await navigate(page);
      
    });

test('Verify User Profile Is Not Created with Password  Field Left Unfilled', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.password.fill(user.password_[0] = '');

     
  
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      expect(dialog.message()).toBe('Password must be filled out');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

  await fillAllFields(page, user);

  });

  });
