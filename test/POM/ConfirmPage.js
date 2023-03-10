import { expect } from "chai"

class ConfirmPage
{
    
    get confirm_btn(){
        return $(`//input[@name="cnfrm-submit"]`)
    }
    //business library
    async clickOnConfirm_btn(){
        await (this.confirm_btn).click()
    }
    async isAlertPresent(){
       let result=await browser.isAlertOpen()
       expect(result).to.be.true
    }
    async capture_ApplicationNo(){
        var text=await browser.getAlertText()
        console.log(text);
        var matches = text.match(/(\d+)/);
        console.log(matches);
        let appno=matches[0];
        await browser.acceptAlert()
        return appno
    }
}
export default new ConfirmPage()