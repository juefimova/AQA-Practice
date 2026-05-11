import {test, expect} from '@playwright/test';

test('Calendar test', async({page}) => {
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html');
    await page.locator('.glyphicon-calendar').click();
    await page.locator('th.next').first().click();
    await page.locator('.day').filter({hasText: '15'}).click();

    await page.locator('.glyphicon-calendar').click();
    expect(page.locator('td.active.day').filter({hasText: '15'})).toHaveText('15'); //нет параметра value
})