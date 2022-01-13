class Shadow {
  constructor(color, blur, x, y) {
    this.color = color;
    this.blur = blur;
    this.x = x;
    this.y = y;
  }
  setStyleCanvas(ctx) {
    ctx.shadowColor = this.color.toColorCanvas();
    ctx.shadowBlur = this.blur;
    ctx.shadowOffsetX = ctx.x;
    ctx.shadowOffsetY = ctx.y;
  }
}
