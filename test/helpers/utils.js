class Utils {
  setValue(element, value) {
    this.waitForDisplayed(element);
    element.setValue(value);
  }

  getText(element) {
    this.waitForDisplayed(element);
    return element.getText();
  }

  click(element) {
    this.waitForEnabled(element);
    element.click();
  }

  waitForEnabled(element) {
    this.waitForDisplayed(element);
    element.waitForEnabled({
      timeout: 5000,
      timeoutMsg: `Element not enabled - '${element.selector}', Current page: ${browser.getUrl()}`,
    });
  }

  waitForDisplayed(element) {
    this.isExist(element);
    element.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: `Element not visible - '${element.selector}', Current page: ${browser.getUrl()}`,
    });
  }

  isDisplayed(element) {
    this.waitForDisplayed(element);
    return element.isDisplayed();
  }

  isExist(element) {
    element.waitForExist({
      timeout: 5000,
      timeoutMsg: `Element not exist - '${element.selector}', Current page: ${browser.getUrl()}`,
    });
  }

  verifyText(element, text) {
    browser.waitUntil(() => element.getText === text);
  }

  randomNumber(el) {
    return Math.floor(Math.random() * el.length);
  }

  randomText(sharSet){
    let text = '';
    for (let i = 0; i < sharSet.length; i++){
      text += sharSet[Math.floor(Math.random() * sharSet.length)];
    }
    return text;
  }
}

export default new Utils();
