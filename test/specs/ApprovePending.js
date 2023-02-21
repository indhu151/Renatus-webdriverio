/**
 * click on approve pending
 * enter the application number
 * click on approve
 * Account number is generated
 */


//  let importclass=require("./test/specs/OpenAccount.js")
// // // console.log("*********************"+appno);
//  console.log("*****************************************"+importclass.appno);

//console.log(OpenAccount.appno);
describe("Approve pending", ()=>{
    it("click on staffLogin",async ()=>{
        browser.url("http://testingserver/domain/Online_Banking_System/index.php")
        $('=Staff Login').click()
        console.log(browser.getTitle());
        await expect(browser).toHaveTitleContaining("Staff Page")
    })
    it("Login",async ()=>{
        await $('//input[@name="staff_id"]').setValue(210001)
        await $('//input[@name="password"]').setValue("password")
        await $('//input[@name="staff_login-btn"]').click()
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitleContaining("Staff Home")
    })
    it("click on approve pending",async ()=>{
        await $('//input[@name="apprvac"]').click()
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitleContaining("Pending Customers")
        await $('//input[@name="application_no"]').setValue(applicationno)
        await $('//input[@name="search_application"]').click()
    })  
    it("click on ",async ()=>{
        const approve=await $('//input[@name="approve_cust"]')
        approve.waitForDisplayed()
          approve.click()
        console.log(browser.isAlertOpen())
        const text1= await browser.getAlertText()
           var matches1 = text1.match(/(\d+)/);
           console.log(matches1);
           accono=matches1[0];
           console.log("Account_Number ="+accno);
        await browser.acceptAlert()
    })
    it("Logout of staffHome page",async ()=>{
        await $('//input[@name="logout_btn"]').click()
        console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Staff Page")
    })
    it("click on home button",async ()=>{
        await $('=Home').click()
        console.log(browser.getTitle());
        await expect(browser).toHaveTitleContaining("Online Banking System")
    })
})