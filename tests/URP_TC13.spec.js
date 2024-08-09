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

    test('Verify Email Field correctly rejects for missing "@" symbol', async ({ page }) => {
    const locators = await fieldsLocators(page);//Create object of the fieldsLocators

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[1]);

    
     //Submits the form
     await locators.submitButton.click()

     // Assert email field still contains invalid email after submitting form
     expect(locators.email).toHaveValue(user.email_[1]);

    });



});