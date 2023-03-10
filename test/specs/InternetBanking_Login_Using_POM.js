import HomePage from "../POM/HomePage"
import InternetBanking_LoginPage from "../POM/InternetBanking_LoginPage"
describe("Login of internetBankig",()=>{
  
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

})