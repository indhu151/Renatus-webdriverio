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
    let custId=12
    let OTP
     it("navigate to application",async ()=>{
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Banking_System/")
       let title=await browser.getTitle()
       expect(title).to.equal("Online Banking System")
   })
     it("click on openAccount",async ()=>{
       await HomePage.clickOnOpenAccount_link()
       let title=await browser.getTitle();
       expect(title).to.include("Registration Form")
   })
     it("Enter all the valid details",async ()=>{
       await OpenAccountPage.validDetails()
   })
     it("click on submit",async ()=>{
       await OpenAccountPage.clickOnSubmit_btn()
   })
     it("confirm",async ()=>{
       let title=await browser.getTitle();
       expect(title).to.equal("Confirm")
       await ConfirmPage.clickOnConfirm_btn()
       await ConfirmPage.isAlertPresent()
       ApplicationNo= await ConfirmPage.capture_ApplicationNo()
       console.log("Application_Number ="+ApplicationNo);
   })
     it("click on staffLogin",async ()=>{
       await HomePage.clickOnStaffLogin_link()
       expect(await browser.getTitle()).to.include("Staff Page")
   })
   it("Navigate to StaffLogin Page",async ()=>{
       await StaffLoginPage.StaffLogin_details()
       let title=await browser.getTitle();
       expect(title).to.equal("Staff Home")
     })
   it("click on approve pending",async ()=>{
       await StaffHomePage.clickOnApprovePending_btn()
       expect(await browser.getTitle()).to.equal("Pending Customers")
       await ApprovePendingPage.searchApplication_Approve(ApplicationNo)
       AccountNum=await ApprovePendingPage.capture_AccountNumber()
       console.log("Account number ="+AccountNum);
     })
   it("Navigate to staff Homepage",async ()=>{
       await StaffHomePage.clickOnStaff_home_link()
       expect(await browser.getUrl()).to.include("staff_profile.php")
     })
   it("click on credit customer_btn",async ()=>{
       await StaffHomePage.clickOnCreditCust_btn()
       expect(await browser.getUrl()).to.include("credit_customer_ac.php")
   })
   it("enter the credit details",async()=>{
       await CreditCustomerPage.credit_Amount(AccountNum)
   })
   it("Logout of staffHome page",async ()=>{
      await CreditCustomerPage.logout_Link()
      expect(await browser.getTitle()).to.equal("Staff Page")
   })
   it("click on home button",async ()=>{
     await HomePage.clickOnHome_link()
     expect(await browser.getTitle()).to.equal("Online Banking System")
   })
   it("click on ApplyDebit",async ()=>{
     await HomePage.clickOnApplyDebit_link()
     expect(await browser.getUrl()).to.include('debit_card_form.php')
   })
 it("Enter the valid details",async ()=>{
     await ApplyDebitPage.details_for_Debit(AccountNum)
     await ApplyDebitPage.clickOnSubmit_debit()
   })
 it("get the text in alert and accept",async ()=>{
     text3=await ApplyDebitPage.alertText()
   })
 it("get debit num and pin",async ()=>{
     debitnumber=await ApplyDebitPage.capture_Debit_Num(text3)
     debitpinno=await ApplyDebitPage.capture_Debit_Pin(text3)
     console.log("debit num ="+debitnumber);
     console.log("debitpin="+debitpinno);
   })
 it("click on home button",async ()=>{
     await HomePage.clickOnHome_link()
     expect(await browser.getTitle()).to.equal("Online Banking System")
   })
   
})