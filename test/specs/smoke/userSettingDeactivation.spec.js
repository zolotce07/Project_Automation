import { expect } from 'chai';
const axios = require('axios');
import registerPage from '../../pageObject/registerPage';
import settingsDeactivateA from '../../pageObject/settingsDeactivateA';
import LoginPage from '../../pageObject/loginPage';
import userProfilePage from '../../pageObject/userProfilePage';
import { randomUser, admin } from '../../data/userData';
import Utils from '../../helpers/utils';
import  userDataAPI  from '../../helpers/hooks';

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
    console.log(randomUser.email, randomUser.password);
    expect(Utils.getText(LoginPage.deactivateAccountNotificationMsg)).eq(
      'Account is Deactivated. Please contact support for reactivation.',
    );
  });

  it('should return admin token', async () => {
    const dataAPIAdmin = await userDataAPI(admin);
    process.env.TOKEN_ADMIN = dataAPIAdmin.data.token;
    console.log('adminToken: ' + process.env.TOKEN_ADMIN);
  });

  let email = randomUser.email;
  it('', async () => {
    const userDeactivate = await axios({
      method: 'get',
      url: `https://server-stage.pasv.us/user/email/${email}`,
      headers: {
        Authorization: process.env.TOKEN_ADMIN,
      },
    })
      .then(res => res.data)
      .catch(err => err);
    console.log(userDeactivate);
    expect(userDeactivate.message).eq('User get by email. Success');

  });
});
// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingDeactivation.spec.js
