const { test, expect } = require('@playwright/test');

test('Input Form Submit', async ({ page }) => {
    // Open the Selenium Playground
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Click on Input Form Submit
    await page.click('text=Input Form Submit');

    // Click Submit without filling in details
    await page.click('button[type="submit"]');

    // Validate error message
    const errorMessage = await page.textContent('.error-message');
    expect(errorMessage).toContain('Please fill in the fields');

    // Fill in form details
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@example.com');
    await page.selectOption('#country', { label: 'United States' });

    // Submit the form
    await page.click('button[type="submit"]');

    // Validate success message
    const successMessage = await page.textContent('.success-message');
    expect(successMessage).toContain('Thanks for contacting us, we will get back to you shortly.');
});
