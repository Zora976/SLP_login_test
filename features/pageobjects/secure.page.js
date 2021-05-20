const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginPageAdminMenu () { return $('//a[@title="Admin"]') }
}

module.exports = new SecurePage();
