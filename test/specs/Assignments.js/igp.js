describe("igb",()=>{
    let menuprice
    let price
    let priceincart
    let checkout
    it("enter into website",async ()=>{
        await browser.maximizeWindow()
        await browser.url("https://www.igp.com/")
        await browser.$(`//input[@name="q"]`).setValue("Blackforestcake")
        await browser.$(`//img[@alt="Search"]`).click()
        await browser.$(`//p[text()="Hazelnut Crunch Cake (Half Kg)"]`).click()
    })
    it("check availability",async ()=>{
        expect(browser).toHaveUrlContaining("hazelnut-crunch-cake")
        await browser.$('//a[@id="upsell-data-586615"]').click()
        price=await browser.$(`//a[@data-name="Hazelnut Crunch Cake (1 KG)"]//span[@class="upsell-price"]`)
        menuprice=await price.getText()
        console.log("*****************************"+menuprice);
        const pin=await browser.$(`//input[@id="location-input"]`)
        await pin.setValue(560067)
        const available=await browser.$(`//button[@id="available-pincode"]`)
        await available.waitForDisplayed(8000)
        await browser.pause(10000)
    })
    it("calender popup",async ()=>{
       
        await browser.scroll(0,200)
        const date=await browser.$(`//span[contains(.,"Select Date")]`)
        await date.waitForExist(10000)
        await date.click()
        await browser.$(`//td[@data-handler="selectDay"]/../..//a[text()="28"]`).click()
        // const value=await browser.$(`//input[@id="std-datepicker"]`)
        // const delivery=await value.getValue()
        // console.log(delivery);
        
    })
    it("tadd to cart",async ()=>{
       await browser.$(`//span[contains(text(),"Standard")]`).click()
       const time=await browser.$(`//select[@id="timepicker"]`)
       await time.click()
       await time.selectByIndex(2)
       await browser.$(`//button[@id="add-cart"]`).click()
       await browser.pause(10000)
       
    })
    it("continue booking",async ()=>{
        // const page=await browser.$(`//span[contains(text(),"Make it extra special")]`)
        // await page.waitForExist()
        const cart=await browser.$(`//span[contains(text(),"CONTINUE WITHOUT ADDONS")]`)
        await cart.waitForDisplayed()
        await cart.click()
    })
    it("to get the price",async ()=>{
        console.log(browser.getTitle())
        expect(browser).toHaveTextContaining("Shopping Cart")
        priceincart=await browser.$('//p[contains(.,"Hazelnut Crunch Cake (1 Kg)")]/../../..//span[@class="inr number s-total-val s-total-val-revamp"]')
        checkout=await priceincart.getText()
        console.log("***************************"+checkout);
        expect(checkout).toHaveText(menuprice)
        if(checkout==menuprice)
        {
            console.log("price is same");
        }
    })
})