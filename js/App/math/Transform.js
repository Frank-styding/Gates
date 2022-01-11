class Transform {
  constructor() {
    this.world = new Matrix3x3();
    this.model = new Matrix3x3();
  }
  setWorld(world) {
    this.world = world;
  }
  getTransform() {
    return Matrix3x3.mul(this.world, this.model);
  }
  equal(transform) {}
}
