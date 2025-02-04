const Lockout = require('./lockout')

class LockoutUserActions {
    async enterUsername() {
        await Lockout.enterUserName.setValue("locked_out_user");

    }

    async enterPassword() {
        await Lockout.enterPassword.setValue("secret_sauce");

    }

    async clickLogin() {  
        await Lockout.loginButton.click();

    }

    async errorMeasses(){
        return await Lockout.errorMeasses.getText();
        

    }
}

module.exports = new LockoutUserActions();