class CustomerHomePage
{
    get fundTransfer_Mod(){
        return $(`//li[text()="Fund Transfer"]`)
    }
    //business library
    async clickOnFundTransfer(){
       await (this.fundTransfer_Mod).click()
    }

}
export default new CustomerHomePage()