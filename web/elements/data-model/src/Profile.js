
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

  /**
   * @returns {Array}
   */
  get attendances() {
    return this._attendances
  }
};
