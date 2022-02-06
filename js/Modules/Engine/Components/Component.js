class Component {
  static ID = -1;
  constructor() {
    Component.ID++;

    this.id = Component.ID;
    this.name = "";

    this.display = undefined;
    this.collider = new State(undefined);
    this.transform = new State(new Transform());
    this.pos = new State(new Vector2());

    this.childs = [];
    this.parent = undefined;

    this.hasMouseInteraction = true;
    this.hasKeyboardInteraction = true;

    this.events = {
      keyDown: [],
      keyPress: [],
      keyUp: [],
      mouseDown: [],
      mouseUp: [],
      mouseMove: [],
      mouseLeave: [],
      mouseOver: [],
    };
  }

  addEvents(type, func) {
    this.events[type].push(func);
  }

  //mouse event
  mouseDown(e) {
    this._mouseDown(e);
    this.events.mouseDown.forEach((func) => func({ ...e, target: this }));
  }
  mouseUp(e) {
    this._mouseUp(e);
    this.events.mouseUp.forEach((func) => func({ ...e, target: this }));
  }
  mouseMove(e) {
    this._mouseMove(e);
    this.events.mouseMove.forEach((func) => func({ ...e, target: this }));
  }
  mouseLeave(e) {
    this._mouseLeave(e);
    this.events.mouseLeave.forEach((func) => func({ ...e, target: this }));
  }
  mouseOver(e) {
    this._mouseOver(e);
    this.events.mouseOver.forEach((func) => func({ ...e, target: this }));
  }

  //mouseEvent inside
  _mouseUp() {}
  _mouseDown() {}
  _mouseMove() {}
  _mouseLeave() {}
  _mouseOver() {}

  //keyboard event
  keyDown(e) {
    this._keyDown(e);
    this.events.keyDown.forEach((func) => func({ ...e, ...this }));
  }
  keyPress(e) {
    this._keyPress(e);
    this.events.keyPress.forEach((func) => func({ ...e, ...this }));
  }
  keyUp(e) {
    this._keyUp(e);
    this.events.keyUp.forEach((func) => func({ ...e, ...this }));
  }

  //keyboard event inside
  _keyDown() {}
  _keyPress() {}
  _keyUp() {}

  loadUpdateFuncs() {}

  _update() {}
  update() {
    this._update();

    this.pos.setValue(
      this.pos
        .getValue()
        .copy(this.transform.getValue().getTransformMatrix().getTranslation())
    );

    this.childs.forEach((child) => child.update());
  }

  render() {}

  setCollider(collider) {
    collider.pos = this.pos.getValue();
    collider.transform = this.transform.getValue();
    this.collider.setValue(() => collider);
  }

  addChild(child) {
    child.parent = this;

    child.transform.setValue((transform) => {
      transform.setParentTransform(this.transform.getValue());
      return transform;
    });

    this.childs.push(child);
  }
}