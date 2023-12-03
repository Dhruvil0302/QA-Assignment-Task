const { test, expect } = require('@playwright/test');
test('Search Functionality', async ({ page }) => {
  
    await page.goto('https://www.amazon.com/');
    await expect(page).toHaveTitle(/Amazon.com/);
    await page.getByRole('link', { name: 'Hello, sign in' }).click();
    await expect(page.getByRole('heading', { name: '  Sign in' })).toBeVisible();
    await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("dm4modi@gmail.com",{delay:300})
    await page.locator("//*[contains(@class,'a-button-input')]").click();
    await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("dhruvil155",{delay:300})
    await page.locator("//*[contains(@class,'a-button-input')]").click();
    await page.locator("//input[@id='twotabsearchtextbox']").fill("car");
    await page.locator("//input[@id='nav-search-submit-button']").click();
    const loggedInElement = await page.locator("//span[@class='a-color-state a-text-bold']");
      await expect(loggedInElement).toHaveText(/"car"/);
      await page.close(); 
  });