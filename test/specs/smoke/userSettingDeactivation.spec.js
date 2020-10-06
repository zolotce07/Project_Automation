import { expect } from 'chai';
import registerPage from '../../pageObject/registerPage';
import settingsDeactivateA from '../../pageObject/settingsDeactivateA';
import LoginPage from '../../pageObject/loginPage';
import userProfilePage from '../../pageObject/userProfilePage';
import { randomUser } from '../../data/userData';
import Utils from '../../helpers/utils';
import { userDeactivateApi } from '../../api/apiFunctions';

describe('ACCOUNT DEACTIVATION FUNCTIONALITY', () => {
  before('Login as new user', () => {
    registerPage.open();
    registerPage.newUserRegister();
    userProfilePage.goToSetting();
  });

  it('should deactivate user account', () => {
    settingsDeactivateA.deactivateAccount();
  });

  it('should check if pup up message appeared when try to log in as deactivated account holder', () => {
    LoginPage.login({ email: randomUser.email, password: randomUser.password });
    expect(Utils.getText(LoginPage.deactivateAccountNotificationMsg)).eq(
      'Account is Deactivated. Please contact support for reactivation.',
    );
  });

  let email = randomUser.email;
  it('should make sure if deactivated account is deleted from DB', async () => {
    const userDeactivate = await userDeactivateApi(email);
    expect(userDeactivate.message).eq('User get by email. Success');
  });
});
// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingDeactivation.spec.js
