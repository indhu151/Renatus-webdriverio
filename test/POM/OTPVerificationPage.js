class OTPVerificationPage
{
    get otptext(){
        return $(`//label[@class="OTP_msg"]`)
    }
    get otp_tf(){
        return $(`//input[@name="otpcode"]`)
    }
    get verify_btn(){
        return $(`//input[@name="verify-btn"]`)
    }
    //business library
    async otpnumber()
    {
        const text6=await (this.otptext).getText()
        console.log(text6)
        let text7=(text6).toString()
        let OTPtext = text7.split(":")
        console.log(OTPtext[1])
        let OTP=OTPtext[1]
        return OTP
    }
    async verification_detail(OTP){
        await (this.otp_tf).setValue(OTP)
        await (this.verify_btn).click()
    }
    async trans_alertmessage(){
            await browser.isAlertOpen()
            let message=await browser.getAlertText()
            await browser.acceptAlert()
            return message
    }

}
export default new OTPVerificationPage()