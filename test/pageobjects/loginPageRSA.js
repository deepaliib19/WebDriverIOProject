class LoginPageRSA
{
    get username()
    {
        return $("#username")
    }
    get password()
    {
        return $("input[type='password']")
    }
    get submit()
    {
        return $(".btn.btn-info.btn-md")
    }
    get usernameErrText()
    {
        return $(".text-center.text-white")
        
    }
    get alert()
    {
        return $(".alert-danger")
    }
    async Login(userName,passWord){
        await this.username.setValue(userName)
        await this.password.setValue(passWord)
        await this.submit.click()

    }

}
module.exports=new LoginPageRSA