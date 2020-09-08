import { expect } from 'chai';
import LoginPage from '../../pageObject/loginPage';
import { user, Admin } from '../../data/userData';
import Utils from '../../helpers/utils';
import userProfile from "../../pageObject/userProfile";
import loginPageData from '../../data/loginPageData';

describe('USER LOG IN AS USER/ADMIN', () => {
  before('open page', () => {
    LoginPage.open();
  });
  
  it('verify page header', () => {
    expect(LoginPage.header.getText()).eq(loginPageData.header);
  });
  
  it('login', () => {
    LoginPage.login(user)
    browser.pause(3000);
  })
  
  it('logout', () => {
    console.log(userProfile.userNameText());
    userProfile.logout();
  })
});
// wdio wdio.conf.js --spec ./test/specs/smoke/userLogIn.spec.js// to run only single file
