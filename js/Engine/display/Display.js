class Display {
  constructor({ width, height, canvas } = {}) {
    this.canvas = canvas ?? document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.width = width ?? this.canvas.width;
    this.height = height ?? this.canvas.height;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
  setDim(width, height) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.width = height;
    this.height = height;
    return this;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  background(color) {
    this.ctx.this.ctx.fillRect(0, 0, this.width, this.height);
  }
}
