class State {
  constructor() {
    this.data = {};
    this.updateFuncs = {};
  }
  setPropiety(name, value) {
    if (this.data[name] == value) return;
    this.data[name] = value;
    if (this.updateFuncs[name] != undefined) {
      this.updateFuncs[name].forEach((item) => item(value));
    } else {
      this.updateFuncs[name] = [];
    }
  }
  addUpdateFuncs(name, func) {
    if (this.updateFuncs[name] == undefined) {
      this.updateFuncs[name] = [];
    }
    this.updateFuncs[name].push(func);
  }
}
