import { expect } from "chai";

class ActiveCustomerPage
{
    get datafromTable(){
        return $$(`//tbody/tr/th[4]/../../tr/td[4]`)
    }
    //business library
    async check_Account_no(accno){
        let data=await (this.datafromTable)
        for (let i=0;i<=data.length;i++)
        {
            const element = await data[i].getText();
            console.log(element)
            if(element==accno)
            {
                console.log("account is present");
                break
            }
            
        }
    }
}
export default new ActiveCustomerPage()