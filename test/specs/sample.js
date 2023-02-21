
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
    })  
    