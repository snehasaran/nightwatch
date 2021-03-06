/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
  'demo test google' : function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 2000);
  },

  'part two' : function(client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(2000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
