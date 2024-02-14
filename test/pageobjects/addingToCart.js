class AddingtoCart
{

    get checkOut(){
        return $(".btn-primary")
    }
    get cards(){
        return $$("div[class='card h-100']")
    }
    async addProdToCart(products){
        for(let i=0;i< this.cards.length;i++)
        {
            const card= await this.cards[i].$("div h4 a")
            if(products.includes(await card.getText()))
            {
                console.log('this product is selected:',await card.getText())
                await this.cards[i].$(".card-footer button").click()
            }
        }
        await this.checkOut.click()
    }

}
module.exports=new AddingtoCart()