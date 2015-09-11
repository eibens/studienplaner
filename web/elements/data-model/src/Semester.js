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

/**
 * Named constructor for parsing a semester ID.
 *
 * @param id
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
   * @param {Semester|null} other
   * @returns {boolean}
   */
  equals: function (other) {
    if (!(other instanceof Semester)) return false;
    return this.id == other.id;
  }
};
