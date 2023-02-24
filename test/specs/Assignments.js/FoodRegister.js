describe("Alertpopup",()=>{
    it("enter url",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/")
        expect(browser).toHaveUrlContaining("Online_Food_Ordering_System/")
    })
    it("click on register",async ()=>{
        await browser.$(`//a[contains(.,"Register")]`).click()
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining("Registration")
    })
    it("enter the valid details",async ()=>{
        await browser.$(`//input[@name="username"]`).setValue("Keerthiiga")
        await browser.$(`//input[@name="firstname"]`).setValue("keerthi")
        await browser.$(`//input[@name="lastname"]`).setValue("Ravish")
        await browser.$(`//input[@name="email"]`).setValue("keerthi15@gmail.com")
        await browser.$(`//input[@name="phone"]`).setValue(9187645581)
        await browser.$(`//input[@name="password"]`).setValue("abc@123")
        await browser.$(`//input[@name="cpassword"]`).setValue("abc@123")
        await browser.$(`//textarea[@name="address"]`).setValue("33,1st stage BTM")
        await browser.$(`//input[@name="submit"]`).click()
    })
    it("Login to application",async ()=>{
        expect(browser).toHaveUrlContaining("System/registration.php")
        expect(browser).toHaveUrlContaining("Ordering_System/login.php")
        await browser.$(`//input[@name="username"]`).setValue("Keerthiiga")
        await browser.$(`//input[@name="password"]`).setValue("abc@123")
        await browser.$(`//input[@name="submit"]`).click()
        expect(browser).toHaveUrlContaining(`Online_Food_Ordering_System/index.php`)
    })
})