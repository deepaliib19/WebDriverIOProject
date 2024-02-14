const expecthai = import("chai").expect
describe("Login Page application", async()=>{
    xit("Uicontrols for radiobuttons",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        const username = $("#username")
        await username.setValue("rahulshettyacademy")
        const password = $("input[type='password']")
        await password.setValue("learning")
        const radiobuttons= $$(".customradio")
        console.log(await radiobuttons[0].isSelected())
        await radiobuttons[1].click()
        await $(".modal-content").waitForDisplayed()
        await $(".modal-content div:last-child #cancelBtn").click()
        await radiobuttons[0].click()
        await expect($(".modal-content")).not.toBeDisplayed()
        await radiobuttons[1].click()
        await $(".modal-content").waitForDisplayed()
        await $(".modal-content div:last-child #okayBtn").click()

        const statdropdown= await $("select.form-control")
        statdropdown.selectByAttribute("value","stud")
        await browser.pause(3000)
        statdropdown.selectByIndex(1)
        await browser.pause(3000)
        statdropdown.selectByVisibleText("Consultant")
        await browser.pause(3000)
        console.log(await statdropdown.getValue())
        expect(await statdropdown.getValue()).toEqual("consult")
        await browser.pause(3000)
    })
    xit("Uicontrols for dynamic dropdown and checkboxes",async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000)
        let dynDropdowns= await $$(".ui-menu-item div")
        for(let i=0; i<dynDropdowns.length; i++){
            console.log(await dynDropdowns[i].getText())
        }
        await browser.pause(3000)
        for(let i=0; i<dynDropdowns.length; i++){
            if(await dynDropdowns[i].getText()==="India"){
                await dynDropdowns[i].click()
                break
            }
            
        }
        await browser.pause(3000)
        let checkBoxes = await $$('input[type="checkbox"]')
        await checkBoxes[0].click()
        for(let i=0;i<checkBoxes.length;i++){
            if(await checkBoxes[i].getValue()==="option3")
            {
            await checkBoxes[i].click()
            break
            }
        }
        await browser.pause(3000)
        await expect($("#checkBoxOption3")).toBeSelected()
        await browser.saveScreenshot("AutomationPract.png")
    })
    it("Uicontrols for scrollinto an element viewpoint and Handle JS Alerts",async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        browser.maximizeWindow()
        await browser.pause(3000)
        await $("#mousehover").scrollIntoView()
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        await browser.pause(3000)
        await $("=Top").click()
        await browser.pause(3000)
        await $("//legend[text()='Switch To Alert Example']").scrollIntoView()
        await $("#name").setValue("Deepali")
        await $("#alertbtn").click()
        console.log(await browser.isAlertOpen())
        
        await expect(await browser.getAlertText()).toEqual("Hello Deepali, share this practice page and share your knowledge")
        await browser.acceptAlert()


    })
})