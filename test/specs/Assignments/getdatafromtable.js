describe("get data from table", ()=>{
    let appno=10
    let accno=11
    let data
     
      it("navigation to application",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Banking_System/")
        console.log(browser.getTitle())
        expect(browser).toHaveTitle('Online Banking System')
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
    it("click on active customer",async ()=>{
        await browser.$('//input[@value="View Active Customer"]').click()
        expect(browser).toHaveUrlContaining("active_customers.php")
        data=await browser.$$('//tbody/tr/th[4]/../../tr/td[4]')
        for (let i=0;i<data.length;i++) 
        {
            const element = await data[i].getText();
            console.log(element)
        }
        })
    })