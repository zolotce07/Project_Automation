import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import dailyReport from '../../pageObject/dailyReport';
import dailyReportData from '../../data/dailyReportData';
import {expect} from 'chai';


describe('USER CREATE DAILY REPORT', () => {
  before(() => {
    loginPage.open();
    loginPage.login(registeredUser);
    userProfilePage.createReportBtn.click();
    //utils.verifyText(dailyReport.marksToYourDailyReportText, dailyReportData.modalWindowText);
    browser.pause(3000);
  });

  it('should show text "Create day report"', () => {
    expect(dailyReport.createDayReportText.getText()).eq(dailyReportData.modalWindowHeader);
  });

  it('should show text "Marks to your daily report"', () => {
    expect(dailyReport.marksToYourDailyReportText.getText()).eq(dailyReportData.modalWindowText);
  });

  it('should display the correct title "I need help"', () => {
    expect(dailyReport.iNeedHelpCheckbox.getText()).eq(dailyReportData.iNeedHelpCheckbox);
  });

  it('should display the correct title "I understood everything"', () => {
    expect(dailyReport.iUnderstoodEverythingCheckbox.getText()).eq(dailyReportData.iUnderstoodCheckbox);
  });

  it('should display the correct title "Helped classmates"', () => {
    expect(dailyReport.helpedClassmatesCheckbox.getText()).eq(dailyReportData.helpedClassmatesCheckbox);
  });

  it('should display the correct title "Watched lectures"', () => {
    expect(dailyReport.watchedLecturesCheckbox.getText()).eq(dailyReportData['watchedLecturesCheckbox']);
  });

  it('should display the correct title "Read documentation"', () => {
    expect(dailyReport.readDocumentationCheckbox.getText()).eq(dailyReportData.readDocumentationCheckbox);
  });

  it('should display the correct title "Code practice"', () => {
    expect(dailyReport.codePracticeCheckbox.getText()).eq(dailyReportData.codePracticeCheckbox);
  });

  it('should display the correct title "Quiz practice"', () => {
    expect(dailyReport.quizPracticeCheckbox.getText()).eq(dailyReportData.quizPracticeCheckbox);
  });

  it('should display the correct title "Interview preparation"', () => {
    expect(dailyReport.interviewPreparationCheckbox.getText()).eq(dailyReportData.interviewPreparationCheckbox);
  });

  it('should display the correct title "Recruiter phone call"', () => {
    expect(dailyReport.recruiterPhoneCallCheckbox.getText()).eq(dailyReportData.recruiterPhoneCallCheckbox);
  });

  it('should display the correct title "Interview technical screen"', () => {
    expect(dailyReport.interviewTechnicalScreenCheckbox.getText()).eq(dailyReportData.interviewTechnicalScreenCheckbox);
  });

  it('should display the correct title "Interview onsite"', () => {
    expect(dailyReport.interviewOnsiteCheckbox.getText()).eq(dailyReportData.interviewOnsiteCheckbox);
  });

  it('should display the correct title "Got a job offer"', () => {
    expect(dailyReport.gotAJobOfferCheckbox.getText()).eq(dailyReportData.gotAJobOfferCheckbox);
  });
});

// wdio wdio.conf.js --spec ./test/specs/regression/userDailyReport.spec.js