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
    this.width = 0;
    this.height = 0;

    this.selectedByMouse = false;

    this.events = {
      mouseDown: [],
      mouseMove: [],
      mouseUp: [],
      mouseOver: [],
      mouseLeave: [],
      keyDown: [],
      keyPress: [],
      keyUp: [],
    };

    this.state.setPropiety("transform", () => this.transform);

    this.state.addUpdatePropietyFuncs("transform", () => {
      this.pos.clone(this.transform.getTransform().getTranslation());
    });
    this.pos.clone(this.transform.getTransform().getTranslation());
  }

  //mouse
  _mouseDown() {}
  mouseDown(e) {
    this.events.mouseDown.forEach((item) => item(e));
    this._mouseDown(e);
  }
  _mouseUp() {}
  mouseUp(e) {
    this.events.mouseUp.forEach((item) => item(e));
    this._mouseUp(e);
  }
  _mouseMove() {}
  mouseMove(e) {
    this.events.mouseMove.forEach((item) => item(e));
    this._mouseMove(e);
  }
  _mouseOver() {}
  mouseOver(e) {
    this.selectedByMouse = true;
    this.events.mouseOver.forEach((item) => item(e));
    this._mouseOver(e);
  }
  _mouseLeave() {}
  mouseLeave(e) {
    this.selectedByMouse = false;
    this.events.mouseLeave.forEach((item) => item(e));
    this._mouseLeave(e);
  }

  _keyDown(e) {}
  keyDown(e) {
    this.events.keyDown.forEach((item) => item(e));
    this._keyDown(e);
  }

  _keyPress(e) {}
  keyPress(e) {
    this.events.keyPress.forEach((item) => item(e));
    this._keyPress(e);
  }

  _keyUp(e) {}
  keyUp(e) {
    this.events.keyUp.forEach((item) => item(e));
    this._keyUp(e);
  }

  addEvents(name, func) {
    this.events[name].push(func);
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
