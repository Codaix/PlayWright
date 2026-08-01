// @ts-check
import { test, expect } from '@playwright/test';

test('login-test', async ({page})=>{ 
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('Input[id="username"]','student');
  await page.fill('Input[id="password"]','Password123');
  await page.click('button[id ="submit"]');
  const h1 = page.locator('h1[class="post-title"]');
  await expect(h1).toHaveText("Logged In Successfully");
  
});




























test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
