describe("Switching to child windows", async()=>{
    it("Windows switch ex",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await browser.pause(3000)
        console.log(await browser.getTitle())
        await $(".blinkingText").click()
        const windowHandles=await browser.getWindowHandles()
        await browser.switchToWindow(windowHandles[1])
        await browser.pause(3000)
        console.log(await browser.getTitle())
        await browser.closeWindow()
        await browser.switchToWindow(windowHandles[0])
        await browser.pause(3000)
        console.log(await browser.getTitle())
        await browser.newWindow("https://google.com")
        await browser.pause(3000)
        console.log(await browser.getTitle())
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise")
        await browser.pause(3000)
        console.log(await browser.getTitle())



    })


})