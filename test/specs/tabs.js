import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };

describe('Main page tabs', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate tabs functionality', async () => {
        await mainPage.contactsTab.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}contacts`);
        await mainPage.mineTab.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}personal`);
        await mainPage.everyoneTab.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
    })
})
