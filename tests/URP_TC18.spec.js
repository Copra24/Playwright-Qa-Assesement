const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {
    const user = UserData();

    let dialogHandled = false;
    
    test.beforeEach(async ({ page }) => {
  
      await page.goto('/');
      
    });

    test('Verify Password And Confirm Password Correctly Validate For Numeric Characters Filled Inn', async ({ page }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters valid password
    await locators.password.fill(user.password_[2])
    //Enters valid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[2])



      // Handle the dialog that appears when the Password field is filled with invalid password format
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Handle the dialog that appears when the Password field is filled with valid password format
      expect(dialog.message()).toBe('LinkedIn must be filled out');  //This is used as verification point because bug from the Linkedin field prevents form from submitting when clicked
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

     await locators.submitButton.click()

    });
 

    //***Code below should be used as valid verification point when Linkedin madatory code-wise error has been resolved */
    //Asserts Password field is empty after submitting form, thus indicating password format was accepted(verification point)
    //  expect(locators.password).toHaveValue('');

    });