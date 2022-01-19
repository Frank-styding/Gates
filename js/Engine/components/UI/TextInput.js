class TextInput extends Component {
  constructor(name, width, height) {
    super(name);
    this.collider = new RectCollider(this.pos, width, height, 0);
    this.collider.setTransform(this.transform);
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
      lineStyle: new DisplayStyle({
        fill: true,
        color: new Color(255, 0, 0, 255),
      }),
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
    this.state.addUpdatePropietyFuncs("value", (value) => {
      console.log(value);
      this._render();
    });
    this.state.addUpdatePropietyFuncs("idx", (idx) => {
      const { width, value, textStyle, offsetX } =
        this.state.getPropietiesValues();

      const valueWidth =
        getCanvasTextWidth(value.slice(0, idx), textStyle.textStyle.font) -
        offsetX -
        width;

      if (valueWidth > 0) {
        this.state.setPropiety("offsetX", () => offsetX + valueWidth);
      }

      if (valueWidth < -width) {
        this.state.setPropiety("offsetX", () => offsetX + (valueWidth + width));
      }

      this._render();
    });
  }
  _render() {
    const { width, height, style, textStyle, value, idx, lineStyle, offsetX } =
      this.state.getPropietiesValues();

    this.display.clear();
    this.display.text(-offsetX, height / 2, value, textStyle);
    this.display.rect(
      getCanvasTextWidth(value.slice(0, idx), textStyle.textStyle.font) -
        offsetX,
      height / 2,
      2,
      height,
      lineStyle
    );
    this.display.rect(width / 2, height / 2, width, height, style);
  }

  _keyDown(e) {
    const code = e.event.keyCode;
    const { value, idx } = this.state.getPropietiesValues();

    if (code == 8) {
      if (idx - 1 >= 0) {
        this.state.setPropiety("value", () => {
          let aux = value.slice(0, idx - 1) + value.slice(idx, value.length);
          this.state.setPropiety("idx", () => idx - 1);
          return aux;
        });
      }
    }

    if ((code >= 65 && code <= 90) || code == 32) {
      this.state.setPropiety("value", () => {
        //return value + e.event.key;
        let aux =
          value.slice(0, idx) + e.event.key + value.slice(idx, value.length);

        if (idx + 1 <= aux.length) {
          this.state.setPropiety("idx", () => idx + 1);
        }
        return aux;
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
  }
  _mouseDown(e) {
    const { offsetX, width, value, textStyle } =
      this.state.getPropietiesValues();
    const dx = e.x - this.pos.x + width / 2 + offsetX;

    let idx = -1;
    let size = 0;
    for (let char of value) {
      if (size < dx) {
        size += getCanvasTextWidth(char, textStyle.textStyle.font);
        idx++;
      }
    }

    if (getCanvasTextWidth(value, textStyle.textStyle.font) < dx) {
      idx++;
    }

    this.state.setPropiety("idx", () => idx);
  }
}
