const { test, expect } = require('@playwright/test');

test('Drag & Drop Sliders', async ({ page }) => {
    // Open the Selenium Playground
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Click on Drag & Drop Sliders
    await page.click('text=Drag & Drop Sliders');

    // Adjust the slider to 95
    const slider = await page.$('input[type="range"]');
    await slider.evaluate(slider => slider.value = 95);
    const sliderValue = await page.$eval('#range', el => el.textContent);
    expect(sliderValue).toBe('95');
});
