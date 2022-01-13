class Matrix3x3 {
  constructor(data = [1, 0, 0, 0, 1, 0, 0, 0, 1]) {
    this.data = data;
    this.className = "Matrix3x3";
  }
  identity() {
    this.data = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  }
  rotate(angle) {
    let cos = Math.cos((angle * Math.PI) / 180);
    let sin = Math.sin((angle * Math.PI) / 180);
    return this.mul(new Matrix3x3([cos, sin, 0, -sin, cos, 0, 0, 0, 1]));
  }
  scale(x, y) {
    return this.mul(new Matrix3x3([x, 0, 0, 0, y, 0, 0, 0, 1]));
  }
  translate(x, y) {
    return this.mul(new Matrix3x3([1, 0, x, 0, 1, y, 0, 0, 1]));
  }
  mul(m) {
    this.data = Matrix3x3.mul(this, m).data;
    return this;
  }
  mulByVector(v, z = 1) {
    return new Vector2(
      this.data[0] * v.x + this.data[1] * v.y + this.data[2] * z,
      this.data[3] * v.x + this.data[4] * v.y + this.data[5] * z
    );
  }
  getTranslation() {
    return new Vector2(this.data[2], this.data[5]);
  }
  setCanvasTransform(ctx) {
    ctx.transform(
      this.data[0],
      this.data[3],
      this.data[1],
      this.data[4],
      this.data[2],
      this.data[5]
    );
  }
  copy() {
    return new Matrix3x3(this.data.slice());
  }

  static mul(m, m1) {
    let d = new Array(9).fill(0);
    let d1 = m.data;
    let d2 = m1.data;
    d[0] = d1[0] * d2[0] + d1[1] * d2[3] + d1[2] * d2[6];
    d[1] = d1[0] * d2[1] + d1[1] * d2[4] + d1[2] * d2[7];
    d[2] = d1[0] * d2[2] + d1[1] * d2[5] + d1[2] * d2[8];

    d[3] = d1[3] * d2[0] + d1[4] * d2[3] + d1[5] * d2[6];
    d[4] = d1[3] * d2[1] + d1[4] * d2[4] + d1[5] * d2[7];
    d[5] = d1[3] * d2[2] + d1[4] * d2[5] + d1[5] * d2[8];

    d[6] = d1[6] * d2[0] + d1[7] * d2[3] + d1[8] * d2[6];
    d[7] = d1[6] * d2[1] + d1[7] * d2[4] + d1[8] * d2[7];
    d[8] = d1[6] * d2[2] + d1[7] * d2[5] + d1[8] * d2[8];
    return new Matrix3x3(d);
  }
}
