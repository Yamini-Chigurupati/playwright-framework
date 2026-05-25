import { test, expect } from '@playwright/test';

test('Login page title validation', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await expect(page).toHaveTitle('Swag Labs');

  const title = await page.title();

  console.log('Page title is:', title);
await expect(page).toHaveURL('https://www.saucedemo.com/');
console.log('Current URL is:', page.url());});