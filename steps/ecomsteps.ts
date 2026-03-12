import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({ page }, url: string) => {
  await page.goto(url);
});

Given('I click on {string}', async ({ page }, name: string) => {
  await page.getByRole('button', { name }).click();
});

Given('I enter E-Mail Address {string}', async ({ page }, email: string) => {
  await page.getByPlaceholder('E-Mail Address').fill(email);
});

Given('I enter password {string}', async ({ page }, pass: string) => {
  await page.getByPlaceholder('Password').fill(pass);
});

Then('I should verify url contains {string}', async ({ page }, expectedUrl: string) => {
  await expect(page).toHaveURL(new RegExp(expectedUrl));
});

Then('I click on login button', async ({ page }) => {
  await page.locator("input[value='Login']").click();
});

Then('I should verify user is not able to login and url contains {string}', async ({ page }, expectedUrl: string) => {
  await expect(page).toHaveURL(new RegExp(expectedUrl));
});