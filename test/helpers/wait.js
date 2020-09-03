function verifyElementText(element, text)
{
  browser.waitUntil(() => element.getText() === text);
}

function verifyElementIsDisplayed(element)
{
  browser.waitUntil(() => element.isDisplayed());
}

function isClickableBtn(element)
{
  browser.waitUntil(() => element.isClickable());
  element.click();
}
module.exports = {verifyElementText, verifyElementIsDisplayed,isClickableBtn};
  


