describe("ApplyDebit",()=>{
    it("click on ApplyDebit",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Banking_System/")
        await browser.$('//li[text()="Apply Debit Card"]').click()
        await expect(browser).toHaveUrlContaining('debit_card_form.php')
        await browser.pause(20000)
    })
    it("Enter the vlid details",async ()=>{
        await browser.$('//input[@name="holder_name"]').setValue("Indhu11")
        await browser.$('//input[@name="dob"]').setValue("")
        await browser.$('//input[@name="pan"]').setValue("")
        await browser.$('//input[@name="mob"]').setValue("")
        await browser.$('//input[@name="acc_no"]').setValue("")
        await browser.$('//input[@name="dbt_crd_submit"]').click()
    
    })
    it("get debit num",async ()=>{
        browser.isAlertOpen()
       const text3= browser.getAlertText()
       console.log(text3);
    })
})