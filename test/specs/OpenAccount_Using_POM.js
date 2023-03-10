/**
 * Launch the browser
 * Open the application
 * click on open Account
 * enter the valid details
 * click on submit
 * click on reconfirm
 */
//const HomePage=require("../POM/HomePage")
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
      it("navigate to application-smoke",async ()=>{
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
      it("click on staffLogin-smoke",async ()=>{
        await HomePage.clickOnStaffLogin_link()
        expect(await browser.getTitle()).to.include("Staff Page")
    })
    it("Navigate to StaffLogin Page-smoke",async ()=>{
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
  it("move to internetBanking",async ()=>{
     await HomePage.moveToInternetBanking_mod()
     await HomePage.clickOnInternetBanking_Register_link()
     expect(await browser.getUrl()).to.include('ebanking_reg_form.php')
    })
  it("enter all the details for registration",async ()=>{
    await InternetBanking_RegisterPage.details_CustID(AccountNum,debitnumber,debitpinno)
    await InternetBanking_RegisterPage.clickOnSubmit_Reg()
    custId=await InternetBanking_RegisterPage.capture_Customer_ID()
    console.log("CustomerId ="+custId);
  })
  it("navigate to homepage",async ()=>{
    await HomePage.clickOnHome_link()
    expect(await browser.getTitle()).to.contain("Online Banking System")
  })
  it("click on login of internetBanking",async ()=>{
    await HomePage.moveToInternetBanking_mod()
    await HomePage.clickOnInternetBanking_Login_link()
    expect(await browser.getTitle()).to.contain("Login Page")
  })
  it("enter the login credentials",async ()=>{
    await InternetBanking_LoginPage.Login_Customer(custId)
    expect(await browser.getTitle()).to.equal("My Profile")
  })
  it("click on fund transfer",async ()=>{
    await CustomerHomePage.clickOnFundTransfer_btn()
    expect(await browser.getUrl()).to.includes("fund_transfer.php")
  })
  it("click on add beneficiary",async ()=>{
    await FundTransferHomePage.clickOnAddBeneficiary_btn()
    expect(await browser.getTitle()).to.equal("Add Beneficiary")
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
  
  