
import test, { webkit, Page, expect, Browser, Locator, FrameLocator } from '@playwright/test';

//global variables
let page:Page
let browser:Browser
let frame:FrameLocator


test.beforeAll (async() => {
browser =  await webkit.launch({headless: false});

page = await browser.newPage();
});

test ('welcome vardhan', async ()=>{

await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
await page.locator("[name='txtUserName']").fill("vardhan");
await page.locator("[name='txtPassword']").fill("keerthi@123");
await page.locator("[name='Submit']").click();
//await page.waitForTimeout(40000);

/*let welcome : string | null = await page.locator("xpath=/html/body/div[3]/ul/li[1]").textContent();
if(welcome === "Welcome vardhan")
{
console.log ("successfully open welocme --valid");
}else
{
console.log("unable to open welcome page---not valid");
}
*/
//page.waitForTimeout(40000);
await expect (page.locator("xpath=/html/body/div[3]/ul/li[1]")).toHaveText("Welcome vardhan");
//await page.waitForTimeout(40000);
//await page.locator("xpath=//li[@text='Welcome vardhan']");


await page.locator("#pim").hover();
await page.locator("xpath=/html/body/div[4]/ul/li[2]/ul/li[2]/a/span").click();

let frame: FrameLocator  = await page.frameLocator("#rightMenu");

//page.waitForTimeout(40000);
//await frame.locator("[name = 'txtEmployeeId']").waitFor();
//await frame.locator("[name = 'txtEmployeeId']").fill ("00002");
await frame.locator ("[name='txtEmpLastName']").fill ("jf");
await frame.locator ("[name = 'txtEmpFirstName']").fill ("io");
await frame.locator("[name = 'txtEmpMiddleName']").fill ("j");

await frame.locator("[name='photofile']").waitFor();
await frame.locator("[name='photofile']").setInputFiles("C://Users//LENOVO//Desktop//2nfloorplan.PNG");


await frame.locator("#btnEdit").click();

await frame.locator("#btnEditPers").click();
await frame.locator("#DOB").fill("1994-03-05");
await frame.locator("#chkSmokeFlag").click();
await frame.locator("#gender2").click();
await frame .locator("#btnEditPers").click();



});


test.afterAll(async() => {
//await page.waitForTimeout(20000);
//page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();
//browser.close();
});


