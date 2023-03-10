describe("scrollIntoView",()=>{
    it("scoll action",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/")
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining("Home")
        const feature=browser.$(`//p[contains(text(),'We"ve got your covered with a variety of delivery restaurants online.')]`)
        await feature.scrollIntoView()
        await browser.pause(10000)
    })
})