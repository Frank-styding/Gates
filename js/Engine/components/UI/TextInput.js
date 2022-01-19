class TextInput extends Component {
  constructor(name, width, height) {
    super(name);
    this.collider = new RectCollider(this.pos, width, height, 0);
    this.display = new Display({ width, height });

    this.state.initPropietiesValues({
      width: width,
      height: height,
      value: "",
      idx: 0,
      offsetX: 0,
      style: new DisplayStyle({ fill: false, color: new Color(0, 0, 0, 255) }),
      textStyle: new DisplayStyle({
        textStyle: new TextStyle({
          textAlign: "left",
          textBaseline: "middle",
          font: `${height}px roboto`,
        }),
      }),
      lineStyle: new DisplayStyle(),
    });

    this._initState();
    this._render();
  }
  _initState() {
    this.state.addUpdateFuncs((name) => {
      if (["width", "height"].indexOf(name) == -1) return;
      const { width, height, textStyle } = this.state.getPropietiesValues();

      this.collider.set(width, height, 0);
      this.display.setDim(width, height);

      textStyle.textStyle.font = `${height}px roboto`;

      this._render();
    });
    this.state.addUpdatePropietyFuncs("value", () => {
      this._render();
    });
    this.state.addUpdatePropietyFuncs("idx", () => {
      this._render();
    });
  }
  _render() {
    const { width, height, style, textStyle, value, idx, lineStyle } =
      this.state.getPropietiesValues();

    this.display.clear();
    this.display.rect(width / 2, height / 2, width, height, style);
    this.display.text(0, height / 2, value, textStyle);
  }

  _keyDown(e) {
    const code = e.event.keyCode;
    const { value, idx } = this.state.getPropietiesValues();

    if (code == 8) {
      this.state.setPropiety("value", () => {
        return value.slice(0, idx - 1) + value.slice(idx, value.length);
      });
      return;
    }

    if ((code >= 65 && code <= 90) || code == 32) {
      this.state.setPropiety("value", () => {
        return value + e.event.key;
      });
    }

    if (code == 39) {
      let { value, idx } = this.state.getPropietiesValues();
      if (idx + 1 <= value.length) {
        this.state.setPropiety("idx", () => idx + 1);
      }
    }
    if (code == 37) {
      let { idx } = this.state.getPropietiesValues();
      if (idx - 1 >= 0) {
        this.state.setPropiety("idx", () => idx - 1);
      }
    }
    //console.log(this.state.getPropiety("idx"));
  }
}
