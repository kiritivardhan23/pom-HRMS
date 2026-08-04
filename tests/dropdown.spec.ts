
import { test, webkit, Page, expect, Browser, Locator, FrameLocator } from '@playwright/test';
import testcredjson from './testcred.json';
import dropdownvaluesjson from './dropdownvalues.json';

//global variables

let browser:Browser
let page:Page



test.beforeAll ('enter the url',async ()=> {
browser= await  webkit.launch({headless : false});
page= await  browser.newPage();
await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

});




test('verify dropdownlist',async ()=> {
 
let username : string =  await testcredjson.username;
let password : string =  await testcredjson.password;
 
 
await page.locator("[name = 'txtUserName']").fill(username);
await page.locator("[name='txtPassword']").fill(password);
await page.locator("[name='Submit']").click();

await expect (page.locator("xpath=/html/body/div[3]/ul/li[1]")).toHaveText("Welcome vardhan")

    let frame:FrameLocator = await page.frameLocator("xpath=//iframe[@id='rightMenu']");

      //await frame.locator ("[name='loc_code']").waitFor();

    let  droplist :Locator= await frame.locator ("[name='loc_code']");

    let  dropdownvalues:Locator = await droplist.locator("option");

    let  dropdownsize: number   = await dropdownvalues.count();

    console.log ("dropdownsize:" +dropdownsize);
     
    for (let i=0;i<dropdownsize;i++){

     let text:string | null =  await dropdownvalues.nth(i).textContent();
     console.log("text ");
    }
     

     let jsonvalues:string[]   = await dropdownvaluesjson.dropdownValues;
     let jsonlength: number    = await jsonvalues.length;
     console.log("jsonlength:" + jsonlength);
     for(let j=0;j<jsonlength;j++)
     {
        console.log(await jsonvalues[j]);

     }
});







test.afterAll (async ()=>{

browser.close();

});



   