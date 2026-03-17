import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

When('I click on {string} on change account information page' , async ({ ecomChangeNamePage, ecomLoginPage }, buttonName) => {
    if (buttonName === 'Edit your account information') {
        await ecomChangeNamePage.clickOnEditMyAccount();
    }
});

When('I click on submit button', async ({ ecomChangeNamePage }) => {
    await ecomChangeNamePage.clickOnContinue();
});

When('I change first name to {string}', async ({ ecomChangeNamePage }, firstName) => {
    await ecomChangeNamePage.editFirstName(firstName);
});

When('I change last name to {string}', async ({ ecomChangeNamePage }, lastName) => {
    await ecomChangeNamePage.editLastName(lastName);
});

When('I click on Continue button', async ({ ecomChangeNamePage }) => {
    await ecomChangeNamePage.clickOnContinue();
});

Then('I should see the success message {string}', async ({ ecomChangeNamePage }, message) => {    
    await expect(ecomChangeNamePage.verifyUserGetSuccessMessage).toContainText(new RegExp(message));
});
