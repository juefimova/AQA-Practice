import {test, expect} from '@playwright/test';
import {createRandomUser} from "../factories/userFactory";
import {LoginPage} from "../pages/LoginPage";


test('Login page test using Factory', async ({page}) => {
    const loginPage = new LoginPage(page);
    const newUser = createRandomUser();
    await loginPage.navigate();
    await loginPage.fillUsername(newUser.username);
    await loginPage.fillPassword(newUser.password);
    await loginPage.submit();

    await expect(loginPage.expectedError).toContainText('Epic sadface: Username and password do not match any user in this service');

})