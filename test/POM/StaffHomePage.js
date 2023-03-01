class StaffHomePage{
    get activeCust_btn(){
        return $(`//input[@name="viewdet"]`)
    }
    get view_Cust_Byaccno_btn(){
        return $(`//input[@name="view_cust_by_ac"]`)
    }
    get approvePending_btn(){
        return $(`//input[@name="apprvac"]`)
    }
    get deleteCust_btn(){
        return $(`//input[@name="del_cust"]`)
    }
    get creditCust_btn(){
        return $(`//input[@name="credit_cust_ac"]`)
    }
    get staff_home_link(){
        return $(`//input[@name="home"]`)
    }
    get staff_logout_link(){
        return $(`/input[@name="logout_btn"]`)
    }
    //business library
    async clickOnActiveCustomer_btn(){
        await (this.activeCust_btn).click()
    }
    async clickOnViewCust_Byaccno_btn(){
        await (this.view_Cust_Byaccno_btn).click()
    }
    async clickOnApprovePending_btn(){
        await (this.approvePending_btn).click()
    }
    async clickOnDeleteCust_btn(){
        await (this.deleteCust_btn).click()
    }
    async clickOnCreditCust_btn(){
        await (this.creditCust_btn).click()
    }
    async clickOnStaff_home_link(){
        await (this.staff_home_link).click()
    }
    async clickOnStaff_logout_link(){
        await (this.staff_logout_link).click()
    }
}
export default new StaffHomePage()