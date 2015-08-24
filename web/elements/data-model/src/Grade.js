/**
 * @param {number} value of 1 to 5
 * @constructor
 */
function Grade(value) {
  if (typeof value !== "number") throw new Error();
  if (value < 1 || 5 < value) throw new Error();
  this._value = value;
}

Grade.prototype = {

  /**
   * Numeric value of the grade.
   *
   * @property {number}
   */
  get value() {
    return this._value;
  },

  /**
   * @property {boolean}
   */
  get isPassing() {
    return this.value < 5;
  },

  /**
   * @property {boolean}
   */
  get isFailing() {
    return !this.isPassing;
  }
};
