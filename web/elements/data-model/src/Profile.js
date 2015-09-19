
function Profile() {
  this._name = null;
  this._courses = [];
  this._attendances = [];
}

Profile.prototype = {

  /**
   * @returns {String}
   */
  get name() {
    return this._name;
  },
  set name(value) {
    if (value && typeof value != "string") {
      throw new Error("Name must be null or string.");
    }
    this._name = value;
  },

  /**
   * @returns {Array}
   */
  get courses() {
    return this._courses;
  },
  set courses(value) {
    if (!(value instanceof Array)) throw new Error("Must be Array.");
    this._courses = value;
  },

  /**
   * @returns {Boolean}
   */
  get isEmpty() {
    return !(this.name ||
        this.courses.length > 0);
  },

  /**
   * Generates a unique ID for a course.
   *
   * @returns {number}
   */
  generateCourseId: function () {
    return this._getLastId(this.courses) + 1;
  },

  /**
   * Generates a unique ID for an attendance.
   *
   * @returns {number}
   */
  generateAttendanceId: function () {
    return this._getLastId(
      Array.prototype.concat.apply(this.courses.map(function (course) {
        return course.attendances;
      }))
    );
  },

  _getLastId: function (array) {
    var max = 0;
    array.forEach(function (item) {
      if (!item.id) return;
      max = Math.max(max, item.id);
    });
    return max;
  }
};
