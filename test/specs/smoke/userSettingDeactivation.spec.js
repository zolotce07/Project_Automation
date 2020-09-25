import { expect } from 'chai';
const axios = require('axios');
import registerPage from '../../pageObject/registerPage';
import settingsDeactivateA from '../../pageObject/settingsDeactivateA';
import userProfilePage from '../../pageObject/userProfilePage';
import { randomUser } from '../../data/userData';

describe('', () => {
  before('', () => {
    registerPage.open();
    registerPage.newUserRegister();
    userProfilePage.goToSetting();
  });

  it('', () => {
    settingsDeactivateA.deactivateAccount();
  });
  let email = randomUser.email;
  console.log(email);
  it('', async () => {
    const pofigu = await axios({
      method: 'get',
      url: `https://server-stage.pasv.us/user/email/${email}`,
      headers: {
        // email: randomUser.email,
        Authorization: process.env.AdminToken,
      },
    })
      .then(res => res)
      .catch(err => err.response);
    console.log(pofigu);
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingDeactivation.spec.js
