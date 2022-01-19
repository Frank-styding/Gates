class DisplayStyle {
  constructor({
    shadow,
    color,
    lineStyle,
    compositing,
    pattern,
    gradient,
    fill,
    filter,
    textStyle,
  } = {}) {
    this.fill = fill ?? true;
    this.shadow = shadow;
    this.gradient = gradient;
    this.pattern = pattern;
    this.color = color;
    this.lineStyle = lineStyle;
    this.compositing = compositing;
    this.filter = filter;
    this.textStyle = textStyle;
  }
  setCanvasStyle(ctx) {
    if (this.compositing) {
      this.compositing.setCanvasStyle(ctx);
    }
    if (this.filter) {
      ctx.filter = this.filter;
    }
    if (this.textStyle) {
      this.textStyle.setCanvasStyle(ctx);
    }
    if (this.fill) {
      if (this.shadow) {
        this.shadow.setStyleCanvas(ctx);
      }
      if (this.pattern) {
        this.pattern.setStyleCanvas(ctx);
      }
      if (this.color) {
        ctx.fillStyle = this.color.toColorCanvas();
      }
    } else {
      if (this.color) {
        ctx.strokeStyle = this.color.toColorCanvas();
      }
      if (this.lineStyle) {
        this.lineStyle.setCanvasStyle(ctx);
      }
    }
  }
}
