import { chromium , test } from "@playwright/test";
test(`Test your Browser` , async() =>
{
     const browser = await chromium.launch({ headless: false, channel:'chrome' });
    const context= await browser.newContext();
   const page= await browser.newPage();
//manual way of invoking browser

await page.goto("https://login.salesforce.com/?locale=in");
const url=page.url();
console.log(`URL visited is ${url}`);

await page.locator("#username").fill("ravindran.ramdas@testleaf.com");
await page.locator("#password").fill("RaviSalesTest#1432");

await page.locator("#Login").click();
await page.waitForTimeout(3000);
});