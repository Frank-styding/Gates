class TextStyle {
  constructor({ textAlign, textBaseline, font } = {}) {
    this.textAlign = textAlign ?? "center";
    this.textBaseLine = textBaseline ?? "middle";
    this.font = font ?? "15px sans serif";
  }
  setCanvasStyle(ctx) {
    ctx.textAlign = this.textAlign;
    ctx.textBaseline = this.textBaseLine;
    ctx.font = this.font;
  }
}
