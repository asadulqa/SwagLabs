const Standar = require("./standarduser")

class StandarUserAction{
       async enterUsername() {
            await Standar.enterUserName.setValue("standard_user");
        }
    
        async enterPassword() {
            await Standar.enterPassword.setValue("secret_sauce");
        }
    
        async clickLogin() {  
            await Standar.loginButton.click();
        }

        async clickMenuButton(){
            await Standar.humbergerButton.click();
        
        }

        async clicResetButton(){
            await Standar.clickResetApp.click();
        }

        async addToCart1 (){
            await Standar.productCart1.click();

        }
        async addToCart2 (){
            await Standar.productCart2.click();

        }
        async addToCart3(){
            await Standar.productCart3.click();
        }

        async clickShipping(){
            await Standar.clickShippingCart.click();
        
        }

        async clickCheckout(){
            await Standar.clickCheckout.click();
        }

        async firstName(){
            await Standar.enterfirstName.setValue("Md Asadul");
        }

        async lastName(){
            await Standar.enterLastName.setValue("Haque");
        }
        
        async zipCode(){
            await Standar.enterZipcode.setValue("6740");

        }
        async countineButton(){
            await Standar.clickCountine.click();

        }

        async title1(){
            return await Standar.productTitile1.getText();
        }

        async title2 (){
            return await Standar.productTitile2.getText();
        }

        async title3(){
            return await Standar.productTitile3.getText();
        }

        async price1 (){
            return await Standar.productprice1.getText();
        }
        async price2 (){
            return await Standar.productprice2.getText();
        }
        async price3 (){
            return await Standar.productprice3.getText();
            

        }
        async scrollPage(){
            await browser.execute("window.scrollBy(0, 500);");
            await browser.pause(3000);
        }

        async totalPrice(){
            const price_element = await Standar.totalPricem.getText();
            return parseFloat(price_element.replace("Item total: $", " "));

        }
        async finishButton(){
            await Standar.finishButton.click();
        }
        async successbanner (){
            return await Standar.successOrder.getText();
        }

        async logoutButtion(){
            await Standar.logoutbutton.click();
        }


}

module.exports = new StandarUserAction()