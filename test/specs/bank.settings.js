import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };
import { faker } from '@faker-js/faker';

const randomBank = faker.lorem.sentence(4);
const randomRouting = faker.finance.routingNumber();
const randomAccount = faker.finance.accountNumber(9);

describe('Main page menu', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate menu functionality', async () => {
        await mainPage.bankMenu.click();
        await mainPage.btnNewBank.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}bankaccounts/new`);
        await mainPage.newBank(randomBank, randomRouting, randomAccount);
        await expect(browser).toHaveUrl(`${process.env.ENV}bankaccounts`);
        await expect(await mainPage.newBankEntry()).toHaveTextContaining(`${randomBank}`);
        await mainPage.clickDeleteLastBank();
        await expect(await mainPage.newBankEntry()).toHaveTextContaining(`${randomBank} (Deleted)`);
    })
})
