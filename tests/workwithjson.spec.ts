import test, { webkit, Page, expect, Browser, Locator, FrameLocator } from '@playwright/test';
import testcredjson from './testcred.json';


//global variables
let browser: Browser
let page: Page


test.beforeAll(async ()=>{
    browser = await webkit.launch ({headless:false});
    page = await browser.newPage();

});

test ('verify welcome vardhan',async ()=> {
await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

let username: string = await testcredjson.username;
let password: string = await testcredjson.password;

await page.locator("[name = 'txtUserName']").fill(username);
await page.locator("[name='txtPassword']").fill(password);
await page.locator("[name='Submit']").click();
await expect(page.locator ("xpath= /html/body/div[3]/ul/li[1]")).toHaveText("Welcome vardhan");
await page.getByText("PIM").hover();
await page.getByText("Add Employee").click();



});





test.afterAll(async ()=> {

    await browser.close();

});