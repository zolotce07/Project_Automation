import {expect} from 'chai';
import userRegisterStep1 from '../pageObject/registerPageStep1';

describe('USER REGISTER', () => {
  it('should register the user', () => {
    userRegisterStep1.newUserRegister();
    browser.pause(5000);
  });
});
