import { expect } from "chai"

class ApplyDebitPage
{
    get holdername_tf(){
        return $(`//input[@name="holder_name"]`)
    }
    get dateOfBirth_tf(){
        return $(`//input[@name="dob"]`)
    }
    get Panno_tf(){
        return $(`//input[@name="pan"]`)
    }
    get mobileNo_tf(){
        return $(`//input[@name="mob"]`)
    }
    get Account_no_tf(){
        return $(`//input[@name="acc_no"]`)
    }
    get submit_btn(){
        return $(`//input[@name="dbt_crd_submit"]`)
    }
    //business library
    async details_for_Debit(AccountNum){
        await (this.holdername_tf).setValue("mani15")
        await (this.dateOfBirth_tf).setValue("20-06-1996")
        await (this.Panno_tf).setValue("AZDTJ2365H")
        await (this.mobileNo_tf).setValue(9172223124)
        await (this.Account_no_tf).setValue(AccountNum)
    }
    async clickOnSubmit_debit(){
       const btn= await (this.submit_btn)
       expect(await btn.waitForDisplayed({ timeout: 3000 })).to.be.true
       await btn.click()
    }
    async alertText(){
      let result=await browser.isAlertOpen()
      expect(result).to.be.true
      const text3=await browser.getAlertText()
      console.log(text3);
      await browser.acceptAlert()
      return text3
    }
    async capture_Debit_Num(text3)
    {
      var matches2 = text3.match(/\d+/g);
      console.log(matches2)
      let debitnum=matches2[0];
      console.log(debitnum);
      return debitnum
    }
    async capture_Debit_Pin(text3){
      var matches2 = text3.match(/\d+/g);
      console.log(matches2)
      let debitpin=matches2[1];
      return debitpin
      }

}
export default new ApplyDebitPage()