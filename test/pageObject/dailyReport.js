import dailyReportData from '../data/dailyReportData';
import utils from '../helpers/utils';
import userProfilePage from './userProfilePage';

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
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"I need help")]');
  }

  get iUnderstoodEverythingCheckbox() {
    return $(
      '//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"I understood everything")]',
    );
  }

  get helpedClassmatesCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Helped classmates")]');
  }

  get watchedLecturesCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Watched lectures")]');
  }

  get readDocumentationCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Read documentation")]');
  }

  get codePracticeCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Code practice")]');
  }
  get quizPracticeCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Quiz practice")]');
  }
  get interviewPreparationCheckbox() {
    return $(
      '//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Interview preparation")]',
    );
  }

  get recruiterPhoneCallCheckbox() {
    return $(
      '//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Recruiter phone call")]',
    );
  }

  get interviewTechnicalScreenCheckbox() {
    return $(
      '//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Interview technical screen")]',
    );
  }

  get interviewOnsiteCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Interview onsite")]');
  }

  get gotAJobOfferCheckbox() {
    return $('//label[@class="ant-checkbox-wrapper"]//span[contains(text(),"Got a job offer")]');
  }

  get moraleList() {
    return $('#morale');
  }

  get hoursList() {
    return $('#hours');
  }

  get dropdownHour() {
    return $$(
      '//div[@id="hours_list"]/following-sibling::div//div[@class="ant-select-item ant-select-item-option"]',
    );
  }

  get dropdownMorale() {
    return $$(
      '//div[@id="morale_list"]/following-sibling::div//div[@class="ant-select-item ant-select-item-option"]',
    );
  }

  get dayDescription() {
    return $('#description');
  }

  get dayDescriptionText() {
    return $('.ant-row.mb-4');
  }

  get submitBtn() {
    return $('[type="submit"]');
  }

  selectAllCheckboxes() {
    this.allCheckbox.forEach(checkbox => checkbox.click());
  }

  /*
  @param checkboxIndex index of element || selectAll
  @param moraleIndex index of element
  @param hoursIndex index of element
  @param description string
  */

  createDayReport(checkboxIndex, moraleIndex, hoursIndex, description) {
    if (checkboxIndex === 'selectAll') {
      this.selectAllCheckboxes();
    } else {
      this.allCheckbox[checkboxIndex].click();
    }
    this.moraleList.click();
    this.dropdownMorale[moraleIndex].scrollIntoView();
    utils.click(this.dropdownMorale[moraleIndex]);
    this.hoursList.click();
    this.dropdownHour[hoursIndex].scrollIntoView();
    utils.click(this.dropdownHour[hoursIndex]);
    this.dayDescription.setValue(description);
    utils.click(this.submitBtn);
    utils.waitForDisplayed(userProfilePage.dailyReports);
  }
}

export default new DailyReport();
