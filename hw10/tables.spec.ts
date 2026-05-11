import {test, expect, Locator} from '@playwright/test';

test('Table test', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
    const filteredString: Locator = page.locator('table#table1 tbody tr').filter({hasText: 'Doe'});

    await expect(filteredString.getByRole('cell', {name: 'Jason'})).toBeVisible();
    await expect(filteredString.getByRole('cell', {name: '$100.00'})).toBeVisible();
})