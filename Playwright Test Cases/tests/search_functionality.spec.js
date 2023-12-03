const { test, expect } = require('@playwright/test');
test('Search Functionality', async ({ page }) => {
  
    await page.goto('https://www.amazon.com/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Amazon.com/);
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Hello, sign in' }).click();
  
    // Expects page to have a heading with the name of Sign in.
    await expect(page.getByRole('heading', { name: '  Sign in' })).toBeVisible();
  
    //Add email id
    // @ts-ignore
    await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("dm4modi@gmail.com",{delay:300})
  
    //click on continue button
    await page.locator("//*[contains(@class,'a-button-input')]").click();
  
    //add password
    // @ts-ignore
    await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("dhruvil155",{delay:300})
  
    //click on signin button
    await page.locator("//*[contains(@class,'a-button-input')]").click();
    
    //search laptop
    await page.locator("//input[@id='twotabsearchtextbox']").fill("car");
    //click on search icon
    await page.locator("//input[@id='nav-search-submit-button']").click();
  
    //assert Search Functionality and Validate Search Result
    const loggedInElement = await page.locator("//span[@class='a-color-state a-text-bold']");
      await expect(loggedInElement).toHaveText(/"car"/);
  
      //close the browser
      await page.close(); 
  });