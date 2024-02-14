describe("HeroruappLoginRecord", () => {
  it("tests HeroruappLoginRecord", async () => {
    await browser.maximizeWindow()
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretePassword!")
    await browser.$(".fa-sign-in").click()
    //await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await expect($("//div[contains(text(),'Your password')]")).toBeDisplayed()
    //await browser.pause(3000)
    console.log(await $("//div[contains(text(),'Your password')]").getText())
  });
});
