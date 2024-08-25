const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    projects: [
        {
            name: 'macOS-Chrome',
            use: {
                browserName: 'chromium',
                headless: true,
                video: 'on',
                trace: 'on',
                screenshot: 'on',
                // LambdaTest configurations
                connectOptions: {
                    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
                        browserName: 'Chrome',
                        browserVersion: 'latest',
                        platform: 'macOS Catalina',
                        resolution: '1920x1080',
                        network: true,
                        visual: true,
                        video: true,
                        console: true,
                        name: 'macOS-Chrome Test',
                        build: 'playwright101-lambdatest Build',
                        user: process.env.LT_USERNAME,
                        accessKey: process.env.LT_ACCESS_KEY
                    }))}`,
                },
            },
        },
        {
            name: 'macOS-Edge',
            use: {
                browserName: 'chromium',  // Edge is also Chromium-based
                headless: true,
                video: 'on',
                trace: 'on',
                screenshot: 'on',
                // LambdaTest configurations
                connectOptions: {
                    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
                        browserName: 'MicrosoftEdge',
                        browserVersion: 'latest',
                        platform: 'macOS Catalina',
                        resolution: '1920x1080',
                        network: true,
                        visual: true,
                        video: true,
                        console: true,
                        name: 'macOS-Edge Test',
                        build: 'playwright101-lambdatest Build',
                        user: process.env.LT_USERNAME,
                        accessKey: process.env.LT_ACCESS_KEY
                    }))}`,
                },
            },
        },
    ],
    use: {
        baseURL: 'https://www.lambdatest.com/selenium-playground',
        screenshot: 'on',
        trace: 'on',
    },
    reporter: [['html', { open: 'always' }]],
});
