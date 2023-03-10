class LoginPage
{
    get email_tf(){
        return $(`//input[@id="email"]`)
    }
    get password_tf(){
        return $(`//input[@id="password"]`)
    }
    get submit_btn(){
        return $(`//button[@id="btnSubmit"]`)
    }
    //business library
    async login_cred(){
        await (this.email_tf).setValue("admin@gmail.com")
        await (this.password_tf).setValue(12345)
    }
    async clickOnSubmit_btn(){
        await (this.submit_btn).waitForClickable({timeout:5000})
        await (this.submit_btn).click()
    }

}
export default new LoginPage()