 class HomePage
{
    get Home_btn(){
        return $(`=Home`)
    }
    get staffLogin_link(){
        return $(`=Staff Login`)
    }
    get openAccount_link(){
        return $(`//li[contains(text(),"Open Account")]`)
    }
    get ApplyDebit_link(){
        return $(`//li[text()="Apply Debit Card"]`)
    }
    get InternetBanking_mod(){
        return $(`//a[contains(text(),'Internet Banking')]`)
    }
    get InternetBankingReg_link(){
        return $(`//li[text()="Register"]`)
    }
    get InternetBankingLogin_link(){
        return $(`//li[text()="Login "]`)
    }
    get FundTransfer_link(){
        return $(`//li[contains(text(),"Fund Transfer")]`)
    }


    //business library
    async clickOnHome_link(){
        await (this.Home_btn).click()
    }
    async clickOnOpenAccount_link()
    {
        await (this.openAccount_link).click()
    }
    async clickOnStaffLogin_link(){
        await (this.staffLogin_link).click()
    }
    async clickOnApplyDebit_link(){
        await (this.ApplyDebit_link).click()
    }
    async moveToInternetBanking_mod(){
        await browser.scroll(0,250)
        await (this.InternetBanking_mod).moveTo()
    }
    async clickOnInternetBanking_Register_link(){
        const register=await (this.InternetBankingReg_link)
        expect(await register.waitForDisplayed({ timeout: 5000 })).to.be.true
        await register.click()
    }
    async clickOnInternetBanking_Login_link(){
        const login=await (this.InternetBankingLogin_link)
        expect(await login.waitForExist({timeout:5000})).to.be.true
        await login.click()
    }
    async clickOnFundTransfer_link(){
        await (this.FundTransfer_link).click()
    }

}
export default new HomePage()
//module.exports=new HomePage()