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
    async clickOnHome(){
        await (this.Home_btn).click()
    }
    async clickOnOpenAccount()
    {
        await (this.openAccount_link).click()
    }
    async clickOnStaffLogin(){
        await (this.staffLogin_link).click()
    }
    async clickOnApplyDebit(){
        await (this.ApplyDebit_link).click()
    }
    async moveToInternetBanking(){
        await browser.scroll(0,250)
        await (this.InternetBanking_mod).moveTo()
    }
    async clickOnInternetBankingRegister(){
        const register=await (this.InternetBankingReg_link)
        await register.waitForDisplayed({ timeout: 3000 });
        await register.click()
    }
    async clickOnInternetBankingLogin(){
        await (this.InternetBankingLogin_link).click()
    }
    async clickOnFundTransfer(){
        await (this.FundTransfer_link).click()
    }

}
export default new HomePage()
//module.exports=new HomePage()