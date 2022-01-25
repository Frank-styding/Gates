class Component {
  constructor() {
    this.display = undefined;
    this.collider = undefined;

    this.transform = new State(new Transform());
    this.pos = new State(new Vector2());

    this.childs = [];
    this.parent = undefined;

    this.transform.addUpdateFunc(() => {
      this.pos.value = (pos) => {
        //pos.copy(this.transform.value.getTransformMatrix().getTranslation());
        console.log(pos)
        /* console.log(this.transform.value.getTransformMatrix())
        pos.copy(value.getTransformMatrix().getTranslation()); */
        return pos;
      };
    });
  }

  initUpdateFuncs(){}
  update() {}
  render() {}

  setCollider(collider) {
    collider.pos = this.pos.value;
    collider.transform = this.transform.value;
    this.collider = new State(collider);
  }

  addChild(child) {
    child.parent = this;
    
    child.transform.value = (transform) => {
      transform.setParentTransform(this.transform);
      return transform;
    };

    this.childs.push(child);
  }
}
