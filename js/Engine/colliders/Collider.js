class Collider {
  constructor(pos) {
    this.pos = pos;
    this.transform = undefined;
    this.className = "Collider";
  }
  setTransform(transform) {
    this.transform = transform;
  }
  mouseIsInside(x, y) {
    return false;
  }
}
