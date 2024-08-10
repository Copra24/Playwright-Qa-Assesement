const { expect } = require('@playwright/test');
const { UserData } = require('../FixturesFile/fixturesData');
const user = UserData();

async function navigate(page) {
  await page.goto('https://qa-assessment.pages.dev/');
}

async function fillAllFields(page) {
 
  await page.locator('input[name="firstName"]').fill(user.first_name[0]);
  await page.locator('input[name="lastName"]').fill(user.last_name[0]);
  await page.locator('input[name="email"]').fill(user.email_[0]);
  await page.locator('input[name="password"]').fill(user.password_[0]);
  await page.locator('input[name="confirmPassword"]').fill(user.confirm_password[0]);
  await page.check('input#male');
  await page.fill('input#dob', user.date_Of_birth[0]);
  await page.locator('input[name="phone"]').fill(user.phone_number[0]);
  await page.locator('input[name="address"]').fill(user.address_[0]);
  await page.locator('input[name="linkedIn"]').fill(user.linkedin_url[0]);
  await page.locator('input[name="github"]').fill(user.github_url[0]);
  await page.locator('input[type="submit"][value="Submit"]').click();

}
async function fillMandatoryFields(page) {
 
  await page.locator('input[name="firstName"]').fill(user.first_name[0]);
  await page.locator('input[name="lastName"]').fill(user.last_name[0]);
  await page.locator('input[name="email"]').fill(user.email_[0]);
  await page.locator('input[name="password"]').fill(user.password_[0]);
  await page.locator('input[name="confirmPassword"]').fill(user.confirm_password[0]);
  await page.locator('input[type="submit"][value="Submit"]').click();

}

async function fillOptionalFields(page) {
  
  await page.check('input#male');
  await page.fill('input#dob', user.date_Of_birth[0]);
  await page.locator('input[name="phone"]').fill(user.phone_number[0]);
  await page.locator('input[name="address"]').fill(user.address_[0]);
  await page.locator('input[name="linkedIn"]').fill(user.linkedin_url[0]);
  await page.locator('input[name="github"]').fill(user.github_url[0]);
 
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
  const addressField = page.locator('input[name="address"]');
  const linkedinUrl = page.locator('input[name="linkedIn"]');
  const githubField = page.locator('input[name="github"]');
  const submitButton = page.locator('input[type="submit"][value="Submit"]');
  const dobLabel = page.locator('label[for="dob"]');
  const addressLabel = page.locator('label[for="address"]');



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
    submitButton,
    dobLabel,
    addressLabel
  };

}

async function verifyRegistrationSuccess(page) {
  const firstNameValue = await page.inputValue('#firstName');
    expect(firstNameValue).toBe('');
}


module.exports = { navigate, fillAllFields, verifyRegistrationSuccess, fieldsLocators, fillMandatoryFields, fillOptionalFields };


