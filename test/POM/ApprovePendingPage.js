

class ApprovePendingPage{
    get applicationNo_tf(){
        return $(`//input[@name="application_no"]`)
    }
    get search_Btn(){
        return $(`//input[@name="search_application"]`)
    }
    get approve_btn(){
        return $(`//input[@name="approve_cust"]`)
    }
    //business library
    async searchApplicationAndApprove(applicationnum){
        await (this.applicationNo_tf).setValue(applicationnum)
        await (this.search_Btn).click()
        await (this.approve_btn).click()
    }
       async AccountNumber(){
        console.log(browser.isAlertOpen())
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