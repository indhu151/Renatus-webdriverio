class CustomerHomePage
{
    get fundTransfer_Mod(){
        return $(`//li[text()="Fund Transfer"]`)
    }
    get home_btn(){
        return $(`//input[@name="home"]`)
    }
    get logout_btn(){
        return $(`//input[@name="logout_btn"]`)
    }
    get changepassword_link(){
        return $(`//li[contains(text(),"Change Password")]`)
    }
    get my_acc_link(){
        return $(`//li[contains(text(),"My Account")]`)
    }
    get myprofile_link(){
        return $(`//li[contains(text(),"My Profile")]`)
    }
    get statement_link(){
        return $(`//li[contains(text(),"Statement")]`)
    }
    //business library
    async clickOnFundTransfer_btn(){
       await (this.fundTransfer_Mod).click()
    }
    async clickOn_Cust_Home_btn(){
        await (this.home_btn).click()
    }
    async clickOn_Cust_logout_btn(){
        await (this.logout_btn).click()
    }
    async clickOn_My_Acc_link(){
        await (this.my_acc_link).click()
    }
    async clickOn_My_Profile_link(){
        await (this.myprofile_link).click()
    }
    async clickOn_ChangePassword_link(){
        await (this.changepassword_link).click()
    }
    async clickOn_Statement_link(){
        await (this.statement_link).click()
    }

}
export default new CustomerHomePage()