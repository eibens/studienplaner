/**
 * @param {number} value of 1 to 5
 * @constructor
 */
function Grade(value) {
  if (typeof value !== "number") throw new Error("Value must be number.");
  if (value < 1 || 5 < value) throw new Error("Value must be in correct range.");
  this._value = value;
}

/**
 *
 * @param {Grade} a
 * @param {Grade} b
 * @returns {number}
 */
Grade.compare = function (a, b) {
  if (a == null) return Number.MIN_VALUE;
  if (b == null) return Number.MAX_VALUE;
  return a.value - b.value;
};

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
