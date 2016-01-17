function Deserializer() {}
Deserializer.prototype = {

  /**
   * Transforms an object representing profile data into a Profile instance.
   *
   * @param {Object} object -
   * @returns {*}
   */
  deserialize: function (object) {
    if (!object) return new Profile();
    return this._deserializeProfile(object);
  },

  _deserializeProfile: function (object) {
    var profile = new Profile();
    profile.name = object.name ? object.name : null;
    profile.courses = (object.courses instanceof Array)
      ? this._deserializeCourses(object.courses)
      : [];
    return profile;
  },

  _deserializeCourses: function (array) {
    var self = this;
    return this._deserializeEntityArray(array, function (object) {
      return self._deserializeCourse(object);
    });
  },

  _deserializeCourse: function (object) {
    if (!object) throw new Error("Must be an Object.");
    if (!object.id) throw new Error("Missing ID for course.");
    var course = new Course(object.id);
    course.type = this._defined(object.type);
    course.title = this._defined(object.title);
    course.credits = this._defined(object.credits);
    course.tags = object.tags ? object.tags : [];
    course.attendances = (object.attendances instanceof Array)
      ? this._deserializeAttendances(object.attendances, course)
      : [];
    return course;
  },

  _deserializeAttendances: function (array, course) {
    var self = this;
    return this._deserializeEntityArray(array, function (object) {
      return self._deserializeAttendance(object, course);
    });
  },

  _deserializeAttendance: function (object, course) {
    if (!object) throw new Error("Must be an Object.");
    if (!object.id) throw new Error("Missing ID for attendance.");
    var attendance = new Attendance(object.id, course);
    course.attendances.push(attendance);
    attendance.semester = this._deserializeSemester(object.semester);
    attendance.grade = object.grade ? this._deserializeGrade(object.grade) : null;
    return attendance;
  },

  _deserializeGrade: function (data) {
    if (!data) throw new Error("Must not be empty.");
    return new Grade(data);
  },

  _deserializeSemester: function (data) {
    if (!data) throw new Error("Must not be empty.");
    return Semester.fromId(data);
  },

  _deserializeEntityArray: function (array, deserializer) {
    if (!(array instanceof Array)) throw new Error("Must be an Array.");
    var result = [];
    var ids = [];
    array.forEach(function (object) {
      var entity = deserializer(object);
      var idExists = ids.indexOf(entity.id) >= 0;
      if (idExists) throw new Error("Duplicate entity ID: " + entity.id);
      result.push(entity);
      ids.push(entity.id);
    });
    return result;
  },

  // Returns the value if it is defined, otherwise null.
  _defined: function (value) {
    if (value === undefined) return null;
    return value;
  }
};
