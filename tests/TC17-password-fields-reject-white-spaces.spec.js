const { test, expect } = require('@playwright/test');
const {fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();

    let dialogHandled = false;
    
    test.beforeEach(async ({ page }) => {

      await page.goto('/');
      
    });

    test('Verify Password And Confirm Password Field Correctly Rejects User Profile Creation With White Spaces Between Characters', async ({ page }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters invalid password
    await locators.password.fill(user.password_[1])
    //Enters invalid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[1])



      // Handle the dialog that appears when the Password field is filled with invalid password format
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      expect(dialog.message()).toBe('Password can only contain alphanumeric characters and symbols'); 
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

     await locators.submitButton.click()

    });
 

    });
    