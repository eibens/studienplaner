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
 * @param {Number} year
 * @returns {Semester}
 */
Semester.winter = function (year) {
  return new Semester(year, true);
};

/**
 * @param {Number} year
 * @returns {Semester}
 */
Semester.summer = function (year) {
  return new Semester(year, false);
};

/**
 * @returns {Semester}
 */
Semester.current = function () {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  if (month == 0) year--;
  var isWinter = [0, 7, 8, 9, 10, 11].indexOf(month) >= 0;
  return new Semester(year, isWinter);
};

/**
 * Named constructor for parsing a semester ID.
 *
 * @param {string} id
 */
Semester.fromId = function (id) {
  if (typeof id !== "string") throw new Error("ID must be a string.");
  var pattern = new RegExp("^([0-9]+)(w|s)$");
  var matches = pattern.exec(id);
  if (matches === null) throw new Error("Invalid format.");
  var year = parseInt(matches[1]);
  var isWinter = matches[2] === "w";
  return new Semester(year, isWinter);
};

/**
 * @param {Semester} a
 * @param {Semester} b
 * @returns {number}
 */
Semester.compare = function (a, b) {
  if (!a && !b) return 0;
  if (!a) return -1;
  if (!b) return 1;
  if (!(a instanceof Semester)) throw new Error();
  if (!(b instanceof Semester)) throw new Error();
  var indexA = a.year + (a.isWinter ? 0.5 : 0.0);
  var indexB = b.year + (b.isWinter ? 0.5 : 0.0);
  return indexA - indexB;
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
  },

  /**
   * @returns {string}
   */
  get id() {
    return this.year + (this.isWinter ? "w" : "s");
  },

  /**
   * @returns {number}
   */
  get integerId() {
    return this.year * 2 + (this.isWinter ? 1 : 0);
  },

  /**
   * Calculates the number of semesters between this semester to another.
   *
   * Returns 0 if the other semester is equal to this. Returns a negative number
   * if this semester is after the other.
   *
   * @param {Semester} other
   * @returns {number}
   */
  distanceTo: function (other) {
    if (!(other instanceof Semester)) throw new Error();
    return other.integerId - this.integerId;
  },

  /**
   * @param {Semester|null} other
   * @returns {boolean}
   */
  equals: function (other) {
    if (!(other instanceof Semester)) return false;
    return this.id == other.id;
  },

  toString: function () {
    return this.id;
  }
};
