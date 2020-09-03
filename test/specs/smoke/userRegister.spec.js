import { expect } from 'chai';
import userRegisterStep1 from '../../pageObject/registerPageStep1';
import { newUser } from '../../data/userData';
import Utils from '../../helpers/utils';

describe('USER REGISTER', () => {
  before('open page', () => {
    userRegisterStep1.open();
  });
  it('should go to register page', () => {
    expect(userRegisterStep1.header.getText()).eq('Create an account');
  });
  it('should register user/step1', () => {
    userRegisterStep1.newUserRegister();
    Utils.verifyElementText(
      userRegisterStep1.header,
      `${newUser.firstName} ${newUser.lastName}`,
    );
  });
});
