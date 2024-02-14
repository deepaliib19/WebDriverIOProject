const expectChai= require('chai').expect
describe("End to end shopping cart application", async()=>{
    it("Login to add products to cart and placing order successfully",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await browser.pause(3000)
        let products =["iphone X","Blackberry"]
        const username =await $("#username")
        await username.setValue("rahulshettyacademy")
        const password =await $("input[type='password']")
        await password.setValue("learning")
        const submit =await $(".btn.btn-info.btn-md")
        await submit.click()
        const checkOut = await $(".btn-primary")
        await checkOut.waitForExist()
        await expect(browser).toHaveUrl("https://rahulshettyacademy.com/angularpractice/shop")
        await expectChai(await browser.getTitle()).to.equal("ProtoCommerce")
        const cards= await $$("div[class='card h-100']")
        for(let i=0;i< cards.length;i++)
        {
            const card= await cards[i].$("div h4 a")
            if(products.includes(await card.getText()))
            {
                await cards[i].$("div button").click()
            }

        }
        await browser.pause(3000)
        console.log(await checkOut.getText())
        await checkOut.click()
        const productPrices= await $$("//tr/td[4]/strong")
        const productPrice=await productPrices.map(async(prodPrice)=>parseInt((await prodPrice.getText()).split(".")[1].trim()))
        console.log("Products prices are:",productPrice)
        await browser.pause(3000)
        const sumOfProducts= productPrice.reduce((acc,price)=>acc+price,0)
        console.log("Sum of products is:",sumOfProducts)
        await $("//button[contains(text(),'Checkout')]").click()
        await $("#country").setValue('ind')
        await browser.pause(3000)
        await $(".lds-ellipsis").waitForExist({reverse:true})
        await $("=India").click()
        await $(".checkbox-primary").click()
        expect(await $(".alert-success")).toHaveText("Success! Thank you! Your order will be delivered in next few weeks :-).")
        
    })

})