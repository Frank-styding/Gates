class RectCollider extends Collider {
  constructor(width, height, borderRadius) {
    super();
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
  pointIsInside(x, y) {
    let v = new Vector2(x - this.pos.x, y - this.pos.y);
    if (this.transform) {
      v = Matrix3x3.mulByVector(v, this.transform.getTransformMatrix(), 0);
    }

    let widthSubRadius = this.width / 2 - this.borderRadius;
    let heightSubRadius = this.height / 2 - this.borderRadius;

    let t_l_c = (-widthSubRadius - v.x) ** 2 + (-heightSubRadius - v.y) ** 2;

    let t_r_c = (widthSubRadius - v.x) ** 2 + (-heightSubRadius - v.y) ** 2;

    let b_l_c = (-widthSubRadius - v.x) ** 2 + (heightSubRadius - v.y) ** 2;

    let b_r_c = (widthSubRadius - v.x) ** 2 + (heightSubRadius - v.y) ** 2;

    let inisideCorners = b_l_c || b_r_c || t_l_c || t_r_c;

    let insideRec1 =
      -widthSubRadius <= v.x &&
      v.x <= widthSubRadius &&
      -this.height / 2 <= v.y &&
      v.y <= this.height / 2;

    let insideRec2 =
      -this.width / 2 <= v.x &&
      v.x <= this.width / 2 &&
      -heightSubRadius <= v.y &&
      v.y <= heightSubRadius;

    return insideRec1 || insideRec2 || inisideCorners;
  }
}
