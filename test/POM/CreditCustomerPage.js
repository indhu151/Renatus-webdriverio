import { expect } from "chai"

class CreditCustomerPage{
    get cust_accno_tf(){
        return $(`//input[@name="customer_account_no"]`)
    }
    get AmountText_tf(){
        return $(`//input[@name="credit_amount"]`)
    }
    get credit_btn(){
        return $(`//input[@name="credit_btn"]`)
    }
    get logout_button(){
        return $(`//input[@name="logout_btn"]`)
    }
    //businesslibrary
    async credit_Amount(accnum){
        await (this.cust_accno_tf).setValue(accnum)
        await (this.AmountText_tf).setValue(10000)
        await (this.credit_btn).click()
        let result=await browser.isAlertOpen()
        expect(result).to.be.true
        await browser.acceptAlert()
    }
    async logout_Link(){
        await (this.logout_button).click()
    }
}
export default new CreditCustomerPage()