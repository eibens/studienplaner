function Serializer() {}
Serializer.prototype = {

  /**
   * Transforms the profile data into a non-cyclic object.
   *
   * Any references between objects are represented using IDs instead of the
   * actual object. This allows one to convert the result directly into any
   * tree-like data format (JSON, XML, etc.).
   *
   * Properties that are null or empty must be included in the result. Here is
   * a structural description of the result type:
   *
   *     {
   *        name: string|null
   *        courses: {
   *          id: Integer,
   *          type: string|null,
   *          title: string|null,
   *          credits: string|null,
   *          tags: string[],
   *          attendances: {
   *            id: Integer,
   *            semester: string,
   *            grade: Integer|null
   *        }[]
   *      }
   *
   * @param {Profile} profile - data that should be serialized
   * @returns {Object}
   */
  serialize: function (profile) {
    if (!(profile instanceof Profile)) throw new Error("Must be profile.");
    return {
      name: profile.name,
      courses: this._serializeCourses(profile.courses)
    };
  },

  _serializeCourses: function (courses) {
    if (!(courses instanceof Array)) throw new Error("Must be an Array.");
    var self = this;
    return courses.map(function (course) {
      return self._serializeCourse(course);
    });
  },

  _serializeCourse: function (course) {
    if (!(course instanceof Course)) throw new Error("Must be a Course.");
    return {
      id: course.id,
      type: course.type,
      title: course.title,
      credits: course.credits,
      tags: course.tags.slice(),
      attendances: this._serializeAttendances(course.attendances)
    };
  },

  _serializeAttendances: function (attendances) {
    if (!(attendances instanceof Array)) throw new Error("Must be an Array.");
    var self = this;
    return attendances.map(function (attendance) {
      return self._serializeAttendance(attendance);
    });
  },

  _serializeAttendance: function (attendance) {
    if (!(attendance instanceof Attendance)) throw new Error("Must be an Attendance.");
    return {
      id: attendance.id,
      semester: this._serializeSemester(attendance.semester),
      grade: attendance.grade ? this._serializeGrade(attendance.grade) : null
    };
  },

  _serializeSemester: function (object) {
    if (!(object instanceof Semester)) throw new Error("Must be a Semester.");
    return object.id;
  },

  _serializeGrade: function (object) {
    if (!(object instanceof Grade)) throw new Error("Must be a Grade.");
    return object.value;
  }
};
