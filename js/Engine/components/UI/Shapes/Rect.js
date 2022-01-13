class C_Rect extends Component {
  constructor(name, width, height) {
    super(name);
    this.collider = new RectCollider(this.pos, width, height);
    this.collider.setTransform(this.transform);
    this.display = new Display({ width, height });
    this.state.setPropiety("width", () => width);
    this.state.setPropiety("height", () => height);
    this._initState();
    this._render();
  }
  _initState() {
    this.state.addUpdateFuncs((name) => {
      if (["width", "height"].indexOf(name) == -1) return;
      this.display.setDim(
        this.state.getPropiety("width"),
        this.state.getPropiety("height")
      );
      this.collider.set(
        this.state.getPropiety("width"),
        this.state.getPropiety("height")
      );
      this._render();
    });
  }
  _render() {
    this.display.background(
      new DisplayStyle({ fill: true, color: new Color(255, 0, 0, 255) })
    );
  }
}
