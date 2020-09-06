import { expect } from 'chai';
import RegisterPage from '../../pageObject/registerPage';
import { newUser } from '../../data/userData';
import Utils from '../../helpers/utils';

describe('USER REGISTER', () => {
  before('open page', () => {
    RegisterPage.open();
  });
  it('should go to register page', () => {
    expect(RegisterPage.header.getText()).eq('Create an account');
  });
  it('should register user/shortCut', () => {
    RegisterPage.newUserRegister();
    Utils.verifyElementText(
      RegisterPage.header,
      `${newUser.firstName} ${newUser.lastName}`,
    );
  });
});
