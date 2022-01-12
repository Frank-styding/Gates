class Component {
  constructor() {
    this.className = "Component";
    this.state = new State();
    this.pos = new Vector2(0, 0);
    this.transform = new Transform();
    this.display = undefined;
    this.collider = undefined;
    this.childs = [];
    this.parent = undefined;

    this.state.setPropiety("transform", () => this.transform);
    this.state.addUpdatePropietyFuncs("transform", () => {
      this.pos.clone(this.transform.getTransform().getTranslation());
    });
    this.pos.clone(this.transform.getTransform().getTranslation());
  }

  //mouse
  mouseDown() {}
  mouseUp() {}
  mouseMove() {}
  mouseOver() {}
  mouseLeave() {}

  #initState() {}
  #render() {}
  #update() {}

  update() {
    for (let child of this.childs) {
      child.update();
      if (this.display != undefined) {
        this.display.renderComponent(child, true);
      }
    }
    this.#update();
  }

  addChlid(child) {
    child.parent = this;
    child.state.setPropiety("transform", (transform) => {
      transform.setParentTransform(this.transform);
    });
    this.childs.push(child);
  }
}
