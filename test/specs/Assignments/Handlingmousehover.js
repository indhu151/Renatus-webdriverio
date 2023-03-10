describe("mouse hover",()=>{
    it("Handling mouse hover",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver:8888/index.php?action=Login&module=Users")
        expect(browser).toHaveUrlContaining("Login&module=Users")
        await browser.$(`//input[@name="user_name"]`).setValue("admin")
        await browser.$(`//input[@name="user_password"]`).setValue("admin")
        await browser.$(`//input[@id="submitButton"]`).click()
    })
    it("mouse hover to element",async ()=>{
        const element=await browser.$(`//a[contains(.,"More")]`)
        await element.moveTo()
        await browser.$(`//a[@name="Project Tasks"]`).click()
        expect(browser).toHaveUrlContaining("module=ProjectTask&action=index")
    })

})