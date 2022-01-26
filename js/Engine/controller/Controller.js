class Controller {
  constructor(template) {
    this.template = template;
    this.mouse = new MouseController();
    this.keyboard = new KeyboardController();
    this.addEvents();
  }

  addEvents() {
    this.template.addEventListener("mousedown", this.mouse.mouseDownHandler());
    this.template.addEventListener("mouseup", this.mouse.mouseUpHandler());
    this.template.addEventListener("mousemove", this.mouse.mouseMoveHandler());
    addEventListener("keydown", this.keyboard.keyDownHandler());
    addEventListener("keypress", this.keyboard.keyPressHandler());
    addEventListener("keyup", this.keyboard.keyUpHandler());
  }
  setMouseInteracion(component) {
    let findSelection = (component, x, y) => {
      for (let child of component.childs) {
        let aux = findSelection(child, x, y);
        if (aux != undefined) {
          return aux;
        }
      }
      if (component.collider.value != undefined) {
        if (component.collider.value.pointIsInside(x, y)) {
          return component;
        }
      }
      return undefined;
    };

    let selectedComponent, lastSelectedComponent, event;
    this.mouse.events.down.push((e) => {
      event = e;
      if (selectedComponent != undefined) {
        selectedComponent.mouseDown(e);
      }
    });

    this.mouse.events.up.push((e) => {
      event = e;
      if (selectedComponent != undefined) {
        selectedComponent.mouseUp(e);
      }
    });

    this.mouse.events.move.push((e) => {
      event = e;
      if (selectedComponent != undefined) {
        selectedComponent.mouseMove(e);
      }
    });

    setInterval(() => {
      selectedComponent = findSelection(component, this.mouse.x, this.mouse.y);
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
  setKeyBoardInteraction(component) {
    let subComponents = [];

    let findChidls = (component) => {
      subComponents.push(component);
      component.childs.forEach((item) => findChidls(item));
    };

    findChidls(component);

    this.keyboard.events.down.push((event) => {
      subComponents.forEach((subComponent) => {
        subComponent.keyDown(event);
      });
    });
    this.keyboard.events.press.push((event) => {
      subComponents.forEach((subComponent) => {
        subComponent.keyPress(event);
      });
    });
    this.keyboard.events.up.push((event) => {
      subComponents.forEach((subComponent) => {
        subComponent.keyUp(event);
      });
    });
  }
}
