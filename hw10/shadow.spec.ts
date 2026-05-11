import {test, expect} from '@playwright/test';

test('Shadow DOM test', async({page}) => {
    await page.goto('http://uitestingplayground.com/shadowdom');
    await page.locator('#buttonGenerate').click();

    await expect(page.locator('#editField')).not.toBeEmpty();
})