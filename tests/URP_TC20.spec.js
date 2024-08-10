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


    test('Verify Gender Option Selection', async ({ page }) => {
    const locators = await fieldsLocators(page);//Create object of the fieldsLocators

     
    //Gender selection Female
    await locators.genderFemale.check()
    await expect(locators.genderFemale).toBeChecked();
    

 

    });
    });
    