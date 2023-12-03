
const { test, expect } = require('@playwright/test');


test('Validate Login', async ({ page }) => {
  await page.goto('https://www.amazon.com/');


  await expect(page).toHaveTitle(/Amazon.com/); 
  await page.getByRole('link', { name: 'Hello, sign in' }).click();
  await expect(page.getByRole('heading', { name: '  Sign in' })).toBeVisible();
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("dm4modi@gmail.com",{delay:300})
  await page.locator("//*[contains(@class,'a-button-input')]").click();
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("dhruvil155",{delay:300})
  await page.locator("//*[contains(@class,'a-button-input')]").click();
  const loggedInElement = await page.locator("//*[contains(text(),'Hello, Dhruvil')]");
  await expect(loggedInElement).toHaveText(/Hello, Dhruvil/);
  await page.close();
});