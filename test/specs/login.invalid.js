import loginPage from '../pageobjects/login.page.js';
import { faker } from '@faker-js/faker';

const randomNickname = faker.internet.userName();
const randomPassword = faker.internet.password();

describe('Invalid login with error message', () => {
    it('should not login with invalid credentials', async () => {
        await loginPage.openSignIn();
        await loginPage.login(`${randomNickname}`, `${randomPassword}`);
        await expect(browser).toHaveUrl(`${process.env.ENV}signin`);
        await expect(loginPage.loginError).toBeDisplayed();
        await expect(loginPage.loginError).toHaveText('Username or password is invalid');
    })
})
