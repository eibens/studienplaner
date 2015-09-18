
function Filter() {
  this._types = new WhiteListFilter();
  this._grades = new WhiteListFilter();
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
  }
};
