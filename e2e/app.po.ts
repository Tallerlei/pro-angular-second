import { browser, element, by } from 'protractor';

export class ProAngularSecondPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
