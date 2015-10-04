/**
 * Filter that tests a course for an attendance during a certain semester.
 *
 * @constructor
 */
function SemesterFilter() {
  this._enabled = false;
  this._value = Semester.current();
}
SemesterFilter.prototype = {

  /**
   * @returns {boolean}
   */
  get enabled() {
    return this._enabled;
  },
  set enabled(value) {
    if (typeof(value) !== "boolean") throw new Error("Must be boolean.");
    this._enabled = value;
  },

  /**
   * @returns {Semester}
   */
  get value() {
    return this._value;
  },
  set value(value) {
    if (!(value instanceof Semester)) throw new Error("Must be Semester.");
    this._value = value;
  },

  /**
   * @param {Course} course
   * @returns {boolean}
   */
  test: function (course) {
    if (!this.enabled) return true;
    for (var i = 0; i < course.attendances.length; i++) {
      var semester = course.attendances[i].semester;
      if (this.value.equals(semester)) {
        return true;
      }
    }
    return false;
  }
};
