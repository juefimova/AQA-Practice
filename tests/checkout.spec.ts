import {test, expect} from "@playwright/test";
import {ShopFacade} from "../facades/ShopFacade";
import {InventoryPage} from "../pages/InventoryPage";


test("Checkout test", async({page}) => {
    const shopFacade = new ShopFacade(page);
    await shopFacade.loginAndAddItemToCart('standard_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    const itemsCount = await inventoryPage.header.getCartItemsCount();
    await expect(itemsCount).toContain('1');

})