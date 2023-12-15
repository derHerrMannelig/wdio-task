import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import transactionPage from '../pageobjects/transaction.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };
import { faker } from '@faker-js/faker';

const randomAmount = faker.number.int({ max: 999 })
const randomNote = faker.lorem.sentence(4);

describe('Transaction buttons', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate buttons and links related to transaction page', async () => {
        await mainPage.newHeader.click();
        await transactionPage.chooseRandomGuy();
        await transactionPage.fillTransactionInfo(randomAmount, randomNote);
        await transactionPage.btnPay.click();
        await transactionPage.toAnotherTransaction.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}transaction/new`);
        await expect(transactionPage.transactionGuysList).toBeDisplayed();
        await transactionPage.chooseRandomGuy();
        await transactionPage.fillTransactionInfo(randomAmount, randomNote);
        await transactionPage.btnPay.click();
        await transactionPage.toMainPage.click();
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
    })
})
