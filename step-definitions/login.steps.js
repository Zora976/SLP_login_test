const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../features/pageobjects/login.page');
const SecurePage = require('../features/pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
});

When(/^I login with (.*) and (.+)$/,  (username, password) => {
    LoginPage.login(username, password)
});

Then(/^I should see Admin menu saying (.*)$/,  (message) => {
    expect(SecurePage.loginPageAdminMenu).toBeExisting();
    expect(SecurePage.loginPageAdminMenu).toHaveTextContaining(message);
});

