class Thread {
  constructor(name, func, timeOut = 10) {
    this.name = name;
    this.func = func;
    this.timeOut = timeOut;
    this.handler = undefined;
  }
  start() {
    console.log("Thread" + this.name);
    this.handler = window.setInterval(this.func, this.timeOut);
  }
  stop() {
    if (!this.handler) return;
    window.clearInterval(this.handler);
    this.handler = undefined;
  }
}
