describe("InternetBanking",()=>{
    let appno=10
    let accno=11
    let debitnum=1
    let debitpin=12
    let custId=12
    it("navigation to application",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Banking_System/")
        console.log(browser.getTitle())
        expect(browser).toHaveTitle('Online Banking System')
      })
      it("click on OpenAccount",async ()=>{
        await browser.$('=Open Account').click()
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining('Registration Form')
      })
      it("Enter all the valid details",async ()=>{
        await browser.$('[name="name"]').setValue("Ria21")
        const gender= browser.$('[name="gender"]')
        gender.selectByVisibleText("Female")
        await browser.$('[name="mobile"]').setValue(9081476231)
        await browser.$('[name="email"]').setValue("indhu@gmail.com")
        await browser.$('[name="landline"]').setValue(223356)
        await browser.$('[name="dob"]').setValue("23-01-1997")
        await browser.$('[name="pan_no"]').setValue("AZDIJ3456H")
        await browser.$('[name="citizenship"]').setValue("23456")
        await browser.$('[name="homeaddrs"]').setValue("BTM")
        await browser.$('[name="officeaddrs"]').setValue("banshankari")
        const state=await browser.$('[name="state"]')
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
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining("Confirm")
        const reconfirm=await browser.$('//input[@name="cnfrm-submit"]')
        await reconfirm.click()
        console.log(await browser.isAlertOpen())
        var text=await browser.getAlertText()
        console.log(text);
        var matches = text.match(/(\d+)/);
        console.log(matches);
        appno=matches[0];
        console.log("Application_Number ="+appno);
        await browser.acceptAlert()
      })
       
    it("click on staffLogin",async ()=>{
        browser.$('=Staff Login').click()
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining("Staff Page")
    })
    it("Login",async ()=>{
        await browser.$('//input[@name="staff_id"]').setValue(210001)
        await browser.$('//input[@name="password"]').setValue("password")
        const login = await $('//input[@name="staff_login-btn"]')
        await login.waitForDisplayed({ timeout: 10000 });
        await login.click()
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining("Staff Home")
    })
    it("click on approve pending",async ()=>{
      console.log(appno);
        await $('//input[@name="apprvac"]').click()
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining("Pending Customers")
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
        expect(browser).toHaveTitleContaining("Staff Page")
    })
    it("click on home button",async ()=>{
        await browser.$('=Home').click()
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining("Online Banking System")
    })
    it("click on ApplyDebit",async ()=>{
      await browser.$('//li[text()="Apply Debit Card"]').click()
      await expect(browser).toHaveUrlContaining('debit_card_form.php')
      await browser.pause(20000)
  })
  it("Enter the vlid details",async ()=>{
      await browser.$('//input[@name="holder_name"]').setValue("Ria21")
      await browser.$('//input[@name="dob"]').setValue("23-01-1997")
      await browser.$('//input[@name="pan"]').setValue("AZDIJ3456H")
      await browser.$('//input[@name="mob"]').setValue(9081476231)
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
      expect(browser).toHaveTitleContaining("Online Banking System")
  })
  it("move to internetBanking",async ()=>{
     browser.setWindowSize(700,700)
     await browser.$(`//a[contains(text(),'Internet Banking')]`).moveTo({ })
     const register=await browser.$('//li[text()="Register"]')
     await register.waitForDisplayed({ timeout: 10000 });
     await register.click()
     expect(browser).toHaveUrlContaining('ebanking_reg_form.php')
  })
  it("enter all the details",async ()=>{
    browser.maximizeWindow()
    await browser.$('//input[@name="holder_name"]').setValue("Ria21")
    await browser.$('//input[@name="accnum"]').setValue(accno)
    await browser.$('//input[@name="dbtcard"]').setValue(debitnum)
    await browser.$('//input[@name="dbtpin"]').setValue(debitpin)
    await browser.$('//input[@name="mobile"]').setValue(9081476231)
    await browser.$('//input[@name="pan_no"]').setValue("AZDIJ3456H")
    await browser.$('//input[@name="dob"]').setValue("23-01-1997")
    await browser.$('//input[@name="last_trans"]').setValue("0")
    await browser.$('//input[@name="password"]').setValue(123456789)
    await browser.$('//input[@name="cnfrm_password"]').setValue(123456789)
    await browser.$('//input[@value="Submit"]').click()
    await browser.isAlertOpen()
    const text4=await browser.getAlertText()
    console.log(text4);
    var matches4 = text4.match(/(\d+)/);
    console.log(matches4);
    custId=matches4[0];
    console.log("CustomerId ="+custId);
    browser.acceptAlert()
  })
  it("navigate to homepage",async ()=>{
    await browser.$('=Home').click()
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("Online Banking System")
  })

})