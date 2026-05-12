import {test, expect} from '@playwright/test';

test('Waits test', async({page}) => {
    await page.goto('http://uitestingplayground.com/ajax');
    await page.locator('#ajaxButton').click();
    await expect(page.locator('#content')).toContainText('Data loaded with AJAX get request.', {timeout: 20000});
    //c просто toBeVisible тест в webkit падает
})