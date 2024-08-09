const { test, expect } = require('@playwright/test');
const { navigate, fieldsLocators } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

    const user = UserData();// Creates object of UserData
  
    test.beforeEach(async ({ page }) => {
  
      // Navigates to the registration page Url from the Pom
      await navigate(page);
      
    });

    test('Verify successful submission with valid alphabetical input in "Last Name" field', async ({ page }) => {
    const locators = await fieldsLocators(page);//Create object of the fieldsLocators
    //verifies the last name input field is enabled
    await expect(locators.firstName).toBeEnabled();
    
    //Enters First name John in the input box by capturing its value using its array index
     await locators.lastName.fill(user.last_name[0]);

     await locators.submitButton.click()
     
    //Asserts Smith is displayed in the input box after filling
     expect(locators.lastName).toHaveValue(user.last_name[0]); 


    });



});