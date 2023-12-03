# Amazon.in Login Test
### Overview
- This is a Playwright test script designed to automate the login process for a WordPress site. 
- The test case covers navigating to the login page, entering a username and password, clicking the 'Log In' button, and then navigating to the WordPress admin dashboard followed by the logout page.

### Prerequisites
- Before running this test, make sure you have the necessary dependencies installed, including Playwright.

````
npm install @playwright/test
````
### How to Run the Test
- To execute the test, run the following command:

````
npx playwright test <filename>.js
````
- Replace <filename> with the name of the file containing the test script.

### Test Steps
1. Navigate to the WordPress login page at https://zongericht.wp-site.xyz/wp-admin.
2. Fill in the username field with 'Guest'.
3. Fill in the password field with 'Thessa1472'.
4. Click the 'Log In' button.
5. Navigate to the WordPress admin dashboard.
6. Navigate to the logout page at https://zongericht.wp-site.xyz/wp-login.php?loggedout=true&wp_lang=en_US.
