import { WootPage } from './app.po';

describe('woot App', function() {
  let page: WootPage;

  beforeEach(() => {
    page = new WootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
