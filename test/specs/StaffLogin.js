/**
 * click on HomeBuuton
 * click on staffLogin link
 * enter the staffId and password
 * click on login button
 */
describe("staffLogin",async ()=>{
    it("click on staffLogin",async ()=>{
        browser.url("http://testingserver/domain/Online_Banking_System/index.php")
        $('=Staff Login').click()
        console.log(browser.getTitle());
        await expect(browser).toHaveTitleContaining("Staff Page")
    })
    it("Login",async ()=>{
        await $('//input[@name="staff_id"]').setValue(210001)
        await $('//input[@name="password"]').setValue("password")
        await $('//input[@name="staff_login-btn"]').click()
        await console.log(browser.getTitle());
        await expect(browser).toHaveTitleContaining("Staff Home")
    })
})