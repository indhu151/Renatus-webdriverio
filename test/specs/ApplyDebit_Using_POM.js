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