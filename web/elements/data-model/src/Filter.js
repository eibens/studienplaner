
function Filter() {
  this._types = new WhiteListFilter();
  this._grades = new WhiteListFilter(function (a, b) {
    return Grade.equals(a, b);
  });
  this._tags = new TagFilter();
}

Filter.prototype = {

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
    return this.grades.test(course.latestGrade) &&
        this.types.test(course.type) &&
        this.tags.test(course.tags);
  }
};
