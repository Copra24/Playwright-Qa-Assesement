const { test, expect } = require('@playwright/test');
const { fillAllFields, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();
  
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

test('Verify form correctly rejects User Profile Creation with Last Name Field Left Unfilled', async ({ page }) => {
    const locators = await fieldsLocators(page);
    
    await locators.lastName.fill(user.last_name[0] = '');

     
  
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      expect(dialog.message()).toBe('Last name must be filled out');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

  await fillAllFields(page, user);

  });

  });

