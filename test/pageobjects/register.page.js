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

    async register (firstName, lastName, username, password) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(password);
        await this.btnSubmit.click();
    }

    openSignUp () {
        return super.open('signup');
    }
}

export default new RegisterPage();
