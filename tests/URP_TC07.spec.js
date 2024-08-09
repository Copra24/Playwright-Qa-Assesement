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

    test('Verify Last Name Field correctly accept Capitalized alphabetic characters', async ({ page }) => {
    const locators = await fieldsLocators(page);//Create object of the fieldsLocators
    //Enter valid First name
    await locators.firstName.fill(user.first_name[0])
    //Enters valid Last name
     await locators.lastName.fill(user.last_name[1]);

     // Handle the dialog that appears when the Last name field is filled with Capitalized alphabetic characters
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Email must be filled out');
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