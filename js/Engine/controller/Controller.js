class Controller {
  constructor(template) {
    this.template = template;
    this.mouse = new MouseController();
    this.addEvents();
  }
  addEvents() {
    this.template.addEventListener("mousedown", this.mouse.mouseDownHandler());
    this.template.addEventListener("mouseup", this.mouse.mouseUpHandler());
    this.template.addEventListener("mousemove", this.mouse.mouseMoveHandler());
  }
}
