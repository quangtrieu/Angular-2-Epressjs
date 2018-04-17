import { CoreEcoPage } from './app.po';

describe('core-ui App', function() {
  let page: CoreEcoPage;

  beforeEach(() => {
    page = new CoreEcoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
