import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };

describe('Main page menu', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate menu functionality', async () => {
        await mainPage.notificationsHeader.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}notifications`);
        await mainPage.newHeader.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}transaction/new`);
        await mainPage.logoHeader.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
        await mainPage.burgerHeader.click();
        await expect(mainPage.menuWrapper).not.toBeDisplayedInViewport();
        await mainPage.burgerHeader.click();
        await expect(mainPage.menuWrapper).toBeDisplayedInViewport();
    })
})
