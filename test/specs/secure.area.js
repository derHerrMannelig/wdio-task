import loginPage from '../pageobjects/login.page.js';

describe('Attempt to enter secure area without authorization', () => {
    it('should redirect to "sign in"', async () => {
        await loginPage.openBaseUrl();
        await expect(browser).toHaveUrl(`${process.env.ENV}signin`);
    })
})
