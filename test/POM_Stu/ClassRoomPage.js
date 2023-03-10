class ClassRoomPage{
    get name_tf(){
        return $(`//input[@id="name"]`)
    }
    get studentCount_tf(){
        return $(`//input[@id="student_count"]`)
    }
    get submit_btn(){
        return $(`//button[@id="btnSubmit"]`)
    }
    get dataFromTable(){
        return $(`//tbody/tr/td[2]`)
    }
    async class_details(){
        await (this.name_tf).setValue("class js15")
        await (this.studentCount_tf).setValue(32)
    }
    async clickOnSubmit_btn(){
       const btn= await (this.submit_btn)
       await btn.click()
    } 
    // async getmsgFromPopup(){
    //     await 
    //    await browser.isAlertOpen()
    //    const msg= await browser.getAlertText()
    //    return msg

    // }
    async check_classroom(){
        let data=await (this.datafromTable)
        console.log(data);
        for (let i=0;i<=data.length;i++)
        {
            const element = await data[i].getText();
            console.log(element)
            if(element=="class js15")
            {
                console.log("classroom is present");
                break
            }
            
        }
    }
}
export default new ClassRoomPage()