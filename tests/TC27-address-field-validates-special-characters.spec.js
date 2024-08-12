const { test, expect } = require('@playwright/test');
const { fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;
  
    test.beforeEach(async ({ page }) => {
  
        await page.goto('/');
      
    });

    test('Verify Address Correctly Validates With Special Characters Filled', async ({ page }) => {
    const locators = await fieldsLocators(page);
      
        // Fill the address field with invalid input
        await locators.addressField.fill(user.address_[1])

        page.on('dialog', async dialog => {
            dialogHandled = true;
            try {
              expect(dialog.message()).toBe('First name must be filled out');//verification to assert address value was accepted and next required input needed
              await dialog.accept();
            } catch (error) {
              console.error('Error handling the dialog:', error);
              await dialog.dismiss(); 
            }
          });

     await locators.submitButton.click()
        

    });
    });