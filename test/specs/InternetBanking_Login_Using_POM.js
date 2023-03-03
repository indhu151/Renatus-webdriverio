import HomePage from "../POM/HomePage"
import InternetBanking_LoginPage from "../POM/InternetBanking_LoginPage"
describe("Login of internetBankig",()=>{
  
  it("click on eBanking login and navigate to login page",async ()=>{
    await HomePage.moveToInternetBanking_mod()
    await HomePage.clickOnInternetBanking_Login_link()
    expect(await browser.getTitle()).to.contain("Login Page")
  })
  
  it("enter the login credentials and click on login",async ()=>{
    await InternetBanking_LoginPage.Login_Customer(custId)
    expect(await browser.getTitle()).to.equal("My Profile")
  
  })
  
  it("navigate to customerHomePage",async ()=>{
    expect(await browser.getTitle()).to.equal("My Profile")
  })

})