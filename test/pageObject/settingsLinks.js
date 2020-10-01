import baseSettingsPage from './baseSettingsPage';

class settingsLinks extends baseSettingsPage{
  get googleResumeField() {
    return $('[id="resume"]');
  }
  get linkedinLinkField() {
    return $('[id="linkedIn"]');
  }
  get facebookLinkField() {
    return $('[id="facebook"]');
  }
  get gitHubLinkField() {
    return $('[id="github"]');
  }
  get codewarsLinkField() {
    return $('[id="codewarsUsername"]');
  }
  get saveBtn() {
    return $('[class="ant-btn ant-btn-primary"]');
  }
}

export default new settingsLinks();
