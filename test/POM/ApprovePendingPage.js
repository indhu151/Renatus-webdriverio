import { expect } from "chai"


class ApprovePendingPage{
    get applicationNo_tf(){
        return $(`//input[@name="application_no"]`)
    }
    get search_Btn(){
        return $(`//input[@name="search_application"]`)
    }
    get data(){
        return $(`//td[text()="mani15"]`)
    }
    get approve_btn(){
        return $(`//input[@name="approve_cust"]`)
    }
    //business library
    async searchApplication_Approve(applicationnum){
        await (this.applicationNo_tf).setValue(applicationnum)
        await (this.search_Btn).click()
        const details=await (this.data)
        expect(await details.waitForExist({timeout:6000})).to.be.true
        await (this.approve_btn).click()
    }
       async capture_AccountNumber(){
        let result=await browser.isAlertOpen()
        expect(result).to.be.true
        const text1= await browser.getAlertText()
        var matches1 = text1.match(/(\d+)/);
        console.log(matches1);
        let accno=matches1[0];
        console.log("Account_Number ="+accno);
        await browser.acceptAlert()
        return accno
    }

}
export default new ApprovePendingPage()