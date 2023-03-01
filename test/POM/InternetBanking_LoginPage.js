class InternetBanking_LoginPage
{
    get Customer_Id_tf()
    {
        return $(`//input[@name="customer_id"]`)
    }
    get Cust_Password_tf(){
        return $(`//input[@name="password"]`)
    }
    get Login_Cust_btn(){
        return $(`//input[@name="login-btn"]`)
    }
    //business Library
    async Login_Customer(custId){
        await (this.Customer_Id_tf).setValue(custId)
        await (this.Cust_Password_tf).setValue("abc@123")
        await (this.Login_Cust_btn).click()
    }
}
export default new InternetBanking_LoginPage()