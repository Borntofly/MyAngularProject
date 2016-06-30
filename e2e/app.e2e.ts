import { MytestprojectPage } from './app.po';

describe('mytestproject App', function() {
  let page: MytestprojectPage;

  beforeEach(() => {
    page = new MytestprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mytestproject works!');
  });
});
