class Component {
  constructor() {
    this.className = "Component";
    this.pos = new Vector2(0, 0);
    this.state = new State();
    this.transform = new Transform();
    this.display = undefined;
    this.collider = undefined;
    this.childs = [];
    this.parent = undefined;
    this.initState();
  }
  initState() {}
  addChlid(child) {
    child.parent = this;
    this.chlids.push(child);
  }
  _update() {
    //this.pos.clone(this.transform.getTransform().getTranslation());
  }
  udpate() {}
}
