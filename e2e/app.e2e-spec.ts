import { NehaprofilePage } from './app.po';

describe('nehaprofile App', function() {
  let page: NehaprofilePage;

  beforeEach(() => {
    page = new NehaprofilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
