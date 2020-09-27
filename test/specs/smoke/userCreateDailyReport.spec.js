import {expect} from 'chai';
import dailyReport from '../../pageObject/dailyReport';
import loginPage from '../../pageObject/loginPage';
import { admin, registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import dailyReportData from '../../data/dailyReportData';
import utils from '../../helpers/utils';
import userDataAPI from '../../helpers/hooks';
const axios = require('axios');
const host = 'https://server-stage.pasv.us';

describe('CREATE DAY REPORT FUNCTIONALITY', () => {
  before('Login as registeredUser', () => {
    browser.maximizeWindow();
    loginPage.open();
    loginPage.login(registeredUser);
  });

  it('should create random day report', () => {
    userProfilePage.createReportBtn.click();
    dailyReport.createDayReport(
      0,
      utils.randomNumber(dailyReport.dropdownMorale),
      utils.randomNumber(dailyReport.dropdownHour),
      utils.randomTextElement(dailyReportData.charSet),
    );
  });

  it('should return admin token', async () => {
    const dataAPIAdmin = await userDataAPI(admin);
    process.env.TOKEN_ADMIN = dataAPIAdmin.data.token;
    console.log('adminToken: ' + process.env.TOKEN_ADMIN);
  });

  it('should return admin token', async () => {
    const dataUserAPI = await userDataAPI(registeredUser);
    process.env.TOKEN = dataUserAPI.data.token;
    process.env.ID = dataUserAPI.data.userId;
    //console.log('userToken: ' + process.env.TOKEN);
    //console.log('userId: ' + process.env.ID);
  });

  it('DR ', async () => {
    const dailyReport = await axios({
      method: 'get',
      url: `${host}/diary/user/${process.env.ID}`,
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then(res => res)
      .catch(err => err);
    //console.log(dailyReport);
    expect(dailyReport.status).eq(200);
    expect(dailyReport.data).not.empty;
  });

  /*it('DR del', async () => {
    const dailyReportDelete = await axios({
      method: 'delete',
      url: `${host}/diary/${process.env.ID}`,
      headers: {
        Authorization: process.env.TOKEN_ADMIN,
      },
    })
      .then(res => res.data)
      .catch(err => err);
    console.log(dailyReportDelete);
    expect(dailyReportDelete.status).eq(200);
    expect(dailyReportDelete.data).not.empty;
  });*/
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userCreateDailyReport.spec.js
