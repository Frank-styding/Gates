class C_Slider extends Component {
  constructor(name, value, maxValue, width, height) {
    super(name);
    this.display = new Display({ width, height });
    this.collider = new RectCollider(this.pos, width, height, 0);
    this.collider.setTransform(this.transform);
    this.state.setPropiety(
      "style",
      () => new DisplayStyle({ fill: true, color: new Color(255, 0, 255, 255) })
    );
    this.state.setPropiety(
      "indicator-style",
      () => new DisplayStyle({ fill: true, color: new Color(0, 0, 255, 255) })
    );
    this.state.setPropiety("value", () => value);
    this.state.setPropiety("max-value", () => maxValue);
    this.state.setPropiety("width", () => width);
    this.state.setPropiety("height", () => height);
    this._initState();
    this._render();
  }
  _initState() {
    this.state.addUpdateFuncs((name) => {
      if (["value", "width", "height"].indexOf(name) == -1) return;
      this.collider.set(
        this.state.getPropiety("width"),
        this.state.getPropiety("height"),
        0
      );
      this.display.setDim(
        this.state.getPropiety("width"),
        this.state.getPropiety("height")
      );
      this._render();
    });
    this.state.addUpdateFuncs((name) => {
      if (["value", "max-value"].indexOf(name) == -1) return;
      console.log(this.state.getPropiety("value"));
      this._render();
    });
  }
  _render() {
    const width = this.state.getPropiety("width");
    const height = this.state.getPropiety("height");
    const style = this.state.getPropiety("style");
    const maxValue = this.state.getPropiety("max-value");
    const value = this.state.getPropiety("value");
    const indicatorStyle = this.state.getPropiety("indicator-style");

    this.display.clear();
    this.display.rect(width / 2, height / 2, width, height, style);
    this.display.rect(
      (width / (maxValue + 1)) * (value + 0.5),
      height / 2,
      width / (maxValue + 1),
      height,
      indicatorStyle
    );
  }
  _mouseMove(e) {
    if (e.mouseIsDown) {
      const width = this.state.getPropiety("width");
      const maxValue = this.state.getPropiety("max-value");
      let value = Math.floor(
        (e.x - (this.pos.x - width / 2)) / (width / (maxValue + 1))
      );
      if (value >= 0 && value <= maxValue) {
        this.state.setPropiety("value", () => value);
      }
    }
  }
  _mouseDown(e) {
    if (e.mouseIsDown) {
      const width = this.state.getPropiety("width");
      const maxValue = this.state.getPropiety("max-value");
      let value = Math.floor(
        (e.x - (this.pos.x - width / 2)) / (width / (maxValue + 1))
      );
      if (value >= 0 && value <= maxValue) {
        this.state.setPropiety("value", () => value);
      }
    }
  }
}
