import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page; // readonly для локаторов и компонентов
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly expectedUrl: string;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.expectedUrl = 'https://www.saucedemo.com/inventory.html';
    }

    async navigate(): Promise<void> {
        await this.page.goto('/'); // перейдет по ссылке в baseUrl
    }

    async fillUsername(name: string): Promise<void> { // async для методов
        await this.usernameInput.fill(name);
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }


    async submit(): Promise<void> {
        await this.loginButton.click();
    }
}
