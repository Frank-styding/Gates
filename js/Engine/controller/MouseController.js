class MouseController {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.mouseIsDown = false;
    this.events = { down: [], move: [], up: [] };
  }
  mouseDownHandler() {
    return this.mouseDown.bind(this);
  }
  mouseUpHandler() {
    return this.mouseUp.bind(this);
  }
  mouseMoveHandler() {
    return this.mouseMove.bind(this);
  }
  mouseDown(e) {
    this.mouseIsDown = true;
    this.x = e.offsetX;
    this.y = e.offsetY;
    this.events.down.forEach((item) => item(this.getContext(e)));
  }
  mouseUp(e) {
    this.mouseIsDown = false;
    this.x = e.offsetX;
    this.y = e.offsetY;
    this.events.up.forEach((item) => item(this.getContext(e)));
  }
  mouseMove(e) {
    this.x = e.offsetX;
    this.y = e.offsetY;
    this.events.move.forEach((item) => item(this.getContext(e)));
  }
  addEvent(name, func) {
    this.events[name].push(func);
  }
  getContext(e) {
    return {
      mouseEvent: e,
      x: this.x,
      y: this.y,
      mouseIsDown: this.mouseIsDown,
    };
  }
  setMouseInteracion(component) {
    let findSelection = (component, x, y) => {
      for (let child of component.childs) {
        let aux = findSelection(child, x, y);
        if (aux != undefined) {
          return aux;
        }
      }
      if (component.collider != undefined) {
        if (component.collider.mouseIsInside(x, y)) {
          return component;
        }
      }
      return undefined;
    };

    let selectedComponent, lastSelectedComponent, event;
    this.events.down.push((e) => {
      event = e;
      if (selectedComponent != undefined) {
        selectedComponent.mouseDown(e);
      }
    });

    this.events.up.push((e) => {
      event = e;
      if (selectedComponent != undefined) {
        selectedComponent.mouseUp(e);
      }
    });

    this.events.move.push((e) => {
      event = e;
      if (selectedComponent != undefined) {
        selectedComponent.mouseMove(e);
      }
    });
    setInterval(() => {
      selectedComponent = findSelection(component, this.x, this.y);
      if (selectedComponent != lastSelectedComponent) {
        if (lastSelectedComponent != undefined) {
          lastSelectedComponent.mouseLeave(event);
        }
        if (selectedComponent != undefined) {
          selectedComponent.mouseOver(event);
        }
      }
      lastSelectedComponent = selectedComponent;
    }, 1);
  }
}
