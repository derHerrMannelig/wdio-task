import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };
import { faker } from '@faker-js/faker';

const randomInvalidBank = faker.lorem.word({ length: { min: 1, max: 4 }, strategy: 'any-length' });
const randomInvalidRouting = faker.number.int({ max: 99999999 });
const randomInvalidAccount = faker.number.int({ max: 99999999 });

const randomInvalidBankAddition = faker.lorem.word({ length: { min: 4, max: 20 }, strategy: 'any-length' });
const randomInvalidRoutingAdditon = faker.number.int({ min: 100000000, max: 1000000000000 });
const randomInvalidAccountAdditon = faker.number.int({ min: 100000000000, max: 100000000000000 });

describe('Bank tips', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate tips while creating new bank account', async () => {
        await mainPage.bankMenu.click();
        await mainPage.btnNewBank.click();
        await mainPage.newBank(randomInvalidBank, randomInvalidRouting, randomInvalidAccount);
        await expect(mainPage.bankNameHelper).toBeDisplayed();
        await expect(mainPage.bankNameHelper).toHaveText('Must contain at least 5 characters');
        await expect(mainPage.routingNumberHelper).toBeDisplayed();
        await expect(mainPage.routingNumberHelper).toHaveText('Must contain a valid routing number');
        await expect(mainPage.accountNumberHelper).toBeDisplayed();
        await expect(mainPage.accountNumberHelper).toHaveText('Must contain at least 9 digits');
        await mainPage.newBank(randomInvalidBankAddition, randomInvalidRoutingAdditon, randomInvalidAccountAdditon);
        await expect(mainPage.bankNameHelper).not.toBeDisplayed();
        await expect(mainPage.routingNumberHelper).toBeDisplayed();
        await expect(mainPage.routingNumberHelper).toHaveText('Must contain a valid routing number');
        await expect(mainPage.accountNumberHelper).toBeDisplayed();
        await expect(mainPage.accountNumberHelper).toHaveText('Must contain no more than 12 digits');
    })
})
