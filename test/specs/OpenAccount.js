/**
 * Launch the browser
 * Open the application
 * click on open Account
 * enter the valid details
 * click on submit
 * click on reconfirm
 */
describe("Online Banking",async()=>{
  let appno=10
  let accno=11
  let debitnum=1
  let debitpin=12
    it("navigation to application",async ()=>{
      await browser.maximizeWindow()
      await browser.url("http://testingserver/domain/Online_Banking_System/")
      await console.log(browser.getTitle())
      await expect(browser).toHaveTitle('Online Banking System')
    })
    it("click on OpenAccount",async ()=>{
      await browser.$('=Open Account').click()
      await console.log(browser.getTitle());
      await expect(browser).toHaveTitleContaining('Registration Form')
    })
    it("Enter all the valid details",async ()=>{
      await browser.$('[name="name"]').setValue("Ria12")
      const gender= browser.$('[name="gender"]')
      gender.selectByVisibleText("Female")
      await browser.$('[name="mobile"]').setValue(9081576231)
      await browser.$('[name="email"]').setValue("indhu@gmail.com")
      await browser.$('[name="landline"]').setValue(223356)
      await browser.$('[name="dob"]').setValue("23-01-1997")
      await browser.$('[name="pan_no"]').setValue("AZDIJ3456H")
      await browser.$('[name="citizenship"]').setValue("23456")
      await browser.$('[name="homeaddrs"]').setValue("BTM")
      await browser.$('[name="officeaddrs"]').setValue("banshankari")
      const state=await browser.$('[name="state"]')
      //await state.waitForDisplayed({ timeout: 3000 });
      state.selectByVisibleText("Florida")
      const city=await browser.$('[name="city"]')
      city.selectByVisibleText("Houston")
      await browser.$('[name="pin"]').setValue(540987)
      await browser.$('//input[@name="arealoc"]').setValue("park")
      await browser.$('[name="nominee_name"]').setValue("Priya")
      await browser.$('[name="nominee_ac_no"]').setValue(2345631234)
      const accttype=await browser.$('[name="acctype"]')
      accttype.selectByVisibleText("Saving")
    })
    
    it("click on submit",async ()=>{
      const submitlink=await browser.$('//input[@name="submit"]')
      await submitlink.waitForClickable({ timeout: 10000 });
      await submitlink.click()
      })

    it("confirm",async ()=>{
      await console.log(browser.getTitle());
      await expect(browser).toHaveTitleContaining("Confirm")
      const reconfirm=await browser.$('//input[@name="cnfrm-submit"]')
      await reconfirm.click()
      console.log(await browser.isAlertOpen())
      var text=await browser.getAlertText()
      console.log(text);
      //browser.acceptAlert()
      var matches = text.match(/(\d+)/);
      console.log(matches);
      appno=matches[0];
      console.log("Application_Number ="+appno);
      await browser.acceptAlert()
      //console.log("********************"+appno);
     })
     //console.log("************************************"+appno);
     
  it("click on staffLogin",async ()=>{
     // browser.url("http://testingserver/domain/Online_Banking_System/index.php")
      browser.$('=Staff Login').click()
      console.log(browser.getTitle());
      await expect(browser).toHaveTitleContaining("Staff Page")
  })
  it("Login",async ()=>{
      await browser.$('//input[@name="staff_id"]').setValue(210001)
      await browser.$('//input[@name="password"]').setValue("password")
      //await browser.$('//input[@name="staff_login-btn"]')
      const login = await $('//input[@name="staff_login-btn"]')
      await login.waitForDisplayed({ timeout: 10000 });
      await login.click()
      await console.log(browser.getTitle());
      await expect(browser).toHaveTitleContaining("Staff Home")
  })
  it("click on approve pending",async ()=>{
    console.log(appno);
      await $('//input[@name="apprvac"]').click()
      await console.log(browser.getTitle());
      await expect(browser).toHaveTitleContaining("Pending Customers")
      await $('//input[@name="application_no"]').setValue(appno)
      await $('//input[@name="search_application"]').click()
      
      const approve=await $('//input[@name="approve_cust"]')
      await approve.click()
      console.log(browser.isAlertOpen())
      const text1= await browser.getAlertText()
      var matches1 = text1.match(/(\d+)/);
      console.log(matches1);
      accno=matches1[0];
      console.log("Account_Number ="+accno);
      await browser.acceptAlert()
  })
  it("Logout of staffHome page",async ()=>{
      await browser.$('//input[@name="logout_btn"]').click()
      console.log(browser.getTitle())
      await expect(browser).toHaveTitleContaining("Staff Page")
  })
  it("click on home button",async ()=>{
      await browser.$('=Home').click()
      console.log(browser.getTitle());
      await expect(browser).toHaveTitleContaining("Online Banking System")
  })
  it("click on ApplyDebit",async ()=>{
    await browser.$('//li[text()="Apply Debit Card"]').click()
    await expect(browser).toHaveUrlContaining('debit_card_form.php')
    await browser.pause(20000)
})
it("Enter the vlid details",async ()=>{
    await browser.$('//input[@name="holder_name"]').setValue("Ria12")
    await browser.$('//input[@name="dob"]').setValue("23-01-1997")
    await browser.$('//input[@name="pan"]').setValue("AZDIJ3456H")
    await browser.$('//input[@name="mob"]').setValue(9081576231)
    await browser.$('//input[@name="acc_no"]').setValue(accno)
    const elem = await $('//input[@name="acc_no"]')
    await elem.waitForDisplayed({ timeout: 10000 });
    await browser.$('//input[@name="dbt_crd_submit"]').click()

})
it("get debit num and pin",async ()=>{
    await browser.isAlertOpen()
    const text3=await browser.getAlertText()
    console.log(text3);
    var matches2 = text3.match(/\d+/g);
    console.log(matches2)
    debitnum=matches2[0];
    debitpin=matches2[1];
    console.log("debit num ="+debitnum);
    console.log("debitpin="+debitpin);
    await browser.acceptAlert()
})
it("click on home button",async ()=>{
  await browser.$('=Home').click()
  console.log(browser.getTitle());
  await expect(browser).toHaveTitleContaining("Online Banking System")
})

})
//module.exports="./test/specs/OpenAccount.js"
