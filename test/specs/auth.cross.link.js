import loginPage from '../pageobjects/login.page.js';
import registerPage from '../pageobjects/register.page.js';

describe('Cross-links between authorization pages', () => {
    before(async () =>{
        await loginPage.openSignIn();
    })
    it('should test crossing links between "sign in" and "sign out" pages', async () => {
        await loginPage.redirectToSignUp();
        await expect(browser).toHaveUrl(`${process.env.ENV}signup`);
        await registerPage.redirectToSignIn();
        await expect(browser).toHaveUrl(`${process.env.ENV}signin`);
    })
})
