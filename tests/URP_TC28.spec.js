const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;
  
    test.beforeEach(async ({ page }) => {
  
        await page.goto('/');
      
    });

    test('Verify Linkedin Field Correctly Validates With Valid input', async ({ page }) => {
    const locators = await fieldsLocators(page);
      
        // Fill the address field with invalid input
        await locators.linkedinUrl.fill(user.linkedin_url[0])

        page.on('dialog', async dialog => {
            dialogHandled = true;
            try {
              // Assert the alert message
              expect(dialog.message()).toBe('First name must be filled out');//verification to assert Linkedinvalue was accepted and next required input needed
              await dialog.accept();
            } catch (error) {
              console.error('Error handling the dialog:', error);
              await dialog.dismiss(); 
            }
          });

        //Submits the form
     await locators.submitButton.click()
        

    });
    });