import { expect } from 'chai';
import dailyReport from '../../pageObject/dailyReport';
import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import dailyReportData from '../../data/dailyReportData';
import utils from '../../helpers/utils';
import { dailyReportCheck,dailyReportDeleteCheck } from '../../api/apiFunctions';


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
    const dailyReportRegisteredUser = await dailyReportCheck();
    process.env.DAILY_REPORT_ID = dailyReportRegisteredUser.data[0]._id;
    expect(dailyReportRegisteredUser.status).eq(200);
    expect(dailyReportRegisteredUser.data).not.empty;
  });

  it('should DayReport delete', async () => {
    const dailyReportDelete = await dailyReportDeleteCheck();
    expect(dailyReportDelete.data.message).eq('Diary deleted');
    expect(dailyReportDelete.status).eq(200);
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userCreateDailyReport.spec.js
