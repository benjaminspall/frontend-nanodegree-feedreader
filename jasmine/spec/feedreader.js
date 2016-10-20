/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });

         /* This is the second test - it tests to make sure that each
          * feed in the allFeeds object has a URL defined and that it
          * is not empty.
          */
         it("should have a defined URL", function() {
           // Loops through all the feed objects in allFeeds
           for (i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url).not.toBe('');
           }
         });

         /* This is the third test - it tests to make sure that each
          * feed in the allFeeds object has a name defined and that
          * it is not empty.
          */
         it("should have a defined name", function() {
           // Loops through all the feed objects in allFeeds
           for (i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).not.toBe('');
           }
         });
    });

    /* This is the second test suite. This suite is all about the
     * menu element in our application.
     */
    describe('The menu', function() {
        /* This is the fourth test - it tests to ensure that the
         * menu element is hidden by default.
         */
        it('should be hidden by default', function() {
          // Tests to ensure the CSS class .menu-hidden is present
          expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

        /* This is the fifth test - it tests to ensure that the
         * menu changes visibility when the menu icon is clicked.
         */
        it('should change visibility when clicked', function() {
          menuIcon = $('.menu-icon-link');
          // Tests to ensure the CSS class .menu-hidden is present
          expect($(document.body).hasClass('menu-hidden')).toBe(true);
          // After the menu is clicked, .menu-hidden should not be present
          menuIcon.click();
          expect($(document.body).hasClass('menu-hidden')).toBe(false);
          // After the menu is clicked again, .menu-hidden should be present
          menuIcon.click();
          expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This is the third test suite. This suite is all about the
     * initial feed entries in our application.
     */
    describe('Initial Entries', function() {
        /* This is the sixth test - it tests to ensure that there is
         * at least one initial feed entry element within the .feed
         * container.
         */
        beforeEach(function(done) {
          loadFeed(0, done);
        });

        it('has at least one initial entry', function(done) {
          /* Tests to ensure that there is at least one initial feed
           * entry element within the .feed container.
           */
          expect($('.feed .entry').length).toBeGreaterThan(0);
          done();
        });
    });

    /* This is the fourth test suite. This suite is all about the
     * new feed selection process in our application.
     */
    describe('New Feed Selection', function(done) {
        /* This is the seventh test - it tests to ensure that when a
         * new feed is loaded by the loadFeed function, the content
         * actually changes.
         */
        beforeEach(function(done) {
          loadFeed(0, function() {
            prevTitle = $(".feed .entry h2").html();
            prevHeader = $("h1.header-title").html();
            // Loads the second feed in allFeeds to perform tests against
            loadFeed(1, done);
           });
       });

       it('has new content loaded', function(done) {
         /* Tests to ensure that the header and first (most recent) title
          * element of allFeeds[0] is not the same as the header and first
          * title element of allFeeds[1].
          */
         expect($("h1.header-title").html()).not.toBe(prevHeader);
         expect($(".feed .entry h2").html()).not.toBe(prevTitle);
         done();
       });

       /* The afterAll function ensures that the original feed, allFeeds[0],
        * is loaded after the test is complete.
        */
       afterAll(function(done) {
         loadFeed(0, done);
       });
  });
}());
