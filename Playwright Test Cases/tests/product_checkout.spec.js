const { test, expect } = require('@playwright/test');
test('Product Checkout', async ({ page }) => {
  
    await page.goto('https://www.amazon.com/');
    await expect(page).toHaveTitle(/Amazon.com/);
    await page.getByRole('link', { name: 'Hello, sign in' }).click();
    await expect(page.getByRole('heading', { name: '  Sign in' })).toBeVisible();
    await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("dm4modi@gmail.com",{delay:300})
    await page.locator("//*[contains(@class,'a-button-input')]").click();
    await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("dhruvil155",{delay:300})
    await page.locator("//*[contains(@class,'a-button-input')]").click();
    await page.getByPlaceholder('Search Amazon').fill('pendrive ');
    await page.getByLabel('pendrive 64 gb').click();
    await page.getByRole('heading', { name: 'SanDisk Cruzer Blade 64GB USB' }).getByRole('link').click();
    await page.goto('https://www.amazon.com/SanDisk-Cruzer-Blade-Drive-SDCZ50-064G-B35/dp/B00BX5FOCK/ref=sr_1_6?crid=G4830O36T9CS&keywords=pendrive%2B64%2Bgb&qid=1701621882&sprefix=pendrive%2B%2Caps%2C490&sr=8-6&th=1',{delay:300});
    await page.locator("input#add-to-cart-button").click();
    await page.locator('input.a-button-input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]',{delay:300}).click();
    await page.locator('input[name="proceedToRetailCheckout"][data-feature-id="proceed-to-checkout-action"].a-button-input[type="submit"][value="Proceed to checkout"][aria-labelledby="sc-buy-box-ptc-button-announce"]').click({ timeout: 60000 });
  });
