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
  }

  initState() {}
  renderDisplay() {}

  addChlid(child) {
    child.parent = this;
    this.chlids.push(child);
  }
  _update() {
    this.pos.clone(this.transform.getTransform().getTranslation());
  }
  udpate() {}
}
