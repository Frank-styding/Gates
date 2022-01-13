class C_Circle extends Component {
  constructor(name, r) {
    super(name);
    this.collider = new CircleCollider(this.pos, r);
    this.collider.setTransform(this.transform);

    this.display = new Display({ width: r * 2.5, height: r * 2.5 });
    this.state.setPropiety("radius", () => r);
    this._initState();
    this._render();
  }
  _initState() {
    this.state.addUpdatePropietyFuncs("radius", (radius) => {
      this.display.setDim({ width: radius * 2.5, height: radius * 2.5 });
      this.collider.set(radius);
      this._render();
    });
  }
  _render() {
    let radius = this.state.getPropiety("radius");
    this.display.clear();
    this.display.circle(
      radius * 1.25,
      radius * 1.25,
      radius,
      new DisplayStyle({
        fill: true,
        color: new Color(0, 0, 255, 255),
      })
    );
  }
  _mouseDown() {
    console.log("hola");
  }
}
