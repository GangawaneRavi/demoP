import { DemoPPage } from './app.po';

describe('demo-p App', function() {
  let page: DemoPPage;

  beforeEach(() => {
    page = new DemoPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
