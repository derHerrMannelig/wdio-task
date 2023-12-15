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

    get footerLink () {
        return $('a[rel="noopener noreferrer"]');
    }

    get linkSignUp () {
        return $('a[data-test="signup"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async redirectToSignUp () {
        await this.linkSignUp.click();
        if (await browser.getUrl() == `${process.env.ENV}signin`) {
            await this.linkSignUp.click();
        }
    }

    openSignIn () {
        return super.open('signin');
    }
    openBaseUrl () {
        return super.open('');
    }
}

export default new LoginPage();
