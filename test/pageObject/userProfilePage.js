import BaseProfilePage from './baseProfilePage';

class UserProfilePage extends BaseProfilePage {
  get dailyReports() {
    return $('//h3[@data-qa="dailyReports"]');
  }
  get createReportBtn() {
    return $('//button[@data-qa="dailyReportsBtn"]');
  }
}

export default new UserProfilePage();
