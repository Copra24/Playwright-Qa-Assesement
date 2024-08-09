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

    test('Verify First Name field correclty  rejects Alphanumeric characters and Arithmetic Symbols', async ({ page }) => {
    const locators = await fieldsLocators(page);//Create object of the fieldsLocators
    //Enters Invalid first name
     await locators.firstName.fill(user.first_name[2]);

     // Handle the dialog that appears when the first name field is filled with Alphanumeric characters and Arithmetic Symbols
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('First name must contain alphabetical characters only');
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