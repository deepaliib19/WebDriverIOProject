const expecthai = import("chai").expect
describe("Webtables", async()=>{
    xit("Table sorting example",async()=>{
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await browser.maximizeWindow()
        await browser.pause(3000)
        // //Vegies before clicking on vegginame tab
        // const VeggiLocators = await $$("tbody tr td:nth-child(1)")
        // let VeggiNames= await VeggiLocators.map(async veggiLoc=> await veggiLoc.getText())
        // console.log("Before clicking on Veggis tab:",VeggiNames)
        // await $("thead tr th:nth-child(1)").click()
        // await browser.pause(3000)
        // //Vegies after clicking on vegginame tab
        const originalVeggiLocators = await $$("tbody tr td:nth-child(1)")
        let originalVeggiNames= await originalVeggiLocators.map(async veggiLoc=> await veggiLoc.getText())
        console.log("After clicking on Veggis tab:",originalVeggiNames)
        await browser.pause(3000)
        let Veggis = originalVeggiNames.slice()
        console.log("Copy of OriginalVeggies:",Veggis)
        let sortedVeggis = Veggis.sort()
        console.log("After sorting Copy of OriginalVeggies:",sortedVeggis)
        await expect(originalVeggiNames).toEqual(sortedVeggis)

    })
    it("Serach table filtering",async()=>{
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await browser.maximizeWindow()
        await browser.pause(3000)
        await $("#search-field").setValue("Potato")
        const veggiesLoc= await $$("tbody tr td:nth-child(1)")
        await expect(veggiesLoc).toBeElementsArrayOfSize({eq:1})
        console.log(await veggiesLoc[0].getText())
        await expect(await veggiesLoc[0]).toHaveText("Potato")

    })


})