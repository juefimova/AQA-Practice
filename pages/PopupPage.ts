import {Page, Locator} from "@playwright/test";

export class PopupPage {
    readonly page: Page;
    readonly clickButton: Locator;
    readonly window: Locator;
    readonly message: Locator;
    readonly closeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickButton = page.locator('#button2');
        this.window = page.locator('.modal-content');
        this.message = this.window.locator('.modal-body p');
        this.closeButton = this.window.locator('.btn.btn-default');
    }

    async navigate(): Promise<void> {
        await this.page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html');

    }

    async openWindow(): Promise<void> {
        await this.clickButton.click();
    }

    async readMessage(): Promise<string> {
        return this.message.innerText()
    }

    async closeWindow(): Promise<void> {
        await this.closeButton.click();
    }

}