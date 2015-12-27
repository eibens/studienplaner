function CourseCriteria() {
  this._query = "";
  this._allowedTypes = [];
  this._allowedGrades = [];
  this._requiredTags = [];
  this._forbiddenTags = [];
}

CourseCriteria.prototype = {

  /**
   * @returns {string}
   */
  get query() {
    return this._query;
  },
  set query(query) {
    if (!query) query = "";
    this._query = query.toString();
  },

  /**
   * @returns {string[]}
   */
  get allowedTypes() {
    return this._allowedTypes;
  },
  set allowedTypes(allowedTypes) {
    if (!(allowedTypes instanceof Array)) {
      allowedTypes = [];
    }
    this._allowedTypes = allowedTypes;
  },

  /**
   * @returns {string[]}
   */
  get allowedGrades() {
    return this._allowedGrades;
  },
  set allowedGrades(allowedGrades) {
    if (!(allowedGrades instanceof Array)) {
      allowedGrades = [];
    }
    this._allowedGrades = allowedGrades;
  },

  /**
   * @returns {string[]}
   */
  get requiredTags() {
    return this._requiredTags;
  },
  set requiredTags(requiredTags) {
    if (!(requiredTags instanceof Array)) {
      requiredTags = [];
    }
    this._requiredTags = requiredTags;
  },

  /**
   * @returns {string[]}
   */
  get forbiddenTags() {
    return this._forbiddenTags;
  },
  set forbiddenTags(forbiddenTags) {
    if (!(forbiddenTags instanceof Array)) {
      forbiddenTags = [];
    }
    this._forbiddenTags = forbiddenTags;
  }
};
