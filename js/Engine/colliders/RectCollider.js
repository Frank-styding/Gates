class RectCollider extends Collider {
  constructor(pos, width, height) {
    super(pos);
    this.width = width;
    this.height = height;
    this.className = "RectCollider";
  }
  set(width, height) {
    this.width = width;
    this.height = height;
  }
  mouseIsInside(x, y) {
    let v = new Vector2(x - this.pos.x, y - this.pos.y);
    v = this.transform.getTransform().mulByVector(v, 0);
    return (
      -this.width / 2 <= v.x &&
      v.x <= this.width / 2 &&
      -this.height / 2 <= v.y &&
      v.y <= this.height / 2
    );
  }
}
