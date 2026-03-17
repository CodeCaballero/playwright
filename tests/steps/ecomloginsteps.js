import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures.js';

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ ecomLoginPage }, url) => {
  await ecomLoginPage.navigateToUrl(url);
});

Given('I click on {string}', async ({ ecomLoginPage }, name) => {
  await ecomLoginPage.clickOnMyAccount();
});

Given('I enter E-Mail Address {string}', async ({ ecomLoginPage }, email) => {
  await ecomLoginPage.enterEmailAddress(email);
});

Given('I enter password {string}', async ({ ecomLoginPage }, pass) => {
  await ecomLoginPage.enterPassword(pass);
});

Then('I should verify url contains {string}', async ({ ecomLoginPage }, expectedUrl) => {
  await ecomLoginPage.verifyUserLandOnAccountPage(expectedUrl);
});

When('I click on login button', async ({ ecomLoginPage }) => {
  await ecomLoginPage.clickOnSubmit();
});

Then('I should verify user is not able to login and url contains {string}', async ({ ecomLoginPage }, expectedUrl) => {
  await ecomLoginPage.verifyUserIsNotAbleToLogin(expectedUrl);
});