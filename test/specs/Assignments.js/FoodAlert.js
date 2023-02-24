describe("Handling alert",()=>{
    let rname="Eataly"
    let dishname="Crispy Chicken Strips"
    let quantity
    let qty=2

    it("enter into application",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/")
        expect(browser).toHaveUrlContaining("Online_Food_Ordering_System/")
    })
    it("login",async ()=>{
        await browser.$(`//a[contains(.,'Login')]`).click()
        expect(browser).toHaveUrlContaining("Ordering_System/login.php")
        await browser.$(`//input[@name="username"]`).setValue("Keerthiiga")
        await browser.$(`//input[@name="password"]`).setValue("abc@123")
        await browser.$(`//input[@name="submit"]`).click()
        expect(browser).toHaveUrlContaining(`Online_Food_Ordering_System/index.php`)
    })
    it("select the restrauant",async ()=>{
        await browser.$('//a[contains(text(),"Restaurants")]').click()
        expect(browser).toHaveUrlContaining("restaurants.php")
        await browser.$(`//a[contains(text(),'${rname}')]`).click()
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("Dishes")
    })
    it("select the dishes",async()=>{
        quantity= await browser.$(`//a[contains(.,'${dishname}')]/../../../../..//input[@name="quantity"]`)
        await quantity.setValue(qty)
        await browser.$('//input[@value="Add To Cart"]').click() 
    })
    it("checkout",async ()=>{
        await browser.$(`//a[contains(.,"Checkout")]`).click()
        expect(browser).toHaveUrlContaining("_Ordering_System/checkout.php")
        await browser.$(`//input[@name="submit"]`).click()
    })
    it("Handling popup",async ()=>{
        console.log(await browser.isAlertOpen())
        const text=await browser.getAlertText()
        console.log("***********************"+text);
        await browser.acceptAlert()
        await browser.pause(10000)
    })
    it("Handling another popup",async ()=>{
        console.log(await browser.isAlertOpen())
        const message=await browser.getAlertText()
        console.log("***********************"+message);
        await browser.acceptAlert()
        await browser.pause(10000)
    })
})