import {test, expect} from "@playwright/test";
import {PopupPage} from "../pages/PopupPage";

test('Open and Close Modal window', async({page}) => {
    const popup = new PopupPage(page);
    await popup.navigate();
    await popup.openWindow();
    await expect(popup.window).toBeVisible();
    await popup.readMessage();
    await popup.closeWindow();
    await expect(popup.window).toBeHidden();
})