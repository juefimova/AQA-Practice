import {test, expect} from "@playwright/test";
test('Succesful user login', async({page}) => {
    await page.goto('https://demoqa.com/checkbox');
    await page.locator('.rc-tree-switcher.rc-tree-switcher_close').click();
    await page.getByLabel('Select Desktop').check();
    await expect(page.locator('.text-success')).toContainText(['desktop','notes','commands']);
})