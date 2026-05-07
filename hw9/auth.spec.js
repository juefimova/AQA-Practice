import {test, expect} from "@playwright/test";

test.beforeEach('test',async({page}) => {
    await page.goto('/'); //будет использоваться base url из config
})

test('Succesful user login', async({page}) => {
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();

await expect(page).toHaveURL('/inventory.html');
await expect(page.locator('[data-test="title"]')).toBeVisible();
})


test('Login with valid name and invalid password', async({page}) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('random');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
})