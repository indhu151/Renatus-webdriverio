describe("using method",()=>{
    it("v-tiger",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver:8888/index.php?action=Login&module=Users")
        expect(browser).toHaveUrlContaining("Login&module=Users")
        await browser.$(`//input[@name="user_name"]`).setValue("admin")
        await browser.$(`//input[@name="user_password"]`).setValue("admin")
        await browser.$(`//input[@id="submitButton"]`).click()

    })
    it("organization",async ()=>{
        expect(browser).toHaveUrlContaining("action=index&module=Home")
        
    })
    it("Using method",async ()=>{
        await browser.$(`//a[contains(.,"Organizations")]`).click()
        expect(browser).toHaveUrlContaining("Accounts&action=index")
        const svalues=await browser.$(`//select[@name="search_field"]`)
        await svalues.click()
        const value=await svalues.getValue()
        console.log(value);
    })
})