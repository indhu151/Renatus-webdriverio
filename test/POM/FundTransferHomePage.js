import { expect } from "chai"

class FundTransferHomePage{
    get addbeneficiary_link(){
        return $(`//input[@name="add_beneficiary"]`)
    }
    get deletebeneficiary_link(){
        return $(`//input[@name="delete_beneficiary"]`)
    }
    get viewbeneficiary_link(){
        return $(`//input[@name="view_beneficiary"]`)
    }
    get selectbeneficiary_tf(){
        return $(`//select[@name="beneficiary"]`)
    }
    get Amt_tf(){
        return $(`//input[@name="trnsf_amount"]`)
    }
    get remark_tf(){
        return $(`//input[@name="trnsf_remark"]`)
    }
    get send_Btn()
    {
        return $(`//input[@name="fnd_trns_btn"]`)
    }
    //business library
    async clickOnAddBeneficiary_btn(){
        await (this.addbeneficiary_link).click()
    }
    async select_beneficiary(){
        const beneficiary=await (this.selectbeneficiary_tf)
        expect(await beneficiary.waitForDisplayed({timeout:5000})).to.be.true
        await beneficiary.selectByIndex(1)
    }
    async Amt_Trans(){
        await (this.Amt_tf).setValue(1000)
    }
    async remark_sent(){
        await (this.remark_tf).setValue("Amount transferred")
    }
    async clickOnSend_btn(){
        await (this.send_Btn).click()
    }

}
export default new FundTransferHomePage()