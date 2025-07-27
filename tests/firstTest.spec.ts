import { chromium , test } from "@playwright/test";
test(`Test your Browser` , async() =>
{
     const browser = await chromium.launch({ headless: false, channel:'chrome' });
    const context= await browser.newContext();
   const page= await browser.newPage();
//manual way of invoking browser

await page.goto("https://www.amazon.in");
const url=page.url();
console.log(`URL visited is ${url}`);

});