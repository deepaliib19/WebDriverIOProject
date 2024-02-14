describe("HeroruappLoginRecord", () => {
  it("tests HeroruappLoginRecord", async () => {
    await browser.setWindowSize(729, 641)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretePassword!")
    await browser.$(".fa-sign-in").click()
  });
});
