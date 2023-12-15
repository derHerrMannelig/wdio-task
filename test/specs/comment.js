import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };
import { faker } from '@faker-js/faker';

const randomComment = faker.lorem.sentence(4);

describe('Comments', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate comment feature', async () => {
        await mainPage.chooseRandomPayment();
        await mainPage.leaveComment(randomComment);
        await expect(await mainPage.recentComment()).toBeDisplayed();
        await expect(await mainPage.recentComment()).toHaveText(`${randomComment}`);
    })
})
