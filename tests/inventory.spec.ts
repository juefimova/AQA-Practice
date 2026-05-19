import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {InventoryPage} from "../pages/InventoryPage";

test("Cart number",async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillUsername('standard_user');
    await loginPage.fillPassword('secret_sauce');
    await loginPage.submit();
    await expect(loginPage.page.url()).toContain(loginPage.expectedUrl);

    const inventory = new InventoryPage(page);
    const itemsCount = await inventory.header.getCartItemsCount();
    console.log(itemsCount);
})