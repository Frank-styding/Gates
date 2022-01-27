class C_Conection extends C_Circle {
  constructor(name, radius) {
    super(radius);
    this.name = name;
    this.startRadius = radius;
  }
  _mouseOver() {
    this.radius.setValue(() => this.startRadius + 1);
  }
  _mouseLeave() {
    this.radius.setValue(() => this.startRadius);
  }
}
