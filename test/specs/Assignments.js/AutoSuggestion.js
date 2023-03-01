describe("AutoSuggestion",()=>{
    it("igb",async ()=>{
        let arr=[]
        await browser.url("https://igp.com/")
        await browser.$(`//input[@name="q"]`).setValue("Cakes")
        // const allsugg=await browser.$$(`//div[contains(text(),"Cakes")]`)
        const display=browser.$(`#searched-Items`)
        await display.waitForDisplayed({timeout:7000})
        //await browser.pause(10000)
        const allsugg=await browser.$$(`//div[contains(text(),"Cakes")]`)
        //await browser.pause(10000)
        for (let i = 0; i < allsugg.length; i++) {
            const element = await allsugg[i].getText()
            console.log(element);
            arr.push(element)

        }
        console.log(arr);
    })
})