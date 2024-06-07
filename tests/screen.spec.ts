import {test, expect} from '@playwright/test';

test('home page visual test', async ({page}) => {
  await page.goto('https://www.browsercat.com');
  await expect(page).toHaveScreenshot();
});