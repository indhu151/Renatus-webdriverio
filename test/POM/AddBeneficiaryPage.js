class AddBeneficiaryPage{
    get bene_name_tf(){
        return $(`//input[@name="beneficiary_name"]`)
    }
    get bene_accno_tf(){
        return $(`//input[@name="beneficiary_acno"]`)
    }
    get IFSC_code_tf(){
        return $(`//input[@name="Ifsc_code"]`)
    }
    get bene_acctype(){
        return $(`//select[@name="beneficiary_acc_type"]`)
    }
    get add_btn(){
        return $(`//input[@name="add_beneficiary_btn"]`)
    }
    //business
    async beneficiary_details(){
        await (this.bene_name_tf).setValue("vinay1234")
        await (this.bene_accno_tf).setValue(1011421011309)
        await (this.IFSC_code_tf).setValue(1011)
        const type= await (this.bene_acctype)
        await type.selectByVisibleText("Saving")
        await (this.add_btn).click()
    }
    async alertPresentaccept(){
        await browser.isAlertOpen()
        await browser.acceptAlert()
    }
}
export default new AddBeneficiaryPage()