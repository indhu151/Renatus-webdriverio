class StaffHomePage{
    get activeCust_link(){
        return $(`//input[@name="viewdet"]`)
    }
    get view_Cust_Byaccno_link(){
        return $(`//input[@name="view_cust_by_ac"]`)
    }
    get approvePending_link(){
        return $(`//input[@name="apprvac"]`)
    }
    get deleteCust_link(){
        return $(`//input[@name="del_cust"]`)
    }
    get creditCust_link(){
        return $(`//input[@name="credit_cust_ac"]`)
    }
    get staff_home_btn(){
        return $(`//input[@name="home"]`)
    }
    get staff_logout_btn(){
        return $(`/input[@name="logout_btn"]`)
    }
    //business library
    async clickOnActiveCustomer(){
        await (this.activeCust_link).click()
    }
    async clickOnViewCust_Byaccno(){
        await (this.view_Cust_Byaccno_link).click()
    }
    async clickOnApprovePending(){
        await (this.approvePending_link).click()
    }
    async clickOnDeleteCust(){
        await (this.deleteCust_link).click()
    }
    async clickOnCreditCust(){
        await (this.creditCust_link).click()
    }
    async clickOnHomebt_Staff(){
        await (this.staff_home_btn).click()
    }
    async clickOnLogoutbtn(){
        await (this.staff_logout_btn).click()
    }
}
export default new StaffHomePage()