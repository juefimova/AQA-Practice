import {test, expect, FrameLocator, Locator} from '@playwright/test';

test('IFrame test', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');
    const frame: FrameLocator =  page.frameLocator('#mce_0_ifr');
    const editor: Locator = frame.locator('#tinymce');
    await editor.click();
    await editor.fill('Hello from the inside!');

    await expect(editor).toContainText('Hello from the inside!');
    //нет разрешения на редактирование на самой странице

})