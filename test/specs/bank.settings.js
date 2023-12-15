import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };
import { faker } from '@faker-js/faker';

const randomBank = faker.lorem.sentence(4);
const randomRouting = faker.finance.routingNumber();
const randomAccount = faker.finance.accountNumber(9);

describe('Bank settings', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate actions with bank settings', async () => {
        await mainPage.bankMenu.click();
        await mainPage.btnNewBank.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}bankaccounts/new`);
        await mainPage.newBank(randomBank, randomRouting, randomAccount);
        await mainPage.btnSubmitBank.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}bankaccounts`);
        await expect(await mainPage.newBankEntry()).toHaveTextContaining(`${randomBank}`);
        await mainPage.clickDeleteLastBank();
        await expect(await mainPage.newBankEntry()).toHaveTextContaining(`${randomBank} (Deleted)`);
    })
})
