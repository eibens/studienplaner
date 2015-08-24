/**
 * @param {Number} year
 * @param {Boolean} isWinter
 * @constructor
 */
function Semester(year, isWinter) {
  this._year = year;
  this._isWinter = isWinter;
}

/**
 * @returns {Semester}
 */
Semester.current = function () {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var isWinter = [0, 7, 8, 9, 10, 11].indexOf(month) >= 0;
  return new Semester(year, isWinter);
};

Semester.prototype = {

  /**
   * @returns {Number}
   */
  get year() {
    return this._year;
  },

  /**
   * @returns {Boolean}
   */
  get isWinter() {
    return this._isWinter;
  },

  /**
   * @returns {Boolean}
   */
  get isSummer() {
    return !this.isWinter;
  },

  /**
   * @returns {Semester}
   */
  get next() {
    var year = this.year;
    if (this.isWinter) year++;
    return new Semester(year, !this.isWinter);
  },

  /**
   * @returns {Semester}
   */
  get previous() {
    var year = this.year;
    if (this.isSummer) year--;
    return new Semester(year, !this.isWinter);
  }
};