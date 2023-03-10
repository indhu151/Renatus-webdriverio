// import chai, { expect } from "chai"
import LoginPage from "../../POM_Stu/LoginPage.js"
import HomePage from "../../POM_Stu/HomePage.js"
import ClassRoomPage from "../../POM_Stu/ClassRoomPage.js"
import { expect } from "chai"
//import { expect } from "chai"

describe("checking the classroom",()=>{
    it("enter into application",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Student_Management_System/view/login.php")
        expect(await browser.getTitle()).to.equal("Student Management System")
    })
    it("login details",async ()=>{
        await LoginPage.login_cred()
        await LoginPage.clickOnSubmit_btn()
    })
    it("click on teacher",async ()=>{
       await HomePage.clickOnTeacher()
       await HomePage.clickOnAddTeacher()
       expect(await browser.getUrl()).to.include("Student_Management_System/view/teacher.php")
    })
    it("Add the teacher detais",async ()=>{
        await ClassRoomPage.class_details()
        await ClassRoomPage.clickOnSubmit_btn()
    })
    // it("message from popup",async ()=>{
    //     const msg=await ClassRoomPage.getmsgFromPopup()
    //     console.log(msg);
    // })
    it("checking",async ()=>{
        await ClassRoomPage.check_classroom()

    })
})