class Display {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = width;
    this.height = height;
    this.ctx = this.canvas.getContext("2d");
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  background(color) {
    this.ctx.fillStyle = color.toStyleCanvas();
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  text(x, y, text, font) {
    this.ctx.save();
    this.ctx.font = font;
    this.ctx.fillText(text, x, y);
    this.ctx.restore();
  }
  renderCollider(object, strokeColor) {
    this.ctx.save();
    const data = object.transform.getTransform().data;
    this.ctx.transform(data[0], data[1], data[3], data[4], data[2], data[5]);
    this.ctx.strokeStyle = strokeColor.toStyleCanvas();
    const collider = object.collider;
    if (collider) {
      switch (collider.className) {
        case "CircleCollider":
          this.ctx.beginPath();
          this.ctx.arc(0, 0, collider.r, 0, Math.PI * 2);
          this.ctx.stroke();
          break;
        case "RectCollider":
          this.ctx.strokeRect(
            -collider.width / 2,
            -collider.height / 2,
            collider.width,
            collider.height
          );
          break;
        case "PathCollider":
          this.ctx.beginPath();
          let count = 0;
          for (let pos of collider.path) {
            const [x, y] = pos;
            if (count == 0) {
              this.ctx.moveTo(x, y);
              count++;
            } else {
              this.ctx.lineTo(x, y);
            }
          }
          this.ctx.closePath();
          this.ctx.stroke();
          break;
      }
    }
  }
}
