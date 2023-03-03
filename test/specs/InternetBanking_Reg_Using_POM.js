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
  click on InternetBanking register and enter the details
  capture the customerId for login
  Login as customer
*/

import HomePage from "../POM/HomePage.js"
import OpenAccountPage from "../POM/OpenAccountPage.js"
import ConfirmPage from "../POM/ConfirmPage.js"
import StaffLoginPage from "../POM/StaffLoginPage.js"
import StaffHomePage from "../POM/StaffHomePage.js"
import ApprovePendingPage from "../POM/ApprovePendingPage.js"
import CreditCustomerPage from "../POM/CreditCustomerPage.js"
import ApplyDebitPage from "../POM/ApplyDebitPage.js"
import InternetBanking_RegisterPage from "../POM/InternetBanking_RegisterPage.js"
import InternetBanking_LoginPage from "../POM/InternetBanking_LoginPage.js"
describe("Online Banking",async()=>{
  let ApplicationNo
     let AccountNum=11
     let text3
     let debitnumber=1
     let debitpinno=12
     let custId=12
     
  it("move to internetBanking",async ()=>{
     await HomePage.moveToInternetBanking_mod()
    })
  
  it("click on register and navigate to register page",async ()=>{
     await HomePage.clickOnInternetBanking_Register_link()
     expect(await browser.getUrl()).to.include('ebanking_reg_form.php')
    })
  
  it("enter all the details for registration and submit",async ()=>{
    await InternetBanking_RegisterPage.details_CustID(AccountNum,debitnumber,debitpinno)
    await InternetBanking_RegisterPage.clickOnSubmit_Reg()
    })
  
  it("capture customerID from alertpopup and accept it",async ()=>{
    custId=await InternetBanking_RegisterPage.capture_Customer_ID()
    console.log("CustomerId ="+custId);
    })
  
  it("navigate to homepage",async ()=>{
    await HomePage.clickOnHome_link()
    expect(await browser.getTitle()).to.contain("Online Banking System")
  })
})
