import { test, expect } from '@playwright/test';
import {LoginPage} from "../pages/LoginPage";

const credentials = [
    { username: 'locked_out_user', password: 'secret_sauce',
        expectedError: 'Epic sadface: Sorry, this user has been locked out.' },

    { username: 'standard_user', password: 'wrong_password',
        expectedError: 'Epic sadface: Username and password do not match any user in this service' },

    { username: '', password: 'secret_sauce', expectedError: 'Epic sadface: Username is required' }
];

for(const data of credentials) {
    test(`Login test for ${data.username}`, async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.fillUsername(data.username);
        await loginPage.fillPassword(data.password);
        await loginPage.submit();

        await expect(loginPage.expectedError).toContainText(data.expectedError);

    })
}
