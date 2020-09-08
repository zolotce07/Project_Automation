import { expect } from 'chai';
import LoginPage from '../../pageObject/loginPage';
import { registeredUser, admin } from '../../data/userData';
import Utils from '../../helpers/utils';
import UserProfilePage from '../../pageObject/userProfilePage';
import AdminProfilePage from './../../pageObject/adminProfilePage';

describe('USER LOG IN AS USER/ADMIN', () => {
  before('Open Login Page', () => {
    LoginPage.open();
    expect(browser.getUrl()).includes('/user/login');
  });

  it('Login As Admin', () => {
    LoginPage.login(admin);
    browser.pause(1000);
    expect(Utils.getText(AdminProfilePage.accountHolderName)).eq(
      `${admin.firstName} ${admin.lastName}`,
    );
    AdminProfilePage.logout();
  });

});
// wdio wdio.conf.js --spec ./test/specs/smoke/userLogIn.spec.js// to run only single file
