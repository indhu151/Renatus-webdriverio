describe("Hotel management",()=>{
    let rname="Highlands Bar & Grill"
    let dishname="Chicken Madeira"
    let qty=2
    let quantity
    let cartprice
    let cartqty
    let total
    let menuprice
    let totalprice
    let cartdata=[]
    let menudata=[]
    it("enter into application",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/")
        console.log(browser.getTitle())
        expect(browser).toHaveTextContaining("Home")
    })
    it("click on restaurants module",async ()=>{
        await browser.$('//a[contains(text(),"Restaurants")]').click()
        //browser.pause(10000)
        expect(browser).toHaveUrlContaining("restaurants.php")
    })
    it("click on restaurants name",async ()=>{
        await browser.$(`//a[contains(text(),'${rname}')]`).click()
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("Dishes")
    })
    it("click on cart",async ()=>{
       quantity= await browser.$(`//a[contains(.,'${dishname}')]/../../../../..//input[@name="quantity"]`)
       await quantity.setValue(qty)
       await browser.$('//input[@value="Add To Cart"]').click()
    })
    it("cart values",async ()=>{
        cartprice=await browser.$(`#exampleSelect1`).getValue()
        console.log("price in cart = "+cartprice);
        cartqty=await browser.$(`#example-number-input`).getValue()
        console.log("quantity in cart = "+cartqty);
        total=await browser.$(`//strong`).getText()
        console.log("total price in cart = "+total);
        cartdata.push(cartprice)
        cartdata.push(cartqty)
        cartdata.push(total)


    })
    it("menu values",async ()=>{
        menuprice=await browser.$(`//a[contains(.,'${dishname}')]/../../../../..//span`).getText()
        console.log("price in menu = "+menuprice);
        totalprice=menuprice*qty
        menudata.push(menuprice)
        menudata.push(qty)
        menudata.push(totalprice)
    })
    it("verification",async ()=>{
        expect(cartqty).toHaveText(qty)
        expect(cartprice).toHaveText(menuprice)
        
        expect(total).toHaveText(totalprice)
        for(let i=0;i<cartdata.length;i++)
        {
            if(cartdata[i]==menudata[i])
            {
                console.log(i+"are same");
            }
        }
        
    })
})