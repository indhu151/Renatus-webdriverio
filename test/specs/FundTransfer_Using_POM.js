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
  Login as customer and click on fundtransfer
  Add the beneficiary and select the beneficiary
  transfer the amount
  verify the OTP and amount is transferred
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
import CustomerHomePage from "../POM/CustomerHomePage.js"
import FundTransferHomePage from "../POM/FundTransferHomePage.js"
import AddBeneficiaryPage from "../POM/AddBeneficiaryPage.js"
import OTPVerificationPage from "../POM/OTPVerificationPage.js"
describe("Online Banking",async()=>{
  let ApplicationNo
  let AccountNum=11
  let text3
  let debitnumber=1
  let debitpinno=12
  let custId=12
  let OTP
 
it("click on fund transfer",async ()=>{
 await CustomerHomePage.clickOnFundTransfer_btn()
 expect(await browser.getUrl()).to.includes("fund_transfer.php")
})
it("click on add beneficiary & navigate to add beneficiary page",async ()=>{
 await FundTransferHomePage.clickOnAddBeneficiary_btn()
 expect(await browser.getTitle()).to.equal("Add Beneficiary")
})

it("enter the beneficiary details and add it",async ()=>{
 await AddBeneficiaryPage.beneficiary_details()
 await AddBeneficiaryPage.alertPresentaccept()
})

it("fund transfer",async ()=>{
 await CustomerHomePage.clickOnFundTransfer_btn()
 expect(await browser.getTitle()).to.contains("Fund Transfer")
})

it("select the beneficiary",async ()=>{
 await FundTransferHomePage.select_beneficiary()
 await FundTransferHomePage.Amt_Trans()
 await FundTransferHomePage.remark_sent()
 await FundTransferHomePage.clickOnSend_btn()
})

it("OTP verify",async ()=>{
 expect(await browser.getTitle()).to.equal("OTP Verification")
 OTP=await OTPVerificationPage.otpnumber()
 console.log(`OTP is = ${OTP}`);
})

it("transaction verification",async ()=>{
 await OTPVerificationPage.verification_detail(OTP)
 const message=await OTPVerificationPage.trans_alertmessage()
 console.log(`Transaction message= ${message}`);
})  
  
})