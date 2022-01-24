class CircleCollider extends Collider {
  constructor(pos, r) {
    super(pos);
    this.r = r;
    this.className = "CircleCollider";
  }
  set(r) {
    this.radius = r;
  }
  pointIsInside(x, y) {
    return (this.pos.x - x) ** 2 + (this.pos.y - y) ** 2 <= this.r * this.r;
  }
}
