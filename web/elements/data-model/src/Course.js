/**
 * @param {Integer} id
 * @constructor
 */
function Course(id) {
  this._id = id;
  this._type = "";
  this._title = "";
  this._credits = "0.0";
  this._tags = [];
}
Course.prototype = {
  /**
   * @returns {Integer}
   */
  get id() {
    return this._id;
  },

  /**
   * @returns {string}
   */
  get type() {
    return this._type;
  },
  set type(value) {
    if (!value) value = "";
    this._type = value;
  },

  /**
   * @returns {string}
   */
  get title() {
    return this._title;
  },
  set title(value) {
    if (!value) value = "";
    this._title = value;
  },

  /**
   * @returns {string}
   */
  get credits() {
    return this._credits;
  },
  set credits(value) {
    if (!value) value = "";
    this._credits = value;
  },

  /**
   * @returns {string[]}
   */
  get tags() {
    return this._tags;
  },
  set tags(value) {
    if (!(value instanceof Array)) throw new Error("Must be Array.");
    this._tags = value;
  }
};
