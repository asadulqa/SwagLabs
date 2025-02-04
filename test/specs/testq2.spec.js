const StandarAction = require('../pageobjects/q2/standarduser.page.js')

describe("standard user try to visit website", () => {

    it("should login with valid username and valid password", async () => {
        await StandarAction.enterUsername();
        await StandarAction.enterPassword();
        await StandarAction.clickLogin();

    });

    it("click on the hamburger menu Reset App State", async () => {
        await StandarAction.clickMenuButton();
        await StandarAction.clicResetButton();
        
    });

    it("Add to cart 3 products", async () => {
        await StandarAction.addToCart1();
        await StandarAction.addToCart2();
        await StandarAction.addToCart3();
    });

    it("click on the shipping and checkout", async () => {
        await StandarAction.clickShipping();
        await StandarAction.clickCheckout();
    });

    it("Enter the personal information", async () =>{
        await StandarAction.firstName();
        await StandarAction.lastName();
        await StandarAction.zipCode();
        await StandarAction.countineButton();
    });

    it ("Verify the products title", async () =>{
        const actualtitle1 = await StandarAction.title1();
        console.log(actualtitle1);
        const expectTitle1 = 'Sauce Labs Backpack';
        await expect(actualtitle1).toContain(expectTitle1);

        const actualtitle2  = await StandarAction.title2();
        console.log(actualtitle2);
        const expectTitle2 =  "Sauce Labs Bike Light";
        await expect(actualtitle2).toContain(expectTitle2);

        const actualtitle3 = await StandarAction.title3();
        console.log(actualtitle3);
        const expectTitle3 = "Sauce Labs Bolt T-Shirt";
        await expect(actualtitle3).toContain(expectTitle3);

    });

    it("verify the product price with total price", async() =>{
        const actualprice1  = await StandarAction.price1();
        let stagingValuepice1 = parseFloat(actualprice1.replace("$"," ")); 
        console.log(stagingValuepice1);
        
        const actualprice2  = await StandarAction.price2();
        let stagingValuepice2 = parseFloat(actualprice2.replace("$", " ")); 
        console.log(stagingValuepice2);

        const actualprice3 = await StandarAction.price3();
        let  stagingValuepice3 = parseFloat(actualprice3.replace("$", " "));
        console.log(stagingValuepice3);

        const actualTotalprice1 = (stagingValuepice1+ stagingValuepice2 + stagingValuepice3);
        console.log(actualTotalprice1);


        await StandarAction.scrollPage();

        const expectPrice = await StandarAction.totalPrice();
        console.log(expectPrice);
        await expect(actualTotalprice1).toBeCloseTo(expectPrice);


    });

    it("finish the checkout", async () => {
        await StandarAction.finishButton();
        const successOrderB= await StandarAction.successbanner()
        console.log(successOrderB);
        await expect(successOrderB).toContain('Thank you for your order!');
    });

    it ("click on the humbergar manu and logout the webstie", async ()=>{
        await StandarAction.clickMenuButton();
        await StandarAction.logoutButtion();


    })





    

});
