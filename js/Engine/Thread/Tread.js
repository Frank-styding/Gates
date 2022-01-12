class Tread {
  constructor() {
    this.handler = -1;
    this.funcs = [];
  }
  addFunc(func) {
    this.funcs.push(func);
  }
  loop() {
    this.funcs.forEach((item) => item());
  }
  start() {
    this.handler = setInterval(this.loop.bind(this), 1);
  }
  stop() {
    clearInterval(this.handler);
  }
}
