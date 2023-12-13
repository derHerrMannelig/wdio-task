import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };
import assert from 'node:assert'

describe('Notifications', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate notifications svg with notifications content', async () => {
        await mainPage.notificationsHeader.click();
        assert.strictEqual(await mainPage.notificationsQuantity(), Number(await mainPage.notificationsSvg.getText()));
    })
})
