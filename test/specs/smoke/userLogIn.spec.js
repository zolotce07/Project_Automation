import { expect } from 'chai';
import LoginPage from '../../pageObject/loginPage';
import { user, Admin } from '../../data/userData';
import Utils from '../../helpers/utils';

describe('USER LOG IN AS USER/ADMIN', () => {
  before('open page', () => {
    LoginPage.open();
  });
  it('should go to log in Page', () => {
    expect(LoginPage.header.getText()).eq('Welcome back!');
  });
  it('should log in as a user', ()=> {
    LoginPage.login(user)
  })
});