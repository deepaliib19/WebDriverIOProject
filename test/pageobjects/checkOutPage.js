class CheckOutPage{
    get productPrices(){
        return $$("//tr/td[4]/strong")
    }
    get checkOut(){
        return $("//button[contains(text(),'Checkout')]")
    }
    async productSum(){
        const prodprices= await this.productPrices.map(async(prodprice)=>prodprice.getText())
        console.log("Product Prices are:", prodprices)
        const sumOfProds = (await this.productPrices.map(async(prodPrice)=>parseInt((await prodPrice.getText()).split(".")[1].trim()))).reduce((acc,price)=>acc+price,0)
        console.log("Sum of Prods is:", sumOfProds)
    }



}
module.exports= new CheckOutPage()