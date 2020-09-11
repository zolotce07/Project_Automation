import dailyReportData from '../data/dailyReportData';
import utils from '../helpers/utils';

class DailyReport {

  get createDayReportText() {
    return $('//div[@class="ant-drawer-title"]');
  }

  get marksToYourDailyReportText() {
    return $('h6');
  }

  get allCheckbox() {
    return $$('.ant-checkbox-input');
  }

  get iNeedHelpCheckbox() {
    return $$('.ant-checkbox-input')[0];
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

  get moraleList(){
    return $('#morale');
  }

  get itemContentMorale(){
    return $$('.ant-select-item-option-content')[0];
  }

  get hoursList(){
    return $('#hours');
  }

  get itemContentHours(){
    return $$('.ant-select-item-option-content')[17];
  }

  get dayDescription(){
    return $('#description');
  }

  get submitBtn(){
    return $('[type="submit"]');
  }

  createDayReport(){
    let arr = this.allCheckbox;
    arr.forEach(el => el.click());
    this.moraleList.click();
    this.itemContentMorale.click();
    this.hoursList.click();
    this.itemContentHours.click();
    this.dayDescription.setValue(dailyReportData.dayDescriptionText);
    utils.click(this.submitBtn);
    browser.pause(3000);
  }
}

export default new DailyReport();
