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
    return (
      this.pos.x - this.width / 2 <= x &&
      this.pos.x + this.width / 2 >= x &&
      this.pos.y - this.height / 2 <= y &&
      this.pos.y + this.height / 2 >= y
    );
  }
}
