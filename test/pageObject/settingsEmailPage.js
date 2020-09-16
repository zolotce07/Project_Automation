class SettingsEmailPage {
  get SettingsEmailPageBtn() {
    return $('[data-qa="email"]');
  }
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
