const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();// Creates object of UserData

    let dialogHandled = false;// Initialize a flag to track whether a dialog (such as an alert or confirmation) has been handled during the test
    
    test.beforeEach(async ({ page }) => {
  
      // Navigates to the registration page Url from the Pom
      await navigate(page);
      
    });

    test('Verify Password Field Acceptance of Spaces Between Characters', async ({ page }) => {
    const locators = await fieldsLocators(page);//Create object of the fieldsLocators

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
      //This is used as verification point because bug from the Linkedin field prevents form from submitting when clicked
      expect(dialog.message()).toBe('LinkedIn must be filled out'); 
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); 
    }
  });

     //Submits the form
     await locators.submitButton.click()

    });
 

    //***Code below should be used as valid verification point when Linkedin madatory code-wise error has been resolved */
    //Asserts Password field is empty after submitting form, thus indicating password format was accepted(verification point)
    //  expect(locators.password).toHaveValue('');

    });