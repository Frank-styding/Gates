class State {
  constructor(initialValue) {
    this._value = initialValue;
    this.funcs = [];
  }
  addUpdateFunc(func) {
    this.funcs.push(func);
  }
  set value(valueFunc) {
    let value_clone = this.clone(this._value);
    value_clone = valueFunc(value_clone);

    if (this.equal(this._value, value_clone)) {
      this._value = value_clone;
      this.funcs.forEach((func) => func(this._value));
    }
  }
  get value() {
    return this._value;
  }
  equal(a, b) {
    if (typeof a == "object" && typeof b == "object") {
      const keys1 = Object.keys(a);
      const keys2 = Object.keys(b);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (let key of keys1) {
        if (this.equal(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    return a == b;
  }
  clone(object) {
    if (typeof object == "object") {
      const keys = Object.keys(object);
      let result = {};
      for (let key of keys) {
        result[key] = this.clone(object[key]);
      }
      return result;
    }
    if (Array.isArray(object)) {
      return object.slice();
    }
    return object;
  }
}
