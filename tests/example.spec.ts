import test, { webkit, Page, expect, Browser } from '@playwright/test';
let page:Page
let browser:Browser


test.beforeAll (async() => {
browser =  await webkit.launch({headless: false});
page = await browser.newPage();
});

test ('welcome vardhan4444', async ()=>{

await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
await page.locator("[name='txtUserName']").fill("vardhan");
await page.locator("[name='txtPassword']").fill("keerthi@123");
await page.locator("[name='Submit']").click();
//await expect (page.locator("xpath=/html/body/div[3]/ul/li[1]").toContainText ("Welcome vardhan"));
await page.locator("xpath=//li[@name='Welcome vardhan']");
});



test.afterAll(async() => {
browser.close();
});
