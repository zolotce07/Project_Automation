import baseSettingsPage from './baseSettingsPage';

class SettingsEmail extends baseSettingsPage{
  get SettingsEmailPageOldEmail() {
    return $('[id="oldEmail"]');
  }
  get SettingsEmailPageNewEmail() {
    return $('[id="newEmail"]');
  }
  get SettingsEmailPageConfirmEmail() {
    return $('[id="confirmEmail"]');
  }
  get updateEmailBtn() {
    return $('[class="ant-btn ant-btn-primary"]');
  }
}

export default new SettingsEmail();
