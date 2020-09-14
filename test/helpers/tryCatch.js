function getText(element){
  try {
    element.getText();
  } catch (err) {
    console.error(`Error ${element.selector}, ${browser.getUrl()}`);
  }
}