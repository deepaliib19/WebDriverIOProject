describe("Google.com search Products and their validation", async()=>{
    it("Search a product and validate its an correct search", async()=>{
        await browser.maximizeWindow()
        await browser.url("https://www.amazon.com/")
        await expect(browser).toHaveUrl("https://www.amazon.com/")
        const searchField= $("#twotabsearchtextbox")
        await searchField.setValue("mobile")
        const submitBtn=$("#nav-search-submit-button")
        await submitBtn.click()
        //await expect($(".left-pane-results-container")).toBeDisplayed()
        
        //await expect($(".a-color-state.a-text-bold")).toBeExisting()
        await expect($(".a-color-state.a-text-bold")).toHaveTextContaining("mobile")

    })
})