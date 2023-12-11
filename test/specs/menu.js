import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };

describe('Main page menu', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate menu functionality', async () => {
        await mainPage.accountMenu.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}user/settings`);
        await mainPage.bankMenu.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}bankaccounts`);
        await mainPage.notificationsMenu.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}notifications`);
        await mainPage.homeMenu.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
        await mainPage.logoutMenu.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}signin`);
    })
})
