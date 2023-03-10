import { expect } from "chai"

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
    await (this.name_tf).setValue("mani2")
    const gen=await (this.gender)
    expect(await gen.waitForDisplayed({timeout:5000})).to.be.true
    await gen.selectByVisibleText("Female")
    await (this.mobileno_tf).setValue(9272653124)
    await (this.emailid_tf).setValue("mani2@gmail.com")
    await (this.landlineno_tf).setValue(225544)
    await (this.dateOfBirth_tf).setValue("21-06-1996")
    await (this.pan_tf).setValue("AZDTJ4365H")
    await (this.citizenship_tf).setValue("345677")
    await (this.homeaddress_tf).setValue("banshankari")
    await (this.officeaddress_tf).setValue("BTM")
    const state=await (this.state_tf)
    expect(await state.waitForExist({timeout:3000})).to.be.true
    await state.selectByVisibleText("Florida")
    const city=await (this.city_tf)
    expect(await city.waitForDisplayed({timeout:5000})).to.be.true
    await city.selectByVisibleText("Houston")
    await (this.pincode_tf).setValue(560077)
    await (this.locality_tf).setValue("School")
    await (this.nomineeName_tf).setValue("Rahul")
    await (this.nomineeAcc_tf).setValue(2345781234)
    const acctype=await (this.accounttype)
    expect(await acctype.waitForExist({timeout:3000})).to.be.true
    await acctype.selectByVisibleText("Saving")
    }
    async clickOnSubmit_btn(){
    const submitbtn=await (this.submit_btn)
    await submitbtn.waitForClickable({ timeout: 10000 });
    await submitbtn.click()
    }

}
export default new OpenAccountPage()