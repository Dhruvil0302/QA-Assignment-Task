# QA-Assignment-Task 📝
---
## Test Automation with Playwright
- This repository is dedicated to the automated testing functionalities on Amazon.com using the Playwright framework. 
- The test suite covers various scenarios.The primary test cases include:

| Test Objective | Expected Result |
| ------------- | ------------- |
| Go to Amazon.com  | Validate Login  |
| Product Checkout | Should be able to add product to cart and perform checkout action  |
|Search Functionality | Validate Search Result  |
| Wishlist Functionality | Validate Product Wishlist functionality  |

---
## Installation 🛠️
1. Open a terminal.
2. Navigate to your project directory using the `cd` command
3. Install Playwright using npm:
    - ```npm init playwright@latest```

That's it! You have successfully installed Playwright in your project. You can explore the Playwright documentation for more advanced features and examples: https://playwright.dev/docs/intro

## How to Run ▶️
- By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers. This can be configured in the playwright.config file. 
- Tests are run in <b>headless mode</b> meaning no browser will open up when running the tests.
    - `npx playwright test`
- If you want to run your Playwright script in **headed mode**, which means you can see the browser UI while the tests are running, you can do the following
    - `npx playwright test --headed`
---
### Test Case 1 : Validate Login
1. To <b>Validate Login</b> Test Case run the below command in terminal
    - ``npx playwright test ./tests/validate_login.spec.js --project=chromium --headed``
2. To run a Playwright script across all browsers, you can use  below command in terminal 
     - ``npx playwright test ./tests/validate_login.spec.js --headed``
3. View Test Results:
     - ``npx playwright show-report``

### Test Case 2 : Product Checkout
1. To <b>Product Checkout</b> Test Case run the below command in terminal
    - ``npx playwright test ./tests/product_checkout.spec.js --project=chromium --headed``
2. To run a Playwright script across all browsers, you can use  below command in terminal 
     - ``npx playwright test ./tests/product_checkout.spec.js --headed``
3. View Test Results:
     - ``npx playwright show-report``

### Test Case 3 : Search Functionality
1. To <b>Search Functionality</b> Test Case run the below command in terminal
    - ``npx playwright test ./tests/search_functionality.spec.js --project=chromium --headed``
2. To run a Playwright script across all browsers, you can use  below command in terminal 
     - ``npx playwright test ./tests/search_functionality.spec.js --headed``
3. View Test Results:
     - ``npx playwright show-report``

### Test Case 4 : Wishlist Functionality
1. To <b>Wishlist Functionality</b> Test Case run the below command in terminal
    - ``npx playwright test ./tests/wishlist_functionality.spec.js --project=chromium --headed``
2. To run a Playwright script across all browsers, you can use  below command in terminal 
     - ``npx playwright test ./tests/wishlist_functionality.spec.js --headed``
3. View Test Results:
     - ``npx playwright show-report``
---
## Help Manual 📘
**Amazon Help manual**: https://docs.google.com/document/d/1SPet-WQnVE2cXd9Axo49ntfmBhWIokUXKj4WhFHNaIY/edit?usp=sharing

---
## Manual Testing 🕵️‍♂️
**rtPanel Test cases**: https://docs.google.com/spreadsheets/d/1HUwDLhzqC7ah5Kczcta655QG18KT6Bbbx7mC_db2m30/edit?usp=sharing

**rtPanel UI Bug🐛**: https://github.com/Dhruvil0302/QA-Assignment-Task/issues
