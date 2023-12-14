import Page from './page.js'

class MainPage extends Page {
    get contactsTab () {
        return $('a[data-test="nav-contacts-tab"]');
    }
    get mineTab () {
        return $('a[data-test="nav-personal-tab"]');
    }
    get everyoneTab () {
        return $('a[data-test="nav-public-tab"]');
    }
    get accountMenu () {
        return $('a[data-test="sidenav-user-settings"]')
    }
    get bankMenu () {
        return $('a[data-test="sidenav-bankaccounts"]');
    }
    get notificationsMenu () {
        return $('a[data-test="sidenav-notifications"]');
    }
    get homeMenu () {
        return $('a[data-test="sidenav-home"]');
    }
    get logoutMenu () {
        return $('div[data-test="sidenav-signout"]');
    }
    get notificationsHeader () {
        return $('a[data-test="nav-top-notifications-link"]');
    }
    get newHeader () {
        return $('a[data-test="nav-top-new-transaction"]');
    }
    get logoHeader () {
        return $('h1 > a');
    }
    get burgerHeader () {
        return $('button[data-test="sidenav-toggle"]');
    }
    get menuWrapper () {
        return $('div[data-test="sidenav"] > div');
    }
    get inputFirstName () {
        return $('input#user-settings-firstName-input');
    }
    get inputLastName () {
        return $('input#user-settings-lastName-input');
    }
    get inputEmail () {
        return $('input#user-settings-email-input');
    }
    get inputPhone () {
        return $('input#user-settings-phoneNumber-input');
    }
    get btnSubmitEdit () {
        return $('button[data-test="user-settings-submit"]');
    }
    get btnNewBank () {
        return $('a[data-test="bankaccount-new"]');
    }
    get inputBankName () {
        return $('input#bankaccount-bankName-input');
    }
    get inputRoutingNumber () {
        return $('input#bankaccount-routingNumber-input');
    }
    get inputAccountNumber () {
        return $('input#bankaccount-accountNumber-input');
    }
    get btnSubmitBank () {
        return $('button[data-test="bankaccount-submit"]')
    }
    get btnsDeleteBank() {
        return $$('button[data-test="bankaccount-delete"]');
    }
    get bankEntries() {
        return $$('div > p.MuiTypography-body1');
    }
    get newUserModal() {
        return $('div[role="dialog"]');
    }
    get btnNext () {
        return $('button[data-test="user-onboarding-next"]');
    }
    get notificationsSvg () {
        return $('span.MuiBadge-badge.makeStyles-customBadge-28');
    }
    get notificationItems () {
        return $$('li.MuiListItem-root');
    }
    get bankNameHelper () {
        return $('#bankaccount-bankName-input-helper-text');
    }
    get routingNumberHelper () {
        return $('#bankaccount-routingNumber-input-helper-text');
    }
    get accountNumberHelper () {
        return $('#bankaccount-accountNumber-input-helper-text');
    }
    get paymentItems () {
        return $$('div > li.MuiListItem-root');
    }
    get inputComment () {
        return $('input[type="text"]');
    }
    get commentItems () {
        return $$('li > div > span.MuiListItemText-primary');
    }

    async chooseRandomPayment () {
        await browser.pause(1000);
        const payments = await this.paymentItems;
        let randPayment = Math.floor(Math.random() * payments.length);
        await payments[randPayment].click();
    }

    async leaveComment (text) {
        await this.inputComment.addValue(text);
        await browser.keys("Enter");
        await browser.pause(1000);
    }

    async recentComment() {
        const comments = await this.commentItems;
        return comments[comments.length - 1];
    }

    async notificationsQuantity () {
        const notifications = await this.notificationItems;
        return notifications.length;
    }

    async newBank (bankName, routingNumber, accountNumber) {
        await this.inputBankName.setValue(bankName);
        await this.inputRoutingNumber.setValue(routingNumber);
        await this.inputAccountNumber.setValue(accountNumber);
    }

    async clickDeleteLastBank () {
        await browser.pause(1000); //necessary, because it occasionally can delete predating one w/o pause
        const btns = await this.btnsDeleteBank;
        await btns[btns.length - 1].click();
    }
    async newBankEntry () {
        await browser.pause(1000);
        const banks = await this.bankEntries;
        return banks[banks.length - 1];
    }

    async clearUser () {
        // wrote this abomination because clearValue() doesn't work in this web app
        // similar problem: https://github.com/webdriverio/webdriverio/issues/4482
        let FNameLength = (await this.inputFirstName.getValue()).length;
        let LNameLength = (await this.inputLastName.getValue()).length;
        let emailLength = (await this.inputEmail.getValue()).length;
        let phoneLength = (await this.inputPhone.getValue()).length;
        await this.inputFirstName.click();
        for (let i = 0; i < FNameLength; i++) {
            await this.inputFirstName.addValue('\ue003\ue017');
        }
        await this.inputLastName.click();
        for (let i = 0; i < LNameLength; i++) {
            await this.inputLastName.addValue('\ue003\ue017');
        }
        await this.inputEmail.click();
        for (let i = 0; i < emailLength; i++) {
            await this.inputEmail.addValue('\ue003\ue017');
        }
        await this.inputPhone.click();
        for (let i = 0; i < phoneLength; i++) {
            await this.inputPhone.addValue('\ue003\ue017');
        }
    }

    async editUser (firstName, lastName, email, phone) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        await this.inputPhone.setValue(phone);
        await this.btnSubmitEdit.click();
    }
}

export default new MainPage();
