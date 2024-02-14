class OrderPlacedPage{
    get country(){
        return $("#country")
    }
    get blinkingdots(){
        return $(".lds-ellipsis")
    }
    get primaryCheckout(){
      return $(".btn-success")
    }
    get alertSuccess(){
        return $(".alert-success")
    }
    async placeOrder(countryName){
        await this.country.setValue(countryName)
        await this.blinkingdots.waitForExist({reverse:true})
        await $("=India").click()
        await this.primaryCheckout.click()
        console.log(await this.alertSuccess.getText())

    }

}
module.exports=new OrderPlacedPage()