class GlitchuserObjects{
    get enterUserName() { 
        return $('//input[@id="user-name"]'); 
    } 

    get enterPassword() { 
        return $('//input[@id="password"]'); 
    }

    get loginButton() { 
        return $('//input[@id="login-button"]'); 
    }

    get humbergerButton(){
        return $ ('//button[@id="react-burger-menu-btn"]');
    }

    get clickResetApp (){
        return $ ('//a[@id="reset_sidebar_link"]');
    }
    get filterProduct(){
        return $ ("//select[@class='product_sort_container']");
    }
    get addCartProduct(){
        return $ ('//button[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
    get clickShippingCart(){
        return $ ('//a[@class="shopping_cart_link"]');
    }
    get clickCheckout(){
        return $ ('//button[@id="checkout"]');
    }
    get enterfirstName(){
        return $ ('//input[@placeholder="First Name"]');

    }
    get enterLastName(){
        return $ ('//input[@placeholder="Last Name"]');
    }
    get enterZipcode(){
        return $ ('//input[@placeholder="Zip/Postal Code"]');

    }
    get clickCountine(){
        return $ ( '//input[@id="continue"]');}

    get productTitle(){
        return $ ('//div[@data-test="inventory-item-name"]');
    }
    get productPrice(){
        return $ ('//div[@class="inventory_item_price"]');
    }
    get totalprice(){
        return $ ('//div[@class="summary_subtotal_label"]');
    }
    get finishButton(){
        return $ ('//button[@id="finish"]');

    }
    get successOrder(){
        return $ ("//h2[text()='Thank you for your order!']");

    }
    get logoutbutton(){
        return $ ('//a[@id="logout_sidebar_link"]');
    }




}
module.exports = new GlitchuserObjects()