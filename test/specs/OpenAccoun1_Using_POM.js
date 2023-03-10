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
import { expect } from "chai"
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
})