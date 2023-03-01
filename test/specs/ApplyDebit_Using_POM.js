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
  Logout from staffHome Page
  click on ApplyDebit in homepage
  Enter all the valid details and click on submit
  capture the debitnum and pin from alert popup and accept it
*/
import HomePage from "../POM/HomePage.js"
import OpenAccountPage from "../POM/OpenAccountPage.js"
import ConfirmPage from "../POM/ConfirmPage.js"
import StaffLoginPage from "../POM/StaffLoginPage.js"
import StaffHomePage from "../POM/StaffHomePage.js"
import ApprovePendingPage from "../POM/ApprovePendingPage.js"
import CreditCustomerPage from "../POM/CreditCustomerPage.js"
import ApplyDebitPage from "../POM/ApplyDebitPage.js"
describe("Online Banking",async()=>{
  let ApplicationNo
  let AccountNum=11
  let text3
  let debitnumber=1
  let debitpinno=12
  
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
 it("click on homebutton of staffpage",async ()=>{
   await StaffHomePage.clickOnHomebt_Staff()
   expect(browser).toHaveUrlContaining("staff_profile.php")
 })
 it("click on credit customer",async ()=>{
   await StaffHomePage.clickOnCreditCust()
   expect(browser).toHaveUrlContaining("credit_customer_ac.php")
 })
 it("enter the credit details",async()=>{
   await CreditCustomerPage.creditAmount(AccountNum)
 })
 it("Logout of staffHome page",async ()=>{
     await CreditCustomerPage.logoutLink()
     console.log(browser.getTitle())
     expect(browser).toHaveTitleContaining("Staff Page")
 })
 it("click on home button",async ()=>{
   await HomePage.clickOnHome()
   console.log(browser.getTitle());
   expect(browser).toHaveTitleContaining("Online Banking System")
 })
 it("click on ApplyDebit",async ()=>{
   await HomePage.clickOnApplyDebit()
   expect(browser).toHaveUrlContaining('debit_card_form.php')
 })
it("Enter the vlid details",async ()=>{
   await ApplyDebitPage.details_for_Debit(AccountNum)
   await ApplyDebitPage.clickOnSubmit_debit()
 })
it("get the text in alert and accept",async ()=>{
   text3=await ApplyDebitPage.alertText()
 })
it("get debit num and pin",async ()=>{
   debitnumber=await ApplyDebitPage.Debit_Num(text3)
   debitpinno=await ApplyDebitPage.Debit_Pin(text3)
   console.log("debit num ="+debitnumber);
   console.log("debitpin="+debitpinno);
 })
   
})