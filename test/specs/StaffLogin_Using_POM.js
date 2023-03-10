/**
 * click on HomeBuuton
 * click on staffLogin link
 * enter the staffId and password
 * click on login button
 */
import StaffLoginPage from "../POM/StaffLoginPage"
import HomePage from "../POM/HomePage"
describe("staffLogin", ()=>{
    it("click on staffLogin",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Banking_System/")
        await HomePage.clickOnStaffLogin_link()
        expect(await browser.getTitle()).to.include("Staff Page")
    })
    it("Navigate to StaffLogin Page",async ()=>{
        await StaffLoginPage.StaffLogin_details()
        let title=await browser.getTitle();
        expect(title).to.equal("Staff Home")
      })
})