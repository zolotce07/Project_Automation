import baseSettingsPage from './baseSettingsPage';

class settingsLinks extends baseSettingsPage{
  get settingsLinksPageGooglResume() {
    return $('[id="resume"]');
  }
  get settingsLinksPageLinkedin() {
    return $('[id="linkedIn"]');
  }
  get settingsLinksPageFacebook() {
    return $('[id="facebook"]');
  }
  get settingsLinksPageGitHubLink() {
    return $('[id="github"]');
  }
  get settingsLinksPageCodewarsLink() {
    return $('[id="codewarsUsername"]');
  }
  get settingsLinksPageSaveBtn() {
    return $('[class="ant-btn ant-btn-primary"]');
  }
}

export default new settingsLinks();
