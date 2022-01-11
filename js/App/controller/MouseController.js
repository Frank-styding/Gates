class MouseController {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.mosueIsDown = false;
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
    this.mosueIsDown = true;
    this.event.down.forEach((item) => item(this.getContext(e)));
  }
  mouseUp(e) {
    this.mouseisDown = false;
    this.event.up.forEach((item) => item(this.getContext(e)));
  }
  mouseMove(e) {
    this.x = e.offsetX;
    this.y = e.offsetY;
    this.event.move.forEach((item) => item(this.getContext(e)));
  }
  getContext(e) {
    return {
      ...e,
      x: this.x,
      y: this.y,
      mouseIsDown: this.mouseIsDown,
    };
  }
}
