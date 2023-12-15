import loginPage from '../pageobjects/login.page.js';
import mainPage from '../pageobjects/main.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };
import { faker } from '@faker-js/faker';

const randomFName = faker.person.firstName();
const randomLName = faker.person.lastName();
const randomEmail = faker.internet.email();
const randomPhone = faker.string.numeric(10);

describe('User settings', () => {
    before(async () =>{
        await loginPage.openSignIn();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
    })
    it('should validate user settings functionality', async () => {
        await mainPage.accountMenu.click();
        await mainPage.clearUser();
        await mainPage.editUser(randomFName, randomLName, randomEmail, randomPhone);
        await mainPage.logoutMenu.click();
        await loginPage.login(`${testData.user.nickname}`, `${testData.user.password}`);
        await mainPage.accountMenu.click();
        await expect(mainPage.inputFirstName).toHaveValue(randomFName);
        await expect(mainPage.inputLastName).toHaveValue(randomLName);
        await expect(mainPage.inputEmail).toHaveValue(randomEmail);
        await expect(mainPage.inputPhone).toHaveValue(randomPhone);
    })
})
