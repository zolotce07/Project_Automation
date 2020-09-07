import { expect } from 'chai';
import LoginPage from '../../pageObject/loginPage';
import { user } from '../../data/userData';
import loginPageData from '../../data/loginPageData';


describe('USER LOG IN AS USER/ADMIN', () => {
  before('open page', () => {
    LoginPage.open();
  });
  it('should go to log in Page', () => {
    expect(LoginPage.header.getText()).eq(loginPageData.header);
  });
  it('should log in as a user', ()=> {
    LoginPage.login(user);
  });
});