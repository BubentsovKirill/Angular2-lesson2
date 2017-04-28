import { AngularLesson2Page } from './app.po';

describe('angular-lesson2 App', function() {
  let page: AngularLesson2Page;

  beforeEach(() => {
    page = new AngularLesson2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
