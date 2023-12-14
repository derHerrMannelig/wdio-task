import Page from './page.js'

class TransactionPage extends Page {
    get transactionGuys () {
        return $$('ul[data-test="users-list"] > li');
    }

    get inputAmount () {
        return $('#amount');
    }

    get inputNote () {
        return $('#transaction-create-description-input');
    }

    get btnPay () {
        return $('button[data-test="transaction-create-submit-payment"]');
    }

    get btnRequest () {
        return $('button[data-test="transaction-create-submit-request"]')
    }

    get transactionH2s () {
        return $$('div > h2');
    }

    async chooseRandomGuy () {
        const guys = await this.transactionGuys;
        let randGuy = Math.floor(Math.random() * guys.length);
        await guys[randGuy].click();
    }

    async fillTransactionInfo (amount, note) {
        await this.inputAmount.setValue(amount);
        await this.inputNote.setValue(note);
    }

    async getTransactionInfo () {
        const h2 = await this.transactionH2s;
        return h2[h2.length - 1];
    }
}

export default new TransactionPage();
