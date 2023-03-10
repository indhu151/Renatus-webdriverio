describe("capture error",()=>{
    it("enter the url",async ()=>{
        await browser.url("http://testingserver/domain/Society_Management_System/admin/")
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining("Society_Management_System/admin/")
        await browser.$(`#username`).setValue("admin")
        await  browser.$(`#password`).setValue("admin")
        await browser.$(`#login`).click()
        await browser.$('//label[@class="text-danger"]').waitForDisplayed()
        const message=await browser.$('//label[@class="text-danger"]').getText()
        console.log("text is"+message);
    })
})