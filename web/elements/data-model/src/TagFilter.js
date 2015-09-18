/**
 * Filter that tests an array of strings.
 *
 * Strings can either be required, forbidden, or ignored.
 *
 * @constructor
 */
function TagFilter() {
  this._required = [];
  this._forbidden = [];
}
TagFilter.prototype = {

  /**
   * @returns {string[]}
   */
  get required() {
    return this._required;
  },
  set required(values) {
    if (!(values instanceof Array)) throw new Error("Must be Array.");
    this._required = values;
  },

  /**
   * @returns {string[]}
   */
  get forbidden() {
    return this._forbidden;
  },
  set forbidden(values) {
    if (!(values instanceof Array)) throw new Error("Must be Array.");
    this._forbidden = values;
  },

  /**
   * Tests whether the tags match the filter.
   *
   * Returns true if the input contains all required values and none of the
   * forbidden values.
   *
   * @param tags {string[]}
   * @returns {boolean}
   */
  test: function (tags) {
    return this._testRequired(tags) && this._testForbidden(tags);
  },
  _testRequired: function (tags) {
    var match = true;
    this.required.forEach(function (required) {
      match = match && tags.indexOf(required) >= 0;
    });
    return match;
  },
  _testForbidden: function (tags) {
    var match = true;
    var self = this;
    tags.forEach(function (tag) {
      match = match && !self.isForbidden(tag);
    });
    return match;
  }
};
