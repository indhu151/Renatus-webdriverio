describe("calenderpopup",()=>{
   // let deliverydate=28
    it("enter into application",async ()=>{
        await browser.maximizeWindow()
        await browser.url("https://www.igp.com/")
        await browser.$(`//input[@name="q"]`).setValue("Blackforestcake")
        await browser.$(`//img[@alt="Search"]`).click()
        await browser.$(`//p[text()="Hazelnut Crunch Cake (Half Kg)"]`).click()
    })
    it("check availability",async ()=>{
        expect(browser).toHaveUrlContaining("hazelnut-crunch-cake")
        await browser.$('//a[@id="upsell-data-586615"]').click()
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
        const value=await browser.$(`//input[@id="std-datepicker"]`)
        const delivery=await value.getValue()
        console.log(delivery);
        
    })
})