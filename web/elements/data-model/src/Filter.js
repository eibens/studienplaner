
function Filter() {
  this._query = null;
  this._types = new WhiteListFilter();
  this._grades = new WhiteListFilter(function (a, b) {
    return Grade.equals(a, b);
  });
  this._tags = new TagFilter();
  this._semester = new SemesterFilter();
}

Filter.prototype = {

  /**
   * @returns {String|null}
   */
  get query() {
    return this._query;
  },
  set query(value) {
    this._query = value;
  },

  /**
   * @returns {SemesterFilter}
   */
  get semester() {
    return this._semester;
  },

  /**
   * @returns {WhiteListFilter<string>}
   */
  get types() {
    return this._types;
  },

  /**
   * @returns {WhiteListFilter<Grade>}
   */
  get grades() {
    return this._grades;
  },

  /**
   * @returns {TagFilter}
   */
  get tags() {
    return this._tags;
  },

  /**
   * @param {Course} course
   * @returns {boolean}
   */
  test: function (course) {
    return this._semester.test(course) &&
        this._testQuery(course) &&
        this.grades.test(course.latestGrade) &&
        this.types.test(course.type) &&
        this.tags.test(course.tags);
  },

  _testQuery: function (course) {
    if (!this.query) return true;
    var title = (course.title ? course.title : "").toLowerCase();
    var query = this.query .toLowerCase();
    return title.indexOf(query) >= 0;
  }
};
