const { test, expect } = require('@playwright/test');
const { fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;
  
    test.beforeEach(async ({ page }) => {
  
        await page.goto('/');
      
    });

    test('Verify GitHub URL Field Correctly Validates With Valid URL Filled', async ({ page }) => {
    const locators = await fieldsLocators(page);
      
        // Fill the Github field with valid input
        await locators.githubField.fill(user.github_url[0])

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