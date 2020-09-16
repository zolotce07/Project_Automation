import BaseProfilePage from './baseProfilePage';

class AdminProfilePage extends BaseProfilePage {
  get adminBtn() {
    return $('//a[@class="ant-dropdown-link ant-dropdown-trigger"]');
  }

  get adminBaseBtn() {
    return $('//a[@href="/base"]');
  }

  get adminUsersBtn() {
    return $('//a[@href="/users"]');
  }

  get adminChallengesBtn() {
    return $('//a[@href="/admin/challenge"]');
  }
  get adminTelephonyBtn() {
    return $('//a[@href="/telephony"]');
  }
  get adminOrderBtn() {
    return $('//a[@href="/admin-order"]');
  }
}
export default new AdminProfilePage();
