/*Launch the browser and application
  click on open account module
  enter all the valid details and click on submit
  Capture the application number generated in the popup 
  click on ok in the popup
  click on staff login and enter the login details
  click on approve pending in staff home page
  Enter the application number and click on search 
  click on approve to generate account number
  capture the account number from alert popup and accept it
*/

import HomePage from "../POM/HomePage.js"
import OpenAccountPage from "../POM/OpenAccountPage.js"
import ConfirmPage from "../POM/ConfirmPage.js"
import StaffLoginPage from "../POM/StaffLoginPage.js"
import StaffHomePage from "../POM/StaffHomePage.js"
import ApprovePendingPage from "../POM/ApprovePendingPage.js"
describe("Online Banking",async()=>{
  let ApplicationNo
  let AccountNum=11
  it("navigation to application",async ()=>{
     await browser.maximizeWindow()
     await browser.url("http://testingserver/domain/Online_Banking_System/")
     expect(browser).toHaveUrlContaining("Online_Banking_System/")
   })
   it("click on openAccount",async ()=>{
     await HomePage.clickOnOpenAccount()
     console.log(browser.getTitle());
     expect(browser).toHaveTitleContaining('Registration Form')
   })
   it("Enter all the valid details",async ()=>{
     await OpenAccountPage.validDetails()
   })
   it("click on submit",async ()=>{
       await OpenAccountPage.clickOnSubmit()
     })
   it("confirm",async ()=>{
      console.log(browser.getTitle());
      expect(browser).toHaveTitleContaining("Confirm")
      await ConfirmPage.clickOnConfirm()
      await ConfirmPage.isAlertPresent()
      ApplicationNo= await ConfirmPage.ApplicationNo()
      console.log("Application_Number ="+ApplicationNo);
     })
   it("click on staffLogin",async ()=>{
     await HomePage.clickOnStaffLogin()
     console.log(browser.getTitle());
     expect(browser).toHaveTitleContaining("Staff Page")
   })
 it("Navigate to StaffLogin Page",async ()=>{
     await StaffLoginPage.StaffLoginMod()
     console.log(browser.getTitle());
     expect(browser).toHaveTitleContaining("Staff Home")
   })
 it("click on approve pending",async ()=>{
     await StaffHomePage.clickOnApprovePending()
     console.log(browser.getTitle());
     expect(browser).toHaveTitleContaining("Pending Customers")
     await ApprovePendingPage.searchApplicationAndApprove(ApplicationNo)
     AccountNum=await ApprovePendingPage.AccountNumber()
     console.log("Account number ="+AccountNum);
   })
})