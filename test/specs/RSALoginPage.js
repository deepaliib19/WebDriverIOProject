describe("Rahul shetty Academy Login Page practice 8th Feb 2024", async()=>{
    xit("Logging in with Invalid credentials", async()=>{
        await browser.maximizeWindow()
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log("Url of the page is:",await browser.getUrl())
        await expect(browser).toHaveUrlContaining("loginpage")
        await expect(browser).toHaveTitleContaining("LoginPage")
        const username= $("#username")
        await username.setValue("Deepali")
        const passWord= $("input[name='password']")
        await passWord.setValue("Deepali")
        const submit= $("input[value='Sign In']")
        await submit.click()
        const alertmsg= $(".alert.alert-danger")
        await alertmsg.waitForDisplayed()
        console.log("Browser alert says:",await alertmsg.getText())
        const pText= $("p.text-center")
        console.log("Application says:",await pText.getText())

    })
    xit("Logging in with valid credentials", async()=>{
        await browser.maximizeWindow()
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log("Url of the page is:",await browser.getUrl())
        const username= $("#username")
        await username.setValue("rahulshettyacademy")
        const passWord= $("input[name='password']")
        await passWord.setValue("learning")
        const userRadio= $("input[value='user']")
        await userRadio.click()
        const modalBody = $(".modal-body")
        await modalBody.waitForDisplayed()
        console.log(await modalBody.getText())
        const okayBtn= $("#okayBtn")
        await okayBtn.click()
        const statdrop=$("select.form-control")
        await statdrop.selectByAttribute("value","stud")
        await expect(statdrop).toHaveValue("stud")
        const check=$("#terms")
        await check.click()
        await expect(check).toBeSelected()
        const submit= $("input[value='Sign In']")
        await submit.click()
        const checkout= $("a.btn-primary")
        await checkout.waitForExist()



    })
    it("Practicing uiControls like radio btns,checkboxes,dropdowns", async()=>{
        await browser.maximizeWindow()
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        let rdobtns=await $$("//input[@class='radioButton']")
        //console.log(rdobtns)
        // await rdobtns[1].click()
        // await browser.pause(3000);
        for(var i=0; i<await rdobtns.length;i++){

            console.log(await rdobtns[i].getValue())
            if(await rdobtns[i].getValue()==='radio3'){
                await rdobtns[i].click()
                //console.log("Selected radio button is:",rdobtns[i].getValue())
                //await expect(rdobtns[i]).toBeSelected()
                break;
            }
        }
        await browser.pause(3000);
        //await expect(rdobtns[2]).toBeSelected()
        await $("#autocomplete").setValue("ind")
        await $("#ui-id-1").waitForDisplayed()
        let items=await $$(".ui-menu-item div")
        
        console.log(await items.length)
        for(var i=0;i<await items.length;i++)
        {
            console.log(await items[i].getText())
            await browser.pause(3000)
            if(await items[i].getText()==="India"){
                await items[i].click()
                break;
            }
        }
        // const india= $("//li[@class='ui-menu-item']/div[text()='India']")
        // await india.click()
        console.log("Selected country is:",await $("#autocomplete").getValue())
        await browser.pause(3000)

    })




})