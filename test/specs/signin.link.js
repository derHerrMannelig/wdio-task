import loginPage from '../pageobjects/login.page.js';

describe('"Sign in" page footer link', () => {
    before(async () =>{
        await loginPage.openSignIn();
    })
    it('should test footer link on "sign in" page', async () => {
        await expect(loginPage.footerLink).toBeClickable();
        await expect(loginPage.footerLink).toHaveAttribute('href', 'https://cypress.io');
        await expect(loginPage.footerLink).toHaveAttribute('target', '_blank');
    })
})
