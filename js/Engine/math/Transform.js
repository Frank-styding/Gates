class Transform {
  constructor() {
    this.model = new Matrix3x3.M_identity();
    this.parentTransform = undefined;
  }
  setParentTransform(transform) {
    this.parentTransform = transform;
  }
  getTransformMatrix() {
    if (this.parentTransform != undefined) {
      return Matrix3x3.mul(
        this.parentTransform.getTransformMatrix(),
        this.model
      );
    }
    return this.model;
  }
  copy() {
    let transform = new Transform();
    transform.model = this.model.copy();
    transform.parentTranform = this.parentTransform
      ? this.parentTransform.copy()
      : undefined;
    return transform;
  }
  clone(transform) {
    this.model = transform.model.copy();
    this.parentTransform = transform.parentTransform.copy();
    return this;
  }
}
