import { expect } from 'chai';
import registerPage from '../../pageObject/registerPage';
import settingsDeactivateA from '../../pageObject/settingsDeactivateA';
import LoginPage from '../../pageObject/loginPage';
import userProfilePage from '../../pageObject/userProfilePage';
import { randomUser } from '../../data/userData';
import Utils from '../../helpers/utils';
import { userDeactivateApi } from '../../api/apiFunctions';

describe('', () => {
  before('', () => {
    registerPage.open();
    registerPage.newUserRegister();
    userProfilePage.goToSetting();
  });

  it('', () => {
    settingsDeactivateA.deactivateAccount();
  });

  it('', () => {
    LoginPage.login({ email: randomUser.email, password: randomUser.password });
    expect(Utils.getText(LoginPage.deactivateAccountNotificationMsg)).eq(
      'Account is Deactivated. Please contact support for reactivation.',
    );
  });

  let email = randomUser.email;
  it('', async () => {
    const userDeactivate = await userDeactivateApi(email);
    expect(userDeactivate.message).eq('User get by email. Success');
  });
});
// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingDeactivation.spec.js
