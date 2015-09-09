function Aggregator() {
  this.clear();
}

Aggregator.prototype = {

  get values() {
    return this._values.slice();
  },

  contains: function (value) {
    return this._values.indexOf(value) >= 0;
  },

  count: function (value) {
    return this.contains(value)
      ? this._counts[value]
      : 0;
  },

  add: function (value) {
    if (this.contains(value)) {
      this._counts[value]++;
    } else {
      this._values.push(value);
      this._counts[value] = 1;
    }
  },

  remove: function (value) {
    if (!this.contains(value)) return;
    this._counts[value] = this.count(value) - 1;
    if (this.count(value) <= 0) {
      var index = this._values.indexOf(value);
      this._values.splice(index, 1);
      delete this._counts[value];
    }
  },

  clear: function () {
    this._values = [];
    this._counts = {};
  }
};
