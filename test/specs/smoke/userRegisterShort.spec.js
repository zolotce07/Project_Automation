import { expect } from 'chai';
import RegisterPage from '../../pageObject/registerPage';
import UserProfilePage from './../../pageObject/userProfilePage';
import Utils from '../../helpers/utils';
import { randomUser } from './../../data/userData';

describe('USER REGISTER SHORT', () => {
  before('Open Register Page', () => {
    RegisterPage.open();
    expect(browser.getUrl()).includes('/user/register');
  });

  it('should register user/shortCut', () => {
    RegisterPage.newUserRegister();
    expect(Utils.getText(UserProfilePage.accountHolderName)).eq(
      `${randomUser.firstName} ${randomUser.lastName}`,
    );
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userRegisterShort.spec.js
