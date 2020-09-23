import {expect} from 'chai';
import dailyReport from '../../pageObject/dailyReport';
import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import dailyReportData from '../../data/dailyReportData';

describe('', () => {
  before(() => {
    loginPage.open();
    loginPage.login(registeredUser);
  });

  xit('should create day report', () => {
    userProfilePage.createReportBtn.click();
    dailyReport.createDayReport();
    expect(dailyReport.dayDescriptionText.getText()).eq(dailyReportData.charSet);
  });

  it('should create random day report', () => {
    userProfilePage.createReportBtn.click();
    dailyReport.createRandomDayReport();
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userCreateDailyReport.spec.js
