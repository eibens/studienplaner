/**
 * @param {Integer} id
 * @constructor
 */
function Course(id) {
  if (id <= 0) throw new Error("ID must be positive.");
  this._id = id;
  this._type = "";
  this._title = "";
  this._credits = "0.0";
  this._tags = [];
  this._attendances = [];
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
  },

  /**
   * @returns {Attendance[]}
   */
  get attendances() {
    return this._attendances;
  },
  set attendances(value) {
    if (!(value instanceof Array)) throw new Error("Must be Array.");
    this._attendances = value;
  },

  /**
   * @returns {Attendance}
   */
  get latestAttendance() {
    if (this.attendances.length == 0) return null;
    return this.attendances.sort(function (b, a) {
      return Semester.compare(a.semester, b.semester);
    })[0];
  },

  /**
   * @returns {Grade}
   */
  get latestGrade() {
    if (this.latestAttendance == null) return null;
    return this.latestAttendance.grade;
  },

  /**
   * @returns {boolean}
   */
  get hasGrade() {
    return this.latestGrade !== null;
  },

  /**
   * Generates a unique ID for an attendance.
   *
   * @returns {number}
   */
  generateAttendanceId: function () {
    var max = 0;
    this.attendances.forEach(function (attendance) {
      if (!attendance.id) return;
      max = Math.max(max, attendance.id);
    });
    return max + 1;
  }
};
