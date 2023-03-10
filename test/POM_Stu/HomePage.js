class HomePage{
    get classroom_link(){
        return $(`//span[contains(.,"Classroom")]`)
    }
    get teacher_link(){
        return $(`//span[text()="Teacher"]`)
    }
    get addteacher_link(){
        return $(`//a[text()=" Add Teacher"]`)
    }
    async clickOnClassroom_link()
    {
        const class_link=await (this.classroom_link)
        expect(await class_link.waitForClickable({ timeout: 3000 })).to.be.true
        await (this.classroom_link).click()
    }
    async clickOnTeacher(){
        await (this.teacher_link())
    }
    async clickOnAddTeacher(){
        const add=await (this.addteacher_link)
        expect(await add.waitForDisplayed({ timeout: 5000 })).to.be.true
    }
}
export default new HomePage()