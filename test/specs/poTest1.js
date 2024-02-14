const loginPageRSA=require("../pageobjects/loginPageRSA")
const addingToCart=require("../pageobjects/addingToCart")
const checkOutPage=require("../pageobjects/checkOutPage")
const orderPlacedPage=require("../pageobjects/orderPlacedPage")
const fs=require("fs")
let credentials= JSON.parse(fs.readFileSync('test/testData/loginData.json'))
let eToecredentials=JSON.parse(fs.readFileSync('test/testData/eToeTestingData.json'))
describe("Rahul shetty academy Login Page application", async()=>{
    xit("Login failure test invalid Username/Password",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await browser.pause(3000)
        await loginPageRSA.Login(userName,passWord)
        await browser.waitUntil(async()=> await loginPageRSA.submit.getAttribute('value')==="Sign In",
        {
            timeout:5000,
            timeoutMsg:"Error msg not appearing"
        })
        await loginPageRSA.alert.waitForDisplayed()
        await expect(await loginPageRSA.alert).toHaveText("Incorrect username/password.")
        await expect(await loginPageRSA.usernameErrText).toHaveText("(username is rahulshettyacademy and Password is learning)")
        await browser.pause(3000)

    })
    credentials.forEach(({userName,passWord})=> {
    eToecredentials.forEach(({products})=> {
    it("Placing an order in shopping cart",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await browser.pause(3000)
        await loginPageRSA.Login(userName,passWord)
        await addingToCart.checkOut.waitForExist()
        await browser.pause(3000)
        //let products=["iphone X","Blackberry"]
        await addingToCart.addProdToCart(products)
        await browser.pause(3000)
        await checkOutPage.productSum()
        await checkOutPage.checkOut.click()
        await browser.pause(3000)
        await orderPlacedPage.placeOrder("India")
        await browser.pause(3000)
        browser.tohaveTextCon
        
    })
  })
})
















})