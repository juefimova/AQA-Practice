import {Locator, Page} from '@playwright/test';
import{Header} from "../components/Header";

export class InventoryPage {
    readonly page: Page;
    readonly header: Header;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    }
    
}