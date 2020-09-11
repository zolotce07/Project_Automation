import dailyReport from '../../pageObject/dailyReport';
import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';

describe('', () => {
  before(() => {
    loginPage.open();
    loginPage.login(registeredUser);
  });

  it('should create day report', () => {
    userProfilePage.createReportBtn.click();
    dailyReport.createDayReport();
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userCreateDailyReport.spec.js
