class C_Button extends Component {
  constructor(width, height, color, text) {
    super();
    this.display = new Display({ width, height });
    this.collider = new RectCollider(this.pos, width, height);
    this.collider.setTransform(this.transform);
    this.state.setPropiety("color", () => color);
    this.state.setPropiety("height", () => height);
    this.state.setPropiety("width", () => width);
    this.state.setPropiety("text", () => text);
    this.#render();
    this.#initState();
  }
  #initState() {
    this.state.addUpdateFuncs((name) => {
      if (["color", "height", "width"].indexOf(name) == -1) return;
      this.collider.set(
        this.state.getPropiety("width"),
        this.state.getPropiety("height")
      );
      this.display.setDim(
        this.state.getPropiety("width"),
        this.state.getPropiety("height")
      );
      this.#render();
    });
    this.state.addUpdateFuncs((name) => {
      if (["text"].indexOf(name) == -1) return;
      this.#render();
    });
  }
  #render() {
    this.display.background(this.state.getPropiety("color"));
    this.display.text(
      this.state.getPropiety("width") / 2,
      this.state.getPropiety("height") / 2,
      this.state.getPropiety("text"),
      "20px Roboto",
      new Color(0, 0, 0, 255)
    );
  }
  mouseOver() {
    console.log("hola");
  }
}
