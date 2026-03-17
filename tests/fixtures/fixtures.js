import {test as base} from 'playwright-bdd';
import { EcomLoginPage } from "../pages/ecomLoginPage";
import { EcomChangeNamePage } from "../pages/ecomChangeNamePage";


export const test = base.extend({
  ecomLoginPage: async ({ page }, use) => {
    const ecomLoginPage = new EcomLoginPage(page);
    await use(ecomLoginPage);
  },
  ecomChangeNamePage: async ({ page }, use) => {
    const ecomChangeNamePage = new EcomChangeNamePage(page);
    await use(ecomChangeNamePage);
  }
});

