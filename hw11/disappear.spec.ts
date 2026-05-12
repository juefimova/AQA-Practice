import {test, expect} from '@playwright/test';

test('Disappear test', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    await page.locator('button[onclick="swapCheckbox()"]').click();
    await expect(page.locator('#loading')).toBeHidden({timeout: 20000}); //в firefox падало без таймаута
    await expect(page.locator('#message')).toBeVisible();
})