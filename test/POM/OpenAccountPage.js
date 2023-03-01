class OpenAccountPage
{
    
    get name_tf(){
        return $(`[name="name"]`)
    }
    get gender(){
        return $(`[name="gender"]`)
    }
    get mobileno_tf(){
        return $(`[name="mobile"]`)
    }
    get emailid_tf(){
        return $(`[name="email"]`)
    }
    get landlineno_tf(){
        return $(`[name="landline"]`)
    }
    get dateOfBirth_tf(){
        return $(`[name="dob"]`)
    }
    get pan_tf(){
        return $(`[name="pan_no"]`)
    }
    get citizenship_tf(){
        return $(`[name="citizenship"]`)
    }
    get homeaddress_tf(){
        return $(`[name="homeaddrs"]`)
    }
    get officeaddress_tf(){
        return $(`[name="officeaddrs"]`)
    }
    get state_tf(){
        return $(`[name="state"]`)
    }
    get city_tf(){
        return $(`[name="city"]`)
    }
    get pincode_tf(){
        return $(`[name="pin"]`)
    }
    get locality_tf(){
        return $(`//input[@name="arealoc"]`)
    }
    get nomineeName_tf(){
        return $(`[name="nominee_name"]`)
    }
    get nomineeAcc_tf(){
        return $(`[name="nominee_ac_no"]`)
    }
    get accounttype(){
        return $(`[name="acctype"]`)
    }
    get submit_btn(){
        return $(`//input[@name="submit"]`)
    }
   //business library
   async validDetails()
   {
    await (this.name_tf).setValue("Diya17")
    const gen=await (this.gender)
    gen.selectByVisibleText("Female")
    await (this.mobileno_tf).setValue(9762354124)
    await (this.emailid_tf).setValue("diya17@gmail.com")
    await (this.landlineno_tf).setValue(223344)
    await (this.dateOfBirth_tf).setValue("24-07-1994")
    await (this.pan_tf).setValue("AZDIJ4855H")
    await (this.citizenship_tf).setValue("345677")
    await (this.homeaddress_tf).setValue("banshankari")
    await (this.officeaddress_tf).setValue("BTM")
    const state=await (this.state_tf)
    state.selectByVisibleText("Florida")
    const city=await (this.city_tf)
    city.selectByVisibleText("Houston")
    await (this.pincode_tf).setValue(560077)
    await (this.locality_tf).setValue("School")
    await (this.nomineeName_tf).setValue("Rahul")
    await (this.nomineeAcc_tf).setValue(2345781234)
    const acctype=await (this.accounttype)
    acctype.selectByVisibleText("Saving")
    }
    async clickOnSubmit_btn(){
    const submitbtn=await (this.submit_btn)
    await submitbtn.waitForClickable({ timeout: 10000 });
    await submitbtn.click()
    }

}
export default new OpenAccountPage()