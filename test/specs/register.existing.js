import registerPage from '../pageobjects/register.page.js';
import testData from '../fixtures/data.json' assert { type: 'json' };

describe('Registration with existing user data', () => {
    before(async () =>{
        await registerPage.openSignUp();
    })
    it('should not register with existing user data', async () => {
        await registerPage.register(`${testData.user.firstName}`, `${testData.user.lastName}`, `${testData.user.nickname}`, `${testData.user.password}`);
        await expect(registerPage.registerError).toBeDisplayed();
        await expect(registerPage.registerError).toHaveText('Username is already taken');
    })
})
