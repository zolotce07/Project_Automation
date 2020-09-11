import dailyReport from '../../pageObject/dailyReport';
import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import dailyReportData from '../../data/dailyReportData';
import utils from '../../helpers/utils';

describe('', () => {
  before(() => {
    loginPage.open();
    loginPage.login(registeredUser);
  });

  it('should create day report', () => {
    userProfilePage.createReportBtn.click();
    let arr = dailyReport.allCheckbox;
    arr.forEach(el => el.click());
    dailyReport.moraleList.click();
    dailyReport.itemContentMorale.click();
    dailyReport.hoursList.click();
    dailyReport.itemContentHours.click();
    dailyReport.dayDescription.setValue(dailyReportData.dayDescriptionText);
    utils.click(dailyReport.submitBtn);
    browser.pause(3000);
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userCreateDailyReport.spec.js
