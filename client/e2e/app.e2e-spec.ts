import { ClientNgPage } from './app.po';

describe('client-ng App', function() {
  let page: ClientNgPage;

  beforeEach(() => {
    page = new ClientNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
