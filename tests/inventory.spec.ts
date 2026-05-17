import {test, expect} from "@playwright/test";
import {InventoryPage} from "../pages/InventoryPage";

test("Cart number",async({page}) => {
    const inventory = new InventoryPage(page);
    const itemsCount = await inventory.header.getCartItemsCount();
    console.log(itemsCount);
})