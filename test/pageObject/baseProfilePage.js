import Utils from './../helpers/utils';

class BaseProfilePage {
  get accountHolderName() {
    return $('h1');
  }

  get role() {
    return $('//sup[@title]');
  }

  get dailyReports() {
    return $('//h3[@data-qa="dailyReports"]');
  }

  get completedTasks() {
    return $('//h3[@data-qa="completedCodewarsKata"]');
  }

  get createReportBtn() {
    return $('//button[@data-qa="dailyReportsBtn"]');
  }

  get menuBtn() {
    return $('//div[@class="ml-auto"]//a[contains(@class,"ant-dropdown-link")]');
  }

  get profileBtn() {
    return $('//li[@data-qa="profile"]');
  }

  get settingsBtn() {
    return $('//li[@data-qa="settings"]');
  }

  get ordersBtn() {
    return $('//li[@data-qa="orders"]');
  }

  get logoutBtn() {
    return $('//li[@data-qa="logout"]');
  }

  goToProfile() {
    Utils.click(this.menuBtn);
    Utils.click(this.profileBtn);
  }

  goToSetting() {
    Utils.click(this.menuBtn);
    Utils.click(this.settingsBtn);
  }

  goToOrders() {
    Utils.click(this.menuBtn);
    Utils.click(this.ordersBtn);
  }

  logout() {
    Utils.click(this.menuBtn);
    Utils.click(this.logoutBtn);
  }
}

export default BaseProfilePage;
