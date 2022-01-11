class Component {
  constructor() {
    this.className = "Component";
    this.pos = new Vector2(0, 0);
    this.state = new State();
    this.transform = new Transform();
    this.collider = undefined;
    this.childs = [];
  }
  _update() {
    this.pos.clone(this.transform.getTransform().getTranslation());
  }
  udpate() {}
}
