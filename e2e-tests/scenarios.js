'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /autocomplete-form when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/autocomplete-form");
  });


  describe('autocomplete-form', function() {

    beforeEach(function() {
      browser.get('index.html#!/autocomplete-form');
    });


    it('should render autocomplete-form when user navigates to /autocomplete-form', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for autocomplete-form/);
    });

  });

});
