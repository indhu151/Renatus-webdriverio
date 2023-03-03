describe("Credit customer", ()=>{
    let AccountNum
    let accno=11
  it("click on staffLogin",async ()=>{
      await HomePage.clickOnStaffLogin_link()
      expect(await browser.getTitle()).to.include("Staff Page")
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
       
})