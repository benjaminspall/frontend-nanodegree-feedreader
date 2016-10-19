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
             expect(allFeeds[i].url).not.toBe(undefined);
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
             expect(allFeeds[i].name).not.toBe(undefined);
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
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

         /* This is the fifth test - it tests to ensure that the
          * menu changes visibility when the menu icon is clicked.
          */
          it('should change visibility when clicked', function() {
            menuIcon = $('.menu-icon-link');
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
            menuIcon.click();
            expect($(document.body).hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
