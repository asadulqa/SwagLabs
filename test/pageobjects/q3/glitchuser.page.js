const Glich = require("./glitchuser")

class GlithcUserAction{
       async enterUsername() {
            await Glich.enterUserName.setValue("performance_glitch_user");
        }
    
        async enterPassword() {
            await Glich.enterPassword.setValue("secret_sauce");
        }
        async clickLogin() {  
            await Glich.loginButton.click();
        }
        async clickMenuButton(){
            await Glich.humbergerButton.click();
        
        }
        async clicResetButton(){
            await Glich.clickResetApp.click();
        }
        async filterbutton(){
            await Glich.filterProduct.click();
        }
        async addCart(){
            await Glich.addCartProduct.click();
        }
        async clickShipping(){
            await Glich.clickShippingCart.click();
        }
        async clickCheckout(){
            await Glich.clickCheckout.click();
        }
        async firstName(){
            await Glich.enterfirstName.setValue("Md Asadul");
        }
        async lastName(){
            await Glich.enterLastName.setValue("Haque");
        }
        async zipCode(){
            await Glich.enterZipcode.setValue("6740");

        }
        async countineButton(){
            await Glich.clickCountine.click()
        }
        async title(){
            return await Glich.productTitle.getText();
        }
        async productprice(){
            const productP = await Glich.productPrice.getText();
            return parseFloat(productP.replace("$", " "));
        }
        async totalPrice(){
            const priceNumer = await Glich.totalprice.getText();
            return parseFloat(priceNumer.replace("Item total: $", " "));
        }
        async finishButton(){
            await Glich.finishButton.click();
            

        }
        async successbanner (){
            return await Glich.successOrder.getText();
        }

        async logoutButtion(){
            await Glich.logoutbutton.click();
        }



}


module.exports = new GlithcUserAction();