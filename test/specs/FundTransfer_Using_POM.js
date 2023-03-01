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
  it("click on home button",async ()=>{
     await HomePage.clickOnHome()
     console.log(browser.getTitle());
     expect(browser).toHaveTitleContaining("Online Banking System")
  })
  it("move to internetBanking",async ()=>{
    await HomePage.moveToInternetBanking()
    await HomePage.clickOnInternetBankingRegister()
    expect(browser).toHaveUrlContaining('ebanking_reg_form.php')
  })
  it("enter all the details",async ()=>{
    await InternetBanking_RegisterPage.details_CustID(AccountNum,debitnumber,debitpinno)
    await InternetBanking_RegisterPage.clickOnSubmit_Reg()
    custId=await InternetBanking_RegisterPage.Customer_ID()
    console.log("CustomerId ="+custId);
  })
  it("navigate to homepage",async ()=>{
    await HomePage.clickOnHome()
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("Online Banking System")
  })
  it("click on login of internetBanking",async ()=>{
    await HomePage.moveToInternetBanking()
    await HomePage.clickOnInternetBankingLogin()
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("Login Page")
  })
  it("enter the login credentials",async ()=>{
    await InternetBanking_LoginPage.Login_Customer(custId)
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("My Profile")
  })
  it("click on fund transfer",async ()=>{
    await CustomerHomePage.clickOnFundTransfer()
    expect(browser).toHaveUrlContaining("fund_transfer.php")
  })
  it("click on add beneficiary",async ()=>{
    await FundTransferHomePage.clickOnAddBeneficiary()
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("Add Beneficiary")
    await AddBeneficiaryPage.beneficiary_details()
    await AddBeneficiaryPage.alertPresentaccept()
  })
  it("fund transfer",async ()=>{
    await CustomerHomePage.clickOnFundTransfer()
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("Fund Transfer")
  
  })
  it("select the beneficiary",async ()=>{
    await FundTransferHomePage.select_beneficiary()
    await FundTransferHomePage.Amt_Trans()
    await FundTransferHomePage.remark_sent()
    await FundTransferHomePage.clickOnSendLink()
  })
  it("OTP verify",async ()=>{
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("OTP Verification")
    OTP=await OTPVerificationPage.otpnumber()
    console.log(`OTP is = ${OTP}`);
  })
  it("transaction verification",async ()=>{
    await OTPVerificationPage.verification_detail(OTP)
    const message=await OTPVerificationPage.trans_alertmessage()
    console.log(`Transaction message= ${message}`);
    
  })
  
})