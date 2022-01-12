class C_Circle extends Component {
  constructor(r, color) {
    super();
    this.display = new Display({ width: 2 * r, height: 2 * r });
    this.collider = new CircleCollider(this.pos, r);
    this.collider.setTransform(this.transform);
    this.state.setPropiety("r", () => r);
    this.state.setPropiety("color", () => color);
    this.#render();
    this.#initState();
  }
  #initState() {
    this.state.addUpdateFuncs((name) => {
      if (name != "color") return;
      this.#render();
    });
    this.state.addUpdateFuncs((name) => {
      if (name != "r") return;
      this.display.setDim(
        this.state.getPropiety("r") * 2,
        this.state.getPropiety("r") * 2
      );
      this.collider.setRadius(this.state.getPropiety("r"));
      this.#render();
    });
  }
  #render() {
    //this.display.background(new Color(255, 0, 0, 255));
    this.display.circle(
      this.state.getPropiety("r"),
      this.state.getPropiety("r"),
      this.state.getPropiety("r"),
      this.state.getPropiety("color")
    );
  }
  mouseOver() {
    console.log("hola");
  }
}
