import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import transactionPage from '../pageobjects/transaction.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };
import { faker } from '@faker-js/faker';

const randomAmount = faker.number.int({ max: 999 })
const randomNote = faker.lorem.sentence(4);

describe('Transaction: payment', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate payment transaction', async () => {
        await mainPage.newHeader.click();
        await transactionPage.chooseRandomGuy();
        await transactionPage.fillTransactionInfo(randomAmount, randomNote);
        await transactionPage.btnPay.click();
        await expect(await transactionPage.getTransactionInfo()).toHaveText(`Paid $${randomAmount}.00 for ${randomNote}`);
    })
})
