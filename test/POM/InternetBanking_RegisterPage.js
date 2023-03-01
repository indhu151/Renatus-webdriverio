class InternetBanking_RegisterPage
{
    get accholdername_tf(){
        return $(`//input[@name="holder_name"]`)
    }
    get accountNumber_tf(){
        return $(`//input[@name="accnum"]`)
    }
    get debitCardNumber_tf(){
        return $(`//input[@name="dbtcard"]`)
    }
    get debitCardPin_tf(){
        return $(`//input[@name="dbtpin"]`)
    }
    get mobileNo_tf(){
        return $(`//input[@name="mobile"]`)
    }
    get panNo_tf(){
        return $(`//input[@name="pan_no"]`)
    }
    get dateOfBirth_tf(){
        return $(`//input[@name="dob"]`)
    }
    get last_transc_tf(){
        return $(`//input[@name="last_trans"]`)
    }
    get password_tf(){
        return $(`//input[@name="password"]`)
    }
    get confirm_pass_tf(){
        return $(`//input[@name="cnfrm_password"]`)
    }
    get submit_btn(){
        return $(`//input[@value="Submit"]`)
    }
    //business library
    async details_CustID(accno,debitno,debitpin)
    {
        await (this.accholdername_tf).setValue("Diya17")
        await (this.accountNumber_tf).setValue(accno)
        await (this.debitCardNumber_tf).setValue(debitno)
        await (this.debitCardPin_tf).setValue(debitpin)
        await (this.mobileNo_tf).setValue(9762354124)
        await (this.panNo_tf).setValue("AZDIJ4855H")
        await (this.dateOfBirth_tf).setValue("24-07-1994")
        await (this.last_transc_tf).setValue(10000)
        await (this.password_tf).setValue("abc@123")
        await (this.confirm_pass_tf).setValue("abc@123")
    }
    async clickOnSubmit_Reg()
    {
        await (this.submit_btn).click()
    }
    async capture_Customer_ID(){
        await browser.isAlertOpen()
        const text4=await browser.getAlertText()
        console.log(text4);
        var matches4 = text4.match(/(\d+)/);
        console.log(matches4);
        let custid=matches4[0];
        browser.acceptAlert()
        return custid
    }
    
}
export default new InternetBanking_RegisterPage()