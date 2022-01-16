class RectCollider extends Collider {
  constructor(pos, width, height, borderRadius) {
    super(pos);
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.className = "RectCollider";
  }
  set(width, height, borderRadius) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
  }
  mouseIsInside(x, y) {
    let v = new Vector2(x - this.pos.x, y - this.pos.y);
    v = this.transform.getTransform().mulByVector(v, 0);

    let insideRect =
      (-this.width / 2 <= v.x &&
        v.x <= this.width / 2 &&
        -this.height / 2 + this.borderRadius <= v.y &&
        v.y <= this.height / 2 - this.borderRadiu) ||
      (-this.width / 2 + this.borderRadius <= v.x &&
        v.x <= this.width / 2 - this.borderRadius &&
        -this.height / 2 <= v.y &&
        v.y <= this.height / 2) ||
      (this.width - v.x) ** 2 + (this.height - v.y) ** 2 <= this.borderRadius ||
      (-this.width - v.x) ** 2 + (this.height - v.y) ** 2 <= this.borderRadius ||
      (this.width - v.x) ** 2 + (-this.height - v.y) ** 2 <= this.borderRadius ||
      (-this.width - v.x) ** 2 + (-this.height - v.y) ** 2 <= this.borderRadius;

    return insideRect;
  }
}
