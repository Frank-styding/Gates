class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.className = "Vector2";
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  add_v(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }
  sub_v(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }
  mul_v(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  }
  div_v(vector) {
    this.x /= vector.x;
    this.y /= vector.y;
    return this;
  }

  add_s(scalar) {
    this.x += scalar;
    this.y += scalar;
    return this;
  }
  sub_s(scalar) {
    this.x -= scalar;
    this.y -= scalar;
    return this;
  }
  mul_s(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  div_s(scalar) {
    this.x /= scalar;
    this.y /= scalar;
    return this;
  }

  add(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }
  sub(x, y) {
    this.x -= x;
    this.y -= y;
    return this;
  }
  mul(x, y) {
    this.x *= x;
    this.y *= y;
    return this;
  }
  div(x, y) {
    this.x /= x;
    this.y /= y;
    return this;
  }
  lenght() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
  clone(vector) {
    this.x = vector.x;
    this.y = vector.y;
    return this;
  }
}
