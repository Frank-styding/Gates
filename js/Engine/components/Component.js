class Component {
  constructor() {
    this.display = undefined;

    this.collider = new State(undefined);
    this.transform = new State(new Transform());
    this.pos = new State(new Vector2());

    this.childs = [];
    this.parent = undefined;

    this.transform.addUpdateFunc(() => {
      this.pos.setValue((pos) => {
        pos.copy(this.transform.value.getTransformMatrix().getTranslation());
        return pos;
      });
    });
  }

  //keyboard
  keyDown() {}
  keyPress() {}
  keyUp() {}

  //mouse
  mouseDown() {}
  mouseUp() {}
  mouseMove() {}
  mouseLeave() {}
  mouseOver() {}

  initUpdateFuncs() {}
  update() {}
  render() {}

  setCollider(collider) {
    collider.pos = this.pos.value;
    collider.transform = this.transform.value;
    this.collider.setValue(() => collider);
  }

  addChild(child) {
    child.parent = this;

    child.transform.setValue((transform) => {
      transform.setParentTransform(this.transform.value);
      return transform;
    });

    this.childs.push(child);
  }
}
