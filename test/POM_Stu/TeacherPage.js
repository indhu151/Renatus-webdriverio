class TeacherPage
{
    get index_tf(){
        return $(`//input[@name="index_number"]`)
    }
    get name_tf(){
        return $(`//input[@name="full_name"]`)
    }
    get namewithIntial_tf(){
        return $(`//input[@name="i_name"]`)
    }
    get address_tf(){
        return $(`//input[@name="address"]`)
    }
    get gender_drop(){
        return $(`//input[@name="gender"]`)
    }
    get mail_tf(){
        return $(`//input[@name="email"]`)
    }
    get phone(){
        return $(`//input[@name="phone"]`)
    }
   
   
    get upload_photo(){
        return $(`//input[@name="fileToUpload"]`)
    }
    get submit_link(){
        return $(`//button[@id="btnSubmit"]`)
    }
    async details_teacher(){
        await (this.index_tf).setValue(21)
        await (this.name_tf).setValue("ria")
        await (this.namewithIntial_tf).setValue("Ria R")
        await (this.address_tf).setValue("BTM")
        const gen=await (this.gender_drop)
        await gen.selectByIndex(2)
        await (this.phone).setValue(9876546754)
        await (this.mail).setValue("ria@gmail.com")
        
       
    }
}