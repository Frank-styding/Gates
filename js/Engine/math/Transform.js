class Transform {
  constructor() {
    this.model = new Matrix3x3();
    this.parentTranform = undefined;
  }
  setParentTransform(transform) {
    this.parentTranform = transform;
  }
  getTransform() {
    if (this.parentTranform != undefined) {
      return Matrix3x3.mul(this.parentTranform.getTransform(), this.model);
    }
    return this.model;
  }
}
