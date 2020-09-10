class DailyReport {
  get createDayReportText() {
    return $('//div[@class="ant-drawer-title"]');
  }

  get marksToYourDailyReportText() {
    return $('h6');
  }

  get iNeedHelpCheckbox() {
    return $$('.ant-checkbox-input')[0];
  }

  get allCheckbox() {
    return $$('.ant-checkbox-input');
  }

  get iUnderstoodEverythingCheckbox() {
    return $$('.ant-checkbox-input')[1];
  }

  get helpedClassmatesCheckbox() {
    return $$('.ant-checkbox-input')[2];
  }

  get watchedLecturesCheckbox() {
    return $$('.ant-checkbox-input')[3];
  }

  get readDocumentationCheckbox() {
    return $$('.ant-checkbox-input')[4];
  }

  get codePracticeCheckbox() {
    return $$('.ant-checkbox-input')[5];
  }
  get quizPracticeCheckbox() {
    return $$('.ant-checkbox-input')[6];
  }
  get interviewPreparationCheckbox() {
    return $$('.ant-checkbox-input')[7];
  }

  get recruiterPhoneCallCheckbox() {
    return $$('.ant-checkbox-input')[8];
  }

  get interviewTechnicalScreenCheckbox() {
    return $$('.ant-checkbox-input')[9];
  }

  get interviewOnsiteCheckbox() {
    return $$('.ant-checkbox-input')[10];
  }

  get gotAJobOfferCheckbox() {
    return $$('.ant-checkbox-input')[11];
  }
}

export default new DailyReport();
