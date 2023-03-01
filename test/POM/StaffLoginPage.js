class StaffLoginPage
{
    get StaffID_tf(){
        return $(`//input[@name="staff_id"]`)
    }
    get Password_tf(){
        return $(`//input[@name="password"]`)
    }
    get login_btn(){
        return $(`//input[@name="staff_login-btn"]`)
    }
    //business library
    async StaffLogin_details(){
        await (this.StaffID_tf).setValue(210001)
        await (this.Password_tf).setValue("password")
        const login = await (this.login_btn)
        await login.waitForDisplayed({ timeout: 10000 });
        await login.click()
    }

}
export default new StaffLoginPage()