import { DebugProtractorTypeScriptPage } from './app.po';

describe('debug-protractor-type-script App', function() {
  let page: DebugProtractorTypeScriptPage;

  beforeEach(() => {
    page = new DebugProtractorTypeScriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
