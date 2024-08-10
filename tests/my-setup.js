const { test, expect } = require('@playwright/test');
const {} = process.env
exports.expect = expect
exports.test = test.extend({

    webApp: async ({page}, use) =>{
        await page.goto("https://qa-assessment.pages.dev/")
        await use(page)


    }
})


