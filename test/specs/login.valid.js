import loginPage from '../pageobjects/login.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };

describe('Valid login into secure area', () => {
    before(async () =>{
        await loginPage.openSignIn();
    })
    it('should login with valid credentials', async () => {
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
    })
})
