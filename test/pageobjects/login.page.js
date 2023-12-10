import Page from './page.js'

class LoginPage extends Page {
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get loginError () {
        return $('div[role="alert"]');
    }

    get usernameHelper () {
        return $('p#username-helper-text');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    openSignIn () {
        return super.open('signin');
    }
    openBaseUrl () {
        return super.open('');
    }
}

export default new LoginPage();
