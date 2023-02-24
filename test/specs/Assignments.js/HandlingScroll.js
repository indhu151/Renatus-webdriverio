describe("scroll action",()=>{
    it("scoll",async ()=>{
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Tourism_Management_System/")
       expect(browser).toHaveUrlContaining("Online_Tourism_Management_System/")
      
    })
    it.skip("scroll action using values",async ()=>{
        await browser.scroll(0,750)
        await browser.pause(10000)
    })
    it.skip("scroll action using",async ()=>{
        console.log(await browser.execute(()=>window.scrollY))
        await browser.scroll(0,600)
        console.log(await browser.execute(()=>window.scrollY))
        console.log(await browser.execute(()=>window.scrollX))
    })
    it("scroll action using execute",async ()=>{
        await browser.execute(()=>window.scrollTo(0,850))
        //await browser.pause(10000)
    })
    
})