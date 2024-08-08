const { expect } = require('@playwright/test');

async function navigate(page) {
  await page.goto('https://qa-assessment.pages.dev/');
}

async function fillRegistrationForm(page, user) {
  await page.locator('input[name="firstName"]').fill(user.firstName);
  await page.locator('input[name="lastName"]').fill(user.lastName);
  await page.locator('input[name="email"]').fill(user.email);
  await page.locator('input[name="password"]').fill(user.password);
  await page.locator('input[name="confirmPassword"]').fill(user.confirmPassword);

  if (user.gender === 'male') {
    await page.check('input#male');
  } else if (user.gender === 'female') {
    await page.check('input#female');
  } else if (user.gender === 'preferNotToSay') {
    await page.check('input#preferNotToSay');
  }

  if (user.dateOfBirth) {
    await page.fill('input#dob', user.dateOfBirth);
  }
  await page.locator('input[name="phone"]').fill(user.phoneNumber);
  await page.locator('input[name="address"]').fill(user.address);
  await page.locator('input[name="linkedIn"]').fill(user.linkedinUrl);
  await page.locator('input[name="github"]').fill(user.githubUrl);
  await page.locator('input[type="submit"][value="Submit"]').click();

}



async function verifyRegistrationSuccess(page) {
  const firstNameValue = await page.inputValue('#firstName');
    expect(firstNameValue).toBe('');
}

module.exports = { navigate, fillRegistrationForm, verifyRegistrationSuccess };


