class Component {
  constructor() {
    this.collider = new Collider();

    this.transform = new State(new Transform());
    this.pos = new Vector2();

    this.childs = [];
    this.parent = undefined;

    this.width = 0;
    this.height = 0;

    this.transform.addUpdateFunc(() => {
      this.pos.copy(this.transform.value.getTransformMatrix().getTranslation());
    });
  }
  setCollider(collider) {
    this.collider = collider;
    this.collider.pos = this.pos;
    this.collider.transform = this.transform;
  }
  update() {}
  render() {}

  addChild(child) {
    child.parent = this;
    child.transform.value = (value) => {
      value.setParentTransform(this.transform);
    };
    this.childs.push(child);
  }
}
