describe("autosuggestion",()=>{
    it("google",async ()=>{
        await browser.maximizeWindow()
        await browser.url("https://www.google.com/")
        await browser.$(`//input[@name="q"]`).setValue("java")
        await browser.pause(10000)
        let allsugg=await browser.$$(`//span[contains(text(),"java")]`)
        let count=allsugg.length
        console.log("*************************"+count);
        for (let i = 0; i < allsugg.length; i++) {
            const element = await allsugg[i].getText()
            console.log(element);
            
        }
    })
})