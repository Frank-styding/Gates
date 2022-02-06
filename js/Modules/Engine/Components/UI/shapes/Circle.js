class C_Circle extends Component {
  constructor(radius) {
    super();
    this.display = new Display({ width: radius * 2, height: radius * 2 });
    this.radius = new State(radius);
    this.backgroudStyle = new State(
      new DisplayStyle({
        fill: true,
        color: new Color(157, 161, 158),
      })
    );
    this.setCollider(new CircleCollider(radius));
    this.initUpdateFuncs();
    this.render();
  }
  initUpdateFuncs() {
    this.radius.onUpdate(() => {
      this.display.setDim(
        this.radius.getValue() * 2,
        this.radius.getValue() * 2
      );
      this.collider.getValue().set(this.radius.getValue());
      this.render();
    });
    this.backgroudStyle.onUpdate(() => {
      this.render();
    });
  }
  _mouseDown() {
    console.log("hola");
  }
  render() {
    this.display.clear();
    this.display.circle(
      this.radius.getValue(),
      this.radius.getValue(),
      this.radius.getValue(),
      this.backgroudStyle.getValue()
    );
  }
}
