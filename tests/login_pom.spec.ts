import {test} from '../fixtures';
import {expect} from "@playwright/test";

test("Successful Login", async({loginPage}) => {
    await loginPage.navigate();
    await loginPage.fillUsername('standard_user');
    await loginPage.fillPassword('secret_sauce');
    await loginPage.submit();
    await expect(loginPage.page.url()).toContain(loginPage.expectedUrl);
})