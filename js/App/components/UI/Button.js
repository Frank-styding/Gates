class C_Button extends Component {
  constructor(width, height, color) {
    super();
    this.className = "C_Button";
    this.state.setPropiety("width", () => width);
    this.state.setPropiety("height", () => height);
    this.state.setPropiety("color", () => color);
    this.display = new Display({ width, height });
    this.collider = new RectCollider(this.pos, width, height);
    this.collider.setTransform(this.transform);
    this.display.background(color);
    this.color = color;
    this.initState();
  }
  initState() {
    this.state.addUpdateFuncs((name) => {
      if (["width", "height", "color"].indexOf(name) == -1) return;
      this.collider.width = this.state.getPropiety("width");
      this.collider.height = this.state.getPropiety("height");
      this.display.setDim(
        this.state.getPropiety("width"),
        this.state.getPropiety("height")
      );
      this.renderDisplay();
    });
    /* z */
  }
  renderDisplay() {
    this.display.background(this.color);
  }
}
