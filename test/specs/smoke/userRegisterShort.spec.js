import { expect } from 'chai';
import RegisterPage from '../../pageObject/registerPage';
import { newUser } from '../../data/userData';
import Utils from '../../helpers/utils';
import {registerPageData} from '../../data/registerPageData';

describe('USER REGISTER', () => {
  before('open page', () => {
    RegisterPage.open();
  });
  it('should go to register page', () => {
    expect(RegisterPage.header.getText()).eq(registerPageData.header);
  });
  it('should register user/shortCut', () => {
    RegisterPage.newUserRegister();
    Utils.getText(RegisterPage.header, `${newUser.firstName} ${newUser.lastName}`);
  });
});
