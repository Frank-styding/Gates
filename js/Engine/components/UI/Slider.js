class C_Slider extends Component {
  constructor(name, value, maxValue, width, height) {
    super(name);
    this.display = new Display({ width, height });
    this.collider = new RectCollider(this.pos, width, height, 0);
    this.collider.setTransform(this.transform);

    this.state.initPropietiesValues({
      value: value,
      maxValue: maxValue,
      width: width,
      height: height,
      style: new DisplayStyle({
        fill: true,
        color: new Color(150, 150, 150, 255),
      }),
      indicatorStyle: new DisplayStyle({
        fill: true,
        color: new Color(0, 0, 0, 255),
      }),
    });

    this._initState();
    this._render();
  }
  _initState() {
    this.state.addUpdateFuncs((name) => {
      if (["value", "width", "height"].indexOf(name) == -1) return;
      const { width, height } = this.state.getPropietiesValues();
      this.collider.set(width, height, 0);
      this.display.setDim(width, height);
      this._render();
    });
    this.state.addUpdateFuncs((name) => {
      if (["value", "maxValue"].indexOf(name) == -1) return;
      this._render();
    });
  }
  _render() {
    const { width, height, style, indicatorStyle, value, maxValue } =
      this.state.getPropietiesValues();
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
    this.setValueByEvent(e);
  }
  _mouseDown(e) {
    this.setValueByEvent(e);
  }
  setValueByEvent(e) {
    if (e.mouseIsDown) {
      const { width, maxValue } = this.state.getPropietiesValues();

      let v = this.transform.model.mulByVector(
        new Vector2(e.x - this.pos.x, this.pos.y - e.y),
        0
      );

      let value = Math.floor((v.x + width / 2) / (width / (maxValue + 1)));

      if (value >= 0 && value <= maxValue) {
        this.state.setPropiety("value", () => value);
      }
    }
  }
}
