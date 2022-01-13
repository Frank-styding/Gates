class Compositing {
  constructor({ globalAlpha, globalCompositeOperation }) {
    this.globalAlpha = globalAlpha ?? 1.0;
    this.globalCompositeOperation = globalCompositeOperation ?? "source-over";
  }
  setCanvasStyle(ctx) {
    ctx.glovalAlpha = this.globalAlpha;
    ctx.globalCompositeOperation = this.globalCompositeOperation;
  }
}
