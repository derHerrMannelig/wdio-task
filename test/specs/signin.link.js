import loginPage from '../pageobjects/login.page.js';

describe('"Sign in" page footer link', () => {
    it('should test footer link on "sign in" page', async () => {
        await loginPage.openSignIn();
        await expect(loginPage.footerLink).toBeClickable();
        await expect(loginPage.footerLink).toHaveAttribute('href', 'https://cypress.io');
        await expect(loginPage.footerLink).toHaveAttribute('target', '_blank');
    })
})
