import { ProAngularSecondPage } from './app.po';

describe('pro-angular-second App', () => {
  let page: ProAngularSecondPage;

  beforeEach(() => {
    page = new ProAngularSecondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
