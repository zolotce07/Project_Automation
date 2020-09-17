class baseSettingsPage {
  get settingsProfileBtn() {
    return $('[data-qa="profileTab"]');
  }
  get settingsPasswordBtn() {
    return $('[data-qa="password"]');
  }
  get SettingsEmailBtn() {
    return $('[data-qa="email"]');
  }
  get settingsLinksBtn() {
    return $('[data-qa="links"]');
  }
  get settingsShippingAddressBtn() {
    return $('[data-qa="shippingAddress"]');
  }
  get settingsDeactivateAccount() {
    return $('[data-qa="deactivateAccount"]');
  }
}
export default baseSettingsPage;
