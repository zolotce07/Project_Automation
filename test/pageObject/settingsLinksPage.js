class settingsLinksPage {
  get settingsLinksPageBtn() {
    return $('[data-qa="links"]');
  }
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
