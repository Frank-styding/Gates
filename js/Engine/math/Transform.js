class Transform {
  constructor() {
    this.world = new Matrix3x3();
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
    return Matrix3x3.mul(this.world, this.model);
  }
  getRelativeTransform() {
    let m = this.parentTranform.getTransform();
    let a = this.model.copy();
    a = a.setTranslation(a.copy().getTranslation());
    //console.log(m, a);
    return a;
  }
}
