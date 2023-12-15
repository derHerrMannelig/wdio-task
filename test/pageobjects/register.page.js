import Page from './page.js'

class RegisterPage extends Page {
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get inputPasswordConfirmation () {
        return $('#confirmPassword');
    }

    get inputFirstName () {
        return $('#firstName');
    }

    get inputLastName () {
        return $('#lastName');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get registerError () {
        return $('div[role="alert"]');
    }

    get linkSignIn () {
        return $('a[href="/signin"]');
    }

    async register (firstName, lastName, username, password) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(password);
        await this.btnSubmit.click();
    }

    async redirectToSignIn () {
        await this.linkSignIn.click();
        if (await browser.getUrl() == `${process.env.ENV}signup`) {
            await this.linkSignIn.click();
        }
    }

    openSignUp () {
        return super.open('signup');
    }
}

export default new RegisterPage();
