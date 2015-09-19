/**
 * @param {Integer} id
 * @param {Course} course
 * @constructor
 */
function Attendance(id, course) {
  if (id <= 0) throw new Error("ID must be positive.");
  if (!course) throw new Error("Course must not be null.");
  if (!(course instanceof Course)) throw new Error("Course must be of type Course.");
  this._id = id;
  this._course = course;
  this._semester = Semester.current();
}
Attendance.prototype = {

  /**
   * @returns {Integer}
   */
  get id() {
    return this._id;
  },

  /**
   * @returns {Course}
   */
  get course() {
    return this._course;
  },

  /**
   * @returns {Grade|null}
   */
  get grade() {
    return this._grade;
  },
  set grade(value) {
    if (value && !(value instanceof Grade)) throw new Error("Must be null or of type grade.");
    this._grade = value;
  },

  /**
   * @returns {Semester}
   */
  get semester() {
    return this._semester;
  },
  set semester(value) {
    if (!value) throw new Error("Must not be null.");
    if (!(value instanceof Semester)) throw new Error("Must be of type Semester.");
    this._semester = value;
  }
};
