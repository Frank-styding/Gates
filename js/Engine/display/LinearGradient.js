class LinearGradient {
  constructor(x, y, x1, y1) {
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
    this.colors = {};
  }
  addColorTop(idx, color) {
    this.colors[idx] = color;
  }
  getGradient(ctx) {
    let grd = ctx.createLinearGradient(this.x, this.y, this.x1, this.y1);

    Object.keys(this.colors).forEach((idx) => {
      ctx.addColorTo(idx, this.colors[idx].toCanvasStyle());
    });

    return grd;
  }
}
