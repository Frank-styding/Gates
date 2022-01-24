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
  setToContext(ctx) {
    this.compositing ?? this.compositing.setToContext(ctx);
    this.filter ?? (ctx.filter = this.filter);
    this.textStyle ?? this.textStyle.setToContext(ctx);

    if (this.fill) {
      this.shadow ?? this.shadow.setToContext(ctx);
      this.pattern ?? this.pattern.setToContext(ctx);
      this.color ?? (ctx.fillStyle = this.color.toCanvasStyle());
    } else {
      this.color ?? (ctx.strokeStyle = this.color.toCanvasStyle());
      this.lineStyle ?? this.lineStyle.setToContext(ctx);
    }
  }
}
