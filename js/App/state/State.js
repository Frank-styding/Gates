class State {
  constructor() {
    this.propietiesValues = {};
    this.updatePropietieFuncs = {};
    this.udpateFuncs = [];
  }
  getPropiety(name) {
    return this.propietiesValues[name];
  }
  setPropiety(name, value) {
    let lastPropietyValue = this.clone(this.propietiesValues[name]);
    if (typeof this.propietiesValues[name] == "object") {
      value(this.propietiesValues[name]);
    } else {
      this.propietiesValues[name] = value();
    }

    if (this.equal(this.propietiesValues[name], lastPropietyValue)) return;

    if (this.updatePropietieFuncs[name] != undefined) {
      this.updatePropietieFuncs[name].forEach((item) => {
        item(this.propietiesValues[name]);
      });
    }
    this.udpateFuncs.forEach((item) => item(name));
  }
  addUpdatePropietyFuncs(name, func) {
    if (this.updatePropietieFuncs[name] == undefined) {
      this.updatePropietieFuncs[name] = [];
    }
    this.updatePropietieFuncs[name].push(func);
  }
  addUpdateFuncs(func) {
    this.udpateFuncs.push(func);
  }
  equal(a, b) {
    console.log(a, b);
    if (typeof a == "object" && typeof b == "object") {
      const keys1 = Object.keys(a);
      const keys2 = Object.keys(b);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (let key of keys1) {
        if (a[key] !== b[key]) {
          return false;
        }
      }
      return true;
    }
    return a == b;
  }
  clone(a) {
    if (typeof a == "object") {
      const keys = Object.keys(a);
      let result = {};
      for (let key of keys) {
        result[key] = this.clone(a[key]);
      }
      return result;
    }
    if (Array.isArray(a)) {
      return a.slice();
    }
    return a;
  }
}
