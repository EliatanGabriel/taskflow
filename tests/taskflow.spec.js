const { test, expect } = require('@playwright/test');

test('Página inicial do TaskFlow', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500');

  await expect(page).toHaveTitle(/TaskFlow/);
});