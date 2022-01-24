class Pattern {
  constructor(image, type) {
    this.image = image;
    this.type = type;
  }
  setToContext(ctx) {
    return ctx.createContext(this.image, this.type);
  }
}
