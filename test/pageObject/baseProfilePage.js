import Utils from './../helpers/utils';

class BaseProfilePage {
  get accountHolderName() {
    return $('h1');
  }

  get role() {
    return $('//sup[@title]');
  }

  get completedTasks() {
    return $('//h3[@data-qa="completedCodewarsKata"]');
  }

  get menuBtn() {
    return $('.ant-avatar');
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
  get coursesBtn() {
    return $('//a[@href="/course"]');
  }
  get cardsBtn() {
    return $('//a[@href="/flash"]');
  }
  get dairyReportsBtn() {
    return $('//a[@href="/diary"]');
  }
  get groupsBtn() {
    return $('//a[@href="/group"]');
  }
  get challengesBtn() {
    return $('//a[@href="/challenge"]');
  }
  get shopBtn() {
    return $('//a[@href="/shop"]');
  }
  get chatBtn() {
    return $('//a[@href="/chat"]');
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
