/**
 * Filter that tests true for a certain set of values.
 *
 * @constructor
 */
function WhiteListFilter() {
  this._allowed = [];
}
WhiteListFilter.prototype = {

  /**
   * Indicates that the filter tests true for any value.
   *
   * @returns {boolean}
   */
  get allAllowed() {
    return this.allowed.length === 0;
  },

  /**
   * Array of allowed values.
   *
   * If the array is empty any value is allowed.
   *
   * @returns {T[]}
   */
  get allowed() {
    return this._allowed;
  },
  set allowed(values) {
    if (!(values instanceof Array)) throw new Error("Must be Array.");
    this._allowed = values;
  },

  /**
   * Checks whether the input matches the filter.
   *
   * @param input {T}
   * @returns {boolean}
   */
  test: function (input) {
    if (!this.allAllowed) return true;
    return this.allowed.indexOf(input) >= 0;
  }
};
