
const { test, expect } = require('@playwright/test');
const { navigate, fillRegistrationForm,  verifyRegistrationSuccess } = require('../PageObject/RegistrationPagePOM');
const { UserData } = require('../FixturesFile/fixturesData');

test.describe('Registration Page Test', () => {

  const user = UserData();// Call the UserData function to generate and return a user data object for testing purposes

  let dialogHandled = false;// Initialize a flag to track whether a dialog (such as an alert or confirmation) has been handled during the test

  test.beforeEach(async ({ page }) => {

    // Go to the registration page Url from the Pom
    await navigate(page);
    

    
  });

  //**** Validating the First name input field 
  test.only('Verify that an error message is displayed when First name field is left empty', async ({ page }) => {
    // Clear the first name field
    user.firstName = '';
  
     // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('First name must be filled out');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });
  
    // Fill the registration form
    await fillRegistrationForm(page, user);

      // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  }
  });


  test.only('Verify that an error message is displayed when first name field is filled out with numerical characters', async ({ page }) => {
    user.firstName = '1234';

    // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('First name must contain alphabetical characters only');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });
       // Fill the registration form
    await fillRegistrationForm(page, user);

     // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  }
    
  });


  test('Verify that an error message is displayed when first name field is filled out with special characters included', async ({ page }) => {
    user.firstName = 'Cliff@$%';

      // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('First name must contain alphabetical characters only');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });

    await fillRegistrationForm(page, user);

      // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  }
    
  });


  test('Verify that an error message is displayed when first name field is filled out with white spaces between characters', async ({ page }) => {
    user.firstName = 'Clif ford';

    // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('First name must contain alphabetical characters only');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });

    await fillRegistrationForm(page, user);

     // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  }
    
  });


   //*** Validating Last name field 
test('Verify that an error message is displayed when Last name field is left empty', async ({ page }) => {

    //Leave first name field empty
    user.lastNameName = '';

    // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Last name must be filled out');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });

  
    await fillRegistrationForm(page, user);

     // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  }   
  });


  test('Verify that an error message is displayed when last name field is filled out with numerical characters', async ({ page }) => {
    user.lastName = '1234';

    // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Last name must contain alphabetical characters only');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });

    await fillRegistrationForm(page, user);

     // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  }   
    
  });


  test('Verify that an error message is displayed when last name field is filled out with special characters included', async ({ page }) => {
    user.lastName = 'Folef@$%';

    // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Last name must contain alphabetical characters only');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });

    await fillRegistrationForm(page, user);

      // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  } 
    
  });

  
  test('Verify that an error message is displayed when last name field is filled out with white spaces between characters', async ({ page }) => {
    user.lastName = 'Fole fac';

    // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Last name must contain alphabetical characters only');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });

    await fillRegistrationForm(page, user);

       // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  } 
    
  });


  //*** Validating the email field 
  test('Verify that an error message is displayed when the email field is left empty', async ({ page }) => {
    user.email = '';

    // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Email must be filled out');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });

    await fillRegistrationForm(page, user);

        // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  } 
  
  });


  
  test('Verify that an error message is displayed when the email does not contain the .com domain', async ({ page }) => {
    user.email = 'folefac24.c@gmail';

     // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Email must be a valid email address');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });

    await page.verifyRegistrationSuccess(page);

       // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  } 
  });



 //*** Validating  Password field
  test('Verify that an error message is displayed when Password field is left empty', async ({ page }) => {
    user.password = '';

      // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Password field must be filled out');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });


    await fillRegistrationForm(page, user);

        // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  } 
  
  });



  test('Verify error message is displayed when Confirm Password field is left empty', async ({ page }) => {
    user.confirmPassword = '';

      // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Passwords do not match');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });

    await fillRegistrationForm(page, user);

        // Ensure the dialog was handled, and if not, fail the test gracefully
  await page.waitForTimeout(1000); // Wait to ensure dialog has time to appear
  if (!dialogHandled) {
    throw new Error('Dialog was not handled as expected.');
  } 
  });


  test('Verify user is registered when date of birth field is left empty', async ({ page }) => {
    user.dateOfBirth = '';

    await fillRegistrationForm(page, user);
    await verifyRegistrationSuccess(page); //Verification point by asserting first name field is empty after clicking
  
  });


  test('Verify user is registered when Phone number field is left empty', async ({ page }) => {
    user.phoneNumber = '';

    await fillRegistrationForm(page, user);

    await verifyRegistrationSuccess(page); //Verification point by asserting first name field is empty after clicking
  
  });


  test('Verify user is registered when address field is left empty', async ({ page }) => {
    user.address = '';

    await fillRegistrationForm(page, user);

    await verifyRegistrationSuccess(page); //Verification point by asserting first name field is empty after clicking
  
  });


  test.only('Verify user is registered when LinkedIn field is left empty', async ({ page }) => {
    user.linkedinUrl = '';

    await fillRegistrationForm(page, user);

    await verifyRegistrationSuccess(page); 

    // Handle the dialog that appears when the first name field is left empty
  page.on('dialog', async dialog => {
    dialogHandled = true;
    try {
      // Assert the alert message
      expect(dialog.message()).toBe('Passwords do not match');
      await dialog.accept();
    } catch (error) {
      console.error('Error handling the dialog:', error);
      await dialog.dismiss(); // Attempt to dismiss the dialog if accepting fails
    }
  });
  
  });


  test('Verify user is registered when Github field is left empty', async ({ page }) => {
    user.githubUrl = '';

    await fillRegistrationForm(page, user);
    await verifyRegistrationSuccess(page); 
  
  });


  
  test('Verify user is registered when all input fields are filled out with valid data', async ({ page }) => {
    await fillRegistrationForm(page, user);
    await verifyRegistrationSuccess(page);
  });

});
