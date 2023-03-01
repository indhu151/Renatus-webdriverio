class ConfirmPage
{
    
    get confirm_btn(){
        return $(`//input[@name="cnfrm-submit"]`)
    }
    //business library
    async clickOnConfirm(){
        await (this.confirm_btn).click()
    }
    async isAlertPresent(){
       console.log(await browser.isAlertOpen())
    }
    async ApplicationNo(){
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