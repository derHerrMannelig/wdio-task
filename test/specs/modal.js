import loginPage from '../pageobjects/login.page.js';
import registerPage from '../pageobjects/register.page.js';
import mainPage from '../pageobjects/main.page.js';
import { faker } from '@faker-js/faker';

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomNickname = faker.internet.userName();
const randomPassword = faker.internet.password();
const randomBank = faker.lorem.sentence(4);
const randomRouting = faker.finance.routingNumber();
const randomAccount = faker.finance.accountNumber(9);

describe('"Get started" modal', () => {
    before(async () =>{
        await registerPage.openSignUp();
        await registerPage.register(`${randomFirstName}`, `${randomLastName}`, `${randomNickname}`, `${randomPassword}`);
        await loginPage.login(`${randomNickname}`, `${randomPassword}`);
    })
    it('should correctly provide fully functional "Get started" modal', async () => {
        await expect(mainPage.newUserModal).toBeDisplayed();
        await mainPage.btnNext.click();
        await mainPage.newBank(randomBank, randomRouting, randomAccount);
        await mainPage.btnNext.click();
        await mainPage.bankMenu.click();
        await expect(await mainPage.newBankEntry()).toHaveTextContaining(`${randomBank}`);
    })
})
