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
    profile.attendances = (object.attendances instanceof Array)
      ? this._deserializeAttendances(object.attendances, profile.courses)
      : [];
    return profile;
  },

  _deserializeCourses: function (array) {
    var self = this;
    return this._deserializeEntityArray(array, function (object) {
      return self._deserializeCourse(object);
    });
  },

  _deserializeAttendances: function (array, courses) {
    var self = this;
    return this._deserializeEntityArray(array, function (object) {
      return self._deserializeAttendance(object, courses);
    });
  },

  _deserializeCourse: function (object) {
    if (!object) throw new Error("Must be an Object.");
    if (!object.id) throw new Error("Missing ID for course.");
    var course = new Course(object.id);
    course.type = this._defined(object.type);
    course.title = this._defined(object.title);
    course.credits = this._defined(object.credits);
    return course;
  },

  _deserializeAttendance: function (object, courses) {
    if (!object) throw new Error("Must be an Object.");
    if (!object.id) throw new Error("Missing ID for attendance.");
    if (!object.course) throw new Error("Missing course ID for attendance.");
    var course = this._resolveReference(object.course, courses);
    var attendance = new Attendance(object.id, course);
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

  _resolveReference: function (id, array) {
    if (!id) throw new Error("Must not be empty.");
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        return array[i];
      }
    }
    throw new Error("Failed resolving reference: " + id);
  },

  // Returns the value if it is defined, otherwise null.
  _defined: function (value) {
    if (value === undefined) return null;
    return value;
  }
};
