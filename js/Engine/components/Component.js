class Component {
  static ID = -1;
  constructor(name) {
    this.className = "Component";
    Component.ID++;

    this.name = name;
    this.id = Component.ID;

    this.parent = undefined;
    this.childs = [];

    this.transform = new Transform();
    this.pos = new Vector2(0, 0);

    this.state = new State();
    this.display = undefined;
    this.collider = undefined;

    this.state.setPropiety("transform", () => this.transform);
    this.state.addUpdatePropietyFuncs("transform", () => {
      this.pos.clone(this.transform.getTransform().getTranslation());
    });
    this.pos.clone(this.transform.getTransform().getTranslation());
  }

  //mouse
  _mouseDown() {}
  mouseDown(e) {
    this._mouseDown();
  }
  _mouseUp() {}
  mouseUp(e) {
    this._mouseUp();
  }
  _mouseMove() {}
  mouseMove(e) {
    this._mouseMove();
  }
  _mouseOver() {}
  mouseOver(e) {
    this._mouseOver();
  }
  _mouseLeave() {}
  mouseLeave(e) {
    this._mouseLeave();
  }

  _initState() {}
  _render() {}
  _update() {}

  update() {
    this.pos.clone(this.transform.getTransform().getTranslation());
    for (let child of this.childs) {
      child.update();
      if (this.display != undefined) {
        this.display.renderComponent(child, true, true);
      }
    }
    this._update();
  }
  addChlid(child) {
    child.parent = this;
    child.state.setPropiety("transform", (transform) => {
      transform.setParentTransform(this.transform);
    });
    this.childs.push(child);
  }
}
