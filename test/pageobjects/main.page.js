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
}

export default new MainPage();
