import loginPage from '../pageobjects/login.page.js';
import registerPage from '../pageobjects/register.page.js';
import { faker } from '@faker-js/faker';

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomNickname = faker.internet.userName();
const randomPassword = faker.internet.password();

describe('Registration', () => {
    before(async () =>{
        await registerPage.openSignUp();
    })
    it('should correctly register a new user', async () => {
        await registerPage.register(`${randomFirstName}`, `${randomLastName}`, `${randomNickname}`, `${randomPassword}`);
        await expect(browser).toHaveUrl(`${process.env.ENV}signin`);
        await loginPage.login(`${randomNickname}`, `${randomPassword}`);
        await expect(browser).toHaveUrl(`${process.env.ENV}`);
    })
})
