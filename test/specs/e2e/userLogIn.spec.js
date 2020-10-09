import { expect } from 'chai';
import LoginPage from '../../pageObject/loginPage';
import AdminProfilePage from './../../pageObject/adminProfilePage';
import UserProfilePage from '../../pageObject/userProfilePage';
import Utils from '../../helpers/utils';
import loginPageData from './../../data/loginPageData';
import { registeredUser, admin } from '../../data/userData';

describe('LOGIN FUNCTIONALITY', () => {
  describe('POSITIVE - USER LOG IN / LOG OUT AS USER / ADMIN', () => {
    before('Open Login Page', () => {
      LoginPage.open();
      expect(browser.getUrl()).includes('/user/login');
    });

    it('Login As Admin', () => {
      LoginPage.login(admin);
      Utils.waitForDisplayed(AdminProfilePage.menuBtn);
      expect(Utils.getText(AdminProfilePage.accountHolderName)).eq(
        `${admin.firstName} ${admin.lastName}`,
      );
    });

    it('Admin Logout', () => {
      AdminProfilePage.logout();
      expect(LoginPage.header.getText()).eq(loginPageData.header);
    });

    it('Login As registeredUser', () => {
      LoginPage.login(registeredUser);
      Utils.waitForDisplayed(UserProfilePage.menuBtn);
      expect(Utils.getText(UserProfilePage.accountHolderName)).eq(
        `${registeredUser.firstName} ${registeredUser.lastName}`,
      );
    });

    it('registeredUser Logout', () => {
      UserProfilePage.logout();
      expect(LoginPage.header.getText()).eq(loginPageData.header);
    });
  });

  describe('NEGATIVE - ADMIN LOGIN', () => {
    beforeEach('Open Login Page', () => {
      LoginPage.open();
      expect(browser.getUrl()).includes('/user/login');
    });

    it('Verify user should not login with correct email and empty password', () => {
      Utils.setValue(LoginPage.emailInput, admin.email);
      Utils.setValue(LoginPage.passwordInput, '');
      expect(LoginPage.loginBtn.isEnabled()).to.be.false;
    });

    it('Verify user should not login with correct password and empty email', () => {
      Utils.setValue(LoginPage.emailInput, '');
      Utils.setValue(LoginPage.passwordInput, admin.password);
      expect(LoginPage.loginBtn.isEnabled()).to.be.false;
    });

    it('Verify user should not login with empty email and empty password', () => {
      Utils.setValue(LoginPage.emailInput, '');
      Utils.setValue(LoginPage.passwordInput, '');
      expect(LoginPage.loginBtn.isEnabled()).to.be.false;
    });
  });

  describe('NEGATIVE - ERROR MSG', () => {
    beforeEach('Open Login Page', () => {
      LoginPage.open();
      expect(browser.getUrl()).includes('/user/login');
    });

    it('Verify email error is displayed (input - invalid email)', () => {
      Utils.setValue(LoginPage.emailInput, 'sdf@');
      expect(Utils.getText(LoginPage.errorMsg)).eq(loginPageData.errorMsg.invalidEmail);
    });

    it('Verify email error is displayed (input - empty email filed)', () => {
      Utils.setValue(LoginPage.emailInput, 'aljoi');
      Utils.fieldEmptyfier(LoginPage.emailInput);
      expect(Utils.getText(LoginPage.errorMsg)).eq(loginPageData.errorMsg.required);
    });

    it('Verify password error is displayed (input - empty password filed)', () => {
      Utils.setValue(LoginPage.passwordInput, 'ytdu6546');
      Utils.fieldEmptyfier(LoginPage.passwordInput);
      expect(Utils.getText(LoginPage.errorMsg)).eq(loginPageData.errorMsg.required);
    });
  });
});

// wdio wdio.conf.js --spec ./test/specs/e2e/userLogin.spec.js
