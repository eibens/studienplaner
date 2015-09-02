/**
 * @param {Integer} id
 * @constructor
 */
function Course(id) {
  this._id = id;
}
Course.prototype = {
  /**
   * @returns {Integer}
   */
  get id() {
    return this._id;
  },

  /**
   * @returns {string|null}
   */
  type: null,

  /**
   * @returns {string|null}
   */
  title: null,

  /**
   * @returns {string|null}
   */
  credits: null
};
