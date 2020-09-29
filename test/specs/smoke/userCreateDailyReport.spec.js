import { expect } from 'chai';
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
  });

  it('should return userID', async () => {
    const dataUserAPI = await userDataAPI(registeredUser);
    process.env.userID = dataUserAPI.data.userId;
  });

  it('DR successfully created ', async () => {
    const dailyReport = await axios({
      method: 'get',
      url: `${host}/diary/user/${process.env.userID}`,
      headers: {
        Authorization: process.env.TOKEN_ADMIN,
      },
    })
      .then(res => res)
      .catch(err => err);
    process.env.DAILY_REPORT_ID = dailyReport.data[0]._id;
    expect(dailyReport.status).eq(200);
    expect(dailyReport.data).not.empty;
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
