const { test, expect } = require('@playwright/test');

test('Simple Form Demo', async ({ page }) => {
    // Open the Selenium Playground
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Click on Simple Form Demo
    await page.click('text=Simple Form Demo');

    // Validate URL
    await expect(page).toHaveURL(/.*simple-form-demo/);

    // Enter message and validate
    const message = 'Welcome to LambdaTest';
    await page.fill('#user-message', message);
    await page.click('#showInput');
    const displayedMessage = await page.textContent('#message');
    expect(displayedMessage).toContain(message);
});
