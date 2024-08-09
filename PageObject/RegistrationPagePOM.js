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
  await page.check('input#male');
  await page.fill('input#dob', user.dateOfBirth);
  await page.locator('input[name="phone"]').fill(user.phoneNumber);
  await page.locator('input[name="address"]').fill(user.address);
  await page.locator('input[name="linkedIn"]').fill(user.linkedinUrl);
  await page.locator('input[name="github"]').fill(user.githubUrl);
  await page.locator('input[type="submit"][value="Submit"]').click();

}

async function fieldsLocators(page){
  const firstName = page.locator('input[name="firstName"]');
  const lastName = page.locator('input[name="lastName"]');
  const email =  page.locator('input[name="email"]');
  const password = page.locator('input[name="password"]');
  const confirmPassword = page.locator('input[name="confirmPassword"]');
  const genderMale = page.locator('input#male');
  const genderFemale = page.locator('input#female');
  const genderPNTS = page.locator('input#preferNotToSay');
  const dob = page.locator('input#dob');
  const phoneNumber = page.locator('input[name="phone"]')
  const addressField = page.locator('input[name="address"]')
  const linkedinUrl = page.locator('input[name="linkedIn"]')
  const githubField = page.locator('input[name="github"]')
  const submitButton = page.locator('input[type="submit"][value="Submit"]')

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    genderMale,
    genderFemale,
    genderPNTS,
    dob,
    phoneNumber,
    addressField,
    linkedinUrl,
    githubField,
    submitButton
  };

}

async function verifyRegistrationSuccess(page) {
  const firstNameValue = await page.inputValue('#firstName');
    expect(firstNameValue).toBe('');
}

module.exports = { navigate, fillRegistrationForm, verifyRegistrationSuccess, fieldsLocators };


