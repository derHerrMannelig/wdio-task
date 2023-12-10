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
}

export default new MainPage();
