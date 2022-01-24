class KeyboardController {
  constructor() {
    this.buttonState = {};
    this.preButtonState = {};
    this.events = { down: [], press: [], up: [] };
  }
  //handler
  keyDownHandler() {
    return this.keyDown.bind(this);
  }
  keyPressHandler() {
    return this.keyPress.bind(this);
  }
  keyUpHandler() {
    return this.keyUp.bind(this);
  }
  //event
  keyDown(e) {
    if (this.preButtonState[e.code] != this.buttonState[e.code]) {
      this.preButtonState[e.code] = this.buttonState[e.code];
    }
    this.buttonState[e.code] = true;
    this.events.down.forEach((func) => {
      func(this.getContext(e));
    });
  }
  keyPress(e) {
    if (this.preButtonState[e.code] != this.buttonState[e.code]) {
      this.preButtonState[e.code] = this.buttonState[e.code];
    }
    this.buttonState[e.code] = true;
    this.events.press.forEach((func) => {
      func(this.getContext(e));
    });
  }
  keyUp(e) {
    if (this.buttonState[e.code] != this.buttonState[e.code]) {
      this.preButtonState[e.code] = this.buttonState[e.code];
    }
    this.buttonState[e.code] = false;
    this.events.up.forEach((func) => {
      func(this.getContext(e));
    });
  }

  addEvent(type, func) {
    this.events[type].push(func);
  }

  getContext(e) {
    return {
      event: e,
      preButtonState: this.preButtonState,
      buttonState: this.buttonState,
    };
  }

  /*  setKeyBoardInteraction(component) {
    let l = [];

    let findChidls = (component) => {
      l.push(component);
      component.childs.forEach((item) => findChidls(item));
    };

    findChidls(component);

    this.events.down.push((e) => {
      l.forEach((item) => {
        item.keyDown(e);
      });
    });
    this.events.press.push((e) => {
      l.forEach((item) => {
        item.keyPress(e);
      });
    });
    this.events.up.push((e) => {
      l.forEach((item) => {
        item.keyUp(e);
      });
    });
  } */
}
