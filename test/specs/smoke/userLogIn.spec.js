import { expect } from 'chai';
import LoginPage from '../../pageObject/loginPage';
import { registeredUser, admin } from '../../data/userData';
import Utils from '../../helpers/utils';
import UserProfilePage from '../../pageObject/userProfilePage';
import AdminProfilePage from './../../pageObject/adminProfilePage';
import loginPageData from './../../data/loginPageData';

describe('USER LOG IN AS USER/ADMIN', () => {
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

  it('Logout', () => {
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

  it('Logout', () => {
    UserProfilePage.logout();
    expect(LoginPage.header.getText()).eq(loginPageData.header);
  });
});


// wdio wdio.conf.js --spec ./test/specs/smoke/userLogIn.spec.js// to run only single file
