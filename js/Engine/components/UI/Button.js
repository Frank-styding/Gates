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
    this.color = color;
    this.text = "hola";
    this.renderDisplay();
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
    this.display.text(
      this.state.getPropiety("width") / 2,
      this.state.getPropiety("height") / 2,
      this.text,
      "20px Roboto",
      new Color(255, 255, 255, 255)
    );
  }
}
