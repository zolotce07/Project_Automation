import {expect} from 'chai';
import dailyReport from '../../pageObject/dailyReport';
import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import dailyReportData from '../../data/dailyReportData';
import utils from '../../helpers/utils';

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
      utils.randomTextElement(dailyReportData.charSet));
    // expect()
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userCreateDailyReport.spec.js
