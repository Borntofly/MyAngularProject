export class MytestprojectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mytestproject-app h1')).getText();
  }
}
