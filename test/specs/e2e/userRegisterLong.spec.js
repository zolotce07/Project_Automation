import { expect } from 'chai';
import RegisterPage from '../../pageObject/registerPage';
import UserProfilePage from '../../pageObject/userProfilePage';
import Utils from '../../helpers/utils';
import { randomUser } from '../../data/userData';

describe('USER REGISTER LONG FUNCTIONALITY', () => {
  before('Open Register Page', () => {
    RegisterPage.open();
    expect(browser.getUrl()).includes('/user/register');
  });

  it('should register user /longWay', () => {
    RegisterPage.newUserRegisterLong();
    expect(Utils.getText(UserProfilePage.accountHolderName)).eq(
      `${randomUser.firstName} ${randomUser.lastName}`,
    );
  });
});

// wdio wdio.conf.js --spec ./test/specs/e2e/userRegisterLong.spec.js
