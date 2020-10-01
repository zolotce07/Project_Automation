import baseSettingsPage from './baseSettingsPage';

class SettingsEmail extends baseSettingsPage {
  get OldEmailField() {
    return $('[id="oldEmail"]');
  }
  get newEmailField() {
    return $('[id="newEmail"]');
  }
  get confirmEmailField() {
    return $('[id="confirmEmail"]');
  }
  get updateEmailBtn() {
    return $('[class="ant-btn ant-btn-primary"]');
  }
}

export default new SettingsEmail();
