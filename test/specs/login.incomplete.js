import loginPage from '../pageobjects/login.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };

describe('Login attempt with incomplete credentials', () => {
    before(async () =>{
        await loginPage.openSignIn();
    })
    it('should not login with incomplete credentials', async () => {
        await loginPage.btnSubmit.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}signin`);
        await expect(loginPage.btnSubmit).toBeDisabled();
        await expect(loginPage.usernameHelper).toBeDisplayed();
        await loginPage.inputUsername.setValue(`${testData.user.nickname}`);
        await expect(loginPage.btnSubmit).toBeDisabled();
        await expect(loginPage.usernameHelper).not.toBeDisplayed();
        await browser.refresh();
        await loginPage.inputPassword.setValue(`${testData.user.password}`);
        await expect(loginPage.btnSubmit).toBeDisabled();
        await expect(loginPage.usernameHelper).toBeDisplayed();
    })
})
