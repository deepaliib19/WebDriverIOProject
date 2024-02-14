describe("Login Page application", async()=>{
    xit("Login failure test Empty Username/Password",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
        await browser.pause(3000)
        // const username = $("#username")
        // (await username).setValue("")
        // const password = $("input[type='password']")
        // (await password).setValue("")
        const submit = $(".btn.btn-info.btn-md")
        await submit.click()
        // await browser.pause(3000)
        const alertmsg= $(".alert-danger")
        console.log(await alertmsg.getText())
        // await expect (browser).toHaveText("Empty username/password.")
        await browser.pause(3000)

    })
    xit("Login failure test invalid Username/Password",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
        await browser.pause(3000)
        const username = $("#username")
        await username.setValue("Sachin")
        const password = $("input[type='password']")
        await password.setValue("Sachin")
        const submit = $(".btn.btn-info.btn-md")
        await submit.click()
        const alertmsg= $(".alert-danger")
        console.log(await alertmsg.getText())
        // await expect (browser).toHaveText("Empty username/password.")
        await browser.pause(3000)

    })
    xit("Login with InValid Username and Password 2nd time",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
        await browser.pause(3000)
        const username = $("#username")
        await username.setValue("rahulshetademy ")
        const password = $("input[type='password']")
        await password.setValue("learning")
        await expect($(".text-center.text-white")).toHaveText("(username is rahulshettyacademy and Password is learning)")
        const submit = $(".btn.btn-info.btn-md")
        await submit.click()
        // await browser.waitUntil(async()=> await $(".btn.btn-info.btn-md").getAttribute('value')==="Sign In",
        // {
        //     timeout:5000,
        //     timeoutMsg:"Error msg not appearing"
        // })
         
        await $(".alert-danger").waitForDisplayed()
        await expect($(".alert-danger")).toHaveText("Incorrect username/password.")
        await browser.pause(3000)
    })
    it("Login with Valid Username and Password 3nd time",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
        await browser.pause(3000)
        const username = $("#username")
        await username.setValue("rahulshettyacademy")
        const password = $("input[type='password']")
        await password.setValue("learning")
        const submit = $(".btn.btn-info.btn-md")
        await submit.click()
        await $(".btn-primary").waitForExist()
        await expect(browser).toHaveUrl("https://rahulshettyacademy.com/angularpractice/shop")
    })







})