import { expect } from 'chai';
const axios = require('axios');
import registerPage from '../../pageObject/registerPage';
import settingsDeactivateA from '../../pageObject/settingsDeactivateA';
import LoginPage from '../../pageObject/loginPage';
import userProfilePage from '../../pageObject/userProfilePage';
import { randomUser } from '../../data/userData';
import Utils from '../../helpers/utils';
// const beforeHook = require('../../specs/smoke/userLogIn.spec');

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
    LoginPage.login({email: randomUser.email, password: randomUser.password});
    console.log(randomUser.email, randomUser.password);
    expect(Utils.getText(LoginPage.deactivateAccountNotificationMsg)).eq('Account is Deactivated. Please contact support for reactivation.');
  });


  let email = randomUser.email;
  console.log(email);
  it('', async () => {
    const pofigu = await axios({
      method: 'get',
      url: `https://server-stage.pasv.us/user/email/${email}`,
      headers: {
        Authorization: process.env.AdminToken
      },
    })
      .then(res => res)
      .catch(err => err.response);
    console.log(pofigu);
    console.log(process.env.AdminToken);
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingDeactivation.spec.js
