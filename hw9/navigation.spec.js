import { test, expect } from '@playwright/test';

test('Go to url', async({page}) => {
    await page.goto('https://demoqa.com/',{waitUntil: 'domcontentloaded'});

    await expect(page).toHaveTitle('demosite'); // тут в title demosite а не DEMOQA, поэтому я поменяла
} )