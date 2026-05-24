import {Page, Locator} from "@playwright/test";

export class Header {
    readonly page: Page;
    readonly cartIcon: Locator;
    readonly cartCount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartIcon = page.locator('[ииdata-test="shopping-cart-link"]');
        this.cartCount = this.cartIcon.locator('[data-test="shopping-cart-badge"]');
    }

    async getCartItemsCount(): Promise<string> {
        if(await this.cartCount.isVisible()){
            return await this.cartCount.innerText();
        }
        else return '0';

    }
}