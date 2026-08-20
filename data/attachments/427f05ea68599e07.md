# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: popup.spec.ts >> Open and Close Modal window
- Location: tests/popup.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://webdriveruniversity.com/Popup-Alerts/index.html", waiting until "load"

```

# Test source

```ts
  1  | import {Page, Locator} from "@playwright/test";
  2  | 
  3  | export class PopupPage {
  4  |     readonly page: Page;
  5  |     readonly clickButton: Locator;
  6  |     readonly window: Locator;
  7  |     readonly message: Locator;
  8  |     readonly closeButton: Locator;
  9  | 
  10 |     constructor(page: Page) {
  11 |         this.page = page;
  12 |         this.clickButton = page.locator('#button2');
  13 |         this.window = page.locator('.modal-content');
  14 |         this.message = this.window.locator('.modal-body p');
  15 |         this.closeButton = this.window.locator('.btn.btn-default');
  16 |     }
  17 | 
  18 |     async navigate(): Promise<void> {
> 19 |         await this.page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html');
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  20 | 
  21 |     }
  22 | 
  23 |     async openWindow(): Promise<void> {
  24 |         await this.clickButton.click();
  25 |     }
  26 | 
  27 |     async readMessage(): Promise<string> {
  28 |         return this.message.innerText()
  29 |     }
  30 | 
  31 |     async closeWindow(): Promise<void> {
  32 |         await this.closeButton.click();
  33 |     }
  34 | 
  35 | }
```