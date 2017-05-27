import { PrimeFrameworkPage } from './app.po';

describe('prime-framework App', () => {
  let page: PrimeFrameworkPage;

  beforeEach(() => {
    page = new PrimeFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
