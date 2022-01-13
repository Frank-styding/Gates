class RadialGradient {
  constructor(x, y, r, x1, y1, r1) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.x1 = x1;
    this.y1 = y1;
    this.r1 = r1;
    this.colors = {};
  }
  addColorTop(idx, color) {
    this.colors[idx] = color;
  }
  toCanvasStyle(ctx) {
    let grd = ctx.createRadialGradient(
      this.x,
      this.y,
      this.r,
      this.x1,
      this.y1,
      this.r1
    );
    Object.keys(this.colors).forEach((item) => {
      ctx.addColorTop(item, this.colors[item].toColorCanvas());
    });
    return grd;
  }
}
