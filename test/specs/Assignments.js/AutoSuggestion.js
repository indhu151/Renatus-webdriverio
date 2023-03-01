describe("AutoSuggestion",()=>{
    it("igb",async ()=>{
        await browser.url("https://igp.com/")
        await browser.$(`//input[@name="q"]`).setValue("Cakes")
        // const allsugg=await browser.$$(`//div[contains(text(),"Cakes")]`)
        const items=await browser.$(`//div[@id="searched-Items"]`)
        items.waitForExist({timeout:5000})
        const allsugg=await browser.$$(`//div[contains(text(),"Cakes")]`)
        await browser.pause(10000)
        for (let i = 0; i < allsugg.length; i++) {
            const element = await allsugg[i].getText()
            console.log(element);
        }
    })
})