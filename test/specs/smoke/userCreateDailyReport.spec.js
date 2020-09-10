import dailyReport from '../../pageObject/dailyReport';
import loginPage from '../../pageObject/loginPage';
import { admin } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';


describe('', () => {
  it('should login ', () => {
    loginPage.open();
    loginPage.login(admin);
  });

  it('should click checkbox', () => {
    userProfilePage.createReportBtn.click();
    //let iNeedHelp = dailyReport.iNeedHelpCheckbox;
    //iNeedHelp.waitForDisplayed();
    let arr = dailyReport.allCheckbox;
    // for (let i = 0; i < arr.length; i++) {
    //   dailyReport.allCheckbox[i].click();
    // }
    arr.forEach(el => el.click());
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userCreateDailyReport.spec.js