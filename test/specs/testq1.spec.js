const LockAction = require('../pageobjects/q1/lockoutuser.page.js')

describe("Locked out user try to visit website", () => {

    it("should login with valid username and valid password", async () => {
        await LockAction.enterUsername();
        await LockAction.enterPassword();
        await LockAction.clickLogin();

    });

    it("verify the error message", async () => {
        const actualName = await LockAction.errorMeasses(); 
        console.log(actualName);
        const expectedMessage = 'Epic sadface: Sorry, this user has been locked out.';
        await expect(actualName).toContain(expectedMessage);
    });
    

});
