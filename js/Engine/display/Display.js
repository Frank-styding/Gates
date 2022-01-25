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
    this.ctx.save();
    this.ctx.fillStyle = color.toCanvasStyle();
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.restore();
  }

  rect(x, y, width, height, displayStyle) {
    this.ctx.save();
    displayStyle.setToContext(this.ctx);
    displayStyle.fill
      ? this.ctx.fillRect(x, y, width, height)
      : this.ctx.strokeRect(x, y, width, height);
    this.ctx.restore();
  }

  circle(x, y, radius, displayStyle) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI, false);
    displayStyle.fill ? this.ctx.fill() : this.ctx.stroke();
    this.ctx.restore();
  }

  path(path, displayStyle, closePath = true) {
    this.ctx.save();
    let start = true;
    for (const vec of path) {
      if (start) {
        this.ctx.moveTo(vec.x, vec.y);
        start = false;
      }
      this.ctx.lineTo(vec.x, vex.y);
    }
    if (closePath) {
      this.ctx.closePath();
    }
    displayStyle.fill ? this.ctx.fill() : this.ctx.stroke();
    this.ctx.restore();
  }

  drawImage(x, y, image, displayStyle) {
    this.ctx.save();
    displayStyle.setToContext(this.ctx);
    this.ctx.drawImage(image, x - image.width / 2, y - image.height / 2);
    this.ctx.restore();
  }
}
