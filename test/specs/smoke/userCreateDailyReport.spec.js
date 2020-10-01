import { expect } from 'chai';
import dailyReport from '../../pageObject/dailyReport';
import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import dailyReportData from '../../data/dailyReportData';
import utils from '../../helpers/utils';
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

  it('should check if DayReport was successfully created', async () => {
    const dailyReport = await axios({
      method: 'get',
      url: `${host}/diary/user/${process.env.ID_USER}`,
      headers: {
        Authorization: process.env.TOKEN_ADMIN,
      },
    })
      .then(res => res)
      .catch(err => err);
    process.env.DAILY_REPORT_ID = dailyReport.data[0]._id;
    expect(dailyReport.status).eq(200);
    expect(dailyReport.data).not.empty;
    console.log(dailyReport);
    console.log('SPEC:' + process.env.ID_USER);
  });

  it('DR delete', async () => {
    const dailyReportDelete = await axios({
      method: 'delete',
      url: `${host}/diary/${process.env.DAILY_REPORT_ID}`,
      headers: {
        Authorization: process.env.TOKEN_ADMIN,
      },
    })
      .then(res => res)
      .catch(err => err);
    expect(dailyReportDelete.data.message).eq('Diary deleted');
    expect(dailyReportDelete.status).eq(200);
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userCreateDailyReport.spec.js