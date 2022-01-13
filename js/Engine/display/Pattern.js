class Pattern {
  constructor(image, type) {
    this.image = image;
    this.type = type;
  }
  toCanvasStyle(ctx) {
    return ctx.createPattern(this.image, this.type);
  }
}
